import React, { useState } from 'react';
import { db, collection, addDoc } from '../../firebase'; // Updated imports
import { Helmet } from 'react-helmet';
import './JobOpenings.css';

const JobOpenings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    resume: '',
  });
  const [loading, setLoading] = useState(false); // Add loading state

  // Hardcoded job details
  const jobs = [
    {
      id: 'YSP0001',
      title: 'Digital Marketing Executive Intern',
      description: 'Manage PPC, SEO, and social media for clients.',
      location: 'virtual',
      requirements: 'Experience with PPC, SEO, and social media management.',
      salary: 'Competitive'
    },
    // Add more jobs here if needed
  ];

  // Convert file to Base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Handle application form submission
  const handleApply = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      // No need to upload resume to storage, using Base64 directly
      const resumeBase64 = applicantData.resume;

      await addDoc(collection(db, 'applications'), {
        name: applicantData.name,
        email: applicantData.email,
        resumeBase64,
        jobId: selectedJob,
        createdAt: new Date(),
      });

      alert('Application submitted successfully!');
      setApplicantData({ name: '', email: '', resume: '' });
      setSelectedJob(null);
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicantData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change and convert to Base64
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await convertFileToBase64(file);
        setApplicantData((prev) => ({
          ...prev,
          resume: base64,
        }));
      } catch (error) {
        console.error('Error converting file to Base64:', error);
      }
    }
  };

  // Generate schema markup
  const generateSchema = () => {
    return JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      "title": jobs.find(job => job.id === selectedJob)?.title || "Job Posting",
      "description": jobs.find(job => job.id === selectedJob)?.description || "",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Yesptech",
        "value": selectedJob
      },
      "datePosted": new Date().toISOString(),
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Yesptech",
        "sameAs": "https://www.yesptech.com"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": jobs.find(job => job.id === selectedJob)?.location || "Virtual"
        }
      },
      "employmentType": "INTERN",
      "salaryCurrency": "USD",
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": {
          "@type": "QuantitativeValue",
          "value": jobs.find(job => job.id === selectedJob)?.salary || "Competitive",
          "unitText": "YEAR"
        }
      }
    });
  };

  return (
    <div className="job-openings-container">
      <Helmet>
        <title>Careers at Yesptech</title>
        <meta name="description" content="Explore job opportunities at Yesptech. Apply for our Digital Marketing Executive Intern position and join our team!" />
        <meta name="keywords" content="Yesptech, Job Openings, Digital Marketing Executive Intern, Careers,yesp" />
        <script type="application/ld+json">{generateSchema()}</script>
      </Helmet>

      <h1>Careers at Yesptech</h1>

      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button onClick={() => setSelectedJob(job.id)}>Apply</button>
          </li>
        ))}
      </ul>

      {selectedJob && (
        <div className="job-details">
          {jobs
            .filter(job => job.id === selectedJob)
            .map(job => (
              <div key={job.id}>
                <h2>Job Details</h2>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Requirements:</strong> {job.requirements}</p>
                <p><strong>Salary:</strong> {job.salary}</p>

                <h2>Apply for Job ID: {job.id}</h2>
                <div className="application-form">
                  <form onSubmit={handleApply}>
                    <div>
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={applicantData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={applicantData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Resume</label>
                      <input type="file" name="resume" onChange={handleFileChange} required />
                    </div>
                    <button type="submit" disabled={loading}>
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default JobOpenings;
