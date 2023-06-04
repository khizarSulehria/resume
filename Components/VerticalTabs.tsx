import React, { useState } from 'react';

const VerticalTabs = ({ tabs } : any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index : number) => {
    setActiveTab(index);
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="nav flex-column nav-pills tab-list" id="v-pills-tab" role="tablist" >
          {tabs.map((tab : any, index : number) => (
            <button
              key={index}
              className={`nav-link ${activeTab === index ? 'active' : ''}`}
              id={`v-pills-${tab.label}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#v-pills-${tab.label}`}
              type="button"
              role="tab"
              aria-controls={`v-pills-${tab.label}`}
              aria-selected={activeTab === index}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="col-md-9">
        <div className="tab-content" id="v-pills-tabContent">
          {tabs.map((tab : any, index : number) => (
            <div
              key={index}
              className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
              id={`v-pills-${tab.label}`}
              role="tabpanel"
              aria-labelledby={`v-pills-${tab.label}-tab`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
