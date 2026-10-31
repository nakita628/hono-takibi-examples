import { createRoute, z } from '@hono/zod-openapi'

const AddClientSecretSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          "A value sent with the 'ACTION NEEDED: Web Link API Credentials Expiring Soon.' email notification.",
      }),
  })
  .openapi({ description: 'The Add Client Secret Request Model', required: ['code'] })
  .openapi('AddClientSecret')

const AdditionalRateSchema = z
  .strictObject({
    changeReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />',
      }),
    costCenter1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />',
      }),
    costCenter2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />',
      }),
    costCenter3: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />',
      }),
    effectiveDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />',
      }),
    endCheckDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />',
      }),
    job: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />',
      }),
    rate: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Required. Enter dollar amount that corresponds to the Per selection.<br />',
      }),
    rateCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />',
      }),
    rateNotes: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Not required.<br  />Max length: 4000<br />' }),
    ratePer: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Required. Valid values are HOUR or WEEK.<br />' }),
    shift: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />',
      }),
  })
  .openapi({ description: 'The additional pay rate model', required: [] })
  .openapi('AdditionalRate')

const BenefitSetupSchema = z
  .strictObject({
    benefitClass: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30',
      }),
    benefitClassEffectiveDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
      }),
    benefitSalary: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Salary used to configure benefits.<br  />Decimal(12,2)' }),
    benefitSalaryEffectiveDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
      }),
    doNotApplyAdministrativePeriod: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.',
      }),
    isMeasureAcaEligibility: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.',
      }),
  })
  .openapi({ description: 'The benefit setup model', required: [] })
  .openapi('BenefitSetup')

const ClientCredentialsResponseSchema = z
  .strictObject({
    clientSecret: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The client's secret" }),
    clientSecretExpirationDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The client's secret expiration date" }),
  })
  .openapi({ description: 'The Client Credentials Response Model', required: [] })
  .openapi('ClientCredentialsResponse')

const CompanyCodesSchema = z
  .strictObject({
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Code.<br  /> Max length: 40' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description. <br  /> Max length: 150' }),
  })
  .openapi({ description: 'The Company Codes model', required: [] })
  .openapi('CompanyCodes')

const CustomFieldDefinitionSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'The custom field category.' }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the default value of the custom field.' }),
    isRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the custom field is required.' }),
    label: z.string().exactOptional().openapi({ description: 'The custom field label.' }),
    type: z.string().exactOptional().openapi({ description: 'The custom field type.' }),
    values: z
      .array(
        z
          .object({
            code: z.string().exactOptional().openapi({ description: 'The custom field code.' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'The custom field description.' }),
          })
          .openapi({ description: '', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A set of values that are applicable to the custom field.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('CustomFieldDefinition')

const DirectDepositSchema = z
  .strictObject({
    additionalDirectDeposit: z
      .array(
        z
          .strictObject({
            accountNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Account number, entered without special characters and spaces. <br  />Max length: 17<br />',
              }),
            accountType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />',
              }),
            amount: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Amount value to be deposited to the account.<br  />Decimal (12,2)<br />',
              }),
            amountType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />',
              }),
            blockSpecial: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />',
              }),
            isSkipPreNote: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if account will not pre-note.<br />' }),
            nameOnAccount: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />",
              }),
            preNoteDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />',
              }),
            routingNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />',
              }),
          })
          .openapi({ description: 'The additional direct deposit model', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Additional Direct Deposits that are not the main Direct Deposit.' }),
    mainDirectDeposit: z
      .strictObject({
        accountNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Account number, entered without special characters and spaces. <br  />Max length: 17',
          }),
        accountType: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1',
          }),
        blockSpecial: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />',
          }),
        isSkipPreNote: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if account will not pre-note.' }),
        nameOnAccount: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />",
          }),
        preNoteDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        routingNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9',
          }),
      })
      .exactOptional()
      .openapi({ description: 'The main Direct Deposit account.', required: [] }),
  })
  .openapi({ description: 'The Direct Deposit model', required: [] })
  .openapi('DirectDeposit')

const EarningSchema = z
  .strictObject({
    agency: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Third-party agency associated with earning. Must match Company setup.<br  />Max length: 10',
      }),
    amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Value that matches CalculationCode to add to gross wages. For percentage (%), enter whole number (10 = 10%).  <br  />Decimal(12,2)',
      }),
    annualMaximum: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Year to Date dollar amount not to be exceeded for an earning in the calendar year. Used only with company driven maximums. <br  />Decimal(12,2)',
      }),
    calculationCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines how earnings are calculated. Common values are *% (percentage of gross), flat (flat dollar amount)*. Defaulted to the Company setup calcCode for earning. <br  />Max length: 20',
      }),
    costCenter1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10',
      }),
    costCenter2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10',
      }),
    costCenter3: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10',
      }),
    earningCode: z
      .string()
      .nullable()
      .openapi({ description: 'Earning code. Must match Company setup. <br  />Max length: 10' }),
    effectiveDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date earning is active. Defaulted to run date or check date based on Company setup. Common formats are MM-DD-CCYY, CCYY-MM-DD.',
      }),
    endDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Stop date of an earning. Common formats are MM-DD-CCYY, CCYY-MM-DD.',
      }),
    frequency: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Needed if earning is applied differently from the payroll frequency (one time earning for example).<br  /> Max length: 5',
      }),
    goal: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Dollar amount. The employee earning will stop when the goal amount is reached.<br  /> Decimal(12,2)',
      }),
    hoursOrUnits: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The value is used in conjunction with the Rate field. When entering Group Term Life Insurance (GTL), it should contain the full amount of the group term life insurance policy. <br  /> Decimal(12,2)',
      }),
    isSelfInsured: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Used for ACA. If not entered, defaulted to Company earning setup.',
      }),
    jobCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Job code associated with earnings. Must match Company setup.<br  /> Max length: 20',
      }),
    miscellaneousInfo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Information to print on the check stub if agency is set up for this earning. <br  />Max length: 50',
      }),
    paidTowardsGoal: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Amount already paid to employee toward goal. <br  /> Decimal(12,2)',
      }),
    payPeriodMaximum: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Maximum amount of the earning on a single paycheck. <br  /> Decimal(12,2)',
      }),
    payPeriodMinimum: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Minimum amount of the earning on a single paycheck. <br  /> Decimal(12,2)',
      }),
    rate: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Rate is used in conjunction with the hoursOrUnits field. <br  /> Decimal(12,2)',
      }),
    rateCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Rate Code applies to additional pay rates entered for an employee. Must match Company setup. <br  /> Max length: 10',
      }),
    startDate: z
      .string()
      .nullable()
      .openapi({
        description:
          'Start date of an earning based on payroll calendar. Common formats are MM-DD-CCYY, CCYY-MM-DD.',
      }),
  })
  .openapi({ description: 'The employee earning model', required: ['earningCode', 'startDate'] })
  .openapi('Earning')

const EmergencyContactSchema = z
  .strictObject({
    address1: z.string().nullable().exactOptional().openapi({ description: '1st address line.' }),
    address2: z.string().nullable().exactOptional().openapi({ description: '2nd address line.' }),
    city: z.string().nullable().exactOptional().openapi({ description: 'City.' }),
    country: z.string().nullable().exactOptional().openapi({ description: 'County.' }),
    county: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).',
      }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Contact email.  Must be valid email address format.' }),
    firstName: z
      .string()
      .nullable()
      .openapi({ description: 'Required. Contact first name. <br  />Max length: 40' }),
    homePhone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.',
      }),
    lastName: z
      .string()
      .nullable()
      .openapi({ description: 'Required. Contact last name. <br  />Max length: 40' }),
    mobilePhone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.',
      }),
    notes: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Notes. <br  />Max length: 1000' }),
    pager: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.',
      }),
    primaryPhone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)',
      }),
    priority: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).',
      }),
    relationship: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.',
      }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).',
      }),
    syncEmployeeInfo: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Valid values are *true* or *false*.' }),
    workExtension: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Work Extension.' }),
    workPhone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.',
      }),
    zip: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Postal code.  If U.S. address, must be a valid zip code.' }),
  })
  .openapi({ description: 'The emergency contact model', required: ['firstName', 'lastName'] })
  .openapi('EmergencyContact')

const EmployeeSchema = z
  .strictObject({
    additionalDirectDeposit: z
      .array(
        z
          .strictObject({
            accountNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Account number, entered without special characters and spaces. <br  />Max length: 17<br />',
              }),
            accountType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />',
              }),
            amount: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Amount value to be deposited to the account.<br  />Decimal (12,2)<br />',
              }),
            amountType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />',
              }),
            blockSpecial: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />',
              }),
            isSkipPreNote: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if account will not pre-note.<br />' }),
            nameOnAccount: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />",
              }),
            preNoteDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />',
              }),
            routingNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />',
              }),
          })
          .openapi({ description: 'The additional direct deposit model', required: [] }),
      )
      .max(19)
      .exactOptional()
      .openapi({
        description:
          'Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.',
      }),
    additionalRate: z
      .array(
        z
          .strictObject({
            changeReason: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />',
              }),
            costCenter1: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />',
              }),
            costCenter2: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />',
              }),
            costCenter3: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />',
              }),
            effectiveDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />',
              }),
            endCheckDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />',
              }),
            job: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />',
              }),
            rate: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Required. Enter dollar amount that corresponds to the Per selection.<br />',
              }),
            rateCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />',
              }),
            rateNotes: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Not required.<br  />Max length: 4000<br />' }),
            ratePer: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Required. Valid values are HOUR or WEEK.<br />' }),
            shift: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />',
              }),
          })
          .openapi({ description: 'The additional pay rate model', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Add Additional Rates.' }),
    benefitSetup: z
      .strictObject({
        benefitClass: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30',
          }),
        benefitClassEffectiveDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        benefitSalary: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Salary used to configure benefits.<br  />Decimal(12,2)' }),
        benefitSalaryEffectiveDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        doNotApplyAdministrativePeriod: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.',
          }),
        isMeasureAcaEligibility: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          ' Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.',
        required: [],
      }),
    birthDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
      }),
    coEmpCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique idenifier for SSO.<br  />Max length: 20' }),
    companyFEIN: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Company FEIN as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 20',
      }),
    companyName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Company name as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 50',
      }),
    currency: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee is paid in this currency. <br  />Max length: 30' }),
    customBooleanFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .boolean()
              .nullable()
              .openapi({ description: 'The custom boolean field value.' }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of boolean (checkbox) type value.' }),
    customDateFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.',
              }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of the date type value.' }),
    customDropDownFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.',
              }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of the dropdown type value.' }),
    customNumberFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .number()
              .nullable()
              .openapi({ description: 'The custom number field value.  Decimal (18,6).' }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of numeric type value.' }),
    customTextFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .string()
              .nullable()
              .openapi({ description: 'The custom text field value.  Max length: 255.' }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of text type value.' }),
    departmentPosition: z
      .strictObject({
        changeReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee department/position change reason. Must match Company setup. <br  />Max length: 15',
          }),
        clockBadgeNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee clock badge number. Defaults to employeeId. <br  />Max length: 10',
          }),
        costCenter1: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10',
          }),
        costCenter2: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10',
          }),
        costCenter3: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10',
          }),
        effectiveDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        employeeType: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10',
          }),
        equalEmploymentOpportunityClass: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10',
          }),
        isMinimumWageExempt: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if employee is exempt from minimum wage.' }),
        isOvertimeExempt: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if employee is exempt from overtime.' }),
        isSupervisorReviewer: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if employee is a supervisor or reviewer.' }),
        isUnionDuesCollected: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if union dues are collected.' }),
        isUnionInitiationCollected: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if initiations fees are collected.' }),
        jobTitle: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Employee current job title. <br  />Max length: 50' }),
        payGroup: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Employee pay group. Must match Company setup. <br  /> Max length: 20',
          }),
        positionCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Employee position code. Must match Company setup.<br  />Max length: 20',
          }),
        reviewerCompanyNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Company number of reviewer.<br />Max length: 9' }),
        reviewerEmployeeId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Employee id of the reviewer.<br />Max length: 10' }),
        shift: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Employee work shift.<br  />Max length: 255' }),
        supervisorCompanyNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Supervisor's company number. Defaults to employee company number.<br  />Max length: 9",
          }),
        supervisorEmployeeId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'EmployeeId of the supervisor. <br  />Max length: 10' }),
        tipped: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if employee receives tips.' }),
        unionAffiliationDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        unionCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Employee union code. Must match Company setup. <br  />Max length: 10',
          }),
        unionPosition: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Employee union position. Must match Company setup. <br  />Max length: 30',
          }),
        workersCompensation: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee worker compensation code. Must match Company setup.<br  /> Max length: 10',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.',
        required: [],
      }),
    disabilityDescription: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if employee has disability status.' }),
    emergencyContacts: z
      .array(
        z
          .strictObject({
            address1: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: '1st address line.' }),
            address2: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: '2nd address line.' }),
            city: z.string().nullable().exactOptional().openapi({ description: 'City.' }),
            country: z.string().nullable().exactOptional().openapi({ description: 'County.' }),
            county: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).',
              }),
            email: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Contact email.  Must be valid email address format.' }),
            firstName: z
              .string()
              .nullable()
              .openapi({ description: 'Required. Contact first name. <br  />Max length: 40' }),
            homePhone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.',
              }),
            lastName: z
              .string()
              .nullable()
              .openapi({ description: 'Required. Contact last name. <br  />Max length: 40' }),
            mobilePhone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.',
              }),
            notes: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Notes. <br  />Max length: 1000' }),
            pager: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.',
              }),
            primaryPhone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)',
              }),
            priority: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).',
              }),
            relationship: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.',
              }),
            state: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).',
              }),
            syncEmployeeInfo: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Valid values are *true* or *false*.' }),
            workExtension: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Work Extension.' }),
            workPhone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.',
              }),
            zip: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Postal code.  If U.S. address, must be a valid zip code.' }),
          })
          .openapi({
            description: 'The emergency contact model',
            required: ['firstName', 'lastName'],
          }),
      )
      .exactOptional()
      .openapi({ description: 'Add or update Emergency Contacts.' }),
    employeeId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Leave blank to have Web Pay automatically assign the next available employee ID.<br  />Max length: 9',
      }),
    ethnicity: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee ethnicity.<br  /> Max length: 10' }),
    federalTax: z
      .strictObject({
        amount: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Tax amount. <br  />Decimal (12,2)' }),
        deductionsAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)',
          }),
        dependentsAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)',
          }),
        exemptions: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Federal tax exemptions value. <br  />Decimal (12,2)' }),
        filingStatus: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50',
          }),
        higherRate: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean',
          }),
        otherIncomeAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)',
          }),
        percentage: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Tax percentage. <br  />Decimal (12,2)' }),
        taxCalculationCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10',
          }),
        w4FormYear: z
          .int()
          .exactOptional()
          .openapi({ description: 'The federal W4 form year <br  />Integer' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.',
        required: [],
      }),
    firstName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee first name. <br  />Max length: 40' }),
    gender: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1',
      }),
    homeAddress: z
      .strictObject({
        address1: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: '1st address line.<br  /> Max length: 40' }),
        address2: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: '2nd address line. <br  /> Max length: 40' }),
        city: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'City.<br  /> Max length: 40' }),
        country: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Country.<br  /> Max length: 30' }),
        county: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'County.<br  /> Max length: 30' }),
        emailAddress: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Email. <br  />Max length: 50' }),
        mobilePhone: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Mobile phone number.<br  /> Max length: 20' }),
        phone: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Phone number.<br  /> Max length: 20' }),
        postalCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Postal code.<br  /> Max length: 10' }),
        state: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State or province.<br  /> Max length: 2' }),
      })
      .exactOptional()
      .openapi({
        description:
          "Add or update employee's home address, personal phone numbers, and personal email.",
        required: [],
      }),
    isHighlyCompensated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if employee meets the highly compensated employee criteria.',
      }),
    isSmoker: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if employee is a smoker.' }),
    lastName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee last name. <br  />Max length: 40' }),
    localTax: z
      .array(
        z
          .strictObject({
            exemptions: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Local tax exemptions value.<br  />Decimal (12,2)' }),
            exemptions2: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Local tax exemptions 2 value.<br  />Decimal (12,2)' }),
            filingStatus: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50',
              }),
            residentPSD: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9',
              }),
            taxCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Local tax code.<br  />Max length: 50' }),
            workPSD: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Work location PSD. Must match Company setup. <br  /> Max length: 9',
              }),
          })
          .openapi({ description: 'The Local Tax model', required: [] }),
      )
      .max(5)
      .exactOptional()
      .openapi({
        description:
          'Add, update, or delete local tax code, filing status, and exemptions including  PA-PSD taxes.',
      }),
    mainDirectDeposit: z
      .strictObject({
        accountNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Account number, entered without special characters and spaces. <br  />Max length: 17',
          }),
        accountType: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1',
          }),
        blockSpecial: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />',
          }),
        isSkipPreNote: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if account will not pre-note.' }),
        nameOnAccount: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />",
          }),
        preNoteDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        routingNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.',
        required: [],
      }),
    maritalStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10',
      }),
    middleName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee middle name.<br  /> Max length: 20' }),
    nonPrimaryStateTax: z
      .strictObject({
        amount: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
        deductionsAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)',
          }),
        dependentsAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)',
          }),
        exemptions: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State tax exemptions value.<br  />Decimal (12,2)' }),
        exemptions2: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State tax exemptions 2 value.<br  />Decimal (12,2)' }),
        filingStatus: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50',
          }),
        higherRate: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean',
          }),
        otherIncomeAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)',
          }),
        percentage: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State Tax percentage. <br  />Decimal (12,2)' }),
        reciprocityCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Non-primary state tax reciprocity code.<br  /> Max length: 50',
          }),
        specialCheckCalc: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10',
          }),
        taxCalculationCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10',
          }),
        taxCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
        w4FormYear: z
          .int()
          .exactOptional()
          .openapi({ description: 'The state W4 form year <br  />Integer' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.',
        required: [],
      }),
    ownerPercent: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Percentage of employee's ownership in the company, entered as a whole number. <br  /> Decimal (12,2)",
      }),
    preferredName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee preferred display name.<br  /> Max length: 20' }),
    primaryPayRate: z
      .strictObject({
        annualSalary: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Employee annual salary.<br />Decimal (12,6)' }),
        baseRate: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Employee base rate, used for Hourly employees. <br  />Decimal (12,6)',
          }),
        beginCheckDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The date of the first check on which the new pay rate will appear. This value is only applicable when updating an existing employee. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        changeReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Pay rate change reason.<br  /> Max length: 30' }),
        defaultHours: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)',
          }),
        effectiveDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.",
          }),
        isAutoPay: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'If set to *True*, employee will be paid automatically using deafultHours.',
          }),
        payFrequency: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5',
          }),
        payGrade: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Employee pay grade. Must match Company setup. <br  /> Max length: 10',
          }),
        payRateNote: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Pay rate notes regarding employee.<br  /> Max length: 250' }),
        payType: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10',
          }),
        ratePer: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10',
          }),
        salary: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Add or update hourly or salary pay rate, effective date, and pay frequency.',
        required: [],
      }),
    primaryStateTax: z
      .strictObject({
        amount: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
        deductionsAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)',
          }),
        dependentsAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)',
          }),
        exemptions: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State tax exemptions value.<br  />Decimal (12,2)' }),
        exemptions2: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State tax exemptions 2 value.<br  />Decimal (12,2)' }),
        filingStatus: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50',
          }),
        higherRate: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean',
          }),
        otherIncomeAmount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)',
          }),
        percentage: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State Tax percentage. <br  />Decimal (12,2)' }),
        specialCheckCalc: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10',
          }),
        taxCalculationCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10',
          }),
        taxCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
        w4FormYear: z
          .int()
          .exactOptional()
          .openapi({ description: 'The state W4 form year <br  />Integer' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.',
        required: [],
      }),
    priorLastName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Prior last name if applicable.<br  />Max length: 40' }),
    salutation: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee preferred salutation. <br  />Max length: 10' }),
    ssn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11',
      }),
    status: z
      .strictObject({
        adjustedSeniorityDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        changeReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee status change reason. Must match Company setup.<br  /> Max length: 15',
          }),
        effectiveDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.' }),
        employeeStatus: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20',
          }),
        hireDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee hired date. Updates to hire date are not allowed and will be ignored. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        isEligibleForRehire: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if employee eligible for rehire.' }),
        reHireDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Rehire date if employee is rehired.  Updates to re-hire date are not allowed and will be ignored. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.',
          }),
        statusType: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The Status Type associated with the Employee Status code. Each Employee Status  code for a company is assigned to one of the Status Type values of  A (Active), L (Leave of Absence), T (Terminated).',
          }),
        terminationDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee termination date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.',
        required: [],
      }),
    suffix: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30',
      }),
    taxSetup: z
      .strictObject({
        fitwExemptNotes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Notes for FITW exemption.<br  /> Max length: 250' }),
        fitwExemptReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30',
          }),
        futaExemptNotes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Notes for FUTA exemption.<br  /> Max length: 250' }),
        futaExemptReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30',
          }),
        isEmployee943: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Indicates if employee in agriculture or farming.' }),
        isPension: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Indicates if employee is eligible for pension.' }),
        isStatutory: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Indicates if employee is statutory.' }),
        medExemptNotes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Notes for Medicare exemption.<br  /> Max length: 250' }),
        medExemptReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30',
          }),
        sitwExemptNotes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Notes for SITW exemption.<br  /> Max length: 250' }),
        sitwExemptReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30',
          }),
        ssExemptNotes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Notes for Social Security exemption.<br  /> Max length: 250' }),
        ssExemptReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30',
          }),
        suiExemptNotes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Notes for SUI exemption.<br  /> Max length: 250' }),
        suiExemptReason: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30',
          }),
        suiState: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2',
          }),
        taxDistributionCode1099R: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1',
          }),
        taxForm: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.',
        required: [],
      }),
    veteranDescription: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if employee is a veteran.' }),
    webTime: z
      .strictObject({
        badgeNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Badge number usually issued for time and attendance system use. <br  />Max length: 50',
          }),
        chargeRate: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)',
          }),
        isTimeLaborEnabled: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'If set to true, changes to employee data will be reflected in Web Time.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.',
        required: [],
      }),
    workAddress: z
      .strictObject({
        address1: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: '1st address line.<br  /> Max length: 40' }),
        address2: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: '2nd address line. <br  /> Max length: 40' }),
        city: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'City.<br  /> Max length: 40' }),
        country: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Country.<br  /> Max length: 30' }),
        county: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'County.<br  /> Max length: 30' }),
        emailAddress: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Email. <br  />Max length: 50' }),
        location: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Work Location name. <br />Max length: 50' }),
        mailStop: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Employee mail stop.<br  /> Max length: 10' }),
        mobilePhone: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Mobile phone number.<br  /> Max length: 20' }),
        pager: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Employee pager number.<br  /> Max length: 20' }),
        phone: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Phone number.<br  /> Max length: 20' }),
        phoneExtension: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Phone number extension.<br  /> Max length: 10' }),
        postalCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Postal code.<br  /> Max length: 10' }),
        state: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'State or province.<br  /> Max length: 2' }),
      })
      .exactOptional()
      .openapi({
        description:
          "Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.",
        required: [],
      }),
    workEligibility: z
      .strictObject({
        alienOrAdmissionDocumentNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A'",
          }),
        attestedDate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.',
          }),
        countryOfIssuance: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30',
          }),
        foreignPassportNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Foreign Passport Number.<br  /> Max length: 50' }),
        i94AdmissionNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Form I-94 admission number.<br  /> Must be 11 numeric characters',
          }),
        i9DateVerified: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.' }),
        i9Notes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "Notes regarding employee's i9.<br  /> Max length: 4000" }),
        isI9Verified: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if employee I9 is verified.' }),
        isSsnVerified: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Indicates if employee SSN is verified.' }),
        ssnDateVerified: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
        ssnNotes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "Notes regarding employee's SSN.<br  /> Max length: 4000" }),
        visaType: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100',
          }),
        workAuthorization: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100',
          }),
        workUntil: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Add or update I-9 work authorization information.', required: [] }),
  })
  .openapi({ description: 'The employee model', required: [] })
  .openapi('Employee')

const EmployeeIdResponseSchema = z
  .object({ employeeId: z.string().exactOptional().openapi({ description: 'The EmployeeId' }) })
  .openapi({ description: 'The EmployeeId Response Model', required: [] })
  .openapi('EmployeeIdResponse')

const EmployeeInfoSchema = z
  .strictObject({
    employeeId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee Id.<br  /> Max length: 10' }),
    statusCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20',
      }),
    statusTypeCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee current work status type. <br  />Max length: 10' }),
  })
  .openapi({ description: 'The employee info model', required: [] })
  .openapi('EmployeeInfo')

const ErrorSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the field, or property in the request message that contains an error.',
      }),
    message: z.string().exactOptional().openapi({ description: 'The error message.' }),
    options: z
      .array(
        z
          .object({
            code: z
              .string()
              .exactOptional()
              .openapi({ description: 'The code associated with this option.' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'The description of the option.' }),
          })
          .openapi({ description: 'The error option model', required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of options associated with this error. These options may indicate valid values for the field, or property that contains an error.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The JSON path of the field, or property, that contains an error in the request message.',
      }),
  })
  .openapi({ description: 'The error model', required: [] })
  .openapi('Error')

const LocalTaxSchema = z
  .strictObject({
    exemptions: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Local tax exemptions value.<br  />Decimal (12,2)' }),
    exemptions2: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Local tax exemptions 2 value.<br  />Decimal (12,2)' }),
    filingStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50',
      }),
    residentPSD: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9',
      }),
    taxCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Local tax code.<br  />Max length: 50' }),
    workPSD: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Work location PSD. Must match Company setup. <br  /> Max length: 9',
      }),
  })
  .openapi({ description: 'The Local Tax model', required: [] })
  .openapi('LocalTax')

const NonPrimaryStateTaxSchema = z
  .strictObject({
    amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
    deductionsAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)',
      }),
    dependentsAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)',
      }),
    exemptions: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State tax exemptions value.<br  />Decimal (12,2)' }),
    exemptions2: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State tax exemptions 2 value.<br  />Decimal (12,2)' }),
    filingStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50',
      }),
    higherRate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean',
      }),
    otherIncomeAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)',
      }),
    percentage: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State Tax percentage. <br  />Decimal (12,2)' }),
    reciprocityCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Non-primary state tax reciprocity code.<br  /> Max length: 50' }),
    specialCheckCalc: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10',
      }),
    taxCalculationCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10',
      }),
    taxCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
    w4FormYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'The state W4 form year <br  />Integer' }),
  })
  .openapi({ description: 'The Non-Primary State Tax model', required: [] })
  .openapi('NonPrimaryStateTax')

const PayStatementDetailsSchema = z
  .strictObject({
    amount: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    checkDate: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    det: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    detCode: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    detType: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    eligibleCompensation: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    hours: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    rate: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    transactionNumber: z.int().exactOptional().openapi({ description: '<br />' }),
    transactionType: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    year: z.int().exactOptional().openapi({ description: '.<br />' }),
  })
  .openapi({ description: 'The pay statement details model', required: [] })
  .openapi('PayStatementDetails')

const PayStatementSummarySchema = z
  .strictObject({
    autoPay: z.boolean().exactOptional().openapi({ description: '.<br />' }),
    beginDate: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    checkDate: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    checkNumber: z.int().exactOptional().openapi({ description: '.<br />' }),
    directDepositAmount: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    endDate: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    grossPay: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    hours: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    netCheck: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    netPay: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    overtimeDollars: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    overtimeHours: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    process: z.int().exactOptional().openapi({ description: '.<br />' }),
    regularDollars: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    regularHours: z.number().nullable().exactOptional().openapi({ description: '.<br />' }),
    transactionNumber: z.int().exactOptional().openapi({ description: '<br />' }),
    voucherNumber: z.int().exactOptional().openapi({ description: '.<br />' }),
    workersCompCode: z.string().nullable().exactOptional().openapi({ description: '.<br />' }),
    year: z.int().exactOptional().openapi({ description: '.<br />' }),
  })
  .openapi({ description: 'The pay statement summary model', required: [] })
  .openapi('PayStatementSummary')

const SensitiveDataSchema = z
  .strictObject({
    disability: z
      .strictObject({
        disability: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Description of employee's disability or accommodation.<br  />Max length: 50",
          }),
        disabilityClassifications: z
          .array(
            z
              .object({
                classification: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Indicates the type of disability. This field is only allowed if hasDisability is set to 1=Yes. Values include:<br  /><br  />Auditory<br  />Cognitive, learning, and neurological<br  />Physical<br  />Speech<br  />Vision<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = disabilityClassification',
                  }),
              })
              .openapi({ description: 'The disabilty classifications model', required: [] }),
          )
          .exactOptional()
          .openapi({ description: "Add or update employee's disability classifications" }),
        hasDisability: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Indicates if the employee has a disability. Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Add or update disability data.', required: [] }),
    ethnicity: z
      .strictObject({
        ethnicRacialIdentities: z
          .array(
            z
              .object({
                description: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "Employee's preferred or chosen ethnicity or race.<br  />Max length: 40.",
                  }),
              })
              .openapi({ description: 'The ethnic racial identity model', required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Add or update Ethnic Racial Identity' }),
        ethnicity: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Employee's legal ethnicity or race.<br  />A = Asian<br  />B = Black<br  />H = Hispanic<br  />I = American Indian<br  />N = Native Hawaiian or Pacific Islander<br  />T = Two or More Races<br  />W = White<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = ethnicity",
          }),
      })
      .exactOptional()
      .openapi({ description: 'Add or update ethnicity data.', required: [] }),
    gender: z
      .strictObject({
        displayPronouns: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Specifies whether employee's preferred pronouns will be displayed to co-workers in Community, Directory, etc. Values include:<br  /><br  />0 = No<br  />1 = Yes",
          }),
        genderIdentityDescription: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Employee's preferred or chosen gender identification.<br  />Max length: 40",
          }),
        identifyAsLegalGender: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Employee's self-identification of legal gender. Numerical values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say",
          }),
        legalGender: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Employee's legal gender. Values include:<br  /><br  />M = Male<br  />F = Female<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = legalGender",
          }),
        pronouns: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Employee's preferred or chosen pronouns. Values include:<br  /><br  />He / Him / His<br  />She / Her / Hers<br  />They / Them / Theirs<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = preferredPronouns",
          }),
        sexualOrientation: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Employee's self-identification of sexual orientation. Values may include values below. Additionally, any custom value may be provided.<br  /><br  />Asexual<br  />Gay / Lesbian<br  />Heterosexual / Straight<br  />Pansexual<br  />Queer<br  />Bisexual<br  />Prefer not to say",
          }),
      })
      .exactOptional()
      .openapi({ description: 'Add or update gender data.', required: [] }),
    veteran: z
      .strictObject({
        isVeteran: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Indicates if the employee is a veteran.  Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say',
          }),
        veteran: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "Employee's Veteran Notes<br  />Max length: 50" }),
      })
      .exactOptional()
      .openapi({ description: 'Add or update veteran data.', required: [] }),
  })
  .openapi({ description: 'The sensitive data model', required: [] })
  .openapi('SensitiveData')

const StagedEmployeeSchema = z
  .strictObject({
    additionalDirectDeposit: z
      .array(
        z
          .strictObject({
            accountNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Account number, entered without special characters and spaces. <br  />Max length: 17<br />',
              }),
            accountType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />',
              }),
            amount: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Amount value to be deposited to the account.<br  />Decimal (12,2)<br />',
              }),
            amountType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />',
              }),
            isSkipPreNote: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if account will not pre-note.<br />' }),
            preNoteDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />',
              }),
            routingNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />',
              }),
          })
          .openapi({ description: 'The additional direct deposit model', required: [] }),
      )
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.',
      }),
    benefitSetup: z
      .array(
        z
          .strictObject({
            benefitClass: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30',
              }),
            benefitClassEffectiveDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
            benefitSalary: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Salary used to configure benefits.<br  />Decimal(12,2)' }),
            benefitSalaryEffectiveDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
            doNotApplyAdministrativePeriod: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Applicable only for ACA Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.',
              }),
            isMeasureAcaEligibility: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Only valid for ACA Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.',
              }),
          })
          .openapi({ description: 'The benefit setup model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Add setup values used for employee benefits integration, insurance plan settings, and ACA reporting.',
      }),
    birthDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
      }),
    customBooleanFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .boolean()
              .nullable()
              .openapi({ description: 'The custom boolean field value.' }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of boolean (checkbox) type value.' }),
    customDateFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.',
              }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of the date type value.' }),
    customDropDownFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.',
              }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of the dropdown type value.' }),
    customNumberFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .number()
              .nullable()
              .openapi({ description: 'The custom number field value.  Decimal (18,6).' }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of numeric type value.' }),
    customTextFields: z
      .array(
        z
          .strictObject({
            category: z
              .literal('PayrollAndHR')
              .openapi({
                description: "The custom field category.  Acceptable value is 'PayrollAndHR'.",
              }),
            label: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.',
              }),
            value: z
              .string()
              .nullable()
              .openapi({ description: 'The custom text field value.  Max length: 255.' }),
          })
          .openapi({ description: '', required: ['category', 'label', 'value'] }),
      )
      .max(8)
      .exactOptional()
      .openapi({ description: 'Up to 8 custom fields of text type value.' }),
    departmentPosition: z
      .array(
        z
          .strictObject({
            changeReason: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee department/position change reason. Must match Company setup. <br  />Max length: 15',
              }),
            clockBadgeNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee clock badge number. Defaults to employeeId. <br  />Max length: 10',
              }),
            costCenter1: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10',
              }),
            costCenter2: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10',
              }),
            costCenter3: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10',
              }),
            effectiveDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
            employeeType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10',
              }),
            equalEmploymentOpportunityClass: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10',
              }),
            isMinimumWageExempt: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if employee is exempt from minimum wage.' }),
            isOvertimeExempt: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if employee is exempt from overtime.' }),
            isSupervisorReviewer: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if employee is a supervisor or reviewer.' }),
            isUnionDuesCollected: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if union dues are collected.' }),
            isUnionInitiationCollected: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if initiations fees are collected.' }),
            jobTitle: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Employee current job title. <br  />Max length: 50' }),
            payGroup: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Employee pay group. Must match Company setup. <br  /> Max length: 20',
              }),
            positionCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee position code. Must match Company setup.<br  />Max length: 20',
              }),
            shift: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Employee work shift.<br  />Max length: 255' }),
            supervisorCompanyNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Supervisor's company number. Defaults to employee company number.<br  />Max length: 9",
              }),
            supervisorEmployeeId: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'EmployeeId of the supervisor. <br  />Max length: 10' }),
            tipped: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if employee receives tips.' }),
            unionAffiliationDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
            unionCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Employee union code. Must match Company setup. <br  />Max length: 10',
              }),
            unionPosition: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee union position. Must match Company setup. <br  />Max length: 30',
              }),
            workersCompensation: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee worker compensation code. Must match Company setup.<br  /> Max length: 10',
              }),
          })
          .openapi({ description: 'The Department Position model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Add home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.',
      }),
    disabilityDescription: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if employee has disability status.' }),
    employeeId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Leave blank to have Web Pay automatically assign the next available employee ID.<br  /> Max length: 10',
      }),
    ethnicity: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee ethnicity.<br  /> Max length: 10' }),
    federalTax: z
      .array(
        z
          .strictObject({
            amount: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Tax amount. <br  />Decimal (12,2)' }),
            deductionsAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)',
              }),
            dependentsAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)',
              }),
            exemptions: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Federal tax exemptions value. <br  />Decimal (12,2)' }),
            filingStatus: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50',
              }),
            higherRate: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean',
              }),
            otherIncomeAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)',
              }),
            percentage: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Tax percentage. <br  />Decimal (12,2)' }),
            taxCalculationCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10',
              }),
            w4FormYear: z
              .int()
              .exactOptional()
              .openapi({ description: 'The federal W4 form year <br  />Integer' }),
          })
          .openapi({ description: 'The Federal Tax model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Add federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.',
      }),
    firstName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee first name. <br  />Max length: 40' }),
    fitwExemptReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30',
      }),
    futaExemptReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30',
      }),
    gender: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1',
      }),
    homeAddress: z
      .array(
        z
          .strictObject({
            address1: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: '1st address line.<br  /> Max length: 40' }),
            address2: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: '2nd address line. <br  /> Max length: 40' }),
            city: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'City.<br  /> Max length: 40' }),
            country: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Country.<br  /> Max length: 30' }),
            county: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'County.<br  /> Max length: 30' }),
            emailAddress: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Email. <br  />Max length: 50' }),
            mobilePhone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Mobile phone number.<br  /> Max length: 12' }),
            phone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Phone number.<br  /> Max length: 12' }),
            postalCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Postal code.<br  /> Max length: 10' }),
            state: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State or province.<br  /> Max length: 2' }),
          })
          .openapi({ description: 'The address model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description: "Add employee's home address, personal phone numbers, and personal email.",
      }),
    isEmployee943: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if employee in agriculture or farming.' }),
    isSmoker: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if employee is a smoker.' }),
    lastName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee last name. <br  />Max length: 40' }),
    localTax: z
      .array(
        z
          .strictObject({
            exemptions: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Local tax exemptions value.<br  />Decimal (12,2)' }),
            exemptions2: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Local tax exemptions 2 value.<br  />Decimal (12,2)' }),
            filingStatus: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50',
              }),
            residentPSD: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9',
              }),
            taxCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Local tax code.<br  />Max length: 50' }),
            workPSD: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Work location PSD. Must match Company setup. <br  /> Max length: 9',
              }),
          })
          .openapi({ description: 'The Local Tax model', required: [] }),
      )
      .max(5)
      .exactOptional()
      .openapi({
        description: 'Add local tax code, filing status, and exemptions including PA-PSD taxes.',
      }),
    mainDirectDeposit: z
      .array(
        z
          .strictObject({
            accountNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Account number, entered without special characters and spaces. <br  />Max length: 17',
              }),
            accountType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1',
              }),
            isSkipPreNote: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if account will not pre-note.' }),
            preNoteDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
            routingNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9',
              }),
          })
          .openapi({ description: 'The Main Direct Deposit model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.',
      }),
    maritalStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10',
      }),
    medExemptReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30',
      }),
    middleName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee middle name.<br  /> Max length: 20' }),
    nonPrimaryStateTax: z
      .array(
        z
          .strictObject({
            amount: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
            deductionsAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)',
              }),
            dependentsAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)',
              }),
            exemptions: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State tax exemptions value.<br  />Decimal (12,2)' }),
            exemptions2: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State tax exemptions 2 value.<br  />Decimal (12,2)' }),
            filingStatus: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50',
              }),
            higherRate: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean',
              }),
            otherIncomeAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)',
              }),
            percentage: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State Tax percentage. <br  />Decimal (12,2)' }),
            reciprocityCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Non-primary state tax reciprocity code.<br  /> Max length: 50',
              }),
            specialCheckCalc: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10',
              }),
            taxCalculationCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10',
              }),
            taxCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
            w4FormYear: z
              .int()
              .exactOptional()
              .openapi({ description: 'The state W4 form year <br  />Integer' }),
          })
          .openapi({ description: 'The Non-Primary State Tax model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Add non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.',
      }),
    preferredName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee preferred display name.<br  /> Max length: 20' }),
    primaryPayRate: z
      .array(
        z
          .strictObject({
            baseRate: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Employee base rate, used for Hourly employees. <br  />Decimal (12,2)',
              }),
            changeReason: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Pay rate change reason.<br  /> Max length: 30' }),
            defaultHours: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)',
              }),
            effectiveDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.",
              }),
            isAutoPay: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'If set to *True*, employee will be paid automatically using deafultHours.',
              }),
            payFrequency: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5',
              }),
            payGrade: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Employee pay grade. Must match Company setup. <br  /> Max length: 10',
              }),
            payType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10',
              }),
            ratePer: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10',
              }),
            salary: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)',
              }),
          })
          .openapi({ description: 'The Primary Pay Rate model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description: 'Add hourly or salary pay rate, effective date, and pay frequency.',
      }),
    primaryStateTax: z
      .array(
        z
          .strictObject({
            amount: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
            deductionsAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)',
              }),
            dependentsAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)',
              }),
            exemptions: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State tax exemptions value.<br  />Decimal (12,2)' }),
            exemptions2: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State tax exemptions 2 value.<br  />Decimal (12,2)' }),
            filingStatus: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50',
              }),
            higherRate: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean',
              }),
            otherIncomeAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)',
              }),
            percentage: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State Tax percentage. <br  />Decimal (12,2)' }),
            specialCheckCalc: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10',
              }),
            taxCalculationCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10',
              }),
            taxCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
            w4FormYear: z
              .int()
              .exactOptional()
              .openapi({ description: 'The state W4 form year <br  />Integer' }),
          })
          .openapi({ description: 'The State Tax model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Add primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed.',
      }),
    priorLastName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Prior last name if applicable.<br  />Max length: 40' }),
    salutation: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Employee preferred salutation. <br  />Max length: 10' }),
    sitwExemptReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30',
      }),
    ssExemptReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30',
      }),
    ssn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11',
      }),
    status: z
      .array(
        z
          .strictObject({
            adjustedSeniorityDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
            changeReason: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee status change reason. Must match Company setup.<br  /> Max length: 15',
              }),
            effectiveDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.' }),
            employeeStatus: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20',
              }),
            hireDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee hired date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
            isEligibleForRehire: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if employee eligible for rehire.' }),
          })
          .openapi({ description: 'The employee status model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Add employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.',
      }),
    suffix: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30',
      }),
    suiExemptReason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30',
      }),
    suiState: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2',
      }),
    taxDistributionCode1099R: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1',
      }),
    taxForm: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15',
      }),
    veteranDescription: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if employee is a veteran.' }),
    webTime: z
      .strictObject({
        badgeNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Badge number usually issued for time and attendance system use. <br  />Max length: 50',
          }),
        chargeRate: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)',
          }),
        isTimeLaborEnabled: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'If set to true, changes to employee data will be reflected in Web Time.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.',
        required: [],
      }),
    workAddress: z
      .array(
        z
          .strictObject({
            address1: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: '1st address line.<br  /> Max length: 40' }),
            address2: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: '2nd address line. <br  /> Max length: 40' }),
            city: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'City.<br  /> Max length: 40' }),
            country: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Country.<br  /> Max length: 30' }),
            county: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'County.<br  /> Max length: 30' }),
            emailAddress: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Email. <br  />Max length: 50' }),
            mobilePhone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Mobile phone number.<br  /> Max length: 12' }),
            pager: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Employee pager number.<br  /> Max length: 20' }),
            phone: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Phone number.<br  /> Max length: 12' }),
            phoneExtension: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Phone number extension.<br  /> Max length: 10' }),
            postalCode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Postal code.<br  /> Max length: 10' }),
            state: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State or province.<br  /> Max length: 2' }),
          })
          .openapi({ description: 'The address model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          "Add employee's work address, phone numbers, and email. Work Location drop down field is not included.",
      }),
    workEligibility: z
      .array(
        z
          .strictObject({
            alienOrAdmissionDocumentNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A'",
              }),
            attestedDate: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.',
              }),
            countryOfIssuance: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30',
              }),
            foreignPassportNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Foreign Passport Number.<br  /> Max length: 50' }),
            i94AdmissionNumber: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Form I-94 admission number.<br  /> Must be 11 numeric characters',
              }),
            i9DateVerified: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.' }),
            i9Notes: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: "Notes regarding employee's i9.<br  /> Max length: 4000" }),
            isI9Verified: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if employee I9 is verified.' }),
            isSsnVerified: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Indicates if employee SSN is verified.' }),
            ssnDateVerified: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
            ssnNotes: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: "Notes regarding employee's SSN.<br  /> Max length: 4000" }),
            visaType: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100',
              }),
            workAuthorization: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100',
              }),
            workUntil: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.',
              }),
          })
          .openapi({ description: 'The Work Eligibility model', required: [] }),
      )
      .max(1)
      .exactOptional()
      .openapi({ description: 'Add I-9 work authorization information.' }),
  })
  .openapi({ description: 'The staged employee model', required: [] })
  .openapi('StagedEmployee')

const StateTaxSchema = z
  .strictObject({
    amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
    deductionsAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)',
      }),
    dependentsAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)',
      }),
    exemptions: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State tax exemptions value.<br  />Decimal (12,2)' }),
    exemptions2: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State tax exemptions 2 value.<br  />Decimal (12,2)' }),
    filingStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50',
      }),
    higherRate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean',
      }),
    otherIncomeAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)',
      }),
    percentage: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State Tax percentage. <br  />Decimal (12,2)' }),
    specialCheckCalc: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10',
      }),
    taxCalculationCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10',
      }),
    taxCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State tax code.<br  /> Max length: 50' }),
    w4FormYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'The state W4 form year <br  />Integer' }),
  })
  .openapi({ description: 'The State Tax model', required: [] })
  .openapi('StateTax')

const TrackingNumberResponseSchema = z
  .object({
    trackingNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique tracking number' }),
  })
  .openapi({ description: 'The Tracking Number Response model', required: [] })
  .openapi('TrackingNumberResponse')

const EmployeeRequestBody = {
  description: 'Employee Model',
  content: { 'application/json': { schema: EmployeeSchema } },
  required: true,
}

const PaylocityAuthSecurityScheme = {
  flows: {
    clientCredentials: {
      scopes: { WebLinkAPI: 'Web Link Api' },
      tokenUrl: 'https://api.paylocity.com/IdentityServer/connect/token',
    },
  },
  type: 'oauth2',
}

export const getV2CompaniesCompanyIdCodesCodeResourceRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/codes/{codeResource}',
  tags: ['Company Codes'],
  summary: 'Get All Company Codes',
  description: 'Get All Company Codes for the selected company and resource',
  operationId: 'Get All Company Codes and Descriptions by Resource',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      codeResource: z
        .string()
        .openapi({
          param: {
            description:
              'Type of Company Code. Common values costcenter1, costcenter2, costcenter3, deductions, earnings, taxes, paygrade, positions.',
            in: 'path',
            name: 'codeResource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: { 'application/json': { schema: z.array(CompanyCodesSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: {
      description: 'Invalid Code Resource',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdCustomfieldsCategoryRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/customfields/{category}',
  tags: ['Custom Fields'],
  summary: 'Get All Custom Fields',
  description: 'Get All Custom Fields for the selected company',
  operationId: 'Get All Custom Fields by category',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      category: z
        .string()
        .openapi({
          param: {
            description: 'Custom Fields Category',
            in: 'path',
            name: 'category',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: { 'application/json': { schema: z.array(CustomFieldDefinitionSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: {
      description: 'Invalid Category',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const postV2CompaniesCompanyIdEmployeesRoute = createRoute({
  method: 'post',
  path: '/v2/companies/{companyId}/employees',
  tags: ['Employee'],
  summary: 'Add new employee',
  description:
    'New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.',
  operationId: 'Add employee',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: EmployeeRequestBody,
  },
  responses: {
    201: {
      description: 'Successfully added',
      content: { 'application/json': { schema: EmployeeIdResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesIndexRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/',
  tags: ['Employee'],
  summary: 'Get all employees',
  description: 'Get All Employees API will return employee data currently available in Web Pay.',
  operationId: 'Get all employees',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pagesize: z
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
            description: 'Number of records per page. Default value is 25.',
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      pagenumber: z
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
            description:
              'Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.',
            in: 'query',
            name: 'pagenumber',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      includetotalcount: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.",
            in: 'query',
            name: 'includetotalcount',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully Retrieved',
      content: { 'application/json': { schema: z.array(EmployeeInfoSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: {
      description: 'The company does not exist',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}',
  tags: ['Employee'],
  summary: 'Get employee',
  description: 'Get Employee API will return employee data currently available in Web Pay.',
  operationId: 'Get employee',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully Retrieved',
      content: { 'application/json': { schema: EmployeeSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: {
      description: 'The employee does not exist',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const patchV2CompaniesCompanyIdEmployeesEmployeeIdRoute = createRoute({
  method: 'patch',
  path: '/v2/companies/{companyId}/employees/{employeeId}',
  tags: ['Employee'],
  summary: 'Update employee',
  description: 'Update Employee API will update existing employee data in WebPay.',
  operationId: 'Update employee',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: EmployeeRequestBody,
  },
  responses: {
    200: { description: 'Successfully Updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const putV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesRoute = createRoute({
  method: 'put',
  path: '/v2/companies/{companyId}/employees/{employeeId}/additionalRates',
  tags: ['Additional Rates'],
  summary: 'Add/update additional rates',
  description: 'Sends new or updated employee additional rates information directly to Web Pay.',
  operationId: 'Add or update additional rates',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Additional Rate Model',
      content: { 'application/json': { schema: AdditionalRateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully added or updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const putV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupRoute = createRoute({
  method: 'put',
  path: '/v2/companies/{companyId}/employees/{employeeId}/benefitSetup',
  tags: ['Employee Benefit Setup'],
  summary: "Add/update employee's benefit setup",
  description: 'Sends new or updated employee benefit setup information directly to Web Pay.',
  operationId: 'Update or add employee benefit setup',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'BenefitSetup Model',
      content: { 'application/json': { schema: BenefitSetupSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully added or updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}/directDeposit',
  tags: ['Direct Deposit'],
  summary: 'Get All Direct Deposit',
  description:
    'Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.',
  operationId: 'Get All Direct Deposit',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully Retrieved',
      content: { 'application/json': { schema: z.array(DirectDepositSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: {
      description: 'The employee, or direct deposit does not exist',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}/earnings',
  tags: ['Earnings'],
  summary: 'Get All Earnings',
  description: 'Get All Earnings returns all earnings for the selected employee.',
  operationId: 'Get All Earnings',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: { 'application/json': { schema: z.array(EarningSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'The employee does not exist' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const putV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute = createRoute({
  method: 'put',
  path: '/v2/companies/{companyId}/employees/{employeeId}/earnings',
  tags: ['Earnings'],
  summary: 'Add/Update Earning',
  description:
    'Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.',
  operationId: 'Add or update an employee earning',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Earning Model',
      content: { 'application/json': { schema: EarningSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully added or updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}',
  tags: ['Earnings'],
  summary: 'Get Earnings by Earning Code',
  description:
    'Get Earnings returns all earnings with the provided earning code for the selected employee.',
  operationId: 'Get Earnings by Earning Code',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      earningCode: z
        .string()
        .openapi({
          param: {
            description: 'Earning Code',
            in: 'path',
            name: 'earningCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: { 'application/json': { schema: z.array(EarningSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'The employee does not exist' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute =
  createRoute({
    method: 'get',
    path: '/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}',
    tags: ['Earnings'],
    summary: 'Get Earning by Earning Code and Start Date',
    description:
      'Get Earnings returns the single earning with the provided earning code and start date for the selected employee.',
    operationId: 'Get Earning by Earning Code and Start Date',
    request: {
      params: z.object({
        companyId: z
          .string()
          .openapi({
            param: {
              description: 'Company Id',
              in: 'path',
              name: 'companyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        employeeId: z
          .string()
          .openapi({
            param: {
              description: 'Employee Id',
              in: 'path',
              name: 'employeeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        earningCode: z
          .string()
          .openapi({
            param: {
              description: 'Earning Code',
              in: 'path',
              name: 'earningCode',
              required: true,
              schema: { type: 'string' },
            },
          }),
        startDate: z
          .string()
          .openapi({
            param: {
              description: 'Start Date',
              in: 'path',
              name: 'startDate',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successfully retrieved',
        content: { 'application/json': { schema: EarningSchema } },
      },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: {
        description:
          'The employee does not exist, or the specified earningCode-startDate combination does not exist',
      },
      429: { description: 'Too Many Requests' },
      500: {
        description: 'Internal Server Error',
        content: { 'application/json': { schema: z.array(ErrorSchema) } },
      },
    },
    security: [{ paylocity_auth: ['WebLinkAPI'] }],
  })

export const deleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute =
  createRoute({
    method: 'delete',
    path: '/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}',
    tags: ['Earnings'],
    summary: 'Delete Earning by Earning Code and Start Date',
    description: 'Delete Earning by Earning Code and Start Date',
    operationId: 'Delete Earning by Earning Code and Start Date',
    request: {
      params: z.object({
        companyId: z
          .string()
          .openapi({
            param: {
              description: 'Company Id',
              in: 'path',
              name: 'companyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        employeeId: z
          .string()
          .openapi({
            param: {
              description: 'Employee Id',
              in: 'path',
              name: 'employeeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        earningCode: z
          .string()
          .openapi({
            param: {
              description: 'Earning Code',
              in: 'path',
              name: 'earningCode',
              required: true,
              schema: { type: 'string' },
            },
          }),
        startDate: z
          .string()
          .openapi({
            param: {
              description: 'Start Date',
              in: 'path',
              name: 'startDate',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Successfully deleted' },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: z.array(ErrorSchema) } },
      },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: {
        description:
          'The employee does not exist, or the specified earningCode-startDate combination does not exist',
      },
      429: { description: 'Too Many Requests' },
      500: {
        description: 'Internal Server Error',
        content: { 'application/json': { schema: z.array(ErrorSchema) } },
      },
    },
    security: [{ paylocity_auth: ['WebLinkAPI'] }],
  })

export const putV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsRoute = createRoute({
  method: 'put',
  path: '/v2/companies/{companyId}/employees/{employeeId}/emergencyContacts',
  tags: ['Emergency Contacts'],
  summary: 'Add/update emergency contacts',
  description: 'Sends new or updated employee emergency contacts directly to Web Pay.',
  operationId: 'Add or update emergency contacts',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Emergency Contact Model',
      content: { 'application/json': { schema: EmergencyContactSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully added or updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}/localTaxes',
  tags: ['Local Taxes'],
  summary: 'Get all local taxes',
  description: 'Returns all local taxes for the selected employee.',
  operationId: 'Get all local taxes',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: { 'application/json': { schema: z.array(LocalTaxSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'The employee does not exist' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const postV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute = createRoute({
  method: 'post',
  path: '/v2/companies/{companyId}/employees/{employeeId}/localTaxes',
  tags: ['Local Taxes'],
  summary: 'Add new local tax',
  description: 'Sends new employee local tax information directly to Web Pay.',
  operationId: 'Add local tax',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'LocalTax Model',
      content: { 'application/json': { schema: LocalTaxSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Successfully added' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}',
  tags: ['Local Taxes'],
  summary: 'Get local taxes by tax code',
  description: 'Returns all local taxes with the provided tax code for the selected employee.',
  operationId: 'Get local tax by tax code',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      taxCode: z
        .string()
        .openapi({
          param: {
            description: 'Tax Code',
            in: 'path',
            name: 'taxCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: { 'application/json': { schema: z.array(LocalTaxSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'The employee does not exist, or the specified tax code does not exist' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const deleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute = createRoute({
  method: 'delete',
  path: '/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}',
  tags: ['Local Taxes'],
  summary: 'Delete local tax by tax code',
  description: 'Delete local tax by tax code',
  operationId: 'Delete local tax by tax code',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      taxCode: z
        .string()
        .openapi({
          param: {
            description: 'Tax Code',
            in: 'path',
            name: 'taxCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully deleted' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'The employee does not exist, or the specified tax code does not exist' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const putV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxRoute = createRoute({
  method: 'put',
  path: '/v2/companies/{companyId}/employees/{employeeId}/nonprimaryStateTax',
  tags: ['Non-Primary State Tax'],
  summary: 'Add/update non-primary state tax',
  description:
    'Sends new or updated employee non-primary state tax information directly to Web Pay.',
  operationId: 'Add or update non-primary state tax',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Non-Primary State Tax Model',
      content: { 'application/json': { schema: NonPrimaryStateTaxSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully added or updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}',
  tags: ['PayStatements'],
  summary: 'Get employee pay statement details data for the specified year.',
  description:
    'Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.',
  operationId: 'Gets employee pay statement detail data based on the specified year',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      year: z
        .string()
        .openapi({
          param: {
            description: 'The year for which to retrieve pay statement data',
            in: 'path',
            name: 'year',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pagesize: z
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
            description: 'Number of records per page. Default value is 25.',
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      pagenumber: z
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
            description:
              'Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.',
            in: 'query',
            name: 'pagenumber',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      includetotalcount: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.",
            in: 'query',
            name: 'includetotalcount',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      codegroup: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.',
            in: 'query',
            name: 'codegroup',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully Retrieved',
      content: { 'application/json': { schema: z.array(PayStatementDetailsSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: {
      description: 'The employee, specified year, or check date does not exist',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateRoute =
  createRoute({
    method: 'get',
    path: '/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}',
    tags: ['PayStatements'],
    summary: 'Get employee pay statement details data for the specified year and check date.',
    description:
      'Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.',
    operationId:
      'Gets employee pay statement detail data based on the specified year and check date',
    request: {
      params: z.object({
        companyId: z
          .string()
          .openapi({
            param: {
              description: 'Company Id',
              in: 'path',
              name: 'companyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        employeeId: z
          .string()
          .openapi({
            param: {
              description: 'Employee Id',
              in: 'path',
              name: 'employeeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        year: z
          .string()
          .openapi({
            param: {
              description: 'The year for which to retrieve pay statement data',
              in: 'path',
              name: 'year',
              required: true,
              schema: { type: 'string' },
            },
          }),
        checkDate: z
          .string()
          .openapi({
            param: {
              description: 'The check date for which to retrieve pay statement data',
              in: 'path',
              name: 'checkDate',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        pagesize: z
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
              description: 'Number of records per page. Default value is 25.',
              in: 'query',
              name: 'pagesize',
              required: false,
              schema: { type: 'integer' },
            },
          }),
        pagenumber: z
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
              description:
                'Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.',
              in: 'query',
              name: 'pagenumber',
              required: false,
              schema: { type: 'integer' },
            },
          }),
        includetotalcount: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.",
              in: 'query',
              name: 'includetotalcount',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        codegroup: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.',
              in: 'query',
              name: 'codegroup',
              required: false,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successfully Retrieved',
        content: { 'application/json': { schema: z.array(PayStatementDetailsSchema) } },
      },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: {
        description: 'The employee, specified year, or check date does not exist',
        content: { 'application/json': { schema: z.array(ErrorSchema) } },
      },
      429: { description: 'Too Many Requests' },
      500: {
        description: 'Internal Server Error',
        content: { 'application/json': { schema: z.array(ErrorSchema) } },
      },
    },
    security: [{ paylocity_auth: ['WebLinkAPI'] }],
  })

export const getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}',
  tags: ['PayStatements'],
  summary: 'Get employee pay statement summary data for the specified year.',
  description:
    'Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.',
  operationId: 'Gets employee pay statement summary data based on the specified year',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      year: z
        .string()
        .openapi({
          param: {
            description: 'The year for which to retrieve pay statement data',
            in: 'path',
            name: 'year',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pagesize: z
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
            description: 'Number of records per page. Default value is 25.',
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      pagenumber: z
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
            description:
              'Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.',
            in: 'query',
            name: 'pagenumber',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      includetotalcount: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.",
            in: 'query',
            name: 'includetotalcount',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      codegroup: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.',
            in: 'query',
            name: 'codegroup',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully Retrieved',
      content: { 'application/json': { schema: z.array(PayStatementSummarySchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: {
      description: 'The employee, specified year, or check date does not exist',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateRoute =
  createRoute({
    method: 'get',
    path: '/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}',
    tags: ['PayStatements'],
    summary: 'Get employee pay statement summary data for the specified year and check date.',
    description:
      'Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.',
    operationId:
      'Gets employee pay statement summary data based on the specified year and check date',
    request: {
      params: z.object({
        companyId: z
          .string()
          .openapi({
            param: {
              description: 'Company Id',
              in: 'path',
              name: 'companyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        employeeId: z
          .string()
          .openapi({
            param: {
              description: 'Employee Id',
              in: 'path',
              name: 'employeeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        year: z
          .string()
          .openapi({
            param: {
              description: 'The year for which to retrieve pay statement data',
              in: 'path',
              name: 'year',
              required: true,
              schema: { type: 'string' },
            },
          }),
        checkDate: z
          .string()
          .openapi({
            param: {
              description: 'The check date for which to retrieve pay statement data',
              in: 'path',
              name: 'checkDate',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        pagesize: z
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
              description: 'Number of records per page. Default value is 25.',
              in: 'query',
              name: 'pagesize',
              required: false,
              schema: { type: 'integer' },
            },
          }),
        pagenumber: z
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
              description:
                'Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.',
              in: 'query',
              name: 'pagenumber',
              required: false,
              schema: { type: 'integer' },
            },
          }),
        includetotalcount: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.",
              in: 'query',
              name: 'includetotalcount',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        codegroup: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.',
              in: 'query',
              name: 'codegroup',
              required: false,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successfully Retrieved',
        content: { 'application/json': { schema: z.array(PayStatementSummarySchema) } },
      },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: {
        description: 'The employee, specified year, or check date does not exist',
        content: { 'application/json': { schema: z.array(ErrorSchema) } },
      },
      429: { description: 'Too Many Requests' },
      500: {
        description: 'Internal Server Error',
        content: { 'application/json': { schema: z.array(ErrorSchema) } },
      },
    },
    security: [{ paylocity_auth: ['WebLinkAPI'] }],
  })

export const putV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxRoute = createRoute({
  method: 'put',
  path: '/v2/companies/{companyId}/employees/{employeeId}/primaryStateTax',
  tags: ['Primary State Tax'],
  summary: 'Add/update primary state tax',
  description: 'Sends new or updated employee primary state tax information directly to Web Pay.',
  operationId: 'Add or update primary state tax',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Primary State Tax Model',
      content: { 'application/json': { schema: StateTaxSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully added or updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/employees/{employeeId}/sensitivedata',
  tags: ['Sensitive Data'],
  summary: 'Get sensitive data',
  description: 'Gets employee sensitive data information directly from Web Pay.',
  operationId: 'Get sensitive data',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully Retrieved',
      content: { 'application/json': { schema: z.array(SensitiveDataSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const putV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute = createRoute({
  method: 'put',
  path: '/v2/companies/{companyId}/employees/{employeeId}/sensitivedata',
  tags: ['Sensitive Data'],
  summary: 'Add/update sensitive data',
  description: 'Sends new or updated employee sensitive data information directly to Web Pay.',
  operationId: 'Add or update Sensitive Data',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      employeeId: z
        .string()
        .openapi({
          param: {
            description: 'Employee Id',
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Sensitive Data Model',
      content: { 'application/json': { schema: SensitiveDataSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successfully added or updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const getV2CompaniesCompanyIdOpenapiRoute = createRoute({
  method: 'get',
  path: '/v2/companies/{companyId}/openapi',
  tags: ['Company-Specific Schema'],
  summary: 'Get Company-Specific Open API Documentation',
  description:
    "The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)",
  operationId: 'Get company-specific Open API documentation',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'Bearer + JWT',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successfully retrieved' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const postV2CredentialsSecretsRoute = createRoute({
  method: 'post',
  path: '/v2/credentials/secrets',
  tags: ['Client Credentials'],
  summary: 'Obtain new client secret.',
  description:
    'Obtain new client secret for Paylocity-issued client id. See Setup section for details.',
  operationId: 'Add Client Secret',
  request: {
    body: {
      description: 'Add Client Secret Model',
      content: { 'application/json': { schema: AddClientSecretSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added',
      content: { 'application/json': { schema: z.array(ClientCredentialsResponseSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})

export const postV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesRoute = createRoute({
  method: 'post',
  path: '/v2/weblinkstaging/companies/{companyId}/employees/newemployees',
  tags: ['Employee Staging'],
  summary: 'Add new employee to Web Link',
  description:
    'Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.',
  operationId: 'Add new employee to Web Link',
  request: {
    params: z.object({
      companyId: z
        .string()
        .openapi({
          param: {
            description: 'Company Id',
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'StagedEmployee Model',
      content: { 'application/json': { schema: StagedEmployeeSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully Added',
      content: { 'application/json': { schema: z.array(TrackingNumberResponseSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
    403: { description: 'Forbidden' },
    429: { description: 'Too Many Requests' },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
  security: [{ paylocity_auth: ['WebLinkAPI'] }],
})
