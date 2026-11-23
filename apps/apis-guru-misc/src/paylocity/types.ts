type CompanyCodes = {
  code?: (string | null) | undefined
  description?: (string | null) | undefined
}
type Error = {
  field?: string | undefined
  message?: string | undefined
  options?: { code?: string | undefined; description?: string | undefined }[] | undefined
  path?: string | undefined
}
type CustomFieldDefinition = {
  category?: string | undefined
  defaultValue?: string | undefined
  isRequired?: boolean | undefined
  label?: string | undefined
  type?: string | undefined
  values?: { code?: string | undefined; description?: string | undefined }[] | undefined
}
type Employee = {
  additionalDirectDeposit?:
    | {
        accountNumber?: (string | null) | undefined
        accountType?: (string | null) | undefined
        amount?: (number | null) | undefined
        amountType?: (string | null) | undefined
        blockSpecial?: (boolean | null) | undefined
        isSkipPreNote?: (boolean | null) | undefined
        nameOnAccount?: (string | null) | undefined
        preNoteDate?: (string | null) | undefined
        routingNumber?: (string | null) | undefined
      }[]
    | undefined
  additionalRate?:
    | {
        changeReason?: (string | null) | undefined
        costCenter1?: (string | null) | undefined
        costCenter2?: (string | null) | undefined
        costCenter3?: (string | null) | undefined
        effectiveDate?: (string | null) | undefined
        endCheckDate?: (string | null) | undefined
        job?: (string | null) | undefined
        rate?: (number | null) | undefined
        rateCode?: (string | null) | undefined
        rateNotes?: (string | null) | undefined
        ratePer?: (string | null) | undefined
        shift?: (string | null) | undefined
      }[]
    | undefined
  benefitSetup?:
    | {
        benefitClass?: (string | null) | undefined
        benefitClassEffectiveDate?: (string | null) | undefined
        benefitSalary?: (number | null) | undefined
        benefitSalaryEffectiveDate?: (string | null) | undefined
        doNotApplyAdministrativePeriod?: (boolean | null) | undefined
        isMeasureAcaEligibility?: (boolean | null) | undefined
      }
    | undefined
  birthDate?: (string | null) | undefined
  coEmpCode?: (string | null) | undefined
  companyFEIN?: (string | null) | undefined
  companyName?: (string | null) | undefined
  currency?: (string | null) | undefined
  customBooleanFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: boolean | null }[]
    | undefined
  customDateFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: string | null }[]
    | undefined
  customDropDownFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: string | null }[]
    | undefined
  customNumberFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: number | null }[]
    | undefined
  customTextFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: string | null }[]
    | undefined
  departmentPosition?:
    | {
        changeReason?: (string | null) | undefined
        clockBadgeNumber?: (string | null) | undefined
        costCenter1?: (string | null) | undefined
        costCenter2?: (string | null) | undefined
        costCenter3?: (string | null) | undefined
        effectiveDate?: (string | null) | undefined
        employeeType?: (string | null) | undefined
        equalEmploymentOpportunityClass?: (string | null) | undefined
        isMinimumWageExempt?: (boolean | null) | undefined
        isOvertimeExempt?: (boolean | null) | undefined
        isSupervisorReviewer?: (boolean | null) | undefined
        isUnionDuesCollected?: (boolean | null) | undefined
        isUnionInitiationCollected?: (boolean | null) | undefined
        jobTitle?: (string | null) | undefined
        payGroup?: (string | null) | undefined
        positionCode?: (string | null) | undefined
        reviewerCompanyNumber?: (string | null) | undefined
        reviewerEmployeeId?: (string | null) | undefined
        shift?: (string | null) | undefined
        supervisorCompanyNumber?: (string | null) | undefined
        supervisorEmployeeId?: (string | null) | undefined
        tipped?: (string | null) | undefined
        unionAffiliationDate?: (string | null) | undefined
        unionCode?: (string | null) | undefined
        unionPosition?: (string | null) | undefined
        workersCompensation?: (string | null) | undefined
      }
    | undefined
  disabilityDescription?: (string | null) | undefined
  emergencyContacts?:
    | {
        address1?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        county?: (string | null) | undefined
        email?: (string | null) | undefined
        firstName: string | null
        homePhone?: (string | null) | undefined
        lastName: string | null
        mobilePhone?: (string | null) | undefined
        notes?: (string | null) | undefined
        pager?: (string | null) | undefined
        primaryPhone?: (string | null) | undefined
        priority?: (string | null) | undefined
        relationship?: (string | null) | undefined
        state?: (string | null) | undefined
        syncEmployeeInfo?: boolean | undefined
        workExtension?: (string | null) | undefined
        workPhone?: (string | null) | undefined
        zip?: (string | null) | undefined
      }[]
    | undefined
  employeeId?: (string | null) | undefined
  ethnicity?: (string | null) | undefined
  federalTax?:
    | {
        amount?: (number | null) | undefined
        deductionsAmount?: number | undefined
        dependentsAmount?: number | undefined
        exemptions?: (number | null) | undefined
        filingStatus?: (string | null) | undefined
        higherRate?: boolean | undefined
        otherIncomeAmount?: number | undefined
        percentage?: (number | null) | undefined
        taxCalculationCode?: (string | null) | undefined
        w4FormYear?: number | undefined
      }
    | undefined
  firstName?: (string | null) | undefined
  gender?: (string | null) | undefined
  homeAddress?:
    | {
        address1?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        county?: (string | null) | undefined
        emailAddress?: (string | null) | undefined
        mobilePhone?: (string | null) | undefined
        phone?: (string | null) | undefined
        postalCode?: (string | null) | undefined
        state?: (string | null) | undefined
      }
    | undefined
  isHighlyCompensated?: boolean | undefined
  isSmoker?: boolean | undefined
  lastName?: (string | null) | undefined
  localTax?:
    | {
        exemptions?: (number | null) | undefined
        exemptions2?: (number | null) | undefined
        filingStatus?: (string | null) | undefined
        residentPSD?: (string | null) | undefined
        taxCode?: (string | null) | undefined
        workPSD?: (string | null) | undefined
      }[]
    | undefined
  mainDirectDeposit?:
    | {
        accountNumber?: (string | null) | undefined
        accountType?: (string | null) | undefined
        blockSpecial?: (boolean | null) | undefined
        isSkipPreNote?: (boolean | null) | undefined
        nameOnAccount?: (string | null) | undefined
        preNoteDate?: (string | null) | undefined
        routingNumber?: (string | null) | undefined
      }
    | undefined
  maritalStatus?: (string | null) | undefined
  middleName?: (string | null) | undefined
  nonPrimaryStateTax?:
    | {
        amount?: (number | null) | undefined
        deductionsAmount?: number | undefined
        dependentsAmount?: number | undefined
        exemptions?: (number | null) | undefined
        exemptions2?: (number | null) | undefined
        filingStatus?: (string | null) | undefined
        higherRate?: boolean | undefined
        otherIncomeAmount?: number | undefined
        percentage?: (number | null) | undefined
        reciprocityCode?: (string | null) | undefined
        specialCheckCalc?: (string | null) | undefined
        taxCalculationCode?: (string | null) | undefined
        taxCode?: (string | null) | undefined
        w4FormYear?: number | undefined
      }
    | undefined
  ownerPercent?: (number | null) | undefined
  preferredName?: (string | null) | undefined
  primaryPayRate?:
    | {
        annualSalary?: (number | null) | undefined
        baseRate?: (number | null) | undefined
        beginCheckDate?: (string | null) | undefined
        changeReason?: (string | null) | undefined
        defaultHours?: (number | null) | undefined
        effectiveDate?: (string | null) | undefined
        isAutoPay?: (boolean | null) | undefined
        payFrequency?: (string | null) | undefined
        payGrade?: (string | null) | undefined
        payRateNote?: (string | null) | undefined
        payType?: (string | null) | undefined
        ratePer?: (string | null) | undefined
        salary?: (number | null) | undefined
      }
    | undefined
  primaryStateTax?:
    | {
        amount?: (number | null) | undefined
        deductionsAmount?: number | undefined
        dependentsAmount?: number | undefined
        exemptions?: (number | null) | undefined
        exemptions2?: (number | null) | undefined
        filingStatus?: (string | null) | undefined
        higherRate?: boolean | undefined
        otherIncomeAmount?: number | undefined
        percentage?: (number | null) | undefined
        specialCheckCalc?: (string | null) | undefined
        taxCalculationCode?: (string | null) | undefined
        taxCode?: (string | null) | undefined
        w4FormYear?: number | undefined
      }
    | undefined
  priorLastName?: (string | null) | undefined
  salutation?: (string | null) | undefined
  ssn?: (string | null) | undefined
  status?:
    | {
        adjustedSeniorityDate?: (string | null) | undefined
        changeReason?: (string | null) | undefined
        effectiveDate?: (string | null) | undefined
        employeeStatus?: (string | null) | undefined
        hireDate?: (string | null) | undefined
        isEligibleForRehire?: (boolean | null) | undefined
        reHireDate?: (string | null) | undefined
        statusType?: (string | null) | undefined
        terminationDate?: (string | null) | undefined
      }
    | undefined
  suffix?: (string | null) | undefined
  taxSetup?:
    | {
        fitwExemptNotes?: (string | null) | undefined
        fitwExemptReason?: (string | null) | undefined
        futaExemptNotes?: (string | null) | undefined
        futaExemptReason?: (string | null) | undefined
        isEmployee943?: boolean | undefined
        isPension?: boolean | undefined
        isStatutory?: boolean | undefined
        medExemptNotes?: (string | null) | undefined
        medExemptReason?: (string | null) | undefined
        sitwExemptNotes?: (string | null) | undefined
        sitwExemptReason?: (string | null) | undefined
        ssExemptNotes?: (string | null) | undefined
        ssExemptReason?: (string | null) | undefined
        suiExemptNotes?: (string | null) | undefined
        suiExemptReason?: (string | null) | undefined
        suiState?: (string | null) | undefined
        taxDistributionCode1099R?: (string | null) | undefined
        taxForm?: (string | null) | undefined
      }
    | undefined
  veteranDescription?: (string | null) | undefined
  webTime?:
    | {
        badgeNumber?: (string | null) | undefined
        chargeRate?: (number | null) | undefined
        isTimeLaborEnabled?: (boolean | null) | undefined
      }
    | undefined
  workAddress?:
    | {
        address1?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        county?: (string | null) | undefined
        emailAddress?: (string | null) | undefined
        location?: (string | null) | undefined
        mailStop?: (string | null) | undefined
        mobilePhone?: (string | null) | undefined
        pager?: (string | null) | undefined
        phone?: (string | null) | undefined
        phoneExtension?: (string | null) | undefined
        postalCode?: (string | null) | undefined
        state?: (string | null) | undefined
      }
    | undefined
  workEligibility?:
    | {
        alienOrAdmissionDocumentNumber?: (string | null) | undefined
        attestedDate?: (string | null) | undefined
        countryOfIssuance?: (string | null) | undefined
        foreignPassportNumber?: (string | null) | undefined
        i94AdmissionNumber?: (string | null) | undefined
        i9DateVerified?: (string | null) | undefined
        i9Notes?: (string | null) | undefined
        isI9Verified?: (boolean | null) | undefined
        isSsnVerified?: (boolean | null) | undefined
        ssnDateVerified?: (string | null) | undefined
        ssnNotes?: (string | null) | undefined
        visaType?: (string | null) | undefined
        workAuthorization?: (string | null) | undefined
        workUntil?: (string | null) | undefined
      }
    | undefined
}
type EmployeeIdResponse = { employeeId?: string | undefined }
type EmployeeInfo = {
  employeeId?: (string | null) | undefined
  statusCode?: (string | null) | undefined
  statusTypeCode?: (string | null) | undefined
}
type AdditionalRate = {
  changeReason?: (string | null) | undefined
  costCenter1?: (string | null) | undefined
  costCenter2?: (string | null) | undefined
  costCenter3?: (string | null) | undefined
  effectiveDate?: (string | null) | undefined
  endCheckDate?: (string | null) | undefined
  job?: (string | null) | undefined
  rate?: (number | null) | undefined
  rateCode?: (string | null) | undefined
  rateNotes?: (string | null) | undefined
  ratePer?: (string | null) | undefined
  shift?: (string | null) | undefined
}
type BenefitSetup = {
  benefitClass?: (string | null) | undefined
  benefitClassEffectiveDate?: (string | null) | undefined
  benefitSalary?: (number | null) | undefined
  benefitSalaryEffectiveDate?: (string | null) | undefined
  doNotApplyAdministrativePeriod?: (boolean | null) | undefined
  isMeasureAcaEligibility?: (boolean | null) | undefined
}
type DirectDeposit = {
  additionalDirectDeposit?:
    | {
        accountNumber?: (string | null) | undefined
        accountType?: (string | null) | undefined
        amount?: (number | null) | undefined
        amountType?: (string | null) | undefined
        blockSpecial?: (boolean | null) | undefined
        isSkipPreNote?: (boolean | null) | undefined
        nameOnAccount?: (string | null) | undefined
        preNoteDate?: (string | null) | undefined
        routingNumber?: (string | null) | undefined
      }[]
    | undefined
  mainDirectDeposit?:
    | {
        accountNumber?: (string | null) | undefined
        accountType?: (string | null) | undefined
        blockSpecial?: (boolean | null) | undefined
        isSkipPreNote?: (boolean | null) | undefined
        nameOnAccount?: (string | null) | undefined
        preNoteDate?: (string | null) | undefined
        routingNumber?: (string | null) | undefined
      }
    | undefined
}
type Earning = {
  agency?: (string | null) | undefined
  amount?: (number | null) | undefined
  annualMaximum?: (number | null) | undefined
  calculationCode?: (string | null) | undefined
  costCenter1?: (string | null) | undefined
  costCenter2?: (string | null) | undefined
  costCenter3?: (string | null) | undefined
  earningCode: string | null
  effectiveDate?: (string | null) | undefined
  endDate?: (string | null) | undefined
  frequency?: (string | null) | undefined
  goal?: (number | null) | undefined
  hoursOrUnits?: (number | null) | undefined
  isSelfInsured?: (boolean | null) | undefined
  jobCode?: (string | null) | undefined
  miscellaneousInfo?: (string | null) | undefined
  paidTowardsGoal?: (number | null) | undefined
  payPeriodMaximum?: (number | null) | undefined
  payPeriodMinimum?: (number | null) | undefined
  rate?: (number | null) | undefined
  rateCode?: (string | null) | undefined
  startDate: string | null
}
type EmergencyContact = {
  address1?: (string | null) | undefined
  address2?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  county?: (string | null) | undefined
  email?: (string | null) | undefined
  firstName: string | null
  homePhone?: (string | null) | undefined
  lastName: string | null
  mobilePhone?: (string | null) | undefined
  notes?: (string | null) | undefined
  pager?: (string | null) | undefined
  primaryPhone?: (string | null) | undefined
  priority?: (string | null) | undefined
  relationship?: (string | null) | undefined
  state?: (string | null) | undefined
  syncEmployeeInfo?: boolean | undefined
  workExtension?: (string | null) | undefined
  workPhone?: (string | null) | undefined
  zip?: (string | null) | undefined
}
type LocalTax = {
  exemptions?: (number | null) | undefined
  exemptions2?: (number | null) | undefined
  filingStatus?: (string | null) | undefined
  residentPSD?: (string | null) | undefined
  taxCode?: (string | null) | undefined
  workPSD?: (string | null) | undefined
}
type NonPrimaryStateTax = {
  amount?: (number | null) | undefined
  deductionsAmount?: number | undefined
  dependentsAmount?: number | undefined
  exemptions?: (number | null) | undefined
  exemptions2?: (number | null) | undefined
  filingStatus?: (string | null) | undefined
  higherRate?: boolean | undefined
  otherIncomeAmount?: number | undefined
  percentage?: (number | null) | undefined
  reciprocityCode?: (string | null) | undefined
  specialCheckCalc?: (string | null) | undefined
  taxCalculationCode?: (string | null) | undefined
  taxCode?: (string | null) | undefined
  w4FormYear?: number | undefined
}
type PayStatementDetails = {
  amount?: (number | null) | undefined
  checkDate?: (string | null) | undefined
  det?: (string | null) | undefined
  detCode?: (string | null) | undefined
  detType?: (string | null) | undefined
  eligibleCompensation?: (number | null) | undefined
  hours?: (number | null) | undefined
  rate?: (number | null) | undefined
  transactionNumber?: number | undefined
  transactionType?: (string | null) | undefined
  year?: number | undefined
}
type PayStatementSummary = {
  autoPay?: boolean | undefined
  beginDate?: (string | null) | undefined
  checkDate?: (string | null) | undefined
  checkNumber?: number | undefined
  directDepositAmount?: (number | null) | undefined
  endDate?: (string | null) | undefined
  grossPay?: (number | null) | undefined
  hours?: (number | null) | undefined
  netCheck?: (number | null) | undefined
  netPay?: (number | null) | undefined
  overtimeDollars?: (number | null) | undefined
  overtimeHours?: (number | null) | undefined
  process?: number | undefined
  regularDollars?: (number | null) | undefined
  regularHours?: (number | null) | undefined
  transactionNumber?: number | undefined
  voucherNumber?: number | undefined
  workersCompCode?: (string | null) | undefined
  year?: number | undefined
}
type StateTax = {
  amount?: (number | null) | undefined
  deductionsAmount?: number | undefined
  dependentsAmount?: number | undefined
  exemptions?: (number | null) | undefined
  exemptions2?: (number | null) | undefined
  filingStatus?: (string | null) | undefined
  higherRate?: boolean | undefined
  otherIncomeAmount?: number | undefined
  percentage?: (number | null) | undefined
  specialCheckCalc?: (string | null) | undefined
  taxCalculationCode?: (string | null) | undefined
  taxCode?: (string | null) | undefined
  w4FormYear?: number | undefined
}
type SensitiveData = {
  disability?:
    | {
        disability?: (string | null) | undefined
        disabilityClassifications?: { classification?: (string | null) | undefined }[] | undefined
        hasDisability?: (string | null) | undefined
      }
    | undefined
  ethnicity?:
    | {
        ethnicRacialIdentities?: { description?: (string | null) | undefined }[] | undefined
        ethnicity?: (string | null) | undefined
      }
    | undefined
  gender?:
    | {
        displayPronouns?: (boolean | null) | undefined
        genderIdentityDescription?: (string | null) | undefined
        identifyAsLegalGender?: (string | null) | undefined
        legalGender?: (string | null) | undefined
        pronouns?: (string | null) | undefined
        sexualOrientation?: (string | null) | undefined
      }
    | undefined
  veteran?:
    | { isVeteran?: (string | null) | undefined; veteran?: (string | null) | undefined }
    | undefined
}
type AddClientSecret = { code: string }
type ClientCredentialsResponse = {
  clientSecret?: (string | null) | undefined
  clientSecretExpirationDate?: (string | null) | undefined
}
type StagedEmployee = {
  additionalDirectDeposit?:
    | {
        accountNumber?: (string | null) | undefined
        accountType?: (string | null) | undefined
        amount?: (number | null) | undefined
        amountType?: (string | null) | undefined
        isSkipPreNote?: (boolean | null) | undefined
        preNoteDate?: (string | null) | undefined
        routingNumber?: (string | null) | undefined
      }[]
    | undefined
  benefitSetup?:
    | {
        benefitClass?: (string | null) | undefined
        benefitClassEffectiveDate?: (string | null) | undefined
        benefitSalary?: (number | null) | undefined
        benefitSalaryEffectiveDate?: (string | null) | undefined
        doNotApplyAdministrativePeriod?: (boolean | null) | undefined
        isMeasureAcaEligibility?: (boolean | null) | undefined
      }[]
    | undefined
  birthDate?: (string | null) | undefined
  customBooleanFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: boolean | null }[]
    | undefined
  customDateFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: string | null }[]
    | undefined
  customDropDownFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: string | null }[]
    | undefined
  customNumberFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: number | null }[]
    | undefined
  customTextFields?:
    | { category: 'PayrollAndHR'; label: string | null; value: string | null }[]
    | undefined
  departmentPosition?:
    | {
        changeReason?: (string | null) | undefined
        clockBadgeNumber?: (string | null) | undefined
        costCenter1?: (string | null) | undefined
        costCenter2?: (string | null) | undefined
        costCenter3?: (string | null) | undefined
        effectiveDate?: (string | null) | undefined
        employeeType?: (string | null) | undefined
        equalEmploymentOpportunityClass?: (string | null) | undefined
        isMinimumWageExempt?: (boolean | null) | undefined
        isOvertimeExempt?: (boolean | null) | undefined
        isSupervisorReviewer?: (boolean | null) | undefined
        isUnionDuesCollected?: (boolean | null) | undefined
        isUnionInitiationCollected?: (boolean | null) | undefined
        jobTitle?: (string | null) | undefined
        payGroup?: (string | null) | undefined
        positionCode?: (string | null) | undefined
        shift?: (string | null) | undefined
        supervisorCompanyNumber?: (string | null) | undefined
        supervisorEmployeeId?: (string | null) | undefined
        tipped?: (string | null) | undefined
        unionAffiliationDate?: (string | null) | undefined
        unionCode?: (string | null) | undefined
        unionPosition?: (string | null) | undefined
        workersCompensation?: (string | null) | undefined
      }[]
    | undefined
  disabilityDescription?: (string | null) | undefined
  employeeId?: (string | null) | undefined
  ethnicity?: (string | null) | undefined
  federalTax?:
    | {
        amount?: (number | null) | undefined
        deductionsAmount?: number | undefined
        dependentsAmount?: number | undefined
        exemptions?: (number | null) | undefined
        filingStatus?: (string | null) | undefined
        higherRate?: boolean | undefined
        otherIncomeAmount?: number | undefined
        percentage?: (number | null) | undefined
        taxCalculationCode?: (string | null) | undefined
        w4FormYear?: number | undefined
      }[]
    | undefined
  firstName?: (string | null) | undefined
  fitwExemptReason?: (string | null) | undefined
  futaExemptReason?: (string | null) | undefined
  gender?: (string | null) | undefined
  homeAddress?:
    | {
        address1?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        county?: (string | null) | undefined
        emailAddress?: (string | null) | undefined
        mobilePhone?: (string | null) | undefined
        phone?: (string | null) | undefined
        postalCode?: (string | null) | undefined
        state?: (string | null) | undefined
      }[]
    | undefined
  isEmployee943?: (boolean | null) | undefined
  isSmoker?: (boolean | null) | undefined
  lastName?: (string | null) | undefined
  localTax?:
    | {
        exemptions?: (number | null) | undefined
        exemptions2?: (number | null) | undefined
        filingStatus?: (string | null) | undefined
        residentPSD?: (string | null) | undefined
        taxCode?: (string | null) | undefined
        workPSD?: (string | null) | undefined
      }[]
    | undefined
  mainDirectDeposit?:
    | {
        accountNumber?: (string | null) | undefined
        accountType?: (string | null) | undefined
        isSkipPreNote?: (boolean | null) | undefined
        preNoteDate?: (string | null) | undefined
        routingNumber?: (string | null) | undefined
      }[]
    | undefined
  maritalStatus?: (string | null) | undefined
  medExemptReason?: (string | null) | undefined
  middleName?: (string | null) | undefined
  nonPrimaryStateTax?:
    | {
        amount?: (number | null) | undefined
        deductionsAmount?: number | undefined
        dependentsAmount?: number | undefined
        exemptions?: (number | null) | undefined
        exemptions2?: (number | null) | undefined
        filingStatus?: (string | null) | undefined
        higherRate?: boolean | undefined
        otherIncomeAmount?: number | undefined
        percentage?: (number | null) | undefined
        reciprocityCode?: (string | null) | undefined
        specialCheckCalc?: (string | null) | undefined
        taxCalculationCode?: (string | null) | undefined
        taxCode?: (string | null) | undefined
        w4FormYear?: number | undefined
      }[]
    | undefined
  preferredName?: (string | null) | undefined
  primaryPayRate?:
    | {
        baseRate?: (number | null) | undefined
        changeReason?: (string | null) | undefined
        defaultHours?: (number | null) | undefined
        effectiveDate?: (string | null) | undefined
        isAutoPay?: (boolean | null) | undefined
        payFrequency?: (string | null) | undefined
        payGrade?: (string | null) | undefined
        payType?: (string | null) | undefined
        ratePer?: (string | null) | undefined
        salary?: (number | null) | undefined
      }[]
    | undefined
  primaryStateTax?:
    | {
        amount?: (number | null) | undefined
        deductionsAmount?: number | undefined
        dependentsAmount?: number | undefined
        exemptions?: (number | null) | undefined
        exemptions2?: (number | null) | undefined
        filingStatus?: (string | null) | undefined
        higherRate?: boolean | undefined
        otherIncomeAmount?: number | undefined
        percentage?: (number | null) | undefined
        specialCheckCalc?: (string | null) | undefined
        taxCalculationCode?: (string | null) | undefined
        taxCode?: (string | null) | undefined
        w4FormYear?: number | undefined
      }[]
    | undefined
  priorLastName?: (string | null) | undefined
  salutation?: (string | null) | undefined
  sitwExemptReason?: (string | null) | undefined
  ssExemptReason?: (string | null) | undefined
  ssn?: (string | null) | undefined
  status?:
    | {
        adjustedSeniorityDate?: (string | null) | undefined
        changeReason?: (string | null) | undefined
        effectiveDate?: (string | null) | undefined
        employeeStatus?: (string | null) | undefined
        hireDate?: (string | null) | undefined
        isEligibleForRehire?: (boolean | null) | undefined
      }[]
    | undefined
  suffix?: (string | null) | undefined
  suiExemptReason?: (string | null) | undefined
  suiState?: (string | null) | undefined
  taxDistributionCode1099R?: (string | null) | undefined
  taxForm?: (string | null) | undefined
  veteranDescription?: (string | null) | undefined
  webTime?:
    | {
        badgeNumber?: (string | null) | undefined
        chargeRate?: (number | null) | undefined
        isTimeLaborEnabled?: (boolean | null) | undefined
      }
    | undefined
  workAddress?:
    | {
        address1?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        county?: (string | null) | undefined
        emailAddress?: (string | null) | undefined
        mobilePhone?: (string | null) | undefined
        pager?: (string | null) | undefined
        phone?: (string | null) | undefined
        phoneExtension?: (string | null) | undefined
        postalCode?: (string | null) | undefined
        state?: (string | null) | undefined
      }[]
    | undefined
  workEligibility?:
    | {
        alienOrAdmissionDocumentNumber?: (string | null) | undefined
        attestedDate?: (string | null) | undefined
        countryOfIssuance?: (string | null) | undefined
        foreignPassportNumber?: (string | null) | undefined
        i94AdmissionNumber?: (string | null) | undefined
        i9DateVerified?: (string | null) | undefined
        i9Notes?: (string | null) | undefined
        isI9Verified?: (boolean | null) | undefined
        isSsnVerified?: (boolean | null) | undefined
        ssnDateVerified?: (string | null) | undefined
        ssnNotes?: (string | null) | undefined
        visaType?: (string | null) | undefined
        workAuthorization?: (string | null) | undefined
        workUntil?: (string | null) | undefined
      }[]
    | undefined
}
type TrackingNumberResponse = { trackingNumber?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/companies/:companyId/codes/:codeResource': {
      $get:
        | {
            input: { param: { companyId: string; codeResource: string } }
            output: CompanyCodes[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; codeResource: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; codeResource: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; codeResource: string } }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { companyId: string; codeResource: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; codeResource: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/customfields/:category': {
      $get:
        | {
            input: { param: { companyId: string; category: string } }
            output: CustomFieldDefinition[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; category: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; category: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; category: string } }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { companyId: string; category: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; category: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees': {
      $post:
        | {
            input: { param: { companyId: string } } & { json: Employee }
            output: EmployeeIdResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { companyId: string } } & { json: Employee }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: Employee }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: Employee }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: Employee }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string } } & { json: Employee }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
              }
            }
            output: EmployeeInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId': {
      $get:
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Employee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Employee }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Employee }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Employee }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Employee }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Employee }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Employee }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/additionalRates': {
      $put:
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: AdditionalRate }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: AdditionalRate }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: AdditionalRate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: AdditionalRate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: AdditionalRate }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: AdditionalRate }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/benefitSetup': {
      $put:
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: BenefitSetup }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: BenefitSetup }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: BenefitSetup }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: BenefitSetup }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: BenefitSetup }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: BenefitSetup }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/directDeposit': {
      $get:
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: DirectDeposit[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/earnings': {
      $get:
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Earning[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Earning }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Earning }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Earning }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Earning }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Earning }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: Earning }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/earnings/:earningCode': {
      $get:
        | {
            input: { param: { companyId: string; employeeId: string; earningCode: string } }
            output: Earning[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string; earningCode: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string; earningCode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string; earningCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string; earningCode: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string; earningCode: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/earnings/:earningCode/:startDate': {
      $delete:
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: Earning
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                companyId: string
                employeeId: string
                earningCode: string
                startDate: string
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/emergencyContacts': {
      $put:
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: EmergencyContact }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: EmergencyContact }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: EmergencyContact }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: EmergencyContact }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: EmergencyContact }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: EmergencyContact }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/localTaxes': {
      $get:
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: LocalTax[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: LocalTax }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: LocalTax }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: LocalTax }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: LocalTax }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: LocalTax }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: LocalTax }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/localTaxes/:taxCode': {
      $delete:
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: LocalTax[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string; taxCode: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/nonprimaryStateTax': {
      $put:
        | {
            input: { param: { companyId: string; employeeId: string } } & {
              json: NonPrimaryStateTax
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & {
              json: NonPrimaryStateTax
            }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & {
              json: NonPrimaryStateTax
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & {
              json: NonPrimaryStateTax
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & {
              json: NonPrimaryStateTax
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & {
              json: NonPrimaryStateTax
            }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/paystatement/details/:year': {
      $get:
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: PayStatementDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/paystatement/details/:year/:checkDate': {
      $get:
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: PayStatementDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/paystatement/summary/:year': {
      $get:
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: PayStatementSummary[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string; year: string } } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/paystatement/summary/:year/:checkDate': {
      $get:
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: PayStatementSummary[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: { companyId: string; employeeId: string; year: string; checkDate: string }
            } & {
              query: {
                pagesize?: number | undefined
                pagenumber?: number | undefined
                includetotalcount?: boolean | undefined
                codegroup?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/primaryStateTax': {
      $put:
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: StateTax }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: StateTax }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: StateTax }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: StateTax }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: StateTax }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: StateTax }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/employees/:employeeId/sensitivedata': {
      $get:
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: SensitiveData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: SensitiveData }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: SensitiveData }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: SensitiveData }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: SensitiveData }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: SensitiveData }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; employeeId: string } } & { json: SensitiveData }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/companies/:companyId/openapi': {
      $get:
        | {
            input: { param: { companyId: string } } & { header: { Authorization: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { header: { Authorization: string } }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { header: { Authorization: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { header: { Authorization: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string } } & { header: { Authorization: string } }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/credentials/secrets': {
      $post:
        | {
            input: { json: AddClientSecret }
            output: ClientCredentialsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AddClientSecret }; output: Error[]; outputFormat: 'json'; status: 400 }
        | { input: { json: AddClientSecret }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: AddClientSecret }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: AddClientSecret }; output: {}; outputFormat: string; status: 429 }
        | { input: { json: AddClientSecret }; output: Error[]; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v2/weblinkstaging/companies/:companyId/employees/newemployees': {
      $post:
        | {
            input: { param: { companyId: string } } & { json: StagedEmployee }
            output: TrackingNumberResponse[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { companyId: string } } & { json: StagedEmployee }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: StagedEmployee }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: StagedEmployee }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string } } & { json: StagedEmployee }
            output: Error[]
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
