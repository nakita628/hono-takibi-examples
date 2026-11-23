type State = 'ACT' | 'NSW' | 'NT' | 'QLD' | 'SA' | 'TAS' | 'VIC' | 'WA'
type HomeAddress = {
  AddressLine1: string
  AddressLine2?: string | undefined
  City?: string | undefined
  Region?: State | undefined
  PostalCode?: string | undefined
  Country?: string | undefined
}
type BankAccount = {
  StatementText?: string | undefined
  AccountName?: string | undefined
  BSB?: string | undefined
  AccountNumber?: string | undefined
  Remainder?: boolean | undefined
  Amount?: number | undefined
}
type EarningsRateCalculationType = 'USEEARNINGSRATE' | 'ENTEREARNINGSRATE' | 'ANNUALSALARY'
type EarningsLine = {
  EarningsRateID: string
  CalculationType?: EarningsRateCalculationType | undefined
  AnnualSalary?: number | undefined
  NumberOfUnitsPerWeek?: number | undefined
  RatePerUnit?: number | undefined
  NormalNumberOfUnits?: number | undefined
  Amount?: number | undefined
  NumberOfUnits?: number | undefined
  FixedAmount?: number | undefined
}
type DeductionTypeCalculationType = 'FIXEDAMOUNT' | 'PRETAX' | 'POSTTAX'
type DeductionLine = {
  DeductionTypeID: string
  CalculationType?: DeductionTypeCalculationType | undefined
  Amount?: number | undefined
  Percentage?: number | undefined
  NumberOfUnits?: number | undefined
}
type SuperannuationContributionType = 'SGC' | 'SALARYSACRIFICE' | 'EMPLOYERADDITIONAL' | 'EMPLOYEE'
type SuperannuationCalculationType = 'FIXEDAMOUNT' | 'PERCENTAGEOFEARNINGS' | 'STATUTORY'
type SuperLine = {
  SuperMembershipID?: string | undefined
  ContributionType?: SuperannuationContributionType | undefined
  CalculationType?: SuperannuationCalculationType | undefined
  MinimumMonthlyEarnings?: number | undefined
  ExpenseAccountCode?: string | undefined
  LiabilityAccountCode?: string | undefined
  Percentage?: number | undefined
  Amount?: number | undefined
}
type ReimbursementLine = {
  ReimbursementTypeID?: string | undefined
  Amount?: number | undefined
  Description?: string | undefined
  ExpenseAccount?: string | undefined
}
type LeaveLineCalculationType =
  | 'NOCALCULATIONREQUIRED'
  | 'FIXEDAMOUNTEACHPERIOD'
  | 'ENTERRATEINPAYTEMPLATE'
  | 'BASEDONORDINARYEARNINGS'
type EntitlementFinalPayPayoutType = 'NOTPAIDOUT' | 'PAIDOUT'
type EmploymentTerminationPaymentType = 'O' | 'R'
type LeaveLine = {
  LeaveTypeID?: string | undefined
  CalculationType?: LeaveLineCalculationType | undefined
  EntitlementFinalPayPayoutType?: EntitlementFinalPayPayoutType | undefined
  EmploymentTerminationPaymentType?: EmploymentTerminationPaymentType | undefined
  IncludeSuperannuationGuaranteeContribution?: boolean | undefined
  IsQualifyingEarnings: boolean
  NumberOfUnits?: number | undefined
  AnnualNumberOfUnits?: number | undefined
  FullTimeNumberOfUnitsPerPeriod?: number | undefined
}
type PayTemplate = {
  EarningsLines?: EarningsLine[] | undefined
  DeductionLines?: DeductionLine[] | undefined
  SuperLines?: SuperLine[] | undefined
  ReimbursementLines?: ReimbursementLine[] | undefined
  LeaveLines?: LeaveLine[] | undefined
}
type OpeningBalanceLeaveLine = {
  LeaveTypeID?: string | undefined
  NumberOfUnits?: number | undefined
}
type PaidLeaveEarningsLine = {
  LeaveTypeID: string
  Amount: number
  SGCAppliedLeaveLoadingAmount?: number | undefined
  SGCExemptedLeaveLoadingAmount?: number | undefined
  ResetSTPCategorisation?: boolean | undefined
}
type OpeningBalances = {
  OpeningBalanceDate?: string | undefined
  Tax?: string | undefined
  EarningsLines?: EarningsLine[] | undefined
  DeductionLines?: DeductionLine[] | undefined
  SuperLines?: SuperLine[] | undefined
  ReimbursementLines?: ReimbursementLine[] | undefined
  LeaveLines?: OpeningBalanceLeaveLine[] | undefined
  PaidLeaveEarningsLines?: PaidLeaveEarningsLine[] | undefined
}
type EmploymentBasis =
  | 'FULLTIME'
  | 'PARTTIME'
  | 'CASUAL'
  | 'LABOURHIRE'
  | 'SUPERINCOMESTREAM'
  | 'NONEMPLOYEE'
type TFNExemptionType = 'NOTQUOTED' | 'PENDING' | 'PENSIONER' | 'UNDER18'
type ResidencyStatus = 'AUSTRALIANRESIDENT' | 'FOREIGNRESIDENT' | 'WORKINGHOLIDAYMAKER'
type TaxScaleType =
  | 'REGULAR'
  | 'ACTORSARTISTSENTERTAINERS'
  | 'HORTICULTURISTORSHEARER'
  | 'SENIORORPENSIONER'
  | 'WORKINGHOLIDAYMAKER'
  | 'FOREIGN'
type WorkCondition = 'PROMOTIONAL' | 'THREELESSPERFORMANCESPERWEEK' | 'NONE'
type SeniorMaritalStatus = 'MEMBEROFCOUPLE' | 'MEMBEROFILLNESSSEPARATEDCOUPLE' | 'SINGLE'
type TaxDeclaration = {
  EmployeeID?: string | undefined
  EmploymentBasis?: EmploymentBasis | undefined
  TFNExemptionType?: TFNExemptionType | undefined
  TaxFileNumber?: string | undefined
  ABN?: string | undefined
  AustralianResidentForTaxPurposes?: boolean | undefined
  ResidencyStatus?: ResidencyStatus | undefined
  TaxScaleType?: TaxScaleType | undefined
  WorkCondition?: WorkCondition | undefined
  SeniorMaritalStatus?: SeniorMaritalStatus | undefined
  TaxFreeThresholdClaimed?: boolean | undefined
  TaxOffsetEstimatedAmount?: number | undefined
  HasHELPDebt?: boolean | undefined
  HasSFSSDebt?: boolean | undefined
  HasTradeSupportLoanDebt?: boolean | undefined
  UpwardVariationTaxWithholdingAmount?: number | undefined
  EligibleToReceiveLeaveLoading?: boolean | undefined
  ApprovedWithholdingVariationPercentage?: number | undefined
  HasStudentStartupLoan?: boolean | undefined
  HasLoanOrStudentDebt?: boolean | undefined
  UpdatedDateUTC?: string | undefined
  IncludeLeaveLoadingInQualifyingEarnings?: boolean | undefined
}
type IncomeType =
  | 'SALARYANDWAGES'
  | 'WORKINGHOLIDAYMAKER'
  | 'NONEMPLOYEE'
  | 'CLOSELYHELDPAYEES'
  | 'LABOURHIRE'
type EmploymentType = 'EMPLOYEE' | 'CONTRACTOR'
type CountryOfResidence =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'CV'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'AN'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'US'
  | 'UM'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW'
  | 'BQ'
  | 'CW'
  | 'SX'
  | 'SS'
type LeaveBalance = {
  LeaveName?: string | undefined
  LeaveTypeID?: string | undefined
  NumberOfUnits?: number | undefined
  TypeOfUnits?: string | undefined
}
type SuperMembership = {
  SuperMembershipID?: string | undefined
  SuperFundID: string
  EmployeeNumber: string
}
type EmployeeStatus = 'ACTIVE' | 'TERMINATED'
type ValidationError = { Message?: string | undefined }
type Employee = {
  FirstName: string
  LastName: string
  DateOfBirth: string
  HomeAddress?: HomeAddress | undefined
  StartDate?: string | undefined
  Title?: string | undefined
  MiddleNames?: string | undefined
  Email?: string | undefined
  Gender?: 'N' | 'M' | 'F' | 'I' | undefined
  Phone?: string | undefined
  Mobile?: string | undefined
  TwitterUserName?: string | undefined
  IsAuthorisedToApproveLeave?: boolean | undefined
  IsAuthorisedToApproveTimesheets?: boolean | undefined
  JobTitle?: string | undefined
  Classification?: string | undefined
  OrdinaryEarningsRateID?: string | undefined
  PayrollCalendarID?: string | undefined
  EmployeeGroupName?: string | undefined
  EmployeeID?: string | undefined
  TerminationDate?: string | undefined
  TerminationReason?: 'V' | 'I' | 'D' | 'R' | 'F' | 'C' | 'T' | undefined
  BankAccounts?: BankAccount[] | undefined
  PayTemplate?: PayTemplate | undefined
  OpeningBalances?: OpeningBalances | undefined
  TaxDeclaration?: TaxDeclaration | undefined
  IncomeType?: IncomeType | undefined
  EmploymentType?: EmploymentType | undefined
  CountryOfResidence?: CountryOfResidence | undefined
  IsSTP2Qualified?: boolean | undefined
  LeaveBalances?: LeaveBalance[] | undefined
  SuperMemberships?: SuperMembership[] | undefined
  Status?: EmployeeStatus | undefined
  UpdatedDateUTC?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type Employees = { Employees?: Employee[] | undefined }
type APIException = {
  ErrorNumber?: number | undefined
  Type?: string | undefined
  Message?: string | undefined
}
type PayOutType = 'DEFAULT' | 'CASHED_OUT'
type LeavePeriodStatus = 'SCHEDULED' | 'PROCESSED' | 'REQUESTED' | 'REJECTED'
type LeavePeriod = {
  NumberOfUnits?: number | undefined
  PayPeriodEndDate?: string | undefined
  PayPeriodStartDate?: string | undefined
  LeavePeriodStatus?: LeavePeriodStatus | undefined
}
type LeaveApplication = {
  LeaveApplicationID?: string | undefined
  EmployeeID?: string | undefined
  LeaveTypeID?: string | undefined
  Title?: string | undefined
  StartDate?: string | undefined
  EndDate?: string | undefined
  Description?: string | undefined
  PayOutType?: PayOutType | undefined
  LeavePeriods?: LeavePeriod[] | undefined
  UpdatedDateUTC?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type LeaveApplications = { LeaveApplications?: LeaveApplication[] | undefined }
type EarningsType =
  | 'FIXED'
  | 'ORDINARYTIMEEARNINGS'
  | 'OVERTIMEEARNINGS'
  | 'ALLOWANCE'
  | 'LUMPSUMD'
  | 'EMPLOYMENTTERMINATIONPAYMENT'
  | 'LUMPSUMA'
  | 'LUMPSUMB'
  | 'BONUSESANDCOMMISSIONS'
  | 'LUMPSUME'
  | 'LUMPSUMW'
  | 'DIRECTORSFEES'
  | 'PAIDPARENTALLEAVE'
  | 'WORKERSCOMPENSATION'
type RateType = 'FIXEDAMOUNT' | 'MULTIPLE' | 'RATEPERUNIT'
type AllowanceType =
  | 'CAR'
  | 'TRANSPORT'
  | 'LAUNDRY'
  | 'MEALS'
  | 'TRAVEL'
  | 'OTHER'
  | 'TOOLS'
  | 'TASKS'
  | 'QUALIFICATIONS'
type AllowanceCategory =
  | 'NONDEDUCTIBLE'
  | 'UNIFORM'
  | 'PRIVATEVEHICLE'
  | 'HOMEOFFICE'
  | 'TRANSPORT'
  | 'GENERAL'
  | 'OTHER'
type EarningsRate = {
  Name?: string | undefined
  AccountCode?: string | undefined
  TypeOfUnits?: string | undefined
  IsExemptFromTax?: boolean | undefined
  IsExemptFromSuper?: boolean | undefined
  IsReportableAsW1?: boolean | undefined
  IsQualifyingEarnings: boolean
  AllowanceContributesToAnnualLeaveRate?: boolean | undefined
  AllowanceContributesToOvertimeRate?: boolean | undefined
  EarningsType?: EarningsType | undefined
  EarningsRateID?: string | undefined
  RateType?: RateType | undefined
  RatePerUnit?: string | undefined
  Multiplier?: number | undefined
  AccrueLeave?: boolean | undefined
  Amount?: number | undefined
  EmploymentTerminationPaymentType?: EmploymentTerminationPaymentType | undefined
  UpdatedDateUTC?: string | undefined
  CurrentRecord?: boolean | undefined
  AllowanceType?: AllowanceType | undefined
  AllowanceCategory?: AllowanceCategory | undefined
}
type DeductionType = {
  Name?: string | undefined
  AccountCode?: string | undefined
  ReducesTax?: boolean | undefined
  ReducesSuper?: boolean | undefined
  IsExemptFromW1?: boolean | undefined
  DeductionTypeID?: string | undefined
  UpdatedDateUTC?: string | undefined
  DeductionCategory?: 'NONE' | 'UNIONFEES' | 'WORKPLACEGIVING' | undefined
  CurrentRecord?: boolean | undefined
}
type LeaveCategoryCode =
  | 'ANNUALLEAVE'
  | 'LONGSERVICELEAVE'
  | 'PERSONALSICKCARERSLEAVE'
  | 'ROSTEREDDAYOFF'
  | 'TIMEOFFINLIEU'
  | 'COMPASSIONATEANDBEREAVEMENTLEAVE'
  | 'STUDYLEAVE'
  | 'FAMILYANDDOMESTICVIOLENCELEAVE'
  | 'SPECIALPAIDLEAVE'
  | 'COMMUNITYSERVICELEAVE'
  | 'JURYDUTYLEAVE'
  | 'DEFENCERESERVELEAVE'
type LeaveType = {
  Name?: string | undefined
  TypeOfUnits?: string | undefined
  LeaveTypeID?: string | undefined
  NormalEntitlement?: number | undefined
  LeaveLoadingRate?: number | undefined
  UpdatedDateUTC?: string | undefined
  IsPaidLeave?: boolean | undefined
  ShowOnPayslip?: boolean | undefined
  CurrentRecord?: boolean | undefined
  LeaveCategoryCode?: LeaveCategoryCode | undefined
  SGCExempt?: boolean | undefined
  IsQualifyingEarnings: boolean
}
type ReimbursementType = {
  Name?: string | undefined
  AccountCode?: string | undefined
  ReimbursementTypeID?: string | undefined
  UpdatedDateUTC?: string | undefined
  CurrentRecord?: boolean | undefined
}
type PayItem = {
  EarningsRates?: EarningsRate[] | undefined
  DeductionTypes?: DeductionType[] | undefined
  LeaveTypes?: LeaveType[] | undefined
  ReimbursementTypes?: ReimbursementType[] | undefined
}
type PayItems = { PayItems?: PayItem | undefined }
type CalendarType =
  | 'WEEKLY'
  | 'FORTNIGHTLY'
  | 'FOURWEEKLY'
  | 'MONTHLY'
  | 'TWICEMONTHLY'
  | 'QUARTERLY'
type PayrollCalendar = {
  Name?: string | undefined
  CalendarType?: CalendarType | undefined
  StartDate?: string | undefined
  PaymentDate?: string | undefined
  PayrollCalendarID?: string | undefined
  UpdatedDateUTC?: string | undefined
  ReferenceDate?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type PayrollCalendars = { PayrollCalendars?: PayrollCalendar[] | undefined }
type PayRunStatus = 'DRAFT' | 'POSTED'
type PayslipSummary = {
  EmployeeID?: string | undefined
  PayslipID?: string | undefined
  FirstName?: string | undefined
  LastName?: string | undefined
  EmployeeGroup?: string | undefined
  Wages?: number | undefined
  Deductions?: number | undefined
  Tax?: number | undefined
  Super?: number | undefined
  Reimbursements?: number | undefined
  NetPay?: number | undefined
  UpdatedDateUTC?: string | undefined
}
type PayRun = {
  PayrollCalendarID: string
  PayRunID?: string | undefined
  PayRunPeriodStartDate?: string | undefined
  PayRunPeriodEndDate?: string | undefined
  PayRunStatus?: PayRunStatus | undefined
  PaymentDate?: string | undefined
  PayslipMessage?: string | undefined
  UpdatedDateUTC?: string | undefined
  Payslips?: PayslipSummary[] | undefined
  Wages?: number | undefined
  Deductions?: number | undefined
  Tax?: number | undefined
  Super?: number | undefined
  Reimbursement?: number | undefined
  NetPay?: number | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type PayRuns = { PayRuns?: PayRun[] | undefined }
type LeaveEarningsLine = {
  EarningsRateID?: string | undefined
  RatePerUnit?: number | undefined
  NumberOfUnits?: number | undefined
  PayOutType?: PayOutType | undefined
}
type LeaveAccrualLine = {
  LeaveTypeID?: string | undefined
  NumberOfUnits?: number | undefined
  AutoCalculate?: boolean | undefined
}
type SuperannuationLine = {
  SuperMembershipID?: string | undefined
  ContributionType?: SuperannuationContributionType | undefined
  CalculationType?: SuperannuationCalculationType | undefined
  MinimumMonthlyEarnings?: number | undefined
  ExpenseAccountCode?: string | undefined
  LiabilityAccountCode?: string | undefined
  PaymentDateForThisPeriod?: string | undefined
  Percentage?: number | undefined
  Amount?: number | undefined
}
type ManualTaxType =
  | 'PAYGMANUAL'
  | 'ETPOMANUAL'
  | 'ETPRMANUAL'
  | 'SCHEDULE5MANUAL'
  | 'SCHEDULE5STSLMANUAL'
  | 'SCHEDULE4MANUAL'
type TaxLine = {
  PayslipTaxLineID?: string | undefined
  Amount?: number | undefined
  TaxTypeName?: string | undefined
  Description?: string | undefined
  ManualTaxType?: ManualTaxType | undefined
  LiabilityAccount?: string | undefined
}
type Payslip = {
  EmployeeID?: string | undefined
  PayslipID?: string | undefined
  FirstName?: string | undefined
  LastName?: string | undefined
  Wages?: number | undefined
  Deductions?: number | undefined
  Tax?: number | undefined
  Super?: number | undefined
  Reimbursements?: number | undefined
  NetPay?: number | undefined
  EarningsLines?: EarningsLine[] | undefined
  LeaveEarningsLines?: LeaveEarningsLine[] | undefined
  TimesheetEarningsLines?: EarningsLine[] | undefined
  DeductionLines?: DeductionLine[] | undefined
  LeaveAccrualLines?: LeaveAccrualLine[] | undefined
  ReimbursementLines?: ReimbursementLine[] | undefined
  SuperannuationLines?: SuperannuationLine[] | undefined
  TaxLines?: TaxLine[] | undefined
  UpdatedDateUTC?: string | undefined
}
type PayslipObject = { Payslip?: Payslip | undefined }
type PayslipLines = {
  EarningsLines?: EarningsLine[] | undefined
  LeaveEarningsLines?: LeaveEarningsLine[] | undefined
  TimesheetEarningsLines?: EarningsLine[] | undefined
  DeductionLines?: DeductionLine[] | undefined
  LeaveAccrualLines?: LeaveAccrualLine[] | undefined
  ReimbursementLines?: ReimbursementLine[] | undefined
  SuperannuationLines?: SuperannuationLine[] | undefined
  TaxLines?: TaxLine[] | undefined
}
type Payslips = { Payslips?: Payslip[] | undefined }
type AccountType =
  | 'BANK'
  | 'CURRENT'
  | 'CURRLIAB'
  | 'DEPRECIATN'
  | 'DIRECTCOSTS'
  | 'EQUITY'
  | 'EXPENSE'
  | 'FIXED'
  | 'INVENTORY'
  | 'LIABILITY'
  | 'NONCURRENT'
  | 'OTHERINCOME'
  | 'OVERHEADS'
  | 'PREPAYMENT'
  | 'REVENUE'
  | 'SALES'
  | 'TERMLIAB'
  | 'PAYGLIABILITY'
  | 'PAYG'
  | 'SUPERANNUATIONEXPENSE'
  | 'SUPERANNUATIONLIABILITY'
  | 'WAGESEXPENSE'
  | 'WAGESPAYABLELIABILITY'
type Account = {
  AccountID?: string | undefined
  Type?: AccountType | undefined
  Code?: string | undefined
  Name?: string | undefined
}
type Settings = {
  Accounts?: Account[] | undefined
  TrackingCategories?:
    | {
        EmployeeGroups?:
          | { TrackingCategoryID?: string | undefined; TrackingCategoryName?: string | undefined }
          | undefined
        TimesheetCategories?:
          | { TrackingCategoryID?: string | undefined; TrackingCategoryName?: string | undefined }
          | undefined
      }
    | undefined
  DaysInPayrollYear?: number | undefined
  EmployeesAreSTP2?: boolean | undefined
}
type SettingsObject = { Settings?: Settings | undefined }
type SuperFundType = 'REGULATED' | 'SMSF'
type SuperFund = {
  SuperFundID?: string | undefined
  Type: SuperFundType
  Name?: string | undefined
  ABN?: string | undefined
  BSB?: string | undefined
  AccountNumber?: string | undefined
  AccountName?: string | undefined
  ElectronicServiceAddress?: string | undefined
  EmployerNumber?: string | undefined
  SPIN?: string | undefined
  USI?: string | undefined
  UpdatedDateUTC?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type SuperFunds = { SuperFunds?: SuperFund[] | undefined }
type SuperFundProduct = {
  ABN?: string | undefined
  USI?: string | undefined
  SPIN?: string | undefined
  ProductName?: string | undefined
}
type SuperFundProducts = { SuperFundProducts?: SuperFundProduct[] | undefined }
type TimesheetStatus = 'DRAFT' | 'PROCESSED' | 'APPROVED' | 'REJECTED' | 'REQUESTED'
type TimesheetLine = {
  EarningsRateID?: string | undefined
  TrackingItemID?: string | undefined
  NumberOfUnits?: number[] | undefined
  UpdatedDateUTC?: string | undefined
}
type TimesheetLines = TimesheetLine[]
type Timesheet = {
  EmployeeID: string
  StartDate: string
  EndDate: string
  Status?: TimesheetStatus | undefined
  Hours?: number | undefined
  TimesheetID?: string | undefined
  TimesheetLines?: TimesheetLines | undefined
  UpdatedDateUTC?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type Timesheets = { Timesheets?: Timesheet[] | undefined }
type TimesheetObject = { Timesheet?: Timesheet | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Employees': {
      $get:
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: Employees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Employee[] }
            output: Employees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Employee[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID': {
      $get: {
        input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: Employees
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { EmployeeID: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
        } & { json: Employee[] }
        output: Employees
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/LeaveApplications': {
      $get:
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: LeaveApplications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: LeaveApplication[] }
            output: LeaveApplications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: LeaveApplication[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/LeaveApplications/v2': {
      $get:
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: LeaveApplications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/LeaveApplications/:LeaveApplicationID': {
      $get: {
        input: { param: { LeaveApplicationID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: LeaveApplications
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { LeaveApplicationID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: LeaveApplication[] }
            output: LeaveApplications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LeaveApplicationID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: LeaveApplication[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/LeaveApplications/:LeaveApplicationID/approve': {
      $post:
        | {
            input: { param: { LeaveApplicationID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: LeaveApplications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LeaveApplicationID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/LeaveApplications/:LeaveApplicationID/reject': {
      $post:
        | {
            input: { param: { LeaveApplicationID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: LeaveApplications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LeaveApplicationID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PayItems': {
      $get:
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: PayItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayItem }
            output: PayItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayItem }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/PayrollCalendars': {
      $get:
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: PayrollCalendars
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayrollCalendar[] }
            output: PayrollCalendars
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayrollCalendar[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/PayrollCalendars/:PayrollCalendarID': {
      $get:
        | {
            input: { param: { PayrollCalendarID: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: PayrollCalendars
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PayrollCalendarID: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PayRuns': {
      $get:
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: PayRuns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayRun[] }
            output: PayRuns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayRun[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/PayRuns/:PayRunID': {
      $get: {
        input: { param: { PayRunID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: PayRuns
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { PayRunID: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
        } & { json: PayRun[] }
        output: PayRuns
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Payslip/:PayslipID': {
      $get: {
        input: { param: { PayslipID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: PayslipObject
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { PayslipID: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
        } & { json: PayslipLines[] }
        output: Payslips
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Settings': {
      $get: {
        input: { header: { 'Xero-Tenant-Id': string } }
        output: SettingsObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Superfunds': {
      $get:
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: SuperFunds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: SuperFund[] }
            output: SuperFunds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: SuperFund[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/Superfunds/:SuperFundID': {
      $get: {
        input: { param: { SuperFundID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: SuperFunds
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { SuperFundID: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
        } & { json: SuperFund[] }
        output: SuperFunds
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/SuperfundProducts': {
      $get:
        | {
            input: { query: { ABN?: string | undefined; USI?: string | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: SuperFundProducts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ABN?: string | undefined; USI?: string | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets': {
      $get:
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: Timesheets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                where?: string | undefined
                order?: string | undefined
                page?: number | undefined
              }
            } & { header: { 'If-Modified-Since'?: string | undefined; 'Xero-Tenant-Id': string } }
            output: APIException
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Timesheet[] }
            output: Timesheets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Timesheet[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID': {
      $get: {
        input: { param: { TimesheetID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: TimesheetObject
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { TimesheetID: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
        } & { json: Timesheet[] }
        output: Timesheets
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
