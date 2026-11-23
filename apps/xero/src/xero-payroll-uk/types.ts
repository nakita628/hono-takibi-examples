type Pagination = {
  page?: number | undefined
  pageSize?: number | undefined
  pageCount?: number | undefined
  itemCount?: number | undefined
}
type InvalidField = { name?: string | undefined; reason?: string | undefined }
type Problem = {
  type?: string | undefined
  title?: string | undefined
  status?: string | undefined
  detail?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
}
type Address = {
  addressLine1: string
  addressLine2?: string | undefined
  city: string
  postCode: string
  countryName?: string | undefined
}
type NICategoryLetter =
  | 'A'
  | 'B'
  | 'C'
  | 'F'
  | 'H'
  | 'I'
  | 'J'
  | 'L'
  | 'M'
  | 'S'
  | 'V'
  | 'X'
  | 'Z'
  | 'D'
  | 'E'
  | 'K'
  | 'N'
type NICategory =
  | { niCategory?: 'F' | 'I' | 'L' | 'S' | 'N' | 'E' | 'D' | 'K' | undefined }
  | { niCategory?: 'V' | undefined }
type EmploymentStatus = 'Employee' | 'Worker' | 'Unspecified' | 'OffPayrollWorker'
type ContractType = 'FullTime' | 'PartTime' | 'ZeroHour' | 'Unspecified'
type DevelopmentalRoleDetails = {
  startDate: string
  endDate: string
  developmentalRole: string
  publicKey?: string | undefined
}
type Contracts = {
  startDate: string
  employmentStatus: EmploymentStatus
  contractType: ContractType
  publicKey?: string | undefined
  isFixedTerm?: boolean | undefined
  fixedTermEndDate?: string | undefined
  developmentalRoleDetails?: DevelopmentalRoleDetails | undefined
}
type Employee = {
  employeeID?: string | undefined
  title: string
  firstName: string
  lastName: string
  dateOfBirth: string
  address: Address
  email?: string | undefined
  gender: 'M' | 'F'
  phoneNumber?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  payrollCalendarID?: string | undefined
  updatedDateUTC?: string | undefined
  createdDateUTC?: string | undefined
  niCategory?: NICategoryLetter | undefined
  niCategories?: NICategory[] | undefined
  nationalInsuranceNumber?: string | undefined
  isOffPayrollWorker?: boolean | undefined
  contracts?: Contracts[] | undefined
}
type Employees = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  employees?: Employee[] | undefined
}
type EmployeeObject = {
  pagination?: Pagination | undefined
  employee?: Employee | undefined
  problem?: Problem | undefined
}
type Employment = {
  payrollCalendarID: string
  startDate: string
  employeeNumber: string
  niCategory?: NICategoryLetter | undefined
  niCategories: NICategory[]
  contracts?: Contracts[] | undefined
}
type EmploymentObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  employment?: Employment | undefined
}
type EmployeeTax = {
  starterType?: string | undefined
  starterDeclaration?: string | undefined
  taxCode?: string | undefined
  w1M1?: boolean | undefined
  previousTaxablePay?: number | undefined
  previousTaxPaid?: number | undefined
  studentLoanDeduction?: string | undefined
  hasPostGraduateLoans?: boolean | undefined
  isDirector?: boolean | undefined
  directorshipStartDate?: string | undefined
  nicCalculationMethod?: string | undefined
}
type EmployeeTaxObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  employeeTax?: EmployeeTax | undefined
}
type EmployeeOpeningBalances = {
  statutoryAdoptionPay?: number | undefined
  statutoryMaternityPay?: number | undefined
  statutoryPaternityPay?: number | undefined
  statutorySharedParentalPay?: number | undefined
  statutorySickPay?: number | undefined
  priorEmployeeNumber?: number | undefined
}
type EmployeeOpeningBalancesObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  openingBalances?: EmployeeOpeningBalances | undefined
}
type LeavePeriod = {
  periodStartDate?: string | undefined
  periodEndDate?: string | undefined
  numberOfUnits?: number | undefined
  periodStatus?: 'Approved' | 'Completed' | undefined
}
type EmployeeLeave = {
  leaveID?: string | undefined
  leaveTypeID: string
  description: string
  startDate: string
  endDate: string
  periods?: LeavePeriod[] | undefined
  updatedDateUTC?: string | undefined
}
type EmployeeLeaves = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leave?: EmployeeLeave[] | undefined
}
type EmployeeLeaveObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leave?: EmployeeLeave | undefined
}
type EmployeeLeaveBalance = {
  name?: string | undefined
  leaveTypeID?: string | undefined
  balance?: number | undefined
  typeOfUnits?: string | undefined
}
type EmployeeLeaveBalances = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leaveBalances?: EmployeeLeaveBalance[] | undefined
}
type EmployeeStatutoryLeaveBalance = {
  leaveType?:
    | 'Sick'
    | 'Adoption'
    | 'Maternity'
    | 'Paternity'
    | 'Sharedparental'
    | 'Bereavement'
    | 'NeonatalCare'
    | undefined
  balanceRemaining?: number | undefined
  units?: 'Hours' | undefined
}
type EmployeeStatutoryLeaveBalanceObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leaveBalance?: EmployeeStatutoryLeaveBalance | undefined
}
type EmployeeStatutoryLeaveSummary = {
  statutoryLeaveID?: string | undefined
  employeeID?: string | undefined
  type?:
    | 'Sick'
    | 'Adoption'
    | 'Maternity'
    | 'Paternity'
    | 'Sharedparental'
    | 'Bereavement'
    | 'NeonatalCare'
    | 'BereavementNire'
    | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  isEntitled?: boolean | undefined
  status?: 'Pending' | 'In-Progress' | 'Completed' | undefined
}
type EmployeeStatutoryLeavesSummaries = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  statutoryLeaves?: EmployeeStatutoryLeaveSummary[] | undefined
}
type EmployeeStatutorySickLeave = {
  statutoryLeaveID?: string | undefined
  employeeID: string
  leaveTypeID: string
  startDate: string
  endDate: string
  type?: string | undefined
  status?: string | undefined
  workPattern: string[]
  isPregnancyRelated: boolean
  sufficientNotice: boolean
  isEntitled?: boolean | undefined
  entitlementWeeksRequested?: number | undefined
  entitlementWeeksQualified?: number | undefined
  entitlementWeeksRemaining?: number | undefined
  overlapsWithOtherLeave?: boolean | undefined
  entitlementFailureReasons?:
    | (
        | 'UnableToCalculateAwe'
        | 'AweLowerThanLel'
        | 'NotQualifiedInPreviousPiw'
        | 'ExceededMaximumEntitlementWeeksOfSsp'
        | 'ExceededMaximumDurationOfPiw'
        | 'SufficientNoticeNotGiven'
      )[]
    | undefined
}
type EmployeeStatutorySickLeaveObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  statutorySickLeave?: EmployeeStatutorySickLeave | undefined
}
type LeavePeriods = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  periods?: LeavePeriod[] | undefined
}
type EmployeeLeaveType = {
  leaveTypeID: string
  scheduleOfAccrual:
    | 'BeginningOfCalendarYear'
    | 'OnAnniversaryDate'
    | 'EachPayPeriod'
    | 'OnHourWorked'
  hoursAccruedAnnually?: number | undefined
  maximumToAccrue?: number | undefined
  openingBalance?: number | undefined
  rateAccruedHourly?: number | undefined
  scheduleOfAccrualDate?: string | undefined
}
type EmployeeLeaveTypes = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leaveTypes?: EmployeeLeaveType[] | undefined
}
type EmployeeLeaveTypeObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leaveType?: EmployeeLeaveType | undefined
}
type BankAccount = { accountName: string; accountNumber: string; sortCode: string }
type PaymentMethod = {
  paymentMethod: 'Cheque' | 'Electronically' | 'Manual'
  bankAccounts?: BankAccount[] | undefined
}
type PaymentMethodObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  paymentMethod?: PaymentMethod | undefined
}
type EarningsTemplate = {
  payTemplateEarningID?: string | undefined
  ratePerUnit?: number | undefined
  numberOfUnits?: number | undefined
  fixedAmount?: number | undefined
  earningsRateID?: string | undefined
  name?: string | undefined
}
type EarningsTemplates = EarningsTemplate[]
type EmployeePayTemplate = { employeeID?: string | undefined; earningTemplates: EarningsTemplates }
type EmployeePayTemplateObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  payTemplate?: EmployeePayTemplate | undefined
}
type EarningsTemplateObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  earningTemplate?: EarningsTemplate | undefined
}
type EmployeePayTemplates = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  earningTemplates?: EarningsTemplates | undefined
}
type Benefit = {
  id?: string | undefined
  name: string
  category: 'StakeholderPension' | 'Other'
  liabilityAccountId: string
  expenseAccountId: string
  standardAmount?: number | undefined
  percentage: number
  calculationType: 'FixedAmount' | 'PercentageOfGross'
  currentRecord?: boolean | undefined
  subjectToNIC?: boolean | undefined
  subjectToPension?: boolean | undefined
  subjectToTax?: boolean | undefined
  isCalculatingOnQualifyingEarnings?: boolean | undefined
  showBalanceToEmployee?: boolean | undefined
}
type Benefits = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  benefits?: Benefit[] | undefined
}
type BenefitObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  benefit?: Benefit | undefined
}
type Deduction = {
  deductionId?: string | undefined
  deductionName: string
  deductionCategory?:
    | 'CapitalContributions'
    | 'ChildCareVoucher'
    | 'MakingGood'
    | 'PostgraduateLoanDeductions'
    | 'PrivateUsePayments'
    | 'SalarySacrifice'
    | 'StakeholderPension'
    | 'StakeholderPensionPostTax'
    | 'StudentLoanDeductions'
    | 'UkOther'
    | undefined
  liabilityAccountId: string
  currentRecord?: boolean | undefined
  standardAmount?: number | undefined
  reducesSuperLiability?: boolean | undefined
  reducesTaxLiability?: boolean | undefined
  calculationType?: 'FixedAmount' | 'PercentageOfGross' | undefined
  percentage?: number | undefined
  subjectToNIC?: boolean | undefined
  subjectToTax?: boolean | undefined
  isReducedByBasicRate?: boolean | undefined
  applyToPensionCalculations?: boolean | undefined
  isCalculatingOnQualifyingEarnings?: boolean | undefined
  isPension?: boolean | undefined
}
type Deductions = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  deductions?: Deduction[] | undefined
}
type DeductionObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  deduction?: Deduction | undefined
}
type StatutoryDeductionCategory =
  | 'AdditionalStudentLoan'
  | 'ChildSupport'
  | 'CourtFines'
  | 'Creditor'
  | 'FederalLevy'
  | 'InlandRevenueArrears'
  | 'KiwiSaver'
  | 'MsdRepayments'
  | 'NonPriorityOrder'
  | 'PriorityOrder'
  | 'TableBased'
  | 'StudentLoan'
  | 'VoluntaryStudentLoan'
  | 'USChildSupport'
type EarningsOrder = {
  id?: string | undefined
  name: string
  statutoryDeductionCategory?: StatutoryDeductionCategory | undefined
  liabilityAccountId?: string | undefined
  currentRecord?: boolean | undefined
}
type EarningsOrders = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  statutoryDeductions?: EarningsOrder[] | undefined
}
type EarningsOrderObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  statutoryDeduction?: EarningsOrder | undefined
}
type EarningsRate = {
  earningsRateID?: string | undefined
  name: string
  earningsType:
    | 'Allowance'
    | 'BackPay'
    | 'Bonus'
    | 'Commission'
    | 'LumpSum'
    | 'OtherEarnings'
    | 'OvertimeEarnings'
    | 'RegularEarnings'
    | 'StatutoryAdoptionPay'
    | 'StatutoryAdoptionPayNonPensionable'
    | 'StatutoryBereavementPay'
    | 'StatutoryMaternityPay'
    | 'StatutoryMaternityPayNonPensionable'
    | 'StatutoryPaternityPay'
    | 'StatutoryPaternityPayNonPensionable'
    | 'StatutoryParentalBereavementPayNonPensionable'
    | 'StatutorySharedParentalPay'
    | 'StatutorySharedParentalPayNonPensionable'
    | 'StatutorySickPay'
    | 'StatutorySickPayNonPensionable'
    | 'TipsNonDirect'
    | 'TipsDirect'
    | 'TerminationPay'
    | 'StatutoryNeonatalCarePay'
    | 'StatutoryNeonatalCarePayNonPensionable'
    | 'StatutoryBereavementPayNorthernIreland'
  rateType: 'RatePerUnit' | 'MultipleOfOrdinaryEarningsRate' | 'FixedAmount'
  typeOfUnits: string
  currentRecord?: boolean | undefined
  expenseAccountID: string
  ratePerUnit?: number | undefined
  multipleOfOrdinaryEarningsRate?: number | undefined
  fixedAmount?: number | undefined
}
type EarningsRates = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  earningsRates?: EarningsRate[] | undefined
}
type EarningsRateObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  earningsRate?: EarningsRate | undefined
}
type LeaveType = {
  leaveID?: string | undefined
  leaveTypeID?: string | undefined
  name: string
  isPaidLeave: boolean
  showOnPayslip: boolean
  updatedDateUTC?: string | undefined
  isActive?: boolean | undefined
  isStatutoryLeave?: boolean | undefined
}
type LeaveTypes = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leaveTypes?: LeaveType[] | undefined
}
type LeaveTypeObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leaveType?: LeaveType | undefined
}
type Reimbursement = {
  reimbursementID?: string | undefined
  name: string
  accountID: string
  currentRecord?: boolean | undefined
}
type Reimbursements = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  reimbursements?: Reimbursement[] | undefined
}
type ReimbursementObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  reimbursement?: Reimbursement | undefined
}
type TimesheetLine = {
  timesheetLineID?: string | undefined
  date: string
  earningsRateID: string
  trackingItemID?: string | undefined
  numberOfUnits: number
}
type TimesheetLines = TimesheetLine[]
type Timesheet = {
  timesheetID?: string | undefined
  payrollCalendarID: string
  employeeID: string
  startDate: string
  endDate: string
  status?: 'Draft' | 'Approved' | 'Completed' | undefined
  totalHours?: number | undefined
  updatedDateUTC?: string | undefined
  timesheetLines?: TimesheetLines | undefined
}
type Timesheets = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  timesheets?: Timesheet[] | undefined
}
type TimesheetObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  timesheet?: Timesheet | undefined
}
type TimesheetLineObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  timesheetLine?: TimesheetLine | undefined
}
type PayRunCalendar = {
  payrollCalendarID?: string | undefined
  name: string
  calendarType: 'Weekly' | 'Fortnightly' | 'FourWeekly' | 'Monthly' | 'Annual' | 'Quarterly'
  periodStartDate: string
  periodEndDate?: string | undefined
  paymentDate: string
  updatedDateUTC?: string | undefined
}
type PayRunCalendars = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  payRunCalendars?: PayRunCalendar[] | undefined
}
type PayRunCalendarObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  payRunCalendar?: PayRunCalendar | undefined
}
type SalaryAndWage = {
  salaryAndWagesID?: string | undefined
  earningsRateID: string
  numberOfUnitsPerWeek: number
  ratePerUnit?: number | undefined
  numberOfUnitsPerDay?: number | undefined
  effectiveFrom: string
  annualSalary: number
  status: 'Active' | 'Pending' | 'History'
  paymentType: 'Salary' | 'Hourly'
}
type SalaryAndWages = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  salaryAndWages?: SalaryAndWage[] | undefined
}
type SalaryAndWageObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  salaryAndWages?: SalaryAndWage | undefined
}
type EarningsLine = {
  earningsLineID?: string | undefined
  earningsRateID?: string | undefined
  displayName?: string | undefined
  ratePerUnit?: number | undefined
  numberOfUnits?: number | undefined
  fixedAmount?: number | undefined
  amount?: number | undefined
  isLinkedToTimesheet?: boolean | undefined
  isAverageDailyPayRate?: boolean | undefined
}
type EarningsLines = EarningsLine[]
type LeaveEarningsLine = {
  earningsRateID?: string | undefined
  ratePerUnit?: number | undefined
  numberOfUnits?: number | undefined
  fixedAmount?: number | undefined
  amount?: number | undefined
  isLinkedToTimesheet?: boolean | undefined
}
type LeaveEarningsLines = LeaveEarningsLine[]
type TimesheetEarningsLine = {
  earningsRateID?: string | undefined
  ratePerUnit?: number | undefined
  numberOfUnits?: number | undefined
  fixedAmount?: number | undefined
  amount?: number | undefined
  isLinkedToTimesheet?: boolean | undefined
}
type TimesheetEarningsLines = TimesheetEarningsLine[]
type DeductionLine = {
  deductionTypeID?: string | undefined
  amount?: number | undefined
  subjectToTax?: boolean | undefined
  percentage?: number | undefined
}
type DeductionLines = DeductionLine[]
type ReimbursementLine = {
  reimbursementTypeID?: string | undefined
  description?: string | undefined
  amount?: number | undefined
}
type ReimbursementLines = ReimbursementLine[]
type LeaveAccrualLine = { leaveTypeID?: string | undefined; numberOfUnits?: number | undefined }
type LeaveAccrualLines = LeaveAccrualLine[]
type BenefitLine = {
  benefitTypeID?: string | undefined
  displayName?: string | undefined
  amount?: number | undefined
  fixedAmount?: number | undefined
  percentage?: number | undefined
}
type BenefitLines = BenefitLine[]
type PaymentLine = {
  paymentLineID?: string | undefined
  amount?: number | undefined
  accountNumber?: string | undefined
  sortCode?: string | undefined
  accountName?: string | undefined
}
type PaymentLines = PaymentLine[]
type TaxLine = {
  taxLineID?: string | undefined
  description?: string | undefined
  isEmployerTax?: boolean | undefined
  amount?: number | undefined
  globalTaxTypeID?: string | undefined
  manualAdjustment?: boolean | undefined
}
type TaxLines = TaxLine[]
type CourtOrderLine = { courtOrderTypeID?: string | undefined; amount?: number | undefined }
type CourtOrderLines = CourtOrderLine[]
type Payslip = {
  paySlipID?: string | undefined
  employeeID?: string | undefined
  payRunID?: string | undefined
  lastEdited?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  totalEarnings?: number | undefined
  grossEarnings?: number | undefined
  totalPay?: number | undefined
  totalEmployerTaxes?: number | undefined
  totalEmployeeTaxes?: number | undefined
  totalDeductions?: number | undefined
  totalReimbursements?: number | undefined
  totalCourtOrders?: number | undefined
  totalBenefits?: number | undefined
  bacsHash?: string | undefined
  paymentMethod?: 'Cheque' | 'Electronically' | 'Manual' | undefined
  earningsLines?: EarningsLines | undefined
  leaveEarningsLines?: LeaveEarningsLines | undefined
  timesheetEarningsLines?: TimesheetEarningsLines | undefined
  deductionLines?: DeductionLines | undefined
  reimbursementLines?: ReimbursementLines | undefined
  leaveAccrualLines?: LeaveAccrualLines | undefined
  benefitLines?: BenefitLines | undefined
  paymentLines?: PaymentLines | undefined
  employeeTaxLines?: TaxLines | undefined
  employerTaxLines?: TaxLines | undefined
  courtOrderLines?: CourtOrderLines | undefined
}
type PayRun = {
  payRunID?: string | undefined
  payrollCalendarID?: string | undefined
  periodStartDate?: string | undefined
  periodEndDate?: string | undefined
  paymentDate?: string | undefined
  totalCost?: number | undefined
  totalPay?: number | undefined
  payRunStatus?: 'Draft' | 'Posted' | undefined
  payRunType?: 'Scheduled' | 'Unscheduled' | 'EarlierYearUpdate' | undefined
  calendarType?:
    | 'Weekly'
    | 'Fortnightly'
    | 'FourWeekly'
    | 'Monthly'
    | 'Annual'
    | 'Quarterly'
    | undefined
  postedDateTime?: string | undefined
  paySlips?: Payslip[] | undefined
}
type PayRuns = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  payRuns?: PayRun[] | undefined
}
type PayRunObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  payRun?: PayRun | undefined
}
type Payslips = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  paySlips?: Payslip[] | undefined
}
type PayslipObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  paySlip?: Payslip | undefined
}
type Account = {
  accountID?: string | undefined
  type?:
    | 'BANK'
    | 'EMPLOYERSNIC'
    | 'NICLIABILITY'
    | 'PAYEECONTRIBUTION'
    | 'PAYELIABILITY'
    | 'WAGESPAYABLE'
    | 'WAGESEXPENSE'
    | undefined
  code?: string | undefined
  name?: string | undefined
}
type Accounts = { accounts?: Account[] | undefined }
type Settings = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  settings?: Accounts | undefined
}
type TrackingCategory = {
  employeeGroupsTrackingCategoryID?: string | undefined
  timesheetTrackingCategoryID?: string | undefined
}
type TrackingCategories = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  trackingCategories?: TrackingCategory | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Employees': {
      $get:
        | {
            input: { query: { filter?: string | undefined; page?: number | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Employees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | undefined; page?: number | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Employee }
            output: EmployeeObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Employee }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID': {
      $get: {
        input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: EmployeeObject
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Employee }
            output: EmployeeObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Employee }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/Employment': {
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Employment }
            output: EmploymentObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Employment }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/Tax': {
      $get: {
        input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: EmployeeTaxObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/ukopeningbalances': {
      $get: {
        input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: EmployeeOpeningBalancesObject
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeOpeningBalances }
            output: EmployeeOpeningBalancesObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeOpeningBalances }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeOpeningBalances }
            output: EmployeeOpeningBalancesObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeOpeningBalances }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/Leave': {
      $get: {
        input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: EmployeeLeaves
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeLeave }
            output: EmployeeLeaveObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeLeave }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/Leave/:LeaveID': {
      $get: {
        input: { param: { EmployeeID: string; LeaveID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: EmployeeLeaveObject
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { EmployeeID: string; LeaveID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeLeave }
            output: EmployeeLeaveObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string; LeaveID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeLeave }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $delete: {
        input: { param: { EmployeeID: string; LeaveID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: EmployeeLeaveObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/LeaveBalances': {
      $get: {
        input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: EmployeeLeaveBalances
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/StatutoryLeaveBalance': {
      $get: {
        input: { param: { EmployeeID: string } } & {
          query: { LeaveType?: string | undefined; AsOfDate?: string | undefined }
        } & { header: { 'Xero-Tenant-Id': string } }
        output: EmployeeStatutoryLeaveBalanceObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/StatutoryLeaves/Summary/:EmployeeID': {
      $get: {
        input: { param: { EmployeeID: string } } & {
          query: { activeOnly?: boolean | undefined }
        } & { header: { 'Xero-Tenant-Id': string } }
        output: EmployeeStatutoryLeavesSummaries
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/StatutoryLeaves/Sick': {
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeStatutorySickLeave }
            output: EmployeeStatutorySickLeaveObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeStatutorySickLeave }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/StatutoryLeaves/Sick/:StatutorySickLeaveID': {
      $get: {
        input: { param: { StatutorySickLeaveID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: EmployeeStatutorySickLeaveObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/LeavePeriods': {
      $get:
        | {
            input: { param: { EmployeeID: string } } & {
              query: { startDate?: string | undefined; endDate?: string | undefined }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: LeavePeriods
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              query: { startDate?: string | undefined; endDate?: string | undefined }
            } & { header: { 'Xero-Tenant-Id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/LeaveTypes': {
      $get:
        | {
            input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: EmployeeLeaveTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeLeaveType }
            output: EmployeeLeaveTypeObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeLeaveType }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/PaymentMethods': {
      $get:
        | {
            input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: PaymentMethodObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PaymentMethod }
            output: PaymentMethodObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PaymentMethod }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/PayTemplates': {
      $get:
        | {
            input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: EmployeePayTemplateObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/PayTemplates/earnings': {
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsTemplate }
            output: EarningsTemplateObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsTemplate }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/PayTemplates/earnings/:PayTemplateEarningID': {
      $put:
        | {
            input: { param: { EmployeeID: string; PayTemplateEarningID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsTemplate }
            output: EarningsTemplateObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string; PayTemplateEarningID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsTemplate }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $delete: {
        input: { param: { EmployeeID: string; PayTemplateEarningID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/paytemplateearnings': {
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsTemplates }
            output: EmployeePayTemplates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsTemplates }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Benefits': {
      $get: {
        input: { query: { page?: number | undefined } } & { header: { 'Xero-Tenant-Id': string } }
        output: Benefits
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Benefit }
            output: BenefitObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Benefit }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Benefits/:id': {
      $get: {
        input: { param: { id: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: BenefitObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Deductions': {
      $get: {
        input: { query: { page?: number | undefined } } & { header: { 'Xero-Tenant-Id': string } }
        output: Deductions
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Deduction }
            output: DeductionObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Deduction }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Deductions/:deductionId': {
      $get: {
        input: { param: { deductionId: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: DeductionObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/EarningsOrders': {
      $get: {
        input: { query: { page?: number | undefined } } & { header: { 'Xero-Tenant-Id': string } }
        output: EarningsOrders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/EarningsOrders/:id': {
      $get: {
        input: { param: { id: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: EarningsOrderObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/EarningsRates': {
      $get: {
        input: { query: { page?: number | undefined } } & { header: { 'Xero-Tenant-Id': string } }
        output: EarningsRates
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsRate }
            output: EarningsRateObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsRate }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/EarningsRates/:EarningsRateID': {
      $get: {
        input: { param: { EarningsRateID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: EarningsRateObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/LeaveTypes': {
      $get: {
        input: { query: { page?: number | undefined; ActiveOnly?: boolean | undefined } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: LeaveTypes
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: LeaveType }
            output: LeaveTypeObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: LeaveType }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/LeaveTypes/:LeaveTypeID': {
      $get: {
        input: { param: { LeaveTypeID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: LeaveTypeObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reimbursements': {
      $get: {
        input: { query: { page?: number | undefined } } & { header: { 'Xero-Tenant-Id': string } }
        output: Reimbursements
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Reimbursement }
            output: ReimbursementObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Reimbursement }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Reimbursements/:ReimbursementID': {
      $get: {
        input: { param: { ReimbursementID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: ReimbursementObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Timesheets': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            filter?: string | undefined
            status?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
            sort?: string | undefined
          }
        } & { header: { 'Xero-Tenant-Id': string } }
        output: Timesheets
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Timesheet }
            output: TimesheetObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Timesheet }
            output: Problem
            outputFormat: 'json'
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
      $delete:
        | {
            input: { param: { TimesheetID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: TimesheetLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID/Lines': {
      $post:
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimesheetLine }
            output: TimesheetLineObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimesheetLine }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID/Approve': {
      $post:
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: TimesheetObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID/RevertToDraft': {
      $post:
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: TimesheetObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Timesheets/:TimesheetID/Lines/:TimesheetLineID': {
      $put:
        | {
            input: { param: { TimesheetID: string; TimesheetLineID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimesheetLine }
            output: TimesheetLineObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string; TimesheetLineID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: TimesheetLine }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { TimesheetID: string; TimesheetLineID: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: TimesheetLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TimesheetID: string; TimesheetLineID: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PayRunCalendars': {
      $get: {
        input: { query: { page?: number | undefined } } & { header: { 'Xero-Tenant-Id': string } }
        output: PayRunCalendars
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayRunCalendar }
            output: PayRunCalendarObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayRunCalendar }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PayRunCalendars/:PayRunCalendarID': {
      $get: {
        input: { param: { PayRunCalendarID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: PayRunCalendarObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/SalaryAndWages': {
      $get:
        | {
            input: { param: { EmployeeID: string } } & { query: { page?: number | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: SalaryAndWages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & { query: { page?: number | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: SalaryAndWage }
            output: SalaryAndWageObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: SalaryAndWage }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/SalaryAndWages/:SalaryAndWagesID': {
      $get: {
        input: { param: { EmployeeID: string; SalaryAndWagesID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: SalaryAndWages
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { EmployeeID: string; SalaryAndWagesID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: SalaryAndWage }
            output: SalaryAndWageObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string; SalaryAndWagesID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: SalaryAndWage }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
      $delete: {
        input: { param: { EmployeeID: string; SalaryAndWagesID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/PayRuns': {
      $get: {
        input: { query: { page?: number | undefined; status?: 'Draft' | 'Posted' | undefined } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: PayRuns
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PayRuns/:PayRunID': {
      $get: {
        input: { param: { PayRunID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: PayRunObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Payslips': {
      $get: {
        input: { query: { page?: number | undefined; PayRunID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: Payslips
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Payslips/:PayslipID': {
      $get: {
        input: { param: { PayslipID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: PayslipObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Settings': {
      $get: {
        input: { header: { 'Xero-Tenant-Id': string } }
        output: Settings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Settings/trackingCategories': {
      $get: {
        input: { header: { 'Xero-Tenant-Id': string } }
        output: TrackingCategories
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
