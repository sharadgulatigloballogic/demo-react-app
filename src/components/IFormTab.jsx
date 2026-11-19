import { useState } from 'react'
import './IFormTab.css'

function IFormTab() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleInitial: '',
    otherNames: '',
    addressLine1: '',
    aptNo: '',
    city: '',
    state: '',
    zipCode: '',
    dateOfBirth: '',
    ssn: '',
    email: '',
    phoneNumber: '',
    citizenshipStatus: '',
    uscisNumber: '',
    signatureDate: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Function to capitalize N/A when user tabs out
  const handleNACapitalization = (e) => {
    const { name, value } = e.target
    const trimmedValue = value.trim().toLowerCase()
    
    // Check if the value is "na" or "n/a" in any case combination
    if (trimmedValue === 'na' || trimmedValue === 'n/a') {
      setFormData(prev => ({
        ...prev,
        [name]: 'N/A'
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.addressLine1.trim()) newErrors.addressLine1 = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required'
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Invalid ZIP code format'
    }
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.ssn.trim()) {
      newErrors.ssn = 'SSN is required'
    } else if (!/^\d{3}-?\d{2}-?\d{4}$/.test(formData.ssn)) {
      newErrors.ssn = 'Invalid SSN format (xxx-xx-xxxx)'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!/^\d{3}-?\d{3}-?\d{4}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone format (xxx-xxx-xxxx)'
    }
    if (!formData.citizenshipStatus) newErrors.citizenshipStatus = 'Citizenship status is required'
    if (!formData.signatureDate) newErrors.signatureDate = 'Signature date is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitSuccess(false)

    // Simulate API call to dummy server
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate successful submission
      console.log('Form Data Submitted:', formData)
      setSubmitSuccess(true)
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          lastName: '',
          firstName: '',
          middleInitial: '',
          otherNames: '',
          addressLine1: '',
          aptNo: '',
          city: '',
          state: '',
          zipCode: '',
          dateOfBirth: '',
          ssn: '',
          email: '',
          phoneNumber: '',
          citizenshipStatus: '',
          uscisNumber: '',
          signatureDate: ''
        })
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="iform-container">
      <div className="form-header">
        <h1>Employment Eligibility Verification</h1>
        <p className="form-subtitle">Department of Homeland Security - Form I-9</p>
      </div>

      {submitSuccess && (
        <div className="success-message">
          ✓ Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Section 1: Employee Information */}
        <div className="form-section">
          <h2>Section 1: Employee Information and Attestation</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="lastName">
                Last Name (Family Name) <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="firstName">
                First Name (Given Name) <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group small">
              <label htmlFor="middleInitial">Middle Initial</label>
              <input
                type="text"
                id="middleInitial"
                name="middleInitial"
                value={formData.middleInitial}
                onChange={handleChange}
                onBlur={handleNACapitalization}
                maxLength="3"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="otherNames">Other Last Names Used (if any)</label>
            <input
              type="text"
              id="otherNames"
              name="otherNames"
              value={formData.otherNames}
              onChange={handleChange}
              onBlur={handleNACapitalization}
            />
          </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="addressLine1">
                  Address (Street Number and Name) <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  className={errors.addressLine1 ? 'error' : ''}
                />
                {errors.addressLine1 && <span className="error-message">{errors.addressLine1}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="aptNo">Apt No</label>
                <input
                  type="text"
                  id="aptNo"
                  name="aptNo"
                  value={formData.aptNo}
                  onChange={handleChange}
                  onBlur={handleNACapitalization}
                  placeholder="Apt, Suite, etc."
                />
              </div>
            </div>

            <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">
                City or Town <span className="required">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? 'error' : ''}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="state">
                State <span className="required">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={errors.state ? 'error' : ''}
                maxLength="2"
                placeholder="CA"
              />
              {errors.state && <span className="error-message">{errors.state}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">
                ZIP Code <span className="required">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={errors.zipCode ? 'error' : ''}
                placeholder="12345"
              />
              {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dateOfBirth">
                Date of Birth <span className="required">*</span>
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={errors.dateOfBirth ? 'error' : ''}
              />
              {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="ssn">
                U.S. Social Security Number <span className="required">*</span>
              </label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
                className={errors.ssn ? 'error' : ''}
                placeholder="123-45-6789"
              />
              {errors.ssn && <span className="error-message">{errors.ssn}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="email@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={errors.phoneNumber ? 'error' : ''}
                placeholder="123-456-7890"
              />
              {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="citizenshipStatus">
              Citizenship/Immigration Status <span className="required">*</span>
            </label>
            <select
              id="citizenshipStatus"
              name="citizenshipStatus"
              value={formData.citizenshipStatus}
              onChange={handleChange}
              className={errors.citizenshipStatus ? 'error' : ''}
            >
              <option value="">Select status...</option>
              <option value="citizen">A citizen of the United States</option>
              <option value="national">A noncitizen national of the United States</option>
              <option value="permanent">A lawful permanent resident</option>
              <option value="alien">An alien authorized to work</option>
            </select>
            {errors.citizenshipStatus && <span className="error-message">{errors.citizenshipStatus}</span>}
          </div>

          {(formData.citizenshipStatus === 'permanent' || formData.citizenshipStatus === 'alien') && (
            <div className="form-group">
              <label htmlFor="uscisNumber">USCIS Number</label>
              <input
                type="text"
                id="uscisNumber"
                name="uscisNumber"
                value={formData.uscisNumber}
                onChange={handleChange}
                placeholder="Enter USCIS or A-Number"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="signatureDate">
              Signature Date <span className="required">*</span>
            </label>
            <input
              type="date"
              id="signatureDate"
              name="signatureDate"
              value={formData.signatureDate}
              onChange={handleChange}
              className={errors.signatureDate ? 'error' : ''}
            />
            {errors.signatureDate && <span className="error-message">{errors.signatureDate}</span>}
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Form'}
          </button>
        </div>
      </form>

      <div className="form-footer">
        <p className="disclaimer">
          * Required fields. Under penalty of perjury, I certify that this information is true and correct.
        </p>
      </div>
    </div>
  )
}

export default IFormTab

