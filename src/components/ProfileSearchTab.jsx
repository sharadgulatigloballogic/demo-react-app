import { useState } from 'react'
import './ProfileSearchTab.css'

function ProfileSearchTab({ onNavigateToIForm }) {
  const [searchParams, setSearchParams] = useState({
    firstName: '',
    lastName: ''
  })

  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    
    if (!searchParams.firstName.trim() && !searchParams.lastName.trim()) {
      return
    }

    setIsSearching(true)
    setHasSearched(true)

    // Simulate API call with dummy data
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Generate dummy search results
      const dummyResults = [
        {
          id: 1,
          firstName: searchParams.firstName || 'John',
          lastName: searchParams.lastName || 'Doe',
          email: 'john.doe@example.com',
          phone: '555-0101',
          position: 'Software Engineer',
          department: 'Engineering'
        },
        {
          id: 2,
          firstName: searchParams.firstName || 'Jane',
          lastName: searchParams.lastName || 'Smith',
          email: 'jane.smith@example.com',
          phone: '555-0102',
          position: 'Product Manager',
          department: 'Product'
        },
        {
          id: 3,
          firstName: searchParams.firstName || 'Michael',
          lastName: searchParams.lastName || 'Johnson',
          email: 'michael.johnson@example.com',
          phone: '555-0103',
          position: 'Designer',
          department: 'Design'
        }
      ]

      setSearchResults(dummyResults)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleReset = () => {
    setSearchParams({
      firstName: '',
      lastName: ''
    })
    setSearchResults([])
    setHasSearched(false)
  }

  return (
    <div className="profile-search-container">
      <div className="search-header">
        <h1>Profile Search</h1>
        <p className="search-subtitle">Search for profiles by first name and last name</p>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <div className="search-fields">
          <div className="search-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={searchParams.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
          </div>

          <div className="search-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={searchParams.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="search-actions">
          <button 
            type="submit" 
            className="search-button"
            disabled={isSearching || (!searchParams.firstName.trim() && !searchParams.lastName.trim())}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
          <button 
            type="button" 
            className="reset-button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>

      {isSearching && (
        <div className="loading-message">
          Searching for profiles...
        </div>
      )}

      {!isSearching && hasSearched && searchResults.length === 0 && (
        <div className="no-results">
          <p>No profiles found matching your search criteria.</p>
        </div>
      )}

      {!isSearching && searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results ({searchResults.length})</h2>
          <div className="results-grid">
            {searchResults.map(profile => (
              <div key={profile.id} className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">
                    {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                  </div>
                  <div className="profile-name">
                    <h3>{profile.firstName} {profile.lastName}</h3>
                    <p className="profile-position">{profile.position}</p>
                  </div>
                </div>
                <div className="profile-details">
                  <div className="profile-detail-item">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{profile.email}</span>
                  </div>
                  <div className="profile-detail-item">
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">{profile.phone}</span>
                  </div>
                  <div className="profile-detail-item">
                    <span className="detail-label">Department:</span>
                    <span className="detail-value">{profile.department}</span>
                  </div>
                </div>
                <div className="profile-actions">
                  <button 
                    className="view-button"
                    onClick={() => onNavigateToIForm(profile)}
                  >
                    Go to iForm
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileSearchTab

