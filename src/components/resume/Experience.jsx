import React from 'react'

const Experience = () => {
  return (
    <div className="edu__content">
      <div className="edu__title">Experience</div>

      <div className="edu__subtitle">

        {/* Accenture */}
        <div className="experience_1">
          <h3 className="edu__stream">Packaged App Development Analyst</h3>

          <div className="time__content">
            <h4 className="edu__college">Accenture</h4>
            <h4 className="edu__time">
              <i className="uil-stop-circle"></i> Jul,2026 - Present
            </h4>
            <h4 className="edu__location">
              <i className="uil-location-point"></i> Pune, Maharashtra
            </h4>
          </div>

          <p className="edu__para">
            • Developed backend services using Java, Spring Boot, and REST APIs.
            <br />
            • Worked on plan evaluation, data retrieval, and business rule processing.
          </p>
        </div>

        {/* Tech Mahindra */}
        <div className="experience_2">
          <h3 className="edu__stream">Associate Software Engineer</h3>

          <div className="time__content">
            <h4 className="edu__college">Tech Mahindra</h4>
            <h4 className="edu__time">
              <i className="uil-stop-circle"></i> Dec,2023 - Jun,2026
            </h4>
            <h4 className="edu__location">
              <i className="uil-location-point"></i> Pune, Maharashtra
            </h4>
          </div>

          <p className="edu__para">
            Worked on frontend issue resolution and BFF services.
            Used ELK, Adobe Experience Platform, Helix, and Jira.
          </p>
        </div>

        {/* LTIMindtree */}
        <div className="experience_3">
          <h3 className="edu__stream">Software Engineer Intern</h3>

          <div className="time__content">
            <h4 className="edu__college">LTIMindtree</h4>
            <h4 className="edu__time">
              <i className="uil-stop-circle"></i> Feb,2023 - May,2023
            </h4>
            <h4 className="edu__location">
              <i className="uil-location-point"></i> Remote
            </h4>
          </div>

          <p className="edu__para">
            Built responsive websites using HTML, CSS, and JavaScript.
            Gained experience in C#, .NET, and web application debugging.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Experience