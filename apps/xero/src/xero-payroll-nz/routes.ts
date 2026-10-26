import { createRoute, z } from '@hono/zod-openapi'

const PaginationSchema = z
  .object({
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 10 }),
    pageCount: z.int().exactOptional().openapi({ example: 1 }),
    itemCount: z.int().exactOptional().openapi({ example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const InvalidFieldSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field that caused the error',
        example: 'DateOfBirth',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reason the error occurred',
        example: 'The Date of Birth is required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvalidField')

const ProblemSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error format', example: 'application/problem+json' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the error', example: 'BadRequest' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error status code', example: 400 }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the error',
        example: 'Validation error occurred.',
      }),
    instance: z.string().exactOptional(),
    invalidFields: z.array(InvalidFieldSchema).exactOptional(),
  })
  .openapi({ description: 'The object returned for a bad request', required: [] })
  .openapi('Problem')

const AddressSchema = z
  .object({
    addressLine1: z
      .string()
      .openapi({
        description: 'Address line 1 for employee home address',
        example: '19 Taranaki Street',
      }),
    addressLine2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address line 2 for employee home address', example: 'Apt 4' }),
    city: z
      .string()
      .openapi({ description: 'Suburb for employee home address', example: 'Wellington' }),
    suburb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Suburb for employee home address', example: 'Te Aro' }),
    postCode: z
      .string()
      .openapi({ description: 'PostCode for employee home address', example: 6011 }),
    countryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country of HomeAddress', example: 'NEW ZEALAND' }),
  })
  .openapi({ required: ['addressLine1', 'city', 'postCode'] })
  .openapi('Address')

const EmployeeSchema = z
  .object({
    employeeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero unique identifier for the employee',
        example: 'd90457c4-f1be-4f2e-b4e3-f766390a7e30',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the employee', example: 'Mrs' }),
    firstName: z.string().openapi({ description: 'First name of employee', example: 'Karen' }),
    lastName: z.string().openapi({ description: 'Last name of employee', example: 'Jones' }),
    dateOfBirth: z.iso
      .date()
      .openapi({
        description: 'Date of birth of the employee (YYYY-MM-DD)',
        example: '2019-01-02',
        'x-is-date': true,
      }),
    address: AddressSchema,
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address for the employee', example: 'developer@me.com' }),
    gender: z
      .enum(['M', 'F'])
      .exactOptional()
      .openapi({ description: 'The employee’s gender', example: 'F' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Employee phone number', example: '415-555-1212' }),
    startDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Employment start date of the employee at the time it was requested',
        example: '2020-01-19',
        'x-is-date': true,
      }),
    endDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Employment end date of the employee at the time it was requested',
        example: '2020-01-19',
        'x-is-date': true,
      }),
    payrollCalendarID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for the payroll calendar of the employee' }),
    updatedDateUTC: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'UTC timestamp of last update to the employee',
        'x-is-datetime': true,
      }),
    createdDateUTC: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'UTC timestamp when the employee was created in Xero',
        'x-is-datetime': true,
      }),
    jobTitle: z
      .string()
      .exactOptional()
      .openapi({ description: "Employee's job title", example: 'General Manager' }),
    engagementType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Engagement type of the employee', example: 'Permanent' }),
    fixedTermEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'End date for an employee with a fixed-term engagement type',
        example: '2020-01-19',
        'x-is-date': true,
      }),
  })
  .openapi({ required: ['firstName', 'lastName', 'dateOfBirth', 'address'] })
  .openapi('Employee')

const EmployeesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    employees: z.array(EmployeeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Employees')

const EmployeeObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    employee: EmployeeSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeObject')

const EmploymentSchema = z
  .object({
    payrollCalendarID: z
      .uuid()
      .openapi({ description: 'Xero unique identifier for the payroll calendar of the employee' }),
    payRunCalendarID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Xero unique identifier for the payrun calendar for the employee (Deprecated in version 1.1.6)',
      }),
    startDate: z.iso
      .date()
      .openapi({ description: 'Start date of the employment (YYYY-MM-DD)', 'x-is-date': true }),
    engagementType: z
      .string()
      .openapi({ description: 'Engagement type of the employee', example: 'Permanent' }),
    fixedTermEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'End date for an employee with a fixed-term engagement type',
        example: '2020-01-19',
        'x-is-date': true,
      }),
  })
  .openapi({ required: ['payrollCalendarID', 'startDate', 'engagementType'] })
  .openapi('Employment')

const EmploymentObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    employment: EmploymentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmploymentObject')

const TaxCodeSchema = z
  .enum([
    'ND',
    'M',
    'ME',
    'MSL',
    'MESL',
    'SB',
    'S',
    'SH',
    'ST',
    'SBSL',
    'SSL',
    'SHSL',
    'STSL',
    'WT',
    'CAE',
    'EDW',
    'NSW',
    'STC',
    'STCSL',
  ])
  .openapi({ description: 'Tax codes used for employee tax' })
  .openapi('TaxCode')

const EmployeeTaxSchema = z
  .object({
    irdNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IRD Number.', example: 111111111 }),
    taxCode: TaxCodeSchema.exactOptional(),
    specialTaxRatePercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Special tax rate percentage.', 'x-is-money': true, example: 17.5 }),
    hasSpecialStudentLoanRate: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Does the employee has a special student loan rate?',
        example: true,
      }),
    specialStudentLoanRatePercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The employee student loan rate percentage.',
        'x-is-money': true,
        example: 2,
      }),
    isEligibleForKiwiSaver: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The employee eligibility for KiwiSaver.', example: true }),
    esctRatePercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Employer superannuation contribution tax rate.',
        'x-is-money': true,
        example: 1,
      }),
    kiwiSaverContributions: z
      .enum([
        'MakeContributions',
        'OptOut',
        'OnAContributionsHoliday',
        'OnASavingsSuspension',
        'NotCurrentlyAKiwiSaverMember',
      ])
      .exactOptional()
      .openapi({
        description:
          "Contribution Option which can be 'MakeContributions' 'OptOut', 'OnAContributionsHoliday', 'OnASavingsSuspension', 'NotCurrentlyAKiwiSaverMember' for employees without a KiwiSaver membership",
        example: 'MakeContributions',
      }),
    kiwiSaverEmployeeContributionRatePercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Employee Contribution percentage.',
        'x-is-money': true,
        example: 4,
      }),
    kiwiSaverEmployerContributionRatePercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Employer Contribution percentage.',
        'x-is-money': true,
        example: 10,
      }),
    kiwiSaverEmployerSalarySacrificeContributionRatePercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Employer Contribution through Salary Sacrifice percentage.',
        'x-is-money': true,
        example: 2,
      }),
    kiwiSaverOptOutDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Opt Out Date.', 'x-is-date': true, example: '2020-06-01T00:00:00' }),
    kiwiSaverContributionHolidayEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Contribution holiday expiry date or end date.',
        'x-is-date': true,
        example: '2019-06-01T00:00:00',
      }),
    hasStudentLoanBalance: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Does the employee have a remaining student loan balance? Set a remaining balance if you have received a letter from IR.',
        example: false,
      }),
    studentLoanBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The employee's student loan balance shown on the letter from IR.",
        'x-is-money': true,
        example: 30,
      }),
    studentLoanAsAt: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The date of the letter from IR.',
        'x-is-date': true,
        example: '2020-07-01T00:00:00',
      }),
  })
  .openapi({ required: [] })
  .openapi('EmployeeTax')

const EmployeeTaxObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    employeeTax: EmployeeTaxSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeTaxObject')

const EmployeeOpeningBalanceSchema = z
  .object({
    periodEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The opening balance period end date.',
        'x-is-date': true,
        example: '2020-07-01T00:00:00',
      }),
    daysPaid: z.int32().exactOptional().openapi({ description: 'The paid number of days.' }),
    unpaidWeeks: z.int32().exactOptional().openapi({ description: 'The number of unpaid weeks.' }),
    grossEarnings: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The gross earnings during the period.', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('EmployeeOpeningBalance')

const EmployeeOpeningBalancesObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    openingBalances: z.array(EmployeeOpeningBalanceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeOpeningBalancesObject')

const EmployeeOpeningBalancesSchema = z
  .array(EmployeeOpeningBalanceSchema)
  .openapi('EmployeeOpeningBalances')

const LeavePeriodSchema = z
  .object({
    periodStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Pay Period Start Date (YYYY-MM-DD)', 'x-is-date': true }),
    periodEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Pay Period End Date (YYYY-MM-DD)', 'x-is-date': true }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Number of Units for the leave', 'x-is-money': true }),
    numberOfUnitsTaken: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The number of units taken for the leave' }),
    typeOfUnits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of units paid for the leave' }),
    typeOfUnitsTaken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of units taken for the leave' }),
    periodStatus: z
      .enum(['Approved', 'Completed', 'Estimated'])
      .exactOptional()
      .openapi({ description: 'Status of leave' }),
  })
  .openapi({ required: [] })
  .openapi('LeavePeriod')

const EmployeeLeaveSchema = z
  .object({
    leaveID: z.uuid().exactOptional().openapi({ description: 'The Xero identifier for LeaveType' }),
    leaveTypeID: z.uuid().openapi({ description: 'The Xero identifier for LeaveType' }),
    description: z
      .string()
      .openapi({ description: 'The description of the leave  (max length = 50)' }),
    startDate: z.iso
      .date()
      .openapi({ description: 'Start date of the leave (YYYY-MM-DD)', 'x-is-date': true }),
    endDate: z.iso
      .date()
      .openapi({ description: 'End date of the leave (YYYY-MM-DD)', 'x-is-date': true }),
    periods: z
      .array(LeavePeriodSchema)
      .exactOptional()
      .openapi({
        description:
          'The leave period information. The StartDate, EndDate and NumberOfUnits needs to be specified when you do not want to calculate NumberOfUnits automatically. Using incorrect period StartDate and EndDate will result in automatic computation of the NumberOfUnits.',
      }),
    updatedDateUTC: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'UTC timestamp of last update to the leave type note',
        'x-is-datetime': true,
      }),
  })
  .openapi({ required: ['leaveTypeID', 'description', 'startDate', 'endDate'] })
  .openapi('EmployeeLeave')

const EmployeeLeavesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leave: z.array(EmployeeLeaveSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaves')

const EmployeeLeaveObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leave: EmployeeLeaveSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveObject')

const LeavePeriodsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    periods: z.array(LeavePeriodSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LeavePeriods')

const EmployeeLeaveBalanceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the leave type.', example: 'Holiday' }),
    leaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for leave type' }),
    balance: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The employees current balance for the corresponding leave type.',
        'x-is-money': true,
      }),
    typeOfUnits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the units of the leave.', example: 'hours' }),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveBalance')

const EmployeeLeaveBalancesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leaveBalances: z.array(EmployeeLeaveBalanceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveBalances')

const EmployeeStatutoryLeaveBalanceSchema = z
  .object({
    leaveType: z
      .enum(['Sick', 'Adoption', 'Maternity', 'Paternity', 'Sharedparental'])
      .exactOptional()
      .openapi({ description: 'The type of statutory leave' }),
    balanceRemaining: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The balance remaining for the corresponding leave type as of specified date.',
        'x-is-money': true,
      }),
    units: z.literal('Hours').exactOptional().openapi({ description: 'The units will be "Hours"' }),
  })
  .openapi({ required: [] })
  .openapi('EmployeeStatutoryLeaveBalance')

const EmployeeStatutoryLeaveBalanceObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leaveBalance: EmployeeStatutoryLeaveBalanceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeStatutoryLeaveBalanceObject')

const EmployeeStatutoryLeaveSummarySchema = z
  .object({
    statutoryLeaveID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The unique identifier (guid) of a statutory leave.' }),
    employeeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The unique identifier (guid) of the employee' }),
    type: z
      .enum(['Sick', 'Adoption', 'Maternity', 'Paternity', 'Sharedparental'])
      .exactOptional()
      .openapi({ description: 'The category of statutory leave' }),
    startDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date when the leave starts', 'x-is-date': true }),
    endDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date when the leave ends', 'x-is-date': true }),
    isEntitled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the leave was entitled to receive payment' }),
    status: z
      .enum(['Pending', 'In-Progress', 'Completed'])
      .exactOptional()
      .openapi({ description: 'The status of the leave' }),
  })
  .openapi({ required: [] })
  .openapi('EmployeeStatutoryLeaveSummary')

const EmployeeStatutoryLeavesSummariesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    statutoryLeaves: z.array(EmployeeStatutoryLeaveSummarySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeStatutoryLeavesSummaries')

const EmployeeStatutorySickLeaveSchema = z
  .object({
    statutoryLeaveID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The unique identifier (guid) of a statutory leave' }),
    employeeID: z.uuid().openapi({ description: 'The unique identifier (guid) of the employee' }),
    leaveTypeID: z
      .uuid()
      .openapi({
        description:
          'The unique identifier (guid) of the "Statutory Sick Leave (non-pensionable)" pay item',
      }),
    startDate: z.iso
      .date()
      .openapi({ description: 'The date when the leave starts', 'x-is-date': true }),
    endDate: z.iso
      .date()
      .openapi({ description: 'The date when the leave ends', 'x-is-date': true }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'the type of statutory leave', example: 'Sick' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'the type of statutory leave', example: 'Pending' }),
    workPattern: z
      .array(z.string())
      .openapi({
        description:
          'The days of the work week the employee is scheduled to work at the time the leave is taken',
      }),
    isPregnancyRelated: z
      .boolean()
      .openapi({ description: 'Whether the sick leave was pregnancy related' }),
    sufficientNotice: z
      .boolean()
      .openapi({
        description:
          'Whether the employee provided sufficient notice and documentation as required by the employer supporting the sick leave request',
      }),
    isEntitled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the leave was entitled to receive payment' }),
    entitlementWeeksRequested: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of requested time (in weeks)', 'x-is-money': true }),
    entitlementWeeksQualified: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The amount of statutory sick leave time off (in weeks) that is available to take at the time the leave was requested',
        'x-is-money': true,
      }),
    entitlementWeeksRemaining: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A calculated amount of time (in weeks) that remains for the statutory sick leave period',
        'x-is-money': true,
      }),
    overlapsWithOtherLeave: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether another leave (Paternity, Shared Parental specifically) occurs during the requested leave's period. While this is allowed it could affect payment amounts",
      }),
    entitlementFailureReasons: z
      .array(
        z.enum([
          'UnableToCalculateAwe',
          'AweLowerThanLel',
          'NotQualifiedInPreviousPiw',
          'ExceededMaximumEntitlementWeeksOfSsp',
          'ExceededMaximumDurationOfPiw',
          'SufficientNoticeNotGiven',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'If the leave requested was considered "not entitled", the reasons why are listed here.',
      }),
  })
  .openapi({
    required: [
      'employeeID',
      'startDate',
      'endDate',
      'workPattern',
      'leaveTypeID',
      'isPregnancyRelated',
      'sufficientNotice',
    ],
  })
  .openapi('EmployeeStatutorySickLeave')

const EmployeeStatutorySickLeavesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    statutorySickLeave: z.array(EmployeeStatutorySickLeaveSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeStatutorySickLeaves')

const EmployeeStatutorySickLeaveObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    statutorySickLeave: EmployeeStatutorySickLeaveSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeStatutorySickLeaveObject')

const EmployeeLeaveTypeSchema = z
  .object({
    leaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for leave type' }),
    scheduleOfAccrual: z
      .enum([
        'AnnuallyAfter6Months',
        'OnAnniversaryDate',
        'PercentageOfGrossEarnings',
        'NoAccruals',
      ])
      .exactOptional()
      .openapi({ description: 'The schedule of accrual' }),
    unitsAccruedAnnually: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of units accrued for the leave annually. This is 0 when the ScheduleOfAccrual chosen is "NoAccruals"',
        'x-is-money': true,
      }),
    typeOfUnitsToAccrue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of units accrued for the leave annually' }),
    maximumToAccrue: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The maximum number of units that can be accrued for the leave',
        'x-is-money': true,
      }),
    openingBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The initial number of units assigned when the leave was added to the employee',
        'x-is-money': true,
      }),
    openingBalanceTypeOfUnits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of units for the opening balance' }),
    rateAccruedHourly: z
      .float64()
      .exactOptional()
      .openapi({ description: 'not supported in Payroll NZ', 'x-is-money': true }),
    percentageOfGrossEarnings: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Specific for scheduleOfAccrual having percentage of gross earnings. Identifies how much percentage of gross earnings is accrued per pay period.',
        'x-is-money': true,
      }),
    includeHolidayPayEveryPay: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specific to Holiday pay. Flag determining if pay for leave type is added on each pay run.',
      }),
    showAnnualLeaveInAdvance: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specific to Annual Leave. Flag to include leave available to take in advance in the balance in the payslip',
      }),
    annualLeaveTotalAmountPaid: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Specific to Annual Leave. Annual leave balance in dollars',
        'x-is-money': true,
      }),
    scheduleOfAccrualDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The date when an employee becomes entitled to their accrual.',
        example: '2020-01-19',
        'x-is-date': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveType')

const EmployeeLeaveTypesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leaveTypes: z.array(EmployeeLeaveTypeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveTypes')

const EmployeeLeaveSetupSchema = z
  .object({
    includeHolidayPay: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Identifier if holiday pay will be included in each payslip',
        example: false,
      }),
    holidayPayOpeningBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Initial holiday pay balance. A percentage — usually 8% — of gross earnings since their last work anniversary.',
        'x-is-money': true,
        example: 10.5,
      }),
    annualLeaveOpeningBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Initial annual leave balance. The balance at their last anniversary, less any leave taken since then and excluding accrued annual leave.',
        'x-is-money': true,
        example: 25.89,
      }),
    negativeAnnualLeaveBalancePaidAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The dollar value of annual leave opening balance if negative.',
        'x-is-money': true,
        example: 10,
      }),
    SickLeaveToAccrueAnnually: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Number of units accrued annually for sick leave. The type of units is determined by the property "TypeOfUnitsToAccrue" on the "Sick Leave" leave type',
        'x-is-money': true,
        example: 100.5,
      }),
    SickLeaveMaximumToAccrue: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of units accrued annually for sick leave. The type of units is determined by the property "TypeOfUnitsToAccrue" on the "Sick Leave" leave type',
        'x-is-money': true,
        example: 200.5,
      }),
    sickLeaveOpeningBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Initial sick leave balance. This will be positive unless they've taken sick leave in advance",
        'x-is-money': true,
        example: 10.5,
      }),
    SickLeaveScheduleOfAccrual: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Set Schedule of Accrual Type for Sick Leave',
        example: 'OnAnniversaryDate',
      }),
    SickLeaveAnniversaryDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'If Sick Leave Schedule of Accrual is "OnAnniversaryDate", this is the date when entitled to Sick Leave. When null the Employee\'s start date is used as the anniversary date',
        example: '2020-01-19',
        'x-is-date': true,
      }),
    AnnualLeaveAnniversaryDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          "The first date the employee will accrue Annual Leave. When null the Employee's start date is used as the anniversary date",
        example: '2020-01-19',
        'x-is-date': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveSetup')

const EmployeeLeaveSetupObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leaveSetup: EmployeeLeaveSetupSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveSetupObject')

const EmployeeLeaveTypeObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leaveType: EmployeeLeaveTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveTypeObject')

const EarningsTemplateSchema = z
  .object({
    payTemplateEarningID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for the earnings template' }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The rate per unit', 'x-is-money': true }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The rate per unit', 'x-is-money': true }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The fixed amount per period', 'x-is-money': true }),
    earningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The corresponding earnings rate identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The read-only name of the Earning Template.' }),
  })
  .openapi({ required: [] })
  .openapi('EarningsTemplate')

const EarningsTemplatesSchema = z.array(EarningsTemplateSchema).openapi('EarningsTemplates')

const EmployeePayTemplateSchema = z
  .object({
    employeeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the employee' }),
    earningTemplates: EarningsTemplatesSchema,
  })
  .openapi({ required: ['earningTemplates'] })
  .openapi('EmployeePayTemplate')

const EmployeePayTemplateObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    payTemplate: EmployeePayTemplateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeePayTemplateObject')

const EmployeePayTemplatesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    payTemplate: EmployeePayTemplateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeePayTemplates')

const EmployeeEarningsTemplatesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    earningTemplates: z.array(EarningsTemplateSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeEarningsTemplates')

const EarningsTemplateObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    earningTemplate: EarningsTemplateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EarningsTemplateObject')

const BenefitSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The Xero identifier for superannuation' }),
    name: z.string().openapi({ description: 'Name of the superannuations' }),
    category: z
      .enum(['KiwiSaver', 'ComplyingFund', 'Other'])
      .openapi({ description: 'Superannuations Category type' }),
    liabilityAccountId: z.uuid().openapi({ description: 'Xero identifier for Liability Account' }),
    expenseAccountId: z.uuid().openapi({ description: 'Xero identifier for Expense Account' }),
    calculationTypeNZ: z
      .enum(['FixedAmount', 'PercentageOfTaxableEarnings'])
      .exactOptional()
      .openapi({
        description:
          'Calculation Type of the superannuation either FixedAmount or PercentageOfTaxableEarnings',
      }),
    standardAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Standard amount of the superannuation', 'x-is-money': true }),
    percentage: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Percentage of Taxable Earnings of the superannuation',
        'x-is-money': true,
      }),
    companyMax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Company Maximum amount of the superannuation', 'x-is-money': true }),
    currentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of a record is active or not.' }),
  })
  .openapi({ required: ['name', 'category', 'liabilityAccountId', 'expenseAccountId'] })
  .openapi('Benefit')

const SuperannuationsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    benefits: z.array(BenefitSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Superannuations')

const SuperannuationObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    benefit: BenefitSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SuperannuationObject')

const DeductionSchema = z
  .object({
    deductionId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for Deduction' }),
    deductionName: z.string().openapi({ description: 'Name of the deduction' }),
    deductionCategory: z
      .enum(['PayrollGiving', 'KiwiSaverVoluntaryContributions', 'Superannuation', 'NzOther'])
      .openapi({ description: 'Deduction Category type' }),
    liabilityAccountId: z.uuid().openapi({ description: 'Xero identifier for Liability Account' }),
    currentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of a record is active or not.' }),
    standardAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Standard amount of the deduction.', 'x-is-money': true }),
  })
  .openapi({ required: ['deductionName', 'deductionCategory', 'liabilityAccountId'] })
  .openapi('Deduction')

const DeductionsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    deductions: z.array(DeductionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Deductions')

const DeductionObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    deduction: DeductionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeductionObject')

const StatutoryDeductionCategorySchema = z
  .enum([
    'PriorityOrder',
    'NonPriorityOrder',
    'TableBased',
    'ChildSupport',
    'CourtFines',
    'InlandRevenueArrears',
    'MsdRepayments',
    'StudentLoan',
    'AdditionalStudentLoan',
    'VoluntaryStudentLoan',
    'KiwiSaver',
  ])
  .openapi({ description: 'Statutory Deduction Category' })
  .openapi('StatutoryDeductionCategory')

const StatutoryDeductionSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The Xero identifier for earnings order' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the earnings order' }),
    statutoryDeductionCategory: StatutoryDeductionCategorySchema.exactOptional(),
    liabilityAccountId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for Liability Account' }),
    currentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of a record is active or not.' }),
  })
  .openapi({ required: [] })
  .openapi('StatutoryDeduction')

const StatutoryDeductionsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    statutoryDeductions: z.array(StatutoryDeductionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatutoryDeductions')

const StatutoryDeductionObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    statutoryDeduction: StatutoryDeductionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatutoryDeductionObject')

const EarningsOrderSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for an earning rate' }),
    name: z.string().openapi({ description: 'Name of the earning order' }),
    statutoryDeductionCategory: StatutoryDeductionCategorySchema.exactOptional(),
    liabilityAccountId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for Liability Account' }),
    currentRecord: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Identifier of a record is active or not.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('EarningsOrder')

const EarningsOrdersSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    statutoryDeductions: z.array(EarningsOrderSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EarningsOrders')

const EarningsOrderObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    statutoryDeduction: EarningsOrderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EarningsOrderObject')

const EarningsRateSchema = z
  .object({
    earningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for an earning rate' }),
    name: z.string().openapi({ description: 'Name of the earning rate' }),
    earningsType: z
      .enum([
        'Allowance',
        'Backpay',
        'Bonus',
        'Commission',
        'DiscretionaryPayments',
        'HolidayPay',
        'LumpSum',
        'OtherEarnings',
        'OtherGrossEarnings',
        'OvertimeEarnings',
        'RegularEarnings',
        'SalarySacrificeForKiwiSaver',
        'Tips(Direct)',
        'Tips(Non-Direct)',
        'WithholdingIncome',
      ])
      .openapi({
        description: 'Indicates how an employee will be paid when taking this type of earning',
      }),
    rateType: z
      .enum(['RatePerUnit', 'MultipleOfOrdinaryEarningsRate', 'FixedAmount'])
      .openapi({ description: 'Indicates the type of the earning rate' }),
    typeOfUnits: z.string().openapi({ description: 'The type of units used to record earnings' }),
    currentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether an earning type is active' }),
    expenseAccountID: z
      .uuid()
      .openapi({ description: 'The account that will be used for the earnings rate' }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Default rate per unit (optional). Only applicable if RateType is RatePerUnit',
        'x-is-money': true,
      }),
    multipleOfOrdinaryEarningsRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MultipleOfOrdinaryEarningsRate',
        'x-is-money': true,
      }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Optional Fixed Rate Amount. Applicable for FixedAmount Rate',
        'x-is-money': true,
      }),
  })
  .openapi({ required: ['name', 'earningsType', 'rateType', 'typeOfUnits', 'expenseAccountID'] })
  .openapi('EarningsRate')

const EarningsRatesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    earningsRates: z.array(EarningsRateSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EarningsRates')

const EarningsRateObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    earningsRate: EarningsRateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EarningsRateObject')

const LeaveTypeSchema = z
  .object({
    leaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for the leave type' }),
    name: z.string().openapi({ description: 'Name of the leave type' }),
    isPaidLeave: z
      .boolean()
      .openapi({
        description: 'Indicate that an employee will be paid when taking this type of leave',
      }),
    showOnPayslip: z
      .boolean()
      .openapi({
        description:
          'Indicate that a balance for this leave type to be shown on the employee’s payslips',
      }),
    updatedDateUTC: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'UTC timestamp of last update to the leave type note',
        'x-is-datetime': true,
      }),
    isActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Shows whether the leave type is active or not' }),
    typeOfUnits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of units to be paid for the leave type' }),
    typeOfUnitsToAccrue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of units to be accrued for the leave type' }),
  })
  .openapi({ required: ['name', 'isPaidLeave', 'showOnPayslip'] })
  .openapi('LeaveType')

const LeaveTypesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leaveTypes: z.array(LeaveTypeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LeaveTypes')

const LeaveTypeObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leaveType: LeaveTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LeaveTypeObject')

const ReimbursementSchema = z
  .object({
    reimbursementID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for a reimbursement' }),
    name: z.string().openapi({ description: 'Name of the reimbursement' }),
    accountID: z
      .uuid()
      .openapi({
        description: 'Xero unique identifier for the account used for the reimbursement',
      }),
    currentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that whether the reimbursement is active' }),
    reimbursementCategory: z
      .enum(['GST', 'NoGST', 'GSTInclusive'])
      .exactOptional()
      .openapi({ description: 'See Reimbursement Categories' }),
    calculationType: z
      .enum(['Unknown', 'FixedAmount', 'RatePerUnit'])
      .exactOptional()
      .openapi({ description: 'See Calculation Types' }),
    standardAmount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional Fixed Rate Amount. Applicable when calculation type is Fixed Amount',
      }),
    standardTypeOfUnits: z
      .enum(['Hours', 'km'])
      .exactOptional()
      .openapi({
        description: 'Optional Type Of Units. Applicable when calculation type is Rate Per Unit',
      }),
    standardRatePerUnit: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Optional Rate Per Unit. Applicable when calculation type is Rate Per Unit',
        'x-is-money': true,
      }),
  })
  .openapi({ required: ['name', 'accountID'] })
  .openapi('Reimbursement')

const ReimbursementsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    reimbursements: z.array(ReimbursementSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Reimbursements')

const ReimbursementObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    reimbursement: ReimbursementSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReimbursementObject')

const TimesheetLineSchema = z
  .object({
    timesheetLineID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for a Timesheet Line' }),
    date: z.iso
      .date()
      .openapi({
        description: 'The Date that this Timesheet Line is for (YYYY-MM-DD)',
        'x-is-date': true,
      }),
    earningsRateID: z
      .uuid()
      .openapi({
        description: 'The Xero identifier for the Earnings Rate that the Timesheet is for',
      }),
    trackingItemID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for the Tracking Item that the Timesheet is for',
      }),
    numberOfUnits: z
      .float64()
      .openapi({ description: 'The Number of Units of the Timesheet Line', 'x-is-money': true }),
  })
  .openapi({ required: ['date', 'earningsRateID', 'numberOfUnits'] })
  .openapi('TimesheetLine')

const TimesheetLinesSchema = z.array(TimesheetLineSchema).openapi('TimesheetLines')

const TimesheetSchema = z
  .object({
    timesheetID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for a Timesheet' }),
    payrollCalendarID: z
      .uuid()
      .openapi({
        description: 'The Xero identifier for the Payroll Calendar that the Timesheet applies to',
      }),
    employeeID: z
      .uuid()
      .openapi({ description: 'The Xero identifier for the Employee that the Timesheet is for' }),
    startDate: z.iso
      .date()
      .openapi({
        description: 'The Start Date of the Timesheet period (YYYY-MM-DD)',
        'x-is-date': true,
      }),
    endDate: z.iso
      .date()
      .openapi({
        description: 'The End Date of the Timesheet period (YYYY-MM-DD)',
        'x-is-date': true,
      }),
    status: z
      .enum(['Draft', 'Approved', 'Completed', 'Requested'])
      .exactOptional()
      .openapi({ description: 'Status of the timesheet' }),
    totalHours: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Total Hours of the Timesheet', 'x-is-money': true }),
    updatedDateUTC: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The UTC date time that the Timesheet was last updated',
        'x-is-datetime': true,
      }),
    timesheetLines: TimesheetLinesSchema.exactOptional(),
  })
  .openapi({ required: ['payrollCalendarID', 'employeeID', 'startDate', 'endDate'] })
  .openapi('Timesheet')

const TimesheetsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    timesheets: z.array(TimesheetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Timesheets')

const TimesheetObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    timesheet: TimesheetSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimesheetObject')

const TimesheetLineObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    timesheetLine: TimesheetLineSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimesheetLineObject')

const CalendarTypeSchema = z
  .enum(['Weekly', 'Fortnightly', 'FourWeekly', 'Monthly', 'Annual', 'Quarterly', 'TwiceMonthly'])
  .openapi({ description: 'Calendar type of the pay run' })
  .openapi('CalendarType')

const PayRunCalendarSchema = z
  .object({
    payrollCalendarID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for the payroll calendar' }),
    name: z.string().openapi({ description: 'Name of the calendar' }),
    calendarType: CalendarTypeSchema,
    periodStartDate: z.iso
      .date()
      .openapi({ description: 'Period start date of the calendar', 'x-is-date': true }),
    periodEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Period end date of the calendar', 'x-is-date': true }),
    paymentDate: z.iso
      .date()
      .openapi({ description: 'Payment date of the calendar', 'x-is-date': true }),
    updatedDateUTC: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'UTC timestamp of the last update to the pay run calendar',
        'x-is-datetime': true,
      }),
  })
  .openapi({ required: ['name', 'calendarType', 'periodStartDate', 'paymentDate'] })
  .openapi('PayRunCalendar')

const PayRunCalendarsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    payRunCalendars: z.array(PayRunCalendarSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayRunCalendars')

const PayRunCalendarObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    payRunCalendar: PayRunCalendarSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayRunCalendarObject')

const BankAccountSchema = z
  .object({
    accountName: z.string().openapi({ description: 'Bank account name (max length = 32)' }),
    accountNumber: z
      .string()
      .openapi({ description: 'Bank account number (digits only; max length = 8)' }),
    sortCode: z.string().openapi({ description: 'Bank account sort code (6 digits)' }),
    particulars: z
      .string()
      .exactOptional()
      .openapi({ description: 'Particulars that appear on the statement.' }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Code of a transaction that appear on the statement.' }),
    dollarAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Dollar amount of a transaction.', 'x-is-money': true }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Statement Text/reference for a transaction that appear on the statement.',
      }),
    calculationType: z
      .enum(['FixedAmount', 'Balance'])
      .exactOptional()
      .openapi({
        description: "Calculation type for the transaction can be 'Fixed Amount' or 'Balance'",
      }),
  })
  .openapi({ required: ['accountName', 'accountNumber', 'sortCode'] })
  .openapi('BankAccount')

const PaymentMethodSchema = z
  .object({
    paymentMethod: z
      .enum(['Cheque', 'Electronically', 'Manual'])
      .exactOptional()
      .openapi({ description: 'The payment method code' }),
    bankAccounts: z.array(BankAccountSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentMethod')

const PaymentMethodObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    paymentMethod: PaymentMethodSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentMethodObject')

const SalaryAndWageSchema = z
  .object({
    salaryAndWagesID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for a salary and wages record' }),
    earningsRateID: z
      .uuid()
      .openapi({ description: 'Xero unique identifier for an earnings rate' }),
    numberOfUnitsPerWeek: z
      .float64()
      .openapi({
        description: 'The Number of Units per week for the corresponding salary and wages',
        'x-is-money': true,
      }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The rate of each unit for the corresponding salary and wages',
        'x-is-money': true,
      }),
    numberOfUnitsPerDay: z
      .float64()
      .openapi({
        description: 'The Number of Units per day for the corresponding salary and wages',
        'x-is-money': true,
      }),
    daysPerWeek: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The days per week for the salary.', 'x-is-money': true }),
    effectiveFrom: z.iso
      .date()
      .openapi({
        description: 'The effective date of the corresponding salary and wages',
        'x-is-date': true,
      }),
    annualSalary: z.float64().openapi({ description: 'The annual salary', 'x-is-money': true }),
    status: z
      .enum(['Active', 'Pending', 'History'])
      .openapi({ description: 'The current status of the corresponding salary and wages' }),
    paymentType: z
      .enum(['Salary', 'Hourly'])
      .openapi({ description: 'The type of the payment of the corresponding salary and wages' }),
    workPatternType: z
      .enum(['DaysAndHours', 'RegularWeek'])
      .exactOptional()
      .openapi({
        description: 'The type of the Working Pattern of the corresponding salary and wages',
      }),
  })
  .openapi({
    required: [
      'earningsRateID',
      'numberOfUnitsPerWeek',
      'numberOfUnitsPerDay',
      'effectiveFrom',
      'annualSalary',
      'status',
      'paymentType',
    ],
  })
  .openapi('SalaryAndWage')

const SalaryAndWagesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    salaryAndWages: z.array(SalaryAndWageSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SalaryAndWages')

const SalaryAndWageObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    salaryAndWages: SalaryAndWageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SalaryAndWageObject')

const EarningsLineSchema = z
  .object({
    earningsLineID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll earnings line' }),
    earningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll earnings rate' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of earnings rate for display in UI' }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Rate per unit for earnings line', 'x-is-money': true }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Earnings number of units', 'x-is-money': true }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed',
        'x-is-money': true,
      }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the earnings line.', 'x-is-money': true }),
    isLinkedToTimesheet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies if the earnings is taken from the timesheet. False for earnings line',
      }),
    isAverageDailyPayRate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies if the earnings is using an average daily pay rate' }),
    isSystemGenerated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag to identify whether the earnings line is system generated or not.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EarningsLine')

const EarningsLinesSchema = z.array(EarningsLineSchema).openapi('EarningsLines')

const LeaveEarningsLineSchema = z
  .object({
    earningsLineID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll earnings line' }),
    earningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll leave earnings rate' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of earnings rate for display in UI' }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Rate per unit for leave earnings line', 'x-is-money': true }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Leave earnings number of units', 'x-is-money': true }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Leave earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed',
        'x-is-money': true,
      }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the earnings line.', 'x-is-money': true }),
    isLinkedToTimesheet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies if the leave earnings is taken from the timesheet. False for leave earnings line',
      }),
    isAverageDailyPayRate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies if the earnings is using an average daily pay rate' }),
    isSystemGenerated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag to identify whether the earnings line is system generated or not.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LeaveEarningsLine')

const LeaveEarningsLinesSchema = z.array(LeaveEarningsLineSchema).openapi('LeaveEarningsLines')

const TimesheetEarningsLineSchema = z
  .object({
    earningsLineID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll earnings line' }),
    earningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll leave earnings rate' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of earnings rate for display in UI' }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Rate per unit for leave earnings line', 'x-is-money': true }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Leave earnings number of units', 'x-is-money': true }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Leave earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed',
        'x-is-money': true,
      }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the earnings line.', 'x-is-money': true }),
    isLinkedToTimesheet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies if the leave earnings is taken from the timesheet. False for leave earnings line',
      }),
    isAverageDailyPayRate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies if the earnings is using an average daily pay rate' }),
    isSystemGenerated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag to identify whether the earnings line is system generated or not.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TimesheetEarningsLine')

const TimesheetEarningsLinesSchema = z
  .array(TimesheetEarningsLineSchema)
  .openapi('TimesheetEarningsLines')

const DeductionLineSchema = z
  .object({
    deductionTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll deduction' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of earnings rate for display in UI' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the deduction line', 'x-is-money': true }),
    subjectToTax: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies if the deduction is subject to tax' }),
    percentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Deduction rate percentage', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('DeductionLine')

const DeductionLinesSchema = z.array(DeductionLineSchema).openapi('DeductionLines')

const ReimbursementLineSchema = z
  .object({
    reimbursementTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll reimbursement' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reimbursement line description' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Reimbursement amount', 'x-is-money': true }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Rate per unit for leave earnings line', 'x-is-money': true }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Leave earnings number of units', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('ReimbursementLine')

const ReimbursementLinesSchema = z.array(ReimbursementLineSchema).openapi('ReimbursementLines')

const LeaveAccrualLineSchema = z
  .object({
    leaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for the Leave type' }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Leave accrual number of units', 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('LeaveAccrualLine')

const LeaveAccrualLinesSchema = z.array(LeaveAccrualLineSchema).openapi('LeaveAccrualLines')

const SuperannuationLineSchema = z
  .object({
    superannuationTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll superannuation type' }),
    displayName: z.string().exactOptional().openapi({ description: 'Benefit display name' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the superannuation line', 'x-is-money': true }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Superannuation fixed amount', 'x-is-money': true }),
    percentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Superannuation rate percentage', 'x-is-money': true }),
    manualAdjustment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'manual adjustment made' }),
  })
  .openapi({ required: [] })
  .openapi('SuperannuationLine')

const SuperannuationLinesSchema = z.array(SuperannuationLineSchema).openapi('SuperannuationLines')

const PaymentLineSchema = z
  .object({
    paymentLineID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll payment line' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the payment line', 'x-is-money': true }),
    accountNumber: z.string().exactOptional().openapi({ description: 'The account number' }),
    sortCode: z.string().exactOptional().openapi({ description: 'The account sort code' }),
    accountName: z.string().exactOptional().openapi({ description: 'The account name' }),
  })
  .openapi({ required: [] })
  .openapi('PaymentLine')

const PaymentLinesSchema = z.array(PaymentLineSchema).openapi('PaymentLines')

const TaxLineSchema = z
  .object({
    taxLineID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll tax line' }),
    description: z.string().exactOptional().openapi({ description: 'Tax line description' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the tax line', 'x-is-money': true }),
    globalTaxTypeID: z.string().exactOptional().openapi({ description: 'Tax type ID' }),
    manualAdjustment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies if the tax line is a manual adjustment' }),
  })
  .openapi({ required: [] })
  .openapi('TaxLine')

const TaxLinesSchema = z.array(TaxLineSchema).openapi('TaxLines')

const StatutoryDeductionLineSchema = z
  .object({
    statutoryDeductionTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll statutory deduction type' }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the statutory deduction line', 'x-is-money': true }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Fixed Amount', 'x-is-money': true }),
    manualAdjustment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies if the tax line is a manual adjustment' }),
  })
  .openapi({ required: [] })
  .openapi('StatutoryDeductionLine')

const StatutoryDeductionLinesSchema = z
  .array(StatutoryDeductionLineSchema)
  .openapi('StatutoryDeductionLines')

const TaxSettingsSchema = z
  .object({
    periodUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The number of units for the period type', 'x-is-money': true }),
    periodType: z
      .enum(['weeks', 'months'])
      .exactOptional()
      .openapi({ description: 'The type of period ("weeks" or "months")', example: 'weeks' }),
    taxCode: TaxCodeSchema.exactOptional(),
    specialTaxRate: z.string().exactOptional().openapi({ description: 'Tax rate for STC and WT' }),
    lumpSumTaxCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tax code for a lump sum amount' }),
    lumpSumAmount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total of the lump sum amount' }),
  })
  .openapi({ required: [] })
  .openapi('TaxSettings')

const GrossEarningsHistorySchema = z
  .object({
    daysPaid: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of days the employee worked in the pay period (0 - 365)' }),
    unpaidWeeks: z
      .int32()
      .exactOptional()
      .openapi({
        description: "Number of full weeks the employee didn't work in the pay period (0 - 52)",
      }),
  })
  .openapi({ required: [] })
  .openapi('GrossEarningsHistory')

const PaySlipSchema = z
  .object({
    paySlipID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for a PaySlip' }),
    employeeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for payroll employee' }),
    payRunID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for the associated payrun' }),
    lastEdited: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date payslip was last updated', 'x-is-datetime': true }),
    firstName: z.string().exactOptional().openapi({ description: 'Employee first name' }),
    lastName: z.string().exactOptional().openapi({ description: 'Employee last name' }),
    totalEarnings: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total earnings before any deductions. Same as gross earnings for NZ.',
        'x-is-money': true,
      }),
    grossEarnings: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total earnings before any deductions. Same as total earnings for NZ.',
        'x-is-money': true,
      }),
    totalPay: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The employee net pay', 'x-is-money': true }),
    totalEmployerTaxes: z
      .float64()
      .exactOptional()
      .openapi({ description: "The employer's tax obligation", 'x-is-money': true }),
    totalEmployeeTaxes: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The part of an employee's earnings that is deducted for tax purposes",
        'x-is-money': true,
      }),
    totalDeductions: z
      .float64()
      .exactOptional()
      .openapi({
        description: "Total amount subtracted from an employee's earnings to reach total pay",
        'x-is-money': true,
      }),
    totalReimbursements: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total reimbursements are nontaxable payments to an employee used to repay out-of-pocket expenses when the person incurs those expenses through employment',
        'x-is-money': true,
      }),
    totalStatutoryDeductions: z
      .float64()
      .exactOptional()
      .openapi({
        description: "Total amounts required by law to subtract from the employee's earnings",
        'x-is-money': true,
      }),
    totalSuperannuation: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Benefits (also called fringe benefits, perquisites or perks) are various non-earnings compensations provided to employees in addition to their normal earnings or salaries',
        'x-is-money': true,
      }),
    bacsHash: z.string().exactOptional().openapi({ description: 'BACS Service User Number' }),
    paymentMethod: z
      .enum(['Cheque', 'Electronically', 'Manual'])
      .exactOptional()
      .openapi({ description: 'The payment method code' }),
    earningsLines: EarningsLinesSchema.exactOptional(),
    leaveEarningsLines: LeaveEarningsLinesSchema.exactOptional(),
    timesheetEarningsLines: TimesheetEarningsLinesSchema.exactOptional(),
    deductionLines: DeductionLinesSchema.exactOptional(),
    reimbursementLines: ReimbursementLinesSchema.exactOptional(),
    leaveAccrualLines: LeaveAccrualLinesSchema.exactOptional(),
    superannuationLines: SuperannuationLinesSchema.exactOptional(),
    paymentLines: PaymentLinesSchema.exactOptional(),
    employeeTaxLines: TaxLinesSchema.exactOptional(),
    employerTaxLines: TaxLinesSchema.exactOptional(),
    statutoryDeductionLines: StatutoryDeductionLinesSchema.exactOptional(),
    taxSettings: TaxSettingsSchema.exactOptional(),
    grossEarningsHistory: GrossEarningsHistorySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaySlip')

const PayRunSchema = z
  .object({
    payRunID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for the pay run' }),
    payrollCalendarID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for the payroll calendar' }),
    periodStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Period start date of the payroll calendar', 'x-is-date': true }),
    periodEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Period end date of the payroll calendar', 'x-is-date': true }),
    paymentDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Payment date of the pay run', 'x-is-date': true }),
    totalCost: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total cost of the pay run', 'x-is-money': true }),
    totalPay: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total pay of the pay run', 'x-is-money': true }),
    payRunStatus: z
      .enum(['Draft', 'Posted'])
      .exactOptional()
      .openapi({ description: 'Pay run status' }),
    payRunType: z
      .enum(['Scheduled', 'Unscheduled', 'EarlierYearUpdate'])
      .exactOptional()
      .openapi({ description: 'Pay run type' }),
    calendarType: CalendarTypeSchema.exactOptional(),
    postedDateTime: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Posted date time of the pay run', 'x-is-date': true }),
    paySlips: z.array(PaySlipSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayRun')

const PayRunsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    payRuns: z.array(PayRunSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayRuns')

const PayRunObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    payRun: PayRunSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayRunObject')

const PaySlipObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    paySlip: PaySlipSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaySlipObject')

const PaySlipsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    paySlips: z.array(PaySlipSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaySlips')

const AccountSchema = z
  .object({
    accountID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for Settings.' }),
    type: z
      .enum(['PAYELIABILITY', 'WAGESPAYABLE', 'WAGESEXPENSE', 'BANK'])
      .exactOptional()
      .openapi({ description: 'The assigned AccountType' }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique 3 digit number for each Account' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the Account.' }),
  })
  .openapi({ required: [] })
  .openapi('Account')

const AccountsSchema = z
  .object({ accounts: z.array(AccountSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Accounts')

const SettingsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    settings: AccountsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Settings')

const BankAccountsSchema = z.array(BankAccountSchema).openapi('BankAccounts')

const TrackingCategorySchema = z
  .object({
    employeeGroupsTrackingCategoryID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for Employee groups tracking category.' }),
    timesheetTrackingCategoryID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for Timesheet tracking category.' }),
  })
  .openapi({ required: [] })
  .openapi('TrackingCategory')

const TrackingCategoriesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    trackingCategories: TrackingCategorySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrackingCategories')

const WorkingWeekSchema = z
  .object({
    monday: z
      .float64()
      .openapi({ description: 'The number of hours worked on a Monday', 'x-is-money': true }),
    tuesday: z
      .float64()
      .openapi({ description: 'The number of hours worked on a Tuesday', 'x-is-money': true }),
    wednesday: z
      .float64()
      .openapi({ description: 'The number of hours worked on a Wednesday', 'x-is-money': true }),
    thursday: z
      .float64()
      .openapi({ description: 'The number of hours worked on a Thursday', 'x-is-money': true }),
    friday: z
      .float64()
      .openapi({ description: 'The number of hours worked on a Friday', 'x-is-money': true }),
    saturday: z
      .float64()
      .openapi({ description: 'The number of hours worked on a Saturday', 'x-is-money': true }),
    sunday: z
      .float64()
      .openapi({ description: 'The number of hours worked on a Sunday', 'x-is-money': true }),
  })
  .openapi({
    required: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
  })
  .openapi('WorkingWeek')

const WorkingWeeksSchema = z.array(WorkingWeekSchema).openapi('WorkingWeeks')

const EmployeeWorkingPatternSchema = z
  .object({
    payeeWorkingPatternID: z
      .uuid()
      .openapi({ description: 'The Xero identifier for for Employee working pattern' }),
    effectiveFrom: z.iso
      .date()
      .openapi({
        description: 'The effective date of the corresponding salary and wages',
        'x-is-date': true,
      }),
  })
  .openapi({ required: ['payeeWorkingPatternID', 'effectiveFrom'] })
  .openapi('EmployeeWorkingPattern')

const EmployeeWorkingPatternsSchema = z
  .array(EmployeeWorkingPatternSchema)
  .openapi('EmployeeWorkingPatterns')

const EmployeeWorkingPatternsObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    payeeWorkingPatterns: EmployeeWorkingPatternsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeWorkingPatternsObject')

const EmployeeWorkingPatternWithWorkingWeeksSchema = z
  .object({
    payeeWorkingPatternID: z
      .uuid()
      .openapi({ description: 'The Xero identifier for for Employee working pattern' }),
    effectiveFrom: z.iso
      .date()
      .openapi({
        description: 'The effective date of the corresponding salary and wages',
        'x-is-date': true,
      }),
    workingWeeks: WorkingWeeksSchema.exactOptional(),
  })
  .openapi({ required: ['payeeWorkingPatternID', 'effectiveFrom'] })
  .openapi('EmployeeWorkingPatternWithWorkingWeeks')

const EmployeeWorkingPatternWithWorkingWeeksRequestSchema = z
  .object({
    effectiveFrom: z.iso
      .date()
      .openapi({
        description: 'The effective date of the corresponding salary and wages',
        'x-is-date': true,
      }),
    workingWeeks: WorkingWeeksSchema,
  })
  .openapi({ required: ['effectiveFrom', 'workingWeeks'] })
  .openapi('EmployeeWorkingPatternWithWorkingWeeksRequest')

const EmployeeWorkingPatternWithWorkingWeeksObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    payeeWorkingPattern: EmployeeWorkingPatternWithWorkingWeeksSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeWorkingPatternWithWorkingWeeksObject')

const RequiredHeaderParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'Xero-Tenant-Id',
      'x-snake': 'xero_tenant_id',
      description: 'Xero identifier for Tenant',
      schema: { type: 'string' },
      required: true,
    },
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Idempotency-Key',
      'x-snake': 'idempotency_key',
      description:
        'This allows you to safely retry requests without the risk of duplicate processing. 128 character max.',
      example: 'KEY_VALUE',
      schema: { type: 'string' },
      required: false,
    },
  })

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description:
    'For more information visit https://developer.xero.com/documentation/oauth2/overview',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        'payroll.employees': 'Grant read-write access to payroll employees',
        'payroll.employees.read': 'Grant read-only access to payroll employees',
        'payroll.payruns': 'Grant read-write access to payroll payruns',
        'payroll.payruns.read': 'Grant read-only access to payroll payruns',
        'payroll.payslip': 'Grant read-write access to payroll payslips',
        'payroll.payslip.read': 'Grant read-only access to payroll payslips',
        'payroll.settings': 'Grant read-write access to payroll settings',
        'payroll.settings.read': 'Grant read-only access to payroll settings',
        'payroll.timesheets': 'Grant read-write access to payroll timesheets',
        'payroll.timesheets.read': 'Grant read-only access to payroll timesheets',
      },
    },
  },
}

export const getEmployeesRoute = createRoute({
  method: 'get',
  path: '/Employees',
  tags: ['PayrollNz'],
  summary: 'Retrieves employees',
  operationId: 'getEmployees',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            description: 'Filter by first name and/or lastname',
            schema: { type: 'string' },
            example: 'firstName==John,lastName==Smith',
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            example: 5,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:16:14.6198711',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 8 },
            problem: null,
            employees: [
              {
                employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
                firstName: 'Casual',
                lastName: 'Worker',
                dateOfBirth: '1990-12-01T00:00:00',
                gender: 'M',
                email: null,
                phoneNumber: null,
                startDate: '2019-02-07T00:00:00',
                address: {
                  addressLine1: '30 King ST',
                  addressLine2: null,
                  city: 'Rangiora',
                  suburb: null,
                  countryName: 'NEW ZEALAND',
                  postCode: '7400',
                },
                payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
                updatedDateUTC: '2019-09-24T05:08:45',
                createdDateUTC: '2019-09-22T23:58:23',
                endDate: null,
                engagementType: 'Casual',
                fixedTermEndDate: null,
              },
              {
                employeeID: '1c4f0c92-03ad-43f2-a690-ee51397ece6a',
                firstName: 'GST',
                lastName: 'Contractor',
                dateOfBirth: null,
                gender: null,
                email: null,
                phoneNumber: null,
                startDate: '2019-01-30T00:00:00',
                address: {
                  addressLine1: null,
                  addressLine2: null,
                  city: null,
                  suburb: null,
                  countryName: null,
                  postCode: null,
                },
                payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
                updatedDateUTC: '2019-09-23T00:16:25',
                createdDateUTC: '2019-09-23T00:12:16',
                endDate: null,
                engagementType: null,
                fixedTermEndDate: null,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesRoute = createRoute({
  method: 'post',
  path: '/Employees',
  tags: ['PayrollNz'],
  summary: 'Creates an employees',
  operationId: 'createEmployee',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeSchema,
          example: {
            title: 'Mr',
            firstName: 'Mike',
            lastName: 'Johntzxzpxhmkgson',
            dateOfBirth: '2000-01-01',
            address: {
              addressLine1: '101 Green St',
              city: 'San Francisco',
              postCode: '4351',
              countryName: 'United Kingdom',
            },
            email: '83139@starkindustries.com',
            gender: 'M',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:27:22.5779577',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employee: {
              employeeID: '658be485-3feb-402e-9e77-ac17623aad42',
              firstName: 'Mike',
              lastName: 'Johntzxzpxhmkgson',
              dateOfBirth: '2000-01-01T00:00:00',
              gender: 'M',
              email: '83139@starkindustries.com',
              phoneNumber: null,
              startDate: null,
              address: {
                addressLine1: '101 Green St',
                addressLine2: null,
                city: 'San Francisco',
                suburb: null,
                countryName: null,
                postCode: '4351',
              },
              payrollCalendarID: null,
              updatedDateUTC: '2020-08-24T20:27:22',
              createdDateUTC: '2020-08-24T20:27:22',
              endDate: null,
              engagementType: null,
              fixedTermEndDate: null,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves an employees using a unique employee ID',
  operationId: 'getEmployee',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:16:15.3542191',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employee: {
              employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
              firstName: 'Casual',
              lastName: 'Worker',
              dateOfBirth: '1990-12-01T00:00:00',
              gender: 'M',
              email: null,
              phoneNumber: null,
              startDate: '2019-02-07T00:00:00',
              address: {
                addressLine1: '30 King ST',
                addressLine2: null,
                city: 'Rangiora',
                suburb: null,
                countryName: 'NEW ZEALAND',
                postCode: '7400',
              },
              payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
              updatedDateUTC: '2019-09-24T05:08:45',
              createdDateUTC: '2019-09-22T23:58:23',
              endDate: null,
              engagementType: 'FixedTerm',
              fixedTermEndDate: '2026-01-01T00:00:00',
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const putEmployeesEmployeeIDRoute = createRoute({
  method: 'put',
  path: '/Employees/{EmployeeID}',
  tags: ['PayrollNz'],
  summary: 'Updates an existing employee',
  operationId: 'updateEmployee',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeSchema,
          example: {
            title: 'Mr',
            firstName: 'Tony',
            lastName: 'Starkgtrzgquusrson',
            dateOfBirth: '1999-01-01',
            address: {
              addressLine1: '101 Green St',
              city: 'San Francisco',
              postCode: '4432',
              countryName: 'United Kingdom',
            },
            email: '58315@starkindustries.com',
            gender: 'M',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful response',
      content: {
        'application/json': {
          schema: EmployeeObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:29:43.3452832',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employee: {
              employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
              firstName: 'Tony',
              lastName: 'Starkgtrzgquusrson',
              dateOfBirth: '1999-01-01T00:00:00',
              gender: 'M',
              email: '58315@starkindustries.com',
              phoneNumber: null,
              startDate: '2019-02-07T00:00:00',
              address: {
                addressLine1: '101 Green St',
                addressLine2: null,
                city: 'San Francisco',
                suburb: null,
                countryName: null,
                postCode: '4432',
              },
              payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
              updatedDateUTC: '2020-08-24T20:29:43',
              createdDateUTC: '2019-09-22T23:58:23',
              endDate: null,
              engagementType: null,
              fixedTermEndDate: null,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const postEmployeesEmployeeIDEmploymentRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/Employment',
  tags: ['PayrollNz'],
  summary: 'Creates an employment detail for a specific employee',
  operationId: 'createEmployment',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmploymentSchema,
          example: {
            payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
            startDate: '2020-09-02',
            engagementType: 'FixedTerm',
            fixedTermEndDate: '2026-01-01',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmploymentObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:53:58.8624623',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employment: {
              payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
              startDate: '2020-09-02T00:00:00',
              engagementType: 'FixedTerm',
              fixedTermEndDate: '2026-01-01T00:00:00',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDTaxRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/Tax',
  tags: ['PayrollNz'],
  summary: 'Retrieves tax records for a specific employee',
  operationId: 'getEmployeeTax',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeTaxObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:57:27.5434491',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employeeTax: {
              irdNumber: '111111111',
              taxCode: 'M',
              esctRatePercentage: 17.5,
              isEligibleForKiwiSaver: true,
              hasSpecialStudentLoanRate: false,
              specialStudentLoanRatePercentage: null,
              specialTaxRatePercentage: null,
              kiwiSaverContributions: 'MakeContributions',
              kiwiSaverOptOutDate: null,
              kiwiSaverContributionHolidayEndDate: null,
              kiwiSaverEmployeeContributionRatePercentage: 3,
              kiwiSaverEmployerContributionRatePercentage: 3,
              kiwiSaverEmployerSalarySacrificeContributionRatePercentage: 0,
              hasStudentLoanBalance: false,
              studentLoanBalance: null,
              studentLoanAsAt: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDTaxRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/Tax',
  tags: ['PayrollNz'],
  summary: 'Updates the tax records for a specific employee',
  operationId: 'updateEmployeeTax',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeTaxSchema,
          example: {
            irdNumber: '111111111',
            taxCode: 'M',
            esctRatePercentage: 17.5,
            isEligibleForKiwiSaver: true,
            hasSpecialStudentLoanRate: false,
            specialStudentLoanRatePercentage: null,
            specialTaxRatePercentage: null,
            kiwiSaverContributions: 'MakeContributions',
            kiwiSaverOptOutDate: null,
            kiwiSaverContributionHolidayEndDate: null,
            kiwiSaverEmployeeContributionRatePercentage: 3,
            kiwiSaverEmployerContributionRatePercentage: 3,
            kiwiSaverEmployerSalarySacrificeContributionRatePercentage: 0,
            hasStudentLoanBalance: false,
            studentLoanBalance: null,
            studentLoanAsAt: null,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeTaxObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:57:27.5434491',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employeeTax: {
              irdNumber: '111111111',
              taxCode: 'M',
              esctRatePercentage: 17.5,
              isEligibleForKiwiSaver: true,
              hasSpecialStudentLoanRate: false,
              specialStudentLoanRatePercentage: null,
              specialTaxRatePercentage: null,
              kiwiSaverContributions: 'MakeContributions',
              kiwiSaverOptOutDate: null,
              kiwiSaverContributionHolidayEndDate: null,
              kiwiSaverEmployeeContributionRatePercentage: 3,
              kiwiSaverEmployerContributionRatePercentage: 3,
              kiwiSaverEmployerSalarySacrificeContributionRatePercentage: 0,
              hasStudentLoanBalance: false,
              studentLoanBalance: null,
              studentLoanAsAt: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDOpeningBalancesRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/OpeningBalances',
  tags: ['PayrollNz'],
  summary: 'Retrieves the opening balance for a specific employee',
  operationId: 'getEmployeeOpeningBalances',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeOpeningBalancesObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T20:00:07.7343966',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 8 },
            problem: null,
            openingBalances: [
              {
                periodEndDate: '2020-10-01T00:00:00',
                daysPaid: 3,
                unpaidWeeks: 2,
                grossEarnings: 40,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDOpeningBalancesRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/OpeningBalances',
  tags: ['PayrollNz'],
  summary: 'Creates opening balances for a specific employee',
  operationId: 'createEmployeeOpeningBalances',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeOpeningBalancesSchema,
          example:
            '[{"periodEndDate":"2020-10-01","daysPaid":3,"unpaidWeeks":2,"grossEarnings":40.0}]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeOpeningBalancesObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T19:55:36.539949',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            openingBalances: [
              {
                periodEndDate: '2020-10-01T00:00:00',
                daysPaid: 3,
                unpaidWeeks: 2,
                grossEarnings: 40,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDLeaveRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/Leave',
  tags: ['PayrollNz'],
  summary: 'Retrieves leave records for a specific employee',
  operationId: 'getEmployeeLeaves',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeLeavesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T16:57:18.4657329',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leave: [
              {
                leaveID: 'e311d45f-122e-4fbf-b068-4e3f92dd2729',
                leaveTypeID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6',
                description: 'Holiday Pay Payout',
                startDate: '2019-07-01T00:00:00',
                endDate: '2019-07-07T00:00:00',
                periods: [
                  {
                    periodStartDate: '2019-07-01T00:00:00',
                    periodEndDate: '2019-07-07T00:00:00',
                    numberOfUnits: 36,
                    periodStatus: 'Completed',
                    typeOfUnits: 'Hours',
                    numberOfUnitsTaken: 1,
                    typeOfUnitsTaken: 'Weeks',
                  },
                ],
                updatedDateUTC: '2019-09-24T05:08:44',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDLeaveRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/Leave',
  tags: ['PayrollNz'],
  summary: 'Creates leave records for a specific employee',
  operationId: 'createEmployeeLeave',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeLeaveSchema,
          example: {
            leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4',
            description: 'Creating a Description',
            startDate: '2020-04-24',
            endDate: '2020-04-26',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeLeaveObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T20:29:55.4086404',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leave: {
              leaveID: '82a04ba6-a5cc-4e7d-86d4-b9f381a494e8',
              leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4',
              description: 'Creating a Description',
              startDate: '2020-04-24T00:00:00',
              endDate: '2020-04-26T00:00:00',
              periods: [
                {
                  periodStartDate: '2020-04-20T00:00:00',
                  periodEndDate: '2020-04-26T00:00:00',
                  numberOfUnits: 0,
                  periodStatus: 'Approved',
                  typeOfUnits: 'Hours',
                  numberOfUnitsTaken: 0.2,
                  typeOfUnitsTaken: 'Weeks',
                },
              ],
              updatedDateUTC: '2020-08-26T20:29:55.2151561',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const putEmployeesEmployeeIDLeaveLeaveIDRoute = createRoute({
  method: 'put',
  path: '/Employees/{EmployeeID}/Leave/{LeaveID}',
  tags: ['PayrollNz'],
  summary: 'Updates leave records for a specific employee',
  operationId: 'updateEmployeeLeave',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      LeaveID: z
        .uuid()
        .openapi({
          param: {
            name: 'LeaveID',
            'x-snake': 'leave_id',
            in: 'path',
            required: true,
            description: 'Leave id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: 'c4be24e5-e840-4c92-9eaa-2d86cd596314',
            },
          },
          example: 'c4be24e5-e840-4c92-9eaa-2d86cd596314',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeLeaveSchema,
          example: {
            leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4',
            description: 'Creating a Description',
            startDate: '2020-04-24',
            endDate: '2020-04-26',
            periods: [
              {
                periodStartDate: '2020-04-20',
                periodEndDate: '2020-04-26',
                numberOfUnits: 1,
                periodStatus: 'Approved',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful response',
      content: {
        'application/json': {
          schema: EmployeeLeaveObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T20:29:55.8432792',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leave: {
              leaveID: '82a04ba6-a5cc-4e7d-86d4-b9f381a494e8',
              leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4',
              description: 'Creating a Description',
              startDate: '2020-04-24T00:00:00',
              endDate: '2020-04-26T00:00:00',
              periods: [
                {
                  periodStartDate: '2020-04-20T00:00:00',
                  periodEndDate: '2020-04-26T00:00:00',
                  numberOfUnits: 1,
                  periodStatus: 'Approved',
                },
              ],
              updatedDateUTC: '2020-08-26T20:29:55.8854536',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const deleteEmployeesEmployeeIDLeaveLeaveIDRoute = createRoute({
  method: 'delete',
  path: '/Employees/{EmployeeID}/Leave/{LeaveID}',
  tags: ['PayrollNz'],
  summary: 'Deletes a leave record for a specific employee',
  operationId: 'deleteEmployeeLeave',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      LeaveID: z
        .uuid()
        .openapi({
          param: {
            name: 'LeaveID',
            'x-snake': 'leave_id',
            in: 'path',
            required: true,
            description: 'Leave id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: 'c4be24e5-e840-4c92-9eaa-2d86cd596314',
            },
          },
          example: 'c4be24e5-e840-4c92-9eaa-2d86cd596314',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful response',
      content: {
        'application/json': {
          schema: EmployeeLeaveObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T22:11:10.809249',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDLeaveBalancesRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/LeaveBalances',
  tags: ['PayrollNz'],
  summary: 'Retrieves leave balances for a specific employee',
  operationId: 'getEmployeeLeaveBalances',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeLeaveBalancesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T22:26:48.0448356',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 4 },
            problem: null,
            leaveBalances: [
              {
                name: 'Holiday Pay',
                leaveTypeID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6',
                balance: 0,
                typeOfUnits: 'Dollars',
              },
              {
                name: 'Annual Leave',
                leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4',
                balance: 0,
                typeOfUnits: 'Hours',
              },
              {
                name: 'Sick Leave',
                leaveTypeID: 'f2f994cf-1899-46f3-ad4f-5d92d78c3719',
                balance: 0,
                typeOfUnits: 'Hours',
              },
              {
                name: 'Alternative Holidays',
                leaveTypeID: '34129765-11cb-4d8c-b568-84a2219beda3',
                balance: 0,
                typeOfUnits: 'Hours',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const getEmployeesEmployeeIDLeavePeriodsRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/LeavePeriods',
  tags: ['PayrollNz'],
  summary: 'Retrieves leave periods for a specific employee',
  operationId: 'getEmployeeLeavePeriods',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    query: z.object({
      startDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            'x-snake': 'start_date',
            description: 'Filter by start date',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            'x-snake': 'end_date',
            description: 'Filter by end date',
            schema: { type: 'string', format: 'date' },
            example: 'Johnson',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: LeavePeriodsSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T13:35:49.4407417',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            periods: [
              {
                periodStartDate: '2020-02-24T00:00:00',
                periodEndDate: '2020-03-01T00:00:00',
                numberOfUnits: 24,
                periodStatus: 'Estimated',
                typeOfUnits: 'Hours',
                numberOfUnitsTaken: 0.6,
                typeOfUnitsTaken: 'Weeks',
              },
              {
                periodStartDate: '2020-03-02T00:00:00',
                periodEndDate: '2020-03-08T00:00:00',
                numberOfUnits: 40,
                periodStatus: 'Estimated',
                typeOfUnits: 'Hours',
                numberOfUnitsTaken: 1,
                typeOfUnitsTaken: 'Weeks',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDLeaveSetupRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/LeaveSetup',
  tags: ['PayrollNz'],
  summary:
    'Creates a leave set-up for a specific employee. This is required before viewing, configuring and requesting leave for an employee',
  operationId: 'createEmployeeLeaveSetup',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeLeaveSetupSchema,
          example: {
            holidayPayOpeningBalance: 10,
            annualLeaveOpeningBalance: 100,
            sickLeaveToAccrueAnnually: 20,
            sickLeaveOpeningBalance: 10,
            sickLeaveScheduleOfAccrual: 'OnAnniversaryDate',
            sickLeaveAnniversaryDate: '2023-12-31',
            annualLeaveAnniversaryDate: '2023-12-31',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeLeaveSetupObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T16:50:48.7245664',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveSetup: {
              includeHolidayPay: null,
              holidayPayOpeningBalance: 10,
              annualLeaveOpeningBalance: 100,
              negativeAnnualLeaveBalancePaidAmount: null,
              sickLeaveToAccrueAnnually: 20,
              sickLeaveMaximumToAccrue: null,
              sickLeaveOpeningBalance: 10,
              sickLeaveScheduleOfAccrual: 'OnAnniversaryDate',
              sickLeaveAnniversaryDate: '2023-12-31',
              annualLeaveAnniversaryDate: '2023-12-31',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDLeaveTypesRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/LeaveTypes',
  tags: ['PayrollNz'],
  summary: 'Retrieves leave types for a specific employee',
  operationId: 'getEmployeeLeaveTypes',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeLeaveTypesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T14:25:16.004485',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveTypes: [
              {
                leaveTypeID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6',
                scheduleOfAccrual: 'PercentageOfGrossEarnings',
                maximumToAccrue: 0,
                openingBalance: 0,
                rateAccruedHourly: null,
                percentageOfGrossEarnings: 8,
                includeHolidayPayEveryPay: true,
                showAnnualLeaveInAdvance: null,
                annualLeaveTotalAmountPaid: null,
                scheduleOfAccrualDate: null,
                unitsAccruedAnnually: 0,
                typeOfUnitsToAccrue: 'Weeks',
                openingBalanceTypeOfUnits: 'Weeks',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDLeaveTypesRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/LeaveTypes',
  tags: ['PayrollNz'],
  summary: 'Creates leave type records for a specific employee',
  operationId: 'createEmployeeLeaveType',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeLeaveTypeSchema,
          example: {
            leaveTypeID: '35da97ae-05b9-427f-9a98-69157ba42cec',
            scheduleOfAccrual: 'AnnuallyAfter6Months',
            unitsAccruedAnnually: 10,
            typeOfUnitsToAccrue: 'Hours',
            openingBalanceTypeOfUnits: 'Hours',
            maximumToAccrue: 80,
            openingBalance: 100,
            rateAccruedHourly: null,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeLeaveTypeObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T14:31:54.3370081',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveType: {
              leaveTypeID: '35da97ae-05b9-427f-9a98-69157ba42cec',
              scheduleOfAccrual: 'AnnuallyAfter6Months',
              maximumToAccrue: 80,
              openingBalance: 100,
              rateAccruedHourly: null,
              percentageOfGrossEarnings: 0,
              includeHolidayPayEveryPay: null,
              showAnnualLeaveInAdvance: null,
              annualLeaveTotalAmountPaid: null,
              scheduleOfAccrualDate: null,
              unitsAccruedAnnually: 0,
              typeOfUnitsToAccrue: 'Hours',
              openingBalanceTypeOfUnits: 'Hours',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDPaymentMethodsRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/PaymentMethods',
  tags: ['PayrollNz'],
  summary: 'Retrieves available payment methods for a specific employee',
  operationId: 'getEmployeePaymentMethod',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PaymentMethodObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T23:34:53.6856317',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            paymentMethod: {
              bankAccounts: [
                {
                  accountName: 'Casual Worker',
                  accountNumber: '0607050201419000',
                  sortCode: null,
                  particulars: null,
                  code: null,
                  dollarAmount: null,
                  reference: '',
                  calculationType: 'Balance',
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDPaymentMethodsRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/PaymentMethods',
  tags: ['PayrollNz'],
  summary: 'Creates a payment method for an employee',
  operationId: 'createEmployeePaymentMethod',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PaymentMethodSchema,
          example: {
            bankAccounts: [
              {
                accountName: 'Casual Worker',
                accountNumber: '0607050201419000',
                sortCode: null,
                particulars: null,
                code: null,
                dollarAmount: null,
                reference: '',
                calculationType: 'Balance',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PaymentMethodObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T23:34:53.6856317',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            paymentMethod: {
              bankAccounts: [
                {
                  accountName: 'Casual Worker',
                  accountNumber: '0607050201419000',
                  sortCode: null,
                  particulars: null,
                  code: null,
                  dollarAmount: null,
                  reference: '',
                  calculationType: 'Balance',
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDPayTemplatesRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/PayTemplates',
  tags: ['PayrollNz'],
  summary: 'Retrieves pay templates for a specific employee',
  operationId: 'getEmployeePayTemplates',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeePayTemplatesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T15:09:19.0627389',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 0, itemCount: 0 },
            problem: null,
            payTemplate: {
              employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
              earningTemplates: [
                {
                  payTemplateEarningID: '1527cf6c-93db-41bf-aba2-9d6af1d3c499',
                  ratePerUnit: 20,
                  numberOfUnits: 8,
                  fixedAmount: null,
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  name: 'Ordinary Time',
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDPayTemplatesEarningsRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/PayTemplates/Earnings',
  tags: ['PayrollNz'],
  summary: 'Creates earnings template records for an employee',
  operationId: 'createEmployeeEarningsTemplate',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EarningsTemplateSchema,
          example: {
            ratePerUnit: 20,
            numberOfUnits: 8,
            earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
            name: 'My New One',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EarningsTemplateObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T14:48:24.6032145',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningTemplate: {
              payTemplateEarningID: '11b4e492-5d56-4eac-a9ce-687d7b9a4a84',
              ratePerUnit: 20,
              numberOfUnits: 8,
              fixedAmount: null,
              earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
              name: 'Ordinary Time',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute = createRoute({
  method: 'put',
  path: '/Employees/{EmployeeID}/PayTemplates/Earnings/{PayTemplateEarningID}',
  tags: ['PayrollNz'],
  summary: 'Updates an earnings template records for an employee',
  operationId: 'updateEmployeeEarningsTemplate',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      PayTemplateEarningID: z
        .uuid()
        .openapi({
          param: {
            name: 'PayTemplateEarningID',
            'x-snake': 'pay_template_earning_id',
            in: 'path',
            required: true,
            description: 'Id for single pay template earnings object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            },
          },
          example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EarningsTemplateSchema,
          example: {
            ratePerUnit: 25,
            numberOfUnits: 4,
            earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EarningsTemplateObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T18:54:08.6524341',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningTemplate: {
              payTemplateEarningID: '1527cf6c-93db-41bf-aba2-9d6af1d3c499',
              ratePerUnit: 25,
              numberOfUnits: 4,
              fixedAmount: null,
              earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
              name: 'Ordinary Time',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute = createRoute({
  method: 'delete',
  path: '/Employees/{EmployeeID}/PayTemplates/Earnings/{PayTemplateEarningID}',
  tags: ['PayrollNz'],
  summary: "Deletes an employee's earnings template record",
  operationId: 'deleteEmployeeEarningsTemplate',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      PayTemplateEarningID: z
        .uuid()
        .openapi({
          param: {
            name: 'PayTemplateEarningID',
            'x-snake': 'pay_template_earning_id',
            in: 'path',
            required: true,
            description: 'Id for single pay template earnings object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            },
          },
          example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }),
    }),
  },
  responses: {
    200: {
      description: 'deletion successful',
      content: {
        'application/json': {
          schema: EarningsTemplateObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T18:54:09.1368544',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const postEmployeesEmployeeIDPayTemplateEarningsRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/PayTemplateEarnings',
  tags: ['PayrollNz'],
  summary: 'Creates multiple employee earnings template records for a specific employee',
  operationId: 'createMultipleEmployeeEarningsTemplate',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EarningsTemplatesSchema,
          example:
            '[{"ratePerUnit":20.0,"numberOfUnits":8.0,"earningsRateID":"f9d8f5b5-9049-47f4-8541-35e200f750a5"},{"ratePerUnit":0.0,"numberOfUnits":8.0,"earningsRateID":"65b83d94-f20f-45e1-85ae-387fcf460c26"}]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeEarningsTemplatesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T15:01:52.9369043',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningTemplates: [
              {
                payTemplateEarningID: '1527cf6c-93db-41bf-aba2-9d6af1d3c499',
                ratePerUnit: 20,
                numberOfUnits: 8,
                fixedAmount: null,
                earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                name: 'Ordinary Time',
              },
              {
                payTemplateEarningID: '92e757cc-b026-404d-804e-9dc2047a03e6',
                ratePerUnit: 0,
                numberOfUnits: 8,
                fixedAmount: null,
                earningsRateID: '65b83d94-f20f-45e1-85ae-387fcf460c26',
                name: 'Salary',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getDeductionsRoute = createRoute({
  method: 'get',
  path: '/Deductions',
  tags: ['PayrollNz'],
  summary: 'Retrieves deductions for a specific employee',
  operationId: 'getDeductions',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: DeductionsSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T20:43:53.931198',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 4 },
            problem: null,
            deductions: [
              {
                deductionId: 'a3760fe4-68a4-4e38-8326-fe616af7dc74',
                deductionName: 'KiwiSaver Voluntary Contributions',
                deductionCategory: 'KiwiSaverVoluntaryContributions',
                liabilityAccountId: '26c57f04-0436-40cc-9cd9-1a21185d88bb',
                currentRecord: true,
                standardAmount: null,
              },
              {
                deductionId: 'a131596e-2f83-4f6c-9573-99c4cbfcefd1',
                deductionName: 'Rent',
                deductionCategory: 'NzOther',
                liabilityAccountId: '26c57f04-0436-40cc-9cd9-1a21185d88bb',
                currentRecord: true,
                standardAmount: 200,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postDeductionsRoute = createRoute({
  method: 'post',
  path: '/Deductions',
  tags: ['PayrollNz'],
  summary: 'Creates a new deduction for a specific employee',
  operationId: 'createDeduction',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: DeductionSchema,
          example: {
            deductionName: 'My new deduction',
            deductionCategory: 'NzOther',
            liabilityAccountId: '568f2e9a-0870-46cc-8678-f83f132ed4e3',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: DeductionObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T20:43:54.9563295',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            deduction: {
              deductionId: '0ee805eb-f5b0-4061-9b35-d9ea550da04e',
              deductionName: 'My new deduction',
              deductionCategory: 'NzOther',
              liabilityAccountId: '568f2e9a-0870-46cc-8678-f83f132ed4e3',
              currentRecord: true,
              standardAmount: null,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getDeductionsDeductionIdRoute = createRoute({
  method: 'get',
  path: '/Deductions/{deductionId}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a single deduction by using a unique deduction ID',
  operationId: 'getDeduction',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      deductionId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'deductionId',
            'x-snake': 'deduction_id',
            required: true,
            description: 'Identifier for the deduction',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: DeductionObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T20:43:54.846821',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            deduction: {
              deductionId: 'a3760fe4-68a4-4e38-8326-fe616af7dc74',
              deductionName: 'KiwiSaver Voluntary Contributions',
              deductionCategory: 'KiwiSaverVoluntaryContributions',
              liabilityAccountId: '26c57f04-0436-40cc-9cd9-1a21185d88bb',
              currentRecord: true,
              standardAmount: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getStatutoryDeductionsRoute = createRoute({
  method: 'get',
  path: '/StatutoryDeductions',
  tags: ['PayrollNz'],
  summary: 'Retrieves statutory deductions',
  operationId: 'getStatutoryDeductions',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: StatutoryDeductionsSchema,
          example: {
            id: 'e3731829-9801-4809-a1a1-bbe40cd18b7e',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T23:46:21.0212854',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 8 },
            problem: null,
            statutoryDeductions: [
              {
                id: 'e3731829-9801-4809-a1a1-bbe40cd18b7e',
                name: 'Child Support',
                liabilityAccountId: 'fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488',
                statutoryDeductionCategory: 'ChildSupport',
                currentRecord: true,
              },
              {
                id: '00000000-0000-0000-0000-000000000000',
                name: 'Student Loan',
                liabilityAccountId: 'fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488',
                statutoryDeductionCategory: 'StudentLoan',
                currentRecord: true,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getStatutoryDeductionsIdRoute = createRoute({
  method: 'get',
  path: '/StatutoryDeductions/{id}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific statutory deduction by using a unique statutory deductions id',
  operationId: 'getStatutoryDeduction',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            description: 'Identifier for the statutory deduction',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: StatutoryDeductionObjectSchema,
          example: {
            id: 'e3731829-9801-4809-a1a1-bbe40cd18b7e',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T00:01:57.6562992',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            statutoryDeduction: {
              id: 'e3731829-9801-4809-a1a1-bbe40cd18b7e',
              name: 'Child Support',
              liabilityAccountId: 'fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488',
              statutoryDeductionCategory: 'ChildSupport',
              currentRecord: true,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getSuperannuationsRoute = createRoute({
  method: 'get',
  path: '/Superannuations',
  tags: ['PayrollNz'],
  summary: 'Retrieves superannuations',
  operationId: 'getSuperannuations',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SuperannuationsSchema,
          example: {
            id: '563273ea-0dae-4f82-86a4-e0db77c008ea',
            providerName: 'provider-name',
            dateTimeUTC: '2020-09-14T22:35:14.6806088',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            problem: null,
            benefits: [
              {
                id: '563273ea-0dae-4f82-86a4-e0db77c008ea',
                name: 'KiwiSaver',
                category: 'KiwiSaver',
                liabilityAccountId: 'fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488',
                expenseAccountId: 'b343c3b0-5941-4166-82b4-dd926622e0e2',
                standardAmount: 5,
                percentage: 3,
                calculationTypeNZ: 'PercentageOfTaxableEarnings',
                currentRecord: true,
                companyMax: 2,
              },
              {
                id: '00000000-0000-0000-0000-000000000000',
                name: 'SidSaver',
                category: 'Other',
                liabilityAccountId: '568f2e9a-0870-46cc-8678-f83f132ed4e3',
                expenseAccountId: 'e4eb36f6-97e3-4427-a394-dd4e1b355c2e',
                standardAmount: 10,
                percentage: 4,
                calculationTypeNZ: 'FixedAmount',
                currentRecord: true,
                companyMax: 4,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postSuperannuationsRoute = createRoute({
  method: 'post',
  path: '/Superannuations',
  tags: ['PayrollNz'],
  summary: 'Creates a new superannuation',
  operationId: 'createSuperannuation',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: BenefitSchema,
          example: {
            name: 'SidSaver',
            category: 'Other',
            liabilityAccountId: '568f2e9a-0870-46cc-8678-f83f132ed4e3',
            expenseAccountId: 'e4eb36f6-97e3-4427-a394-dd4e1b355c2e',
            CalculationTypeNZ: 'FixedAmount',
            standardAmount: 10,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SuperannuationObjectSchema,
          example: {
            id: '8905a754-7ce8-40e2-9fa5-f819deb7adce',
            providerName: 'provider-name',
            dateTimeUTC: '2020-09-11T00:36:31.7680431',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            benefit: {
              id: '8905a754-7ce8-40e2-9fa5-f819deb7adce',
              name: 'SidSaver',
              category: 'Other',
              liabilityAccountId: '568f2e9a-0870-46cc-8678-f83f132ed4e3',
              expenseAccountId: 'e4eb36f6-97e3-4427-a394-dd4e1b355c2e',
              standardAmount: 10,
              percentage: null,
              calculationTypeNZ: 'FixedAmount',
              currentRecord: true,
              companyMax: null,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getSuperannuationsSuperannuationIDRoute = createRoute({
  method: 'get',
  path: '/Superannuations/{SuperannuationID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific superannuation using a unique superannuation ID',
  operationId: 'getSuperannuation',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      SuperannuationID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'SuperannuationID',
            'x-snake': 'superannuation_id',
            required: true,
            description: 'Identifier for the superannuation',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SuperannuationObjectSchema,
          example: {
            id: '563273ea-0dae-4f82-86a4-e0db77c008ea',
            providerName: 'provider-name',
            dateTimeUTC: '2020-09-11T00:36:29.5745157',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            benefit: {
              id: '563273ea-0dae-4f82-86a4-e0db77c008ea',
              name: 'KiwiSaver',
              category: 'KiwiSaver',
              liabilityAccountId: 'fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488',
              expenseAccountId: 'b343c3b0-5941-4166-82b4-dd926622e0e2',
              standardAmount: null,
              percentage: 3,
              calculationTypeNZ: 'PercentageOfTaxableEarnings',
              currentRecord: true,
              companyMax: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getEarningsRatesRoute = createRoute({
  method: 'get',
  path: '/EarningsRates',
  tags: ['PayrollNz'],
  summary: 'Retrieves earnings rates',
  operationId: 'getEarningsRates',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EarningsRatesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T18:25:57.0647738',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 15 },
            problem: null,
            earningsRates: [
              {
                earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                name: 'Ordinary Time',
                earningsType: 'RegularEarnings',
                rateType: 'RatePerUnit',
                typeOfUnits: 'hours',
                currentRecord: true,
                expenseAccountID: '1c91e520-a12b-45cc-8194-99950858e5bf',
                fixedAmount: null,
                ratePerUnit: null,
                multipleOfOrdinaryEarningsRate: null,
              },
              {
                earningsRateID: '31407b3e-0967-4ae0-a7f1-3df4e6481a2e',
                name: 'ACC (First Week)',
                earningsType: 'OtherGrossEarnings',
                rateType: 'MultipleOfOrdinaryEarningsRate',
                typeOfUnits: 'hours',
                currentRecord: true,
                expenseAccountID: '1c91e520-a12b-45cc-8194-99950858e5bf',
                fixedAmount: null,
                ratePerUnit: null,
                multipleOfOrdinaryEarningsRate: 0.8,
              },
              {
                earningsRateID: '6e5a4cf2-aa38-4558-a46e-f6998dad239b',
                name: 'Directors Fees',
                earningsType: 'WithholdingIncome',
                rateType: 'FixedAmount',
                typeOfUnits: null,
                currentRecord: true,
                expenseAccountID: '1c91e520-a12b-45cc-8194-99950858e5bf',
                fixedAmount: 1000,
                ratePerUnit: null,
                multipleOfOrdinaryEarningsRate: null,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postEarningsRatesRoute = createRoute({
  method: 'post',
  path: '/EarningsRates',
  tags: ['PayrollNz'],
  summary: 'Creates a new earnings rate',
  operationId: 'createEarningsRate',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: EarningsRateSchema,
          example: {
            name: 'My Earnings Rate',
            earningsType: 'RegularEarnings',
            rateType: 'RatePerUnit',
            typeOfUnits: 'hours',
            expenseAccountID: 'e4eb36f6-97e3-4427-a394-dd4e1b355c2e',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EarningsRateObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T18:25:57.8141393',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningsRate: {
              earningsRateID: '4369b0ef-a64d-42e1-bb6d-f2fc984de133',
              name: 'My Earnings Rate',
              earningsType: 'RegularEarnings',
              rateType: 'RatePerUnit',
              typeOfUnits: 'hours',
              currentRecord: true,
              expenseAccountID: 'e4eb36f6-97e3-4427-a394-dd4e1b355c2e',
              fixedAmount: null,
              ratePerUnit: null,
              multipleOfOrdinaryEarningsRate: null,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getEarningsRatesEarningsRateIDRoute = createRoute({
  method: 'get',
  path: '/EarningsRates/{EarningsRateID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific earnings rates by using a unique earnings rate id',
  operationId: 'getEarningsRate',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EarningsRateID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'EarningsRateID',
            'x-snake': 'earnings_rate_id',
            required: true,
            description: 'Identifier for the earnings rate',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EarningsRateObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T18:25:57.8191994',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningsRate: {
              earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
              name: 'Ordinary Time',
              earningsType: 'RegularEarnings',
              rateType: 'RatePerUnit',
              typeOfUnits: 'hours',
              currentRecord: true,
              expenseAccountID: '1c91e520-a12b-45cc-8194-99950858e5bf',
              fixedAmount: null,
              ratePerUnit: null,
              multipleOfOrdinaryEarningsRate: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getLeaveTypesRoute = createRoute({
  method: 'get',
  path: '/LeaveTypes',
  tags: ['PayrollNz'],
  summary: 'Retrieves leave types',
  operationId: 'getLeaveTypes',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      ActiveOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ActiveOnly',
            'x-snake': 'active_only',
            description:
              'Filters leave types by active status. By default the API returns all leave types.',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: LeaveTypesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T20:49:58.4095603',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 15 },
            problem: null,
            leaveTypes: [
              {
                leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4',
                name: 'Annual Leave',
                isPaidLeave: true,
                showOnPayslip: true,
                updatedDateUTC: '2019-09-22T23:09:32Z',
                isActive: true,
                typeOfUnits: 'Hours',
                typeOfUnitsToAccrue: 'Days',
              },
              {
                leaveTypeID: '71b548db-6e40-4b64-be8b-f6a71455d8ab',
                name: 'Annual Leave - Cash Up',
                isPaidLeave: true,
                showOnPayslip: true,
                updatedDateUTC: '2019-09-22T23:09:32Z',
                isActive: true,
                typeOfUnits: 'Hours',
                typeOfUnitsToAccrue: 'Days',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postLeaveTypesRoute = createRoute({
  method: 'post',
  path: '/LeaveTypes',
  tags: ['PayrollNz'],
  summary: 'Creates a new leave type',
  operationId: 'createLeaveType',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: LeaveTypeSchema,
          example: { name: 'My wqwhhiktun Leave', isPaidLeave: false, showOnPayslip: true },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: LeaveTypeObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T20:49:59.9135451',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveType: {
              leaveTypeID: '80464f55-b5c9-4d05-84c7-219d98baa3e2',
              name: 'My wqwhhiktun Leave',
              isPaidLeave: false,
              showOnPayslip: true,
              updatedDateUTC: '2020-08-27T20:49:59.8315619',
              isActive: true,
              typeOfUnits: 'Hours',
              typeOfUnitsToAccrue: 'Hours',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getLeaveTypesLeaveTypeIDRoute = createRoute({
  method: 'get',
  path: '/LeaveTypes/{LeaveTypeID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific leave type by using a unique leave type ID',
  operationId: 'getLeaveType',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      LeaveTypeID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'LeaveTypeID',
            'x-snake': 'leave_type_id',
            required: true,
            description: 'Identifier for the leave type',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: LeaveTypeObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T20:49:58.7293665',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveType: {
              leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4',
              name: 'Annual Leave',
              isPaidLeave: true,
              showOnPayslip: true,
              updatedDateUTC: '2019-09-22T23:09:32',
              isActive: true,
              typeOfUnits: 'Hours',
              typeOfUnitsToAccrue: 'Days',
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getReimbursementsRoute = createRoute({
  method: 'get',
  path: '/Reimbursements',
  tags: ['PayrollNz'],
  summary: 'Retrieves reimbursements',
  operationId: 'getReimbursements',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: ReimbursementsSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T21:59:44.5592312',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 3 },
            problem: null,
            reimbursements: [
              {
                reimbursementID: 'ddf9b572-5861-4f97-a109-9d612df52242',
                name: 'Mileage',
                accountID: '36d33c5d-7dea-4911-9ed0-7fccc16f2b5f',
                currentRecord: true,
                standardAmount: null,
                standardTypeOfUnits: 'km',
                standardRatePerUnit: 0.79,
                reimbursementCategory: 'NoGST',
                calculationType: 'RatePerUnit',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postReimbursementsRoute = createRoute({
  method: 'post',
  path: '/Reimbursements',
  tags: ['PayrollNz'],
  summary: 'Creates a new reimbursement',
  operationId: 'createReimbursement',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: ReimbursementSchema,
          example: {
            name: 'My new Reimburse',
            accountID: 'fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488',
            reimbursementCategory: 'GSTInclusive',
            calculationType: 'FixedAmount',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: ReimbursementObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T23:25:30.5238274',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            reimbursement: {
              reimbursementID: 'c7a8e7fd-b4f1-4f7b-9256-1b3edaa72de7',
              name: 'My new Reimburse',
              accountID: 'fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488',
              currentRecord: true,
              standardAmount: null,
              standardTypeOfUnits: null,
              standardRatePerUnit: null,
              reimbursementCategory: 'GSTInclusive',
              calculationType: 'FixedAmount',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getReimbursementsReimbursementIDRoute = createRoute({
  method: 'get',
  path: '/Reimbursements/{ReimbursementID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific reimbursement by using a unique reimbursement ID',
  operationId: 'getReimbursement',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      ReimbursementID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'ReimbursementID',
            'x-snake': 'reimbursement_id',
            required: true,
            description: 'Identifier for the reimbursement',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: ReimbursementObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T21:59:46.5643076',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            reimbursement: {
              reimbursementID: '0d4e5476-1147-4a2c-9db4-ab6a15f81f1d',
              name: 'GST',
              accountID: null,
              currentRecord: true,
              standardAmount: null,
              standardTypeOfUnits: null,
              standardRatePerUnit: null,
              reimbursementCategory: 'GST',
              calculationType: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getTimesheetsRoute = createRoute({
  method: 'get',
  path: '/Timesheets',
  tags: ['PayrollNz'],
  summary: 'Retrieves timesheets',
  operationId: 'getTimesheets',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            example: 5,
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            description: 'Filter by employeeId and/or payrollCalendarId',
            schema: { type: 'string' },
            example:
              'employeeId==00000000-0000-0000-0000-000000000000,payrollCalendarId==00000000-0000-0000-0000-000000000000',
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'filter results by any timesheets with a matching timesheet status',
            schema: { type: 'string' },
            example: 'Draft',
            required: false,
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            'x-snake': 'start_date',
            description:
              'filter results by any timesheets with a startDate on or after the provided date',
            schema: { type: 'string' },
            example: '2019-01-02',
            required: false,
          },
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            'x-snake': 'end_date',
            description:
              'filter results by any timesheets with a endDate on or before the provided date',
            schema: { type: 'string' },
            example: '2020-01-02',
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description:
              'sort the order of timesheets returned. The default is based on the timesheets createdDate, sorted oldest to newest. Currently, the only other option is to reverse the order based on the timesheets startDate, sorted newest to oldest.',
            schema: { type: 'string' },
            example: 'startDate',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetsSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T21:07:39.0921081',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 1 },
            problem: null,
            timesheets: [
              {
                timesheetID: 'f2a2aff0-9944-411e-bc58-44f22304188d',
                payrollCalendarID: 'f6931b89-d9c8-4f25-b4fa-268b5fd24197',
                employeeID: '272a7559-1b8f-4d3a-977b-d05578cb9546',
                startDate: '2020-08-01T00:00:00',
                endDate: '2020-08-31T00:00:00',
                status: 'Draft',
                totalHours: 17,
                updatedDateUTC: '2020-08-28T20:50:40',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets', 'payroll.timesheets.read'] }],
})

export const postTimesheetsRoute = createRoute({
  method: 'post',
  path: '/Timesheets',
  tags: ['PayrollNz'],
  summary: 'Creates a new timesheet',
  operationId: 'createTimesheet',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: TimesheetSchema,
          example: {
            payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
            employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
            startDate: '2020-04-13',
            endDate: '2020-04-19',
            timesheetLines: [
              {
                date: '2020-04-13',
                earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                numberOfUnits: 8,
              },
              {
                date: '2020-04-15',
                earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                numberOfUnits: 6,
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T21:07:41.7980254',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: 'd227445a-4188-453a-a196-48163a38188c',
              payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
              employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Draft',
              totalHours: 14,
              updatedDateUTC: '2020-08-28T21:07:41.9676218',
              timesheetLines: [
                {
                  timesheetLineID: 'ebeda184-6f42-4c44-a19c-3c0308578153',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 6,
                },
                {
                  timesheetLineID: 'e8e9d84f-d01d-4ab9-9584-3996c898b89c',
                  date: '2020-04-13T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 8,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const getTimesheetsTimesheetIDRoute = createRoute({
  method: 'get',
  path: '/Timesheets/{TimesheetID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific timesheet by using a unique timesheet ID',
  operationId: 'getTimesheet',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T21:07:39.0637818',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: 'f2a2aff0-9944-411e-bc58-44f22304188d',
              payrollCalendarID: 'f6931b89-d9c8-4f25-b4fa-268b5fd24197',
              employeeID: '272a7559-1b8f-4d3a-977b-d05578cb9546',
              startDate: '2020-08-01T00:00:00',
              endDate: '2020-08-31T00:00:00',
              status: 'Draft',
              totalHours: 17,
              updatedDateUTC: '2020-08-28T20:50:40',
              timesheetLines: [
                {
                  timesheetLineID: '3397aab1-6cac-4804-a72b-00f396b04a08',
                  date: '2020-08-01T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 7,
                },
                {
                  timesheetLineID: '11f3608f-c53a-474d-ba17-053849de318b',
                  date: '2020-08-02T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 5,
                },
                {
                  timesheetLineID: 'f5b416b7-d431-4d54-baff-9cd6de620c70',
                  date: '2020-08-03T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 5,
                },
              ],
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets', 'payroll.timesheets.read'] }],
})

export const deleteTimesheetsTimesheetIDRoute = createRoute({
  method: 'delete',
  path: '/Timesheets/{TimesheetID}',
  tags: ['PayrollNz'],
  summary: 'Deletes a timesheet',
  operationId: 'deleteTimesheet',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetLineSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T21:07:41.4217222',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const postTimesheetsTimesheetIDLinesRoute = createRoute({
  method: 'post',
  path: '/Timesheets/{TimesheetID}/Lines',
  tags: ['PayrollNz'],
  summary: 'Create a new timesheet line for a specific time sheet',
  operationId: 'createTimesheetLine',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TimesheetLineSchema,
          example: {
            date: '2020-08-03',
            earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
            numberOfUnits: 1,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetLineObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T21:07:39.5955147',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheetLine: {
              timesheetLineID: '10c3c63e-6cd0-4630-861f-08a2baa657fa',
              date: '2020-08-03T00:00:00',
              earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
              trackingItemID: null,
              numberOfUnits: 1,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const postTimesheetsTimesheetIDApproveRoute = createRoute({
  method: 'post',
  path: '/Timesheets/{TimesheetID}/Approve',
  tags: ['PayrollNz'],
  summary: 'Approves a timesheet',
  operationId: 'approveTimesheet',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T21:07:40.3918669',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: 'f2a2aff0-9944-411e-bc58-44f22304188d',
              payrollCalendarID: 'f6931b89-d9c8-4f25-b4fa-268b5fd24197',
              employeeID: '272a7559-1b8f-4d3a-977b-d05578cb9546',
              startDate: '2020-08-01T00:00:00',
              endDate: '2020-08-31T00:00:00',
              status: 'Approved',
              totalHours: 13,
              updatedDateUTC: '2020-08-28T21:07:40.5613405',
              timesheetLines: [
                {
                  timesheetLineID: '10c3c63e-6cd0-4630-861f-08a2baa657fa',
                  date: '2020-08-03T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 1,
                },
                {
                  timesheetLineID: '3397aab1-6cac-4804-a72b-00f396b04a08',
                  date: '2020-08-04T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 2,
                },
                {
                  timesheetLineID: '11f3608f-c53a-474d-ba17-053849de318b',
                  date: '2020-08-02T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 5,
                },
                {
                  timesheetLineID: 'f5b416b7-d431-4d54-baff-9cd6de620c70',
                  date: '2020-08-03T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 5,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const postTimesheetsTimesheetIDRevertToDraftRoute = createRoute({
  method: 'post',
  path: '/Timesheets/{TimesheetID}/RevertToDraft',
  tags: ['PayrollNz'],
  summary: 'Reverts a timesheet to draft',
  operationId: 'revertTimesheet',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T21:07:41.3053619',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: 'f2a2aff0-9944-411e-bc58-44f22304188d',
              payrollCalendarID: 'f6931b89-d9c8-4f25-b4fa-268b5fd24197',
              employeeID: '272a7559-1b8f-4d3a-977b-d05578cb9546',
              startDate: '2020-08-01T00:00:00',
              endDate: '2020-08-31T00:00:00',
              status: 'Draft',
              totalHours: 13,
              updatedDateUTC: '2020-08-28T21:07:41.2608622',
              timesheetLines: [
                {
                  timesheetLineID: '10c3c63e-6cd0-4630-861f-08a2baa657fa',
                  date: '2020-08-03T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 1,
                },
                {
                  timesheetLineID: '3397aab1-6cac-4804-a72b-00f396b04a08',
                  date: '2020-08-04T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 2,
                },
                {
                  timesheetLineID: '11f3608f-c53a-474d-ba17-053849de318b',
                  date: '2020-08-02T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 5,
                },
                {
                  timesheetLineID: 'f5b416b7-d431-4d54-baff-9cd6de620c70',
                  date: '2020-08-03T00:00:00',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  trackingItemID: null,
                  numberOfUnits: 5,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const putTimesheetsTimesheetIDLinesTimesheetLineIDRoute = createRoute({
  method: 'put',
  path: '/Timesheets/{TimesheetID}/Lines/{TimesheetLineID}',
  tags: ['PayrollNz'],
  summary: 'Updates a timesheet line for a specific timesheet',
  operationId: 'updateTimesheetLine',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      TimesheetLineID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetLineID',
            'x-snake': 'timesheet_line_id',
            required: true,
            description: 'Identifier for the timesheet line',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TimesheetLineSchema,
          example: {
            date: '2020-08-04',
            earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
            numberOfUnits: 2,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetLineObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T21:07:39.9074596',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheetLine: {
              timesheetLineID: '3397aab1-6cac-4804-a72b-00f396b04a08',
              date: '2020-08-04T00:00:00',
              earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
              trackingItemID: null,
              numberOfUnits: 2,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute = createRoute({
  method: 'delete',
  path: '/Timesheets/{TimesheetID}/Lines/{TimesheetLineID}',
  tags: ['PayrollNz'],
  summary: 'Deletes a timesheet line for a specific timesheet',
  operationId: 'deleteTimesheetLine',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      TimesheetLineID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetLineID',
            'x-snake': 'timesheet_line_id',
            required: true,
            description: 'Identifier for the timesheet line',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetLineSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T22:01:51.861069',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const getPayRunCalendarsRoute = createRoute({
  method: 'get',
  path: '/PayRunCalendars',
  tags: ['PayrollNz'],
  summary: 'Retrieves payrun calendars',
  operationId: 'getPayRunCalendars',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PayRunCalendarsSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T23:54:48.3357097',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            problem: null,
            payRunCalendars: [
              {
                payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
                name: 'Weekly',
                calendarType: 'Weekly',
                periodStartDate: '2019-07-08T00:00:00',
                periodEndDate: '2019-07-14T00:00:00',
                paymentDate: '2019-07-16T00:00:00',
                updatedDateUTC: '2019-09-24T05:08:45',
              },
              {
                payrollCalendarID: 'f6931b89-d9c8-4f25-b4fa-268b5fd24197',
                name: 'Monthly',
                calendarType: 'Monthly',
                periodStartDate: '2019-08-01T00:00:00',
                periodEndDate: '2019-08-31T00:00:00',
                paymentDate: '2019-08-23T00:00:00',
                updatedDateUTC: '2019-09-24T03:11:16',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postPayRunCalendarsRoute = createRoute({
  method: 'post',
  path: '/PayRunCalendars',
  tags: ['PayrollNz'],
  summary: 'Creates a new payrun calendar',
  operationId: 'createPayRunCalendar',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: PayRunCalendarSchema,
          example: {
            name: 'My Weekly Cal',
            calendarType: 'Weekly',
            periodStartDate: '2020-05-01',
            paymentDate: '2020-05-15',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PayRunCalendarObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T23:54:49.3159839',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payRunCalendar: {
              payrollCalendarID: '54e9706a-c4e8-45ff-9c63-6fcac7ee7cde',
              name: 'My Weekly Cal',
              calendarType: 'Weekly',
              periodStartDate: '2020-05-01T00:00:00',
              periodEndDate: '2020-05-07T00:00:00',
              paymentDate: '2020-05-15T00:00:00',
              updatedDateUTC: '2020-08-26T23:54:49.4863322',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getPayRunCalendarsPayrollCalendarIDRoute = createRoute({
  method: 'get',
  path: '/PayRunCalendars/{PayrollCalendarID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific payrun calendar by using a unique payroll calendar ID',
  operationId: 'getPayRunCalendar',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      PayrollCalendarID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'PayrollCalendarID',
            'x-snake': 'payroll_calendar_id',
            required: true,
            description: 'Identifier for the payrun calendars',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PayRunCalendarObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T23:54:48.4398063',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payRunCalendar: {
              payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
              name: 'Weekly',
              calendarType: 'Weekly',
              periodStartDate: '2019-07-08T00:00:00',
              periodEndDate: '2019-07-14T00:00:00',
              paymentDate: '2019-07-16T00:00:00',
              updatedDateUTC: '2019-09-24T05:08:45',
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getEmployeesEmployeeIDSalaryAndWagesRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/SalaryAndWages',
  tags: ['PayrollNz'],
  summary: "Retrieves an employee's salary and wages",
  operationId: 'getEmployeeSalaryAndWages',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SalaryAndWagesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T00:25:03.6697493',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            problem: null,
            salaryAndWages: [
              {
                salaryAndWagesID: 'b0026f5a-fa8e-43aa-95e4-cec3c0972e39',
                earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                numberOfUnitsPerWeek: 0,
                ratePerUnit: 25,
                numberOfUnitsPerDay: 0,
                daysPerWeek: 0,
                effectiveFrom: '2019-02-07T00:00:00',
                annualSalary: 25,
                status: 'Active',
                paymentType: 'Hourly',
                workPatternType: 'DaysAndHours',
              },
              {
                salaryAndWagesID: '0211c70c-93d5-4da1-a570-b66d8df2ca15',
                earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                numberOfUnitsPerWeek: 2,
                ratePerUnit: null,
                numberOfUnitsPerDay: 2,
                daysPerWeek: 1,
                effectiveFrom: '2020-05-01T00:00:00',
                annualSalary: 100,
                status: 'Active',
                paymentType: 'Salary',
                workPatternType: 'DaysAndHours',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDSalaryAndWagesRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/SalaryAndWages',
  tags: ['PayrollNz'],
  summary: 'Creates an employee salary and wage record',
  operationId: 'createEmployeeSalaryAndWage',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SalaryAndWageSchema,
          example: {
            earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
            numberOfUnitsPerWeek: 2,
            ratePerUnit: 10,
            numberOfUnitsPerDay: 2,
            daysPerWeek: 1,
            effectiveFrom: '2020-05-01',
            annualSalary: 100,
            status: 'Active',
            paymentType: 'Salary',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SalaryAndWageObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T00:22:47.464262',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            salaryAndWages: {
              salaryAndWagesID: '0211c70c-93d5-4da1-a570-b66d8df2ca15',
              earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
              numberOfUnitsPerWeek: 2,
              ratePerUnit: null,
              numberOfUnitsPerDay: 2,
              daysPerWeek: 1,
              effectiveFrom: '2020-05-01T00:00:00',
              annualSalary: 100,
              status: 'Active',
              paymentType: 'Salary',
              workPatternType: 'DaysAndHours',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}',
  tags: ['PayrollNz'],
  summary: "Retrieves an employee's salary and wages record by using a unique salary and wage ID",
  operationId: 'getEmployeeSalaryAndWage',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      SalaryAndWagesID: z
        .uuid()
        .openapi({
          param: {
            name: 'SalaryAndWagesID',
            'x-snake': 'salary_and_wages_id',
            in: 'path',
            required: true,
            description: 'Id for single pay template earnings object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            },
          },
          example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SalaryAndWagesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T00:25:03.8641784',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            salaryAndWages: [
              {
                salaryAndWagesID: 'b0026f5a-fa8e-43aa-95e4-cec3c0972e39',
                earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                numberOfUnitsPerWeek: 0,
                ratePerUnit: 25,
                numberOfUnitsPerDay: 0,
                daysPerWeek: 0,
                effectiveFrom: '2019-02-07T00:00:00',
                annualSalary: 25,
                status: 'Active',
                paymentType: 'Hourly',
                workPatternType: 'DaysAndHours',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute = createRoute({
  method: 'put',
  path: '/Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}',
  tags: ['PayrollNz'],
  summary: "Updates an employee's salary and wages record",
  operationId: 'updateEmployeeSalaryAndWage',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      SalaryAndWagesID: z
        .uuid()
        .openapi({
          param: {
            name: 'SalaryAndWagesID',
            'x-snake': 'salary_and_wages_id',
            in: 'path',
            required: true,
            description: 'Id for single pay template earnings object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            },
          },
          example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SalaryAndWageSchema,
          example: {
            earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
            numberOfUnitsPerWeek: 3,
            ratePerUnit: 11,
            numberOfUnitsPerDay: 3,
            daysPerWeek: 1,
            effectiveFrom: '2020-05-15',
            annualSalary: 101,
            status: 'Active',
            paymentType: 'Salary',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SalaryAndWageObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T00:25:11.4976642',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            salaryAndWages: {
              salaryAndWagesID: '1912d614-99d0-43e6-8d63-5b539dcfe358',
              earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
              numberOfUnitsPerWeek: 3,
              ratePerUnit: null,
              numberOfUnitsPerDay: 3,
              daysPerWeek: 1,
              effectiveFrom: '2020-05-15T00:00:00',
              annualSalary: 101,
              status: 'Active',
              paymentType: 'Salary',
              workPatternType: 'RegularWeek',
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute = createRoute({
  method: 'delete',
  path: '/Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}',
  tags: ['PayrollNz'],
  summary: "Deletes an employee's salary and wages record",
  operationId: 'deleteEmployeeSalaryAndWage',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      SalaryAndWagesID: z
        .uuid()
        .openapi({
          param: {
            name: 'SalaryAndWagesID',
            'x-snake': 'salary_and_wages_id',
            in: 'path',
            required: true,
            description: 'Id for single salary and wages object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            },
          },
          example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }),
    }),
  },
  responses: {
    200: {
      description: 'deletion successful',
      content: {
        'application/json': {
          schema: SalaryAndWageObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-27T00:25:11.5391097',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getPayRunsRoute = createRoute({
  method: 'get',
  path: '/PayRuns',
  tags: ['PayrollNz'],
  summary: 'Retrieves pay runs',
  operationId: 'getPayRuns',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      status: z
        .enum(['Draft', 'Posted'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description:
              'By default get payruns will return all the payruns for an organization. You can add GET https://api.xero.com/payroll.xro/2.0/payRuns?statu={PayRunStatus} to filter the payruns by status.',
            schema: { type: 'string', enum: ['Draft', 'Posted'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PayRunsSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T23:01:56.762619',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 1 },
            problem: null,
            payRuns: [
              {
                payRunID: '8ba9831d-38e4-43d4-808e-472a5d195bce',
                payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
                periodStartDate: '2019-06-10T00:00:00',
                periodEndDate: '2019-06-16T00:00:00',
                paymentDate: '2019-06-18T00:00:00',
                totalCost: 6735.81,
                totalPay: 4524.81,
                payRunStatus: 'Draft',
                payRunType: 'Scheduled',
                calendarType: 'Weekly',
                postedDateTime: null,
                payslipMessage: null,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payruns', 'payroll.payruns.read'] }],
})

export const postPayRunsRoute = createRoute({
  method: 'post',
  path: '/PayRuns',
  tags: ['PayrollNz'],
  summary: 'Creates a pay run',
  operationId: 'createPayRun',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: PayRunSchema,
          example: {
            payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
            periodStartDate: '2020-09-08',
            periodEndDate: '2020-09-15',
            paymentDate: '2020-09-20',
            payRunStatus: 'Draft',
            payRunType: 'Scheduled',
            calendarType: 'Weekly',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'created payrun results',
      content: {
        'application/json': {
          schema: PayRunObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-09-10T23:56:16.2964746',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payRun: {
              payRunID: '591dbf2f-786b-4814-8c61-93bebaee47f9',
              payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
              periodStartDate: '2019-06-17T00:00:00',
              periodEndDate: '2019-06-23T00:00:00',
              paymentDate: '2019-06-25T00:00:00',
              totalCost: 9416.7,
              totalPay: 6137.2,
              payRunStatus: 'Draft',
              payRunType: 'Scheduled',
              calendarType: 'Weekly',
              postedDateTime: null,
              paySlips: [
                {
                  paySlipID: '8b3a099c-2309-480a-a6ee-1dc4f4b2668b',
                  employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
                  lastEdited: null,
                  firstName: 'Tony',
                  lastName: 'Starkwpjgdjxdvwson',
                  totalEarnings: 3628.8,
                  grossEarnings: 3628.8,
                  totalPay: 2462.72,
                  totalEmployerTaxes: 18.9,
                  totalEmployeeTaxes: 1057.22,
                  totalDeductions: 0,
                  totalReimbursements: 0,
                  totalStatutoryDeductions: 108.86,
                  totalSuperannuation: 108.86,
                  bacsHash: null,
                  paymentMethod: 'Electronically',
                },
                {
                  paySlipID: '87ab8047-7066-4609-906a-5b6ee1dc1886',
                  employeeID: '1c4f0c92-03ad-43f2-a690-ee51397ece6a',
                  lastEdited: null,
                  firstName: 'GST',
                  lastName: 'Contractor',
                  totalEarnings: 480,
                  grossEarnings: 480,
                  totalPay: 456,
                  totalEmployerTaxes: 0,
                  totalEmployeeTaxes: 96,
                  totalDeductions: 0,
                  totalReimbursements: 72,
                  totalStatutoryDeductions: 0,
                  totalSuperannuation: 0,
                  bacsHash: null,
                  paymentMethod: 'Electronically',
                },
              ],
              payslipMessage: null,
              invalidPayeeIDs: null,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.payruns'] }],
})

export const getPayRunsPayRunIDRoute = createRoute({
  method: 'get',
  path: '/PayRuns/{PayRunID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific pay run by using a unique pay run ID',
  operationId: 'getPayRun',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      PayRunID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'PayRunID',
            'x-snake': 'pay_run_id',
            required: true,
            description: 'Identifier for the pay run',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PayRunObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T23:01:57.3773969',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payRun: {
              payRunID: '8ba9831d-38e4-43d4-808e-472a5d195bce',
              payrollCalendarID: '9aa56064-990f-4ad3-a189-d966d8f6a030',
              periodStartDate: '2019-06-10T00:00:00',
              periodEndDate: '2019-06-16T00:00:00',
              paymentDate: '2019-06-18T00:00:00',
              totalCost: 6735.81,
              totalPay: 4524.81,
              payRunStatus: 'Draft',
              payRunType: 'Scheduled',
              calendarType: 'Weekly',
              postedDateTime: null,
              paySlips: [
                {
                  paySlipID: '51a01760-cf9d-4ba1-bf3a-2065d4f8e073',
                  employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
                  lastEdited: '2020-08-28T21:58:08',
                  firstName: 'Tony',
                  lastName: 'Starkmzamlagmdison',
                  totalEarnings: 648,
                  grossEarnings: 648,
                  totalPay: 525,
                  totalEmployerTaxes: 3.32,
                  totalEmployeeTaxes: 103.56,
                  totalDeductions: 0,
                  totalReimbursements: 0,
                  totalStatutoryDeductions: 19.44,
                  totalSuperannuation: 19.44,
                  bacsHash: null,
                  paymentMethod: 'Electronically',
                },
              ],
              payslipMessage: null,
              invalidPayeeIDs: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payruns', 'payroll.payruns.read'] }],
})

export const getPaySlipsRoute = createRoute({
  method: 'get',
  path: '/PaySlips',
  tags: ['PayrollNz'],
  summary: 'Retrieves payslips',
  operationId: 'getPaySlips',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      PayRunID: z
        .uuid()
        .openapi({
          param: {
            in: 'query',
            required: true,
            name: 'PayRunID',
            'x-snake': 'pay_run_id',
            description:
              'PayrunID which specifies the containing payrun of payslips to retrieve. By default, the API does not group payslips by payrun.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PaySlipsSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T22:55:58.6809685',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 6 },
            problem: null,
            paySlips: [
              {
                paySlipID: '17d88883-686a-400f-9551-34fa366effc4',
                employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
                payRunID: 'be103bd8-321b-419f-8177-48280560771a',
                lastEdited: '2019-09-23T02:13:29',
                firstName: 'Tony',
                lastName: 'Starkmzamlagmdison',
                totalEarnings: 162,
                grossEarnings: 162,
                totalPay: 137.88,
                totalEmployerTaxes: 0.7,
                totalEmployeeTaxes: 19.26,
                totalDeductions: 0,
                totalReimbursements: 0,
                totalStatutoryDeductions: 4.86,
                totalSuperannuation: 4.86,
                bacsHash: null,
                paymentMethod: 'Electronically',
                earningsLines: [
                  {
                    earningsLineID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                    earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                    displayName: 'Ordinary Time',
                    ratePerUnit: 25,
                    numberOfUnits: 6,
                    fixedAmount: null,
                    amount: 150,
                    isLinkedToTimesheet: false,
                    isAverageDailyPayRate: null,
                    isSystemGenerated: true,
                  },
                ],
                leaveEarningsLines: [
                  {
                    earningsLineID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6',
                    earningsRateID: '39b3560a-5d2f-4538-924a-4349dc86396e',
                    displayName: 'Holiday Pay',
                    ratePerUnit: null,
                    numberOfUnits: null,
                    fixedAmount: 12,
                    amount: 12,
                    isLinkedToTimesheet: false,
                    isAverageDailyPayRate: null,
                    isSystemGenerated: true,
                  },
                ],
                timesheetEarningsLines: [],
                deductionLines: [],
                reimbursementLines: [],
                leaveAccrualLines: [
                  { leaveTypeID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6', numberOfUnits: 12 },
                  { leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4', numberOfUnits: 0 },
                  { leaveTypeID: 'f2f994cf-1899-46f3-ad4f-5d92d78c3719', numberOfUnits: 0 },
                  { leaveTypeID: '34129765-11cb-4d8c-b568-84a2219beda3', numberOfUnits: 0 },
                ],
                superannuationLines: [
                  {
                    superannuationTypeID: '563273ea-0dae-4f82-86a4-e0db77c008ea',
                    displayName: 'KiwiSaver',
                    amount: 4.86,
                    fixedAmount: null,
                    percentage: 3,
                    manualAdjustment: false,
                  },
                ],
                paymentLines: [
                  {
                    paymentLineID: 'a300f7c3-e934-4e67-84c5-d8687cf4a2b4',
                    amount: 137.88,
                    accountNumber: '0607050201419000',
                    sortCode: null,
                    accountName: 'Casual Worker',
                  },
                ],
                employeeTaxLines: [
                  {
                    taxLineID: '1d7c6670-c227-4de9-a7fc-fbf7ec16a804',
                    description: null,
                    amount: 19.26,
                    globalTaxTypeID: 11,
                    manualAdjustment: false,
                  },
                ],
                employerTaxLines: [
                  {
                    taxLineID: 'b790f489-9bbf-4979-a987-53dddf8b648f',
                    description: null,
                    amount: 0.7,
                    globalTaxTypeID: 10,
                    manualAdjustment: false,
                  },
                ],
                statutoryDeductionLines: [
                  {
                    statutoryDeductionTypeID: 'b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3',
                    amount: 4.86,
                    fixedAmount: null,
                    manualAdjustment: null,
                  },
                ],
                taxSettings: {
                  periodUnits: 1,
                  periodType: 'weeks',
                  taxCode: 'M',
                  specialTaxRate: null,
                  lumpSumTaxCode: 'SB',
                  lumpSumAmount: null,
                },
                grossEarningsHistory: { daysPaid: 1, unpaidWeeks: 0 },
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payslip', 'payroll.payslip.read'] }],
})

export const getPaySlipsPaySlipIDRoute = createRoute({
  method: 'get',
  path: '/PaySlips/{PaySlipID}',
  tags: ['PayrollNz'],
  summary: 'Retrieves a specific payslip by a unique pay slip ID',
  operationId: 'getPaySlip',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      PaySlipID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'PaySlipID',
            'x-snake': 'pay_slip_id',
            required: true,
            description: 'Identifier for the payslip',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PaySlipObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T22:55:59.3854985',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            paySlip: {
              paySlipID: '17d88883-686a-400f-9551-34fa366effc4',
              employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
              payRunID: 'be103bd8-321b-419f-8177-48280560771a',
              lastEdited: '2019-09-23T02:13:29',
              firstName: 'Tony',
              lastName: 'Starkmzamlagmdison',
              totalEarnings: 162,
              grossEarnings: 162,
              totalPay: 137.88,
              totalEmployerTaxes: 0.7,
              totalEmployeeTaxes: 19.26,
              totalDeductions: 0,
              totalReimbursements: 0,
              totalStatutoryDeductions: 4.86,
              totalSuperannuation: 4.86,
              bacsHash: null,
              paymentMethod: 'Electronically',
              earningsLines: [
                {
                  earningsLineID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  displayName: 'Ordinary Time',
                  ratePerUnit: 25,
                  numberOfUnits: 6,
                  fixedAmount: null,
                  amount: 150,
                  isLinkedToTimesheet: false,
                  isAverageDailyPayRate: null,
                  isSystemGenerated: true,
                },
              ],
              leaveEarningsLines: [
                {
                  earningsLineID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6',
                  earningsRateID: '39b3560a-5d2f-4538-924a-4349dc86396e',
                  displayName: 'Holiday Pay',
                  ratePerUnit: null,
                  numberOfUnits: null,
                  fixedAmount: 12,
                  amount: 12,
                  isLinkedToTimesheet: false,
                  isAverageDailyPayRate: null,
                  isSystemGenerated: true,
                },
              ],
              timesheetEarningsLines: [],
              deductionLines: [],
              reimbursementLines: [],
              leaveAccrualLines: [
                { leaveTypeID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6', numberOfUnits: 12 },
                { leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4', numberOfUnits: 0 },
                { leaveTypeID: 'f2f994cf-1899-46f3-ad4f-5d92d78c3719', numberOfUnits: 0 },
                { leaveTypeID: '34129765-11cb-4d8c-b568-84a2219beda3', numberOfUnits: 0 },
              ],
              superannuationLines: [
                {
                  superannuationTypeID: '563273ea-0dae-4f82-86a4-e0db77c008ea',
                  displayName: 'KiwiSaver',
                  amount: 4.86,
                  fixedAmount: null,
                  percentage: 3,
                  manualAdjustment: false,
                },
              ],
              paymentLines: [
                {
                  paymentLineID: 'a300f7c3-e934-4e67-84c5-d8687cf4a2b4',
                  amount: 137.88,
                  accountNumber: '0607050201419000',
                  sortCode: null,
                  accountName: 'Casual Worker',
                },
              ],
              employeeTaxLines: [
                {
                  taxLineID: '1d7c6670-c227-4de9-a7fc-fbf7ec16a804',
                  description: null,
                  amount: 19.26,
                  globalTaxTypeID: 11,
                  manualAdjustment: false,
                },
              ],
              employerTaxLines: [
                {
                  taxLineID: 'b790f489-9bbf-4979-a987-53dddf8b648f',
                  description: null,
                  amount: 0.7,
                  globalTaxTypeID: 10,
                  manualAdjustment: false,
                },
              ],
              statutoryDeductionLines: [
                {
                  statutoryDeductionTypeID: 'b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3',
                  amount: 4.86,
                  fixedAmount: null,
                  manualAdjustment: null,
                },
              ],
              taxSettings: {
                periodUnits: 1,
                periodType: 'weeks',
                taxCode: 'M',
                specialTaxRate: null,
                lumpSumTaxCode: 'SB',
                lumpSumAmount: null,
              },
              grossEarningsHistory: { daysPaid: 1, unpaidWeeks: 0 },
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payslip', 'payroll.payslip.read'] }],
})

export const putPaySlipsPaySlipIDRoute = createRoute({
  method: 'put',
  path: '/PaySlips/{PaySlipID}',
  tags: ['PayrollNz'],
  summary: 'Creates an employee pay slip',
  operationId: 'updatePaySlipLineItems',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      PaySlipID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'PaySlipID',
            'x-snake': 'pay_slip_id',
            required: true,
            description: 'Identifier for the payslip',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PaySlipSchema,
          example: {
            earningsLines: [
              {
                earningsLineID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                displayName: 'Ordinary Time',
                ratePerUnit: 25,
                numberOfUnits: 0,
                amount: 0,
                isLinkedToTimesheet: false,
                isSystemGenerated: true,
              },
              {
                earningsLineID: '65b83d94-f20f-45e1-85ae-387fcf460c26',
                earningsRateID: '65b83d94-f20f-45e1-85ae-387fcf460c26',
                displayName: 'Salary',
                ratePerUnit: 0,
                numberOfUnits: 8,
                amount: 0,
                isLinkedToTimesheet: false,
                isSystemGenerated: false,
              },
            ],
            leaveEarningsLines: [
              {
                earningsLineID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6',
                earningsRateID: '39b3560a-5d2f-4538-924a-4349dc86396e',
                displayName: 'Holiday Pay',
                fixedAmount: 268.8,
                amount: 268.8,
                isLinkedToTimesheet: false,
                isSystemGenerated: true,
              },
            ],
            deductionLines: [
              { deductionTypeID: 'a3760fe4-68a4-4e38-8326-fe616af7dc74', amount: 100 },
            ],
            leaveAccrualLines: [
              { leaveTypeID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6', numberOfUnits: 268.8 },
              { leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4', numberOfUnits: 0 },
              { leaveTypeID: 'f2f994cf-1899-46f3-ad4f-5d92d78c3719', numberOfUnits: 0 },
              { leaveTypeID: '34129765-11cb-4d8c-b568-84a2219beda3', numberOfUnits: 0 },
            ],
            superannuationLines: [
              {
                superannuationTypeID: '563273ea-0dae-4f82-86a4-e0db77c008ea',
                displayName: 'KiwiSaver',
                amount: 108.86,
                fixedAmount: 3,
                percentage: 3,
                manualAdjustment: false,
              },
            ],
            employeeTaxLines: [
              {
                taxLineID: '1084146b-e890-489c-aed3-06de80f63d84',
                amount: 1057.22,
                globalTaxTypeID: '11',
                manualAdjustment: false,
              },
            ],
            employerTaxLines: [
              {
                taxLineID: '6f9eb8cd-0f4a-440b-939c-bdb0f6ad694c',
                amount: 18.9,
                globalTaxTypeID: '10',
                manualAdjustment: false,
              },
            ],
            statutoryDeductionLines: [
              { statutoryDeductionTypeID: 'b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3', amount: 108.86 },
            ],
            grossEarningsHistory: { daysPaid: 3, unpaidWeeks: 0 },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: PaySlipObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-09-10T17:20:24.2970169',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            paySlip: {
              paySlipID: '51a01760-cf9d-4ba1-bf3a-2065d4f8e073',
              employeeID: '68342973-c405-4b86-b5d3-d7b877c27995',
              payRunID: '8ba9831d-38e4-43d4-808e-472a5d195bce',
              lastEdited: '2020-09-10T17:20:23.7335017',
              firstName: 'Tony',
              lastName: 'Starkwpjgdjxdvwson',
              totalEarnings: 3628.8,
              grossEarnings: 3628.8,
              totalPay: 2362.72,
              totalEmployerTaxes: 18.9,
              totalEmployeeTaxes: 1057.22,
              totalDeductions: 100,
              totalReimbursements: 0,
              totalStatutoryDeductions: 108.86,
              totalSuperannuation: 108.86,
              bacsHash: null,
              paymentMethod: 'Electronically',
              earningsLines: [
                {
                  earningsLineID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  earningsRateID: 'f9d8f5b5-9049-47f4-8541-35e200f750a5',
                  displayName: 'Ordinary Time',
                  ratePerUnit: 25,
                  numberOfUnits: 0,
                  fixedAmount: null,
                  amount: 0,
                  isLinkedToTimesheet: false,
                  isAverageDailyPayRate: null,
                  isSystemGenerated: true,
                },
                {
                  earningsLineID: '65b83d94-f20f-45e1-85ae-387fcf460c26',
                  earningsRateID: '65b83d94-f20f-45e1-85ae-387fcf460c26',
                  displayName: 'Salary',
                  ratePerUnit: 0,
                  numberOfUnits: 8,
                  fixedAmount: null,
                  amount: 0,
                  isLinkedToTimesheet: false,
                  isAverageDailyPayRate: null,
                  isSystemGenerated: false,
                },
              ],
              leaveEarningsLines: [
                {
                  earningsLineID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6',
                  earningsRateID: '39b3560a-5d2f-4538-924a-4349dc86396e',
                  displayName: 'Holiday Pay',
                  ratePerUnit: null,
                  numberOfUnits: null,
                  fixedAmount: 268.8,
                  amount: 268.8,
                  isLinkedToTimesheet: false,
                  isAverageDailyPayRate: null,
                  isSystemGenerated: true,
                },
              ],
              timesheetEarningsLines: [],
              deductionLines: [
                {
                  deductionTypeID: 'a3760fe4-68a4-4e38-8326-fe616af7dc74',
                  displayName: 'KiwiSaver Voluntary Contributions',
                  amount: 100,
                  subjectToTax: null,
                  percentage: null,
                },
              ],
              reimbursementLines: [],
              leaveAccrualLines: [
                { leaveTypeID: '0441497f-5dc7-4cd3-a90d-f2e07e21b2a6', numberOfUnits: 268.8 },
                { leaveTypeID: 'b0b1b79e-2a25-46c2-ad08-ca25ef48d7e4', numberOfUnits: 0 },
                { leaveTypeID: 'f2f994cf-1899-46f3-ad4f-5d92d78c3719', numberOfUnits: 0 },
                { leaveTypeID: '34129765-11cb-4d8c-b568-84a2219beda3', numberOfUnits: 0 },
              ],
              superannuationLines: [
                {
                  superannuationTypeID: '563273ea-0dae-4f82-86a4-e0db77c008ea',
                  displayName: 'KiwiSaver',
                  amount: 108.86,
                  fixedAmount: 3,
                  percentage: 3,
                  manualAdjustment: false,
                },
              ],
              paymentLines: [
                {
                  paymentLineID: '6dc42925-2a11-4041-ac9a-4098e77791d5',
                  amount: 2262.72,
                  accountNumber: '0607050201419000',
                  sortCode: null,
                  accountName: 'Casual Worker',
                },
                {
                  paymentLineID: '30d6d414-426b-417d-8d0d-d05ca0e5bc88',
                  amount: 100,
                  accountNumber: '1234448494848373',
                  sortCode: null,
                  accountName: 'test',
                },
              ],
              employeeTaxLines: [
                {
                  taxLineID: '2faf8f5d-6446-4bea-a2cd-d5cd7e8b9384',
                  description: null,
                  amount: 1057.22,
                  globalTaxTypeID: 11,
                  manualAdjustment: false,
                },
              ],
              employerTaxLines: [
                {
                  taxLineID: 'caa8d4fa-0949-460d-90f5-f43ec9f3db12',
                  description: null,
                  amount: 18.9,
                  globalTaxTypeID: 10,
                  manualAdjustment: false,
                },
              ],
              statutoryDeductionLines: [
                {
                  statutoryDeductionTypeID: 'b5efd8d1-0c93-4a14-a314-b5cba4a4e6b3',
                  amount: 108.86,
                  fixedAmount: null,
                  manualAdjustment: null,
                },
              ],
              taxSettings: {
                periodUnits: 1,
                periodType: 'weeks',
                taxCode: 'M',
                specialTaxRate: null,
                lumpSumTaxCode: 'SB',
                lumpSumAmount: null,
              },
              grossEarningsHistory: { daysPaid: 3, unpaidWeeks: 0 },
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.payslip'] }],
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/Settings',
  tags: ['PayrollNz'],
  summary: 'Retrieves settings',
  operationId: 'getSettings',
  request: { headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SettingsSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T22:18:40.4518638',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            settings: {
              accounts: [
                {
                  accountID: 'fa5cdc43-643b-4ad8-b4ac-3ffe0d0f4488',
                  type: 'PAYELIABILITY',
                  code: '825',
                  name: 'PAYE Payable',
                },
                {
                  accountID: 'e529775e-ea49-4a19-86f0-8d3e1ecda2cd',
                  type: 'WAGESPAYABLE',
                  code: '814',
                  name: 'Wages Payable - Payroll',
                },
                {
                  accountID: '1c91e520-a12b-45cc-8194-99950858e5bf',
                  type: 'WAGESEXPENSE',
                  code: '477',
                  name: 'Salaries',
                },
                {
                  accountID: 'ac993f75-035b-433c-82e0-7b7a2d40802c',
                  type: 'BANK',
                  code: '090',
                  name: 'Business Bank Account',
                },
              ],
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getSettingsTrackingCategoriesRoute = createRoute({
  method: 'get',
  path: '/Settings/TrackingCategories',
  tags: ['PayrollNz'],
  summary: 'Retrieves tracking categories',
  operationId: 'getTrackingCategories',
  request: { headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TrackingCategoriesSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-28T22:18:50.0075482',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            trackingCategories: {
              employeeGroupsTrackingCategoryID: '351953c4-8127-4009-88c3-f9cd8c9cbe9f',
              timesheetTrackingCategoryID: 'f8c0b291-be04-497a-a083-dd9cd19658b5',
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getEmployeesEmployeeIDWorkingPatternsRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/Working-Patterns',
  tags: ['PayrollNz'],
  summary: "Retrieves employee's working patterns",
  operationId: 'getEmployeeWorkingPatterns',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeWorkingPatternsObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:16:15.3542191',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            problem: null,
            payeeWorkingPatterns: [
              {
                payeeWorkingPatternID: 'd0a325df-c9d5-4246-9e95-5172328a729b',
                effectiveFrom: '2020-01-01T00:00:00',
              },
              {
                payeeWorkingPatternID: 'af50c5d4-a0f5-4306-ad61-8505b8ec6286',
                effectiveFrom: '2024-07-09T00:00:00',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDWorkingPatternsRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/Working-Patterns',
  tags: ['PayrollNz'],
  summary: 'Creates an employee working pattern',
  operationId: 'createEmployeeWorkingPattern',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeWorkingPatternWithWorkingWeeksRequestSchema,
          example: {
            effectiveFrom: '2020-01-01T00:00:00',
            workingWeeks: [
              {
                monday: 0,
                tuesday: 3,
                wednesday: 0,
                thursday: 0,
                friday: 0,
                saturday: 0,
                sunday: 0,
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'employee working pattern correctly added',
      content: {
        'application/json': {
          schema: EmployeeWorkingPatternWithWorkingWeeksObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:53:58.8624623',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payeeWorkingPattern: {
              payeeWorkingPatternID: 'd0a325df-c9d5-4246-9e95-5172328a729b',
              effectiveFrom: '2020-01-01T00:00:00',
              workingWeeks: [
                {
                  monday: 0,
                  tuesday: 3,
                  wednesday: 0,
                  thursday: 0,
                  friday: 0,
                  saturday: 0,
                  sunday: 0,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/Working-Patterns/{EmployeeWorkingPatternID}',
  tags: ['PayrollNz'],
  summary: "Retrieves employee's working patterns",
  operationId: 'getEmployeeWorkingPattern',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      EmployeeWorkingPatternID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeWorkingPatternID',
            'x-snake': 'employee_working_pattern_id',
            in: 'path',
            required: true,
            description: 'Employee working pattern id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09f3b118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09f3b118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeWorkingPatternWithWorkingWeeksObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-24T20:16:15.3542191',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payeeWorkingPattern: {
              payeeWorkingPatternID: 'd0a325df-c9d5-4246-9e95-5172328a729b',
              effectiveFrom: '2020-01-01T00:00:00',
              workingWeeks: [
                {
                  monday: 0,
                  tuesday: 3,
                  wednesday: 0,
                  thursday: 0,
                  friday: 0,
                  saturday: 0,
                  sunday: 0,
                },
              ],
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const deleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute = createRoute({
  method: 'delete',
  path: '/Employees/{EmployeeID}/Working-Patterns/{EmployeeWorkingPatternID}',
  tags: ['PayrollNz'],
  summary: "deletes employee's working patterns",
  operationId: 'deleteEmployeeWorkingPattern',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      EmployeeID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeID',
            'x-snake': 'employee_id',
            in: 'path',
            required: true,
            description: 'Employee id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      EmployeeWorkingPatternID: z
        .uuid()
        .openapi({
          param: {
            name: 'EmployeeWorkingPatternID',
            'x-snake': 'employee_working_pattern_id',
            in: 'path',
            required: true,
            description: 'Employee working pattern id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09f3b118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09f3b118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful response',
      content: {
        'application/json': {
          schema: EmployeeLeaveObjectSchema,
          example: {
            id: '00000000-0000-0000-0000-000000000000',
            providerName: 'provider-name',
            dateTimeUTC: '2020-08-26T22:11:10.809249',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})
