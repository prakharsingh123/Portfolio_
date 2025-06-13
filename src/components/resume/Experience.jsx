import React from 'react'

const Experience = () => {
  return (
    <div className="edu__content">
    <div className="edu__title">Experience</div>
    <div className="edu__subtitle">
       <div className="experience_1">
       <h3 className="edu__stream">Associate Software Engineer</h3>
       <div className="time__content">
        <h4 className="edu__college">Tech Mahindra</h4>
        <h4 className="edu__time"> <i className="uil-stop-circle"></i> Dec,2023 - present  </h4>
        <h4 className="edu__location"> 
            <i className="uil-location-point"></i> Pune,Maharashtra
        </h4>
        </div>
      <p className="edu__para">Working in Operations at RAIIT Channels, managing frontend issue resolution and contributing to BFF (Backend for Frontend) services. I use ELK for monitoring, handle KPIs, analyze datasets in Adobe Experience Platform, and manage incidents through Helix and Jira.</p>
       </div>
      
       <div className="experience_2">
       <h3 className="edu__stream">Software Engineer Intern</h3>
       <div className="time__content">
        <h4 className="edu__college">LTIMindtree</h4>
        <h4 className="edu__time"> <i className="uil-stop-circle"></i> Feb,2023 - May,2023  </h4>
        <h4 className="edu__location"> 
            <i className="uil-location-point"></i> Remote
        </h4>
        </div>
        <p className="edu__para">Completed internship focused on frontend development, where I built responsive websites using HTML, CSS, and JavaScript.
           Gained hands-on experience in writing C# code, working with .NET framework, and debugging web applications.</p>
       </div>

    </div>
  </div>
  )
}

export default Experience
