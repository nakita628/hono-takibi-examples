type ErrorModel = {
  ErrorModel?:
    | {
        Description?: string | undefined
        ErrorCategory?: 'General' | 'NotFound' | 'NotAuthorised' | 'ValidationFailure' | undefined
        Errors?: { Error?: string[] | undefined } | undefined
      }
    | undefined
}
type Employer = {
  Employer?:
    | {
        Address?:
          | {
              Address1?: string | undefined
              Address2?: string | undefined
              Address3?: string | undefined
              Address4?: string | undefined
              Country?: string | undefined
              Postcode?: string | undefined
            }
          | undefined
        ApprenticeshipLevyAllowance?: number | undefined
        AutoEnrolment?:
          | {
              Pension?:
                | {
                    '@href'?: string | undefined
                    '@rel'?: string | undefined
                    '@title'?: string | undefined
                  }
                | undefined
              PostponementDate?: string | undefined
              PrimaryAddress?:
                | {
                    Address1?: string | undefined
                    Address2?: string | undefined
                    Address3?: string | undefined
                    Address4?: string | undefined
                    Country?: string | undefined
                    Postcode?: string | undefined
                  }
                | undefined
              PrimaryEmail?: string | undefined
              PrimaryFirstName?: string | undefined
              PrimaryJobTitle?: string | undefined
              PrimaryLastName?: string | undefined
              PrimaryTelephone?: string | undefined
              ReEnrolmentDayOffset?: number | undefined
              ReEnrolmentMonthOffset?: number | undefined
              RecentOptOutReEnrolmentExcluded?: boolean | undefined
              SecondaryAddress?:
                | {
                    Address1?: string | undefined
                    Address2?: string | undefined
                    Address3?: string | undefined
                    Address4?: string | undefined
                    Country?: string | undefined
                    Postcode?: string | undefined
                  }
                | undefined
              SecondaryEmail?: string | undefined
              SecondaryFirstName?: string | undefined
              SecondaryJobTitle?: string | undefined
              SecondaryLastName?: string | undefined
              SecondaryTelephone?: string | undefined
              StagingDate?: string | undefined
            }
          | undefined
        BacsServiceUserNumber?: string | undefined
        BankAccount?:
          | {
              AccountName?: string | undefined
              AccountNumber?: string | undefined
              BranchName?: string | undefined
              Reference?: string | undefined
              SortCode?: string | undefined
            }
          | undefined
        CalculateApprenticeshipLevy?: boolean | undefined
        ClaimEmploymentAllowance?: boolean | undefined
        ClaimSmallEmployerRelief?: boolean | undefined
        EffectiveDate?: string | undefined
        HmrcSettings?:
          | {
              AccountingOfficeRef?: string | undefined
              COTAXRef?: string | undefined
              ContactEmail?: string | undefined
              ContactFax?: string | undefined
              ContactFirstName?: string | undefined
              ContactLastName?: string | undefined
              ContactTelephone?: string | undefined
              EmploymentAllowanceOverride?: number | undefined
              Password?: string | undefined
              SAUTR?: string | undefined
              Sender?:
                | 'Employer'
                | 'Individual'
                | 'Company'
                | 'Agent'
                | 'Bureau'
                | 'Partnership'
                | 'Trust'
                | 'Government'
                | 'ActingInCapacity'
                | 'Other'
                | undefined
              SenderId?: string | undefined
              StateAidSector?:
                | 'Agriculture'
                | 'FisheriesAquaculture'
                | 'RoadTransport'
                | 'Industrial'
                | 'NotApplicable'
                | undefined
              TaxOfficeNumber?: string | undefined
              TaxOfficeReference?: string | undefined
            }
          | undefined
        MetaData?: { [x: string]: unknown } | undefined
        Name?: string | undefined
        NextRevisionDate?: string | undefined
        Region?: 'NotSet' | 'England' | 'Scotland' | 'Wales' | undefined
        Revision?: number | undefined
        RuleExclusions?:
          | 'None'
          | 'NiMissingPayInstructionRule'
          | 'TaxMissingPayInstructionRule'
          | 'TaxCodeUpliftRule'
          | 'NiSetExpectedLetterRule'
          | 'NiDateOfBirthChangeRetrospectiveCRule'
          | 'NiDefermentStatusChangeRule'
          | 'NiEndContractedOutTransferRule'
          | 'PaymentAfterLeavingTaxCodeRule'
          | 'LeaverEndInstructionsRule'
          | 'P45StudentLoanInstructionRule'
          | 'P45TaxInstructionRule'
          | 'P45YtdTaxRule'
          | 'YtdInstructionRule'
          | 'TaxCodeRegionChangeRule'
          | 'AutoEnrolmentStatusChangeRule'
          | 'EmployeeDeceasedRule'
          | 'BenefitInstructionAutoEndRule'
          | undefined
        Territory?: 'UnitedKingdom' | undefined
      }
    | undefined
}
type CisLineType = {
  CisLineType?:
    | {
        Description?: string | undefined
        LineType?: string | undefined
        NominalCode?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        TaxTreatment?: 'Taxable' | 'NonTaxable' | 'Notional' | 'Materials' | undefined
      }
    | undefined
}
type Tag = {
  Tag?:
    | {
        Created?: string | undefined
        TaggedItem?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        Text?: string | undefined
      }
    | undefined
}
type LinkCollection = {
  LinkCollection?:
    | {
        Links?:
          | {
              Link?:
                | {
                    '@href'?: string | undefined
                    '@rel'?: string | undefined
                    '@title'?: string | undefined
                  }[]
                | undefined
            }
          | undefined
      }
    | undefined
}
type Link = {
  Link?:
    | { '@href'?: string | undefined; '@rel'?: string | undefined; '@title'?: string | undefined }
    | undefined
}
type CisTransaction = {
  CisTransaction?:
    | {
        CisMessageType?: 'Verification' | 'Return' | undefined
        EmployerCore?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        RequestData?: string | undefined
        ResponseData?: string | undefined
        TaxYear?: number | undefined
        Timestamp?: string | undefined
        TransactionStatus?:
          | 'New'
          | 'RequestGenerated'
          | 'CompletedWithError'
          | 'CompletedWithSuccess'
          | 'TimeOut'
          | undefined
        TransmissionDate?: string | undefined
      }
    | undefined
}
type DpsMessage = {
  DpsMessage?:
    | {
        FormType?: string | undefined
        IssueDate?: string | undefined
        LastUpdated?: string | undefined
        Message?: string | undefined
        MessageStatus?:
          | 'Retrieved'
          | 'Applied'
          | 'Unresolved'
          | 'Ignored'
          | 'Information'
          | undefined
        MessageType?: string | undefined
        ProcessingResult?: string | undefined
        RetrieveDate?: string | undefined
        SequenceNumber?: number | undefined
      }
    | undefined
}
type Employee = {
  Employee?:
    | {
        AEAssessmentOverride?:
          | 'None'
          | 'OptOut'
          | 'OptIn'
          | 'VoluntaryJoiner'
          | 'ContractualPension'
          | 'CeasedMembership'
          | 'Leaver'
          | 'Excluded'
          | undefined
        AEAssessmentOverrideDate?: string | undefined
        AEExclusionReasonCode?:
          | 'OtherNotKnown'
          | 'NotAWorker'
          | 'NotUKWorker'
          | 'TemporaryUKWorker'
          | 'OutsideAgeRange'
          | 'SingleEmployeeDirector'
          | 'CeasedMembershipWithin12Months'
          | 'CeasedMembershipBeyond12Months'
          | 'WorkerWULSWithin12Month'
          | 'WorkerWULSBeyond12Month'
          | 'WorkerInNoticePeriod'
          | 'WorkerTaxProtection'
          | undefined
        AEPostponementDate?: string | undefined
        Address?:
          | {
              Address1?: string | undefined
              Address2?: string | undefined
              Address3?: string | undefined
              Address4?: string | undefined
              Country?: string | undefined
              Postcode?: string | undefined
            }
          | undefined
        BankAccount?:
          | {
              AccountName?: string | undefined
              AccountNumber?: string | undefined
              BranchName?: string | undefined
              Reference?: string | undefined
              SortCode?: string | undefined
            }
          | undefined
        Code?: string | undefined
        DateOfBirth?: string | undefined
        Deactivated?: boolean | undefined
        DirectorshipAppointmentDate?: string | undefined
        EEACitizen?: boolean | undefined
        EPM6?: boolean | undefined
        EffectiveDate?: string | undefined
        EmployeePartner?:
          | {
              FirstName?: string | undefined
              Initials?: string | undefined
              LastName?: string | undefined
              MiddleName?: string | undefined
              NiNumber?: string | undefined
            }
          | undefined
        FirstName?: string | undefined
        Gender?: 'Unknown' | 'Male' | 'Female' | undefined
        HoursPerWeek?: number | undefined
        Initials?: string | undefined
        IrregularEmployment?: boolean | undefined
        IsAgencyWorker?: boolean | undefined
        LastName?: string | undefined
        LeaverReason?:
          | 'Resigned'
          | 'Dismissed'
          | 'Redundant'
          | 'Retired'
          | 'Deceased'
          | 'LegalCustody'
          | 'Other'
          | undefined
        LeavingDate?: string | undefined
        MaritalStatus?: 'NotSet' | 'Single' | 'Married' | 'Divorced' | 'Widowed' | undefined
        MetaData?: { [x: string]: unknown } | undefined
        MiddleName?: string | undefined
        NextRevisionDate?: string | undefined
        NiNumber?: string | undefined
        NicLiability?:
          | 'HasOtherJob'
          | 'IsFemaleEntitledToReducedRate'
          | 'IsNotLiable'
          | 'IsContractedOut'
          | 'IsFullyLiable'
          | 'IsApprentice'
          | 'LeaverBeyond6Weeks'
          | 'PaymentAfterLeavingIrregular'
          | 'IsFreePortWorker'
          | 'IsNotLiableForEmployerNi'
          | undefined
        OffPayrollWorker?: boolean | undefined
        OnStrike?: boolean | undefined
        P45IssuedDate?: string | undefined
        PassportNumber?: string | undefined
        PaySchedule?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        PaymentMethod?:
          | 'NotSet'
          | 'Cash'
          | 'Cheque'
          | 'BACS'
          | 'FasterPayments'
          | 'Other'
          | undefined
        PaymentToANonIndividual?: boolean | undefined
        Region?: 'NotSet' | 'England' | 'Scotland' | 'Wales' | undefined
        Revision?: number | undefined
        RuleExclusions?:
          | 'None'
          | 'NiMissingPayInstructionRule'
          | 'TaxMissingPayInstructionRule'
          | 'TaxCodeUpliftRule'
          | 'NiSetExpectedLetterRule'
          | 'NiDateOfBirthChangeRetrospectiveCRule'
          | 'NiDefermentStatusChangeRule'
          | 'NiEndContractedOutTransferRule'
          | 'PaymentAfterLeavingTaxCodeRule'
          | 'LeaverEndInstructionsRule'
          | 'P45StudentLoanInstructionRule'
          | 'P45TaxInstructionRule'
          | 'P45YtdTaxRule'
          | 'YtdInstructionRule'
          | 'TaxCodeRegionChangeRule'
          | 'AutoEnrolmentStatusChangeRule'
          | 'EmployeeDeceasedRule'
          | 'BenefitInstructionAutoEndRule'
          | undefined
        Seconded?: 'NotSet' | 'Stay183DaysOrMore' | 'StayLessThan183Days' | 'InOutUk' | undefined
        StartDate?: string | undefined
        StarterDeclaration?: 'PreviouslyReported' | 'A' | 'B' | 'C' | undefined
        Territory?: 'UnitedKingdom' | undefined
        Title?: string | undefined
        VeteranPeriodStartDate?: string | undefined
        WorkingWeek?:
          | 'None'
          | 'Monday'
          | 'Tuesday'
          | 'Wednesday'
          | 'Thursday'
          | 'Friday'
          | 'AllWeekDays'
          | 'Saturday'
          | 'Sunday'
          | 'AllDays'
          | undefined
      }
    | undefined
}
type AEAssessment = {
  AEAssessment?:
    | {
        Age?: number | undefined
        AssessmentCode?:
          | 'Excluded'
          | 'EligibleJobHolder'
          | 'NonEligibleJobHolder'
          | 'EntitledWorker'
          | undefined
        AssessmentDate?: string | undefined
        AssessmentEvent?:
          | 'NonEnrolmentEvent'
          | 'AutomaticEnrolment'
          | 'OptIn'
          | 'VoluntaryJoiner'
          | 'ContractualEnrolment'
          | undefined
        AssessmentOverride?:
          | 'None'
          | 'OptOut'
          | 'OptIn'
          | 'VoluntaryJoiner'
          | 'ContractualPension'
          | 'CeasedMembership'
          | 'Leaver'
          | 'Excluded'
          | undefined
        AssessmentResult?: 'Inconclusive' | 'NoChange' | 'Enrol' | 'Exit' | undefined
        IsMemberOfAlternativePensionScheme?: boolean | undefined
        OptOutWindowEndDate?: string | undefined
        QualifyingEarnings?: number | undefined
        ReenrolmentDate?: string | undefined
        StatePensionAge?: number | undefined
        StatePensionDate?: string | undefined
        TaxPeriod?: number | undefined
        TaxYear?: number | undefined
      }
    | undefined
}
type Commentary = {
  Commentary?:
    | {
        Created?: string | undefined
        Detail?: string | undefined
        Employee?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        PayRun?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
      }
    | undefined
}
type PayInstruction = {
  PayInstruction?:
    | {
        Description?: string | undefined
        EndDate?: string | undefined
        PayLineTag?: string | undefined
        StartDate?: string | undefined
      }
    | undefined
}
type PayLine = {
  PayLine?:
    | {
        Calculator?: string | undefined
        Description?: string | undefined
        Generated?: string | undefined
        PayCode?: string | undefined
        PayCodeType?: 'NotSet' | 'Payment' | 'Deduction' | undefined
        PayRunSequence?: number | undefined
        PaymentDate?: string | undefined
        TaxPeriod?: number | undefined
        TaxYear?: number | undefined
        Value?: number | undefined
      }
    | undefined
}
type EmployeeSummary = { [x: string]: unknown }
type EmployeeSecret = {
  EmployeeSecret?:
    | { Created?: string | undefined; Name?: string | undefined; Value?: string | undefined }
    | undefined
}
type HolidayScheme = {
  HolidayScheme?:
    | {
        AccrualPayCodes?: { PayCode?: string[] | undefined } | undefined
        AllowExceedAnnualEntitlement?: boolean | undefined
        AllowNegativeBalance?: boolean | undefined
        AnnualEntitlementWeeks?: number | undefined
        BankHolidayInclusive?: boolean | undefined
        Code?: string | undefined
        EffectiveDate?: string | undefined
        MaxCarryOverDays?: number | undefined
        NextRevisionDate?: string | undefined
        OffsetPayment?: boolean | undefined
        Revision?: number | undefined
        SchemeCeasedDate?: string | undefined
        SchemeKey?: string | undefined
        SchemeName?: string | undefined
        YearStartDay?: number | undefined
        YearStartMonth?: number | undefined
      }
    | undefined
}
type JournalInstruction = {
  JournalInstruction?:
    | {
        AccountingType?: 'Credit' | 'Debit' | undefined
        Description?: string | undefined
        EndDate?: string | undefined
        Expression?: string | undefined
        JournalLineTag?: string | undefined
        LedgerTarget?: string | undefined
        NomCode?: string | undefined
        StartDate?: string | undefined
        SubNomCode?: string | undefined
      }
    | undefined
}
type JournalLine = {
  JournalLine?:
    | {
        Credit?: number | undefined
        Debit?: number | undefined
        Description?: string | undefined
        Employee?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        Generated?: string | undefined
        Grouping?: string | undefined
        LedgerTarget?: string | undefined
        NomCode?: string | undefined
        PayFrequency?: 'Weekly' | 'Monthly' | 'TwoWeekly' | 'FourWeekly' | 'Yearly' | undefined
        PayRun?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        SubContractor?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        SubNomCode?: string | undefined
        TaxPeriod?: number | undefined
        TaxYear?: number | undefined
      }
    | undefined
}
type NominalCode = {
  NominalCode?: { Description?: string | undefined; Key?: string | undefined } | undefined
}
type PayCode = {
  PayCode?:
    | {
        Benefit?: boolean | undefined
        Code?: string | undefined
        Description?: string | undefined
        EffectiveDate?: string | undefined
        MetaData?: { [x: string]: unknown } | undefined
        NextRevisionDate?: string | undefined
        Niable?: boolean | undefined
        NominalCode?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        NonArrestable?: boolean | undefined
        Notional?: boolean | undefined
        Readonly?: boolean | undefined
        Region?: 'NotSet' | 'England' | 'Scotland' | 'Wales' | undefined
        Revision?: number | undefined
        Taxable?: boolean | undefined
        Territory?: 'UnitedKingdom' | undefined
        Type?: 'NotSet' | 'Payment' | 'Deduction' | undefined
      }
    | undefined
}
type PaySchedule = {
  PaySchedule?:
    | {
        MetaData?: { [x: string]: unknown } | undefined
        Name?: string | undefined
        PayFrequency?: 'Weekly' | 'Monthly' | 'TwoWeekly' | 'FourWeekly' | 'Yearly' | undefined
      }
    | undefined
}
type PayRun = {
  PayRun?:
    | {
        Executed?: string | undefined
        IsSupplementary?: boolean | undefined
        PayFrequency?: 'Weekly' | 'Monthly' | 'TwoWeekly' | 'FourWeekly' | 'Yearly' | undefined
        PaySchedule?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        PaymentDate?: string | undefined
        PeriodEnd?: string | undefined
        PeriodStart?: string | undefined
        ProceedingPayRun?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        Sequence?: number | undefined
        TaxPeriod?: number | undefined
        TaxYear?: number | undefined
      }
    | undefined
}
type Pension = {
  Pension?:
    | {
        AECompatible?: boolean | undefined
        Certification?: 'NotSet' | 'Set1' | 'Set2' | 'Set3' | undefined
        Code?: string | undefined
        ContributionDeductionDay?: number | undefined
        EffectiveDate?: string | undefined
        EmployeeContributionCash?: number | undefined
        EmployeeContributionPercent?: number | undefined
        EmployerContributionCash?: number | undefined
        EmployerContributionPercent?: number | undefined
        EmployerNiSaving?: boolean | undefined
        EmployerNiSavingPercentage?: number | undefined
        Group?: string | undefined
        LowerThreshold?: number | undefined
        MetaData?: { [x: string]: unknown } | undefined
        NextRevisionDate?: string | undefined
        PensionablePayCodes?: { PayCode?: string[] | undefined } | undefined
        ProRataMethod?:
          | 'NotSet'
          | 'Annual260Days'
          | 'Annual365Days'
          | 'AnnualQualifyingDays'
          | 'DaysPerCalendarMonth'
          | 'DaysPerTaxPeriod'
          | 'WorkingDaysPerCalendarMonth'
          | 'WeekDaysPerCalendarMonth'
          | undefined
        ProviderEmployerRef?: string | undefined
        ProviderName?: string | undefined
        QualifyingPayCodes?: { PayCode?: string[] | undefined } | undefined
        RasRoundingOverride?:
          | 'NotSet'
          | 'PennyUp'
          | 'PennyDown'
          | 'Bankers'
          | 'FiveUp'
          | 'FiveDown'
          | 'Floor'
          | 'Ceiling'
          | undefined
        Revision?: number | undefined
        RoundingOption?:
          | 'NotSet'
          | 'PennyUp'
          | 'PennyDown'
          | 'Bankers'
          | 'FiveUp'
          | 'FiveDown'
          | 'Floor'
          | 'Ceiling'
          | undefined
        SalarySacrifice?: boolean | undefined
        SchemeName?: string | undefined
        SubGroup?: string | undefined
        TaxationMethod?: 'NotSet' | 'NetBased' | 'ReliefAtSource' | 'TaxReliefExcluded' | undefined
        UpperThreshold?: number | undefined
        UseAEThresholds?: boolean | undefined
      }
    | undefined
}
type ReportLine = {
  ReportLine?:
    | {
        Description?: string | undefined
        Generated?: string | undefined
        TaxMonth?: number | undefined
        TaxYear?: number | undefined
        Value?: number | undefined
      }
    | undefined
}
type ReportingInstruction = {
  ReportingInstruction?:
    | {
        EndDate?: string | undefined
        StartDate?: string | undefined
        TaxMonth?: number | undefined
        TaxYear?: number | undefined
        Value?: number | undefined
      }
    | undefined
}
type EmployerSummary = { [x: string]: unknown }
type RtiTransactionBase = {
  RtiTransactionBase?:
    | {
        EmployerCore?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        RequestData?: string | undefined
        ResponseData?: string | undefined
        RtiType?: string | undefined
        TaxYear?: number | undefined
        Timestamp?: string | undefined
        TransactionStatus?:
          | 'New'
          | 'RequestGenerated'
          | 'CompletedWithError'
          | 'CompletedWithSuccess'
          | 'TimeOut'
          | undefined
        TransmissionDate?: string | undefined
      }
    | undefined
}
type EmployerSecret = {
  EmployerSecret?:
    | { Created?: string | undefined; Name?: string | undefined; Value?: string | undefined }
    | undefined
}
type SubContractor = {
  SubContractor?:
    | {
        Address?:
          | {
              Address1?: string | undefined
              Address2?: string | undefined
              Address3?: string | undefined
              Address4?: string | undefined
              Country?: string | undefined
              Postcode?: string | undefined
            }
          | undefined
        BankAccount?:
          | {
              AccountName?: string | undefined
              AccountNumber?: string | undefined
              BranchName?: string | undefined
              Reference?: string | undefined
              SortCode?: string | undefined
            }
          | undefined
        BusinessType?: 'SoleTrader' | 'Company' | 'Partnership' | 'Trust' | undefined
        CompanyName?: string | undefined
        CompanyRegistrationNumber?: string | undefined
        Deactivated?: boolean | undefined
        EffectiveDate?: string | undefined
        FirstName?: string | undefined
        Initials?: string | undefined
        LastName?: string | undefined
        MetaData?: { [x: string]: unknown } | undefined
        MiddleName?: string | undefined
        NextRevisionDate?: string | undefined
        NiNumber?: string | undefined
        PartnershipName?: string | undefined
        PartnershipUniqueTaxReference?: string | undefined
        PayFrequency?: 'Monthly' | 'Weekly' | undefined
        PaymentMethod?:
          | 'NotSet'
          | 'Cash'
          | 'Cheque'
          | 'BACS'
          | 'FasterPayments'
          | 'Other'
          | undefined
        Region?: 'NotSet' | 'England' | 'Scotland' | 'Wales' | undefined
        Revision?: number | undefined
        TaxationStatus?: 'Unmatched' | 'Net' | 'Gross' | undefined
        Telephone?: string | undefined
        Territory?: 'UnitedKingdom' | undefined
        Title?: string | undefined
        TradingName?: string | undefined
        UniqueTaxReference?: string | undefined
        VatRegistered?: boolean | undefined
        VatRegistrationNumber?: string | undefined
        VerificationDate?: string | undefined
        VerificationNumber?: string | undefined
        WorksNumber?: string | undefined
      }
    | undefined
}
type CisInstruction = {
  CisInstruction?:
    | {
        CisLineTag?: string | undefined
        CisLineType?: string | undefined
        Description?: string | undefined
        PayFrequency?: 'Monthly' | 'Weekly' | undefined
        PeriodEnd?: number | undefined
        PeriodStart?: number | undefined
        TaxYearEnd?: number | undefined
        TaxYearStart?: number | undefined
        UOM?: 'NotSet' | 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Year' | 'Unit' | undefined
        Units?: number | undefined
        VAT?: number | undefined
        Value?: number | undefined
      }
    | undefined
}
type CisLine = {
  CisLine?:
    | {
        CisDeduction?: number | undefined
        CisLineType?: string | undefined
        Description?: string | undefined
        Generated?: string | undefined
        GrossPay?: number | undefined
        NominalCodeKey?: string | undefined
        PayFrequency?: 'Monthly' | 'Weekly' | undefined
        TaxMonth?: number | undefined
        TaxPeriod?: number | undefined
        TaxTreatment?: 'Taxable' | 'NonTaxable' | 'Notional' | 'Materials' | undefined
        TaxYear?: number | undefined
        UOM?: 'NotSet' | 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Year' | 'Unit' | undefined
        UnitRate?: number | undefined
        Units?: number | undefined
        VAT?: number | undefined
      }
    | undefined
}
type ThirdPartyTransaction = { [x: string]: unknown }
type HealthCheck = {
  HealthCheck?: { Info?: string | undefined; Version?: string | undefined } | undefined
}
type BatchJobInstruction = {
  BatchJobInstruction?:
    | {
        HoldingDate?: string | undefined
        Instructions?: { DELETE?: { '@Href'?: string | undefined }[] | undefined } | undefined
        ValidateOnly?: boolean | undefined
      }
    | undefined
}
type JobInfo = {
  JobInfo?:
    | {
        Created?: string | undefined
        EmployerKey?: string | undefined
        Errors?: { Error?: string[] | undefined } | undefined
        HoldingDate?: string | undefined
        JobId?: string | undefined
        JobStatus?: 'New' | 'Pending' | 'InProgress' | 'Success' | 'Failed' | 'OnHold' | undefined
        JobType?: string | undefined
        LastUpdated?: string | undefined
        Progress?: number | undefined
      }
    | undefined
}
type CisJobInstructionBase = {
  CisJobInstructionBase?:
    | {
        Employer?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        HoldingDate?: string | undefined
        SubContractors?:
          | {
              SubContractor?:
                | {
                    '@href'?: string | undefined
                    '@rel'?: string | undefined
                    '@title'?: string | undefined
                  }[]
                | undefined
            }
          | undefined
      }
    | undefined
}
type DpsJobInstruction = {
  DpsJobInstruction?:
    | {
        Apply?: boolean | undefined
        Employer?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        FromDate?: string | undefined
        HoldingDate?: string | undefined
        MessageTypes?: { Type?: { [x: string]: unknown }[] | undefined } | undefined
        MessagesToProcess?:
          | {
              Message?:
                | {
                    '@href'?: string | undefined
                    '@rel'?: string | undefined
                    '@title'?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        Retrieve?: boolean | undefined
      }
    | undefined
}
type PayRunJobInstruction = {
  PayRunJobInstruction?:
    | {
        Employees?:
          | {
              Employee?:
                | {
                    '@href'?: string | undefined
                    '@rel'?: string | undefined
                    '@title'?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        EndDate?: string | undefined
        HoldingDate?: string | undefined
        IsSupplementary?: boolean | undefined
        PaySchedule?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        PaymentDate?: string | undefined
        StartDate?: string | undefined
      }
    | undefined
}
type RtiJobInstruction = {
  RtiJobInstruction?:
    | {
        EarlierTaxYear?: number | undefined
        Employer?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        FinalSubmissionForYear?: boolean | undefined
        Generate?: boolean | undefined
        HoldingDate?: string | undefined
        LateReason?: 'A' | 'B' | 'C' | 'D' | 'F' | 'G' | 'H' | undefined
        NoPaymentForPeriodFrom?: string | undefined
        NoPaymentForPeriodTo?: string | undefined
        PaySchedule?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        PaymentDate?: string | undefined
        PeriodOfInactivityFrom?: string | undefined
        PeriodOfInactivityTo?: string | undefined
        RtiTransaction?:
          | {
              '@href'?: string | undefined
              '@rel'?: string | undefined
              '@title'?: string | undefined
            }
          | undefined
        RtiType?: string | undefined
        SchemeCeased?: string | undefined
        TaxMonth?: number | undefined
        TaxYear?: number | undefined
        Timestamp?: string | undefined
        Transmit?: boolean | undefined
      }
    | undefined
}
type ThirdPartyJobInstruction = {
  ThirdPartyJobInstruction?:
    | {
        EmployerHref?: string | undefined
        HoldingDate?: string | undefined
        InstructionType?: string | undefined
        MetaData?: { [x: string]: unknown } | undefined
        PayLoad?: string | undefined
      }
    | undefined
}
type Permission = {
  Permission?:
    | {
        Description?: string | undefined
        Expression?: string | undefined
        Name?: string | undefined
        Policy?: 'Allow' | 'Deny' | undefined
        Verbs?: 'Read' | 'Write' | 'Delete' | 'All' | undefined
      }
    | undefined
}
type Query = {
  Query?:
    | {
        Encoding?: string | undefined
        ExcludeNullOrEmptyElements?: boolean | undefined
        Groups?:
          | {
              Group?:
                | {
                    '@GroupName'?: string | undefined
                    '@ItemName'?: string | undefined
                    '@LoopExpression'?: string | undefined
                    '@Predicate'?: string | undefined
                    '@Selector'?: string | undefined
                    '@UniqueKeyVariable'?: string | undefined
                    Condition?:
                      | { '@ValueA'?: string | undefined; '@ValueB'?: string | undefined }[]
                      | undefined
                    Filter?:
                      | {
                          '@IsOr'?: boolean | undefined
                          '@Property'?: string | undefined
                          '@Value'?: string | undefined
                        }[]
                      | undefined
                    Order?: { '@Property'?: string | undefined }[] | undefined
                    Output?:
                      | {
                          '@MaxLength'?: string | undefined
                          '@Output'?:
                            | 'Element'
                            | 'Attribute'
                            | 'Variable'
                            | 'VariableSum'
                            | 'VariableAppend'
                            | 'VariablePrepend'
                            | 'ElementDatePart'
                            | 'InnerText'
                            | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
            }
          | undefined
        RootNodeName?: string | undefined
        SuppressMetricAttributes?: boolean | undefined
        Variables?:
          | {
              Variable?:
                | { '@Name'?: string | undefined; '@Value'?: string | undefined }[]
                | undefined
            }
          | undefined
      }
    | undefined
}
type JournalExpressionDataTable = { [x: string]: unknown }
type ReportDefinition = {
  ReportDefinition?:
    | {
        Active?: boolean | undefined
        Readonly?: boolean | undefined
        ReportQuery?:
          | {
              Encoding?: string | undefined
              ExcludeNullOrEmptyElements?: boolean | undefined
              Groups?:
                | {
                    Group?:
                      | {
                          '@GroupName'?: string | undefined
                          '@ItemName'?: string | undefined
                          '@LoopExpression'?: string | undefined
                          '@Predicate'?: string | undefined
                          '@Selector'?: string | undefined
                          '@UniqueKeyVariable'?: string | undefined
                          Condition?:
                            | { '@ValueA'?: string | undefined; '@ValueB'?: string | undefined }[]
                            | undefined
                          Filter?:
                            | {
                                '@IsOr'?: boolean | undefined
                                '@Property'?: string | undefined
                                '@Value'?: string | undefined
                              }[]
                            | undefined
                          Order?: { '@Property'?: string | undefined }[] | undefined
                          Output?:
                            | {
                                '@MaxLength'?: string | undefined
                                '@Output'?:
                                  | 'Element'
                                  | 'Attribute'
                                  | 'Variable'
                                  | 'VariableSum'
                                  | 'VariableAppend'
                                  | 'VariablePrepend'
                                  | 'ElementDatePart'
                                  | 'InnerText'
                                  | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                  }
                | undefined
              RootNodeName?: string | undefined
              SuppressMetricAttributes?: boolean | undefined
              Variables?:
                | {
                    Variable?:
                      | { '@Name'?: string | undefined; '@Value'?: string | undefined }[]
                      | undefined
                  }
                | undefined
            }
          | undefined
        SupportedTransforms?: string | undefined
        Title?: string | undefined
        Version?: string | undefined
      }
    | undefined
}
type ApplicationSecret = { [x: string]: unknown }
type TransformDefinition = {
  TransformDefinition?:
    | {
        Active?: boolean | undefined
        ContentType?: string | undefined
        Definition?: string | undefined
        DefinitionType?: string | undefined
        Readonly?: boolean | undefined
        SupportedReports?: string | undefined
        TaxYear?: number | undefined
        Title?: string | undefined
        Version?: string | undefined
      }
    | undefined
}
type User = {
  User?:
    | {
        MetaData?: { [x: string]: unknown } | undefined
        Permissions?:
          | {
              Permission?:
                | {
                    '@href'?: string | undefined
                    '@rel'?: string | undefined
                    '@title'?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        Roles?: { Role?: string[] | undefined } | undefined
        UserIdentifier?: string | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Employer/:EmployerId': {
      $delete:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Employer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: Employer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: Employer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/CisLineType/:CisLineTypeId': {
      $delete:
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: CisLineType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: CisLineType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisLineTypeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/CisLineTypes': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisLineType }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/CisLineTypes/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/CisLineTypes/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/CisTransaction/:CisTransactionId': {
      $delete:
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: CisTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; CisTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/CisTransactions': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/DpsMessage/:DpsMessageId': {
      $delete:
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: DpsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: DpsMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: DpsMessage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; DpsMessageId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/DpsMessages': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId': {
      $delete:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Employee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: Employee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: Employee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessment/:AEAssessmentId': {
      $delete:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: AEAssessment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: AEAssessment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; AEAssessmentId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessments': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: Link
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: AEAssessment }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Commentaries': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Commentary/:CommentaryId': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; CommentaryId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Commentary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; CommentaryId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; CommentaryId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; CommentaryId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; CommentaryId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/JournalLines': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: PayInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: PayInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: PayInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tag/:TagId': {
      $delete:
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                PayInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tags': {
      $get:
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayInstruction }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: PayLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tag/:TagId': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; EmployeeId: string; PayLineId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; PayLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLines': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLines/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLines/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/PayRuns': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Revision/:RevisionNumber': {
      $delete:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Employee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Revision/:RevisionNumber/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployeeSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Revisions': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Revisions/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Secret/:SecretId': {
      $delete:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployeeSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployeeSecret
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Secrets': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployeeSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId/:EffectiveDate': {
      $get:
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                EmployeeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/Tags/:EffectiveDate': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/:EffectiveDate': {
      $delete:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Employee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employee/:EmployeeId/:EffectiveDate/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployeeSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EmployeeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employees': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Employee }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employees/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employees/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employees/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employees/:EffectiveDate': {
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Employees/:EffectiveDate/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId': {
      $delete:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: HolidayScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: HolidayScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: HolidayScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Revision/:RevisionNumber': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: HolidayScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Revisions': {
      $get:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId/:EffectiveDate': {
      $get:
        | {
            input: {
              param: {
                EmployerId: string
                HolidaySchemeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                HolidaySchemeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                HolidaySchemeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                HolidaySchemeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                HolidaySchemeId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; HolidaySchemeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tags/:EffectiveDate': {
      $get:
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/:EffectiveDate': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: HolidayScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; HolidaySchemeId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidaySchemes': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: HolidayScheme }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidaySchemes/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidaySchemes/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/HolidaySchemes/:EffectiveDate': {
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/JournalInstruction/:JournalInstructionId': {
      $delete:
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JournalInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JournalInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/JournalInstructions': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/JournalLine/:JournalLineId': {
      $get:
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JournalLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/JournalLine/:JournalLineId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/JournalLine/:JournalLineId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; JournalLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/JournalLines': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/JournalLines/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/JournalLines/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/NominalCode/:NominalCodeId': {
      $delete:
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: NominalCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: NominalCode
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/NominalCode/:NominalCodeId/PayCodes': {
      $get:
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; NominalCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/NominalCodes': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: NominalCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCode/:PayCodeId': {
      $delete:
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: PayCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: PayCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: PayCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCode/:PayCodeId/Revision/:RevisionNumber': {
      $delete:
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: PayCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCode/:PayCodeId/Revisions': {
      $get:
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCode/:PayCodeId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCode/:PayCodeId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCode/:PayCodeId/:EffectiveDate': {
      $delete:
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: PayCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayCodeId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCodes': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PayCode }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCodes/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCodes/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PayCodes/:EffectiveDate': {
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId': {
      $delete:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: PaySchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: PaySchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Employees': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Employees/:EffectiveDate': {
      $get:
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId': {
      $delete:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: PayRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/AEAssessments': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Commentaries': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employee/:EmployeeId': {
      $delete:
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employee/:EmployeeId/Commentary': {
      $get:
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Commentary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                PayScheduleId: string
                PayRunId: string
                EmployeeId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employees': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/JournalLines': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/PayLines': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/ReportLines': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tag/:TagId': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; PayScheduleId: string; PayRunId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; PayRunId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PayScheduleId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedules': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: PaySchedule }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedules/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/PaySchedules/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Pension/:PensionId': {
      $delete:
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Pension
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: Pension
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: Pension
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Pension/:PensionId/Revision/:RevisionNumber': {
      $delete:
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Pension
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Pension/:PensionId/Revisions': {
      $get:
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Pension/:PensionId/:EffectiveDate': {
      $delete:
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Pension
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; PensionId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Pensions': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: Pension }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Pensions/:EffectiveDate': {
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ReportLine/:ReportLineId': {
      $get:
        | {
            input: { param: { EmployerId: string; ReportLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ReportLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; ReportLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; ReportLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; ReportLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; ReportLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ReportLines': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ReportingInstruction/:ReportingInstructionId': {
      $delete:
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ReportingInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ReportingInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; ReportingInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ReportingInstructions': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportingInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Revision/:RevisionNumber': {
      $delete:
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Employer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Revision/:RevisionNumber/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployerSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RevisionNumber: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Revisions': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Revisions/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId': {
      $delete:
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: RtiTransactionBase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: RtiTransactionBase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; RtiTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/RtiTransactions': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/RtiTransactions/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/RtiTransactions/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/RtiTransactions/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Secret/:SecretId': {
      $delete:
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployerSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployerSecret
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Secrets': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId': {
      $delete:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: SubContractor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: SubContractor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: SubContractor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: CisInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: CisInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisInstruction
            }
            output: CisInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tag/:TagId': {
      $delete:
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisInstructionId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tags': {
      $get:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; CisInstructionId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisInstruction }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: CisInstruction }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId': {
      $delete:
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: CisLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tag/:TagId': {
      $delete:
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                CisLineId: string
                TagId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; CisLineId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/JournalLines': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Revision/:RevisionNumber': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: SubContractor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; RevisionNumber: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Revisions': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId/:EffectiveDate': {
      $get:
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                EmployerId: string
                SubContractorId: string
                TagId: string
                EffectiveDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; SubContractorId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tags/:EffectiveDate': {
      $get:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractor/:SubContractorId/:EffectiveDate': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: SubContractor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; SubContractorId: string; EffectiveDate: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractors': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: SubContractor }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractors/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractors/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/SubContractors/:EffectiveDate': {
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployerSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Tag/:TagId/:EffectiveDate': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/Tags/:EffectiveDate': {
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId': {
      $delete:
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ThirdPartyTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tag/:TagId': {
      $delete:
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { EmployerId: string; ThirdPartyTransactionId: string; TagId: string }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; ThirdPartyTransactionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ThirdPartyTransactions': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ThirdPartyTransactions/Tag/:TagId': {
      $get:
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/ThirdPartyTransactions/Tags': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/:EffectiveDate': {
      $delete:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Employer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employer/:EmployerId/:EffectiveDate/Summary': {
      $get:
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: EmployerSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string; EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employers': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Employer }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Employer }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employers/Summary': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employers/Tag/:TagId': {
      $get:
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employers/Tags': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employers/:EffectiveDate': {
      $get:
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Employers/:EffectiveDate/Summary': {
      $get:
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EffectiveDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Healthcheck': {
      $get:
        | { input: {}; output: HealthCheck; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/Jobs/Batch': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: BatchJobInstruction
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: BatchJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: BatchJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: BatchJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: BatchJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Batch/:JobId': {
      $delete:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Batch/:JobId/Info': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JobInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Batch/:JobId/Progress': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Batch/:JobId/Status': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Cis': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisJobInstructionBase
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisJobInstructionBase
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisJobInstructionBase
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisJobInstructionBase
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: CisJobInstructionBase
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Cis/:JobId': {
      $delete:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Cis/:JobId/Info': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JobInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Cis/:JobId/Progress': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Cis/:JobId/Status': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Dps': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: DpsJobInstruction
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: DpsJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: DpsJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: DpsJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: DpsJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Dps/:JobId': {
      $delete:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Dps/:JobId/Info': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JobInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Dps/:JobId/Progress': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Dps/:JobId/Status': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Employer/:EmployerId': {
      $get:
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { EmployerId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/PayRuns': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayRunJobInstruction
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayRunJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayRunJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayRunJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: PayRunJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/PayRuns/:JobId': {
      $delete:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/PayRuns/:JobId/Info': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JobInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/PayRuns/:JobId/Progress': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/PayRuns/:JobId/Status': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Rti': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: RtiJobInstruction
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: RtiJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: RtiJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: RtiJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: RtiJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Rti/:JobId': {
      $delete:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Rti/:JobId/Info': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JobInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Rti/:JobId/Progress': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/Rti/:JobId/Status': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/ThirdParty': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ThirdPartyJobInstruction
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ThirdPartyJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ThirdPartyJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ThirdPartyJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ThirdPartyJobInstruction
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/ThirdParty/:JobId': {
      $delete:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/ThirdParty/:JobId/Info': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JobInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/ThirdParty/:JobId/Progress': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Jobs/ThirdParty/:JobId/Status': {
      $get:
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JobId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/JournalInstruction/:JournalInstructionId': {
      $delete:
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JournalInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: JournalInstruction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { JournalInstructionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/JournalInstructions': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Permission/:PermissionId': {
      $delete:
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Permission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Permission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Permission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Permission/:PermissionId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PermissionId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Permission/:PermissionId/Tags': {
      $get:
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { PermissionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Permissions': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: Link
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Permissions/Tag/:TagId': {
      $get:
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Permissions/Tags': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Query': {
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Query }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Query }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Query }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Query }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & { json: Query }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ReferenceData/JournalExpressionDataTable': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: JournalExpressionDataTable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/ACTPAYINS/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                ActiveOn?: string | undefined
                FromDate: string
                ToDate?: string | undefined
                Type?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                ActiveOn?: string | undefined
                FromDate: string
                ToDate?: string | undefined
                Type?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                ActiveOn?: string | undefined
                FromDate: string
                ToDate?: string | undefined
                Type?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                ActiveOn?: string | undefined
                FromDate: string
                ToDate?: string | undefined
                Type?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                ActiveOn?: string | undefined
                FromDate: string
                ToDate?: string | undefined
                Type?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/AOELIABILITY/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/DPSMSG/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                FromDate: string
                ToDate?: string | undefined
                MessageTypes?: string | undefined
                MessageStatuses?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                FromDate: string
                ToDate?: string | undefined
                MessageTypes?: string | undefined
                MessageStatuses?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                FromDate: string
                ToDate?: string | undefined
                MessageTypes?: string | undefined
                MessageStatuses?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                FromDate: string
                ToDate?: string | undefined
                MessageTypes?: string | undefined
                MessageStatuses?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                FromDate: string
                ToDate?: string | undefined
                MessageTypes?: string | undefined
                MessageStatuses?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/EMPSUM/run': {
      $get:
        | {
            input: { query: { EmployerKey: string; ContextDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { EmployerKey: string; ContextDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { EmployerKey: string; ContextDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { EmployerKey: string; ContextDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { EmployerKey: string; ContextDate: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/GRO2NET/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/HOLBAL/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                HolidayYearEnd: string
                EmployeeCodes?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                HolidayYearEnd: string
                EmployeeCodes?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                HolidayYearEnd: string
                EmployeeCodes?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                HolidayYearEnd: string
                EmployeeCodes?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                HolidayYearEnd: string
                EmployeeCodes?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/JOURNAL/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayFrequency: string
                TaxYear: string
                TaxPeriod?: string | undefined
                LedgerTarget: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayFrequency: string
                TaxYear: string
                TaxPeriod?: string | undefined
                LedgerTarget: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayFrequency: string
                TaxYear: string
                TaxPeriod?: string | undefined
                LedgerTarget: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayFrequency: string
                TaxYear: string
                TaxPeriod?: string | undefined
                LedgerTarget: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayFrequency: string
                TaxYear: string
                TaxPeriod?: string | undefined
                LedgerTarget: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/LASTPAYDATE/run': {
      $get:
        | {
            input: { query: { EmployerKey: string; EmployeeKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { EmployerKey: string; EmployeeKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { EmployerKey: string; EmployeeKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { EmployerKey: string; EmployeeKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { EmployerKey: string; EmployeeKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/NETPAY/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                TaxPeriod?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/NEXTPERIOD/run': {
      $get:
        | {
            input: { query: { EmployerKey: string; PayScheduleKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { EmployerKey: string; PayScheduleKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { EmployerKey: string; PayScheduleKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { EmployerKey: string; PayScheduleKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { EmployerKey: string; PayScheduleKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/P11SUM/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/P32/run': {
      $get:
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/P32SUM/run': {
      $get:
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/P45/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                EmployeeKey: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/P60/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/PAPDIS/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                TransformDefinitionKey?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/PASS/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                IntermediaryId: string
                DocumentId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                IntermediaryId: string
                DocumentId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                IntermediaryId: string
                DocumentId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                IntermediaryId: string
                DocumentId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                PaymentDate?: string | undefined
                PensionKey: string
                MessageFunctionCode: string
                IntermediaryId: string
                DocumentId: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/PAYDASHBOARD/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
                PublicationDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
                PublicationDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
                PublicationDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
                PublicationDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
                PublicationDate: string
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/PAYSLIP3/run': {
      $get:
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                EmployerKey: string
                PayScheduleKey: string
                TaxYear: string
                EmployeeCodes?: string | undefined
                TransformDefinitionKey?: string | undefined
                StartIndex?: string | undefined
                MaxIndex?: string | undefined
                PaymentDate?: string | undefined
              }
            } & { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/PENLIABILITY/run': {
      $get:
        | {
            input: { query: { EmployerKey: string; TaxYear: string; PensionKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string; PensionKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string; PensionKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string; PensionKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { EmployerKey: string; TaxYear: string; PensionKey: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/:ReportDefinitionId': {
      $delete:
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ReportDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportDefinition }
            output: ReportDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportDefinition }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportDefinition }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportDefinition }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: ReportDefinition }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Report/:ReportDefinitionId/run': {
      $get:
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ReportDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Reports': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ReportDefinition
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ReportDefinition
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ReportDefinition
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ReportDefinition
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: ReportDefinition
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Schemas': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Schemas/:DtoDataType': {
      $get:
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Secret/:SecretId': {
      $delete:
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ApplicationSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ApplicationSecret
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { SecretId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Secrets': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Template/:DtoDataType': {
      $get:
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { DtoDataType: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Templates': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Transform/:TransformDefinitionId': {
      $delete:
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: TransformDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: TransformDefinition }
            output: TransformDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: TransformDefinition }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: TransformDefinition }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: TransformDefinition }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { TransformDefinitionId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            } & { json: TransformDefinition }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Transforms': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: TransformDefinition
            }
            output: Link
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: TransformDefinition
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: TransformDefinition
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: TransformDefinition
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } } & {
              json: TransformDefinition
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/User/:UserId': {
      $delete:
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/User/:UserId/Permissions': {
      $get:
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/User/:UserId/Tag/:TagId': {
      $delete:
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string; TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/User/:UserId/Tags': {
      $get:
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { UserId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Users': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: Link
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Users/Tag/:TagId': {
      $get:
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { TagId: string } } & {
              header: { Authorization: string; 'Api-Version': string }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Users/Tags': {
      $get:
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: LinkCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { Authorization: string; 'Api-Version': string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
