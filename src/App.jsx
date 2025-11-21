import { useState } from 'react'
import './App.css'
import ProfileSearchTab from './components/ProfileSearchTab'
import IFormTab from './components/IFormTab'

function App() {
  const [activeTab, setActiveTab] = useState('profile-search')

  const navigateToIForm = (profile) => {
    setActiveTab('iform')
    // You can pass profile data here if needed for pre-filling the form
    console.log('Navigating to iForm with profile:', profile)
  }

  return (
    <div className="app-container">
      <div className="content-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'profile-search' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile-search')}
          >
            Profile Search
          </button>
          <button
            className={`tab-button ${activeTab === 'iform' ? 'active' : ''}`}
            onClick={() => setActiveTab('iform')}
          >
            iForm
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'profile-search' && <ProfileSearchTab onNavigateToIForm={navigateToIForm} />}
          {activeTab === 'iform' && <IFormTab />}
        </div>
      </div>
    </div>
  )
}

export default App
