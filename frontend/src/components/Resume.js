import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// PDF Document component
const MyDocument = ({ resumeData }) => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{resumeData.name}</Text>
        <Text style={styles.paragraph}>Email: {resumeData.email}</Text>
        <Text style={styles.paragraph}>Phone: {resumeData.phone}</Text>
        <Text style={styles.paragraph}>Address: {resumeData.address}</Text>
        <Text style={styles.paragraph}>City: {resumeData.city}</Text>
        <Text style={styles.paragraph}>State: {resumeData.state}</Text>
        <Text style={styles.paragraph}>Country: {resumeData.country}</Text>
        <Text style={styles.paragraph}>Postal_Code: {resumeData.postal_code}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {resumeData.education.map((edu, index) => (
          <Text key={index} style={styles.paragraph}>
            {edu.degree} - {edu.college} ({edu.year})
          </Text>
        ))}
      </View>
    
      <View style={styles.section}>
  <Text style={styles.heading}>Certifications</Text>
  {resumeData.certifications.map((cert, index) => (
    <Text key={index} style={styles.paragraph}>
      {cert.certification} - {cert.institution} ({cert.year})
    </Text>
  ))}
</View>

      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        {resumeData.skills.map((skill, index) => (
          <Text key={index} style={styles.paragraph}>
            {skill.title}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        {resumeData.projects.map((project, index) => (
          <Text key={index} style={styles.paragraph}>
            {project.title} at {project.company} ({project.duration})
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        {resumeData.experience.map((exp, index) => (
          <Text key={index} style={styles.paragraph}>
            {exp.title} at {exp.company} ({exp.duration})
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

// Functional component for Resume
const Resume = () => {
  // Define resume data
  const resumeData = {
    name: 'Rahul Dey',
    email: 'deyr279@gmail.com',
    phone: '+91 6290323403',
    address: 'Purbaputiary Chakdah Talbagan, PS-Regent Park',
    city: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    postal_code: '700093',


    //Need to update
    education: [
      { degree: 'B.Sc in Hospitality & Hotel Administration', college: 'NSHM Knowledge Campus Kolkata', year: '2020-2023' },
      // { certification: 'Full Stack Web Development', institution: 'AlmaBetter', year: '2024' },
    ],
    certifications: [
      { certification: 'Full Stack Web Development', institution: 'AlmaBetter', year: '2023-2024' },
    ],

    experience: [
      { title: 'Fresher', company: '-', duration: '-' },
    ],

    // Need to Update
    skills: [
        { title: 'HTML'},
        { title: 'CSS'},
        { title: 'JavaScript'},
        { title: 'BootStrap'},
        { title: 'Tailwind CSS'},
        { title: 'React-JS'},
        { title: 'Next-JS'},
        { title: 'DOM Manupulation'},
        { title: 'Ajax'},
        { title: 'Jquery'},

        { title: 'DSA'},
        { title: 'MongoDB'},
        { title: 'MariaDB'},
        { title: 'Node.js'},
        { title: 'Express.js'},
        { title: 'Git & GitHub'},
        { title: 'Netlify,Vercel'},
        
        { title: 'AWS'},
        { title: 'UI/UX Design'},
        { title: 'Scalable Systems'},
        { title: 'Federated Login & Registration'},
      ],

          // Need to Update
      projects: [
        { title: 'Intoduction to Javascript', company: 'AlmaBetter', duration: '2023' },
        { title: 'DSA', company: 'AlmaBetter', duration: '2023' },
        { title: 'Weather App', company: 'AlmaBetter', duration: '2024' },
        { title: 'Todo App', company: 'AlmaBetter', duration: '2024' },
        { title: 'Flashcard Generator', company: 'AlmaBetter', duration: '2024' },
        { title: 'Get-Youtube-Subscribers', company: 'AlmaBetter', duration: '2024' },
        { title: 'Portfolio Website', company: 'AlmaBetter', duration: '2024' },
      ],
  };

  return (
    <div className='footer-text' style={{ display: 'flex', justifyContent: 'center' }} >
      <PDFDownloadLink document={<MyDocument resumeData={resumeData} />} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : <button className="vvd" onClick={() => console.log("Resume Downloaded")}>
   <span>Download Resume/CV</span>
</button>

        }
      </PDFDownloadLink>
    </div>
  );
};

export default Resume;
