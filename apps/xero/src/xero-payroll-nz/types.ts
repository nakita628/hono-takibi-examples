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
  suburb?: string | undefined
  postCode: string
  countryName?: string | undefined
}
type Employee = {
  employeeID?: string | undefined
  title?: string | undefined
  firstName: string
  lastName: string
  dateOfBirth: string
  address: Address
  email?: string | undefined
  gender?: 'M' | 'F' | undefined
  phoneNumber?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  payrollCalendarID?: string | undefined
  updatedDateUTC?: string | undefined
  createdDateUTC?: string | undefined
  jobTitle?: string | undefined
  engagementType?: string | undefined
  fixedTermEndDate?: string | undefined
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
  payRunCalendarID?: string | undefined
  startDate: string
  engagementType: string
  fixedTermEndDate?: string | undefined
}
type EmploymentObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  employment?: Employment | undefined
}
type TaxCode =
  | 'ND'
  | 'M'
  | 'ME'
  | 'MSL'
  | 'MESL'
  | 'SB'
  | 'S'
  | 'SH'
  | 'ST'
  | 'SBSL'
  | 'SSL'
  | 'SHSL'
  | 'STSL'
  | 'WT'
  | 'CAE'
  | 'EDW'
  | 'NSW'
  | 'STC'
  | 'STCSL'
type EmployeeTax = {
  irdNumber?: string | undefined
  taxCode?: TaxCode | undefined
  specialTaxRatePercentage?: number | undefined
  hasSpecialStudentLoanRate?: boolean | undefined
  specialStudentLoanRatePercentage?: number | undefined
  isEligibleForKiwiSaver?: boolean | undefined
  esctRatePercentage?: number | undefined
  kiwiSaverContributions?:
    | 'MakeContributions'
    | 'OptOut'
    | 'OnAContributionsHoliday'
    | 'OnASavingsSuspension'
    | 'NotCurrentlyAKiwiSaverMember'
    | undefined
  kiwiSaverStatus?:
    | 'ActiveKiwiSaverMember'
    | 'AutomaticallyEnrolledIntoKiwiSaver'
    | 'EmployedForLessThan28Days'
    | 'NotRequiredToBeAutomaticallyEnrolled'
    | 'OptedIntoKiwiSaver'
    | 'NotEligibleForKiwiSaver'
    | undefined
  kiwiSaverEmployeeContributionRatePercentage?: number | undefined
  kiwiSaverEmployerContributionRatePercentage?: number | undefined
  kiwiSaverEmployerSalarySacrificeContributionRatePercentage?: number | undefined
  kiwiSaverOptOutDate?: string | undefined
  kiwiSaverContributionHolidayEndDate?: string | undefined
  hasStudentLoanBalance?: boolean | undefined
  studentLoanBalance?: number | undefined
  studentLoanAsAt?: string | undefined
  registeredForGST?: boolean | undefined
}
type EmployeeTaxObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  employeeTax?: EmployeeTax | undefined
}
type EmployeeOpeningBalance = {
  periodEndDate?: string | undefined
  daysPaid?: number | undefined
  unpaidWeeks?: number | undefined
  grossEarnings?: number | undefined
}
type EmployeeOpeningBalancesObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  openingBalances?: EmployeeOpeningBalance[] | undefined
}
type EmployeeOpeningBalances = EmployeeOpeningBalance[]
type LeavePeriod = {
  periodStartDate?: string | undefined
  periodEndDate?: string | undefined
  numberOfUnits?: number | undefined
  numberOfUnitsTaken?: number | undefined
  typeOfUnits?: string | undefined
  typeOfUnitsTaken?: string | undefined
  periodStatus?: 'Approved' | 'Completed' | 'Estimated' | undefined
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
type LeavePeriods = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  periods?: LeavePeriod[] | undefined
}
type EmployeeLeaveSetup = {
  includeHolidayPay?: boolean | undefined
  holidayPayOpeningBalance?: number | undefined
  annualLeaveOpeningBalance?: number | undefined
  negativeAnnualLeaveBalancePaidAmount?: number | undefined
  SickLeaveToAccrueAnnually?: number | undefined
  SickLeaveMaximumToAccrue?: number | undefined
  sickLeaveOpeningBalance?: number | undefined
  SickLeaveScheduleOfAccrual?: string | undefined
  SickLeaveAnniversaryDate?: string | undefined
  AnnualLeaveAnniversaryDate?: string | undefined
}
type EmployeeLeaveSetupObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  leaveSetup?: EmployeeLeaveSetup | undefined
}
type EmployeeLeaveType = {
  leaveTypeID?: string | undefined
  scheduleOfAccrual?:
    | 'AnnuallyAfter6Months'
    | 'OnAnniversaryDate'
    | 'PercentageOfGrossEarnings'
    | 'NoAccruals'
    | undefined
  unitsAccruedAnnually?: number | undefined
  typeOfUnitsToAccrue?: string | undefined
  maximumToAccrue?: number | undefined
  openingBalance?: number | undefined
  openingBalanceTypeOfUnits?: string | undefined
  rateAccruedHourly?: number | undefined
  percentageOfGrossEarnings?: number | undefined
  includeHolidayPayEveryPay?: boolean | undefined
  showAnnualLeaveInAdvance?: boolean | undefined
  annualLeaveTotalAmountPaid?: number | undefined
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
type BankAccount = {
  accountName: string
  accountNumber: string
  sortCode: string
  particulars?: string | undefined
  code?: string | undefined
  dollarAmount?: number | undefined
  reference?: string | undefined
  calculationType?: 'FixedAmount' | 'Balance' | undefined
}
type PaymentMethod = {
  paymentMethod?: 'Cheque' | 'Electronically' | 'Manual' | undefined
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
type EmployeePayTemplates = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  payTemplate?: EmployeePayTemplate | undefined
}
type EarningsTemplateObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  earningTemplate?: EarningsTemplate | undefined
}
type EmployeeEarningsTemplates = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  earningTemplates?: EarningsTemplate[] | undefined
}
type Deduction = {
  deductionId?: string | undefined
  deductionName: string
  deductionCategory:
    | 'PayrollGiving'
    | 'KiwiSaverVoluntaryContributions'
    | 'Superannuation'
    | 'NzOther'
  liabilityAccountId: string
  currentRecord?: boolean | undefined
  standardAmount?: number | undefined
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
  | 'PriorityOrder'
  | 'NonPriorityOrder'
  | 'TableBased'
  | 'ChildSupport'
  | 'CourtFines'
  | 'InlandRevenueArrears'
  | 'MsdRepayments'
  | 'StudentLoan'
  | 'AdditionalStudentLoan'
  | 'VoluntaryStudentLoan'
  | 'KiwiSaver'
type StatutoryDeduction = {
  id?: string | undefined
  name?: string | undefined
  statutoryDeductionCategory?: StatutoryDeductionCategory | undefined
  liabilityAccountId?: string | undefined
  currentRecord?: boolean | undefined
}
type StatutoryDeductions = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  statutoryDeductions?: StatutoryDeduction[] | undefined
}
type StatutoryDeductionObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  statutoryDeduction?: StatutoryDeduction | undefined
}
type Benefit = {
  id?: string | undefined
  name: string
  category: 'KiwiSaver' | 'ComplyingFund' | 'Other'
  liabilityAccountId: string
  expenseAccountId: string
  calculationTypeNZ?: 'FixedAmount' | 'PercentageOfTaxableEarnings' | undefined
  standardAmount?: number | undefined
  percentage?: number | undefined
  companyMax?: number | undefined
  currentRecord?: boolean | undefined
}
type Superannuations = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  benefits?: Benefit[] | undefined
}
type SuperannuationObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  benefit?: Benefit | undefined
}
type EarningsRate = {
  earningsRateID?: string | undefined
  name: string
  earningsType:
    | 'Allowance'
    | 'Backpay'
    | 'Bonus'
    | 'Commission'
    | 'DiscretionaryPayments'
    | 'HolidayPay'
    | 'LumpSum'
    | 'OtherEarnings'
    | 'OtherGrossEarnings'
    | 'OvertimeEarnings'
    | 'RegularEarnings'
    | 'SalarySacrificeForKiwiSaver'
    | 'Tips(Direct)'
    | 'Tips(Non-Direct)'
    | 'WithholdingIncome'
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
  leaveTypeID?: string | undefined
  name: string
  isPaidLeave: boolean
  showOnPayslip: boolean
  updatedDateUTC?: string | undefined
  isActive?: boolean | undefined
  typeOfUnits?: string | undefined
  typeOfUnitsToAccrue?: string | undefined
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
  reimbursementCategory?: 'GST' | 'NoGST' | 'GSTInclusive' | undefined
  calculationType?: 'Unknown' | 'FixedAmount' | 'RatePerUnit' | undefined
  standardAmount?: string | undefined
  standardTypeOfUnits?: 'Hours' | 'km' | undefined
  standardRatePerUnit?: number | undefined
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
  status?: 'Draft' | 'Approved' | 'Completed' | 'Requested' | undefined
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
type CalendarType =
  | 'Weekly'
  | 'Fortnightly'
  | 'FourWeekly'
  | 'Monthly'
  | 'Annual'
  | 'Quarterly'
  | 'TwiceMonthly'
type PayRunCalendar = {
  payrollCalendarID?: string | undefined
  name: string
  calendarType: CalendarType
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
  numberOfUnitsPerDay: number
  daysPerWeek?: number | undefined
  effectiveFrom: string
  annualSalary: number
  status: 'Active' | 'Pending' | 'History'
  paymentType: 'Salary' | 'Hourly'
  workPatternType?: 'DaysAndHours' | 'RegularWeek' | undefined
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
  isSystemGenerated?: boolean | undefined
}
type EarningsLines = EarningsLine[]
type LeaveEarningsLine = {
  earningsLineID?: string | undefined
  earningsRateID?: string | undefined
  displayName?: string | undefined
  ratePerUnit?: number | undefined
  numberOfUnits?: number | undefined
  fixedAmount?: number | undefined
  amount?: number | undefined
  isLinkedToTimesheet?: boolean | undefined
  isAverageDailyPayRate?: boolean | undefined
  isSystemGenerated?: boolean | undefined
}
type LeaveEarningsLines = LeaveEarningsLine[]
type TimesheetEarningsLine = {
  earningsLineID?: string | undefined
  earningsRateID?: string | undefined
  displayName?: string | undefined
  ratePerUnit?: number | undefined
  numberOfUnits?: number | undefined
  fixedAmount?: number | undefined
  amount?: number | undefined
  isLinkedToTimesheet?: boolean | undefined
  isAverageDailyPayRate?: boolean | undefined
  isSystemGenerated?: boolean | undefined
}
type TimesheetEarningsLines = TimesheetEarningsLine[]
type DeductionLine = {
  deductionTypeID?: string | undefined
  displayName?: string | undefined
  amount?: number | undefined
  subjectToTax?: boolean | undefined
  percentage?: number | undefined
}
type DeductionLines = DeductionLine[]
type ReimbursementLine = {
  reimbursementTypeID?: string | undefined
  description?: string | undefined
  amount?: number | undefined
  ratePerUnit?: number | undefined
  numberOfUnits?: number | undefined
}
type ReimbursementLines = ReimbursementLine[]
type LeaveAccrualLine = { leaveTypeID?: string | undefined; numberOfUnits?: number | undefined }
type LeaveAccrualLines = LeaveAccrualLine[]
type SuperannuationLine = {
  superannuationTypeID?: string | undefined
  displayName?: string | undefined
  amount?: number | undefined
  fixedAmount?: number | undefined
  percentage?: number | undefined
  manualAdjustment?: boolean | undefined
}
type SuperannuationLines = SuperannuationLine[]
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
  amount?: number | undefined
  globalTaxTypeID?: string | undefined
  manualAdjustment?: boolean | undefined
}
type TaxLines = TaxLine[]
type StatutoryDeductionLine = {
  statutoryDeductionTypeID?: string | undefined
  amount?: number | undefined
  fixedAmount?: number | undefined
  manualAdjustment?: boolean | undefined
}
type StatutoryDeductionLines = StatutoryDeductionLine[]
type TaxSettings = {
  periodUnits?: number | undefined
  periodType?: 'weeks' | 'months' | undefined
  taxCode?: TaxCode | undefined
  specialTaxRate?: string | undefined
  lumpSumTaxCode?: string | undefined
  lumpSumAmount?: string | undefined
}
type GrossEarningsHistory = { daysPaid?: number | undefined; unpaidWeeks?: number | undefined }
type PaySlip = {
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
  totalStatutoryDeductions?: number | undefined
  totalSuperannuation?: number | undefined
  bacsHash?: string | undefined
  paymentMethod?: 'Cheque' | 'Electronically' | 'Manual' | undefined
  earningsLines?: EarningsLines | undefined
  leaveEarningsLines?: LeaveEarningsLines | undefined
  timesheetEarningsLines?: TimesheetEarningsLines | undefined
  deductionLines?: DeductionLines | undefined
  reimbursementLines?: ReimbursementLines | undefined
  leaveAccrualLines?: LeaveAccrualLines | undefined
  superannuationLines?: SuperannuationLines | undefined
  paymentLines?: PaymentLines | undefined
  employeeTaxLines?: TaxLines | undefined
  employerTaxLines?: TaxLines | undefined
  statutoryDeductionLines?: StatutoryDeductionLines | undefined
  taxSettings?: TaxSettings | undefined
  grossEarningsHistory?: GrossEarningsHistory | undefined
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
  calendarType?: CalendarType | undefined
  postedDateTime?: string | undefined
  paySlips?: PaySlip[] | undefined
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
type PaySlips = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  paySlips?: PaySlip[] | undefined
}
type PaySlipObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  paySlip?: PaySlip | undefined
}
type Account = {
  accountID?: string | undefined
  type?: 'PAYELIABILITY' | 'WAGESPAYABLE' | 'WAGESEXPENSE' | 'BANK' | undefined
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
type EmployeeWorkingPattern = { payeeWorkingPatternID: string; effectiveFrom: string }
type EmployeeWorkingPatterns = EmployeeWorkingPattern[]
type EmployeeWorkingPatternsObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  payeeWorkingPatterns?: EmployeeWorkingPatterns | undefined
}
type WorkingWeek = {
  monday: number
  tuesday: number
  wednesday: number
  thursday: number
  friday: number
  saturday: number
  sunday: number
}
type WorkingWeeks = WorkingWeek[]
type EmployeeWorkingPatternWithWorkingWeeksRequest = {
  effectiveFrom: string
  workingWeeks: WorkingWeeks
}
type EmployeeWorkingPatternWithWorkingWeeks = {
  payeeWorkingPatternID: string
  effectiveFrom: string
  workingWeeks?: WorkingWeeks | undefined
}
type EmployeeWorkingPatternWithWorkingWeeksObject = {
  pagination?: Pagination | undefined
  problem?: Problem | undefined
  payeeWorkingPattern?: EmployeeWorkingPatternWithWorkingWeeks | undefined
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
      $post: {
        input: { param: { EmployeeID: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
        } & { json: EmployeeTax }
        output: EmployeeTaxObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/OpeningBalances': {
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
    '/Employees/:EmployeeID/LeaveSetup': {
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeLeaveSetup }
            output: EmployeeLeaveSetupObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeLeaveSetup }
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
            output: EmployeePayTemplates
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
    '/Employees/:EmployeeID/PayTemplates/Earnings': {
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
    '/Employees/:EmployeeID/PayTemplates/Earnings/:PayTemplateEarningID': {
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
        output: EarningsTemplateObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/PayTemplateEarnings': {
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EarningsTemplates }
            output: EmployeeEarningsTemplates
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
    '/StatutoryDeductions': {
      $get: {
        input: { query: { page?: number | undefined } } & { header: { 'Xero-Tenant-Id': string } }
        output: StatutoryDeductions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/StatutoryDeductions/:id': {
      $get: {
        input: { param: { id: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: StatutoryDeductionObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Superannuations': {
      $get: {
        input: { query: { page?: number | undefined } } & { header: { 'Xero-Tenant-Id': string } }
        output: Superannuations
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Benefit }
            output: SuperannuationObject
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
    '/Superannuations/:SuperannuationID': {
      $get: {
        input: { param: { SuperannuationID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: SuperannuationObject
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
    '/PayRunCalendars/:PayrollCalendarID': {
      $get: {
        input: { param: { PayrollCalendarID: string } } & { header: { 'Xero-Tenant-Id': string } }
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
        output: SalaryAndWageObject
        outputFormat: 'json'
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
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayRun }
            output: PayRunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PayRun }
            output: Problem
            outputFormat: 'json'
            status: 400
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
    '/PaySlips': {
      $get: {
        input: { query: { page?: number | undefined; PayRunID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: PaySlips
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PaySlips/:PaySlipID': {
      $get: {
        input: { param: { PaySlipID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: PaySlipObject
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { PaySlipID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PaySlip }
            output: PaySlipObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PaySlipID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: PaySlip }
            output: Problem
            outputFormat: 'json'
            status: 400
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
    '/Settings/TrackingCategories': {
      $get: {
        input: { header: { 'Xero-Tenant-Id': string } }
        output: TrackingCategories
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Employees/:EmployeeID/Working-Patterns': {
      $get: {
        input: { param: { EmployeeID: string } } & { header: { 'Xero-Tenant-Id': string } }
        output: EmployeeWorkingPatternsObject
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeWorkingPatternWithWorkingWeeksRequest }
            output: EmployeeWorkingPatternWithWorkingWeeksObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: EmployeeWorkingPatternWithWorkingWeeksRequest }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Employees/:EmployeeID/Working-Patterns/:EmployeeWorkingPatternID': {
      $get: {
        input: { param: { EmployeeID: string; EmployeeWorkingPatternID: string } } & {
          header: { 'Xero-Tenant-Id': string }
        }
        output: EmployeeWorkingPatternWithWorkingWeeksObject
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { EmployeeID: string; EmployeeWorkingPatternID: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: EmployeeLeaveObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { EmployeeID: string; EmployeeWorkingPatternID: string } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
