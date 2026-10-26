import { createRoute, z } from '@hono/zod-openapi'

const StateSchema = z
  .enum(['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'])
  .openapi({ description: 'State abbreviation for employee home address', example: 'VIC' })
  .openapi('State')

const HomeAddressSchema = z
  .object({
    AddressLine1: z
      .string()
      .openapi({ description: 'Address line 1 for employee home address', example: '123 Main St' }),
    AddressLine2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address line 2 for employee home address', example: 'Apt 4' }),
    City: z
      .string()
      .exactOptional()
      .openapi({ description: 'Suburb for employee home address', example: 'St. Kilda' }),
    Region: StateSchema.exactOptional(),
    PostalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'PostCode for employee home address', example: 3182 }),
    Country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country of HomeAddress', example: 'AUSTRALIA' }),
  })
  .openapi({ required: ['AddressLine1'] })
  .openapi('HomeAddress')

const BankAccountSchema = z
  .object({
    StatementText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The text that will appear on your employee's bank statement when they receive payment",
        example: 'Salary',
      }),
    AccountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the account', example: 'James Lebron Savings' }),
    BSB: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BSB number of the account', example: 122344 }),
    AccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account number', example: 345678 }),
    Remainder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If this account is the Remaining bank account', example: false }),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Fixed amounts (for example, if an employee wants to have $100 of their salary transferred to one account, and the remaining amount to another)',
        'x-is-money': true,
        example: 200,
      }),
  })
  .openapi({ required: [] })
  .openapi('BankAccount')

const EarningsRateCalculationTypeSchema = z
  .enum(['USEEARNINGSRATE', 'ENTEREARNINGSRATE', 'ANNUALSALARY'])
  .openapi('EarningsRateCalculationType')

const EarningsLineSchema = z
  .object({
    EarningsRateID: z
      .uuid()
      .openapi({
        description: 'Xero unique id for earnings rate',
        example: '72e962d1-fcac-4083-8a71-742bb3e7ae14',
      }),
    CalculationType: EarningsRateCalculationTypeSchema.exactOptional(),
    AnnualSalary: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Annual salary for earnings line',
        'x-is-money': true,
        example: 40000,
      }),
    NumberOfUnitsPerWeek: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'number of units for earning line',
        'x-is-money': true,
        example: 38,
      }),
    RatePerUnit: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Rate per unit of the EarningsLine.',
        'x-is-money': true,
        example: 38,
      }),
    NormalNumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Normal number of units for EarningsLine. Applicable when RateType is "MULTIPLE"',
        'x-is-money': true,
        example: 38,
      }),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Earnings rate amount', 'x-is-money': true, example: 38 }),
    NumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Earnings rate number of units.', 'x-is-money': true, example: 2.5 }),
    FixedAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Earnings rate amount. Only applicable if the EarningsRate RateType is Fixed',
        'x-is-money': true,
        example: 2.5,
      }),
  })
  .openapi({ required: ['EarningsRateID'] })
  .openapi('EarningsLine')

const DeductionTypeCalculationTypeSchema = z
  .enum(['FIXEDAMOUNT', 'PRETAX', 'POSTTAX'])
  .openapi('DeductionTypeCalculationType')

const DeductionLineSchema = z
  .object({
    DeductionTypeID: z
      .uuid()
      .openapi({
        description: 'Xero deduction type identifier',
        example: '59cd9d04-4521-4cc3-93ac-7841651ff407',
      }),
    CalculationType: DeductionTypeCalculationTypeSchema.exactOptional(),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Deduction type amount', 'x-is-money': true, example: 10 }),
    Percentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Percentage of the Deduction', 'x-is-money': true, example: 10 }),
    NumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Deduction number of units', 'x-is-money': true, example: 10 }),
  })
  .openapi({ required: ['DeductionTypeID'] })
  .openapi('DeductionLine')

const SuperannuationContributionTypeSchema = z
  .enum(['SGC', 'SALARYSACRIFICE', 'EMPLOYERADDITIONAL', 'EMPLOYEE'])
  .openapi('SuperannuationContributionType')

const SuperannuationCalculationTypeSchema = z
  .enum(['FIXEDAMOUNT', 'PERCENTAGEOFEARNINGS', 'STATUTORY'])
  .openapi('SuperannuationCalculationType')

const SuperLineSchema = z
  .object({
    SuperMembershipID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero super membership ID',
        example: '4333d5cd-53a5-4c31-98e5-a8b4e5676b0b',
      }),
    ContributionType: SuperannuationContributionTypeSchema.exactOptional(),
    CalculationType: SuperannuationCalculationTypeSchema.exactOptional(),
    MinimumMonthlyEarnings: z
      .float64()
      .exactOptional()
      .openapi({ description: 'amount of minimum earnings', 'x-is-money': true, example: 450 }),
    ExpenseAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'expense account code', example: 478 }),
    LiabilityAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'liabilty account code', example: 826 }),
    Percentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'percentage for super line', 'x-is-money': true, example: 9 }),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Super membership amount', 'x-is-money': true, example: 10 }),
  })
  .openapi({ required: [] })
  .openapi('SuperLine')

const ReimbursementLineSchema = z
  .object({
    ReimbursementTypeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero reimbursement type identifier',
        example: 'bd246b96-c637-4767-81cf-851ba8fa93c2',
      }),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Reimbursement type amount', 'x-is-money': true, example: 10 }),
    Description: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description: 'Reimbursement lines description (max length 50)',
        example: 'For the taxi',
      }),
    ExpenseAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reimbursement expense account. For posted pay run you should be able to see expense account code.',
        example: 420,
      }),
  })
  .openapi({ required: [] })
  .openapi('ReimbursementLine')

const LeaveLineCalculationTypeSchema = z
  .enum([
    'NOCALCULATIONREQUIRED',
    'FIXEDAMOUNTEACHPERIOD',
    'ENTERRATEINPAYTEMPLATE',
    'BASEDONORDINARYEARNINGS',
  ])
  .openapi({ description: 'Calculation type for leave line for Opening Balance on Employee' })
  .openapi('LeaveLineCalculationType')

const EntitlementFinalPayPayoutTypeSchema = z
  .enum(['NOTPAIDOUT', 'PAIDOUT'])
  .openapi('EntitlementFinalPayPayoutType')

const EmploymentTerminationPaymentTypeSchema = z
  .enum(['O', 'R'])
  .openapi('EmploymentTerminationPaymentType')

const LeaveLineSchema = z
  .object({
    LeaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero leave type identifier',
        example: '742998cb-7584-4ecf-aa88-d694f59c50f9',
      }),
    CalculationType: LeaveLineCalculationTypeSchema.exactOptional(),
    EntitlementFinalPayPayoutType: EntitlementFinalPayPayoutTypeSchema.exactOptional(),
    EmploymentTerminationPaymentType: EmploymentTerminationPaymentTypeSchema.exactOptional(),
    IncludeSuperannuationGuaranteeContribution: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'amount of leave line', example: true }),
    IsQualifyingEarnings: z
      .boolean()
      .openapi({
        description:
          'Boolean to determine if the leave line is considered as qualifying earnings for superannuation guarantee calculations',
        example: true,
      }),
    NumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Number of units for leave line.',
        'x-is-money': true,
        example: 2.5,
      }),
    AnnualNumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Hours of leave accrued each year',
        'x-is-money': true,
        example: 2.5,
      }),
    FullTimeNumberOfUnitsPerPeriod: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Normal ordinary earnings number of units for leave line.',
        'x-is-money': true,
        example: 2.5,
      }),
  })
  .openapi({ required: ['IsQualifyingEarnings'] })
  .openapi('LeaveLine')

const PayTemplateSchema = z
  .object({
    EarningsLines: z.array(EarningsLineSchema).exactOptional(),
    DeductionLines: z.array(DeductionLineSchema).exactOptional(),
    SuperLines: z.array(SuperLineSchema).exactOptional(),
    ReimbursementLines: z.array(ReimbursementLineSchema).exactOptional(),
    LeaveLines: z.array(LeaveLineSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayTemplate')

const OpeningBalanceLeaveLineSchema = z
  .object({
    LeaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero leave type identifier',
        example: '742998cb-7584-4ecf-aa88-d694f59c50f9',
      }),
    NumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Number of units for leave line.',
        'x-is-money': true,
        example: 2.5,
      }),
  })
  .openapi({ required: [] })
  .openapi('OpeningBalanceLeaveLine')

const PaidLeaveEarningsLineSchema = z
  .object({
    LeaveTypeID: z
      .uuid()
      .openapi({
        description: 'Xero leave type identifier',
        example: '742998cb-7584-4ecf-aa88-d694f59c50f9',
      }),
    Amount: z
      .float64()
      .openapi({ description: 'Paid leave amount', 'x-is-money': true, example: 500 }),
    SGCAppliedLeaveLoadingAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The amount of leave loading applied for the leave type that is subject to Superannuation Guarantee Contributions. *Only applicable for Leave Types with Annual Leave Categories',
        'x-is-money': true,
        example: 50,
      }),
    SGCExemptedLeaveLoadingAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The amount of leave loading applied for the leave type that is exempt from Superannuation Guarantee Contributions. *Only applicable for Leave Types with Annual Leave Categories',
        'x-is-money': true,
        example: 60,
      }),
    ResetSTPCategorisation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Reset the STP categorisations for the leave type. *Only applicable for Leave Types with Annual Leave Categories',
        example: true,
      }),
  })
  .openapi({ required: ['LeaveTypeID', 'Amount'] })
  .openapi('PaidLeaveEarningsLine')

const OpeningBalancesSchema = z
  .object({
    OpeningBalanceDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Opening Balance Date. (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    Tax: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Opening Balance tax',
        example: '4333d5cd-53a5-4c31-98e5-a8b4e5676b0b',
      }),
    EarningsLines: z.array(EarningsLineSchema).exactOptional(),
    DeductionLines: z.array(DeductionLineSchema).exactOptional(),
    SuperLines: z.array(SuperLineSchema).exactOptional(),
    ReimbursementLines: z.array(ReimbursementLineSchema).exactOptional(),
    LeaveLines: z.array(OpeningBalanceLeaveLineSchema).exactOptional(),
    PaidLeaveEarningsLines: z.array(PaidLeaveEarningsLineSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpeningBalances')

const EmploymentBasisSchema = z
  .enum(['FULLTIME', 'PARTTIME', 'CASUAL', 'LABOURHIRE', 'SUPERINCOMESTREAM', 'NONEMPLOYEE'])
  .openapi('EmploymentBasis')

const TFNExemptionTypeSchema = z
  .enum(['NOTQUOTED', 'PENDING', 'PENSIONER', 'UNDER18'])
  .openapi('TFNExemptionType')

const ResidencyStatusSchema = z
  .enum(['AUSTRALIANRESIDENT', 'FOREIGNRESIDENT', 'WORKINGHOLIDAYMAKER'])
  .openapi('ResidencyStatus')

const TaxScaleTypeSchema = z
  .enum([
    'REGULAR',
    'ACTORSARTISTSENTERTAINERS',
    'HORTICULTURISTORSHEARER',
    'SENIORORPENSIONER',
    'WORKINGHOLIDAYMAKER',
    'FOREIGN',
  ])
  .openapi('TaxScaleType')

const WorkConditionSchema = z
  .enum(['PROMOTIONAL', 'THREELESSPERFORMANCESPERWEEK', 'NONE'])
  .openapi('WorkCondition')

const SeniorMaritalStatusSchema = z
  .enum(['MEMBEROFCOUPLE', 'MEMBEROFILLNESSSEPARATEDCOUPLE', 'SINGLE'])
  .openapi('SeniorMaritalStatus')

const TaxDeclarationSchema = z
  .object({
    EmployeeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Address line 1 for employee home address', example: '123 Main St' }),
    EmploymentBasis: EmploymentBasisSchema.exactOptional(),
    TFNExemptionType: TFNExemptionTypeSchema.exactOptional(),
    TaxFileNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tax file number e.g 123123123.', example: 123123123 }),
    ABN: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '11-digit Australian Business Number e.g 21006819692 or an empty string ("") to unset a previously set value. Only applicable, and mandatory if income type is NONEMPLOYEE.',
        example: 21006819692,
      }),
    AustralianResidentForTaxPurposes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the employee is Australian resident for tax purposes. e.g true or false',
        example: true,
      }),
    ResidencyStatus: ResidencyStatusSchema.exactOptional(),
    TaxScaleType: TaxScaleTypeSchema.exactOptional(),
    WorkCondition: WorkConditionSchema.exactOptional(),
    SeniorMaritalStatus: SeniorMaritalStatusSchema.exactOptional(),
    TaxFreeThresholdClaimed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If tax free threshold claimed. e.g true or false', example: false }),
    TaxOffsetEstimatedAmount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'If has tax offset estimated then the tax offset estimated amount. e.g 100',
        example: 100,
      }),
    HasHELPDebt: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If employee has HECS or HELP debt. e.g true or false',
        example: false,
      }),
    HasSFSSDebt: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If employee has financial supplement debt. e.g true or false',
        example: false,
      }),
    HasTradeSupportLoanDebt: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If employee has trade support loan. e.g true or false',
        example: false,
      }),
    UpwardVariationTaxWithholdingAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'If the employee has requested that additional tax be withheld each pay run. e.g 50',
        example: 50,
      }),
    EligibleToReceiveLeaveLoading: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the employee is eligible to receive an additional percentage on top of ordinary earnings when they take leave (typically 17.5%). e.g true or false',
        example: false,
      }),
    ApprovedWithholdingVariationPercentage: z
      .number()
      .exactOptional()
      .openapi({
        description: 'If the employee has approved withholding variation. e.g (0 - 100)',
        example: 75,
      }),
    HasStudentStartupLoan: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the employee is eligible for student startup loan rules',
        example: true,
      }),
    HasLoanOrStudentDebt: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the employee has any of the following loans or debts: Higher Education Loan Program (HELP/HECS), VET Student Loan (VSL), Financial Supplement (FS), Student Start-up Loan (SSL), or Trade Support Loan (TSL)',
        example: true,
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    IncludeLeaveLoadingInQualifyingEarnings: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to determine if leave loading is considered as qualifying earnings for superannuation guarantee calculations. Required when IncludeLeaveLoadingInSGC is specified in the payload',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('TaxDeclaration')

const IncomeTypeSchema = z
  .enum(['SALARYANDWAGES', 'WORKINGHOLIDAYMAKER', 'NONEMPLOYEE', 'CLOSELYHELDPAYEES', 'LABOURHIRE'])
  .openapi('IncomeType')

const EmploymentTypeSchema = z.enum(['EMPLOYEE', 'CONTRACTOR']).openapi('EmploymentType')

const CountryOfResidenceSchema = z
  .enum([
    'AF',
    'AX',
    'AL',
    'DZ',
    'AS',
    'AD',
    'AO',
    'AI',
    'AQ',
    'AG',
    'AR',
    'AM',
    'AW',
    'AU',
    'AT',
    'AZ',
    'BS',
    'BH',
    'BD',
    'BB',
    'BY',
    'BE',
    'BZ',
    'BJ',
    'BM',
    'BT',
    'BO',
    'BA',
    'BW',
    'BV',
    'BR',
    'IO',
    'BN',
    'BG',
    'BF',
    'BI',
    'KH',
    'CM',
    'CA',
    'CV',
    'KY',
    'CF',
    'TD',
    'CL',
    'CN',
    'CX',
    'CC',
    'CO',
    'KM',
    'CG',
    'CD',
    'CK',
    'CR',
    'CI',
    'HR',
    'CU',
    'CY',
    'CZ',
    'DK',
    'DJ',
    'DM',
    'DO',
    'EC',
    'EG',
    'SV',
    'GQ',
    'ER',
    'EE',
    'ET',
    'FK',
    'FO',
    'FJ',
    'FI',
    'FR',
    'GF',
    'PF',
    'TF',
    'GA',
    'GM',
    'GE',
    'DE',
    'GH',
    'GI',
    'GR',
    'GL',
    'GD',
    'GP',
    'GU',
    'GT',
    'GG',
    'GN',
    'GW',
    'GY',
    'HT',
    'HM',
    'VA',
    'HN',
    'HK',
    'HU',
    'IS',
    'IN',
    'ID',
    'IR',
    'IQ',
    'IE',
    'IM',
    'IL',
    'IT',
    'JM',
    'JP',
    'JE',
    'JO',
    'KZ',
    'KE',
    'KI',
    'KP',
    'KR',
    'KW',
    'KG',
    'LA',
    'LV',
    'LB',
    'LS',
    'LR',
    'LY',
    'LI',
    'LT',
    'LU',
    'MO',
    'MK',
    'MG',
    'MW',
    'MY',
    'MV',
    'ML',
    'MT',
    'MH',
    'MQ',
    'MR',
    'MU',
    'YT',
    'MX',
    'FM',
    'MD',
    'MC',
    'MN',
    'ME',
    'MS',
    'MA',
    'MZ',
    'MM',
    'NA',
    'NR',
    'NP',
    'NL',
    'AN',
    'NC',
    'NZ',
    'NI',
    'NE',
    'NG',
    'NU',
    'NF',
    'MP',
    'NO',
    'OM',
    'PK',
    'PW',
    'PS',
    'PA',
    'PG',
    'PY',
    'PE',
    'PH',
    'PN',
    'PL',
    'PT',
    'PR',
    'QA',
    'RE',
    'RO',
    'RU',
    'RW',
    'BL',
    'SH',
    'KN',
    'LC',
    'MF',
    'PM',
    'VC',
    'WS',
    'SM',
    'ST',
    'SA',
    'SN',
    'RS',
    'SC',
    'SL',
    'SG',
    'SK',
    'SI',
    'SB',
    'SO',
    'ZA',
    'GS',
    'ES',
    'LK',
    'SD',
    'SR',
    'SJ',
    'SZ',
    'SE',
    'CH',
    'SY',
    'TW',
    'TJ',
    'TZ',
    'TH',
    'TL',
    'TG',
    'TK',
    'TO',
    'TT',
    'TN',
    'TR',
    'TM',
    'TC',
    'TV',
    'UG',
    'UA',
    'AE',
    'GB',
    'US',
    'UM',
    'UY',
    'UZ',
    'VU',
    'VE',
    'VN',
    'VG',
    'VI',
    'WF',
    'EH',
    'YE',
    'ZM',
    'ZW',
    'BQ',
    'CW',
    'SX',
    'SS',
  ])
  .openapi({
    description:
      'Country of residence as a valid ISO 3166-1 alpha-2 country code e.g. "AU", "NZ", "CA". Only applicable, and mandatory if income type is WORKINGHOLIDAYMAKER.',
    example: 'AU',
  })
  .openapi('CountryOfResidence')

const LeaveBalanceSchema = z
  .object({
    LeaveName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the leave type', example: 'Annual Leave' }),
    LeaveTypeID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier of the leave type (see PayItems)',
        example: '544d9292-4329-4512-bfff-a9f15236d776',
      }),
    NumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The balance of the leave available',
        'x-is-money': true,
        example: 81.2602,
      }),
    TypeOfUnits: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of units as specified by the LeaveType (see PayItems)',
        example: 'Hours',
      }),
  })
  .openapi({ required: [] })
  .openapi('LeaveBalance')

const SuperMembershipSchema = z
  .object({
    SuperMembershipID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero unique identifier for Super membership',
        example: '4333d5cd-53a5-4c31-98e5-a8b4e5676b0b',
      }),
    SuperFundID: z
      .uuid()
      .openapi({
        description: 'Xero identifier for super fund',
        example: '2187a42b-639a-45cb-9eed-cd4ae488306a',
      }),
    EmployeeNumber: z
      .string()
      .openapi({
        description: 'The membership number assigned to the employee by the super fund.',
        example: 1234,
      }),
  })
  .openapi({ required: ['SuperFundID', 'EmployeeNumber'] })
  .openapi('SuperMembership')

const EmployeeStatusSchema = z
  .enum(['ACTIVE', 'TERMINATED'])
  .openapi({ description: 'Employee Status Types' })
  .openapi('EmployeeStatus')

const ValidationErrorSchema = z
  .object({
    Message: z.string().exactOptional().openapi({ description: 'Validation error message' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/http-response-codes' },
    required: [],
  })
  .openapi('ValidationError')

const EmployeeSchema = z
  .object({
    FirstName: z.string().openapi({ description: 'First name of employee', example: 'Karen' }),
    LastName: z.string().openapi({ description: 'Last name of employee', example: 'Jones' }),
    DateOfBirth: z
      .string()
      .openapi({
        description: 'Date of birth of the employee (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    HomeAddress: HomeAddressSchema.exactOptional(),
    StartDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Start date for an employee (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(320284900000+0000)/',
      }),
    Title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the employee', example: 'Mrs' }),
    MiddleNames: z
      .string()
      .exactOptional()
      .openapi({ description: 'Middle name(s) of the employee', example: 'Adena' }),
    Email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address for the employee', example: 'developer@me.com' }),
    Gender: z
      .enum(['N', 'M', 'F', 'I'])
      .exactOptional()
      .openapi({ description: 'The employee’s gender. See Employee Gender', example: 'F' }),
    Phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Employee phone number', example: '415-555-1212' }),
    Mobile: z
      .string()
      .exactOptional()
      .openapi({ description: 'Employee mobile number', example: '415-234-5678' }),
    TwitterUserName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Employee’s twitter name', example: 'xeroapi' }),
    IsAuthorisedToApproveLeave: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Authorised to approve other employees' leave requests",
        example: false,
      }),
    IsAuthorisedToApproveTimesheets: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Authorised to approve timesheets', example: true }),
    JobTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'JobTitle of the employee', example: 'Manager' }),
    Classification: z
      .string()
      .exactOptional()
      .openapi({ description: 'Employees classification', example: 99383 }),
    OrdinaryEarningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero unique identifier for earnings rate',
        example: '5gj1e5cc-9835-40d5-bb18-09fdb118db9c',
      }),
    PayrollCalendarID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero unique identifier for payroll calendar for the employee',
        example: '2ee8e5cc-9835-40d5-bb18-09fdb118db9c',
      }),
    EmployeeGroupName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Employee Group allows you to report on payroll expenses and liabilities for each group of employees',
        example: 'marketing',
      }),
    EmployeeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero unique identifier for an Employee',
        example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
      }),
    TerminationDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Employee Termination Date (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(1584662400000+0000)/',
      }),
    TerminationReason: z
      .enum(['V', 'I', 'D', 'R', 'F', 'C', 'T'])
      .exactOptional()
      .openapi({
        description:
          '* `V` Voluntary cessation - An employee resignation, retirement, domestic or pressing necessity or abandonment of employment\n* `I` Ill health - An employee resignation due to medical condition that prevents the continuation of employment, such as for illness, ill-health, medical unfitness or total permanent disability\n* `D` Deceased - The death of an employee\n* `R` Redundancy - An employer-initiated termination of employment due to a genuine redundancy or approved early retirement scheme\n* `F` Dismissal - An employer-initiated termination of employment due to dismissal, inability to perform the required work, misconduct or inefficiency\n* `C` Contract cessation - The natural conclusion of a limited employment relationship due to contract/engagement duration or task completion, seasonal work completion, or to cease casuals that are no longer required\n* `T` Transfer - The administrative arrangements performed to transfer employees across payroll systems, move them temporarily to another employer (machinery of government for public servants), transfer of business, move them to outsourcing arrangements or other such technical activities.\n',
        example: 'F',
      }),
    BankAccounts: z.array(BankAccountSchema).exactOptional(),
    PayTemplate: PayTemplateSchema.exactOptional(),
    OpeningBalances: OpeningBalancesSchema.exactOptional(),
    TaxDeclaration: TaxDeclarationSchema.exactOptional(),
    IncomeType: IncomeTypeSchema.exactOptional(),
    EmploymentType: EmploymentTypeSchema.exactOptional(),
    CountryOfResidence: CountryOfResidenceSchema.exactOptional(),
    IsSTP2Qualified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates if the employee has been updated for STP Phase 2 compliance. Doesn't indicate that the employee is payable.",
        example: true,
      }),
    LeaveBalances: z.array(LeaveBalanceSchema).exactOptional(),
    SuperMemberships: z.array(SuperMembershipSchema).exactOptional(),
    Status: EmployeeStatusSchema.exactOptional(),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({ required: ['FirstName', 'LastName', 'DateOfBirth'] })
  .openapi('Employee')

const EmployeesSchema = z
  .object({ Employees: z.array(EmployeeSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'employees', required: [] })
  .openapi('Employees')

const PayOutTypeSchema = z
  .enum(['DEFAULT', 'CASHED_OUT'])
  .openapi({ description: 'How the requested leave will be paid out, e.g. cashed out.' })
  .openapi('PayOutType')

const LeavePeriodStatusSchema = z
  .enum(['SCHEDULED', 'PROCESSED', 'REQUESTED', 'REJECTED'])
  .openapi('LeavePeriodStatus')

const LeavePeriodSchema = z
  .object({
    NumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The Number of Units for the leave',
        'x-is-money': true,
        example: 22.8,
      }),
    PayPeriodEndDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Pay Period End Date (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    PayPeriodStartDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Pay Period Start Date (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    LeavePeriodStatus: LeavePeriodStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LeavePeriod')

const LeaveApplicationSchema = z
  .object({
    LeaveApplicationID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for Payroll Employee',
        example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39',
      }),
    EmployeeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for Payroll Employee',
        example: 'fb4ebd68-6568-41eb-96ab-628a0f54b4b8',
      }),
    LeaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for Leave Type',
        example: '742998cb-7584-4ecf-aa88-d694f59c50f9',
      }),
    Title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the leave', example: 'Annual Leave' }),
    StartDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Start date of the leave (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    EndDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'End date of the leave (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Description of the Leave', example: 'My leave' }),
    PayOutType: PayOutTypeSchema.exactOptional(),
    LeavePeriods: z.array(LeavePeriodSchema).exactOptional(),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({ required: [] })
  .openapi('LeaveApplication')

const LeaveApplicationsSchema = z
  .object({ LeaveApplications: z.array(LeaveApplicationSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'leave_applications', required: [] })
  .openapi('LeaveApplications')

const EarningsTypeSchema = z
  .enum([
    'FIXED',
    'ORDINARYTIMEEARNINGS',
    'OVERTIMEEARNINGS',
    'ALLOWANCE',
    'LUMPSUMD',
    'EMPLOYMENTTERMINATIONPAYMENT',
    'LUMPSUMA',
    'LUMPSUMB',
    'BONUSESANDCOMMISSIONS',
    'LUMPSUME',
    'LUMPSUMW',
    'DIRECTORSFEES',
    'PAIDPARENTALLEAVE',
    'WORKERSCOMPENSATION',
  ])
  .openapi('EarningsType')

const RateTypeSchema = z.enum(['FIXEDAMOUNT', 'MULTIPLE', 'RATEPERUNIT']).openapi('RateType')

const AllowanceTypeSchema = z
  .enum([
    'CAR',
    'TRANSPORT',
    'LAUNDRY',
    'MEALS',
    'TRAVEL',
    'OTHER',
    'TOOLS',
    'TASKS',
    'QUALIFICATIONS',
  ])
  .openapi('AllowanceType')

const AllowanceCategorySchema = z
  .enum([
    'NONDEDUCTIBLE',
    'UNIFORM',
    'PRIVATEVEHICLE',
    'HOMEOFFICE',
    'TRANSPORT',
    'GENERAL',
    'OTHER',
  ])
  .openapi('AllowanceCategory')

const EarningsRateSchema = z
  .object({
    Name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Name of the earnings rate (max length = 100)', example: 'PTO' }),
    AccountCode: z.string().exactOptional().openapi({ description: 'See Accounts', example: 720 }),
    TypeOfUnits: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT',
        example: 'Fixed',
      }),
    IsExemptFromTax: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding',
        example: false,
      }),
    IsExemptFromSuper: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'See the ATO website for details of which payments are exempt from SGC',
        example: false,
      }),
    IsReportableAsW1: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean to determine if the earnings rate is reportable or exempt from W1',
        example: false,
      }),
    IsQualifyingEarnings: z
      .boolean()
      .openapi({
        description:
          'Boolean to determine if the earnings rate is considered as qualifying earnings for superannuation guarantee calculations',
        example: true,
      }),
    AllowanceContributesToAnnualLeaveRate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to determine if the allowance earnings rate contributes towards annual leave rate. Only applicable if EarningsType is ALLOWANCE and RateType is RATEPERUNIT',
        example: false,
      }),
    AllowanceContributesToOvertimeRate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to determine if the allowance earnings rate contributes towards overtime allowance rate. Only applicable if EarningsType is ALLOWANCE and RateType is RATEPERUNIT',
        example: false,
      }),
    EarningsType: EarningsTypeSchema.exactOptional(),
    EarningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier', example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39' }),
    RateType: RateTypeSchema.exactOptional(),
    RatePerUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT.',
        example: 10,
      }),
    Multiplier: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE',
        'x-is-money': true,
        example: 1.5,
      }),
    AccrueLeave: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE',
        example: false,
      }),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Optional Amount for FIXEDAMOUNT RateType EarningsRate',
        'x-is-money': true,
        example: 50.3,
      }),
    EmploymentTerminationPaymentType: EmploymentTerminationPaymentTypeSchema.exactOptional(),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    CurrentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the current record', example: true }),
    AllowanceType: AllowanceTypeSchema.exactOptional(),
    AllowanceCategory: AllowanceCategorySchema.exactOptional(),
  })
  .openapi({ required: ['IsQualifyingEarnings'] })
  .openapi('EarningsRate')

const DeductionTypeSchema = z
  .object({
    Name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Name of the earnings rate (max length = 100)', example: 'PTO' }),
    AccountCode: z.string().exactOptional().openapi({ description: 'See Accounts', example: 720 }),
    ReducesTax: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that this is a pre-tax deduction that will reduce the amount of tax you withhold from an employee.',
        example: false,
      }),
    ReducesSuper: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Most deductions don’t reduce your superannuation guarantee contribution liability, so typically you will not set any value for this.',
        example: false,
      }),
    IsExemptFromW1: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean to determine if the deduction type is reportable or exempt from W1',
        example: false,
      }),
    DeductionTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier', example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39' }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    DeductionCategory: z.enum(['NONE', 'UNIONFEES', 'WORKPLACEGIVING']).exactOptional(),
    CurrentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the current record', example: true }),
  })
  .openapi({ required: [] })
  .openapi('DeductionType')

const LeaveCategoryCodeSchema = z
  .enum([
    'ANNUALLEAVE',
    'LONGSERVICELEAVE',
    'PERSONALSICKCARERSLEAVE',
    'ROSTEREDDAYOFF',
    'TIMEOFFINLIEU',
    'COMPASSIONATEANDBEREAVEMENTLEAVE',
    'STUDYLEAVE',
    'FAMILYANDDOMESTICVIOLENCELEAVE',
    'SPECIALPAIDLEAVE',
    'COMMUNITYSERVICELEAVE',
    'JURYDUTYLEAVE',
    'DEFENCERESERVELEAVE',
  ])
  .openapi({ description: 'Code used to identify the Leave Category', example: 'ANNUALLEAVE' })
  .openapi('LeaveCategoryCode')

const LeaveTypeSchema = z
  .object({
    Name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Name of the earnings rate (max length = 100)', example: 'PTO' }),
    TypeOfUnits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate',
        example: 'Hours',
      }),
    LeaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier', example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39' }),
    NormalEntitlement: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The number of units the employee is entitled to each year',
        example: 152,
      }),
    LeaveLoadingRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)',
        example: 2,
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    IsPaidLeave: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this to indicate that an employee will be paid when taking this type of leave',
        example: true,
      }),
    ShowOnPayslip: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this if you want a balance for this leave type to be shown on your employee’s payslips',
        example: true,
      }),
    CurrentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the current record', example: true }),
    LeaveCategoryCode: LeaveCategoryCodeSchema.exactOptional(),
    SGCExempt: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this to indicate that the leave type is exempt from superannuation guarantee contribution',
        example: true,
      }),
    IsQualifyingEarnings: z
      .boolean()
      .openapi({
        description:
          'Boolean to determine if the leave type is considered as qualifying earnings for superannuation guarantee calculations',
        example: true,
      }),
  })
  .openapi({ required: ['IsQualifyingEarnings'] })
  .openapi('LeaveType')

const ReimbursementTypeSchema = z
  .object({
    Name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Name of the earnings rate (max length = 100)', example: 'PTO' }),
    AccountCode: z.string().exactOptional().openapi({ description: 'See Accounts', example: 720 }),
    ReimbursementTypeID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier', example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39' }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    CurrentRecord: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the current record', example: true }),
  })
  .openapi({ required: [] })
  .openapi('ReimbursementType')

const PayItemSchema = z
  .object({
    EarningsRates: z.array(EarningsRateSchema).exactOptional(),
    DeductionTypes: z.array(DeductionTypeSchema).exactOptional(),
    LeaveTypes: z.array(LeaveTypeSchema).exactOptional(),
    ReimbursementTypes: z.array(ReimbursementTypeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayItem')

const PayItemsSchema = z
  .object({ PayItems: PayItemSchema.exactOptional() })
  .openapi({ 'x-objectArrayKey': 'pay_items', required: [] })
  .openapi('PayItems')

const CalendarTypeSchema = z
  .enum(['WEEKLY', 'FORTNIGHTLY', 'FOURWEEKLY', 'MONTHLY', 'TWICEMONTHLY', 'QUARTERLY'])
  .openapi('CalendarType')

const PayrollCalendarSchema = z
  .object({
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Payroll Calendar', example: 'Fortnightly Calendar' }),
    CalendarType: CalendarTypeSchema.exactOptional(),
    StartDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start date of the upcoming pay period. The end date will be calculated based upon this date, and the calendar type selected (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    PaymentDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which employees will be paid for the upcoming pay period (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    PayrollCalendarID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier', example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39' }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    ReferenceDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reference Date (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({ required: [] })
  .openapi('PayrollCalendar')

const PayrollCalendarsSchema = z
  .object({ PayrollCalendars: z.array(PayrollCalendarSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'payroll_calendars', required: [] })
  .openapi('PayrollCalendars')

const TimesheetStatusSchema = z
  .enum(['DRAFT', 'PROCESSED', 'APPROVED', 'REJECTED', 'REQUESTED'])
  .openapi('TimesheetStatus')

const TimesheetLineSchema = z
  .object({
    EarningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for an Earnings Rate',
        example: '966c5c77-2ef0-4320-b6a9-6c27b080ecc5',
      }),
    TrackingItemID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings.',
        example: 'ae777a87-5ef3-4fa0-a4f0-d10e1f13073a',
      }),
    NumberOfUnits: z
      .array(
        z.float64().openapi({ description: 'Number of units of a Timesheet line', example: 3 }),
      )
      .exactOptional()
      .openapi({ description: 'The number of units on a timesheet line' }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
  })
  .openapi({ required: [] })
  .openapi('TimesheetLine')

const TimesheetLinesSchema = z.array(TimesheetLineSchema).openapi('TimesheetLines')

const TimesheetSchema = z
  .object({
    EmployeeID: z
      .uuid()
      .openapi({
        description: 'The Xero identifier for an employee',
        example: '72a0d0c2-0cf8-4f0b-ade1-33231f47b41b',
      }),
    StartDate: z
      .string()
      .openapi({
        description: 'Period start date (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    EndDate: z
      .string()
      .openapi({
        description: 'Period end date (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    Status: TimesheetStatusSchema.exactOptional(),
    Hours: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Timesheet total hours', 'x-is-money': true, example: 31 }),
    TimesheetID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for a Payroll Timesheet',
        example: '049765fc-4506-48fb-bf88-3578dec0ec47',
      }),
    TimesheetLines: TimesheetLinesSchema.exactOptional(),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({ required: ['EmployeeID', 'StartDate', 'EndDate'] })
  .openapi('Timesheet')

const TimesheetsSchema = z
  .object({ Timesheets: z.array(TimesheetSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'timesheets', required: [] })
  .openapi('Timesheets')

const TimesheetObjectSchema = z
  .object({ Timesheet: TimesheetSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('TimesheetObject')

const PayRunStatusSchema = z.enum(['DRAFT', 'POSTED']).openapi('PayRunStatus')

const PayslipSummarySchema = z
  .object({
    EmployeeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for an employee',
        example: '4729f087-8eec-49c1-8294-4d11a5a0a37c',
      }),
    PayslipID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for the payslip',
        example: 'f3c0874d-7cdd-459a-a95c-d90d51decc42',
      }),
    FirstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of employee', example: 'Karen' }),
    LastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of employee', example: 'Jones' }),
    EmployeeGroup: z
      .string()
      .exactOptional()
      .openapi({ description: 'Employee group name', example: 'Marketing' }),
    Wages: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Wages for the Payslip', 'x-is-money': true, example: 1060.5 }),
    Deductions: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Deductions for the Payslip', 'x-is-money': true, example: 0 }),
    Tax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Tax for the Payslip', 'x-is-money': true, example: 198 }),
    Super: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Super for the Payslip', 'x-is-money': true, example: 75.6 }),
    Reimbursements: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The Reimbursements for the Payslip',
        'x-is-money': true,
        example: 0,
      }),
    NetPay: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The NetPay for the Payslip', 'x-is-money': true, example: 862.5 }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
  })
  .openapi({ required: [] })
  .openapi('PayslipSummary')

const PayRunSchema = z
  .object({
    PayrollCalendarID: z
      .uuid()
      .openapi({
        description: 'Xero identifier for pay run',
        example: 'bfac31bd-ea62-4fc8-a5e7-7965d9504b15',
      }),
    PayRunID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for pay run',
        example: 'bba1d10f-63b1-4692-b5c5-a99f869523a4',
      }),
    PayRunPeriodStartDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Period Start Date for the PayRun (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    PayRunPeriodEndDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Period End Date for the PayRun (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    PayRunStatus: PayRunStatusSchema.exactOptional(),
    PaymentDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Payment Date for the PayRun (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    PayslipMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Payslip message for the PayRun',
        example: 'Thanks for being awesome',
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    Payslips: z
      .array(PayslipSummarySchema)
      .exactOptional()
      .openapi({ description: 'The payslips in the payrun' }),
    Wages: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total Wages for the Payrun',
        'x-is-money': true,
        example: 1060.5,
      }),
    Deductions: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total Deductions for the Payrun',
        'x-is-money': true,
        example: 0,
      }),
    Tax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total Tax for the Payrun', 'x-is-money': true, example: 198 }),
    Super: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total Super for the Payrun',
        'x-is-money': true,
        example: 75.6,
      }),
    Reimbursement: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total Reimbursements for the Payrun',
        'x-is-money': true,
        example: 0,
      }),
    NetPay: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total NetPay for the Payrun',
        'x-is-money': true,
        example: 862.5,
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({ required: ['PayrollCalendarID'] })
  .openapi('PayRun')

const PayRunsSchema = z
  .object({ PayRuns: z.array(PayRunSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'pay_runs', required: [] })
  .openapi('PayRuns')

const LeaveEarningsLineSchema = z
  .object({
    EarningsRateID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero identifier', example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39' }),
    RatePerUnit: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Rate per unit of the EarningsLine.',
        'x-is-money': true,
        example: 38,
      }),
    NumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Earnings rate number of units.', 'x-is-money': true, example: 2.5 }),
    PayOutType: PayOutTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LeaveEarningsLine')

const LeaveAccrualLineSchema = z
  .object({
    LeaveTypeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for the Leave type.',
        example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39',
      }),
    NumberOfUnits: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Leave Accrual number of units',
        'x-is-money': true,
        example: 105.5,
      }),
    AutoCalculate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If you want to auto calculate leave.', example: true }),
  })
  .openapi({ required: [] })
  .openapi('LeaveAccrualLine')

const SuperannuationLineSchema = z
  .object({
    SuperMembershipID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for payroll super fund membership ID.',
        example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39',
      }),
    ContributionType: SuperannuationContributionTypeSchema.exactOptional(),
    CalculationType: SuperannuationCalculationTypeSchema.exactOptional(),
    MinimumMonthlyEarnings: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Superannuation minimum monthly earnings.',
        'x-is-money': true,
        example: 100.5,
      }),
    ExpenseAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Superannuation expense account code.', example: 450 }),
    LiabilityAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Superannuation liability account code', example: 650 }),
    PaymentDateForThisPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Superannuation payment date for the current period (YYYY-MM-DD)',
        'x-is-msdate': true,
        example: '/Date(322560000000+0000)/',
      }),
    Percentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Superannuation percentage', 'x-is-money': true, example: 4 }),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Superannuation amount', 'x-is-money': true, example: 10.5 }),
  })
  .openapi({ required: [] })
  .openapi('SuperannuationLine')

const ManualTaxTypeSchema = z
  .enum([
    'PAYGMANUAL',
    'ETPOMANUAL',
    'ETPRMANUAL',
    'SCHEDULE5MANUAL',
    'SCHEDULE5STSLMANUAL',
    'SCHEDULE4MANUAL',
  ])
  .openapi('ManualTaxType')

const TaxLineSchema = z
  .object({
    PayslipTaxLineID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for payslip tax line ID.',
        example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39',
      }),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The tax line amount', 'x-is-money': true, example: 50 }),
    TaxTypeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the tax type.', example: 'Manual Adjustment' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the tax line.' }),
    ManualTaxType: ManualTaxTypeSchema.exactOptional(),
    LiabilityAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tax line liability account code. For posted pay run you should be able to see liability account code',
        example: 620,
      }),
  })
  .openapi({ required: [] })
  .openapi('TaxLine')

const PayslipLinesSchema = z
  .object({
    EarningsLines: z.array(EarningsLineSchema).exactOptional(),
    LeaveEarningsLines: z.array(LeaveEarningsLineSchema).exactOptional(),
    TimesheetEarningsLines: z.array(EarningsLineSchema).exactOptional(),
    DeductionLines: z.array(DeductionLineSchema).exactOptional(),
    LeaveAccrualLines: z.array(LeaveAccrualLineSchema).exactOptional(),
    ReimbursementLines: z.array(ReimbursementLineSchema).exactOptional(),
    SuperannuationLines: z.array(SuperannuationLineSchema).exactOptional(),
    TaxLines: z.array(TaxLineSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayslipLines')

const PayslipSchema = z
  .object({
    EmployeeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for an employee',
        example: '4729f087-8eec-49c1-8294-4d11a5a0a37c',
      }),
    PayslipID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for the payslip',
        example: 'f3c0874d-7cdd-459a-a95c-d90d51decc42',
      }),
    FirstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of employee', example: 'Karen' }),
    LastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of employee', example: 'Jones' }),
    Wages: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Wages for the Payslip', 'x-is-money': true, example: 1060.5 }),
    Deductions: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Deductions for the Payslip', 'x-is-money': true, example: 0 }),
    Tax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Tax for the Payslip', 'x-is-money': true, example: 198 }),
    Super: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Super for the Payslip', 'x-is-money': true, example: 75.6 }),
    Reimbursements: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The Reimbursements for the Payslip',
        'x-is-money': true,
        example: 0,
      }),
    NetPay: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The NetPay for the Payslip', 'x-is-money': true, example: 862.5 }),
    EarningsLines: z.array(EarningsLineSchema).exactOptional(),
    LeaveEarningsLines: z.array(LeaveEarningsLineSchema).exactOptional(),
    TimesheetEarningsLines: z.array(EarningsLineSchema).exactOptional(),
    DeductionLines: z.array(DeductionLineSchema).exactOptional(),
    LeaveAccrualLines: z.array(LeaveAccrualLineSchema).exactOptional(),
    ReimbursementLines: z.array(ReimbursementLineSchema).exactOptional(),
    SuperannuationLines: z.array(SuperannuationLineSchema).exactOptional(),
    TaxLines: z.array(TaxLineSchema).exactOptional(),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
  })
  .openapi({ required: [] })
  .openapi('Payslip')

const PayslipObjectSchema = z
  .object({ Payslip: PayslipSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PayslipObject')

const PayslipsSchema = z
  .object({ Payslips: z.array(PayslipSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'payslips', required: [] })
  .openapi('Payslips')

const AccountTypeSchema = z
  .enum([
    'BANK',
    'CURRENT',
    'CURRLIAB',
    'DEPRECIATN',
    'DIRECTCOSTS',
    'EQUITY',
    'EXPENSE',
    'FIXED',
    'INVENTORY',
    'LIABILITY',
    'NONCURRENT',
    'OTHERINCOME',
    'OVERHEADS',
    'PREPAYMENT',
    'REVENUE',
    'SALES',
    'TERMLIAB',
    'PAYGLIABILITY',
    'PAYG',
    'SUPERANNUATIONEXPENSE',
    'SUPERANNUATIONLIABILITY',
    'WAGESEXPENSE',
    'WAGESPAYABLELIABILITY',
  ])
  .openapi({ description: 'See Account Types' })
  .openapi('AccountType')

const AccountSchema = z
  .object({
    AccountID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for accounts',
        example: 'c56b19ef-75bf-45e8-98a4-e699a96609f7',
      }),
    Type: AccountTypeSchema.exactOptional(),
    Code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer defined account code', example: 420 }),
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of account', example: 'General expenses' }),
  })
  .openapi({ required: [] })
  .openapi('Account')

const SettingsSchema = z
  .object({
    Accounts: z
      .array(AccountSchema)
      .exactOptional()
      .openapi({
        description:
          'Payroll Account details for SuperExpense, SuperLiabilty, WagesExpense, PAYGLiability & WagesPayable.',
      }),
    TrackingCategories: z
      .object({
        EmployeeGroups: z
          .object({
            TrackingCategoryID: z
              .uuid()
              .exactOptional()
              .openapi({
                description: 'The identifier for the tracking category',
                example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39',
              }),
            TrackingCategoryName: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the tracking category' }),
          })
          .exactOptional()
          .openapi({ description: 'The tracking category used for employees', required: [] }),
        TimesheetCategories: z
          .object({
            TrackingCategoryID: z
              .uuid()
              .exactOptional()
              .openapi({
                description: 'The identifier for the tracking category',
                example: 'e0eb6747-7c17-4075-b804-989f8d4e5d39',
              }),
            TrackingCategoryName: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the tracking category' }),
          })
          .exactOptional()
          .openapi({ description: 'The tracking category used for timesheets', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Tracking categories for Employees and Timesheets', required: [] }),
    DaysInPayrollYear: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of days in the Payroll year', example: 365 }),
    EmployeesAreSTP2: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the organisation has been enabled for STP Phase 2 editing of employees.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Settings')

const SettingsObjectSchema = z
  .object({ Settings: SettingsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SettingsObject')

const SuperFundTypeSchema = z.enum(['REGULATED', 'SMSF']).openapi('SuperFundType')

const SuperFundSchema = z
  .object({
    SuperFundID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for a super fund',
        example: 'bfac31bd-ea62-4fc8-a5e7-7965d9504b15',
      }),
    Type: SuperFundTypeSchema,
    Name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the super fund',
        example:
          'MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)',
      }),
    ABN: z
      .string()
      .exactOptional()
      .openapi({ description: 'ABN of the self managed super fund', example: 40022701955 }),
    BSB: z
      .string()
      .exactOptional()
      .openapi({ description: 'BSB of the self managed super fund', example: 234324 }),
    AccountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The account number for the self managed super fund.',
        example: 234234234,
      }),
    AccountName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The account name for the self managed super fund.',
        example: 'Money account',
      }),
    ElectronicServiceAddress: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The electronic service address for the self managed super fund.',
        example: 12345678,
      }),
    EmployerNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Some funds assign a unique number to each employer',
        example: 324324,
      }),
    SPIN: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SPIN of the Regulated SuperFund. This field has been deprecated. It will only be present for legacy superfunds. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN.',
        example: 4545445454,
      }),
    USI: z
      .string()
      .exactOptional()
      .openapi({ description: 'The USI of the Regulated SuperFund', example: 40022701955001 }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified timestamp',
        readOnly: true,
        'x-is-msdate-time': true,
        example: '/Date(1583967733054+0000)/',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({ required: ['Type'] })
  .openapi('SuperFund')

const SuperFundsSchema = z
  .object({ SuperFunds: z.array(SuperFundSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'super_funds', required: [] })
  .openapi('SuperFunds')

const SuperFundProductSchema = z
  .object({
    ABN: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ABN of the Regulated SuperFund', example: 839182848805 }),
    USI: z
      .string()
      .exactOptional()
      .openapi({ description: 'The USI of the Regulated SuperFund', example: 839182848805001 }),
    SPIN: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SPIN of the Regulated SuperFund. This field has been deprecated. New superfunds will not have a SPIN value. The USI field should be used instead of SPIN',
        example: 'NML0117AU',
      }),
    ProductName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the Regulated SuperFund',
        example:
          'MLC Navigator Retirement Plan - Superannuation Service (including Series 2) (MLC Superannuation Fund)',
      }),
  })
  .openapi({ required: [] })
  .openapi('SuperFundProduct')

const SuperFundProductsSchema = z
  .object({ SuperFundProducts: z.array(SuperFundProductSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'super_fund_products', required: [] })
  .openapi('SuperFundProducts')

const ReimbursementLinesSchema = z
  .object({ ReimbursementLines: z.array(ReimbursementLineSchema).exactOptional() })
  .openapi({
    'x-objectArrayKey': 'reimbursement_lines',
    description: 'The reimbursement type lines',
    required: [],
  })
  .openapi('ReimbursementLines')

const LeaveLinesSchema = z
  .object({ Employee: z.array(LeaveLineSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'employee', description: 'The leave type lines', required: [] })
  .openapi('LeaveLines')

const PaymentFrequencyTypeSchema = z
  .enum(['WEEKLY', 'MONTHLY', 'FORTNIGHTLY', 'QUARTERLY', 'TWICEMONTHLY', 'FOURWEEKLY', 'YEARLY'])
  .openapi('PaymentFrequencyType')

const LeaveTypeContributionTypeSchema = z
  .enum(['SGC', 'SALARYSACRIFICE', 'EMPLOYERADDITIONAL', 'EMPLOYEE'])
  .openapi('LeaveTypeContributionType')

const APIExceptionSchema = z
  .object({
    ErrorNumber: z
      .number()
      .exactOptional()
      .openapi({ description: 'The error number', example: 16 }),
    Type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error', example: 'QueryParseException' }),
    Message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The message describing the error',
        example: "No property or field 'hi' exists in type 'Employee' (at index 0)",
      }),
  })
  .openapi({ description: 'The object returned for a bad request', required: [] })
  .openapi('APIException')

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
        email: 'Grant read-only access to your email',
        openid: 'Grant read-only access to your open id',
        profile: 'your profile information',
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
  tags: ['PayrollAu'],
  summary: 'Searches payroll employees',
  operationId: 'getEmployees',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            'x-snake': 'if_modified_since',
            description: 'Only records created or modified since this timestamp will be returned',
            example: '2020-02-06T12:17:43.202-08:00',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            schema: { type: 'string' },
            example: 'Status=="ACTIVE"',
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            schema: { type: 'string' },
            example: 'EmailAddress%20DESC',
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
            description: 'e.g. page=1 – Up to 100 employees will be returned in a single API call',
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
          schema: EmployeesSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573621523465)/',
            Employees: [
              {
                EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
                FirstName: 'Jack',
                MiddleNames: 'Johnson',
                LastName: 'Sparrow',
                Status: 'ACTIVE',
                Email: 'jack.sparrow@xero.com',
                DateOfBirth: '/Date(572313600000+0000)/',
                Gender: 'M',
                Phone: '4153332323',
                Mobile: '415-1234567',
                StartDate: '/Date(1547164800000+0000)/',
                OrdinaryEarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                PayrollCalendarID: '22a05fc5-386d-4950-9842-3e7a6c812135',
                UpdatedDateUTC: '/Date(1572915814000+0000)/',
                IsSTP2Qualified: false,
              },
              {
                EmployeeID: '7aa04979-ded5-44d9-b09a-793749425844',
                FirstName: 'John',
                LastName: 'Smith',
                Status: 'ACTIVE',
                Email: 'john.smith@xero.com',
                DateOfBirth: '/Date(315619200000+0000)/',
                Gender: 'M',
                StartDate: '/Date(1572566400000+0000)/',
                OrdinaryEarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                PayrollCalendarID: '78bb86b9-e1ea-47ac-b75d-f087a81931de',
                UpdatedDateUTC: '/Date(1572916028000+0000)/',
                IsSTP2Qualified: false,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesRoute = createRoute({
  method: 'post',
  path: '/Employees',
  tags: ['PayrollAu'],
  summary: 'Creates a payroll employee',
  operationId: 'createEmployee',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(EmployeeSchema),
          example:
            '[ { "FirstName": "Albus", "LastName": "Dumbledore", "DateOfBirth": "/Date(321523200000+0000)/", "HomeAddress": { "AddressLine1": "101 Green St", "City": "Island Bay", "Region": "NSW", "PostalCode": "6023", "Country": "AUSTRALIA" }, "StartDate": "/Date(321523200000+0000)/", "MiddleNames": "Percival", "Email": "albus39608@hogwarts.edu", "Gender": "M", "Phone": "444-2323", "Mobile": "555-1212", "IsAuthorisedToApproveLeave": true, "IsAuthorisedToApproveTimesheets": true, "JobTitle": "Regional Manager", "Classification": "corporate", "OrdinaryEarningsRateID": "ab874dfb-ab09-4c91-954e-43acf6fc23b4", "Status": "ACTIVE" } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: EmployeesSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573621524489)/',
            Employees: [
              {
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                FirstName: 'Albus',
                MiddleNames: 'Percival',
                LastName: 'Dumbledore',
                Status: 'ACTIVE',
                Email: 'albus39608@hogwarts.edu',
                DateOfBirth: '/Date(321523200000+0000)/',
                JobTitle: 'Regional Manager',
                Gender: 'M',
                HomeAddress: {
                  AddressLine1: '101 Green St',
                  City: 'Island Bay',
                  Region: 'NSW',
                  PostalCode: '6023',
                  Country: 'AUSTRALIA',
                },
                Phone: '444-2323',
                Mobile: '555-1212',
                StartDate: '/Date(321523200000+0000)/',
                Classification: 'corporate',
                OrdinaryEarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                UpdatedDateUTC: '/Date(1573621524458+0000)/',
                IsAuthorisedToApproveLeave: true,
                IsAuthorisedToApproveTimesheets: true,
              },
            ],
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid - TODO' },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getEmployeesEmployeeIDRoute = createRoute({
  method: 'get',
  path: '/Employees/{EmployeeID}',
  tags: ['PayrollAu'],
  summary: "Retrieves an employee's detail by unique employee id",
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
          schema: EmployeesSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573623316150)/',
            Employees: [
              {
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                Title: 'Mr.',
                FirstName: 'Albus',
                MiddleNames: 'Frank',
                LastName: 'Dumbledore',
                Status: 'ACTIVE',
                Email: 'albus39608@hogwarts.edu',
                DateOfBirth: '/Date(321494400000+0000)/',
                JobTitle: 'Regional Manager',
                Gender: 'M',
                HomeAddress: {
                  AddressLine1: '101 Green St',
                  City: 'Island Bay',
                  Region: 'NSW',
                  PostalCode: '6023',
                  Country: 'AUSTRALIA',
                },
                Phone: '444-2323',
                Mobile: '555-1212',
                StartDate: '/Date(321494400000+0000)/',
                Classification: 'corporate',
                OrdinaryEarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                PayrollCalendarID: '78bb86b9-e1ea-47ac-b75d-f087a81931de',
                UpdatedDateUTC: '/Date(1573623306000+0000)/',
                EmployeeGroupName: 'foo',
                IsAuthorisedToApproveLeave: true,
                IsAuthorisedToApproveTimesheets: true,
                TaxDeclaration: {
                  AustralianResidentForTaxPurposes: true,
                  TaxFreeThresholdClaimed: true,
                  HasHELPDebt: false,
                  HasSFSSDebt: false,
                  EligibleToReceiveLeaveLoading: false,
                  UpdatedDateUTC: '/Date(1573623306000+0000)/',
                  HasStudentStartupLoan: false,
                  ResidencyStatus: 'AUSTRALIANRESIDENT',
                  IncludeLeaveLoadingInQualifyingEarnings: false,
                },
                BankAccounts: [],
                OpeningBalances: {
                  OpeningBalanceDate: '/Date(1573603200000+0000)/',
                  EarningsLines: [],
                  DeductionLines: [],
                  SuperLines: [],
                  ReimbursementLines: [],
                  LeaveLines: [
                    { LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca', NumberOfUnits: 10 },
                  ],
                  PaidLeaveEarningsLines: [],
                },
                PayTemplate: {
                  EarningsLines: [
                    {
                      EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                      CalculationType: 'USEEARNINGSRATE',
                      NormalNumberOfUnits: 3,
                    },
                  ],
                  DeductionLines: [
                    {
                      DeductionTypeID: 'ed05ea82-e40a-4eb6-9c2e-4b3c03e7e938',
                      CalculationType: 'FIXEDAMOUNT',
                      Amount: 4,
                    },
                  ],
                  SuperLines: [
                    {
                      ContributionType: 'SGC',
                      CalculationType: 'STATUTORY',
                      MinimumMonthlyEarnings: 450,
                      ExpenseAccountCode: '478',
                      LiabilityAccountCode: '826',
                    },
                  ],
                  ReimbursementLines: [
                    {
                      ReimbursementTypeID: 'aa8cfa40-d872-4be0-8a94-bb7f00962f74',
                      Description: 'boo',
                      Amount: 55,
                    },
                  ],
                  LeaveLines: [
                    {
                      LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                      CalculationType: 'FIXEDAMOUNTEACHPERIOD',
                      AnnualNumberOfUnits: 4,
                      EntitlementFinalPayPayoutType: 'NOTPAIDOUT',
                      IsQualifyingEarnings: false,
                    },
                  ],
                },
                SuperMemberships: [],
                LeaveBalances: [
                  {
                    LeaveName: 'Carer Leave (unpaid)',
                    LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                    NumberOfUnits: 10,
                    TypeOfUnits: 'Hours',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postEmployeesEmployeeIDRoute = createRoute({
  method: 'post',
  path: '/Employees/{EmployeeID}',
  tags: ['PayrollAu'],
  summary: "Updates an employee's detail",
  description: 'Update properties on a single employee',
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
          schema: z.array(EmployeeSchema),
          example: '[ { "MiddleNames": "Frank" } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: EmployeesSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: '3f93110a-df13-49c7-b82f-a069813df188',
            DateTimeUTC: '/Date(1573621524786)/',
            Employees: [
              {
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                FirstName: 'Albus',
                MiddleNames: 'Frank',
                LastName: 'Dumbledore',
                Status: 'ACTIVE',
                Email: 'albus39608@hogwarts.edu',
                DateOfBirth: '/Date(321523200000+0000)/',
                JobTitle: 'Regional Manager',
                Gender: 'M',
                HomeAddress: {
                  AddressLine1: '101 Green St',
                  City: 'Island Bay',
                  Region: 'NSW',
                  PostalCode: '6023',
                  Country: 'AUSTRALIA',
                },
                Phone: '444-2323',
                Mobile: '555-1212',
                StartDate: '/Date(321523200000+0000)/',
                Classification: 'corporate',
                OrdinaryEarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                UpdatedDateUTC: '/Date(1573621524755+0000)/',
                IsAuthorisedToApproveLeave: true,
                IsAuthorisedToApproveTimesheets: true,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getLeaveApplicationsRoute = createRoute({
  method: 'get',
  path: '/LeaveApplications',
  tags: ['PayrollAu'],
  summary: 'Retrieves leave applications',
  operationId: 'getLeaveApplications',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            'x-snake': 'if_modified_since',
            description: 'Only records created or modified since this timestamp will be returned',
            example: '2020-02-06T12:17:43.202-08:00',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            schema: { type: 'string' },
            example: 'Status=="ACTIVE"',
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            schema: { type: 'string' },
            example: 'EmailAddress%20DESC',
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
            description: 'e.g. page=1 – Up to 100 objects will be returned in a single API call',
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
          schema: LeaveApplicationsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573679791199)/',
            LeaveApplications: [
              {
                LeaveApplicationID: '1d4cd583-0107-4386-936b-672eb3d1f624',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1573171200000+0000)/',
                    PayPeriodEndDate: '/Date(1573689600000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 0,
                  },
                ],
                Title: 'vacation',
                StartDate: '/Date(1573516800000+0000)/',
                EndDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1573623008000+0000)/',
                PayOutType: 'DEFAULT',
              },
              {
                LeaveApplicationID: '3b934902-1e16-4c02-a3d3-68fa7d63e01d',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1573171200000+0000)/',
                    PayPeriodEndDate: '/Date(1573689600000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 8,
                  },
                ],
                Title: 'Cashed Out',
                StartDate: '/Date(1573516800000+0000)/',
                EndDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1573623008000+0000)/',
                PayOutType: 'CASHED_OUT',
              },
              {
                LeaveApplicationID: '62b90465-66e9-4c3a-8151-de1e6335554d',
                EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1571961600000+0000)/',
                    PayPeriodEndDate: '/Date(1572480000000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 0,
                  },
                  {
                    PayPeriodStartDate: '/Date(1572566400000+0000)/',
                    PayPeriodEndDate: '/Date(1573084800000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 0,
                  },
                ],
                Title: 'Yep Carer Leave',
                Description: 'My updated Description',
                StartDate: '/Date(1572559200000+0000)/',
                EndDate: '/Date(1572645600000+0000)/',
                UpdatedDateUTC: '/Date(1573447344000+0000)/',
                PayOutType: 'DEFAULT',
              },
              {
                LeaveApplicationID: 'e8bd9eeb-18c9-4475-9c81-b298f9aa26c0',
                EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1571961600000+0000)/',
                    PayPeriodEndDate: '/Date(1572480000000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 0,
                  },
                  {
                    PayPeriodStartDate: '/Date(1572566400000+0000)/',
                    PayPeriodEndDate: '/Date(1573084800000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 0,
                  },
                ],
                Title: 'Hello World',
                StartDate: '/Date(1572559200000+0000)/',
                EndDate: '/Date(1572645600000+0000)/',
                UpdatedDateUTC: '/Date(1573447343000+0000)/',
                PayOutType: 'DEFAULT',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postLeaveApplicationsRoute = createRoute({
  method: 'post',
  path: '/LeaveApplications',
  tags: ['PayrollAu'],
  summary: 'Creates a leave application',
  operationId: 'createLeaveApplication',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(LeaveApplicationSchema),
          example:
            '[ { "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e", "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca", "Title": "Hello World", "StartDate": "/Date(1572559200000+0000)/", "EndDate": "/Date(1572645600000+0000)/" } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: LeaveApplicationsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573679791917)/',
            LeaveApplications: [
              {
                LeaveApplicationID: '5f7097e4-51f2-46cc-921b-45bc73ea7831',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1572566400000+0000)/',
                    PayPeriodEndDate: '/Date(1573084800000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 7.6,
                  },
                ],
                Title: 'Hello World',
                StartDate: '/Date(1572559200000+0000)/',
                EndDate: '/Date(1572645600000+0000)/',
                UpdatedDateUTC: '/Date(1573679791897+0000)/',
                PayOutType: 'DEFAULT',
              },
            ],
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid - TODO' },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getLeaveApplicationsV2Route = createRoute({
  method: 'get',
  path: '/LeaveApplications/v2',
  tags: ['PayrollAu'],
  summary: 'Retrieves leave applications including leave requests',
  operationId: 'getLeaveApplicationsV2',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            'x-snake': 'if_modified_since',
            description: 'Only records created or modified since this timestamp will be returned',
            example: '2020-02-06T12:17:43.202-08:00',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            schema: { type: 'string' },
            example: 'Status=="ACTIVE"',
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            schema: { type: 'string' },
            example: 'EmailAddress%20DESC',
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
            description: 'e.g. page=1 – Up to 100 objects will be returned in a single API call',
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
          schema: LeaveApplicationsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573679791199)/',
            LeaveApplications: [
              {
                LeaveApplicationID: '1d4cd583-0107-4386-936b-672eb3d1f624',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1573171200000+0000)/',
                    PayPeriodEndDate: '/Date(1573689600000+0000)/',
                    LeavePeriodStatus: 'REQUESTED',
                    NumberOfUnits: 4,
                  },
                ],
                Title: 'vacation',
                StartDate: '/Date(1573516800000+0000)/',
                EndDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1573623008000+0000)/',
                PayOutType: 'DEFAULT',
              },
              {
                LeaveApplicationID: '3b934902-1e16-4c02-a3d3-68fa7d63e01d',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1573171200000+0000)/',
                    PayPeriodEndDate: '/Date(1573689600000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 8,
                  },
                ],
                Title: 'Cashed Out',
                StartDate: '/Date(1573516800000+0000)/',
                EndDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1573623008000+0000)/',
                PayOutType: 'CASHED_OUT',
              },
              {
                LeaveApplicationID: '62b90465-66e9-4c3a-8151-de1e6335554d',
                EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1571961600000+0000)/',
                    PayPeriodEndDate: '/Date(1572480000000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 8,
                  },
                  {
                    PayPeriodStartDate: '/Date(1572566400000+0000)/',
                    PayPeriodEndDate: '/Date(1573084800000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 8,
                  },
                ],
                Title: 'Yep Carer Leave',
                Description: 'My updated Description',
                StartDate: '/Date(1572559200000+0000)/',
                EndDate: '/Date(1572645600000+0000)/',
                UpdatedDateUTC: '/Date(1573447344000+0000)/',
                PayOutType: 'DEFAULT',
              },
              {
                LeaveApplicationID: 'e8bd9eeb-18c9-4475-9c81-b298f9aa26c0',
                EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1571961600000+0000)/',
                    PayPeriodEndDate: '/Date(1572480000000+0000)/',
                    LeavePeriodStatus: 'PROCESSED',
                    NumberOfUnits: 8,
                  },
                  {
                    PayPeriodStartDate: '/Date(1572566400000+0000)/',
                    PayPeriodEndDate: '/Date(1573084800000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 8,
                  },
                ],
                Title: 'Hello World',
                StartDate: '/Date(1572559200000+0000)/',
                EndDate: '/Date(1572645600000+0000)/',
                UpdatedDateUTC: '/Date(1573447343000+0000)/',
                PayOutType: 'DEFAULT',
              },
              {
                LeaveApplicationID: '3f93110a-df13-49c7-b82f-a069813df188',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1573171200000+0000)/',
                    PayPeriodEndDate: '/Date(1573689600000+0000)/',
                    LeavePeriodStatus: 'REJECTED',
                    NumberOfUnits: 8,
                  },
                ],
                Title: 'vacation',
                StartDate: '/Date(1573516800000+0000)/',
                EndDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1573623008000+0000)/',
                PayOutType: 'DEFAULT',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const getLeaveApplicationsLeaveApplicationIDRoute = createRoute({
  method: 'get',
  path: '/LeaveApplications/{LeaveApplicationID}',
  tags: ['PayrollAu'],
  summary: 'Retrieves a leave application by a unique leave application id',
  operationId: 'getLeaveApplication',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      LeaveApplicationID: z
        .uuid()
        .openapi({
          param: {
            name: 'LeaveApplicationID',
            'x-snake': 'leave_application_id',
            in: 'path',
            required: true,
            description: 'Leave Application id for single object',
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
          schema: LeaveApplicationsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573679791457)/',
            LeaveApplications: [
              {
                LeaveApplicationID: '1d4cd583-0107-4386-936b-672eb3d1f624',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1573171200000+0000)/',
                    PayPeriodEndDate: '/Date(1573689600000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 7.6,
                  },
                ],
                Title: 'vacation',
                StartDate: '/Date(1573516800000+0000)/',
                EndDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1573623008000+0000)/',
                PayOutType: 'DEFAULT',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.employees', 'payroll.employees.read'] }],
})

export const postLeaveApplicationsLeaveApplicationIDRoute = createRoute({
  method: 'post',
  path: '/LeaveApplications/{LeaveApplicationID}',
  tags: ['PayrollAu'],
  summary: 'Updates a specific leave application',
  operationId: 'updateLeaveApplication',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      LeaveApplicationID: z
        .uuid()
        .openapi({
          param: {
            name: 'LeaveApplicationID',
            'x-snake': 'leave_application_id',
            in: 'path',
            required: true,
            description: 'Leave Application id for single object',
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
          schema: z.array(LeaveApplicationSchema),
          example:
            '[ { "EmployeeID": "cdfb8371-0b21-4b8a-8903-1024df6c391e", "LeaveApplicationID": "1d4cd583-0107-4386-936b-672eb3d1f624", "LeaveTypeID": "184ea8f7-d143-46dd-bef3-0c60e1aa6fca", "LeavePeriods": [ { "PayPeriodStartDate": "/Date(1572566400000+0000)/", "PayPeriodEndDate": "/Date(1573084800000+0000)/", "LeavePeriodStatus": "SCHEDULED", "NumberOfUnits": 7.6 } ], "Title": "vacation", "Description": "My updated Description", "StartDate": "/Date(1572559200000+0000)/", "EndDate": "/Date(1572645600000+0000)/", "PayOutType": "DEFAULT" } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: LeaveApplicationsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: '3f93110a-df13-49c7-b82f-a069813df188',
            DateTimeUTC: '/Date(1573679792293)/',
            LeaveApplications: [
              {
                LeaveApplicationID: '1d4cd583-0107-4386-936b-672eb3d1f624',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1572566400000+0000)/',
                    PayPeriodEndDate: '/Date(1573084800000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 7.6,
                  },
                ],
                Title: 'vacation',
                Description: 'My updated Description',
                StartDate: '/Date(1572559200000+0000)/',
                EndDate: '/Date(1572645600000+0000)/',
                UpdatedDateUTC: '/Date(1573679792293+0000)/',
                PayOutType: 'DEFAULT',
              },
            ],
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid - TODO' },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const postLeaveApplicationsLeaveApplicationIDApproveRoute = createRoute({
  method: 'post',
  path: '/LeaveApplications/{LeaveApplicationID}/approve',
  tags: ['PayrollAu'],
  summary: 'Approve a requested leave application by a unique leave application id',
  operationId: 'approveLeaveApplication',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      LeaveApplicationID: z
        .uuid()
        .openapi({
          param: {
            name: 'LeaveApplicationID',
            'x-snake': 'leave_application_id',
            in: 'path',
            required: true,
            description: 'Leave Application id for single object',
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
      description: 'Application successfully approved',
      content: {
        'application/json': {
          schema: LeaveApplicationsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573679791457)/',
            LeaveApplications: [
              {
                LeaveApplicationID: '1d4cd583-0107-4386-936b-672eb3d1f624',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1573171200000+0000)/',
                    PayPeriodEndDate: '/Date(1573689600000+0000)/',
                    LeavePeriodStatus: 'SCHEDULED',
                    NumberOfUnits: 7.6,
                  },
                ],
                Title: 'Requested Leave',
                StartDate: '/Date(1573516800000+0000)/',
                EndDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1573623008000+0000)/',
                PayOutType: 'DEFAULT',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const postLeaveApplicationsLeaveApplicationIDRejectRoute = createRoute({
  method: 'post',
  path: '/LeaveApplications/{LeaveApplicationID}/reject',
  tags: ['PayrollAu'],
  summary: 'Reject a leave application by a unique leave application id',
  operationId: 'rejectLeaveApplication',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      LeaveApplicationID: z
        .uuid()
        .openapi({
          param: {
            name: 'LeaveApplicationID',
            'x-snake': 'leave_application_id',
            in: 'path',
            required: true,
            description: 'Leave Application id for single object',
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
      description: 'Application successfully rejected',
      content: {
        'application/json': {
          schema: LeaveApplicationsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573679791457)/',
            LeaveApplications: [
              {
                LeaveApplicationID: '1d4cd583-0107-4386-936b-672eb3d1f624',
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                LeavePeriods: [
                  {
                    PayPeriodStartDate: '/Date(1573171200000+0000)/',
                    PayPeriodEndDate: '/Date(1573689600000+0000)/',
                    LeavePeriodStatus: 'REJECTED',
                    NumberOfUnits: 7.6,
                  },
                ],
                Title: 'Requested Leave',
                StartDate: '/Date(1573516800000+0000)/',
                EndDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1573623008000+0000)/',
                PayOutType: 'DEFAULT',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.employees'] }],
})

export const getPayItemsRoute = createRoute({
  method: 'get',
  path: '/PayItems',
  tags: ['PayrollAu'],
  summary: 'Retrieves pay items',
  operationId: 'getPayItems',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            'x-snake': 'if_modified_since',
            description: 'Only records created or modified since this timestamp will be returned',
            example: '2020-02-06T12:17:43.202-08:00',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            schema: { type: 'string' },
            example: 'Status=="ACTIVE"',
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            schema: { type: 'string' },
            example: 'EmailAddress%20DESC',
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
            description: 'e.g. page=1 – Up to 100 objects will be returned in a single API call',
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
          schema: PayItemsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573620869531)/',
            PayItems: {
              EarningsRates: [
                {
                  EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                  Name: 'Ordinary Hours',
                  EarningsType: 'ORDINARYTIMEEARNINGS',
                  RateType: 'RATEPERUNIT',
                  AccountCode: '477',
                  TypeOfUnits: 'Hours',
                  RatePerUnit: 3,
                  IsExemptFromTax: false,
                  IsExemptFromSuper: false,
                  IsReportableAsW1: false,
                  IsQualifyingEarnings: true,
                  AllowanceContributesToAnnualLeaveRate: true,
                  AllowanceContributesToOvertimeRate: false,
                  UpdatedDateUTC: '/Date(1573620821000+0000)/',
                  CurrentRecord: true,
                },
                {
                  EarningsRateID: 'dc3ff92e-0e49-4967-aa4b-0bb21c0594ce',
                  Name: 'Overtime Hours (exempt from super)',
                  EarningsType: 'OVERTIMEEARNINGS',
                  RateType: 'RATEPERUNIT',
                  AccountCode: '477',
                  TypeOfUnits: 'Hours',
                  IsExemptFromTax: false,
                  IsExemptFromSuper: true,
                  IsReportableAsW1: false,
                  IsQualifyingEarnings: false,
                  AllowanceContributesToAnnualLeaveRate: false,
                  AllowanceContributesToOvertimeRate: false,
                  UpdatedDateUTC: '/Date(1547500330000+0000)/',
                  CurrentRecord: true,
                },
                {
                  EarningsRateID: 'f59999ca-cd5c-4a54-a381-2d0c817f0c3e',
                  Name: 'Redundancy',
                  EarningsType: 'LUMPSUMD',
                  RateType: 'FIXEDAMOUNT',
                  AccountCode: '477',
                  IsExemptFromTax: true,
                  IsExemptFromSuper: true,
                  IsReportableAsW1: true,
                  IsQualifyingEarnings: false,
                  AllowanceContributesToAnnualLeaveRate: false,
                  AllowanceContributesToOvertimeRate: false,
                  UpdatedDateUTC: '/Date(1547500330000+0000)/',
                  CurrentRecord: true,
                },
                {
                  EarningsRateID: 'c97dafac-9d99-406f-9f6c-abfaf81c527d',
                  Name: 'ETP Leave Earning',
                  EarningsType: 'EMPLOYMENTTERMINATIONPAYMENT',
                  RateType: 'RATEPERUNIT',
                  AccountCode: '477',
                  TypeOfUnits: 'Hours',
                  IsExemptFromTax: false,
                  IsExemptFromSuper: true,
                  IsReportableAsW1: true,
                  IsQualifyingEarnings: false,
                  AllowanceContributesToAnnualLeaveRate: false,
                  AllowanceContributesToOvertimeRate: false,
                  UpdatedDateUTC: '/Date(1573620791000+0000)/',
                  EmploymentTerminationPaymentType: 'O',
                  CurrentRecord: true,
                },
              ],
              DeductionTypes: [
                {
                  DeductionTypeID: '727af5e8-b347-4ae7-85fc-9b82266d0aec',
                  DeductionCategory: 'UNIONFEES',
                  Name: 'Union Fees/Subscriptions',
                  AccountCode: '850',
                  ReducesTax: false,
                  ReducesSuper: false,
                  IsExemptFromW1: false,
                  UpdatedDateUTC: '/Date(1547500330000+0000)/',
                  CurrentRecord: true,
                },
                {
                  DeductionTypeID: '04191cd3-7952-4a87-9911-9d8575280f6a',
                  DeductionCategory: 'NONE',
                  Name: 'Lease Payments',
                  AccountCode: '850',
                  ReducesTax: true,
                  ReducesSuper: true,
                  IsExemptFromW1: false,
                  UpdatedDateUTC: '/Date(1547500330000+0000)/',
                  CurrentRecord: true,
                },
              ],
              ReimbursementTypes: [
                {
                  ReimbursementTypeID: '98ba33b2-db5b-4204-bcac-5ddd98d63524',
                  Name: 'Travel Costs',
                  AccountCode: '850',
                  UpdatedDateUTC: '/Date(1547500330000+0000)/',
                  CurrentRecord: true,
                },
                {
                  ReimbursementTypeID: 'aa8cfa40-d872-4be0-8a94-bb7f00962f74',
                  Name: 'Other Reimbursable Costs',
                  AccountCode: '850',
                  UpdatedDateUTC: '/Date(1547500330000+0000)/',
                  CurrentRecord: true,
                },
              ],
              LeaveTypes: [
                {
                  LeaveTypeID: 'fbcc9dab-6238-43d9-a3f4-d768423fdcfa',
                  Name: 'Annual Leave',
                  TypeOfUnits: 'Hours',
                  NormalEntitlement: 152,
                  LeaveLoadingRate: 1,
                  IsPaidLeave: true,
                  ShowOnPayslip: true,
                  UpdatedDateUTC: '/Date(1573620853000+0000)/',
                  CurrentRecord: true,
                  SGCExempt: false,
                  IsQualifyingEarnings: true,
                },
                {
                  LeaveTypeID: '74195ab2-1f2b-4136-8ddc-20387a0b1027',
                  Name: 'Long Service Leave',
                  TypeOfUnits: 'Hours',
                  IsPaidLeave: true,
                  ShowOnPayslip: false,
                  UpdatedDateUTC: '/Date(1547500330000+0000)/',
                  CurrentRecord: true,
                  SGCExempt: false,
                  IsQualifyingEarnings: true,
                },
                {
                  LeaveTypeID: 'ff4d16da-ae8a-4f57-acb3-9ee593996bce',
                  Name: 'Parental Leave (unpaid)',
                  TypeOfUnits: 'Hours',
                  IsPaidLeave: false,
                  ShowOnPayslip: false,
                  UpdatedDateUTC: '/Date(1547500330000+0000)/',
                  CurrentRecord: true,
                  SGCExempt: false,
                  IsQualifyingEarnings: false,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postPayItemsRoute = createRoute({
  method: 'post',
  path: '/PayItems',
  tags: ['PayrollAu'],
  summary: 'Creates a pay item',
  operationId: 'createPayItem',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: PayItemSchema,
          example: {
            EarningsRates: [
              {
                Name: 'MyRate',
                AccountCode: '400',
                TypeOfUnits: '4.00',
                IsExemptFromTax: false,
                IsExemptFromSuper: true,
                IsReportableAsW1: false,
                IsQualifyingEarnings: true,
                AllowanceContributesToAnnualLeaveRate: false,
                AllowanceContributesToOvertimeRate: false,
                EarningsType: 'ORDINARYTIMEEARNINGS',
                EarningsRateID: '1fa4e226-b711-46ba-a8a7-4344c9c5fb87',
                RateType: 'MULTIPLE',
                RatePerUnit: '10.0',
                Multiplier: 1.5,
                Amount: 5,
                EmploymentTerminationPaymentType: 'O',
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
      description: 'A successful request - currently returns empty array for JSON',
      content: {
        'application/json': {
          schema: PayItemsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1593448963288)/',
            PayItems: {
              EarningsRates: [
                {
                  EarningsRateID: '1fa4e226-b711-46ba-a8a7-4344c9c5fb87',
                  Name: 'MyRate',
                  EarningsType: 'ORDINARYTIMEEARNINGS',
                  RateType: 'MULTIPLE',
                  AccountCode: '400',
                  Multiplier: 1.5,
                  IsExemptFromTax: true,
                  IsExemptFromSuper: true,
                  AccrueLeave: false,
                  IsReportableAsW1: false,
                  IsQualifyingEarnings: false,
                  AllowanceContributesToAnnualLeaveRate: false,
                  AllowanceContributesToOvertimeRate: false,
                  UpdatedDateUTC: '/Date(1593448963210+0000)/',
                  CurrentRecord: true,
                },
                {
                  EarningsRateID: 'c6905c26-0716-4746-9098-608545e04dd2',
                  Name: 'Redundancy',
                  EarningsType: 'LUMPSUMD',
                  RateType: 'FIXEDAMOUNT',
                  AccountCode: '477',
                  IsExemptFromTax: true,
                  IsExemptFromSuper: true,
                  IsReportableAsW1: true,
                  IsQualifyingEarnings: false,
                  AllowanceContributesToAnnualLeaveRate: false,
                  AllowanceContributesToOvertimeRate: false,
                  UpdatedDateUTC: '/Date(1476729649000+0000)/',
                  CurrentRecord: true,
                },
                {
                  EarningsRateID: '33820094-656e-4db3-b04b-8bd3e2db0a9b',
                  Name: 'ETP Leave Earning',
                  EarningsType: 'EMPLOYMENTTERMINATIONPAYMENT',
                  RateType: 'RATEPERUNIT',
                  AccountCode: '477',
                  TypeOfUnits: 'Hours',
                  IsExemptFromTax: false,
                  IsExemptFromSuper: true,
                  IsReportableAsW1: true,
                  IsQualifyingEarnings: false,
                  AllowanceContributesToAnnualLeaveRate: false,
                  AllowanceContributesToOvertimeRate: false,
                  UpdatedDateUTC: '/Date(1520900705000+0000)/',
                  EmploymentTerminationPaymentType: 'O',
                  CurrentRecord: true,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description:
        'invalid input, object invalid - IsQualifyingEarnings is required. IsQualifyingEarnings cannot be true when IsExemptFromSuper is true.',
    },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getPayrollCalendarsRoute = createRoute({
  method: 'get',
  path: '/PayrollCalendars',
  tags: ['PayrollAu'],
  summary: 'Retrieves payroll calendars',
  operationId: 'getPayrollCalendars',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            'x-snake': 'if_modified_since',
            description: 'Only records created or modified since this timestamp will be returned',
            example: '2020-02-06T12:17:43.202-08:00',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            schema: { type: 'string' },
            example: 'Status=="ACTIVE"',
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            schema: { type: 'string' },
            example: 'EmailAddress%20DESC',
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
            description: 'e.g. page=1 – Up to 100 objects will be returned in a single API call',
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
          schema: PayrollCalendarsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573611063408)/',
            PayrollCalendars: [
              {
                PayrollCalendarID: '78bb86b9-e1ea-47ac-b75d-f087a81931de',
                Name: 'Sid Weekly',
                CalendarType: 'WEEKLY',
                StartDate: '/Date(1573171200000+0000)/',
                PaymentDate: '/Date(1573776000000+0000)/',
                UpdatedDateUTC: '/Date(1573077687000+0000)/',
                ReferenceDate: '/Date(1573171200000+0000)/',
              },
              {
                PayrollCalendarID: '22a05fc5-386d-4950-9842-3e7a6c812135',
                Name: 'Weekly',
                CalendarType: 'WEEKLY',
                StartDate: '/Date(1546560000000+0000)/',
                PaymentDate: '/Date(1547164800000+0000)/',
                UpdatedDateUTC: '/Date(1572916157000+0000)/',
                ReferenceDate: '/Date(1573171200000+0000)/',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postPayrollCalendarsRoute = createRoute({
  method: 'post',
  path: '/PayrollCalendars',
  tags: ['PayrollAu'],
  summary: 'Creates a Payroll Calendar',
  operationId: 'createPayrollCalendar',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(PayrollCalendarSchema),
          example:
            '[ { "PayrollCalendarID":"78bb86b9-e1ea-47ac-b75d-f087a81931de", "PayRunPeriodStartDate":"/Date(1572566400000+0000)/", "PayRunPeriodEndDate":"/Date(1573084800000+0000)/", "PayRunStatus":"DRAFT", "PaymentDate":"/Date(1573171200000+0000)/" } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: PayrollCalendarsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1584125518649)/',
            PayrollCalendars: [
              {
                PayrollCalendarID: '57accbfe-f729-4be3-b3cb-8c3445c61d3a',
                Name: 'MyCal37127',
                CalendarType: 'WEEKLY',
                StartDate: '/Date(1572998400000+0000)/',
                PaymentDate: '/Date(1573516800000+0000)/',
                UpdatedDateUTC: '/Date(1584125518633+0000)/',
              },
            ],
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid - TODO' },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getPayrollCalendarsPayrollCalendarIDRoute = createRoute({
  method: 'get',
  path: '/PayrollCalendars/{PayrollCalendarID}',
  tags: ['PayrollAu'],
  summary: 'Retrieves payroll calendar by using a unique payroll calendar ID',
  operationId: 'getPayrollCalendar',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      PayrollCalendarID: z
        .uuid()
        .openapi({
          param: {
            name: 'PayrollCalendarID',
            'x-snake': 'payroll_calendar_id',
            in: 'path',
            required: true,
            description: 'Payroll Calendar id for single object',
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
          schema: PayrollCalendarsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573611453008)/',
            PayrollCalendars: [
              {
                PayrollCalendarID: '78bb86b9-e1ea-47ac-b75d-f087a81931de',
                Name: 'Sid Weekly',
                CalendarType: 'WEEKLY',
                StartDate: '/Date(1573171200000+0000)/',
                PaymentDate: '/Date(1573776000000+0000)/',
                UpdatedDateUTC: '/Date(1573077687000+0000)/',
                ReferenceDate: '/Date(1573171200000+0000)/',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getPayRunsRoute = createRoute({
  method: 'get',
  path: '/PayRuns',
  tags: ['PayrollAu'],
  summary: 'Retrieves pay runs',
  operationId: 'getPayRuns',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            'x-snake': 'if_modified_since',
            description: 'Only records created or modified since this timestamp will be returned',
            example: '2020-02-06T12:17:43.202-08:00',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            schema: { type: 'string' },
            example: 'Status=="ACTIVE"',
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            schema: { type: 'string' },
            example: 'EmailAddress%20DESC',
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
            description: 'e.g. page=1 – Up to 100 PayRuns will be returned in a single API call',
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
          schema: PayRunsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573611063074)/',
            PayRuns: [
              {
                PayRunID: '5de420bb-4ad2-405c-beb1-2610bcc2144e',
                PayrollCalendarID: '78bb86b9-e1ea-47ac-b75d-f087a81931de',
                PayRunPeriodStartDate: '/Date(1572566400000+0000)/',
                PayRunPeriodEndDate: '/Date(1573084800000+0000)/',
                PaymentDate: '/Date(1573171200000+0000)/',
                Wages: 200,
                Deductions: 33,
                Tax: 78,
                Super: 0,
                Reimbursement: 22,
                NetPay: 89,
                PayRunStatus: 'POSTED',
                UpdatedDateUTC: '/Date(1573610970000+0000)/',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.payruns', 'payroll.payruns.read'] }],
})

export const postPayRunsRoute = createRoute({
  method: 'post',
  path: '/PayRuns',
  tags: ['PayrollAu'],
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
          schema: z.array(PayRunSchema),
          example:
            '[ { "PayrollCalendarID": "78bb86b9-e1ea-47ac-b75d-f087a81931de", "PayRunPeriodStartDate": "/Date(1572566400000+0000)/", "PayRunPeriodEndDate": "/Date(1573084800000+0000)/", "PayRunStatus": "DRAFT", "PaymentDate": "/Date(1573171200000+0000)/" } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: PayRunsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573685818311)/',
            PayRuns: [
              {
                PayRunID: 'd1348fab-f47a-4697-beea-922ee262407a',
                PayrollCalendarID: '78bb86b9-e1ea-47ac-b75d-f087a81931de',
                PayRunPeriodStartDate: '/Date(1572566400000+0000)/',
                PayRunPeriodEndDate: '/Date(1573084800000+0000)/',
                PaymentDate: '/Date(1573171200000+0000)/',
                PayRunStatus: 'DRAFT',
                UpdatedDateUTC: '/Date(1573685818311+0000)/',
              },
            ],
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid - TODO' },
  },
  security: [{ OAuth2: ['payroll.payruns'] }],
})

export const getPayRunsPayRunIDRoute = createRoute({
  method: 'get',
  path: '/PayRuns/{PayRunID}',
  tags: ['PayrollAu'],
  summary: 'Retrieves a pay run by using a unique pay run id',
  operationId: 'getPayRun',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      PayRunID: z
        .uuid()
        .openapi({
          param: {
            name: 'PayRunID',
            'x-snake': 'pay_run_id',
            in: 'path',
            required: true,
            description: 'PayRun id for single object',
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
          schema: PayRunsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573692531699)/',
            PayRuns: [
              {
                PayRunID: '21d6317b-5319-4b3d-8d78-48904db6b665',
                PayrollCalendarID: '78bb86b9-e1ea-47ac-b75d-f087a81931de',
                PayRunPeriodStartDate: '/Date(1572566400000+0000)/',
                PayRunPeriodEndDate: '/Date(1573084800000+0000)/',
                PaymentDate: '/Date(1573171200000+0000)/',
                Wages: 205.4,
                Deductions: 37,
                Tax: 0,
                Super: 0,
                Reimbursement: 77,
                NetPay: 168.4,
                PayRunStatus: 'POSTED',
                UpdatedDateUTC: '/Date(1573692155000+0000)/',
                Payslips: [
                  {
                    EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                    PayslipID: 'c81e8bcc-56b0-4740-b46b-767753a6ee45',
                    FirstName: 'Albus',
                    LastName: 'Dumbledore',
                    EmployeeGroup: 'foo',
                    Wages: 5.4,
                    Deductions: 4,
                    Tax: 0,
                    Super: 0,
                    Reimbursements: 55,
                    NetPay: 1.4,
                    UpdatedDateUTC: '/Date(1573692155000+0000)/',
                  },
                  {
                    EmployeeID: '7aa04979-ded5-44d9-b09a-793749425844',
                    PayslipID: '76b9cb4e-d024-47cf-b09a-4c9cea2870f1',
                    FirstName: 'John',
                    LastName: 'Smith',
                    Wages: 200,
                    Deductions: 33,
                    Tax: 0,
                    Super: 0,
                    Reimbursements: 22,
                    NetPay: 167,
                    UpdatedDateUTC: '/Date(1573692155000+0000)/',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payruns', 'payroll.payruns.read'] }],
})

export const postPayRunsPayRunIDRoute = createRoute({
  method: 'post',
  path: '/PayRuns/{PayRunID}',
  tags: ['PayrollAu'],
  summary: 'Updates a pay run',
  description: 'Update properties on a single PayRun',
  operationId: 'updatePayRun',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      PayRunID: z
        .uuid()
        .openapi({
          param: {
            name: 'PayRunID',
            'x-snake': 'pay_run_id',
            in: 'path',
            required: true,
            description: 'PayRun id for single object',
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
          schema: z.array(PayRunSchema).openapi({ example: '[ { "PayRunStatus": "POSTED" } ]' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: PayRunsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573693093680)/',
            PayRuns: [
              {
                PayRunID: 'f8fcda54-643f-4406-902a-d7b020d0a036',
                PayrollCalendarID: '78bb86b9-e1ea-47ac-b75d-f087a81931de',
                PayRunPeriodStartDate: '/Date(1572566400000+0000)/',
                PayRunPeriodEndDate: '/Date(1573084800000+0000)/',
                PaymentDate: '/Date(1573171200000+0000)/',
                PayRunStatus: 'POSTED',
                UpdatedDateUTC: '/Date(1573693093000+0000)/',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payruns'] }],
})

export const getPayslipPayslipIDRoute = createRoute({
  method: 'get',
  path: '/Payslip/{PayslipID}',
  tags: ['PayrollAu'],
  summary: 'Retrieves for a payslip by a unique payslip id',
  operationId: 'getPayslip',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      PayslipID: z
        .uuid()
        .openapi({
          param: {
            name: 'PayslipID',
            'x-snake': 'payslip_id',
            in: 'path',
            required: true,
            description: 'Payslip id for single object',
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
          schema: PayslipObjectSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573692677622)/',
            Payslip: {
              EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
              PayslipID: 'c81e8bcc-56b0-4740-b46b-767753a6ee45',
              FirstName: 'Albus',
              LastName: 'Dumbledore',
              Tax: 0,
              NetPay: 1.4,
              UpdatedDateUTC: '/Date(1573692155000+0000)/',
              EarningsLines: [
                {
                  EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                  RatePerUnit: 3,
                  NumberOfUnits: 1.8,
                },
              ],
              LeaveEarningsLines: [
                {
                  EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                  RatePerUnit: 0,
                  NumberOfUnits: 0.6,
                  PayOutType: 'DEFAULT',
                },
                {
                  EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                  RatePerUnit: 3,
                  NumberOfUnits: 0.6,
                  PayOutType: 'CASHED_OUT',
                },
              ],
              TimesheetEarningsLines: [],
              DeductionLines: [
                {
                  Amount: 4,
                  CalculationType: 'FIXEDAMOUNT',
                  DeductionTypeID: 'ed05ea82-e40a-4eb6-9c2e-4b3c03e7e938',
                },
              ],
              LeaveAccrualLines: [
                {
                  LeaveTypeID: '184ea8f7-d143-46dd-bef3-0c60e1aa6fca',
                  NumberOfUnits: 0.0769,
                  AutoCalculate: true,
                },
              ],
              ReimbursementLines: [
                {
                  ReimbursementTypeID: 'aa8cfa40-d872-4be0-8a94-bb7f00962f74',
                  Description: 'boo',
                  ExpenseAccount: '850',
                  Amount: 55,
                },
              ],
              SuperannuationLines: [
                {
                  ContributionType: 'SGC',
                  CalculationType: 'STATUTORY',
                  MinimumMonthlyEarnings: 450,
                  ExpenseAccountCode: '478',
                  LiabilityAccountCode: '826',
                  PaymentDateForThisPeriod: '/Date(1580169600000+0000)/',
                  Amount: 0,
                },
              ],
              TaxLines: [
                {
                  PayslipTaxLineID: 'c129696e-36ef-4677-a54c-96095787ca20',
                  TaxTypeName: 'PAYG Tax',
                  Description: 'No tax file number (Australian resident)',
                  Amount: 0,
                  LiabilityAccount: '825',
                },
              ],
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payslip', 'payroll.payslip.read'] }],
})

export const postPayslipPayslipIDRoute = createRoute({
  method: 'post',
  path: '/Payslip/{PayslipID}',
  tags: ['PayrollAu'],
  summary: 'Updates a payslip',
  description: 'Update lines on a single payslips',
  operationId: 'updatePayslip',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      PayslipID: z
        .uuid()
        .openapi({
          param: {
            name: 'PayslipID',
            'x-snake': 'payslip_id',
            in: 'path',
            required: true,
            description: 'Payslip id for single object',
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
          schema: z.array(PayslipLinesSchema),
          example: {
            Payslip: {
              EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
              DeductionLines: [
                {
                  DeductionTypeID: '727af5e8-b347-4ae7-85fc-9b82266d0aec',
                  CalculationType: 'FIXEDAMOUNT',
                  NumberOfUnits: 10,
                },
              ],
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request - currently returns empty array for JSON',
      content: {
        'application/json': {
          schema: PayslipsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1589568253813)/',
            Payslips: [
              {
                EmployeeID: 'cdfb8371-0b21-4b8a-8903-1024df6c391e',
                PayslipID: 'c81e8bcc-56b0-4740-b46b-767753a6ee45',
                FirstName: 'Albus',
                LastName: 'Dumbledore',
                LastEdited: '/Date(1589568253735+0000)/',
                Tax: 0,
                NetPay: 1.4,
                UpdatedDateUTC: '/Date(1589568253735+0000)/',
                DeductionLines: [
                  {
                    Amount: 4,
                    CalculationType: 'FIXEDAMOUNT',
                    DeductionTypeID: 'ed05ea82-e40a-4eb6-9c2e-4b3c03e7e938',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.payslip'] }],
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/Settings',
  tags: ['PayrollAu'],
  summary: 'Retrieves payroll settings',
  operationId: 'getSettings',
  request: { headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'payroll settings',
      content: {
        'application/json': {
          schema: SettingsObjectSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573585252781)/',
            Settings: {
              Accounts: [
                {
                  AccountID: '85bd2954-7ef5-4fbe-9e40-a1990d0fd63f',
                  Type: 'BANK',
                  Code: '094',
                  Name: 'Bank of A',
                },
                {
                  AccountID: '7e65fa75-1c64-43d7-b0b4-c05f196e2190',
                  Type: 'WAGESPAYABLELIABILITY',
                  Code: '804',
                  Name: 'Wages Payable - Payroll',
                },
                {
                  AccountID: 'dbc164fa-0cdf-4848-92d3-0d1dc864c53f',
                  Type: 'PAYGLIABILITY',
                  Code: '825',
                  Name: 'PAYG Withholdings Payable',
                },
                {
                  AccountID: '7dad84d4-bc7a-482e-99b1-d879e4856578',
                  Type: 'SUPERANNUATIONEXPENSE',
                  Code: '478',
                  Name: 'Superannuation',
                },
                {
                  AccountID: 'df3679fe-5ebc-42ce-a7ac-b4d36b520795',
                  Type: 'SUPERANNUATIONLIABILITY',
                  Code: '826',
                  Name: 'Superannuation Payable',
                },
                {
                  AccountID: '7e130864-5864-4c60-94eb-3c53c95da138',
                  Type: 'WAGESEXPENSE',
                  Code: '477',
                  Name: 'Wages and Salaries',
                },
              ],
              TrackingCategories: {
                EmployeeGroups: {
                  TrackingCategoryID: 'a28f419f-6ec3-4dcf-9be0-7959ea983630',
                  TrackingCategoryName: 'Foo70317',
                },
                TimesheetCategories: {
                  TrackingCategoryID: '89375aed-ed51-4624-9e5d-92db6bfa8974',
                  TrackingCategoryName: 'Foo32551',
                },
              },
              DaysInPayrollYear: '364',
              EmployeesAreSTP2: false,
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getSuperfundsRoute = createRoute({
  method: 'get',
  path: '/Superfunds',
  tags: ['PayrollAu'],
  summary: 'Retrieves superfunds',
  operationId: 'getSuperfunds',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            'x-snake': 'if_modified_since',
            description: 'Only records created or modified since this timestamp will be returned',
            example: '2020-02-06T12:17:43.202-08:00',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            schema: { type: 'string' },
            example: 'Status=="ACTIVE"',
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            schema: { type: 'string' },
            example: 'EmailAddress%20DESC',
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
            description: 'e.g. page=1 – Up to 100 SuperFunds will be returned in a single API call',
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
          schema: SuperFundsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573570941142)/',
            SuperFunds: [
              {
                SuperFundID: 'fde8e070-bf59-4e56-b1d7-c75a09474b8d',
                Name: 'Accumulate Plus (Commonwealth Bank Group Super)',
                Type: 'REGULATED',
                USI: 'OSF0001AU',
                UpdatedDateUTC: '/Date(1573510468000+0000)/',
              },
              {
                SuperFundID: '69079de5-67ef-43bb-b5a5-3e7c2ccad7f0',
                Name: 'AMG Super',
                Type: 'REGULATED',
                USI: 'PTC0133AU',
                UpdatedDateUTC: '/Date(1573490487000+0000)/',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postSuperfundsRoute = createRoute({
  method: 'post',
  path: '/Superfunds',
  tags: ['PayrollAu'],
  summary: 'Creates a superfund',
  operationId: 'createSuperfund',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(SuperFundSchema),
          example:
            '[ { "usi":"PTC0133AU", "Type":"REGULATED", "Name":"Bar99359", "AccountNumber":"FB36350", "AccountName":"Foo38428", "USI":"PTC0133AU" } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: SuperFundsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573583393024)/',
            SuperFunds: [
              {
                SuperFundID: 'e02e44eb-2dba-4d5e-84da-8a0c3a4a4fef',
                Name: 'AMG Super',
                Type: 'REGULATED',
                ABN: '30099320583',
                USI: 'PTC0133AU',
                AccountNumber: 'FB36350',
                AccountName: 'Foo38428',
                UpdatedDateUTC: '/Date(1573583393009+0000)/',
              },
            ],
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid - TODO' },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getSuperfundsSuperFundIDRoute = createRoute({
  method: 'get',
  path: '/Superfunds/{SuperFundID}',
  tags: ['PayrollAu'],
  summary: 'Retrieves a superfund by using a unique superfund ID',
  operationId: 'getSuperfund',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      SuperFundID: z
        .uuid()
        .openapi({
          param: {
            name: 'SuperFundID',
            'x-snake': 'super_fund_id',
            in: 'path',
            required: true,
            description: 'Superfund id for single object',
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
          schema: SuperFundsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573571518603)/',
            SuperFunds: [
              {
                SuperFundID: '540f4327-dda2-4b36-9c2f-2fe1c93a72b5',
                Name: 'My Self Managed one',
                Type: 'SMSF',
                ABN: '53004085616',
                EmployerNumber: '9876543',
                BSB: '324324',
                AccountNumber: '234234234',
                AccountName: 'My Checking',
                UpdatedDateUTC: '/Date(1573571429000+0000)/',
                ElectronicServiceAddress: 'FG48739',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const postSuperfundsSuperFundIDRoute = createRoute({
  method: 'post',
  path: '/Superfunds/{SuperFundID}',
  tags: ['PayrollAu'],
  summary: 'Updates a superfund',
  description: 'Update properties on a single Superfund',
  operationId: 'updateSuperfund',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      SuperFundID: z
        .uuid()
        .openapi({
          param: {
            name: 'SuperFundID',
            'x-snake': 'super_fund_id',
            in: 'path',
            required: true,
            description: 'Superfund id for single object',
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
          schema: z.array(SuperFundSchema),
          example: ' [ { "Type":"REGULATED", "Name":"Nice23534" } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: SuperFundsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573570941547)/',
            SuperFunds: [
              {
                SuperFundID: 'fde8e070-bf59-4e56-b1d7-c75a09474b8d',
                Name: 'Accumulate Plus (Commonwealth Bank Group Super)',
                Type: 'REGULATED',
                ABN: '24248426878',
                USI: 'OSF0001AU',
                UpdatedDateUTC: '/Date(1573510468000+0000)/',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.settings'] }],
})

export const getSuperfundProductsRoute = createRoute({
  method: 'get',
  path: '/SuperfundProducts',
  tags: ['PayrollAu'],
  summary: 'Retrieves superfund products',
  operationId: 'getSuperfundProducts',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      ABN: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ABN',
            description: 'The ABN of the Regulated SuperFund',
            schema: { type: 'string' },
            example: 40022701955,
            required: false,
          },
        }),
      USI: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'USI',
            description: 'The USI of the Regulated SuperFund',
            schema: { type: 'string' },
            example: 'OSF0001AU',
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
          schema: SuperFundProductsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573570720295)/',
            SuperFundProducts: [
              {
                USI: 'OSF0001AU',
                ABN: '24248426878',
                ProductName: 'Accumulate Plus (Commonwealth Bank Group Super)',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.settings', 'payroll.settings.read'] }],
})

export const getTimesheetsRoute = createRoute({
  method: 'get',
  path: '/Timesheets',
  tags: ['PayrollAu'],
  summary: 'Retrieves timesheets',
  operationId: 'getTimesheets',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Modified-Since',
            'x-snake': 'if_modified_since',
            description: 'Only records created or modified since this timestamp will be returned',
            example: '2020-02-06T12:17:43.202-08:00',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            schema: { type: 'string' },
            example: 'Status=="ACTIVE"',
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            schema: { type: 'string' },
            example: 'EmailAddress%20DESC',
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
            description: 'e.g. page=1 – Up to 100 timesheets will be returned in a single API call',
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
          schema: TimesheetsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573516183708)/',
            Timesheets: [
              {
                TimesheetID: '863bbd31-0447-4419-80d5-d733d5e723ba',
                EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
                StartDate: '/Date(1547769600000)/',
                EndDate: '/Date(1548288000000)/',
                Status: 'APPROVED',
                Hours: 24,
                TimesheetLines: [
                  {
                    EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                    NumberOfUnits: [4, 4, 4, 4, 4, 4, 0],
                    UpdatedDateUTC: '/Date(1572915827000+0000)/',
                  },
                ],
                UpdatedDateUTC: '/Date(1572915827000+0000)/',
              },
              {
                TimesheetID: '544eb3a7-0d63-495b-90ae-f6aa3c26c2c8',
                EmployeeID: '7aa04979-ded5-44d9-b09a-793749425844',
                StartDate: '/Date(1572566400000)/',
                EndDate: '/Date(1573084800000)/',
                Status: 'APPROVED',
                Hours: 10,
                TimesheetLines: [
                  {
                    EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                    NumberOfUnits: [2, 2, 2, 2, 2, 0, 0],
                    UpdatedDateUTC: '/Date(1572916045000+0000)/',
                  },
                ],
                UpdatedDateUTC: '/Date(1572916045000+0000)/',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: APIExceptionSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets', 'payroll.timesheets.read'] }],
})

export const postTimesheetsRoute = createRoute({
  method: 'post',
  path: '/Timesheets',
  tags: ['PayrollAu'],
  summary: 'Creates a timesheet',
  operationId: 'createTimesheet',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(TimesheetSchema),
          example:
            '[ { "EmployeeID":"b34e89ff-770d-4099-b7e5-f968767118bc", "StartDate":"/Date(1573171200000+0000)/", "EndDate":"/Date(1573689600000+0000)/", "Status":"DRAFT", "TimesheetLines":[ { "EarningsRateID":"ab874dfb-ab09-4c91-954e-43acf6fc23b4", "TrackingItemID":"af5e9ce2-2349-4136-be99-3561b189f473", "NumberOfUnits":[ 2.0, 10.0, 0.0, 0.0, 5.0, 0.0, 5.0 ] } ] } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: TimesheetsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573516185143)/',
            Timesheets: [
              {
                TimesheetID: 'a7eb0a79-8511-4ee7-b473-3a25f28abcb9',
                EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
                StartDate: '/Date(1573171200000+0000)/',
                EndDate: '/Date(1573689600000+0000)/',
                Status: 'DRAFT',
                Hours: 22,
                TimesheetLines: [
                  {
                    EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                    TrackingItemID: 'af5e9ce2-2349-4136-be99-3561b189f473',
                    NumberOfUnits: [2, 10, 0, 0, 5, 0, 5],
                    UpdatedDateUTC: '/Date(1573516185127+0000)/',
                  },
                ],
                UpdatedDateUTC: '/Date(1573516185127+0000)/',
              },
            ],
          },
        },
      },
    },
    400: { description: 'invalid input, object invalid - TODO' },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const getTimesheetsTimesheetIDRoute = createRoute({
  method: 'get',
  path: '/Timesheets/{TimesheetID}',
  tags: ['PayrollAu'],
  summary: 'Retrieves a timesheet by using a unique timesheet id',
  operationId: 'getTimesheet',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            in: 'path',
            required: true,
            description: 'Timesheet id for single object',
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
          schema: TimesheetObjectSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573516184161)/',
            Timesheet: {
              TimesheetID: 'df954ca3-3a70-47e9-9a3e-80711e7c5f90',
              EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
              StartDate: '/Date(1547164800000+0000)/',
              EndDate: '/Date(1547683200000+0000)/',
              Status: 'APPROVED',
              Hours: 15,
              TimesheetLines: [
                {
                  EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                  NumberOfUnits: [3, 3, 3, 3, 0, 3, 0],
                  UpdatedDateUTC: '/Date(1572915797000+0000)/',
                },
              ],
              UpdatedDateUTC: '/Date(1572915797000+0000)/',
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets', 'payroll.timesheets.read'] }],
})

export const postTimesheetsTimesheetIDRoute = createRoute({
  method: 'post',
  path: '/Timesheets/{TimesheetID}',
  tags: ['PayrollAu'],
  summary: 'Updates a timesheet',
  description: 'Update properties on a single timesheet',
  operationId: 'updateTimesheet',
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
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            in: 'path',
            required: true,
            description: 'Timesheet id for single object',
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
          schema: z.array(TimesheetSchema),
          example:
            '[ { "EmployeeID":"b34e89ff-770d-4099-b7e5-f968767118bc", "StartDate":"/Date(1573171200000+0000)/", "EndDate":"/Date(1573689600000+0000)/", "Status":"APPROVED", "Hours":22.0, "TimesheetID":"a7eb0a79-8511-4ee7-b473-3a25f28abcb9", "TimesheetLines":[ { "EarningsRateID":"ab874dfb-ab09-4c91-954e-43acf6fc23b4", "TrackingItemID":"af5e9ce2-2349-4136-be99-3561b189f473", "NumberOfUnits":[ 2.0, 10.0, 0.0, 0.0, 5.0, 0.0, 5.0 ], "UpdatedDateUTC":"/Date(1573516185127+0000)/" } ] } ]',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: TimesheetsSchema,
          example: {
            Id: '00000000-0000-0000-0000-000000000000',
            Status: 'OK',
            ProviderName: '3f93110a-df13-49c7-b82f-a069813df188',
            DateTimeUTC: '/Date(1573516185258)/',
            Timesheets: [
              {
                TimesheetID: 'a7eb0a79-8511-4ee7-b473-3a25f28abcb9',
                EmployeeID: 'b34e89ff-770d-4099-b7e5-f968767118bc',
                StartDate: '/Date(1573171200000+0000)/',
                EndDate: '/Date(1573689600000+0000)/',
                Status: 'APPROVED',
                Hours: 22,
                TimesheetLines: [
                  {
                    EarningsRateID: 'ab874dfb-ab09-4c91-954e-43acf6fc23b4',
                    TrackingItemID: 'af5e9ce2-2349-4136-be99-3561b189f473',
                    NumberOfUnits: [2, 10, 0, 0, 5, 0, 5],
                    UpdatedDateUTC: '/Date(1573516185227+0000)/',
                  },
                ],
                UpdatedDateUTC: '/Date(1573516185227+0000)/',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})
