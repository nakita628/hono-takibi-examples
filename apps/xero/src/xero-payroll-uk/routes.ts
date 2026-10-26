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
      .openapi({ description: 'Address line 1 for employee home address', example: '123 Main St' }),
    addressLine2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address line 2 for employee home address', example: 'Apt 4' }),
    city: z
      .string()
      .openapi({ description: 'Suburb for employee home address', example: 'Fulham' }),
    postCode: z
      .string()
      .openapi({ description: 'PostCode for employee home address', example: 'SW6 6EY' }),
    countryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country of HomeAddress', example: 'United Kingdom' }),
  })
  .openapi({ required: ['addressLine1', 'city', 'postCode'] })
  .openapi('Address')

const NICategoryLetterSchema = z
  .enum(['A', 'B', 'C', 'F', 'H', 'I', 'J', 'L', 'M', 'S', 'V', 'X', 'Z', 'D', 'E', 'K', 'N'])
  .openapi({ description: "The employee's NI Category letter.", example: 'I' })
  .openapi('NICategoryLetter')

const NICategorySchema = z
  .xor([
    z
      .object({ niCategory: z.enum(['F', 'I', 'L', 'S', 'N', 'E', 'D', 'K']).exactOptional() })
      .openapi({ required: ['workplacePostcode'] }),
    z
      .object({ niCategory: z.literal('V').exactOptional() })
      .openapi({ required: ['dateFirstEmployedAsCivilian'] }),
  ])
  .openapi({ required: ['niCategory', 'workplacePostcode'] })
  .openapi('NICategory')

const EmploymentStatusSchema = z
  .enum(['Employee', 'Worker', 'Unspecified', 'OffPayrollWorker'])
  .openapi({ description: 'The employment status of the employee.', example: 'Employee' })
  .openapi('EmploymentStatus')

const ContractTypeSchema = z
  .enum(['FullTime', 'PartTime', 'ZeroHour', 'Unspecified'])
  .openapi({ description: 'The contract type of the employee.', example: 'FullTime' })
  .openapi('ContractType')

const DevelopmentalRoleDetailsSchema = z
  .object({
    startDate: z.iso
      .date()
      .openapi({
        description: 'The start date of the developmental role',
        example: '2024-12-02',
        'x-is-date': true,
      }),
    endDate: z.iso
      .date()
      .openapi({
        description: 'The end date of the developmental role',
        example: '2024-12-02',
        'x-is-date': true,
      }),
    developmentalRole: z
      .string()
      .openapi({
        description:
          'The developmental role type - "Apprentice" is the only supported role currently',
        example: 'Apprentice',
      }),
    publicKey: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The public key of the developmental role. Public key is required if the intention is to edit an existing developmental role. If no key is supplied a new developmental role will be created',
      }),
  })
  .openapi({ required: ['startDate', 'endDate', 'developmentalRole'] })
  .openapi('DevelopmentalRoleDetails')

const ContractsSchema = z
  .object({
    startDate: z.iso
      .date()
      .openapi({
        description:
          'The contract start date of the employee. This will be locked once an employee has been paid and cannot be changed (YYYY-MM-DD)',
        example: '2024-12-02',
        'x-is-date': true,
      }),
    employmentStatus: EmploymentStatusSchema,
    contractType: ContractTypeSchema,
    publicKey: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The public key of the contract. Public key is required if the intention is to edit an existing contract. If no key is supplied a new contract will be created',
      }),
    isFixedTerm: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'describes whether the contract is fixed term (required if trying to create Fixed term contract)',
      }),
    fixedTermEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The fixed term end date of the employee. Not required if isFixedTerm is false or not provided (required if trying to create Fixed term contract)',
        example: '2025-11-01',
        'x-is-date': true,
      }),
    developmentalRoleDetails: DevelopmentalRoleDetailsSchema.exactOptional(),
  })
  .openapi({ required: ['startDate', 'employmentStatus', 'contractType'] })
  .openapi('Contracts')

const EmployeeSchema = z
  .object({
    employeeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero unique identifier for the employee',
        example: 'd90457c4-f1be-4f2e-b4e3-f766390a7e30',
      }),
    title: z.string().openapi({ description: 'Title of the employee', example: 'Mrs' }),
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
    gender: z.enum(['M', 'F']).openapi({ description: 'The employee’s gender', example: 'F' }),
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
    niCategory: NICategoryLetterSchema.exactOptional().openapi({ deprecated: true }),
    niCategories: z
      .array(NICategorySchema)
      .exactOptional()
      .openapi({ description: "The employee's NI categories" }),
    nationalInsuranceNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'National insurance number of the employee', example: 'AB123456C' }),
    isOffPayrollWorker: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the employee is an off payroll worker' }),
    contracts: z
      .array(ContractsSchema)
      .exactOptional()
      .openapi({ description: "The employee's contracts" }),
  })
  .openapi({ required: ['title', 'firstName', 'lastName', 'dateOfBirth', 'gender', 'address'] })
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
    startDate: z.iso
      .date()
      .openapi({ description: 'Start date of the employment (YYYY-MM-DD)', 'x-is-date': true }),
    employeeNumber: z
      .string()
      .openapi({ description: 'The employment number of the employee', example: 7 }),
    niCategory: NICategoryLetterSchema.exactOptional().openapi({ deprecated: true }),
    niCategories: z
      .array(NICategorySchema)
      .openapi({ description: "The employee's NI categories" }),
    contracts: z
      .array(ContractsSchema)
      .exactOptional()
      .openapi({ description: "The employee's contracts" }),
  })
  .openapi({ required: ['payrollCalendarID', 'startDate', 'employeeNumber', 'niCategories'] })
  .openapi('Employment')

const EmploymentObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    employment: EmploymentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmploymentObject')

const EmployeeTaxSchema = z
  .object({
    starterType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Starter type.', example: 'New Employee with P45' }),
    starterDeclaration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Starter declaration.',
        example: 'B.) This is currently their only job',
      }),
    taxCode: z.string().exactOptional().openapi({ description: 'The Tax code.', example: '1185L' }),
    w1M1: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Describes whether the tax settings is W1M1' }),
    previousTaxablePay: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The previous taxable pay', 'x-is-money': true }),
    previousTaxPaid: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The tax amount previously paid', 'x-is-money': true }),
    studentLoanDeduction: z
      .string()
      .exactOptional()
      .openapi({
        description: "The employee's student loan deduction type",
        example: 'Plan Type 2',
      }),
    hasPostGraduateLoans: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Describes whether the employee has post graduate loans' }),
    isDirector: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Describes whether the employee is director' }),
    directorshipStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The directorship start date', 'x-is-date': true }),
    nicCalculationMethod: z
      .string()
      .exactOptional()
      .openapi({ description: 'NICs calculation method', example: 'Annualized' }),
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

const EmployeeOpeningBalancesSchema = z
  .object({
    statutoryAdoptionPay: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The total accumulated statutory adoption pay amount received by the employee for current fiscal year to date',
        'x-is-money': true,
      }),
    statutoryMaternityPay: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The total accumulated statutory maternity pay amount received by the employee for current fiscal year to date',
        'x-is-money': true,
      }),
    statutoryPaternityPay: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The total accumulated statutory paternity pay amount received by the employee for current fiscal year to date',
        'x-is-money': true,
      }),
    statutorySharedParentalPay: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The total accumulated statutory shared parental pay amount received by the employee for current fiscal year to date',
        'x-is-money': true,
      }),
    statutorySickPay: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The total accumulated statutory sick pay amount received by the employee for current fiscal year to date',
        'x-is-money': true,
      }),
    priorEmployeeNumber: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The unique employee number issued by the employee's former employer",
      }),
  })
  .openapi({ required: [] })
  .openapi('EmployeeOpeningBalances')

const EmployeeOpeningBalancesObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    openingBalances: EmployeeOpeningBalancesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeOpeningBalancesObject')

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
      .openapi({ description: 'The Number of Units for the leave' }),
    periodStatus: z
      .enum(['Approved', 'Completed'])
      .exactOptional()
      .openapi({ description: 'Period Status' }),
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
      .openapi({ description: 'The employees current balance for the corresponding leave type.' }),
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
      .enum([
        'Sick',
        'Adoption',
        'Maternity',
        'Paternity',
        'Sharedparental',
        'Bereavement',
        'NeonatalCare',
      ])
      .exactOptional()
      .openapi({ description: 'The type of statutory leave' }),
    balanceRemaining: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The balance remaining for the corresponding leave type as of specified date.',
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
      .enum([
        'Sick',
        'Adoption',
        'Maternity',
        'Paternity',
        'Sharedparental',
        'Bereavement',
        'NeonatalCare',
        'BereavementNire',
      ])
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
      .openapi({ description: 'The amount of requested time (in weeks)' }),
    entitlementWeeksQualified: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The amount of statutory sick leave time off (in weeks) that is available to take at the time the leave was requested',
      }),
    entitlementWeeksRemaining: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A calculated amount of time (in weeks) that remains for the statutory sick leave period',
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
    leaveTypeID: z.uuid().openapi({ description: 'The Xero identifier for leave type' }),
    scheduleOfAccrual: z
      .enum(['BeginningOfCalendarYear', 'OnAnniversaryDate', 'EachPayPeriod', 'OnHourWorked'])
      .openapi({ description: 'The schedule of accrual' }),
    hoursAccruedAnnually: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of hours accrued for the leave annually. This is 0 when the scheduleOfAccrual chosen is "OnHourWorked"',
      }),
    maximumToAccrue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The maximum number of hours that can be accrued for the leave' }),
    openingBalance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The initial number of hours assigned when the leave was added to the employee',
      }),
    rateAccruedHourly: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of hours added to the leave balance for every hour worked by the employee. This is normally 0, unless the scheduleOfAccrual chosen is "OnHourWorked"',
      }),
    scheduleOfAccrualDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date when an employee becomes entitled to their accrual. Only applicable when scheduleOfAccrual is "OnAnniversaryDate"',
        example: '2024-04-01',
        'x-is-date': true,
      }),
  })
  .openapi({ required: ['leaveTypeID', 'scheduleOfAccrual'] })
  .openapi('EmployeeLeaveType')

const EmployeeLeaveTypesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    leaveTypes: z.array(EmployeeLeaveTypeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeeLeaveTypes')

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
    earningTemplates: EarningsTemplatesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmployeePayTemplates')

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
    id: z.uuid().exactOptional().openapi({ description: 'unique identifier in Xero' }),
    name: z.string().openapi({ description: 'Name of the employer pension' }),
    category: z
      .enum(['StakeholderPension', 'Other'])
      .openapi({ description: 'Category type of the employer pension' }),
    liabilityAccountId: z.uuid().openapi({ description: 'Xero identifier for Liability Account' }),
    expenseAccountId: z.uuid().openapi({ description: 'Xero identifier for Expense Account' }),
    standardAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Standard amount of the employer pension', 'x-is-money': true }),
    percentage: z
      .float64()
      .openapi({ description: 'Percentage of gross of the employer pension', 'x-is-money': true }),
    calculationType: z
      .enum(['FixedAmount', 'PercentageOfGross'])
      .openapi({
        description: 'Calculation Type of the employer pension (FixedAmount or PercentageOfGross).',
      }),
    currentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of a record is active or not.' }),
    subjectToNIC: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of subject To NIC' }),
    subjectToPension: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of subject To pension' }),
    subjectToTax: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of subject To Tax' }),
    isCalculatingOnQualifyingEarnings: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of calculating on qualifying earnings' }),
    showBalanceToEmployee: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'display the balance to employee' }),
  })
  .openapi({
    required: [
      'name',
      'category',
      'liabilityAccountId',
      'expenseAccountId',
      'calculationType',
      'percentage',
    ],
  })
  .openapi('Benefit')

const BenefitsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    benefits: z.array(BenefitSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Benefits')

const BenefitObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    benefit: BenefitSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BenefitObject')

const DeductionSchema = z
  .object({
    deductionId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for Deduction' }),
    deductionName: z.string().openapi({ description: 'Name of the deduction' }),
    deductionCategory: z
      .enum([
        'CapitalContributions',
        'ChildCareVoucher',
        'MakingGood',
        'PostgraduateLoanDeductions',
        'PrivateUsePayments',
        'SalarySacrifice',
        'StakeholderPension',
        'StakeholderPensionPostTax',
        'StudentLoanDeductions',
        'UkOther',
      ])
      .exactOptional()
      .openapi({ description: 'Deduction Category type' }),
    liabilityAccountId: z.uuid().openapi({ description: 'Xero identifier for Liability Account' }),
    currentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of a record is active or not.' }),
    standardAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Standard amount of the deduction', 'x-is-money': true }),
    reducesSuperLiability: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of reduces super liability' }),
    reducesTaxLiability: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of reduces tax liability' }),
    calculationType: z
      .enum(['FixedAmount', 'PercentageOfGross'])
      .exactOptional()
      .openapi({
        description: 'determine the calculation type whether fixed amount or percentage of gross',
      }),
    percentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Percentage of gross', 'x-is-money': true }),
    subjectToNIC: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of subject To NIC' }),
    subjectToTax: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of subject To Tax' }),
    isReducedByBasicRate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of reduced by basic rate applicable or not' }),
    applyToPensionCalculations: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier for apply to pension calculations' }),
    isCalculatingOnQualifyingEarnings: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of calculating on qualifying earnings' }),
    isPension: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifier of applicable for pension or not' }),
  })
  .openapi({ required: ['deductionName', 'liabilityAccountId'] })
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
    'AdditionalStudentLoan',
    'ChildSupport',
    'CourtFines',
    'Creditor',
    'FederalLevy',
    'InlandRevenueArrears',
    'KiwiSaver',
    'MsdRepayments',
    'NonPriorityOrder',
    'PriorityOrder',
    'TableBased',
    'StudentLoan',
    'VoluntaryStudentLoan',
    'USChildSupport',
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

const StatutoryDeductionsSchema = z.array(StatutoryDeductionSchema).openapi('StatutoryDeductions')

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
        'BackPay',
        'Bonus',
        'Commission',
        'LumpSum',
        'OtherEarnings',
        'OvertimeEarnings',
        'RegularEarnings',
        'StatutoryAdoptionPay',
        'StatutoryAdoptionPayNonPensionable',
        'StatutoryBereavementPay',
        'StatutoryMaternityPay',
        'StatutoryMaternityPayNonPensionable',
        'StatutoryPaternityPay',
        'StatutoryPaternityPayNonPensionable',
        'StatutoryParentalBereavementPayNonPensionable',
        'StatutorySharedParentalPay',
        'StatutorySharedParentalPayNonPensionable',
        'StatutorySickPay',
        'StatutorySickPayNonPensionable',
        'TipsNonDirect',
        'TipsDirect',
        'TerminationPay',
        'StatutoryNeonatalCarePay',
        'StatutoryNeonatalCarePayNonPensionable',
        'StatutoryBereavementPayNorthernIreland',
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
    leaveID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for the leave' }),
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
    isStatutoryLeave: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Shows whether the leave type is a statutory leave type or not' }),
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
      .openapi({ description: 'The Number of Units of the Timesheet Line' }),
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
      .enum(['Draft', 'Approved', 'Completed'])
      .exactOptional()
      .openapi({ description: 'Status of the timesheet' }),
    totalHours: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Total Hours of the Timesheet' }),
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

const PayRunCalendarSchema = z
  .object({
    payrollCalendarID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero unique identifier for the payroll calendar' }),
    name: z.string().openapi({ description: 'Name of the calendar' }),
    calendarType: z
      .enum(['Weekly', 'Fortnightly', 'FourWeekly', 'Monthly', 'Annual', 'Quarterly'])
      .openapi({ description: 'Type of the calendar' }),
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
  })
  .openapi({ required: ['accountName', 'accountNumber', 'sortCode'] })
  .openapi('BankAccount')

const PaymentMethodSchema = z
  .object({
    paymentMethod: z
      .enum(['Cheque', 'Electronically', 'Manual'])
      .openapi({ description: 'The payment method code' }),
    bankAccounts: z.array(BankAccountSchema).exactOptional(),
  })
  .openapi({ required: ['paymentMethod'] })
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
      }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The rate of each unit for the corresponding salary and wages' }),
    numberOfUnitsPerDay: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The Number of Units per day for the corresponding salary and wages',
      }),
    effectiveFrom: z.iso
      .date()
      .openapi({
        description: 'The effective date of the corresponding salary and wages',
        'x-is-date': true,
      }),
    annualSalary: z.float64().openapi({ description: 'The annual salary' }),
    status: z
      .enum(['Active', 'Pending', 'History'])
      .openapi({ description: 'The current status of the corresponding salary and wages' }),
    paymentType: z
      .enum(['Salary', 'Hourly'])
      .openapi({ description: 'The type of the payment of the corresponding salary and wages' }),
  })
  .openapi({
    required: [
      'earningsRateID',
      'numberOfUnitsPerWeek',
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
      .openapi({ description: 'Rate per unit for earnings line' }),
    numberOfUnits: z.float64().exactOptional().openapi({ description: 'Earnings number of units' }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed',
      }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the earnings line.' }),
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
  })
  .openapi({ required: [] })
  .openapi('EarningsLine')

const EarningsLinesSchema = z.array(EarningsLineSchema).openapi('EarningsLines')

const LeaveEarningsLineSchema = z
  .object({
    earningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll leave earnings rate' }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Rate per unit for leave earnings line' }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Leave earnings number of units' }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Leave earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed',
      }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the earnings line.' }),
    isLinkedToTimesheet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies if the leave earnings is taken from the timesheet. False for leave earnings line',
      }),
  })
  .openapi({ required: [] })
  .openapi('LeaveEarningsLine')

const LeaveEarningsLinesSchema = z.array(LeaveEarningsLineSchema).openapi('LeaveEarningsLines')

const TimesheetEarningsLineSchema = z
  .object({
    earningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll timesheet earnings rate' }),
    ratePerUnit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Rate per unit for timesheet earnings line' }),
    numberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Timesheet earnings number of units' }),
    fixedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Timesheet earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed',
      }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the timesheet earnings line.' }),
    isLinkedToTimesheet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies if the timesheet earnings is taken from the timesheet. False for leave earnings line',
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
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the deduction line' }),
    subjectToTax: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies if the deduction is subject to tax' }),
    percentage: z.float64().exactOptional().openapi({ description: 'Deduction rate percentage' }),
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
      .openapi({ description: 'Leave accrual number of units' }),
  })
  .openapi({ required: [] })
  .openapi('LeaveAccrualLine')

const LeaveAccrualLinesSchema = z.array(LeaveAccrualLineSchema).openapi('LeaveAccrualLines')

const BenefitLineSchema = z
  .object({
    benefitTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll benefit type' }),
    displayName: z.string().exactOptional().openapi({ description: 'Benefit display name' }),
    amount: z.float64().exactOptional().openapi({ description: 'The amount of the benefit line.' }),
    fixedAmount: z.float64().exactOptional().openapi({ description: 'Benefit fixed amount' }),
    percentage: z.float64().exactOptional().openapi({ description: 'Benefit rate percentage' }),
  })
  .openapi({ required: [] })
  .openapi('BenefitLine')

const BenefitLinesSchema = z.array(BenefitLineSchema).openapi('BenefitLines')

const PaymentLineSchema = z
  .object({
    paymentLineID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll payment line' }),
    amount: z.float64().exactOptional().openapi({ description: 'The amount of the payment line' }),
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
    isEmployerTax: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies if the amount is paid for by the employee or employer. True if employer pays the tax',
      }),
    amount: z.float64().exactOptional().openapi({ description: 'The amount of the tax line' }),
    globalTaxTypeID: z.string().exactOptional().openapi({ description: 'Tax type ID' }),
    manualAdjustment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies if the tax line is a manual adjustment' }),
  })
  .openapi({ required: [] })
  .openapi('TaxLine')

const TaxLinesSchema = z.array(TaxLineSchema).openapi('TaxLines')

const CourtOrderLineSchema = z
  .object({
    courtOrderTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier for payroll court order type' }),
    amount: z.float64().exactOptional().openapi({ description: 'Amount' }),
  })
  .openapi({ required: [] })
  .openapi('CourtOrderLine')

const CourtOrderLinesSchema = z.array(CourtOrderLineSchema).openapi('CourtOrderLines')

const PayslipSchema = z
  .object({
    paySlipID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for a Payslip' }),
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
        description: 'Total earnings before any deductions. Same as gross earnings for UK.',
      }),
    grossEarnings: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total earnings before any deductions. Same as total earnings for UK.',
      }),
    totalPay: z.float64().exactOptional().openapi({ description: 'The employee net pay' }),
    totalEmployerTaxes: z
      .float64()
      .exactOptional()
      .openapi({ description: "The employer's tax obligation" }),
    totalEmployeeTaxes: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The part of an employee's earnings that is deducted for tax purposes",
      }),
    totalDeductions: z
      .float64()
      .exactOptional()
      .openapi({
        description: "Total amount subtracted from an employee's earnings to reach total pay",
      }),
    totalReimbursements: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total reimbursements are nontaxable payments to an employee used to repay out-of-pocket expenses when the person incurs those expenses through employment',
      }),
    totalCourtOrders: z
      .float64()
      .exactOptional()
      .openapi({
        description: "Total amounts required by law to subtract from the employee's earnings",
      }),
    totalBenefits: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Benefits (also called fringe benefits, perquisites or perks) are various non-earnings compensations provided to employees in addition to their normal earnings or salaries',
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
    benefitLines: BenefitLinesSchema.exactOptional(),
    paymentLines: PaymentLinesSchema.exactOptional(),
    employeeTaxLines: TaxLinesSchema.exactOptional(),
    employerTaxLines: TaxLinesSchema.exactOptional(),
    courtOrderLines: CourtOrderLinesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Payslip')

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
    totalCost: z.float64().exactOptional().openapi({ description: 'Total cost of the pay run' }),
    totalPay: z.float64().exactOptional().openapi({ description: 'Total pay of the pay run' }),
    payRunStatus: z
      .enum(['Draft', 'Posted'])
      .exactOptional()
      .openapi({ description: 'Pay run status' }),
    payRunType: z
      .enum(['Scheduled', 'Unscheduled', 'EarlierYearUpdate'])
      .exactOptional()
      .openapi({ description: 'Pay run type' }),
    calendarType: z
      .enum(['Weekly', 'Fortnightly', 'FourWeekly', 'Monthly', 'Annual', 'Quarterly'])
      .exactOptional()
      .openapi({ description: 'Calendar type of the pay run' }),
    postedDateTime: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Posted date time of the pay run', 'x-is-date': true }),
    paySlips: z.array(PayslipSchema).exactOptional(),
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

const PayslipObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    paySlip: PayslipSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayslipObject')

const PayslipsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    paySlips: z.array(PayslipSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Payslips')

const AccountSchema = z
  .object({
    accountID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for Settings.' }),
    type: z
      .enum([
        'BANK',
        'EMPLOYERSNIC',
        'NICLIABILITY',
        'PAYEECONTRIBUTION',
        'PAYELIABILITY',
        'WAGESPAYABLE',
        'WAGESEXPENSE',
      ])
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
  tags: ['PayrollUk'],
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
            description:
              'Filter by first name, lastname, and/or whether they are an off-payroll worker',
            schema: { type: 'string' },
            example: 'firstName==John,lastName==Smith,isOffPayrollWorker==false',
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
            id: '1a14e877-773d-4cd3-b253-f559a4b4be65',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-24T18:43:43.860852',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 3 },
            problem: null,
            employees: [
              {
                employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
                firstName: 'Jack',
                lastName: 'Allan',
                dateOfBirth: '1987-12-23T00:00:00Z',
                gender: 'M',
                email: null,
                phoneNumber: null,
                startDate: '2020-02-03T00:00:00',
                address: {
                  addressLine1: '171 Midsummer Boulevard',
                  city: 'Milton Keynes',
                  county: null,
                  countryName: 'UNITED KINGDOM',
                  postCode: 'MK9 1EB',
                },
                payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
                updatedDateUTC: '2020-02-13T16:23:31',
                createdDateUTC: '2020-02-10T10:00:24',
                isOffPayrollWorker: false,
                contracts: [],
              },
              {
                employeeID: '67e545d4-e8a6-4f98-9f63-85c2383dfe12',
                firstName: 'Charlotte',
                lastName: 'Danes',
                dateOfBirth: '1993-10-24T00:00:00Z',
                gender: 'F',
                email: null,
                phoneNumber: null,
                startDate: '2020-02-03T00:00:00',
                address: {
                  addressLine1: '171 Midsummer Blvd',
                  city: 'Milton Keynes',
                  county: null,
                  countryName: 'UNITED KINGDOM',
                  postCode: 'MK9 1EB',
                },
                payrollCalendarID: '5e813d9e-949c-461f-8a89-e9ee8955a254',
                updatedDateUTC: '2020-02-13T16:48:51',
                createdDateUTC: '2020-02-13T16:32:12',
                isOffPayrollWorker: false,
                contracts: [
                  {
                    publicKey: 'b4d71548-2800-4fb9-be6c-d496a617428c',
                    isFixedTerm: false,
                    employmentStatus: 'Employee',
                    contractType: 'PartTime',
                    startDate: '2020-02-03T00:00:00',
                    fixedTermEndDate: null,
                  },
                ],
              },
              {
                employeeID: 'eb4a0c3b-b0d6-440d-bccc-348b7dc92321',
                firstName: 'Chelsea',
                lastName: 'Serati',
                dateOfBirth: '1976-02-16T00:00:00Z',
                gender: 'F',
                email: null,
                phoneNumber: null,
                startDate: '2019-07-01T00:00:00',
                address: {
                  addressLine1: '171 Midsummer Boulevard',
                  city: 'Milton Keynes',
                  county: null,
                  countryName: 'UNITED KINGDOM',
                  postCode: 'MK9 1EB',
                },
                payrollCalendarID: 'd45bc68f-59d6-4000-929d-1058dcfa79e1',
                updatedDateUTC: '2020-02-13T16:53:12',
                createdDateUTC: '2020-02-13T16:46:41',
                isOffPayrollWorker: false,
                contracts: [
                  {
                    publicKey: '3a8243d5-a14a-4c06-a71b-930194928ee9',
                    isFixedTerm: false,
                    employmentStatus: 'Worker',
                    contractType: 'PartTime',
                    startDate: '2019-07-01T00:00:00',
                    fixedTermEndDate: null,
                  },
                  {
                    publicKey: 'ce4fe24d-bb85-4b17-a461-3e56917457d6',
                    isFixedTerm: true,
                    employmentStatus: 'Employee',
                    contractType: 'FullTime',
                    startDate: '2020-07-01T00:00:00',
                    fixedTermEndDate: '2026-08-01T00:00:00',
                    developmentalRoleDetails: {
                      developmentalRolePublicKey: '05bceb91-89c0-4ecc-864c-32a874143770',
                      startDate: '2020-07-01T00:00:00',
                      endDate: '2026-06-30T00:00:00',
                      developmentalRole: 'Apprentice',
                    },
                  },
                ],
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
  tags: ['PayrollUk'],
  summary: 'Creates employees',
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
            lastName: 'Fancy',
            dateOfBirth: '1999-01-01T00:00:00Z',
            gender: 'M',
            email: 'mike@starkindustries.com',
            isOffPayrollWorker: false,
            address: { addressLine1: '171 Midsummer', city: 'Milton Keyness', postCode: 'MK9 1EB' },
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
            id: '660ff206-fc4a-42f5-8f7d-de886bc2a3d3',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-25T03:12:10.406476',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employee: {
              employeeID: '316146c7-26a4-4065-b9bd-346d0557ea96',
              title: 'Mr',
              firstName: 'Mike',
              lastName: 'Fancy',
              dateOfBirth: '1999-01-01',
              gender: 'M',
              email: 'mike@starkindustries.com',
              phoneNumber: null,
              startDate: null,
              nationalInsuranceNumber: null,
              isOffPayrollWorker: false,
              address: {
                addressLine1: '171 Midsummer',
                city: 'Milton Keyness',
                county: null,
                countryName: 'UNITED KINGDOM',
                postCode: 'MK9 1EB',
              },
              payrollCalendarID: null,
              updatedDateUTC: '2020-03-25T03:12:10Z',
              createdDateUTC: '2020-03-25T03:12:10Z',
              niCategory: null,
              employeeNumber: null,
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
  tags: ['PayrollUk'],
  summary: 'Retrieves specific employees by using a unique employee ID',
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
            id: '9414291b-a8c6-08fa-b165-9b30b1e6aab5',
            providerName: '!YLT5Y',
            dateTimeUTC: '2018-04-09T05:15:18.1011141',
            httpStatusCode: 'OK',
            pagination: null,
            employee: {
              employeeID: 'd17e008e-3381-45c0-b50c-2fab7757e503',
              title: 'Mr.',
              firstName: 'Edgar',
              lastName: 'Allan Po',
              dateOfBirth: '1985-03-24',
              gender: 'M',
              email: 'tester1@gmail.com',
              phoneNumber: '0400123456',
              nationalInsuranceNumber: 'AB123456C',
              isOffPayrollWorker: false,
              address: {
                addressLine1: '171 Midsummer',
                city: 'Milton Keyness',
                county: null,
                countryName: 'UNITED KINGDOM',
                postCode: 'MK9 1EB',
              },
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              updatedDateUTC: '2017-05-12T10:00:24Z',
              createdDateUTC: '2017-05-12T10:00:24Z',
              niCategories: [
                { startDate: '2020-05-01', niCategory: 'I', workplacePostcode: 'SW1A 1AA' },
                {
                  startDate: '2020-05-02',
                  niCategory: 'F',
                  niCategoryID: 1,
                  dateFirstEmployedAsCivilian: '2020-05-01',
                  workplacePostcode: 'SW1A 1AA',
                },
              ],
              employeeNumber: '2',
              contracts: [
                {
                  publicKey: 'a3d71548-2800-4fb9-be6c-d496a617428c',
                  isFixedTerm: false,
                  employmentStatus: 'Employee',
                  contractType: 'PartTime',
                  startDate: '2020-05-01T00:00:00',
                  fixedTermEndDate: null,
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

export const putEmployeesEmployeeIDRoute = createRoute({
  method: 'put',
  path: '/Employees/{EmployeeID}',
  tags: ['PayrollUk'],
  summary: "Updates a specific employee's detail",
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
            title: 'Mr.',
            firstName: 'TestDataUK',
            lastName: 'Tester',
            dateOfBirth: '1992-11-22T00:00:00Z',
            gender: 'M',
            email: 'tester@gmail.com',
            phoneNumber: '0400123456',
            isOffPayrollWorker: false,
            address: { addressLine1: '171 Midsummer', city: 'Milton Keyness', postCode: 'MK9 1EB' },
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
            id: '9414291b-a8c6-08fa-b165-9b30b1e6aab5',
            providerName: '!YLT5Y',
            dateTimeUTC: '2018-04-09T05:10:51.3504472',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employee: {
              employeeID: '07f0f9fc-cc95-46ac-9a8a-aa03779f2bde',
              title: 'Mr',
              firstName: 'Mike',
              lastName: 'Johnllsbkrhwopson',
              dateOfBirth: '1999-01-01',
              gender: 'M',
              email: '84044@starkindustries.com',
              phoneNumber: '0400123456',
              startDate: '2020-02-03',
              nationalInsuranceNumber: null,
              isOffPayrollWorker: false,
              address: {
                addressLine1: '101 Green St',
                city: 'San Francisco',
                county: null,
                countryName: null,
                postCode: '6TGR4F',
              },
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              updatedDateUTC: '2020-03-25T17:03:50Z',
              createdDateUTC: '2020-02-10T10:00:24Z',
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
  tags: ['PayrollUk'],
  summary: 'Creates employment detail for a specific employee using a unique employee ID',
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
            payrollCalendarID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
            startDate: '2024-04-01',
            niCategories: [
              { niCategory: 'I', startDate: '2020-05-01', workplacePostcode: 'SW1A 1AA' },
            ],
            employeeNumber: '123ABC',
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
            id: '0160a355-1e6d-4fdc-9532-c0857feaa515',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-26T18:09:11.6235442',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employment: {
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              startDate: '2020-04-01T00:00:00',
              niCategories: [
                {
                  niCategory: 'I',
                  startDate: '2020-05-01',
                  niCategoryID: 594,
                  dateFirstEmployedAsCivilian: '2020-05-01',
                  workplacePostcode: 'SW1A 1AA',
                },
              ],
              employeeNumber: '123ABC',
              contracts: [
                {
                  publicKey: 'ddd71548-2800-4fb9-be6c-d496a617428c',
                  isFixedTerm: false,
                  employmentStatus: 'Employee',
                  contractType: 'FullTime',
                  startDate: '2020-04-01T00:00:00',
                  fixedTermEndDate: null,
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

export const getEmployeesEmployeeIDTaxRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/Tax',
  tags: ['PayrollUk'],
  summary: 'Retrieves tax records for a specific employee using a unique employee ID',
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
            id: 'a8577248-393a-4e7a-8a03-b43b90800b69',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-27T00:14:41.2462046',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            employeeTax: {
              starterType: 'New Employee with P45',
              starterDeclaration: 'B.) This is currently their only job',
              taxCode: '1185L',
              w1M1: false,
              previousTaxablePay: 2000,
              previousTaxPaid: 200,
              studentLoanDeduction: null,
              hasPostGraduateLoans: false,
              isDirector: false,
              directorshipStartDate: null,
              nicCalculationMethod: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const getEmployeesEmployeeIDUkopeningbalancesRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/ukopeningbalances',
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's openingbalances using a unique employee ID",
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
            id: 'ab1c33de-1927-4210-bf4f-2a55965cb4a9',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-27T01:13:00.6591505',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            openingBalances: {
              statutoryAdoptionPay: 10,
              statutoryMaternityPay: 10,
              statutoryPaternityPay: 10,
              statutorySharedParentalPay: 10,
              statutorySickPay: 10,
              priorEmployeeNumber: '10.0',
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const putEmployeesEmployeeIDUkopeningbalancesRoute = createRoute({
  method: 'put',
  path: '/Employees/{EmployeeID}/ukopeningbalances',
  tags: ['PayrollUk'],
  summary: "Updates a specific employee's opening balances",
  operationId: 'updateEmployeeOpeningBalances',
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
          example: {
            statutoryAdoptionPay: 20,
            statutoryMaternityPay: 20,
            statutoryPaternityPay: 20,
            statutorySharedParentalPay: 20,
            statutorySickPay: 20,
            priorEmployeeNumber: 20,
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
          schema: EmployeeOpeningBalancesObjectSchema,
          example: {
            id: '21953776-783c-426c-bf15-cbde997839c4',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-27T15:45:09.7078637',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            openingBalances: null,
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

export const postEmployeesEmployeeIDUkopeningbalancesRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/ukopeningbalances',
  tags: ['PayrollUk'],
  summary: 'Creates an opening balance for a specific employee',
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
          example: {
            statutoryAdoptionPay: 10,
            statutoryMaternityPay: 10,
            statutoryPaternityPay: 10,
            statutorySharedParentalPay: 10,
            statutorySickPay: 10,
            priorEmployeeNumber: 10,
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
          schema: EmployeeOpeningBalancesObjectSchema,
          example: {
            id: '0d30ef37-2fb4-4925-b563-faaee361c9cd',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-27T01:06:14.47566',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            openingBalances: null,
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
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's leave records using a unique employee ID",
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
            id: 'e4d42712-4876-4b32-987d-1f62538089de',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-27T15:58:16.0929399',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leave: [
              {
                leaveID: '384bf62a-5884-484d-b675-a3ad9c662f8e',
                leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c',
                description: 'Vacation to Majorca',
                startDate: '2020-02-17T00:00:00',
                endDate: '2020-02-21T00:00:00',
                periods: [
                  {
                    periodStartDate: '2020-02-17T00:00:00',
                    periodEndDate: '2020-02-23T00:00:00',
                    numberOfUnits: 40,
                    periodStatus: 'Approved',
                  },
                ],
                updatedDateUTC: '2020-02-10T10:15:53',
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
  tags: ['PayrollUk'],
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
            leaveTypeID: '1d2778ee-86ea-45c0-bbf8-1045485f6b3f',
            description: 'Creating a Description',
            startDate: '2020-03-24',
            endDate: '2020-03-26',
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
            id: 'ef91410a-2be1-42cc-86db-e625344a82e9',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-31T04:32:57.0247198',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leave: {
              leaveID: 'bdfedc6b-363b-4801-8ba6-9a074d400b31',
              leaveTypeID: '1d2778ee-86ea-45c0-bbf8-1045485f6b3f',
              description: 'Creating a Description',
              startDate: '2020-03-24T00:00:00',
              endDate: '2020-03-26T00:00:00',
              periods: [
                {
                  periodStartDate: '2020-03-23T00:00:00',
                  periodEndDate: '2020-03-29T00:00:00',
                  numberOfUnits: 24,
                  periodStatus: 'Approved',
                },
              ],
              updatedDateUTC: '2020-03-31T04:32:56.9537857',
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

export const getEmployeesEmployeeIDLeaveLeaveIDRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/Leave/{LeaveID}',
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's leave record using a unique employee ID",
  operationId: 'getEmployeeLeave',
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
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: EmployeeLeaveObjectSchema,
          example: {
            id: '6ae25805-fef3-4c9b-9e69-9ccc71a6a8da',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-27T19:58:03.8455417',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leave: {
              leaveID: '384bf62a-5884-484d-b675-a3ad9c662f8e',
              leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c',
              description: 'Vacation to Majorca',
              startDate: '2020-02-17T00:00:00',
              endDate: '2020-02-21T00:00:00',
              periods: [
                {
                  periodStartDate: '2020-02-17T00:00:00',
                  periodEndDate: '2020-02-23T00:00:00',
                  numberOfUnits: 40,
                  periodStatus: 'Approved',
                },
              ],
              updatedDateUTC: '2020-02-10T10:15:53',
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const putEmployeesEmployeeIDLeaveLeaveIDRoute = createRoute({
  method: 'put',
  path: '/Employees/{EmployeeID}/Leave/{LeaveID}',
  tags: ['PayrollUk'],
  summary: "Updates a specific employee's leave records",
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
            leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c',
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
            id: 'ea115d89-61a0-4a2d-ad77-e3c63a2b401f',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-17T18:18:30.5118218',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leave: {
              leaveID: '8340b795-50c1-428e-9fda-90badf081ab4',
              leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c',
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
              updatedDateUTC: '2020-04-17T18:18:30.614537',
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
  tags: ['PayrollUk'],
  summary: "Deletes a specific employee's leave record",
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
            id: 'b0ab87f6-bbca-4c81-b616-c545592f6988',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-31T04:11:42.422139',
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
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's leave balances using a unique employee ID",
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
            id: 'a9b96d49-fc15-4e25-8b62-818462ea6dbd',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-31T04:45:06.125346',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            problem: null,
            leaveBalances: [
              {
                name: 'Holiday',
                leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c',
                balance: 32,
                typeOfUnits: 'Hours',
              },
              {
                name: 'Parental Leave',
                leaveTypeID: '1d2778ee-86ea-45c0-bbf8-1045485f6b3f',
                balance: -80,
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

export const getEmployeesEmployeeIDStatutoryLeaveBalanceRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/StatutoryLeaveBalance',
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's leave balances using a unique employee ID",
  operationId: 'getEmployeeStatutoryLeaveBalances',
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
      LeaveType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'LeaveType',
            'x-snake': 'leave_type',
            in: 'query',
            description: 'Filter by the type of statutory leave',
            schema: { type: 'string' },
            example: 'sick',
            required: false,
          },
        }),
      AsOfDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'AsOfDate',
            'x-snake': 'as_of_date',
            in: 'query',
            description:
              'The date from which to calculate balance remaining. If not specified, current date UTC is used.',
            schema: { type: 'string', format: 'date' },
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
          schema: EmployeeStatutoryLeaveBalanceObjectSchema,
          example: {
            id: 'ee863df3-c394-4102-bb91-2b14de404c1c',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-31T05:03:47.418497',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveBalance: { leaveType: 'Sick', balanceRemaining: 1120, units: 'Hours' },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const getStatutoryLeavesSummaryEmployeeIDRoute = createRoute({
  method: 'get',
  path: '/StatutoryLeaves/Summary/{EmployeeID}',
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's summary of statutory leaves using a unique employee ID",
  operationId: 'getStatutoryLeaveSummary',
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
      activeOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'activeOnly',
            'x-snake': 'active_only',
            in: 'query',
            description:
              'Filter response with leaves that are currently active or yet to be taken. If not specified, all leaves (past, current, and future scheduled) are returned',
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
          schema: EmployeeStatutoryLeavesSummariesSchema,
          example: {
            id: '1908f4d1-b85d-4d6d-a885-6b6e2922ad03',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-02T19:47:06.0791382',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            statutoryLeaves: [
              {
                statutoryLeaveID: '17f4c3c7-d65c-4572-9118-03798f26f813',
                employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
                type: 'Sick',
                endDate: '2020-04-01',
                startDate: '2020-03-28',
                isEntitled: false,
                status: 'Pending',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postStatutoryLeavesSickRoute = createRoute({
  method: 'post',
  path: '/StatutoryLeaves/Sick',
  tags: ['PayrollUk'],
  summary: 'Creates statutory sick leave records',
  operationId: 'createEmployeeStatutorySickLeave',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: EmployeeStatutorySickLeaveSchema,
          example: {
            employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
            leaveTypeID: 'aab78802-e9d3-4bbd-bc87-df858054988f',
            startDate: '2020-04-21',
            endDate: '2020-04-24',
            workPattern: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            isPregnancyRelated: false,
            sufficientNotice: true,
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
          schema: EmployeeStatutorySickLeaveObjectSchema,
          example: {
            id: '35c840a3-04aa-43f1-9171-f7eaf4fd4454',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-20T18:59:28.3440854',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            statutorySickLeave: {
              statutoryLeaveID: 'a2b5a1fb-ae21-47b4-876d-0b61fa6b37ab',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              leaveTypeID: 'aab78802-e9d3-4bbd-bc87-df858054988f',
              startDate: '2020-04-21',
              endDate: '2020-04-24',
              workPattern: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              isPregnancyRelated: false,
              sufficientNotice: true,
              isEntitled: false,
              entitlementWeeksRequested: 0.8,
              entitlementWeeksQualified: 27.2,
              entitlementWeeksRemaining: 26.4,
              overlapsWithOtherLeave: false,
              entitlementFailureReasons: ['NotQualifiedInPreviousPiw'],
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

export const getStatutoryLeavesSickStatutorySickLeaveIDRoute = createRoute({
  method: 'get',
  path: '/StatutoryLeaves/Sick/{StatutorySickLeaveID}',
  tags: ['PayrollUk'],
  summary: 'Retrieves a statutory sick leave for an employee',
  operationId: 'getEmployeeStatutorySickLeave',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      StatutorySickLeaveID: z
        .uuid()
        .openapi({
          param: {
            name: 'StatutorySickLeaveID',
            'x-snake': 'statutory_sick_leave_id',
            in: 'path',
            required: true,
            description: 'Statutory sick leave id for single object',
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
          schema: EmployeeStatutorySickLeaveObjectSchema,
          example: {
            id: 'c484213d-6225-4ede-bc5e-e81ef350af41',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-17T18:31:49.3895522',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            statutorySickLeave: {
              statutoryLeaveID: '17f4c3c7-d65c-4572-9118-03798f26f813',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              leaveTypeID: '054a2b5e-fe51-4494-9486-3e3130323c69',
              startDate: '2020-03-28',
              endDate: '2020-04-01',
              workPattern: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              isPregnancyRelated: false,
              sufficientNotice: true,
              isEntitled: false,
              entitlementWeeksRequested: 0.6,
              entitlementWeeksQualified: 28,
              entitlementWeeksRemaining: 0,
              overlapsWithOtherLeave: false,
              entitlementFailureReasons: ['AweLowerThanLel'],
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getEmployeesEmployeeIDLeavePeriodsRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/LeavePeriods',
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's leave periods using a unique employee ID",
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
              example: '00000000-0000-0000-0000-000000000000',
            },
          },
          example: '00000000-0000-0000-0000-000000000000',
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
            dateTimeUTC: '2020-04-07T20:33:42.1904008',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            periods: [
              {
                periodStartDate: '2020-02-24T00:00:00',
                periodEndDate: '2020-03-01T00:00:00',
                numberOfUnits: 40,
                periodStatus: null,
              },
              {
                periodStartDate: '2020-03-02T00:00:00',
                periodEndDate: '2020-03-08T00:00:00',
                numberOfUnits: 32,
                periodStatus: null,
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

export const getEmployeesEmployeeIDLeaveTypesRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}/LeaveTypes',
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's leave types using a unique employee ID",
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
            id: 'd86959c6-94f5-437a-9367-581cb145fc4f',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-27T16:25:56.2931034',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveTypes: [
              {
                leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c',
                scheduleOfAccrual: 'OnAnniversaryDate',
                hoursAccruedAnnually: 200,
                maximumToAccrue: 0,
                openingBalance: 72,
                rateAccruedHourly: 0,
                scheduleOfAccrualDate: null,
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
  tags: ['PayrollUk'],
  summary: 'Creates employee leave type records',
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
            leaveTypeID: '4918f233-bd31-43f9-9633-bcc6de1178f2',
            scheduleOfAccrual: 'BeginningOfCalendarYear',
            hoursAccruedAnnually: 10,
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
            id: '3245e4c9-1ec5-4f3e-b659-fdb722733060',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-20T20:24:25.8151387',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveType: {
              leaveTypeID: '4918f233-bd31-43f9-9633-bcc6de1178f2',
              scheduleOfAccrual: 'BeginningOfCalendarYear',
              hoursAccruedAnnually: 10,
              maximumToAccrue: 0,
              openingBalance: 0,
              rateAccruedHourly: 0,
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
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's payment method using a unique employee ID",
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
            id: '33c27fe9-de53-4114-8455-a6392add88b8',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-13T18:22:18.9003328',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            paymentMethod: {
              paymentMethod: 'Electronically',
              bankAccounts: [
                {
                  accountName: 'Oliver Furniss - Santander',
                  accountNumber: '12345678',
                  sortCode: '111111',
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
  tags: ['PayrollUk'],
  summary: 'Creates an employee payment method',
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
            paymentMethod: 'Electronically',
            bankAccounts: [
              { accountName: 'Sid BofA', accountNumber: '24987654', sortCode: '287654' },
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
            id: '6c5eab91-8f3c-4569-a5ce-ab4eec112d35',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-13T18:48:16.6038123',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            paymentMethod: {
              paymentMethod: 'Electronically',
              bankAccounts: [
                { accountName: 'Sid BofA', accountNumber: '24987654', sortCode: '287654' },
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
  tags: ['PayrollUk'],
  summary: 'Retrieves a specific employee pay templates using a unique employee ID',
  operationId: 'getEmployeePayTemplate',
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
          schema: EmployeePayTemplateObjectSchema,
          example: {
            id: '3138be2b-96d9-44d0-a01e-80fd527555c8',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-17T15:10:54.4464048',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 0, itemCount: 0 },
            problem: null,
            payTemplate: {
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              earningTemplates: [
                {
                  payTemplateEarningID: '4e2a0753-56b9-423d-8068-624473bd1c00',
                  ratePerUnit: 25,
                  numberOfUnits: 10,
                  fixedAmount: null,
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  name: 'Regular Hours',
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
  path: '/Employees/{EmployeeID}/PayTemplates/earnings',
  tags: ['PayrollUk'],
  summary: 'Creates an earnings template records for a specific employee',
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
    body: { content: { 'application/json': { schema: EarningsTemplateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: EarningsTemplateObjectSchema } },
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
  path: '/Employees/{EmployeeID}/PayTemplates/earnings/{PayTemplateEarningID}',
  tags: ['PayrollUk'],
  summary: "Updates a specific employee's earnings template records",
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
            ratePerUnit: 30,
            numberOfUnits: 4,
            earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
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
            id: '39603f09-e06f-4cd4-8291-e3ad1df8b35b',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-17T15:52:35.0247503',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningTemplate: {
              payTemplateEarningID: '4e2a0753-56b9-423d-8068-624473bd1c00',
              ratePerUnit: 30,
              numberOfUnits: 4,
              fixedAmount: null,
              earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
              name: 'Regular Hours',
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
  path: '/Employees/{EmployeeID}/PayTemplates/earnings/{PayTemplateEarningID}',
  tags: ['PayrollUk'],
  summary: "Deletes a specific employee's earnings template record",
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
  responses: { 200: { description: 'deletion successful' } },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const postEmployeesEmployeeIDPaytemplateearningsRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}/paytemplateearnings',
  tags: ['PayrollUk'],
  summary:
    'Creates multiple earnings template records for a specific employee using a unique employee ID',
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
            '[ { "ratePerUnit":20.0, "numberOfUnits":8.0, "earningsRateID":"87f5b43a-cf51-4b74-92de-94c819e82d27" }, { "ratePerUnit":20.0, "numberOfUnits":8.0, "earningsRateID":"973365f3-66b2-4c33-8ae6-14b75f78f68b" } ]',
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
          schema: EmployeePayTemplatesSchema,
          example: {
            id: '1c08b529-0827-4e91-a6a1-c479765aa65f',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-17T16:56:35.6264368',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningTemplates: [
              {
                payTemplateEarningID: '6b32533d-1111-4a92-ac52-7641315a1719',
                ratePerUnit: 20,
                numberOfUnits: 8,
                fixedAmount: null,
                earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                name: 'Regular Hours',
              },
              {
                payTemplateEarningID: 'b8b16366-6a60-4b72-97c1-57af555da375',
                ratePerUnit: 20,
                numberOfUnits: 8,
                fixedAmount: null,
                earningsRateID: '973365f3-66b2-4c33-8ae6-14b75f78f68b',
                name: 'Overtime Hours',
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

export const getBenefitsRoute = createRoute({
  method: 'get',
  path: '/Benefits',
  tags: ['PayrollUk'],
  summary: 'Retrieves employee benefits',
  operationId: 'getBenefits',
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
          schema: BenefitsSchema,
          example: {
            id: '079865dc-f3df-4783-98a9-67db747ab82c',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-15T18:45:03.617089',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 1 },
            problem: null,
            benefits: [
              {
                id: '17ee7e28-9f4c-4675-9590-cc0547c9f7ac',
                name: 'Mind The Gap Pensions',
                category: 'StakeholderPension',
                liabilityAccountId: 'd659ebbf-0760-4e07-a1fb-8de6b9ecdff9',
                expenseAccountId: 'edda7154-dfc8-4486-a82b-e5e955408eaa',
                standardAmount: null,
                percentage: 3,
                calculationType: 'PercentageOfGross',
                currentRecord: true,
                showBalanceToEmployee: false,
                subjectToNIC: null,
                subjectToPension: null,
                subjectToTax: null,
                isCalculatingOnQualifyingEarnings: null,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postBenefitsRoute = createRoute({
  method: 'post',
  path: '/Benefits',
  tags: ['PayrollUk'],
  summary: 'Creates a new employee benefit',
  operationId: 'createBenefit',
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
            name: 'My Big Bennie',
            category: 'StakeholderPension',
            liabilityAccountId: 'e0faa299-ca0d-4b0a-9e32-0dfabdf9179a',
            expenseAccountId: '4b03500d-32fd-4616-8d70-e1e56e0519c6',
            standardAmount: 50,
            percentage: 25,
            calculationType: 'PercentageOfGross',
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
          schema: BenefitObjectSchema,
          example: {
            id: '95352407-6477-42f1-bd9c-bab28af8b0d9',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-15T18:59:01.5812362',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            benefit: {
              id: 'd295bf25-fb61-4f91-9b62-a9ae87633746',
              name: 'My Big Bennie',
              category: 'StakeholderPension',
              liabilityAccountId: 'e0faa299-ca0d-4b0a-9e32-0dfabdf9179a',
              expenseAccountId: '4b03500d-32fd-4616-8d70-e1e56e0519c6',
              standardAmount: null,
              percentage: 25,
              calculationType: 'PercentageOfGross',
              currentRecord: true,
              showBalanceToEmployee: true,
              subjectToNIC: null,
              subjectToPension: null,
              subjectToTax: null,
              isCalculatingOnQualifyingEarnings: null,
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

export const getBenefitsIdRoute = createRoute({
  method: 'get',
  path: '/Benefits/{id}',
  tags: ['PayrollUk'],
  summary: 'Retrieves a specific benefit by using a unique benefit ID',
  operationId: 'getBenefit',
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
            description: 'Identifier for the benefit',
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
          schema: BenefitObjectSchema,
          example: {
            id: 'e7959d7b-370d-47e5-bb15-4b68f136ddae',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-15T18:45:04.5134277',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            benefit: {
              id: '17ee7e28-9f4c-4675-9590-cc0547c9f7ac',
              name: 'Mind The Gap Pensions',
              category: 'StakeholderPension',
              liabilityAccountId: 'd659ebbf-0760-4e07-a1fb-8de6b9ecdff9',
              expenseAccountId: 'edda7154-dfc8-4486-a82b-e5e955408eaa',
              standardAmount: null,
              percentage: 3,
              calculationType: 'PercentageOfGross',
              currentRecord: true,
              showBalanceToEmployee: false,
              subjectToNIC: null,
              subjectToPension: null,
              subjectToTax: null,
              isCalculatingOnQualifyingEarnings: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getDeductionsRoute = createRoute({
  method: 'get',
  path: '/Deductions',
  tags: ['PayrollUk'],
  summary: 'Retrieves deductions',
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
            id: '846b81f3-7192-4a78-a05c-ae5d2c402546',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-20T20:57:39.6123797',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            problem: null,
            deductions: [
              {
                deductionId: '7c736d59-a624-4584-920b-e9910d2887a0',
                deductionName: 'Mind The Gap Pensions (NPA)',
                deductionCategory: 'StakeholderPension',
                liabilityAccountId: 'd659ebbf-0760-4e07-a1fb-8de6b9ecdff9',
                currentRecord: true,
                standardAmount: null,
                reducesSuperLiability: null,
                reducesTaxLiability: null,
                calculationType: 'PercentageOfGross',
                percentage: 5,
                subjectToNIC: null,
                subjectToTax: null,
                isReducedByBasicRate: null,
                applyToPensionCalculations: null,
                isCalculatingOnQualifyingEarnings: null,
                isPension: null,
              },
              {
                deductionId: '49f301d4-2746-43a6-ba4a-e7001b5b83fc',
                deductionName: 'Post-Tax Pension',
                deductionCategory: 'StakeholderPensionPostTax',
                liabilityAccountId: 'd659ebbf-0760-4e07-a1fb-8de6b9ecdff9',
                currentRecord: true,
                standardAmount: null,
                reducesSuperLiability: null,
                reducesTaxLiability: null,
                calculationType: 'PercentageOfGross',
                percentage: 0,
                subjectToNIC: null,
                subjectToTax: null,
                isReducedByBasicRate: null,
                applyToPensionCalculations: false,
                isCalculatingOnQualifyingEarnings: null,
                isPension: true,
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
  tags: ['PayrollUk'],
  summary: 'Creates a new deduction',
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
            deductionCategory: 'SalarySacrifice',
            liabilityAccountId: 'e0faa299-ca0d-4b0a-9e32-0dfabdf9179a',
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
          schema: DeductionObjectSchema,
          example: {
            id: '26cf94f5-6b62-4f76-8e89-44e4d0062566',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-20T23:03:00.7012103',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            deduction: {
              deductionId: 'b3695b29-750f-4957-98b4-678e4a529043',
              deductionName: 'My new deduction',
              deductionCategory: 'SalarySacrifice',
              liabilityAccountId: 'e0faa299-ca0d-4b0a-9e32-0dfabdf9179a',
              currentRecord: true,
              standardAmount: null,
              reducesSuperLiability: null,
              reducesTaxLiability: null,
              calculationType: 'FixedAmount',
              percentage: null,
              subjectToNIC: null,
              subjectToTax: null,
              isReducedByBasicRate: null,
              applyToPensionCalculations: null,
              isCalculatingOnQualifyingEarnings: null,
              isPension: null,
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
  tags: ['PayrollUk'],
  summary: 'Retrieves a specific deduction by using a unique deduction ID',
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
            id: 'addf44c5-5a3b-4d25-a61c-4e9e85cb27b3',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-20T22:42:54.5394384',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            deduction: {
              deductionId: '7c736d59-a624-4584-920b-e9910d2887a0',
              deductionName: 'Mind The Gap Pensions (NPA)',
              deductionCategory: 'StakeholderPension',
              liabilityAccountId: 'd659ebbf-0760-4e07-a1fb-8de6b9ecdff9',
              currentRecord: true,
              standardAmount: null,
              reducesSuperLiability: null,
              reducesTaxLiability: null,
              calculationType: 'PercentageOfGross',
              percentage: 5,
              subjectToNIC: null,
              subjectToTax: null,
              isReducedByBasicRate: null,
              applyToPensionCalculations: null,
              isCalculatingOnQualifyingEarnings: null,
              isPension: null,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getEarningsOrdersRoute = createRoute({
  method: 'get',
  path: '/EarningsOrders',
  tags: ['PayrollUk'],
  summary: 'Retrieves earnings orders',
  operationId: 'getEarningsOrders',
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
          schema: EarningsOrdersSchema,
          example: {
            id: '5bf85b65-c2de-4632-8e5e-cc0ab3d18ff0',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-20T23:21:36.0480051',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 8 },
            problem: null,
            statutoryDeductions: [
              {
                id: 'd00d0128-500b-4685-8332-8fc8743a395c',
                name: 'AEO (maintenance)',
                liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
                statutoryDeductionCategory: 'PriorityOrder',
                currentRecord: true,
              },
              {
                id: 'f7a63612-a68d-431e-96d4-3fd0708e46b5',
                name: 'AEO (fines)',
                liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
                statutoryDeductionCategory: 'PriorityOrder',
                currentRecord: true,
              },
              {
                id: 'dabd9a53-25ac-4349-9fb3-8005ea781574',
                name: 'AEO (civil debts)',
                liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
                statutoryDeductionCategory: 'NonPriorityOrder',
                currentRecord: true,
              },
              {
                id: '73ae94bb-182c-4242-8d67-1a281597ca9c',
                name: 'CTAEO',
                liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
                statutoryDeductionCategory: 'PriorityOrder',
                currentRecord: true,
              },
              {
                id: '649a3c59-3937-43d2-b0e4-5e8942f17ffa',
                name: 'Child Support DEO',
                liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
                statutoryDeductionCategory: 'PriorityOrder',
                currentRecord: true,
              },
              {
                id: 'd4a4441f-452a-4067-97ac-ded4d157c319',
                name: 'Earnings Arrestment (Scotland)',
                liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
                statutoryDeductionCategory: 'TableBased',
                currentRecord: true,
              },
              {
                id: 'deec134a-2378-439c-89db-a71fa57fb28a',
                name: 'Conjoined Arrestment Order (Scotland)',
                liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
                statutoryDeductionCategory: 'TableBased',
                currentRecord: true,
              },
              {
                id: '750c7c89-0579-45b4-becc-221a52119bd4',
                name: 'Current Maintenance Arrest (Scotland)',
                liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
                statutoryDeductionCategory: 'NonPriorityOrder',
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

export const getEarningsOrdersIdRoute = createRoute({
  method: 'get',
  path: '/EarningsOrders/{id}',
  tags: ['PayrollUk'],
  summary: 'Retrieves a specific earnings orders by using a unique earnings orders id',
  operationId: 'getEarningsOrder',
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
          schema: EarningsOrderObjectSchema,
          example: {
            id: 'e0fd1c57-e9d0-4c3f-9a1a-0355ddf7c060',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-20T23:37:30.3398526',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            statutoryDeduction: {
              id: 'd00d0128-500b-4685-8332-8fc8743a395c',
              name: 'AEO (maintenance)',
              liabilityAccountId: '921237ae-76ff-4f4c-bf70-5c3c177b149d',
              statutoryDeductionCategory: 'PriorityOrder',
              currentRecord: true,
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
  tags: ['PayrollUk'],
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
            id: 'fbe7a960-fad3-4293-8de9-0fabfbea615f',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-15T15:00:05.2418623',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 13 },
            problem: null,
            earningsRates: [
              {
                earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                name: 'Regular Hours',
                earningsType: 'RegularEarnings',
                rateType: 'RatePerUnit',
                typeOfUnits: 'hours',
                currentRecord: true,
                expenseAccountID: '81da553d-c6c6-411e-95df-cc4ac8f7e1c2',
                fixedAmount: null,
                ratePerUnit: null,
                multipleOfOrdinaryEarningsRate: null,
              },
              {
                earningsRateID: '973365f3-66b2-4c33-8ae6-14b75f78f68b',
                name: 'Overtime Hours',
                earningsType: 'OvertimeEarnings',
                rateType: 'MultipleOfOrdinaryEarningsRate',
                typeOfUnits: null,
                currentRecord: true,
                expenseAccountID: '81da553d-c6c6-411e-95df-cc4ac8f7e1c2',
                fixedAmount: null,
                ratePerUnit: null,
                multipleOfOrdinaryEarningsRate: 1.5,
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
  tags: ['PayrollUk'],
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
            expenseAccountID: '4b03500d-32fd-4616-8d70-e1e56e0519c6',
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
            id: 'cc5341dd-c652-47f0-b8a3-67a22617ca7b',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-15T18:12:04.6341065',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningsRate: {
              earningsRateID: 'fcf811a8-3843-4e87-8431-c62e83158aef',
              name: 'My Earnings Rate',
              earningsType: 'RegularEarnings',
              rateType: 'RatePerUnit',
              typeOfUnits: 'hours',
              currentRecord: true,
              expenseAccountID: '4b03500d-32fd-4616-8d70-e1e56e0519c6',
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
  tags: ['PayrollUk'],
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
            id: '85375ff5-6ccf-4d8c-a976-0531c94597de',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-15T16:54:51.8240698',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            earningsRate: {
              earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
              name: 'Regular Hours',
              earningsType: 'RegularEarnings',
              rateType: 'RatePerUnit',
              typeOfUnits: 'hours',
              currentRecord: true,
              expenseAccountID: '81da553d-c6c6-411e-95df-cc4ac8f7e1c2',
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
  tags: ['PayrollUk'],
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
            id: 'cb429b37-78d3-4b15-9788-83cbd1fd3f72',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-27T18:32:57.9928041',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 12 },
            problem: null,
            leaveTypes: [
              {
                leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c',
                name: 'Holiday',
                isPaidLeave: true,
                showOnPayslip: true,
                updatedDateUTC: '2020-02-13T15:56:11Z',
                isStatutoryLeave: false,
                isActive: true,
              },
              {
                leaveTypeID: '1d2778ee-86ea-45c0-bbf8-1045485f6b3f',
                name: 'Parental Leave',
                isPaidLeave: true,
                showOnPayslip: true,
                updatedDateUTC: '2020-03-27T18:19:53Z',
                isStatutoryLeave: false,
                isActive: true,
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
  tags: ['PayrollUk'],
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
          example: { name: 'My opebvwbfxf Leave', isPaidLeave: false, showOnPayslip: true },
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
            id: '89aeb982-d6e8-45dd-a853-fcaee4fc99cc',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-21T02:59:35.5461123',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveType: {
              leaveTypeID: '4c027a23-6e7b-4547-808b-c34b2b140fef',
              name: 'My opebvwbfxf Leave',
              isPaidLeave: false,
              showOnPayslip: true,
              updatedDateUTC: '2020-04-21T02:59:35.3831249Z',
              isStatutoryLeave: null,
              isActive: true,
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
  tags: ['PayrollUk'],
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
            id: '684454f6-d808-46e0-b83d-5593a560b9d0',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-21T02:59:34.9401664',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            leaveType: {
              leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c',
              name: 'Holiday',
              isPaidLeave: true,
              showOnPayslip: true,
              updatedDateUTC: '2020-04-20T20:14:31',
              isStatutoryLeave: false,
              isActive: true,
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
  tags: ['PayrollUk'],
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
            id: 'eea19a1d-a714-41c0-8730-94b6d4fbac84',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-15T00:17:27.1947108',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 5 },
            problem: null,
            reimbursements: [
              {
                reimbursementID: 'fef6115f-1606-4a74-be54-312d46b0eb0e',
                name: 'Travel Allowance',
                accountID: 'c7b73345-7f25-428a-bb97-7b20a1470a53',
                currentRecord: true,
              },
              {
                reimbursementID: '8e8d7849-26e1-41d1-a41f-7e1d0bfa147b',
                name: 'Mileage',
                accountID: '0be1631e-cc7e-4c27-951f-308c3307c0fe',
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

export const postReimbursementsRoute = createRoute({
  method: 'post',
  path: '/Reimbursements',
  tags: ['PayrollUk'],
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
          example: { name: 'My new Reimburse', accountID: '9ee28149-32a9-4661-8eab-a28738696983' },
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
            id: '310ecff7-8577-4e05-98a3-3ce7ecb2868a',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-15T00:43:39.0988382',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            reimbursement: {
              reimbursementID: '2b1b587a-39f6-43f8-9dd9-a858314333c8',
              name: 'My new Reimburse',
              accountID: '9ee28149-32a9-4661-8eab-a28738696983',
              currentRecord: true,
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
  tags: ['PayrollUk'],
  summary: 'Retrieves a specific reimbursement by using a unique reimbursement id',
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
            id: '9c727a87-a96b-4998-b7e7-6b79347915cc',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-21T03:05:16.5248369',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            reimbursement: {
              reimbursementID: 'fef6115f-1606-4a74-be54-312d46b0eb0e',
              name: 'Travel Allowance',
              accountID: 'c7b73345-7f25-428a-bb97-7b20a1470a53',
              currentRecord: true,
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
  tags: ['PayrollUk'],
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
            id: 'd81c2087-3ecb-4d91-b775-73d85f593370',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-13T21:54:01.8865016',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 1 },
            problem: null,
            timesheets: [
              {
                timesheetID: '0c94d453-3d8c-4167-8c25-b4025121d18b',
                payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
                employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
                startDate: '2020-04-13T00:00:00',
                endDate: '2020-04-19T00:00:00',
                status: 'Approved',
                totalHours: 16,
                updatedDateUTC: '2020-04-13T21:53:39',
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
  tags: ['PayrollUk'],
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
            payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
            employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
            startDate: '2020-04-13',
            endDate: '2020-04-19',
            timesheetLines: [
              {
                date: '2020-04-13',
                earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                numberOfUnits: 8,
              },
              {
                date: '2020-04-15',
                earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
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
            id: 'ef0aa7e2-6f7f-43f6-9186-af670dce7c69',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-21T03:07:37.0148822',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: '88d2038a-06f7-4b8a-bdab-809804c0aa1d',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Draft',
              totalHours: 14,
              updatedDateUTC: '2020-04-21T03:07:36.8132834',
              timesheetLines: [
                {
                  timesheetLineID: '03060d0c-b14a-4339-aced-51cb2e5313b7',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 6,
                },
                {
                  timesheetLineID: '53ebdb54-b604-4d15-8c42-5162a7fe88e6',
                  date: '2020-04-13T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
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
  tags: ['PayrollUk'],
  summary: 'Retrieve a specific timesheet by using a unique timesheet ID',
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
            id: '504259ac-df26-482e-bd0a-d792d96453bb',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-14T16:41:00.5013526',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: '25c59963-5df2-43c3-88f6-25a3caa63084',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Draft',
              totalHours: 14,
              updatedDateUTC: '2020-04-14T16:31:35',
              timesheetLines: [
                {
                  timesheetLineID: '6cc1e5c3-f080-4dbc-a82b-bea256ef939f',
                  date: '2020-04-13T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 8,
                },
                {
                  timesheetLineID: '3d900df1-9859-492b-9b00-155860158c0d',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 6,
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
  tags: ['PayrollUk'],
  summary: 'Deletes a specific timesheet',
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
      content: { 'application/json': { schema: TimesheetLineSchema } },
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
  tags: ['PayrollUk'],
  summary: 'Creates a new timesheet line for a specific timesheet using a unique timesheet ID',
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
            date: '2020-04-14',
            earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
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
            id: 'cf701261-529e-47cd-8156-5ec9ab3394ff',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-14T17:19:22.8599292',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheetLine: {
              timesheetLineID: '56fce87e-7f0d-4c19-8f74-7f5656651c81',
              date: '2020-04-14T00:00:00',
              earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
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
  tags: ['PayrollUk'],
  summary: 'Approves a specific timesheet',
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
            id: '94c27148-2749-4d85-bc1a-986e6de230ae',
            providerName: 'provider-name',
            dateTimeUTC: '2020-06-01T20:32:19.7577043',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: '62bd8b5f-8e90-4868-a0e6-62f994f7d659',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Approved',
              totalHours: 9,
              updatedDateUTC: '2020-06-01T20:32:19.9534744',
              timesheetLines: [
                {
                  timesheetLineID: 'ce6db38f-efe9-49dc-ae42-7e6bad3cb167',
                  date: '2020-04-14T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 2,
                },
                {
                  timesheetLineID: 'bc8004d2-5965-4f4e-8e46-0519040b4a05',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 6,
                },
                {
                  timesheetLineID: 'fd00cd5a-7d0c-4cb7-85ff-66bd3ed2439a',
                  date: '2020-04-14T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 1,
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
  tags: ['PayrollUk'],
  summary: 'Reverts a specific timesheet to draft',
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
            id: 'a774530a-a50c-4480-a094-358cf80a7d98',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-14T17:49:23.1119111',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: '0fd483c0-3302-48c6-bbd5-7247c9a02460',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Draft',
              totalHours: 15,
              updatedDateUTC: '2020-04-14T17:49:23.2188538',
              timesheetLines: [
                {
                  timesheetLineID: '17a08549-1ed1-416b-83e2-c65040119a02',
                  date: '2020-04-13T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 8,
                },
                {
                  timesheetLineID: '0e912b7d-dc3f-4b95-a466-3f0f5c8581cb',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 6,
                },
                {
                  timesheetLineID: 'd0faac99-f2d4-42b9-ab00-9c2bc6e8fe3a',
                  date: '2020-04-14T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 1,
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
  tags: ['PayrollUk'],
  summary: 'Updates a specific timesheet line for a specific timesheet',
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
            date: '2020-04-14',
            earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
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
            id: '582b87a6-14f3-409b-be89-f9b9c49db983',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-14T18:07:30.718153',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheetLine: {
              timesheetLineID: 'c88edcad-af32-4536-a682-9a4772c21c8d',
              date: '2020-04-14T00:00:00',
              earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
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
  tags: ['PayrollUk'],
  summary: 'Deletes a specific timesheet line',
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
      content: { 'application/json': { schema: TimesheetLineSchema } },
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
  tags: ['PayrollUk'],
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
            id: 'f66c8da6-06c1-47c7-a415-366cb3991858',
            providerName: 'provider-name',
            dateTimeUTC: '2020-03-25T18:39:43.9215965',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 3 },
            problem: null,
            payRunCalendars: [
              {
                payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
                name: 'Weekly ',
                calendarType: 'Weekly',
                periodStartDate: '2020-02-10T00:00:00',
                periodEndDate: '2020-02-16T00:00:00',
                paymentDate: '2020-02-17T00:00:00',
                updatedDateUTC: '2020-02-13T16:53:54',
              },
              {
                payrollCalendarID: 'd45bc68f-59d6-4000-929d-1058dcfa79e1',
                name: 'Fortnightly ',
                calendarType: 'Fortnightly',
                periodStartDate: '2020-02-03T00:00:00',
                periodEndDate: '2020-02-16T00:00:00',
                paymentDate: '2020-02-10T00:00:00',
                updatedDateUTC: '2020-02-10T10:02:09',
              },
              {
                payrollCalendarID: '5e813d9e-949c-461f-8a89-e9ee8955a254',
                name: 'Monthly ',
                calendarType: 'Monthly',
                periodStartDate: '2020-03-03T00:00:00',
                periodEndDate: '2020-04-02T00:00:00',
                paymentDate: '2020-03-31T00:00:00',
                updatedDateUTC: '2020-02-13T16:54:07',
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
  tags: ['PayrollUk'],
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
            id: 'ef25e7f2-b5d6-454c-8147-396c373565dd',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-13T17:01:06.2708245',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payRunCalendar: {
              payrollCalendarID: '5f29322d-9123-49be-bef0-9b14c35653d1',
              name: 'My Weekly Cal',
              calendarType: 'Weekly',
              periodStartDate: '2020-05-01T00:00:00',
              periodEndDate: '2020-05-07T00:00:00',
              paymentDate: '2020-05-15T00:00:00',
              updatedDateUTC: '2020-04-13T17:01:06.4944331',
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

export const getPayRunCalendarsPayRunCalendarIDRoute = createRoute({
  method: 'get',
  path: '/PayRunCalendars/{PayRunCalendarID}',
  tags: ['PayrollUk'],
  summary: 'Retrieves a specific payrun calendar by using a unique payrun calendar ID',
  operationId: 'getPayRunCalendar',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      PayRunCalendarID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'PayRunCalendarID',
            'x-snake': 'pay_run_calendar_id',
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
            id: 'dae942a3-b4fb-4b24-839b-14e1073f8cca',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-13T16:48:49.6902155',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payRunCalendar: {
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              name: 'Weekly ',
              calendarType: 'Weekly',
              periodStartDate: '2020-02-10T00:00:00',
              periodEndDate: '2020-02-16T00:00:00',
              paymentDate: '2020-02-17T00:00:00',
              updatedDateUTC: '2020-02-13T16:53:54',
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
  tags: ['PayrollUk'],
  summary: "Retrieves a specific employee's salary and wages by using a unique employee ID",
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
            id: '56273e64-dff0-4542-96f3-54ad3ac27431',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T22:47:38.8995493',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 1 },
            problem: null,
            salaryAndWages: [
              {
                salaryAndWagesID: '49c33012-c1ac-456c-91fd-cb7e6db6f5fe',
                earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                numberOfUnitsPerWeek: 40,
                ratePerUnit: null,
                numberOfUnitsPerDay: null,
                daysPerWeek: null,
                effectiveFrom: '2020-04-01T00:00:00',
                annualSalary: 25000,
                status: 'Active',
                paymentType: 'Salary',
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
  tags: ['PayrollUk'],
  summary: 'Creates a salary and wage record for a specific employee',
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
            earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
            numberOfUnitsPerWeek: 2,
            ratePerUnit: 10,
            numberOfUnitsPerDay: 2,
            effectiveFrom: '2020-05-01',
            annualSalary: 100,
            status: 'ACTIVE',
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
            id: 'a15f15ec-a8ed-420b-82f6-1546a9bf6d57',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T23:46:35.2234544',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            salaryAndWages: {
              salaryAndWagesID: '1477fc72-b38d-4c0e-a46e-8657f0f32340',
              earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
              numberOfUnitsPerWeek: 2,
              ratePerUnit: null,
              numberOfUnitsPerDay: 2,
              daysPerWeek: null,
              effectiveFrom: '2020-05-01T00:00:00',
              annualSalary: 100,
              status: 'Pending',
              paymentType: 'Salary',
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
  tags: ['PayrollUk'],
  summary:
    'Retrieves a specific salary and wages record for a specific employee using a unique salary and wage id',
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
            id: 'cd4f35e7-5062-494a-96c4-f81e9083b0b9',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T23:21:48.6291438',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            salaryAndWages: [
              {
                salaryAndWagesID: '49c33012-c1ac-456c-91fd-cb7e6db6f5fe',
                earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                numberOfUnitsPerWeek: 40,
                ratePerUnit: null,
                numberOfUnitsPerDay: null,
                daysPerWeek: null,
                effectiveFrom: '2020-04-01T00:00:00',
                annualSalary: 25000,
                status: 'Active',
                paymentType: 'Salary',
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
  tags: ['PayrollUk'],
  summary: 'Updates salary and wages record for a specific employee',
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
            earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
            numberOfUnitsPerWeek: 3,
            ratePerUnit: 11,
            effectiveFrom: '2020-05-15',
            annualSalary: 101,
            status: 'ACTIVE',
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
            id: 'd12a31ee-e094-4e67-9092-0d5e1d7569a6',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-13T16:39:11.7310047',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            salaryAndWages: {
              salaryAndWagesID: 'e9c7f567-b0a0-483c-b45f-d072e399352b',
              earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
              numberOfUnitsPerWeek: 3,
              ratePerUnit: null,
              numberOfUnitsPerDay: null,
              daysPerWeek: null,
              effectiveFrom: '2020-05-15T00:00:00',
              annualSalary: 101,
              status: 'Pending',
              paymentType: 'Salary',
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
  tags: ['PayrollUk'],
  summary: 'Deletes a salary and wages record for a specific employee',
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
  responses: { 200: { description: 'deletion successful' } },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getPayRunsRoute = createRoute({
  method: 'get',
  path: '/PayRuns',
  tags: ['PayrollUk'],
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
            id: 'd748445b-fd11-4832-a85a-905fbfcf3d7c',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T21:55:55.0725037',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            problem: null,
            payRuns: [
              {
                payRunID: 'e0a59d82-6229-4be4-9d66-49891b4d933e',
                payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
                periodStartDate: '2020-02-03T00:00:00',
                periodEndDate: '2020-02-09T00:00:00',
                paymentDate: '2020-02-10T00:00:00',
                totalCost: 490.39,
                totalPay: 376.92,
                payRunStatus: 'Draft',
                payRunType: 'Scheduled',
                calendarType: 'Weekly',
                postedDateTime: null,
                payslipMessage: null,
              },
              {
                payRunID: 'ea4f0a14-2c41-4583-9845-9e455972b326',
                payrollCalendarID: '5e813d9e-949c-461f-8a89-e9ee8955a254',
                periodStartDate: '2020-02-03T00:00:00',
                periodEndDate: '2020-03-02T00:00:00',
                paymentDate: '2020-02-28T00:00:00',
                totalCost: 1502.08,
                totalPay: 1294.65,
                payRunStatus: 'Posted',
                payRunType: 'Scheduled',
                calendarType: 'Monthly',
                postedDateTime: '2020-02-13T16:54:11',
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

export const getPayRunsPayRunIDRoute = createRoute({
  method: 'get',
  path: '/PayRuns/{PayRunID}',
  tags: ['PayrollUk'],
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
            id: '84471d62-74b6-4b21-845c-6d1e6f031172',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T21:55:55.745211',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            payRun: {
              payRunID: 'e0a59d82-6229-4be4-9d66-49891b4d933e',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              periodStartDate: '2020-02-03T00:00:00',
              periodEndDate: '2020-02-09T00:00:00',
              paymentDate: '2020-02-10T00:00:00',
              totalCost: 490.39,
              totalPay: 376.92,
              payRunStatus: 'Draft',
              payRunType: 'Scheduled',
              calendarType: 'Weekly',
              postedDateTime: null,
              paySlips: [
                {
                  paySlipID: 'ed3fb9b3-e9a1-44fa-a224-8be49facbbe8',
                  employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
                  lastEdited: null,
                  firstName: 'Mike',
                  lastName: 'Johnpitragibigson',
                  totalEarnings: 480.77,
                  grossEarnings: 480.77,
                  totalPay: 386.54,
                  totalEmployerTaxes: 0,
                  totalEmployeeTaxes: 94.23,
                  totalDeductions: 9.62,
                  totalReimbursements: 0,
                  totalCourtOrders: 0,
                  totalBenefits: 9.62,
                  bacsHash: null,
                  paymentMethod: null,
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

export const getPayslipsRoute = createRoute({
  method: 'get',
  path: '/Payslips',
  tags: ['PayrollUk'],
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
          schema: PayslipsSchema,
          example: {
            id: 'c07aa280-478b-48b5-a778-499cf95c9781',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T21:50:46.3775117',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 1 },
            problem: null,
            paySlips: [
              {
                paySlipID: 'ed3fb9b3-e9a1-44fa-a224-8be49facbbe8',
                employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
                payRunID: 'e0a59d82-6229-4be4-9d66-49891b4d933e',
                lastEdited: null,
                firstName: 'Mike',
                lastName: 'Johnpitragibigson',
                totalEarnings: 480.77,
                grossEarnings: 480.77,
                totalPay: 386.54,
                totalEmployerTaxes: 0,
                totalEmployeeTaxes: 94.23,
                totalDeductions: 9.62,
                totalReimbursements: 0,
                totalCourtOrders: 0,
                totalBenefits: 9.62,
                bacsHash: null,
                paymentMethod: null,
                earningsLines: [
                  {
                    earningsLineID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                    earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                    displayName: 'Regular Hours',
                    ratePerUnit: 12.019231,
                    numberOfUnits: 40,
                    fixedAmount: null,
                    amount: 480.77,
                    isLinkedToTimesheet: false,
                    isAverageDailyPayRate: null,
                  },
                ],
                leaveEarningsLines: [],
                timesheetEarningsLines: [],
                deductionLines: [],
                reimbursementLines: [],
                leaveAccrualLines: [
                  { leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c', numberOfUnits: 0 },
                ],
                benefitLines: [],
                paymentLines: [
                  {
                    paymentLineID: '08ceb312-07af-4ce0-ae9a-176532f07009',
                    amount: 384.3,
                    accountNumber: null,
                    sortCode: null,
                    accountName: null,
                  },
                ],
                employeeTaxLines: [
                  {
                    taxLineID: 'e7dc717a-4399-4702-9e15-adb87e568dc9',
                    description: 'PAYE',
                    amount: 48.6,
                    globalTaxTypeID: 1,
                    manualAdjustment: false,
                  },
                  {
                    taxLineID: 'c774af0b-4776-4c81-9c96-ad18e4b35f40',
                    description: 'Employee National Insurance Contribution',
                    amount: 38.25,
                    globalTaxTypeID: 2,
                    manualAdjustment: false,
                  },
                ],
                employerTaxLines: [
                  {
                    taxLineID: '8de7a488-57ed-4d58-b76a-d9f9460ebded',
                    description: 'Employer National Insurance Contribution',
                    amount: 43.99,
                    globalTaxTypeID: 3,
                    manualAdjustment: false,
                  },
                ],
                courtOrderLines: [],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payslip', 'payroll.payslip.read'] }],
})

export const getPayslipsPayslipIDRoute = createRoute({
  method: 'get',
  path: '/Payslips/{PayslipID}',
  tags: ['PayrollUk'],
  summary: 'Retrieves a specific payslip by using a unique payslip ID',
  operationId: 'getPaySlip',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      PayslipID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'PayslipID',
            'x-snake': 'payslip_id',
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
          schema: PayslipObjectSchema,
          example: {
            id: '80c558c3-bc7a-48d0-91b2-20b8ec784f0d',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T22:04:35.1798025',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            paySlip: {
              paySlipID: 'ed3fb9b3-e9a1-44fa-a224-8be49facbbe8',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              payRunID: 'e0a59d82-6229-4be4-9d66-49891b4d933e',
              lastEdited: null,
              firstName: 'Mike',
              lastName: 'Johnpitragibigson',
              totalEarnings: 480.77,
              grossEarnings: 480.77,
              totalPay: 386.54,
              totalEmployerTaxes: 0,
              totalEmployeeTaxes: 94.23,
              totalDeductions: 9.62,
              totalReimbursements: 0,
              totalCourtOrders: 0,
              totalBenefits: 9.62,
              bacsHash: null,
              paymentMethod: null,
              earningsLines: [
                {
                  earningsLineID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  displayName: 'Regular Hours',
                  ratePerUnit: 12.019231,
                  numberOfUnits: 40,
                  fixedAmount: null,
                  amount: 480.77,
                  isLinkedToTimesheet: false,
                  isAverageDailyPayRate: null,
                },
              ],
              leaveEarningsLines: [],
              timesheetEarningsLines: [],
              deductionLines: [],
              reimbursementLines: [],
              leaveAccrualLines: [
                { leaveTypeID: 'ed08dffe-788e-4b24-9630-f0fa2f4d164c', numberOfUnits: 0 },
              ],
              benefitLines: [],
              paymentLines: [
                {
                  paymentLineID: '08ceb312-07af-4ce0-ae9a-176532f07009',
                  amount: 384.3,
                  accountNumber: null,
                  sortCode: null,
                  accountName: null,
                },
              ],
              employeeTaxLines: [
                {
                  taxLineID: 'e7dc717a-4399-4702-9e15-adb87e568dc9',
                  description: 'PAYE',
                  amount: 48.6,
                  globalTaxTypeID: 1,
                  manualAdjustment: false,
                },
                {
                  taxLineID: 'c774af0b-4776-4c81-9c96-ad18e4b35f40',
                  description: 'Employee National Insurance Contribution',
                  amount: 38.25,
                  globalTaxTypeID: 2,
                  manualAdjustment: false,
                },
              ],
              employerTaxLines: [
                {
                  taxLineID: '8de7a488-57ed-4d58-b76a-d9f9460ebded',
                  description: 'Employer National Insurance Contribution',
                  amount: 43.99,
                  globalTaxTypeID: 3,
                  manualAdjustment: false,
                },
              ],
              courtOrderLines: [],
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payslip', 'payroll.payslip.read'] }],
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/Settings',
  tags: ['PayrollUk'],
  summary: 'Retrieves payroll settings',
  operationId: 'getSettings',
  request: { headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: SettingsSchema,
          example: {
            id: '3cb41871-980a-47e4-878f-7c576b0d3677',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T21:27:04.8905569',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            settings: {
              accounts: [
                {
                  accountID: '9ee28149-32a9-4661-8eab-a28738696983',
                  type: 'WAGESPAYABLE',
                  code: '814',
                  name: 'Wages Payable - Payroll',
                },
                {
                  accountID: '81da553d-c6c6-411e-95df-cc4ac8f7e1c2',
                  type: 'WAGESEXPENSE',
                  code: '477',
                  name: 'Salaries',
                },
                {
                  accountID: 'bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4',
                  type: 'BANK',
                  code: '090',
                  name: 'Business Bank Account',
                },
                {
                  accountID: '43072840-e67b-45df-8b90-f52ebedb2779',
                  type: 'PAYELIABILITY',
                  code: '825',
                  name: 'PAYE Payable',
                },
                {
                  accountID: 'a2377a9f-f5bd-4327-8f85-e3461b591912',
                  type: 'NICLIABILITY',
                  code: '826',
                  name: 'NIC Payable',
                },
                {
                  accountID: '4e24254c-2770-433d-9845-8925ded5e14a',
                  type: 'EMPLOYERSNIC',
                  code: '479',
                  name: 'Employers National Insurance',
                },
                {
                  accountID: '9ee28149-32a9-4661-8eab-a28738696983',
                  type: 'PAYEECONTRIBUTION',
                  code: '814',
                  name: 'Wages Payable - Payroll',
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
  path: '/Settings/trackingCategories',
  tags: ['PayrollUk'],
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
            id: 'e56628f7-a25e-4d23-88c5-56e2895e2143',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-10T21:13:21.498344',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            trackingCategories: {
              employeeGroupsTrackingCategoryID: '9d8ad8f6-0d0f-41e0-8851-ef47e8b54ae6',
              timesheetTrackingCategoryID: '1d7d2015-10e7-4ecb-8b44-f331c8b63e2d',
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})
