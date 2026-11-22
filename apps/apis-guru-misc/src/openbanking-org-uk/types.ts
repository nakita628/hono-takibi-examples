declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/atms': {
      $get:
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              data: {
                ATMID: string
                ATMServices: (
                  | 'Balance'
                  | 'BillPayments'
                  | 'CashDeposits'
                  | 'CashWithdrawal'
                  | 'CharityDonation'
                  | 'ChequeBookRequest'
                  | 'ChequeDeposits'
                  | 'FastCash'
                  | 'MiniStatement'
                  | 'MobileBankingRegistration'
                  | 'MobilePaymentRegistration'
                  | 'MobilePhoneTopUp'
                  | 'OrderStatement'
                  | 'PINActivation'
                  | 'PINChange'
                )[]
                AccessibilityTypes?:
                  | (
                      | 'AudioCashMachine'
                      | 'AutomaticDoors'
                      | 'ChairAccess'
                      | 'DriveThru'
                      | 'ExternalRamp'
                      | 'InductionLoop'
                      | 'InternalRamp'
                      | 'LevelAccess'
                      | 'LowerLevelCounter'
                      | 'WheelchairAccess'
                    )[]
                  | undefined
                AdditionalATMServices?: string[] | undefined
                Address: {
                  BuildingNumberOrName?: string | undefined
                  Country: string
                  CountrySubDivision?: string | undefined
                  OptionalAddressField?: string | undefined
                  PostCode: string
                  StreetName: string
                  TownName?: string | undefined
                }
                BranchIdentification?: string | undefined
                Currency: string[]
                GeographicLocation: { Latitude: string; Longitude: string }
                LocationCategory?:
                  | 'Airport'
                  | 'BankSpecialisedOutlet'
                  | 'BranchExternal'
                  | 'BranchInternal'
                  | 'BranchLobby'
                  | 'BureauDeChange'
                  | 'CoachStation'
                  | 'CommercialSpaceInternal'
                  | 'ConvenienceStore'
                  | 'ExhibitionCentre'
                  | 'FactoryOrOffice'
                  | 'FillingStation'
                  | 'FinancialInstitution'
                  | 'GovernmentOffice'
                  | 'Hospital'
                  | 'Hotel'
                  | 'KioskPod'
                  | 'LeisureCentre'
                  | 'PleasurePark'
                  | 'PublicHouse'
                  | 'RailwayStation'
                  | 'RemoteUnit'
                  | 'RetailerDepartmentStore'
                  | 'RetailerOutlet'
                  | 'SeaportTerminal'
                  | 'ServiceStation'
                  | 'ShoppingCentreExternal'
                  | 'ShoppingCentreInternal'
                  | 'StorageDepot'
                  | 'SupermarketExternal'
                  | 'SupermarketInternal'
                  | 'UndergroundRailwayStation'
                  | 'UniversityOrCollege'
                  | undefined
                MinimumValueDispensed?: '£5' | '£10' | '£20' | '£50' | '£100' | undefined
                Organisation: {
                  Brand: { TrademarkID: string; TrademarkIPOCode: 'UK' | 'EU' }
                  ParentOrganisation: {
                    BIC?: string | undefined
                    LEI?: string | undefined
                    OrganisationName: { LegalName: string }
                  }
                }
                SiteID?: string | undefined
                SiteName?: string | undefined
                SupportedLanguages: string[]
              }[]
              meta: {
                Agreement: 'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions'
                LastUpdated: string
                License: 'https://www.openbanking.org.uk/open-licence'
                TermsOfUse: 'https://www.openbanking.org.uk/terms'
                TotalResults: number
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have sent a request which could not be understood.'
              status: '400'
              title: 'Bad request'
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'Your client has failed to submit a request, and a timeout has occurred.'
              status: '408'
              title: 'Client timeout'
            }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have requested this resource too often. Slow down.'
              status: '429'
              title: 'Too many requests'
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'An error occurred on the server. No further information is available.'
              status: '500'
              title: 'Internal server error'
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'The service is temporarily unavailable.'
              status: '503'
              title: 'Service temporarily unavailable'
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: { description: string; status: string; title: string }
            outputFormat: 'json'
            status: 200
          }
      $head: {
        input: {
          header: { 'If-Modified-Since'?: string | undefined; 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/branches': {
      $get:
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              data: {
                ATMAtBranch: boolean
                AccessibilityTypes?:
                  | 'AudioCashMachine'
                  | 'AutomaticDoors'
                  | 'ChairAccess'
                  | 'DriveThru'
                  | 'ExternalRamp'
                  | 'InductionLoop'
                  | 'InternalRamp'
                  | 'LevelAccess'
                  | 'LowerLevelCounter'
                  | 'WheelchairAccess'
                  | undefined
                Address: {
                  BuildingNumberOrName?: string | undefined
                  Country: string
                  CountrySubDivision?: string | undefined
                  OptionalAddressField?: string | undefined
                  PostCode?: string | undefined
                  StreetName?: string | undefined
                  TownName?: string | undefined
                }
                AlternatePhone?:
                  | {
                      AlternateTelephoneNumber?: string | undefined
                      AlternateTelephoneNumberDescription?: string | undefined
                    }[]
                  | undefined
                ArrivalTime?: string | undefined
                BranchDescription?: string | undefined
                BranchFacilitiesName?:
                  | (
                      | 'BusinessITSupport'
                      | 'CollectionLockers'
                      | 'MeetingRooms'
                      | 'Parking'
                      | 'Wifi'
                    )[]
                  | undefined
                BranchIdentification: string
                BranchMediatedServiceName?:
                  | (
                      | 'BureauDeChange'
                      | 'BusinessCounter'
                      | 'CardIssuanceFacility'
                      | 'CounterServices'
                      | 'DriveThru'
                      | 'MortgageAdvisor'
                      | 'NightSafe'
                      | 'OnDemandCurrency'
                      | 'PremierCounter'
                      | 'VideoBanking'
                      | 'WheelChairAccess'
                    )[]
                  | undefined
                BranchName?: string | undefined
                BranchOtherFacilities?: string[] | undefined
                BranchOtherMediatedServices?: string[] | undefined
                BranchOtherSelfServices?: string[] | undefined
                BranchPhoto?: string | undefined
                BranchSelfServeServiceName?:
                  | (
                      | 'AccountVerificationService'
                      | 'AssistedServiceCounter'
                      | 'BusinessDepositTerminal'
                      | 'CashChequeDepositMachineCoin'
                      | 'CashChequeDepositMachineNoCoin'
                      | 'ExternalAtmAudio'
                      | 'ExternalAtmNoAudio'
                      | 'ExternalQuickServicePoint'
                      | 'InternalAtmAudio'
                      | 'InternalAtmNoAudio'
                      | 'InternalQuickServicePoint'
                      | 'LodgementDevice'
                      | 'OnlineBankingPoint'
                      | 'QuickDeposit'
                      | 'SaturdayCounterService'
                      | 'SelfServiceAccountOpening'
                      | 'StatementPrinter'
                    )[]
                  | undefined
                BranchType: 'Physical' | 'Mobile'
                CustomerSegment: (
                  | 'Business'
                  | 'Corporate'
                  | 'Personal'
                  | 'Premier'
                  | 'Private'
                  | 'Select'
                  | 'SME'
                  | 'Wealth'
                )[]
                DaysOfTheWeek?: string | undefined
                DepartureTime?: string | undefined
                FaxNumber?: string[] | undefined
                GeographicLocation?: { Latitude: string; Longitude: string } | undefined
                OpeningTimes: {
                  ClosingTime: string
                  OpeningDay:
                    | 'Monday'
                    | 'Tuesday'
                    | 'Wednesday'
                    | 'Thursday'
                    | 'Friday'
                    | 'Saturday'
                    | 'Sunday'
                    | 'Public and Bank Holiday'
                  OpeningTime: string
                  UnavailableFinishTime?: string | undefined
                  UnavailableStartTime?: string | undefined
                }[]
                Organisation: {
                  Brand: { TrademarkID: string; TrademarkIPOCode: 'UK' | 'EU' }
                  ParentOrganisation: {
                    BIC?: string | undefined
                    LEI?: string | undefined
                    OrganisationName: { LegalName: string }
                  }
                }
                ParkingLocation?: string | undefined
                PlannedBranchClosure?:
                  | { EndDate?: string | undefined; StartDate?: string | undefined }[]
                  | undefined
                StopName?: string | undefined
                TelephoneNumber: string
              }[]
              meta: {
                Agreement: 'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions'
                LastUpdated: string
                License: 'https://www.openbanking.org.uk/open-licence'
                TermsOfUse: 'https://www.openbanking.org.uk/terms'
                TotalResults: number
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have sent a request which could not be understood.'
              status: '400'
              title: 'Bad request'
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'Your client has failed to submit a request, and a timeout has occurred.'
              status: '408'
              title: 'Client timeout'
            }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have requested this resource too often. Slow down.'
              status: '429'
              title: 'Too many requests'
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'An error occurred on the server. No further information is available.'
              status: '500'
              title: 'Internal server error'
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'The service is temporarily unavailable.'
              status: '503'
              title: 'Service temporarily unavailable'
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: { description: string; status: string; title: string }
            outputFormat: 'json'
            status: 200
          }
      $head: {
        input: {
          header: { 'If-Modified-Since'?: string | undefined; 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/business-current-accounts': {
      $get:
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              data: {
                AccessChannels: (
                  | 'ATM'
                  | 'Branch'
                  | 'BusinessCommercialCentre'
                  | 'CallCentre'
                  | 'MobileApps'
                  | 'MobileBanking'
                  | 'Online'
                  | 'Phone'
                  | 'Post'
                  | 'PostOffice'
                  | 'RelationshipManager'
                  | 'Text'
                )[]
                Benefits: {
                  Benefit: boolean
                  BenefitGroup?:
                    | {
                        BenefitItem: {
                          BenefitDetail?:
                            | {
                                BenefitDescription?: string | undefined
                                BenefitID?: string | undefined
                                BenefitName?: string | undefined
                                BenefitType?: string | undefined
                                BenefitValue?: string | undefined
                                Counter?: number | undefined
                                CriteriaType?:
                                  | (
                                      | 'CashDeposit'
                                      | 'Deposit'
                                      | 'DirectDebit'
                                      | 'InitialDeposit'
                                      | 'InternetLogon'
                                      | 'MobileLogon'
                                      | 'RegularDeposit'
                                    )[]
                                  | undefined
                                DefaultToAccounts?: boolean | undefined
                                MaximumCriteria?: string | undefined
                                MinimumCriteria?: string | undefined
                                PromotionEndDate?: string | undefined
                                PromotionStartDate?: string | undefined
                              }[]
                            | undefined
                          DateOfChange?: string | undefined
                          LengthPromotionalInDays?: number | undefined
                          StartPromotionOrFutureTerms?: string | undefined
                          StopPromotionOrFutureTerms?: string | undefined
                        }
                        BenefitSubType?:
                          | 'FutureMultipleTerms'
                          | 'Promotional'
                          | 'Regular'
                          | undefined
                      }[]
                    | undefined
                }
                CAPricing: {
                  CAPricingItem: {
                    DateOfChange?: string | undefined
                    ExchangeRateAdjustment?: string | undefined
                    LengthPromotionalInDays?: number | undefined
                    StartPromotionOrFutureTerms?: string | undefined
                    StopPromotionOrFutureTerms?: string | undefined
                  }
                  ProductState: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                }[]
                CardNotes?: string | undefined
                CardType: (
                  | 'BasicCard'
                  | 'BusinessQuickLodgeCard'
                  | 'Cashcard'
                  | 'ContactlessCashcard'
                  | 'ContactlessDebitMastercard'
                  | 'ContactlessDebitVisa'
                  | 'DebitMastercard'
                  | 'VisaDebit'
                  | 'DepositCard'
                  | 'OperatorCard'
                  | 'POCACard'
                )[]
                CardWithdrawalLimit: string
                ChequeBookAvailable: boolean
                Contactless: boolean
                CreditInterest: {
                  CreditCharged: boolean
                  CreditInterestGroup?:
                    | {
                        CreditInterestItem: {
                          CalculationFrequency?:
                            | 'Daily'
                            | 'Weekly'
                            | 'Monthly'
                            | 'Quarterly'
                            | 'Half-Yearly'
                            | 'Yearly'
                            | 'Overnight'
                            | undefined
                          CalculationMethod?: 'Banded' | 'Tiered' | 'Whole' | undefined
                          DateOfChange?: string | undefined
                          EndDate?: string | undefined
                          FixedInterestLength?: number | undefined
                          InterestNotes?: string | undefined
                          InterestRateType?: 'Fixed' | 'Variable' | undefined
                          InterestTiers?:
                            | {
                                APRAERRate?: string | undefined
                                DailyChargeForMaximum?: string | undefined
                                DailyChargeForMinimum?: string | undefined
                                InterestTier?: string | undefined
                                Rate?: string | undefined
                                RateComparisonType?:
                                  | 'APR'
                                  | 'AER'
                                  | 'Gross'
                                  | 'Net'
                                  | 'RepApr'
                                  | undefined
                                TierValueMaximum?: string | undefined
                                TierValueMinimum?: string | undefined
                              }[]
                            | undefined
                          LengthPromotionalInDays?: number | undefined
                          PaymentMethod?:
                            | 'Compound'
                            | 'PayAway'
                            | 'SelfCredit'
                            | 'SimpleInterest'
                            | undefined
                          StartDate?: string | undefined
                          StartPromotionOrFutureTerms?: string | undefined
                          StopPromotionOrFutureTerms?: string | undefined
                        }
                        InterestTierSubType?:
                          | 'FutureMultipleTerms'
                          | 'Promotional'
                          | 'Regular'
                          | undefined
                      }[]
                    | undefined
                }
                CreditScoringPartOfAccountOpeningForGettingAnAccount: boolean
                CreditScoringPartOfAccountOpeningForIDVerification?: boolean | undefined
                CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore?:
                  | ('Hard' | 'Soft')[]
                  | undefined
                CreditScoringPartOfAccountOpeningIDVerificationText?: string[] | undefined
                CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?:
                  | ('Hard' | 'Soft')[]
                  | undefined
                CreditScoringPartOfAccountOpeningText?: string | undefined
                Currency: string[]
                Eligibility: {
                  AgeRestricted: boolean
                  AnnualBusinessTurnover?: string | undefined
                  AnnualBusinessTurnoverCurrency?: string | undefined
                  Description: string
                  EligibilityName?: string | undefined
                  EligibilityNotes?: string | undefined
                  EligibilityType?:
                    | 'AnyBusinessCustomer'
                    | 'BusinessOnly'
                    | 'CreditCard'
                    | 'CreditScoring'
                    | 'EmailAddress'
                    | 'ExistingCustomers'
                    | 'IdAndV'
                    | 'Mortgage'
                    | 'NoArrearsOnLoan'
                    | 'NoCustomerInArrears'
                    | 'NoOverOverdraftThirtyDays'
                    | 'NoSoleUkAccountOrBankrupt'
                    | 'NTB'
                    | 'NTBBusiness'
                    | 'SoleStudentAccount'
                    | 'SoleUkAccount'
                    | 'StudentsOnly'
                    | 'TwoMonthsOfCourseStart'
                    | 'UCASFulltimeTwoYears'
                    | undefined
                  IncomeCondition?: string | undefined
                  IncomeTurnoverRelated: boolean
                  MarketingEligibility?:
                    | ('ExistingCustomers' | 'NewCustomersOnly' | 'SwitchersOnly' | 'StartUp')[]
                    | undefined
                  MaxNumberOfAccounts?: string | undefined
                  MaximumAge?: number | undefined
                  MaximumAgeToOpen?: number | undefined
                  MaximumOpeningAmount?: boolean | undefined
                  MinIncomeTurnoverPaidIntoAccount?: number | undefined
                  MinimumAge?: number | undefined
                  MinimumDeposit?: boolean | undefined
                  MinimumIncomeFrequency?:
                    | 'AcademicTerm'
                    | 'HalfYearly'
                    | 'Monthly'
                    | 'Quarterly'
                    | 'Weekly'
                    | 'Yearly'
                    | undefined
                  MinimumIncomeTurnoverAmount?: string | undefined
                  MinimumIncomeTurnoverCurrency?: string | undefined
                  MinimumOperatingBalance?: string | undefined
                  MinimumOperatingBalanceCurrency?: string | undefined
                  MinimumOperatingBalanceExists?: boolean | undefined
                  OpeningDepositMaximumAmount?: string | undefined
                  OpeningDepositMaximumCurrency?: string | undefined
                  OpeningDepositMinimum?: string | undefined
                  OpeningDepositMinimumCurrency?: string | undefined
                  OtherFinancialHoldingRequired: boolean
                  PreviousBankruptcy: boolean
                  ResidencyRestricted: boolean
                  ResidencyRestrictedRegion?:
                    | 'UK'
                    | 'EEA'
                    | 'EU'
                    | 'EFTA'
                    | 'GB - ENG'
                    | 'GB - NIR'
                    | 'GB - SCT'
                    | 'GB - WLS'
                    | 'IRL'
                    | undefined
                  SingleJointIncome?:
                    | 'Joint'
                    | 'SoleIncome'
                    | 'SoleOrJoint'
                    | 'Turnover'
                    | undefined
                  ThirdSectorOrganisations: boolean
                }
                Feature?:
                  | {
                      DateOfChange?: string | undefined
                      ExistingFeature: boolean
                      FeatureDetails?:
                        | {
                            CriteriaType?: string | undefined
                            DateOfChange?: string | undefined
                            FeatureDescription?: string | undefined
                            FeatureName?: string | undefined
                            FeatureSubType?:
                              | 'FutureMultipleTerms'
                              | 'Promotional'
                              | 'Regular'
                              | undefined
                            FeatureType?: string | undefined
                            FeatureValue?: string | undefined
                            LengthPromotionalInDays?: number | undefined
                            StartPromotionOrFutureTerms?: string | undefined
                            StopPromotionOrFutureTerms?: string | undefined
                          }[]
                        | undefined
                      LengthPromotionalInDays?: number | undefined
                      ProductState?: 'FutureMultipleTerms' | 'Promotional' | 'Regular' | undefined
                      StartPromotionOrFutureTerms?: string | undefined
                      StopPromotionOrFutureTerms?: string | undefined
                    }[]
                  | undefined
                FeesAndCharges: {
                  Fees: {
                    DateOfChange?: string | undefined
                    FeeDetails: {
                      FeeDetail: {
                        DateOfChange?: string | undefined
                        FeeSubDetails: {
                          FeeAmount?: string | undefined
                          FeeFrequency:
                            | 'AcademicTerm'
                            | 'AccountClosing'
                            | 'AccountOpening'
                            | 'AtTimeOfLoanRepayment'
                            | 'ChargingPeriod'
                            | 'Daily'
                            | 'EveryFiveBusinessDays'
                            | 'Item'
                            | 'Monthly'
                            | 'OnAccountAnniversary'
                            | 'PerHour'
                            | 'PerOccurrence'
                            | 'PerSheet'
                            | 'PerTransactionAmount'
                            | 'PerTransactionPercentage'
                            | 'Quarterly'
                            | 'SixMonthly'
                            | 'StartOfLoan'
                            | 'StatementMonthly'
                            | 'Weekly'
                            | 'Yearly'
                          FeeHigherTier?: number | undefined
                          FeeLowerTier?: number | undefined
                          FeeMax?: string | undefined
                          FeeMin?: string | undefined
                          FeeRate?: string | undefined
                          FeesAndChargesNotes?: string | undefined
                          Negotiable: boolean
                          RepresentativeRate?: string | undefined
                        }
                        FeeType:
                          | 'Other'
                          | 'ATMDonation'
                          | 'ATMDeposATMPaidIn'
                          | 'ReportCertBalance'
                          | 'ATMAbroadConVisaCredit'
                          | 'ATMAbroadConVisaDebit'
                          | 'ATMCardnetEnvIn'
                          | 'ATMCashGroupATMCreditCard'
                          | 'ATMCashNonGroupATMCredittcard'
                          | 'ATMCashGroupATMDebitCard'
                          | 'ATMCashNonGroupATMDebitcard'
                          | 'ATMConGroupATM'
                          | 'ATMAbroad'
                          | 'ATMForeignCashDebCard'
                          | 'ATMAbroadGoldVisaDebit'
                          | 'ATMSpainCashCard'
                          | 'ATMSpainDebitCard'
                          | 'ATMSpainConversionDebitCard'
                          | 'ATMSpainConversionCashCard'
                          | 'ATMNonSterlingWithdrawal'
                          | 'ATMAbroadVisaCredit'
                          | 'ATMAbroadVisaDebit'
                          | 'ATMAbroadConVisaGoldDebit'
                          | 'ATMWidthdrawCash'
                          | 'BACSOnLineAncilliary'
                          | 'BACSBatch'
                          | 'BACSOnLineFile'
                          | 'BACSFileItem'
                          | 'BACSOnLineSetup '
                          | 'BACSItem'
                          | 'BACSItemInterbranch'
                          | 'BACSBulkBatch'
                          | 'BACSOnLineOverlimit'
                          | 'BACSOnLinePayment'
                          | 'BACSRecallItem'
                          | 'BACSOnLineService'
                          | 'BACSBulkInternet'
                          | 'BACSTELDirDebSmartCard'
                          | 'BACSTELDirDebWebInit'
                          | 'BACSTELirDebWebInit'
                          | 'BACSTELDirDebOverlimit'
                          | 'BACSTELDirDebPayment'
                          | 'BACSTELDirDebService'
                          | 'BACSTELDirDebAncilliary'
                          | 'BACSDirectItemProfile'
                          | 'BACSTELAncilliary'
                          | 'BACSTELSmartCard'
                          | 'BACSTELFile'
                          | 'BACSTELSetup '
                          | 'BACSTELOverlimit'
                          | 'BACSTELPayment'
                          | 'BACSTELService'
                          | 'CHAPSOutBranch'
                          | 'CHAPSCancellation'
                          | 'CHAPSOutOnlineDepositAcc'
                          | 'CHAPSIn'
                          | 'CHAPSOutInterBank'
                          | 'CHAPSInterBank'
                          | 'CHAPSOutPost'
                          | 'CHAPSOutInterBranch'
                          | 'CHAPSOut'
                          | 'CHAPSOutOnline'
                          | 'CHAPSandForeignPay'
                          | 'CHAPSOutManual'
                          | 'CardCardReplacement'
                          | 'DraftsCounter'
                          | 'DraftsBankers'
                          | 'DraftsIntlPayableAbroad'
                          | 'DraftsLostStolen'
                          | 'CardPersonalisedCard'
                          | 'DraftsIntlStoppedCancelled'
                          | 'EuroChqXLess'
                          | 'EuroChqXPlus'
                          | 'FPSOutFutureDated'
                          | 'FPSOutImmediate'
                          | 'FPSOut'
                          | 'FPSOutOwn'
                          | 'FPSInBranch'
                          | 'FPSUKPayUrgent'
                          | 'LegalArticlesReport'
                          | 'LegalSealing'
                          | 'LegalBondAndGuarantee'
                          | 'LegalCourtOrder'
                          | 'LegalCoSearch'
                          | 'LegalDepositAssignment'
                          | 'LegalGuaranteePrep'
                          | 'LegalLifePolicyPrepCo'
                          | 'LegalLifePolicyPrepPersonal'
                          | 'LegalPriorityPariPassu'
                          | 'LegalSubordinationAgreement'
                          | 'DirDebDirectDebitAdmin'
                          | 'DirDebDirectDebitCancel'
                          | 'IntlPayBIBForeignLimit'
                          | 'IntlPayCreditTransCust'
                          | 'IntlPayCreditTransNonCust'
                          | 'IntlPayUrgentPaymentForeign'
                          | 'IntlPayExpressMoneyMover'
                          | 'IntlPayEEAPayUrgent'
                          | 'IntlPayIrishPayUrgent'
                          | 'IntlPayEEAPay'
                          | 'IntlPayForeignIn1CPlus'
                          | 'IntlPayForeignPaymentInUKAcc'
                          | 'IntlPayForeignCharge'
                          | 'IntlPayForeignCancellation'
                          | 'IntlPayForeignStandardEUEuroBIC'
                          | 'IntlPayFXFeeRate'
                          | 'IntlPayForeignInternet'
                          | 'IntlPayForeign'
                          | 'IntlPayForeignInbound'
                          | 'IntlPayFXPaymentOut'
                          | 'IntlPayForeignInSub1C'
                          | 'IntlPayFXRate'
                          | 'IntlPayForeignStandardEUEuroNoBIC'
                          | 'IntlPayFXPaymentOutIR'
                          | 'IntlPayFXFee'
                          | 'IntlPayPurchaseNonSterling'
                          | 'IntlPayPostPaymentForeign'
                          | 'IntlPayPurchaseRateNonSterling'
                          | 'IntlPayPaymentTracing'
                          | 'IntlPayStandardMoneyMover'
                          | 'IntlPayMT101Transaction'
                          | 'IntlPayTransNonSterling'
                          | 'IntlPayTransRateNonSterling'
                          | 'IntlPayForeignUrgentEUEuroBIC'
                          | 'IntlPayForeignUrgentEUEuroNoBIC'
                          | 'IntlPayUrgentPaymentGroup'
                          | 'IntlPayUrgentPaymentUK'
                          | 'IntlPayUSAPayUrgent'
                          | 'IntlPayCurrencyPurchase'
                          | 'IntlPayWorldpayPayment'
                          | 'IntlPayCurrencyWithdraw'
                          | 'InvPayBankDetailsWrong'
                          | 'InvPayForeignBCNR'
                          | 'InvPayForeignRecall'
                          | 'InvGeneralInq'
                          | 'InvOldInstruction'
                          | 'InvPayPaymentRecall'
                          | 'InvPayReturnDebitXVLess'
                          | 'InvPayReturnDebitXVPlus'
                          | 'InvPayStopPayment'
                          | 'InvPayStandingOrdUnpaid'
                          | 'SafeKeepAccess'
                          | 'SafeKeepDeedMedium'
                          | 'SafeKeepingEnvelope'
                          | 'SafeKeepingInspection'
                          | 'SafeKeepingLargeItem'
                          | 'SafeKeepMultipleItems'
                          | 'SafeKeepingParcel'
                          | 'SafeKeepDeedSmall'
                          | 'SafeKeepOneItem'
                          | 'SafeKeepSafeCustody'
                          | 'LoanArrangementFeePC'
                          | 'LoanArrangement'
                          | 'LoanEarlyRepayment'
                          | 'LoanLatePayment'
                          | 'LoanSMEUnsecuredLoan'
                          | 'LoanTieredArrangement'
                          | 'NightSafeNightSafeBankOpen'
                          | 'NightSafeCreditSub5K'
                          | 'NightSafeNightSafe'
                          | 'NightSafeNightSafePaidIn'
                          | 'OverdraftAnnualReview'
                          | 'OverdraftTempOverdraft'
                          | 'OverdraftUnauthorisedBorrowing'
                          | 'POPostOfficeCounterCredit'
                          | 'POPostOfficeCashCredit'
                          | 'POPostOfficeCashOut'
                          | 'POPostOfficeWithdrawal'
                          | 'ChqBookTheftLossAllStopped'
                          | 'ChqIssuedCurrencyAcc'
                          | 'ChqCopy'
                          | 'ChqDraft'
                          | 'ChqIn'
                          | 'ChqDraftSterling'
                          | 'ChqOutIssued'
                          | 'ChqSpecialChqPresentation'
                          | 'ChqCounterCheque'
                          | 'ChqChequeswithStatement'
                          | 'ChqStopped'
                          | 'ChqTrans'
                          | 'ChqDraftFX'
                          | 'ChqForeignCourier'
                          | 'ChqForeignNegTenThou'
                          | 'ChqForeignNegHundred'
                          | 'ChequeForeignBankDivi'
                          | 'ChqForeignNegFiftyThou'
                          | 'ChqPensionCheque'
                          | 'ChequeForeignOtherDivi'
                          | 'ChqForeignNegFiveThou'
                          | 'ChqForeignNegMax'
                          | 'ChqForeignGBPMMDPlus'
                          | 'ChqGiftCheque'
                          | 'ChqCounterLodgement'
                          | 'ChqCashDropLodgement'
                          | 'ChqChequePhotocopy'
                          | 'ChqPostOfficeCredit'
                          | 'ChqPostOfficeChequeCollected'
                          | 'ChqChequeRetrieval'
                          | 'ChqReconcilliationPerTrans'
                          | 'ChqSpecialPresentationCount'
                          | 'ChqSpecialPresentationPTT'
                          | 'ChqUnpaidCharge'
                          | 'ChqUnpaidTransIn'
                          | 'ChqUnpaidTransOut'
                          | 'ChqUnpaidCheque'
                          | 'ReportAuditLetter'
                          | 'ReportFAXAdviceAdditional'
                          | 'ReportTelAdviceAdditional'
                          | 'ReportCreditHistory'
                          | 'ReportCertInterestDuplicate'
                          | 'ReportCertInterest'
                          | 'ReportCreditHistoryAdditionalInYear'
                          | 'ReportForeignStatusEnqElec'
                          | 'ReportForeignStatusEnq'
                          | 'ReportCashBackorInterestAnal'
                          | 'ReportStatementChqDaily'
                          | 'ReportStatementChqFortnightly'
                          | 'ReportStatementChqMonthly'
                          | 'ReportStatementChqWeekly'
                          | 'ReportStatementAndDiviChq'
                          | 'ReportReference'
                          | 'ReportReferralItem'
                          | 'ReportStatementByATM'
                          | 'ReportStatementByBranch'
                          | 'ReportStatementCopyRegular'
                          | 'ReportStatusEnquiry'
                          | 'ReportStatementFrequent'
                          | 'ReportStatementMonthly'
                          | 'ReportStatementCopy1'
                          | 'ReportStatementToBranch'
                          | 'ReportSMSTextMiniStatementorAlert'
                          | 'ReportStatementFortnightly'
                          | 'ReportSMSTextMiniStatementWoM'
                          | 'ReportSMSTextAlertBalance'
                          | 'ReportSMSTextAlert'
                          | 'ReportTaxCert'
                          | 'ReportWeeklyStatement'
                          | 'ReportTextMessageBanking'
                          | 'SEPACancellation'
                          | 'SEPABranch'
                          | 'SEPACredit'
                          | 'SEPADirectDebit'
                          | 'SEPAIn'
                          | 'SEPAEuro'
                          | 'SEPAOut'
                          | 'SEPAUnpaid'
                          | 'SEPAWinbitsAnnual Service'
                          | 'SEPAWinbitsTransaction'
                          | 'TransBillPaymentBranch'
                          | 'TransBillCollect'
                          | 'TransTelephoneBillPayment'
                          | 'TransBankPayment'
                          | 'TransBillPaymentTelephone'
                          | 'TransCorrespondentBankFee'
                          | 'TransCreditTransferUKDifferent'
                          | 'TransCreditTransferUKSame'
                          | 'TransCredit'
                          | 'TransCreditTransfer'
                          | 'TransBranchCredit'
                          | 'TransDebit'
                          | 'TransDebCardDeb'
                          | 'TransUKDirDeb'
                          | 'TransManualDeb'
                          | 'TransBuyForeignWithGBP'
                          | 'TransGoodValueReq'
                          | 'TransSWIFTOutUKForeign'
                          | 'TransInconpleteInstruction'
                          | 'TransManualEntries'
                          | 'TransManualTrans'
                          | 'TransNonSterling'
                          | 'TransPOSSaleForeign'
                          | 'TransPriPaymentPost'
                          | 'TransPOSSaleUK'
                          | 'TransReturnPayment'
                          | 'TransReconciliationPerTrans'
                          | 'TransStandingOrdAdmin'
                          | 'TransStandingOrd'
                          | 'TransStandingOrdManPay'
                          | 'TransTravellersChqOtherBank'
                          | 'TransTelBusiPriPaymentForeignToUKAcc'
                          | 'TransTeleItem'
                          | 'TransTelBusiPriPaymentToGrpAcc'
                          | 'TransTravellersChqRate'
                          | 'TransTransferExGroup'
                          | 'TransUnauthorisedPaidTrans'
                          | 'TransUrgentPaymentPostal'
                          | 'TransUnpaidTrans'
                          | 'TransTelBusiPriPaymentToNonGrpAcc'
                          | 'TransSWIFTOutNonEEASterling'
                          | 'AutoAutoCredit'
                          | 'AutoAutomatedEntries'
                          | 'AutoAutoCreditPhoneInet'
                          | 'AutoAutomatedTrans'
                          | 'AutoDebitCardCommercial'
                          | 'AutoFPSAutoCredit'
                          | 'VisaConvertAbroadForeign'
                          | 'VisaBureauDeChange'
                          | 'VisaTravellersChqorCurrency'
                          | 'OnlineInternetBillPayment'
                          | 'OnlineBusinessOnlineEuroPayment'
                          | 'OnlineBusinessOnlineUrgentEuroPayment'
                          | 'OnlineBusinessOnlineForeignPayment'
                          | 'OnlineInterbankTransfer'
                          | 'OnlineInterbankPerTransfer'
                          | 'OnlineInterbranchTransfer'
                          | 'OnlineInterbranchPerTransfer'
                          | 'OnlineSubscriptionMonthly'
                          | 'OnlineBankingPayment'
                          | 'OnlineBankingSubscription'
                          | 'OnlinePOSSale'
                          | 'OnlinePersonalCustAncillarys'
                          | 'OnlinePersonalCustService'
                          | 'OnlinePersonalCustOverlimits'
                          | 'OnlineReplacementCardReader'
                          | 'OnlinePersonalCustSetUp'
                          | 'OnlinePersonalCustTransaction'
                          | 'OnlinePaymentinGBPtoUK'
                          | 'OnlineUrgentPayment'
                          | 'OnlinePaymentinUSDtoUS'
                          | 'OnlineBulkDirectDebSterling'
                          | 'ForeignChqSent'
                          | 'ForeignChqSelf'
                          | 'ForeignChqEncashment'
                          | 'ForeignFXInwardsCust'
                          | 'ForeignFXTransfersROI'
                          | 'ForeignFXForwardTrans'
                          | 'ForeignFXTransfersBOI'
                          | 'ForeignExMaintenance'
                          | 'ForeignFXInwardsNonCust'
                          | 'ForeignFXOutwards'
                          | 'ForeignPurchase'
                          | 'ForeignStatusRep'
                          | 'ForeignChqDraft'
                          | 'ForeignChqCLess'
                          | 'ForeignChqMLess'
                          | 'ForeignChqOther'
                          | 'ForeignChqMPlus'
                          | 'ForeignChqCCC'
                          | 'ServiceCAccountFee'
                          | 'ServiceCAccountFeeMonthly'
                          | 'ServiceCAccountFeeQuarterly'
                          | 'ServiceCBalanceHandling'
                          | 'ServiceCFixedTariff'
                          | 'ServiceCBusiDepAccBreakage'
                          | 'ServiceCMonitorDaily'
                          | 'ServiceCManagementFee'
                          | 'ServiceCMinimumMonthlyFee'
                          | 'ServiceCMonitorMonthly'
                          | 'ServiceCMonitorWeekly'
                          | 'ServiceCSecurityFee'
                          | 'ServiceCMT940AccountFirst'
                          | 'ServiceCMT940AccountSubsequent'
                          | 'ServiceCOther'
                          | 'CounterCoinHandling'
                          | 'CounterCashIn'
                          | 'CounterCashInNotUs'
                          | 'CounterCashOut'
                          | 'CounterCashX'
                          | 'CounterForeignCashMax'
                          | 'CounterForeignNoteHandling'
                          | 'CounterForeignCashOut'
                          | 'CounterCashFeeRate'
                          | 'CounterForeignCashOutTx'
                          | 'CounterCounterLodgement'
                          | 'CounterCashDropLodgement'
                          | 'CounterNotesLodged'
                          | 'CounterNotesOut'
                          | 'CounterCashInOwn'
                          | 'CounterPaidTrans'
                          | 'CounterCashFeePercent'
                        LengthPromotionalInDays?: number | undefined
                        Other?: string | undefined
                        StartPromotionOrFutureTerms?: string | undefined
                        StopPromotionOrFutureTerms?: string | undefined
                      }
                      FeeSubType: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                    }[]
                    FeeHigherTier?: number | undefined
                    FeeLowerTier?: number | undefined
                    LengthPromotionalInDays?: number | undefined
                    StartPromotionOrFutureTerms?: string | undefined
                    StopPromotionOrFutureTerms?: string | undefined
                  }
                  ProductState: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                }[]
                InternationalPaymentsSupported: boolean
                MaximumMonthlyCharge?: string | undefined
                MobileWallet?:
                  | (
                      | 'AndroidPay'
                      | 'ApplePay'
                      | 'IssuerMobileApp'
                      | 'MobileBankingApp'
                      | 'Other'
                      | 'PayM'
                      | 'SamsungPay'
                      | 'VodafoneWallet'
                    )[]
                  | undefined
                Organisation: {
                  Brand: { TrademarkID: string; TrademarkIPOCode: 'UK' | 'EU' }
                  ParentOrganisation: {
                    BIC?: string | undefined
                    LEI?: string | undefined
                    OrganisationName: { LegalName: string }
                  }
                }
                Overdraft?:
                  | {
                      DateOfChange?: string | undefined
                      FeeChargeNegotiableIndicator?: 'No' | 'Yes' | undefined
                      FeesAndCharges?:
                        | {
                            FeeChargeAmount?: string | undefined
                            FeeChargeApplicationFrequency?:
                              | 'AcademicTerm'
                              | 'Daily'
                              | 'Weekly'
                              | 'Monthly'
                              | 'Quarterly'
                              | 'Half-Yearly'
                              | 'Yearly'
                              | 'Overnight'
                              | 'Other'
                              | undefined
                            FeeChargeCalculationFrequency?:
                              | 'AcademicTerm'
                              | 'Daily'
                              | 'Weekly'
                              | 'Monthly'
                              | 'Quarterly'
                              | 'Half-Yearly'
                              | 'Yearly'
                              | 'Overnight'
                              | 'Other'
                              | undefined
                            FeeChargeOtherApplicationFrequency?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            FeeChargeOtherCalculationFrequency?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            FeeChargeOtherType?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            FeeChargeRate?: string | undefined
                            FeeChargeRateOtherType?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            FeeChargeRateType?: 'Gross' | 'Net' | 'Other' | undefined
                            FeeChargeType:
                              | 'Periodic'
                              | 'Minimum'
                              | 'Maximum'
                              | 'Setup'
                              | 'Review'
                              | 'Renewal'
                              | 'MinimumSetup'
                              | 'MaximumSetup'
                              | 'Total'
                              | 'Item'
                              | 'EmergencyLending'
                              | 'Other'
                          }[]
                        | undefined
                      LengthPromotionalInDays?: number | undefined
                      MaximumMonthlyOverdraftCharge?: string | undefined
                      Notes?: string | undefined
                      OverdraftProductState?:
                        | 'FutureMultipleTerms'
                        | 'Promotional'
                        | 'Regular'
                        | undefined
                      OverdraftTierBandSet?:
                        | {
                            ArrangementOtherType?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            ArrangementType: 'Unarranged' | 'Arranged' | 'Other'
                            BufferAmount?: string | undefined
                            CMADefinedIndicator: boolean
                            EAR?: string | undefined
                            FeesAndCharges?:
                              | {
                                  FeeChargeAmount?: string | undefined
                                  FeeChargeApplicationFrequency?:
                                    | 'AcademicTerm'
                                    | 'Daily'
                                    | 'Weekly'
                                    | 'Monthly'
                                    | 'Quarterly'
                                    | 'Half-Yearly'
                                    | 'Yearly'
                                    | 'Overnight'
                                    | 'Other'
                                    | undefined
                                  FeeChargeCalculationFrequency?:
                                    | 'AcademicTerm'
                                    | 'Daily'
                                    | 'Weekly'
                                    | 'Monthly'
                                    | 'Quarterly'
                                    | 'Half-Yearly'
                                    | 'Yearly'
                                    | 'Overnight'
                                    | 'Other'
                                    | undefined
                                  FeeChargeOtherApplicationFrequency?:
                                    | {
                                        Code?: string | undefined
                                        Description?: string | undefined
                                        Name?: string | undefined
                                      }
                                    | undefined
                                  FeeChargeOtherCalculationFrequency?:
                                    | {
                                        Code?: string | undefined
                                        Description?: string | undefined
                                        Name?: string | undefined
                                      }
                                    | undefined
                                  FeeChargeOtherType?:
                                    | {
                                        Code?: string | undefined
                                        Description?: string | undefined
                                        Name?: string | undefined
                                      }
                                    | undefined
                                  FeeChargeRate?: string | undefined
                                  FeeChargeRateOtherType?:
                                    | {
                                        Code?: string | undefined
                                        Description?: string | undefined
                                        Name?: string | undefined
                                      }
                                    | undefined
                                  FeeChargeRateType?: 'Gross' | 'Net' | 'Other' | undefined
                                  FeeChargeType:
                                    | 'Periodic'
                                    | 'Minimum'
                                    | 'Maximum'
                                    | 'Setup'
                                    | 'Review'
                                    | 'Renewal'
                                    | 'MinimumSetup'
                                    | 'MaximumSetup'
                                    | 'Total'
                                    | 'Item'
                                    | 'EmergencyLending'
                                    | 'Other'
                                }[]
                              | undefined
                            Notes?: string | undefined
                            OverdraftTierBand?:
                              | {
                                  EAR?: string | undefined
                                  FeesAndCharges?:
                                    | {
                                        FeeChargeAmount?: string | undefined
                                        FeeChargeApplicationFrequency?:
                                          | 'AcademicTerm'
                                          | 'Daily'
                                          | 'Weekly'
                                          | 'Monthly'
                                          | 'Quarterly'
                                          | 'Half-Yearly'
                                          | 'Yearly'
                                          | 'Overnight'
                                          | 'Other'
                                          | undefined
                                        FeeChargeCalculationFrequency?:
                                          | 'AcademicTerm'
                                          | 'Daily'
                                          | 'Weekly'
                                          | 'Monthly'
                                          | 'Quarterly'
                                          | 'Half-Yearly'
                                          | 'Yearly'
                                          | 'Overnight'
                                          | 'Other'
                                          | undefined
                                        FeeChargeOtherApplicationFrequency?:
                                          | {
                                              Code?: string | undefined
                                              Description?: string | undefined
                                              Name?: string | undefined
                                            }
                                          | undefined
                                        FeeChargeOtherCalculationFrequency?:
                                          | {
                                              Code?: string | undefined
                                              Description?: string | undefined
                                              Name?: string | undefined
                                            }
                                          | undefined
                                        FeeChargeOtherType?:
                                          | {
                                              Code?: string | undefined
                                              Description?: string | undefined
                                              Name?: string | undefined
                                            }
                                          | undefined
                                        FeeChargeRate?: string | undefined
                                        FeeChargeRateOtherType?:
                                          | {
                                              Code?: string | undefined
                                              Description?: string | undefined
                                              Name?: string | undefined
                                            }
                                          | undefined
                                        FeeChargeRateType?: 'Gross' | 'Net' | 'Other' | undefined
                                        FeeChargeType:
                                          | 'Periodic'
                                          | 'Minimum'
                                          | 'Maximum'
                                          | 'Setup'
                                          | 'Review'
                                          | 'Renewal'
                                          | 'MinimumSetup'
                                          | 'MaximumSetup'
                                          | 'Total'
                                          | 'Item'
                                          | 'EmergencyLending'
                                          | 'Other'
                                      }[]
                                    | undefined
                                  Notes?: string | undefined
                                  TierBandIdentification?: string | undefined
                                  TierValueMaximum: string
                                  TierValueMinimum: string
                                }[]
                              | undefined
                            TierBandSetIdentification?: string | undefined
                          }[]
                        | undefined
                      OverdraftType?: 'Committed' | 'OnDemand' | undefined
                      StartPromotionOrFutureTerms?: string | undefined
                      StopPromotionOrFutureTerms?: string | undefined
                      Term?: string | undefined
                    }[]
                  | undefined
                OverdraftOffered: boolean
                ProductDescription: string
                ProductIdentifier: string
                ProductName?: string | undefined
                ProductSegment: (
                  | 'Basic'
                  | 'Business'
                  | 'General'
                  | 'Graduate'
                  | 'International'
                  | 'Packaged'
                  | 'Personal'
                  | 'Premium'
                  | 'Reward'
                  | 'SME'
                  | 'Student'
                  | 'YoungAdult'
                  | 'Youth'
                )[]
                ProductType: 'BCA'
                ProductURL: string[]
                TsandCs: string[]
              }[]
              meta: {
                Agreement: 'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions'
                LastUpdated: string
                License: 'https://www.openbanking.org.uk/open-licence'
                TermsOfUse: 'https://www.openbanking.org.uk/terms'
                TotalResults: number
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have sent a request which could not be understood.'
              status: '400'
              title: 'Bad request'
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'Your client has failed to submit a request, and a timeout has occurred.'
              status: '408'
              title: 'Client timeout'
            }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have requested this resource too often. Slow down.'
              status: '429'
              title: 'Too many requests'
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'An error occurred on the server. No further information is available.'
              status: '500'
              title: 'Internal server error'
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'The service is temporarily unavailable.'
              status: '503'
              title: 'Service temporarily unavailable'
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: { description: string; status: string; title: string }
            outputFormat: 'json'
            status: 200
          }
      $head: {
        input: {
          header: { 'If-Modified-Since'?: string | undefined; 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/commercial-credit-cards': {
      $get:
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              data: {
                Benefits: {
                  Benefit: boolean
                  BenefitGroup?:
                    | {
                        BenefitItem: {
                          BenefitDetail?:
                            | {
                                BenefitDescription?: string | undefined
                                BenefitID?: string | undefined
                                BenefitName?: string | undefined
                                BenefitType?: string | undefined
                                BenefitValue?: string | undefined
                                Counter?: number | undefined
                                CriteriaType?:
                                  | (
                                      | 'CashDeposit'
                                      | 'Deposit'
                                      | 'DirectDebit'
                                      | 'InitialDeposit'
                                      | 'InternetLogon'
                                      | 'MobileLogon'
                                      | 'RegularDeposit'
                                    )[]
                                  | undefined
                                DefaultToAccounts?: boolean | undefined
                                MaximumCriteria?: string | undefined
                                MinimumCriteria?: string | undefined
                                PromotionEndDate?: string | undefined
                                PromotionStartDate?: string | undefined
                              }[]
                            | undefined
                          DateOfChange?: string | undefined
                          LengthPromotionalInDays?: number | undefined
                          StartPromotionOrFutureTerms?: string | undefined
                          StopPromotionOrFutureTerms?: string | undefined
                        }
                        BenefitSubType?:
                          | 'FutureMultipleTerms'
                          | 'Promotional'
                          | 'Regular'
                          | undefined
                      }[]
                    | undefined
                }
                Description: string
                Details: {
                  CCSubType: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                  CommercialCreditCardItem: {
                    APRRate: string
                    AbilityToSetIndividualLimits?: boolean | undefined
                    AccessToOnlineDataReportingTool: boolean
                    AllocationofRepayment?: string | undefined
                    AnnualAccountFeeType?: string | undefined
                    AnnualFeeAmount: string
                    BalanceTransferInterestRatePeriod?: 'Annual' | 'Monthly' | undefined
                    BalanceTransferRate?: string | undefined
                    CardScheme: 'Cashcard' | 'CreditMastercard' | 'CreditVisa'
                    CashAdvanceRate: string
                    CashWithdrawalsAllowed: boolean
                    CashbackPercent?: string | undefined
                    ChequeFeePercent?: string | undefined
                    ConvenienceCheque: boolean
                    DateOfChange?: string | undefined
                    DaysInterestFreeCreditIfPaymentFull: number
                    ExchangeRateAdjustment: string
                    FeesOnCheque?: string | undefined
                    ForeignCashFee?: string | undefined
                    ForeignCashFeeRate?: string | undefined
                    ForeignPurchaseFee?: string | undefined
                    ForeignPurchaseFeeRate?: string | undefined
                    IssuingEmergencyCardsFees: string
                    LengthPromotionalInDays?: number | undefined
                    MaximumNumberOfCardsPermitted?: number | undefined
                    MinimumCreditLimit: string
                    MinimumLendingAmount?: string | undefined
                    MinimumRepaymentAmount?: string | undefined
                    MinimumRepaymentPercentage?: string | undefined
                    NonSterlingCashFee?: string | undefined
                    NonSterlingCashFeeRate?: string | undefined
                    NonSterlingPurchaseFee?: string | undefined
                    NonSterlingPurchaseFeeRate?: string | undefined
                    NonSterlingTransactionFee?: string | undefined
                    NonSterlingTransactionFeeRate?: string | undefined
                    OverLimitFee?: string | undefined
                    PaymentDaysAfterStatement: number
                    PaymentSchemeExchangeFee?: string | undefined
                    PaymentSchemeExchangeFeeRate?: string | undefined
                    PaymentSchemeExchangeRate?: string | undefined
                    PurchaseRate: string
                    RepaymentFrequency:
                      | 'Daily'
                      | 'Flexible'
                      | 'Fortnightly'
                      | 'HalfYearly'
                      | 'Monthly'
                      | 'Quarterly'
                      | 'Weekly'
                      | 'Yearly'
                    RepaymentNotes?: string | undefined
                    StartPromotionOrFutureTerms?: string | undefined
                    StatementAtAccountLevel: boolean
                    StatementAtPersonalLevel: boolean
                    StopPromotionOrFutureTerms?: string | undefined
                  }
                }
                Eligibility: {
                  AgeRestricted: boolean
                  AnnualBusinessTurnover?: string | undefined
                  AnnualBusinessTurnoverCurrency?: string | undefined
                  Description: string
                  EligibilityName?: string | undefined
                  EligibilityNotes?: string | undefined
                  EligibilityType?:
                    | 'AnyBusinessCustomer'
                    | 'BusinessOnly'
                    | 'CreditCard'
                    | 'CreditScoring'
                    | 'EmailAddress'
                    | 'ExistingCustomers'
                    | 'IdAndV'
                    | 'Mortgage'
                    | 'NoArrearsOnLoan'
                    | 'NoCustomerInArrears'
                    | 'NoOverOverdraftThirtyDays'
                    | 'NoSoleUkAccountOrBankrupt'
                    | 'NTB'
                    | 'NTBBusiness'
                    | 'SoleStudentAccount'
                    | 'SoleUkAccount'
                    | 'StudentsOnly'
                    | 'TwoMonthsOfCourseStart'
                    | 'UCASFulltimeTwoYears'
                    | undefined
                  IncomeCondition?: string | undefined
                  IncomeTurnoverRelated: boolean
                  MarketingEligibility?:
                    | ('ExistingCustomers' | 'NewCustomersOnly' | 'SwitchersOnly' | 'StartUp')[]
                    | undefined
                  MaxNumberOfAccounts?: string | undefined
                  MaximumAge?: number | undefined
                  MaximumAgeToOpen?: number | undefined
                  MaximumOpeningAmount?: boolean | undefined
                  MinIncomeTurnoverPaidIntoAccount?: number | undefined
                  MinimumAge?: number | undefined
                  MinimumDeposit?: boolean | undefined
                  MinimumIncomeFrequency?:
                    | 'AcademicTerm'
                    | 'HalfYearly'
                    | 'Monthly'
                    | 'Quarterly'
                    | 'Weekly'
                    | 'Yearly'
                    | undefined
                  MinimumIncomeTurnoverAmount?: string | undefined
                  MinimumIncomeTurnoverCurrency?: string | undefined
                  MinimumOperatingBalance?: string | undefined
                  MinimumOperatingBalanceCurrency?: string | undefined
                  MinimumOperatingBalanceExists?: boolean | undefined
                  OpeningDepositMaximumAmount?: string | undefined
                  OpeningDepositMaximumCurrency?: string | undefined
                  OpeningDepositMinimum?: string | undefined
                  OpeningDepositMinimumCurrency?: string | undefined
                  OtherFinancialHoldingRequired: boolean
                  PreviousBankruptcy: boolean
                  ResidencyRestricted: boolean
                  ResidencyRestrictedRegion?:
                    | 'UK'
                    | 'EEA'
                    | 'EU'
                    | 'EFTA'
                    | 'GB - ENG'
                    | 'GB - NIR'
                    | 'GB - SCT'
                    | 'GB - WLS'
                    | 'IRL'
                    | undefined
                  SingleJointIncome?:
                    | 'Joint'
                    | 'SoleIncome'
                    | 'SoleOrJoint'
                    | 'Turnover'
                    | undefined
                  ThirdSectorOrganisations: boolean
                }
                KeyFeatures: string
                Organisation: {
                  Brand: { TrademarkID: string; TrademarkIPOCode: 'UK' | 'EU' }
                  ParentOrganisation: {
                    BIC?: string | undefined
                    LEI?: string | undefined
                    OrganisationName: { LegalName: string }
                  }
                }
                OtherKeyFeatures?: string | undefined
                PaymentHoliday: boolean
                PaymentHolidayDescription?: string | undefined
                ProductIdentifier: string
                ProductName: string
                ProductSegment?:
                  | ('Cashback' | 'Corporate' | 'General' | 'Reward' | 'SME')[]
                  | undefined
                ProductType: 'CommercialCreditCards'
                ProductURL: string[]
                TsandCs: string[]
              }[]
              meta: {
                Agreement: 'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions'
                LastUpdated: string
                License: 'https://www.openbanking.org.uk/open-licence'
                TermsOfUse: 'https://www.openbanking.org.uk/terms'
                TotalResults: number
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have sent a request which could not be understood.'
              status: '400'
              title: 'Bad request'
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'Your client has failed to submit a request, and a timeout has occurred.'
              status: '408'
              title: 'Client timeout'
            }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have requested this resource too often. Slow down.'
              status: '429'
              title: 'Too many requests'
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'An error occurred on the server. No further information is available.'
              status: '500'
              title: 'Internal server error'
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'The service is temporarily unavailable.'
              status: '503'
              title: 'Service temporarily unavailable'
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: { description: string; status: string; title: string }
            outputFormat: 'json'
            status: 200
          }
      $head: {
        input: {
          header: { 'If-Modified-Since'?: string | undefined; 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/personal-current-accounts': {
      $get:
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              data: {
                AccessChannels: (
                  | 'ATM'
                  | 'Branch'
                  | 'BusinessCommercialCentre'
                  | 'CallCentre'
                  | 'MobileApps'
                  | 'MobileBanking'
                  | 'Online'
                  | 'Phone'
                  | 'Post'
                  | 'PostOffice'
                  | 'RelationshipManager'
                  | 'Text'
                )[]
                Benefits: {
                  Benefit: boolean
                  BenefitGroup?:
                    | {
                        BenefitItem: {
                          BenefitDetail?:
                            | {
                                BenefitDescription?: string | undefined
                                BenefitID?: string | undefined
                                BenefitName?: string | undefined
                                BenefitType?: string | undefined
                                BenefitValue?: string | undefined
                                Counter?: number | undefined
                                CriteriaType?:
                                  | (
                                      | 'CashDeposit'
                                      | 'Deposit'
                                      | 'DirectDebit'
                                      | 'InitialDeposit'
                                      | 'InternetLogon'
                                      | 'MobileLogon'
                                      | 'RegularDeposit'
                                    )[]
                                  | undefined
                                DefaultToAccounts?: boolean | undefined
                                MaximumCriteria?: string | undefined
                                MinimumCriteria?: string | undefined
                                PromotionEndDate?: string | undefined
                                PromotionStartDate?: string | undefined
                              }[]
                            | undefined
                          DateOfChange?: string | undefined
                          LengthPromotionalInDays?: number | undefined
                          StartPromotionOrFutureTerms?: string | undefined
                          StopPromotionOrFutureTerms?: string | undefined
                        }
                        BenefitSubType?:
                          | 'FutureMultipleTerms'
                          | 'Promotional'
                          | 'Regular'
                          | undefined
                      }[]
                    | undefined
                }
                CAPricing: {
                  CAPricingItem: {
                    DateOfChange?: string | undefined
                    ExchangeRateAdjustment?: string | undefined
                    LengthPromotionalInDays?: number | undefined
                    StartPromotionOrFutureTerms?: string | undefined
                    StopPromotionOrFutureTerms?: string | undefined
                  }
                  ProductState: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                }[]
                CardNotes?: string | undefined
                CardType: (
                  | 'BasicCard'
                  | 'BusinessQuickLodgeCard'
                  | 'Cashcard'
                  | 'ContactlessCashcard'
                  | 'ContactlessDebitMastercard'
                  | 'ContactlessDebitVisa'
                  | 'DebitMastercard'
                  | 'VisaDebit'
                  | 'DepositCard'
                  | 'OperatorCard'
                  | 'POCACard'
                )[]
                CardWithdrawalLimit: string
                ChequeBookAvailable: boolean
                Contactless: boolean
                CreditInterest: {
                  CreditCharged: boolean
                  CreditInterestGroup?:
                    | {
                        CreditInterestItem: {
                          CalculationFrequency?:
                            | 'Daily'
                            | 'Weekly'
                            | 'Monthly'
                            | 'Quarterly'
                            | 'Half-Yearly'
                            | 'Yearly'
                            | 'Overnight'
                            | undefined
                          CalculationMethod?: 'Banded' | 'Tiered' | 'Whole' | undefined
                          DateOfChange?: string | undefined
                          EndDate?: string | undefined
                          FixedInterestLength?: number | undefined
                          InterestNotes?: string | undefined
                          InterestRateType?: 'Fixed' | 'Variable' | undefined
                          InterestTiers?:
                            | {
                                APRAERRate?: string | undefined
                                DailyChargeForMaximum?: string | undefined
                                DailyChargeForMinimum?: string | undefined
                                InterestTier?: string | undefined
                                Rate?: string | undefined
                                RateComparisonType?:
                                  | 'APR'
                                  | 'AER'
                                  | 'Gross'
                                  | 'Net'
                                  | 'RepApr'
                                  | undefined
                                TierValueMaximum?: string | undefined
                                TierValueMinimum?: string | undefined
                              }[]
                            | undefined
                          LengthPromotionalInDays?: number | undefined
                          PaymentMethod?:
                            | 'Compound'
                            | 'PayAway'
                            | 'SelfCredit'
                            | 'SimpleInterest'
                            | undefined
                          StartDate?: string | undefined
                          StartPromotionOrFutureTerms?: string | undefined
                          StopPromotionOrFutureTerms?: string | undefined
                        }
                        InterestTierSubType?:
                          | 'FutureMultipleTerms'
                          | 'Promotional'
                          | 'Regular'
                          | undefined
                      }[]
                    | undefined
                }
                CreditScoringPartOfAccountOpeningForGettingAnAccount: boolean
                CreditScoringPartOfAccountOpeningForIDVerification?: boolean | undefined
                CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore?:
                  | ('Hard' | 'Soft')[]
                  | undefined
                CreditScoringPartOfAccountOpeningIDVerificationText?: string[] | undefined
                CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?:
                  | ('Hard' | 'Soft')[]
                  | undefined
                CreditScoringPartOfAccountOpeningText?: string | undefined
                Currency: string[]
                Eligibility: {
                  AgeRestricted: boolean
                  AnnualBusinessTurnover?: string | undefined
                  AnnualBusinessTurnoverCurrency?: string | undefined
                  Description: string
                  EligibilityName?: string | undefined
                  EligibilityNotes?: string | undefined
                  EligibilityType?:
                    | 'AnyBusinessCustomer'
                    | 'BusinessOnly'
                    | 'CreditCard'
                    | 'CreditScoring'
                    | 'EmailAddress'
                    | 'ExistingCustomers'
                    | 'IdAndV'
                    | 'Mortgage'
                    | 'NoArrearsOnLoan'
                    | 'NoCustomerInArrears'
                    | 'NoOverOverdraftThirtyDays'
                    | 'NoSoleUkAccountOrBankrupt'
                    | 'NTB'
                    | 'NTBBusiness'
                    | 'SoleStudentAccount'
                    | 'SoleUkAccount'
                    | 'StudentsOnly'
                    | 'TwoMonthsOfCourseStart'
                    | 'UCASFulltimeTwoYears'
                    | undefined
                  IncomeCondition?: string | undefined
                  IncomeTurnoverRelated: boolean
                  MarketingEligibility?:
                    | ('ExistingCustomers' | 'NewCustomersOnly' | 'SwitchersOnly' | 'StartUp')[]
                    | undefined
                  MaxNumberOfAccounts?: string | undefined
                  MaximumAge?: number | undefined
                  MaximumAgeToOpen?: number | undefined
                  MaximumOpeningAmount?: boolean | undefined
                  MinIncomeTurnoverPaidIntoAccount?: number | undefined
                  MinimumAge?: number | undefined
                  MinimumDeposit?: boolean | undefined
                  MinimumIncomeFrequency?:
                    | 'AcademicTerm'
                    | 'HalfYearly'
                    | 'Monthly'
                    | 'Quarterly'
                    | 'Weekly'
                    | 'Yearly'
                    | undefined
                  MinimumIncomeTurnoverAmount?: string | undefined
                  MinimumIncomeTurnoverCurrency?: string | undefined
                  MinimumOperatingBalance?: string | undefined
                  MinimumOperatingBalanceCurrency?: string | undefined
                  MinimumOperatingBalanceExists?: boolean | undefined
                  OpeningDepositMaximumAmount?: string | undefined
                  OpeningDepositMaximumCurrency?: string | undefined
                  OpeningDepositMinimum?: string | undefined
                  OpeningDepositMinimumCurrency?: string | undefined
                  OtherFinancialHoldingRequired: boolean
                  PreviousBankruptcy: boolean
                  ResidencyRestricted: boolean
                  ResidencyRestrictedRegion?:
                    | 'UK'
                    | 'EEA'
                    | 'EU'
                    | 'EFTA'
                    | 'GB - ENG'
                    | 'GB - NIR'
                    | 'GB - SCT'
                    | 'GB - WLS'
                    | 'IRL'
                    | undefined
                  SingleJointIncome?:
                    | 'Joint'
                    | 'SoleIncome'
                    | 'SoleOrJoint'
                    | 'Turnover'
                    | undefined
                  ThirdSectorOrganisations: boolean
                }
                Feature?:
                  | {
                      DateOfChange?: string | undefined
                      ExistingFeature: boolean
                      FeatureDetails?:
                        | {
                            CriteriaType?: string | undefined
                            DateOfChange?: string | undefined
                            FeatureDescription?: string | undefined
                            FeatureName?: string | undefined
                            FeatureSubType?:
                              | 'FutureMultipleTerms'
                              | 'Promotional'
                              | 'Regular'
                              | undefined
                            FeatureType?: string | undefined
                            FeatureValue?: string | undefined
                            LengthPromotionalInDays?: number | undefined
                            StartPromotionOrFutureTerms?: string | undefined
                            StopPromotionOrFutureTerms?: string | undefined
                          }[]
                        | undefined
                      LengthPromotionalInDays?: number | undefined
                      ProductState?: 'FutureMultipleTerms' | 'Promotional' | 'Regular' | undefined
                      StartPromotionOrFutureTerms?: string | undefined
                      StopPromotionOrFutureTerms?: string | undefined
                    }[]
                  | undefined
                FeesAndCharges: {
                  Fees: {
                    DateOfChange?: string | undefined
                    FeeDetails: {
                      FeeDetail: {
                        DateOfChange?: string | undefined
                        FeeSubDetails: {
                          FeeAmount?: string | undefined
                          FeeFrequency:
                            | 'AcademicTerm'
                            | 'AccountClosing'
                            | 'AccountOpening'
                            | 'AtTimeOfLoanRepayment'
                            | 'ChargingPeriod'
                            | 'Daily'
                            | 'EveryFiveBusinessDays'
                            | 'Item'
                            | 'Monthly'
                            | 'OnAccountAnniversary'
                            | 'PerHour'
                            | 'PerOccurrence'
                            | 'PerSheet'
                            | 'PerTransactionAmount'
                            | 'PerTransactionPercentage'
                            | 'Quarterly'
                            | 'SixMonthly'
                            | 'StartOfLoan'
                            | 'StatementMonthly'
                            | 'Weekly'
                            | 'Yearly'
                          FeeHigherTier?: number | undefined
                          FeeLowerTier?: number | undefined
                          FeeMax?: string | undefined
                          FeeMin?: string | undefined
                          FeeRate?: string | undefined
                          FeesAndChargesNotes?: string | undefined
                          Negotiable: boolean
                          RepresentativeRate?: string | undefined
                        }
                        FeeType:
                          | 'Other'
                          | 'ATMDonation'
                          | 'ATMDeposATMPaidIn'
                          | 'ReportCertBalance'
                          | 'ATMAbroadConVisaCredit'
                          | 'ATMAbroadConVisaDebit'
                          | 'ATMCardnetEnvIn'
                          | 'ATMCashGroupATMCreditCard'
                          | 'ATMCashNonGroupATMCredittcard'
                          | 'ATMCashGroupATMDebitCard'
                          | 'ATMCashNonGroupATMDebitcard'
                          | 'ATMConGroupATM'
                          | 'ATMAbroad'
                          | 'ATMForeignCashDebCard'
                          | 'ATMAbroadGoldVisaDebit'
                          | 'ATMSpainCashCard'
                          | 'ATMSpainDebitCard'
                          | 'ATMSpainConversionDebitCard'
                          | 'ATMSpainConversionCashCard'
                          | 'ATMNonSterlingWithdrawal'
                          | 'ATMAbroadVisaCredit'
                          | 'ATMAbroadVisaDebit'
                          | 'ATMAbroadConVisaGoldDebit'
                          | 'ATMWidthdrawCash'
                          | 'BACSOnLineAncilliary'
                          | 'BACSBatch'
                          | 'BACSOnLineFile'
                          | 'BACSFileItem'
                          | 'BACSOnLineSetup '
                          | 'BACSItem'
                          | 'BACSItemInterbranch'
                          | 'BACSBulkBatch'
                          | 'BACSOnLineOverlimit'
                          | 'BACSOnLinePayment'
                          | 'BACSRecallItem'
                          | 'BACSOnLineService'
                          | 'BACSBulkInternet'
                          | 'BACSTELDirDebSmartCard'
                          | 'BACSTELDirDebWebInit'
                          | 'BACSTELirDebWebInit'
                          | 'BACSTELDirDebOverlimit'
                          | 'BACSTELDirDebPayment'
                          | 'BACSTELDirDebService'
                          | 'BACSTELDirDebAncilliary'
                          | 'BACSDirectItemProfile'
                          | 'BACSTELAncilliary'
                          | 'BACSTELSmartCard'
                          | 'BACSTELFile'
                          | 'BACSTELSetup '
                          | 'BACSTELOverlimit'
                          | 'BACSTELPayment'
                          | 'BACSTELService'
                          | 'CHAPSOutBranch'
                          | 'CHAPSCancellation'
                          | 'CHAPSOutOnlineDepositAcc'
                          | 'CHAPSIn'
                          | 'CHAPSOutInterBank'
                          | 'CHAPSInterBank'
                          | 'CHAPSOutPost'
                          | 'CHAPSOutInterBranch'
                          | 'CHAPSOut'
                          | 'CHAPSOutOnline'
                          | 'CHAPSandForeignPay'
                          | 'CHAPSOutManual'
                          | 'CardCardReplacement'
                          | 'DraftsCounter'
                          | 'DraftsBankers'
                          | 'DraftsIntlPayableAbroad'
                          | 'DraftsLostStolen'
                          | 'CardPersonalisedCard'
                          | 'DraftsIntlStoppedCancelled'
                          | 'EuroChqXLess'
                          | 'EuroChqXPlus'
                          | 'FPSOutFutureDated'
                          | 'FPSOutImmediate'
                          | 'FPSOut'
                          | 'FPSOutOwn'
                          | 'FPSInBranch'
                          | 'FPSUKPayUrgent'
                          | 'LegalArticlesReport'
                          | 'LegalSealing'
                          | 'LegalBondAndGuarantee'
                          | 'LegalCourtOrder'
                          | 'LegalCoSearch'
                          | 'LegalDepositAssignment'
                          | 'LegalGuaranteePrep'
                          | 'LegalLifePolicyPrepCo'
                          | 'LegalLifePolicyPrepPersonal'
                          | 'LegalPriorityPariPassu'
                          | 'LegalSubordinationAgreement'
                          | 'DirDebDirectDebitAdmin'
                          | 'DirDebDirectDebitCancel'
                          | 'IntlPayBIBForeignLimit'
                          | 'IntlPayCreditTransCust'
                          | 'IntlPayCreditTransNonCust'
                          | 'IntlPayUrgentPaymentForeign'
                          | 'IntlPayExpressMoneyMover'
                          | 'IntlPayEEAPayUrgent'
                          | 'IntlPayIrishPayUrgent'
                          | 'IntlPayEEAPay'
                          | 'IntlPayForeignIn1CPlus'
                          | 'IntlPayForeignPaymentInUKAcc'
                          | 'IntlPayForeignCharge'
                          | 'IntlPayForeignCancellation'
                          | 'IntlPayForeignStandardEUEuroBIC'
                          | 'IntlPayFXFeeRate'
                          | 'IntlPayForeignInternet'
                          | 'IntlPayForeign'
                          | 'IntlPayForeignInbound'
                          | 'IntlPayFXPaymentOut'
                          | 'IntlPayForeignInSub1C'
                          | 'IntlPayFXRate'
                          | 'IntlPayForeignStandardEUEuroNoBIC'
                          | 'IntlPayFXPaymentOutIR'
                          | 'IntlPayFXFee'
                          | 'IntlPayPurchaseNonSterling'
                          | 'IntlPayPostPaymentForeign'
                          | 'IntlPayPurchaseRateNonSterling'
                          | 'IntlPayPaymentTracing'
                          | 'IntlPayStandardMoneyMover'
                          | 'IntlPayMT101Transaction'
                          | 'IntlPayTransNonSterling'
                          | 'IntlPayTransRateNonSterling'
                          | 'IntlPayForeignUrgentEUEuroBIC'
                          | 'IntlPayForeignUrgentEUEuroNoBIC'
                          | 'IntlPayUrgentPaymentGroup'
                          | 'IntlPayUrgentPaymentUK'
                          | 'IntlPayUSAPayUrgent'
                          | 'IntlPayCurrencyPurchase'
                          | 'IntlPayWorldpayPayment'
                          | 'IntlPayCurrencyWithdraw'
                          | 'InvPayBankDetailsWrong'
                          | 'InvPayForeignBCNR'
                          | 'InvPayForeignRecall'
                          | 'InvGeneralInq'
                          | 'InvOldInstruction'
                          | 'InvPayPaymentRecall'
                          | 'InvPayReturnDebitXVLess'
                          | 'InvPayReturnDebitXVPlus'
                          | 'InvPayStopPayment'
                          | 'InvPayStandingOrdUnpaid'
                          | 'SafeKeepAccess'
                          | 'SafeKeepDeedMedium'
                          | 'SafeKeepingEnvelope'
                          | 'SafeKeepingInspection'
                          | 'SafeKeepingLargeItem'
                          | 'SafeKeepMultipleItems'
                          | 'SafeKeepingParcel'
                          | 'SafeKeepDeedSmall'
                          | 'SafeKeepOneItem'
                          | 'SafeKeepSafeCustody'
                          | 'LoanArrangementFeePC'
                          | 'LoanArrangement'
                          | 'LoanEarlyRepayment'
                          | 'LoanLatePayment'
                          | 'LoanSMEUnsecuredLoan'
                          | 'LoanTieredArrangement'
                          | 'NightSafeNightSafeBankOpen'
                          | 'NightSafeCreditSub5K'
                          | 'NightSafeNightSafe'
                          | 'NightSafeNightSafePaidIn'
                          | 'OverdraftAnnualReview'
                          | 'OverdraftTempOverdraft'
                          | 'OverdraftUnauthorisedBorrowing'
                          | 'POPostOfficeCounterCredit'
                          | 'POPostOfficeCashCredit'
                          | 'POPostOfficeCashOut'
                          | 'POPostOfficeWithdrawal'
                          | 'ChqBookTheftLossAllStopped'
                          | 'ChqIssuedCurrencyAcc'
                          | 'ChqCopy'
                          | 'ChqDraft'
                          | 'ChqIn'
                          | 'ChqDraftSterling'
                          | 'ChqOutIssued'
                          | 'ChqSpecialChqPresentation'
                          | 'ChqCounterCheque'
                          | 'ChqChequeswithStatement'
                          | 'ChqStopped'
                          | 'ChqTrans'
                          | 'ChqDraftFX'
                          | 'ChqForeignCourier'
                          | 'ChqForeignNegTenThou'
                          | 'ChqForeignNegHundred'
                          | 'ChequeForeignBankDivi'
                          | 'ChqForeignNegFiftyThou'
                          | 'ChqPensionCheque'
                          | 'ChequeForeignOtherDivi'
                          | 'ChqForeignNegFiveThou'
                          | 'ChqForeignNegMax'
                          | 'ChqForeignGBPMMDPlus'
                          | 'ChqGiftCheque'
                          | 'ChqCounterLodgement'
                          | 'ChqCashDropLodgement'
                          | 'ChqChequePhotocopy'
                          | 'ChqPostOfficeCredit'
                          | 'ChqPostOfficeChequeCollected'
                          | 'ChqChequeRetrieval'
                          | 'ChqReconcilliationPerTrans'
                          | 'ChqSpecialPresentationCount'
                          | 'ChqSpecialPresentationPTT'
                          | 'ChqUnpaidCharge'
                          | 'ChqUnpaidTransIn'
                          | 'ChqUnpaidTransOut'
                          | 'ChqUnpaidCheque'
                          | 'ReportAuditLetter'
                          | 'ReportFAXAdviceAdditional'
                          | 'ReportTelAdviceAdditional'
                          | 'ReportCreditHistory'
                          | 'ReportCertInterestDuplicate'
                          | 'ReportCertInterest'
                          | 'ReportCreditHistoryAdditionalInYear'
                          | 'ReportForeignStatusEnqElec'
                          | 'ReportForeignStatusEnq'
                          | 'ReportCashBackorInterestAnal'
                          | 'ReportStatementChqDaily'
                          | 'ReportStatementChqFortnightly'
                          | 'ReportStatementChqMonthly'
                          | 'ReportStatementChqWeekly'
                          | 'ReportStatementAndDiviChq'
                          | 'ReportReference'
                          | 'ReportReferralItem'
                          | 'ReportStatementByATM'
                          | 'ReportStatementByBranch'
                          | 'ReportStatementCopyRegular'
                          | 'ReportStatusEnquiry'
                          | 'ReportStatementFrequent'
                          | 'ReportStatementMonthly'
                          | 'ReportStatementCopy1'
                          | 'ReportStatementToBranch'
                          | 'ReportSMSTextMiniStatementorAlert'
                          | 'ReportStatementFortnightly'
                          | 'ReportSMSTextMiniStatementWoM'
                          | 'ReportSMSTextAlertBalance'
                          | 'ReportSMSTextAlert'
                          | 'ReportTaxCert'
                          | 'ReportWeeklyStatement'
                          | 'ReportTextMessageBanking'
                          | 'SEPACancellation'
                          | 'SEPABranch'
                          | 'SEPACredit'
                          | 'SEPADirectDebit'
                          | 'SEPAIn'
                          | 'SEPAEuro'
                          | 'SEPAOut'
                          | 'SEPAUnpaid'
                          | 'SEPAWinbitsAnnual Service'
                          | 'SEPAWinbitsTransaction'
                          | 'TransBillPaymentBranch'
                          | 'TransBillCollect'
                          | 'TransTelephoneBillPayment'
                          | 'TransBankPayment'
                          | 'TransBillPaymentTelephone'
                          | 'TransCorrespondentBankFee'
                          | 'TransCreditTransferUKDifferent'
                          | 'TransCreditTransferUKSame'
                          | 'TransCredit'
                          | 'TransCreditTransfer'
                          | 'TransBranchCredit'
                          | 'TransDebit'
                          | 'TransDebCardDeb'
                          | 'TransUKDirDeb'
                          | 'TransManualDeb'
                          | 'TransBuyForeignWithGBP'
                          | 'TransGoodValueReq'
                          | 'TransSWIFTOutUKForeign'
                          | 'TransInconpleteInstruction'
                          | 'TransManualEntries'
                          | 'TransManualTrans'
                          | 'TransNonSterling'
                          | 'TransPOSSaleForeign'
                          | 'TransPriPaymentPost'
                          | 'TransPOSSaleUK'
                          | 'TransReturnPayment'
                          | 'TransReconciliationPerTrans'
                          | 'TransStandingOrdAdmin'
                          | 'TransStandingOrd'
                          | 'TransStandingOrdManPay'
                          | 'TransTravellersChqOtherBank'
                          | 'TransTelBusiPriPaymentForeignToUKAcc'
                          | 'TransTeleItem'
                          | 'TransTelBusiPriPaymentToGrpAcc'
                          | 'TransTravellersChqRate'
                          | 'TransTransferExGroup'
                          | 'TransUnauthorisedPaidTrans'
                          | 'TransUrgentPaymentPostal'
                          | 'TransUnpaidTrans'
                          | 'TransTelBusiPriPaymentToNonGrpAcc'
                          | 'TransSWIFTOutNonEEASterling'
                          | 'AutoAutoCredit'
                          | 'AutoAutomatedEntries'
                          | 'AutoAutoCreditPhoneInet'
                          | 'AutoAutomatedTrans'
                          | 'AutoDebitCardCommercial'
                          | 'AutoFPSAutoCredit'
                          | 'VisaConvertAbroadForeign'
                          | 'VisaBureauDeChange'
                          | 'VisaTravellersChqorCurrency'
                          | 'OnlineInternetBillPayment'
                          | 'OnlineBusinessOnlineEuroPayment'
                          | 'OnlineBusinessOnlineUrgentEuroPayment'
                          | 'OnlineBusinessOnlineForeignPayment'
                          | 'OnlineInterbankTransfer'
                          | 'OnlineInterbankPerTransfer'
                          | 'OnlineInterbranchTransfer'
                          | 'OnlineInterbranchPerTransfer'
                          | 'OnlineSubscriptionMonthly'
                          | 'OnlineBankingPayment'
                          | 'OnlineBankingSubscription'
                          | 'OnlinePOSSale'
                          | 'OnlinePersonalCustAncillarys'
                          | 'OnlinePersonalCustService'
                          | 'OnlinePersonalCustOverlimits'
                          | 'OnlineReplacementCardReader'
                          | 'OnlinePersonalCustSetUp'
                          | 'OnlinePersonalCustTransaction'
                          | 'OnlinePaymentinGBPtoUK'
                          | 'OnlineUrgentPayment'
                          | 'OnlinePaymentinUSDtoUS'
                          | 'OnlineBulkDirectDebSterling'
                          | 'ForeignChqSent'
                          | 'ForeignChqSelf'
                          | 'ForeignChqEncashment'
                          | 'ForeignFXInwardsCust'
                          | 'ForeignFXTransfersROI'
                          | 'ForeignFXForwardTrans'
                          | 'ForeignFXTransfersBOI'
                          | 'ForeignExMaintenance'
                          | 'ForeignFXInwardsNonCust'
                          | 'ForeignFXOutwards'
                          | 'ForeignPurchase'
                          | 'ForeignStatusRep'
                          | 'ForeignChqDraft'
                          | 'ForeignChqCLess'
                          | 'ForeignChqMLess'
                          | 'ForeignChqOther'
                          | 'ForeignChqMPlus'
                          | 'ForeignChqCCC'
                          | 'ServiceCAccountFee'
                          | 'ServiceCAccountFeeMonthly'
                          | 'ServiceCAccountFeeQuarterly'
                          | 'ServiceCBalanceHandling'
                          | 'ServiceCFixedTariff'
                          | 'ServiceCBusiDepAccBreakage'
                          | 'ServiceCMonitorDaily'
                          | 'ServiceCManagementFee'
                          | 'ServiceCMinimumMonthlyFee'
                          | 'ServiceCMonitorMonthly'
                          | 'ServiceCMonitorWeekly'
                          | 'ServiceCSecurityFee'
                          | 'ServiceCMT940AccountFirst'
                          | 'ServiceCMT940AccountSubsequent'
                          | 'ServiceCOther'
                          | 'CounterCoinHandling'
                          | 'CounterCashIn'
                          | 'CounterCashInNotUs'
                          | 'CounterCashOut'
                          | 'CounterCashX'
                          | 'CounterForeignCashMax'
                          | 'CounterForeignNoteHandling'
                          | 'CounterForeignCashOut'
                          | 'CounterCashFeeRate'
                          | 'CounterForeignCashOutTx'
                          | 'CounterCounterLodgement'
                          | 'CounterCashDropLodgement'
                          | 'CounterNotesLodged'
                          | 'CounterNotesOut'
                          | 'CounterCashInOwn'
                          | 'CounterPaidTrans'
                          | 'CounterCashFeePercent'
                        LengthPromotionalInDays?: number | undefined
                        Other?: string | undefined
                        StartPromotionOrFutureTerms?: string | undefined
                        StopPromotionOrFutureTerms?: string | undefined
                      }
                      FeeSubType: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                    }[]
                    FeeHigherTier?: number | undefined
                    FeeLowerTier?: number | undefined
                    LengthPromotionalInDays?: number | undefined
                    StartPromotionOrFutureTerms?: string | undefined
                    StopPromotionOrFutureTerms?: string | undefined
                  }
                  ProductState: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                }[]
                InternationalPaymentsSupported: boolean
                MaximumMonthlyCharge?: string | undefined
                MobileWallet?:
                  | (
                      | 'AndroidPay'
                      | 'ApplePay'
                      | 'IssuerMobileApp'
                      | 'MobileBankingApp'
                      | 'Other'
                      | 'PayM'
                      | 'SamsungPay'
                      | 'VodafoneWallet'
                    )[]
                  | undefined
                Organisation: {
                  Brand: { TrademarkID: string; TrademarkIPOCode: 'UK' | 'EU' }
                  ParentOrganisation: {
                    BIC?: string | undefined
                    LEI?: string | undefined
                    OrganisationName: { LegalName: string }
                  }
                }
                Overdraft?:
                  | {
                      DateOfChange?: string | undefined
                      FeeChargeNegotiableIndicator?: 'No' | 'Yes' | undefined
                      FeesAndCharges?:
                        | {
                            FeeChargeAmount?: string | undefined
                            FeeChargeApplicationFrequency?:
                              | 'AcademicTerm'
                              | 'Daily'
                              | 'Weekly'
                              | 'Monthly'
                              | 'Quarterly'
                              | 'Half-Yearly'
                              | 'Yearly'
                              | 'Overnight'
                              | 'Other'
                              | undefined
                            FeeChargeCalculationFrequency?:
                              | 'AcademicTerm'
                              | 'Daily'
                              | 'Weekly'
                              | 'Monthly'
                              | 'Quarterly'
                              | 'Half-Yearly'
                              | 'Yearly'
                              | 'Overnight'
                              | 'Other'
                              | undefined
                            FeeChargeOtherApplicationFrequency?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            FeeChargeOtherCalculationFrequency?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            FeeChargeOtherType?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            FeeChargeRate?: string | undefined
                            FeeChargeRateOtherType?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            FeeChargeRateType?: 'Gross' | 'Net' | 'Other' | undefined
                            FeeChargeType:
                              | 'Periodic'
                              | 'Minimum'
                              | 'Maximum'
                              | 'Setup'
                              | 'Review'
                              | 'Renewal'
                              | 'MinimumSetup'
                              | 'MaximumSetup'
                              | 'Total'
                              | 'Item'
                              | 'EmergencyLending'
                              | 'Other'
                          }[]
                        | undefined
                      LengthPromotionalInDays?: number | undefined
                      MaximumMonthlyOverdraftCharge?: string | undefined
                      Notes?: string | undefined
                      OverdraftProductState?:
                        | 'FutureMultipleTerms'
                        | 'Promotional'
                        | 'Regular'
                        | undefined
                      OverdraftTierBandSet?:
                        | {
                            ArrangementOtherType?:
                              | {
                                  Code?: string | undefined
                                  Description?: string | undefined
                                  Name?: string | undefined
                                }
                              | undefined
                            ArrangementType: 'Unarranged' | 'Arranged' | 'Other'
                            BufferAmount?: string | undefined
                            CMADefinedIndicator: boolean
                            EAR?: string | undefined
                            FeesAndCharges?:
                              | {
                                  FeeChargeAmount?: string | undefined
                                  FeeChargeApplicationFrequency?:
                                    | 'AcademicTerm'
                                    | 'Daily'
                                    | 'Weekly'
                                    | 'Monthly'
                                    | 'Quarterly'
                                    | 'Half-Yearly'
                                    | 'Yearly'
                                    | 'Overnight'
                                    | 'Other'
                                    | undefined
                                  FeeChargeCalculationFrequency?:
                                    | 'AcademicTerm'
                                    | 'Daily'
                                    | 'Weekly'
                                    | 'Monthly'
                                    | 'Quarterly'
                                    | 'Half-Yearly'
                                    | 'Yearly'
                                    | 'Overnight'
                                    | 'Other'
                                    | undefined
                                  FeeChargeOtherApplicationFrequency?:
                                    | {
                                        Code?: string | undefined
                                        Description?: string | undefined
                                        Name?: string | undefined
                                      }
                                    | undefined
                                  FeeChargeOtherCalculationFrequency?:
                                    | {
                                        Code?: string | undefined
                                        Description?: string | undefined
                                        Name?: string | undefined
                                      }
                                    | undefined
                                  FeeChargeOtherType?:
                                    | {
                                        Code?: string | undefined
                                        Description?: string | undefined
                                        Name?: string | undefined
                                      }
                                    | undefined
                                  FeeChargeRate?: string | undefined
                                  FeeChargeRateOtherType?:
                                    | {
                                        Code?: string | undefined
                                        Description?: string | undefined
                                        Name?: string | undefined
                                      }
                                    | undefined
                                  FeeChargeRateType?: 'Gross' | 'Net' | 'Other' | undefined
                                  FeeChargeType:
                                    | 'Periodic'
                                    | 'Minimum'
                                    | 'Maximum'
                                    | 'Setup'
                                    | 'Review'
                                    | 'Renewal'
                                    | 'MinimumSetup'
                                    | 'MaximumSetup'
                                    | 'Total'
                                    | 'Item'
                                    | 'EmergencyLending'
                                    | 'Other'
                                }[]
                              | undefined
                            Notes?: string | undefined
                            OverdraftTierBand?:
                              | {
                                  EAR?: string | undefined
                                  FeesAndCharges?:
                                    | {
                                        FeeChargeAmount?: string | undefined
                                        FeeChargeApplicationFrequency?:
                                          | 'AcademicTerm'
                                          | 'Daily'
                                          | 'Weekly'
                                          | 'Monthly'
                                          | 'Quarterly'
                                          | 'Half-Yearly'
                                          | 'Yearly'
                                          | 'Overnight'
                                          | 'Other'
                                          | undefined
                                        FeeChargeCalculationFrequency?:
                                          | 'AcademicTerm'
                                          | 'Daily'
                                          | 'Weekly'
                                          | 'Monthly'
                                          | 'Quarterly'
                                          | 'Half-Yearly'
                                          | 'Yearly'
                                          | 'Overnight'
                                          | 'Other'
                                          | undefined
                                        FeeChargeOtherApplicationFrequency?:
                                          | {
                                              Code?: string | undefined
                                              Description?: string | undefined
                                              Name?: string | undefined
                                            }
                                          | undefined
                                        FeeChargeOtherCalculationFrequency?:
                                          | {
                                              Code?: string | undefined
                                              Description?: string | undefined
                                              Name?: string | undefined
                                            }
                                          | undefined
                                        FeeChargeOtherType?:
                                          | {
                                              Code?: string | undefined
                                              Description?: string | undefined
                                              Name?: string | undefined
                                            }
                                          | undefined
                                        FeeChargeRate?: string | undefined
                                        FeeChargeRateOtherType?:
                                          | {
                                              Code?: string | undefined
                                              Description?: string | undefined
                                              Name?: string | undefined
                                            }
                                          | undefined
                                        FeeChargeRateType?: 'Gross' | 'Net' | 'Other' | undefined
                                        FeeChargeType:
                                          | 'Periodic'
                                          | 'Minimum'
                                          | 'Maximum'
                                          | 'Setup'
                                          | 'Review'
                                          | 'Renewal'
                                          | 'MinimumSetup'
                                          | 'MaximumSetup'
                                          | 'Total'
                                          | 'Item'
                                          | 'EmergencyLending'
                                          | 'Other'
                                      }[]
                                    | undefined
                                  Notes?: string | undefined
                                  TierBandIdentification?: string | undefined
                                  TierValueMaximum: string
                                  TierValueMinimum: string
                                }[]
                              | undefined
                            TierBandSetIdentification?: string | undefined
                          }[]
                        | undefined
                      OverdraftType?: 'Committed' | 'OnDemand' | undefined
                      StartPromotionOrFutureTerms?: string | undefined
                      StopPromotionOrFutureTerms?: string | undefined
                      Term?: string | undefined
                    }[]
                  | undefined
                OverdraftOffered: boolean
                ProductDescription: string
                ProductIdentifier: string
                ProductName?: string | undefined
                ProductSegment: (
                  | 'Basic'
                  | 'Business'
                  | 'General'
                  | 'Graduate'
                  | 'International'
                  | 'Packaged'
                  | 'Personal'
                  | 'Premium'
                  | 'Reward'
                  | 'SME'
                  | 'Student'
                  | 'YoungAdult'
                  | 'Youth'
                )[]
                ProductType: 'PCA'
                ProductURL: string[]
                TsandCs: string[]
              }[]
              meta: {
                Agreement: 'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions'
                LastUpdated: string
                License: 'https://www.openbanking.org.uk/open-licence'
                TermsOfUse: 'https://www.openbanking.org.uk/terms'
                TotalResults: number
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have sent a request which could not be understood.'
              status: '400'
              title: 'Bad request'
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'Your client has failed to submit a request, and a timeout has occurred.'
              status: '408'
              title: 'Client timeout'
            }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have requested this resource too often. Slow down.'
              status: '429'
              title: 'Too many requests'
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'An error occurred on the server. No further information is available.'
              status: '500'
              title: 'Internal server error'
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'The service is temporarily unavailable.'
              status: '503'
              title: 'Service temporarily unavailable'
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: { description: string; status: string; title: string }
            outputFormat: 'json'
            status: 200
          }
      $head: {
        input: {
          header: { 'If-Modified-Since'?: string | undefined; 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/unsecured-sme-loans': {
      $get:
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              data: {
                ArrearsTreatment?: string | undefined
                Benefits: {
                  Benefit: boolean
                  BenefitGroup?:
                    | {
                        BenefitItem: {
                          BenefitDetail?:
                            | {
                                BenefitDescription?: string | undefined
                                BenefitID?: string | undefined
                                BenefitName?: string | undefined
                                BenefitType?: string | undefined
                                BenefitValue?: string | undefined
                                Counter?: number | undefined
                                CriteriaType?:
                                  | (
                                      | 'CashDeposit'
                                      | 'Deposit'
                                      | 'DirectDebit'
                                      | 'InitialDeposit'
                                      | 'InternetLogon'
                                      | 'MobileLogon'
                                      | 'RegularDeposit'
                                    )[]
                                  | undefined
                                DefaultToAccounts?: boolean | undefined
                                MaximumCriteria?: string | undefined
                                MinimumCriteria?: string | undefined
                                PromotionEndDate?: string | undefined
                                PromotionStartDate?: string | undefined
                              }[]
                            | undefined
                          DateOfChange?: string | undefined
                          LengthPromotionalInDays?: number | undefined
                          StartPromotionOrFutureTerms?: string | undefined
                          StopPromotionOrFutureTerms?: string | undefined
                        }
                        BenefitSubType?:
                          | 'FutureMultipleTerms'
                          | 'Promotional'
                          | 'Regular'
                          | undefined
                      }[]
                    | undefined
                }
                Currency: string[]
                CustomerAccessChannels: (
                  | 'Branch'
                  | 'MobileBankingApp'
                  | 'Online'
                  | 'Phone'
                  | 'Post'
                  | 'PostOffice'
                  | 'Text'
                )[]
                Eligibility: {
                  AgeRestricted: boolean
                  AnnualBusinessTurnover?: string | undefined
                  AnnualBusinessTurnoverCurrency?: string | undefined
                  Description: string
                  EligibilityName?: string | undefined
                  EligibilityNotes?: string | undefined
                  EligibilityType?:
                    | 'AnyBusinessCustomer'
                    | 'BusinessOnly'
                    | 'CreditCard'
                    | 'CreditScoring'
                    | 'EmailAddress'
                    | 'ExistingCustomers'
                    | 'IdAndV'
                    | 'Mortgage'
                    | 'NoArrearsOnLoan'
                    | 'NoCustomerInArrears'
                    | 'NoOverOverdraftThirtyDays'
                    | 'NoSoleUkAccountOrBankrupt'
                    | 'NTB'
                    | 'NTBBusiness'
                    | 'SoleStudentAccount'
                    | 'SoleUkAccount'
                    | 'StudentsOnly'
                    | 'TwoMonthsOfCourseStart'
                    | 'UCASFulltimeTwoYears'
                    | undefined
                  IncomeCondition?: string | undefined
                  IncomeTurnoverRelated: boolean
                  MarketingEligibility?:
                    | ('ExistingCustomers' | 'NewCustomersOnly' | 'SwitchersOnly' | 'StartUp')[]
                    | undefined
                  MaxNumberOfAccounts?: string | undefined
                  MaximumAge?: number | undefined
                  MaximumAgeToOpen?: number | undefined
                  MaximumOpeningAmount?: boolean | undefined
                  MinIncomeTurnoverPaidIntoAccount?: number | undefined
                  MinimumAge?: number | undefined
                  MinimumDeposit?: boolean | undefined
                  MinimumIncomeFrequency?:
                    | 'AcademicTerm'
                    | 'HalfYearly'
                    | 'Monthly'
                    | 'Quarterly'
                    | 'Weekly'
                    | 'Yearly'
                    | undefined
                  MinimumIncomeTurnoverAmount?: string | undefined
                  MinimumIncomeTurnoverCurrency?: string | undefined
                  MinimumOperatingBalance?: string | undefined
                  MinimumOperatingBalanceCurrency?: string | undefined
                  MinimumOperatingBalanceExists?: boolean | undefined
                  OpeningDepositMaximumAmount?: string | undefined
                  OpeningDepositMaximumCurrency?: string | undefined
                  OpeningDepositMinimum?: string | undefined
                  OpeningDepositMinimumCurrency?: string | undefined
                  OtherFinancialHoldingRequired: boolean
                  PreviousBankruptcy: boolean
                  ResidencyRestricted: boolean
                  ResidencyRestrictedRegion?:
                    | 'UK'
                    | 'EEA'
                    | 'EU'
                    | 'EFTA'
                    | 'GB - ENG'
                    | 'GB - NIR'
                    | 'GB - SCT'
                    | 'GB - WLS'
                    | 'IRL'
                    | undefined
                  SingleJointIncome?:
                    | 'Joint'
                    | 'SoleIncome'
                    | 'SoleOrJoint'
                    | 'Turnover'
                    | undefined
                  ThirdSectorOrganisations: boolean
                }
                FeesAndCharges: {
                  Fees: {
                    DateOfChange?: string | undefined
                    FeeDetails: {
                      FeeDetail: {
                        DateOfChange?: string | undefined
                        FeeSubDetails: {
                          FeeAmount?: string | undefined
                          FeeFrequency:
                            | 'AcademicTerm'
                            | 'AccountClosing'
                            | 'AccountOpening'
                            | 'AtTimeOfLoanRepayment'
                            | 'ChargingPeriod'
                            | 'Daily'
                            | 'EveryFiveBusinessDays'
                            | 'Item'
                            | 'Monthly'
                            | 'OnAccountAnniversary'
                            | 'PerHour'
                            | 'PerOccurrence'
                            | 'PerSheet'
                            | 'PerTransactionAmount'
                            | 'PerTransactionPercentage'
                            | 'Quarterly'
                            | 'SixMonthly'
                            | 'StartOfLoan'
                            | 'StatementMonthly'
                            | 'Weekly'
                            | 'Yearly'
                          FeeHigherTier?: number | undefined
                          FeeLowerTier?: number | undefined
                          FeeMax?: string | undefined
                          FeeMin?: string | undefined
                          FeeRate?: string | undefined
                          FeesAndChargesNotes?: string | undefined
                          Negotiable: boolean
                          RepresentativeRate?: string | undefined
                        }
                        FeeType:
                          | 'Other'
                          | 'ATMDonation'
                          | 'ATMDeposATMPaidIn'
                          | 'ReportCertBalance'
                          | 'ATMAbroadConVisaCredit'
                          | 'ATMAbroadConVisaDebit'
                          | 'ATMCardnetEnvIn'
                          | 'ATMCashGroupATMCreditCard'
                          | 'ATMCashNonGroupATMCredittcard'
                          | 'ATMCashGroupATMDebitCard'
                          | 'ATMCashNonGroupATMDebitcard'
                          | 'ATMConGroupATM'
                          | 'ATMAbroad'
                          | 'ATMForeignCashDebCard'
                          | 'ATMAbroadGoldVisaDebit'
                          | 'ATMSpainCashCard'
                          | 'ATMSpainDebitCard'
                          | 'ATMSpainConversionDebitCard'
                          | 'ATMSpainConversionCashCard'
                          | 'ATMNonSterlingWithdrawal'
                          | 'ATMAbroadVisaCredit'
                          | 'ATMAbroadVisaDebit'
                          | 'ATMAbroadConVisaGoldDebit'
                          | 'ATMWidthdrawCash'
                          | 'BACSOnLineAncilliary'
                          | 'BACSBatch'
                          | 'BACSOnLineFile'
                          | 'BACSFileItem'
                          | 'BACSOnLineSetup '
                          | 'BACSItem'
                          | 'BACSItemInterbranch'
                          | 'BACSBulkBatch'
                          | 'BACSOnLineOverlimit'
                          | 'BACSOnLinePayment'
                          | 'BACSRecallItem'
                          | 'BACSOnLineService'
                          | 'BACSBulkInternet'
                          | 'BACSTELDirDebSmartCard'
                          | 'BACSTELDirDebWebInit'
                          | 'BACSTELirDebWebInit'
                          | 'BACSTELDirDebOverlimit'
                          | 'BACSTELDirDebPayment'
                          | 'BACSTELDirDebService'
                          | 'BACSTELDirDebAncilliary'
                          | 'BACSDirectItemProfile'
                          | 'BACSTELAncilliary'
                          | 'BACSTELSmartCard'
                          | 'BACSTELFile'
                          | 'BACSTELSetup '
                          | 'BACSTELOverlimit'
                          | 'BACSTELPayment'
                          | 'BACSTELService'
                          | 'CHAPSOutBranch'
                          | 'CHAPSCancellation'
                          | 'CHAPSOutOnlineDepositAcc'
                          | 'CHAPSIn'
                          | 'CHAPSOutInterBank'
                          | 'CHAPSInterBank'
                          | 'CHAPSOutPost'
                          | 'CHAPSOutInterBranch'
                          | 'CHAPSOut'
                          | 'CHAPSOutOnline'
                          | 'CHAPSandForeignPay'
                          | 'CHAPSOutManual'
                          | 'CardCardReplacement'
                          | 'DraftsCounter'
                          | 'DraftsBankers'
                          | 'DraftsIntlPayableAbroad'
                          | 'DraftsLostStolen'
                          | 'CardPersonalisedCard'
                          | 'DraftsIntlStoppedCancelled'
                          | 'EuroChqXLess'
                          | 'EuroChqXPlus'
                          | 'FPSOutFutureDated'
                          | 'FPSOutImmediate'
                          | 'FPSOut'
                          | 'FPSOutOwn'
                          | 'FPSInBranch'
                          | 'FPSUKPayUrgent'
                          | 'LegalArticlesReport'
                          | 'LegalSealing'
                          | 'LegalBondAndGuarantee'
                          | 'LegalCourtOrder'
                          | 'LegalCoSearch'
                          | 'LegalDepositAssignment'
                          | 'LegalGuaranteePrep'
                          | 'LegalLifePolicyPrepCo'
                          | 'LegalLifePolicyPrepPersonal'
                          | 'LegalPriorityPariPassu'
                          | 'LegalSubordinationAgreement'
                          | 'DirDebDirectDebitAdmin'
                          | 'DirDebDirectDebitCancel'
                          | 'IntlPayBIBForeignLimit'
                          | 'IntlPayCreditTransCust'
                          | 'IntlPayCreditTransNonCust'
                          | 'IntlPayUrgentPaymentForeign'
                          | 'IntlPayExpressMoneyMover'
                          | 'IntlPayEEAPayUrgent'
                          | 'IntlPayIrishPayUrgent'
                          | 'IntlPayEEAPay'
                          | 'IntlPayForeignIn1CPlus'
                          | 'IntlPayForeignPaymentInUKAcc'
                          | 'IntlPayForeignCharge'
                          | 'IntlPayForeignCancellation'
                          | 'IntlPayForeignStandardEUEuroBIC'
                          | 'IntlPayFXFeeRate'
                          | 'IntlPayForeignInternet'
                          | 'IntlPayForeign'
                          | 'IntlPayForeignInbound'
                          | 'IntlPayFXPaymentOut'
                          | 'IntlPayForeignInSub1C'
                          | 'IntlPayFXRate'
                          | 'IntlPayForeignStandardEUEuroNoBIC'
                          | 'IntlPayFXPaymentOutIR'
                          | 'IntlPayFXFee'
                          | 'IntlPayPurchaseNonSterling'
                          | 'IntlPayPostPaymentForeign'
                          | 'IntlPayPurchaseRateNonSterling'
                          | 'IntlPayPaymentTracing'
                          | 'IntlPayStandardMoneyMover'
                          | 'IntlPayMT101Transaction'
                          | 'IntlPayTransNonSterling'
                          | 'IntlPayTransRateNonSterling'
                          | 'IntlPayForeignUrgentEUEuroBIC'
                          | 'IntlPayForeignUrgentEUEuroNoBIC'
                          | 'IntlPayUrgentPaymentGroup'
                          | 'IntlPayUrgentPaymentUK'
                          | 'IntlPayUSAPayUrgent'
                          | 'IntlPayCurrencyPurchase'
                          | 'IntlPayWorldpayPayment'
                          | 'IntlPayCurrencyWithdraw'
                          | 'InvPayBankDetailsWrong'
                          | 'InvPayForeignBCNR'
                          | 'InvPayForeignRecall'
                          | 'InvGeneralInq'
                          | 'InvOldInstruction'
                          | 'InvPayPaymentRecall'
                          | 'InvPayReturnDebitXVLess'
                          | 'InvPayReturnDebitXVPlus'
                          | 'InvPayStopPayment'
                          | 'InvPayStandingOrdUnpaid'
                          | 'SafeKeepAccess'
                          | 'SafeKeepDeedMedium'
                          | 'SafeKeepingEnvelope'
                          | 'SafeKeepingInspection'
                          | 'SafeKeepingLargeItem'
                          | 'SafeKeepMultipleItems'
                          | 'SafeKeepingParcel'
                          | 'SafeKeepDeedSmall'
                          | 'SafeKeepOneItem'
                          | 'SafeKeepSafeCustody'
                          | 'LoanArrangementFeePC'
                          | 'LoanArrangement'
                          | 'LoanEarlyRepayment'
                          | 'LoanLatePayment'
                          | 'LoanSMEUnsecuredLoan'
                          | 'LoanTieredArrangement'
                          | 'NightSafeNightSafeBankOpen'
                          | 'NightSafeCreditSub5K'
                          | 'NightSafeNightSafe'
                          | 'NightSafeNightSafePaidIn'
                          | 'OverdraftAnnualReview'
                          | 'OverdraftTempOverdraft'
                          | 'OverdraftUnauthorisedBorrowing'
                          | 'POPostOfficeCounterCredit'
                          | 'POPostOfficeCashCredit'
                          | 'POPostOfficeCashOut'
                          | 'POPostOfficeWithdrawal'
                          | 'ChqBookTheftLossAllStopped'
                          | 'ChqIssuedCurrencyAcc'
                          | 'ChqCopy'
                          | 'ChqDraft'
                          | 'ChqIn'
                          | 'ChqDraftSterling'
                          | 'ChqOutIssued'
                          | 'ChqSpecialChqPresentation'
                          | 'ChqCounterCheque'
                          | 'ChqChequeswithStatement'
                          | 'ChqStopped'
                          | 'ChqTrans'
                          | 'ChqDraftFX'
                          | 'ChqForeignCourier'
                          | 'ChqForeignNegTenThou'
                          | 'ChqForeignNegHundred'
                          | 'ChequeForeignBankDivi'
                          | 'ChqForeignNegFiftyThou'
                          | 'ChqPensionCheque'
                          | 'ChequeForeignOtherDivi'
                          | 'ChqForeignNegFiveThou'
                          | 'ChqForeignNegMax'
                          | 'ChqForeignGBPMMDPlus'
                          | 'ChqGiftCheque'
                          | 'ChqCounterLodgement'
                          | 'ChqCashDropLodgement'
                          | 'ChqChequePhotocopy'
                          | 'ChqPostOfficeCredit'
                          | 'ChqPostOfficeChequeCollected'
                          | 'ChqChequeRetrieval'
                          | 'ChqReconcilliationPerTrans'
                          | 'ChqSpecialPresentationCount'
                          | 'ChqSpecialPresentationPTT'
                          | 'ChqUnpaidCharge'
                          | 'ChqUnpaidTransIn'
                          | 'ChqUnpaidTransOut'
                          | 'ChqUnpaidCheque'
                          | 'ReportAuditLetter'
                          | 'ReportFAXAdviceAdditional'
                          | 'ReportTelAdviceAdditional'
                          | 'ReportCreditHistory'
                          | 'ReportCertInterestDuplicate'
                          | 'ReportCertInterest'
                          | 'ReportCreditHistoryAdditionalInYear'
                          | 'ReportForeignStatusEnqElec'
                          | 'ReportForeignStatusEnq'
                          | 'ReportCashBackorInterestAnal'
                          | 'ReportStatementChqDaily'
                          | 'ReportStatementChqFortnightly'
                          | 'ReportStatementChqMonthly'
                          | 'ReportStatementChqWeekly'
                          | 'ReportStatementAndDiviChq'
                          | 'ReportReference'
                          | 'ReportReferralItem'
                          | 'ReportStatementByATM'
                          | 'ReportStatementByBranch'
                          | 'ReportStatementCopyRegular'
                          | 'ReportStatusEnquiry'
                          | 'ReportStatementFrequent'
                          | 'ReportStatementMonthly'
                          | 'ReportStatementCopy1'
                          | 'ReportStatementToBranch'
                          | 'ReportSMSTextMiniStatementorAlert'
                          | 'ReportStatementFortnightly'
                          | 'ReportSMSTextMiniStatementWoM'
                          | 'ReportSMSTextAlertBalance'
                          | 'ReportSMSTextAlert'
                          | 'ReportTaxCert'
                          | 'ReportWeeklyStatement'
                          | 'ReportTextMessageBanking'
                          | 'SEPACancellation'
                          | 'SEPABranch'
                          | 'SEPACredit'
                          | 'SEPADirectDebit'
                          | 'SEPAIn'
                          | 'SEPAEuro'
                          | 'SEPAOut'
                          | 'SEPAUnpaid'
                          | 'SEPAWinbitsAnnual Service'
                          | 'SEPAWinbitsTransaction'
                          | 'TransBillPaymentBranch'
                          | 'TransBillCollect'
                          | 'TransTelephoneBillPayment'
                          | 'TransBankPayment'
                          | 'TransBillPaymentTelephone'
                          | 'TransCorrespondentBankFee'
                          | 'TransCreditTransferUKDifferent'
                          | 'TransCreditTransferUKSame'
                          | 'TransCredit'
                          | 'TransCreditTransfer'
                          | 'TransBranchCredit'
                          | 'TransDebit'
                          | 'TransDebCardDeb'
                          | 'TransUKDirDeb'
                          | 'TransManualDeb'
                          | 'TransBuyForeignWithGBP'
                          | 'TransGoodValueReq'
                          | 'TransSWIFTOutUKForeign'
                          | 'TransInconpleteInstruction'
                          | 'TransManualEntries'
                          | 'TransManualTrans'
                          | 'TransNonSterling'
                          | 'TransPOSSaleForeign'
                          | 'TransPriPaymentPost'
                          | 'TransPOSSaleUK'
                          | 'TransReturnPayment'
                          | 'TransReconciliationPerTrans'
                          | 'TransStandingOrdAdmin'
                          | 'TransStandingOrd'
                          | 'TransStandingOrdManPay'
                          | 'TransTravellersChqOtherBank'
                          | 'TransTelBusiPriPaymentForeignToUKAcc'
                          | 'TransTeleItem'
                          | 'TransTelBusiPriPaymentToGrpAcc'
                          | 'TransTravellersChqRate'
                          | 'TransTransferExGroup'
                          | 'TransUnauthorisedPaidTrans'
                          | 'TransUrgentPaymentPostal'
                          | 'TransUnpaidTrans'
                          | 'TransTelBusiPriPaymentToNonGrpAcc'
                          | 'TransSWIFTOutNonEEASterling'
                          | 'AutoAutoCredit'
                          | 'AutoAutomatedEntries'
                          | 'AutoAutoCreditPhoneInet'
                          | 'AutoAutomatedTrans'
                          | 'AutoDebitCardCommercial'
                          | 'AutoFPSAutoCredit'
                          | 'VisaConvertAbroadForeign'
                          | 'VisaBureauDeChange'
                          | 'VisaTravellersChqorCurrency'
                          | 'OnlineInternetBillPayment'
                          | 'OnlineBusinessOnlineEuroPayment'
                          | 'OnlineBusinessOnlineUrgentEuroPayment'
                          | 'OnlineBusinessOnlineForeignPayment'
                          | 'OnlineInterbankTransfer'
                          | 'OnlineInterbankPerTransfer'
                          | 'OnlineInterbranchTransfer'
                          | 'OnlineInterbranchPerTransfer'
                          | 'OnlineSubscriptionMonthly'
                          | 'OnlineBankingPayment'
                          | 'OnlineBankingSubscription'
                          | 'OnlinePOSSale'
                          | 'OnlinePersonalCustAncillarys'
                          | 'OnlinePersonalCustService'
                          | 'OnlinePersonalCustOverlimits'
                          | 'OnlineReplacementCardReader'
                          | 'OnlinePersonalCustSetUp'
                          | 'OnlinePersonalCustTransaction'
                          | 'OnlinePaymentinGBPtoUK'
                          | 'OnlineUrgentPayment'
                          | 'OnlinePaymentinUSDtoUS'
                          | 'OnlineBulkDirectDebSterling'
                          | 'ForeignChqSent'
                          | 'ForeignChqSelf'
                          | 'ForeignChqEncashment'
                          | 'ForeignFXInwardsCust'
                          | 'ForeignFXTransfersROI'
                          | 'ForeignFXForwardTrans'
                          | 'ForeignFXTransfersBOI'
                          | 'ForeignExMaintenance'
                          | 'ForeignFXInwardsNonCust'
                          | 'ForeignFXOutwards'
                          | 'ForeignPurchase'
                          | 'ForeignStatusRep'
                          | 'ForeignChqDraft'
                          | 'ForeignChqCLess'
                          | 'ForeignChqMLess'
                          | 'ForeignChqOther'
                          | 'ForeignChqMPlus'
                          | 'ForeignChqCCC'
                          | 'ServiceCAccountFee'
                          | 'ServiceCAccountFeeMonthly'
                          | 'ServiceCAccountFeeQuarterly'
                          | 'ServiceCBalanceHandling'
                          | 'ServiceCFixedTariff'
                          | 'ServiceCBusiDepAccBreakage'
                          | 'ServiceCMonitorDaily'
                          | 'ServiceCManagementFee'
                          | 'ServiceCMinimumMonthlyFee'
                          | 'ServiceCMonitorMonthly'
                          | 'ServiceCMonitorWeekly'
                          | 'ServiceCSecurityFee'
                          | 'ServiceCMT940AccountFirst'
                          | 'ServiceCMT940AccountSubsequent'
                          | 'ServiceCOther'
                          | 'CounterCoinHandling'
                          | 'CounterCashIn'
                          | 'CounterCashInNotUs'
                          | 'CounterCashOut'
                          | 'CounterCashX'
                          | 'CounterForeignCashMax'
                          | 'CounterForeignNoteHandling'
                          | 'CounterForeignCashOut'
                          | 'CounterCashFeeRate'
                          | 'CounterForeignCashOutTx'
                          | 'CounterCounterLodgement'
                          | 'CounterCashDropLodgement'
                          | 'CounterNotesLodged'
                          | 'CounterNotesOut'
                          | 'CounterCashInOwn'
                          | 'CounterPaidTrans'
                          | 'CounterCashFeePercent'
                        LengthPromotionalInDays?: number | undefined
                        Other?: string | undefined
                        StartPromotionOrFutureTerms?: string | undefined
                        StopPromotionOrFutureTerms?: string | undefined
                      }
                      FeeSubType: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                    }[]
                    FeeHigherTier?: number | undefined
                    FeeLowerTier?: number | undefined
                    LengthPromotionalInDays?: number | undefined
                    StartPromotionOrFutureTerms?: string | undefined
                    StopPromotionOrFutureTerms?: string | undefined
                  }
                  ProductState: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                }[]
                LoanItem: {
                  CCARegulatedEntity: boolean
                  DateOfChange?: string | undefined
                  IsALowInterestRepaymentStartPossible: boolean
                  IsThisAnInterestOnlyLoan: boolean
                  LengthPromotionalInDays?: number | undefined
                  LoanPricing?:
                    | {
                        IndicativeRate: string
                        LoanLengthIncrement:
                          | '1 year'
                          | '2 years'
                          | '3 years'
                          | '4 years'
                          | '5 years'
                        LoanLengthIncrementLower: number
                        LoanLengthIncrementUpper: number
                        LoanSizeBandLower: string
                        LoanSizeBandUpper: string
                        Negotiable: boolean
                        RateComparisonType?: 'APR' | 'AER' | 'Gross' | 'Net' | 'RepApr' | undefined
                        RepaymentFrequency: (
                          | 'Daily'
                          | 'Flexible'
                          | 'Fortnightly'
                          | 'HalfYearly'
                          | 'Monthly'
                          | 'Quarterly'
                          | 'Weekly'
                          | 'Yearly'
                        )[]
                        SizeIncrement:
                          | '£5000'
                          | '£10000'
                          | '£15000'
                          | '£20000'
                          | '£25000'
                          | 'Other'
                          | 'TierMaximum'
                          | 'TierMinimum'
                      }[]
                    | undefined
                  ProductState: 'FutureMultipleTerms' | 'Promotional' | 'Regular'
                  StartPromotionOrFutureTerms?: string | undefined
                  StopPromotionOrFutureTerms?: string | undefined
                  WillTheLoanBePaidInTrancheDrawdowns: boolean
                }[]
                MaximumLoanAmount: string
                MaximumLoanTerm: number
                MinimumLoanAmount: string
                MinimumLoanTerm: number
                Organisation: {
                  Brand: { TrademarkID: string; TrademarkIPOCode: 'UK' | 'EU' }
                  ParentOrganisation: {
                    BIC?: string | undefined
                    LEI?: string | undefined
                    OrganisationName: { LegalName: string }
                  }
                }
                PaymentHoliday: boolean
                ProductDescription: string
                ProductIdentifier: string
                ProductName: string
                ProductSegment: (
                  | 'AgricultureSector'
                  | 'AllSegmentsCorporate'
                  | 'Corporate'
                  | 'FixedGroup'
                  | 'FlexibleBusinessLoan'
                  | 'GovernmentScheme'
                  | 'NewCustomersOnly'
                  | 'SmallLoan'
                  | 'SpecialisedSector'
                  | 'SwitchersOnly'
                )[]
                ProductTypeName: 'FlexibleBusinessLoan' | 'SmallBusinessLoan' | 'SmeUnsecuredLoan'
                ProductURL: string[]
                TsandCs: string[]
              }[]
              meta: {
                Agreement: 'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions'
                LastUpdated: string
                License: 'https://www.openbanking.org.uk/open-licence'
                TermsOfUse: 'https://www.openbanking.org.uk/terms'
                TotalResults: number
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have sent a request which could not be understood.'
              status: '400'
              title: 'Bad request'
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'Your client has failed to submit a request, and a timeout has occurred.'
              status: '408'
              title: 'Client timeout'
            }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'You have requested this resource too often. Slow down.'
              status: '429'
              title: 'Too many requests'
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'An error occurred on the server. No further information is available.'
              status: '500'
              title: 'Internal server error'
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {
              description: 'The service is temporarily unavailable.'
              status: '503'
              title: 'Service temporarily unavailable'
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: { description: string; status: string; title: string }
            outputFormat: 'json'
            status: 200
          }
      $head: {
        input: {
          header: { 'If-Modified-Since'?: string | undefined; 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
