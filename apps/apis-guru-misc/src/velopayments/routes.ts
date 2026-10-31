import { createRoute, z } from '@hono/zod-openapi'

const AcceptedPaymentV3Schema = z
  .object({
    amount: z
      .int()
      .openapi({ description: 'The amount of the payment in minor units', example: 10000 }),
    currencyType: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    paymentMemo: z
      .string()
      .min(0)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          '<p>Any value here will override the memo value in the parent payout</p>\n<p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>\n',
        example: 'INV00112',
      }),
    paymentMetadata: z
      .string()
      .min(0)
      .max(512)
      .exactOptional()
      .openapi({
        description:
          '<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>\n<p>The structure of the data will be dictated by the requirements of the payment rails</p>\n',
        example: 'invoiceeId_123|abc001:12345|xyz002:4567',
      }),
    payorPaymentId: z
      .string()
      .min(0)
      .max(40)
      .openapi({
        description: 'A reference identifier for the payor for the given payee payment',
        example: '123211321ABSD',
      }),
    railsId: z
      .string()
      .openapi({
        description: 'Indicates the 3rd party system involved in making this payment',
        example: 'SVB',
      }),
    remoteId: z
      .string()
      .min(1)
      .max(100)
      .openapi({ description: 'Your identifier for the payee', example: 'remoteId1234' }),
    remoteSystemId: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description: '<p>The identifier for the remote payments system if not Velo</p>\n',
        example: 'OB012',
      }),
    sourceAccountName: z
      .string()
      .openapi({
        description: 'The identifier of the source account to debit the payment from',
        example: 'Chase Bank Account',
      }),
  })
  .openapi({
    example: {
      amount: 10000,
      currencyType: 'USD',
      paymentMemo: 'INV00112',
      paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
      payorPaymentId: '123211321ABSD',
      railsId: 'SVB',
      remoteId: 'remoteId1234',
      remoteSystemId: 'OB012',
      sourceAccountName: 'Chase Bank Account',
    },
    required: [
      'amount',
      'currencyType',
      'payorPaymentId',
      'railsId',
      'remoteId',
      'sourceAccountName',
    ],
  })
  .openapi('AcceptedPaymentV3')

const MFATypeSchema = z
  .enum(['SMS', 'YUBIKEY', 'TOTP'])
  .nullable()
  .openapi({ description: 'The type of the MFA device', example: 'TOTP' })
  .openapi('MFAType')

const MFADetailsSchema = z
  .object({
    mfa_type: MFATypeSchema.exactOptional(),
    verified: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'true if the user has used the MFA device for login',
        example: true,
      }),
  })
  .openapi({ example: { mfa_type: 'TOTP', verified: true }, required: [] })
  .openapi('MFADetails')

const UserType_2Schema = z
  .enum(['BACKOFFICE', 'PAYOR', 'PAYEE'])
  .openapi({ example: 'PAYOR' })
  .openapi('UserType_2')

const UserInfoSchema = z
  .object({
    mfa_details: MFADetailsSchema.exactOptional(),
    userType: UserType_2Schema.exactOptional(),
    user_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'the id of the user',
        example: '39976ee5-dc4c-4b21-a966-a04fa71ef9e1',
      }),
  })
  .openapi({
    example: {
      mfa_details: { mfa_type: 'TOTP', verified: true },
      userType: 'PAYOR',
      user_id: '39976ee5-dc4c-4b21-a966-a04fa71ef9e1',
    },
    required: [],
  })
  .openapi('UserInfo')

const AccessTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Bearer token used in headers to access secure endpoints\n',
        example: '9b58410b-e1b7-4f90-bebb-7e09c5427020',
      }),
    entityIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If the user is a payee then the payeeId<P>\nIf the user is a payor then the payorId\n',
        example: ['ed89eaa0-4450-4916-a4ff-62a328d60bd6'],
      }),
    expires_in: z
      .int()
      .exactOptional()
      .openapi({ description: 'The lifetime in seconds of the access token', example: 1800 }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'can be used to obtain a new access token',
        example: 'c3d0f771-0997-4814-84e3-09690208545a',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description: 'the scope of the access token',
        example: 'https://api.velopayments.com/scopes/auth/users',
      }),
    token_type: z
      .string()
      .default('bearer')
      .exactOptional()
      .openapi({ description: 'the type of the token', example: 'bearer' }),
    user_info: UserInfoSchema.exactOptional(),
  })
  .openapi({
    example: {
      access_token: '9b58410b-e1b7-4f90-bebb-7e09c5427020',
      entityIds: ['ed89eaa0-4450-4916-a4ff-62a328d60bd6'],
      expires_in: 1800,
      refresh_token: 'c3d0f771-0997-4814-84e3-09690208545a',
      scope: 'https://api.velopayments.com/scopes/auth/users',
      token_type: 'bearer',
      user_info: {
        mfa_details: { mfa_type: 'TOTP', verified: true },
        userType: 'PAYOR',
        user_id: '39976ee5-dc4c-4b21-a966-a04fa71ef9e1',
      },
    },
    required: [],
  })
  .openapi('AccessTokenResponse')

const AccessTokenValidationRequestSchema = z
  .object({
    otp: z
      .string()
      .min(6)
      .max(64)
      .openapi({
        description: 'an OTP either sent via sms or generated by a registered MFA device',
        example: '123456',
      }),
  })
  .openapi({ example: { otp: '123456' }, required: ['otp'] })
  .openapi('AccessTokenValidationRequest')

const AllocationTypeSchema = z
  .string()
  .openapi({
    description: 'Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL',
  })
  .openapi('AllocationType')

const AuthResponseSchema = z
  .object({
    access_token: z.string().openapi({ example: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk' }),
    entityIds: z.array(z.string()).exactOptional(),
    expires_in: z.number().exactOptional().openapi({ example: 1799 }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({ example: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk' }),
    scope: z.string().exactOptional().openapi({ example: 'example_scope' }),
    token_type: z.string().openapi({ example: 'bearer' }),
  })
  .openapi({
    example: {
      access_token: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk',
      entityIds: ['entityIds', 'entityIds'],
      expires_in: 1799,
      refresh_token: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk',
      scope: 'example_scope',
      token_type: 'bearer',
    },
    required: ['access_token', 'token_type'],
  })
  .openapi('AuthResponse')

const AutoTopUpConfigV2Schema = z
  .object({
    enabled: z
      .boolean()
      .openapi({
        description:
          'Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.',
        example: true,
      }),
    minBalance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.',
        example: 10000,
      }),
    targetBalance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.',
        example: 300000,
      }),
  })
  .openapi({
    example: { enabled: true, minBalance: 10000, targetBalance: 300000 },
    required: ['enabled'],
  })
  .openapi('AutoTopUpConfigV2')

const AutoTopUpConfigV3Schema = z
  .object({
    enabled: z
      .boolean()
      .openapi({
        description:
          'Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.',
        example: true,
      }),
    fundingAccountId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Id of funding account from which to pull funds when auto top-up is triggered.  Note - if this is not set then auto top-up is effectively disabled.',
        example: '640ab1bd-8a6a-4603-a83a-1edbc3ed5689',
      }),
    minBalance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.',
        example: 10000,
      }),
    targetBalance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.',
        example: 300000,
      }),
  })
  .openapi({
    example: {
      enabled: true,
      fundingAccountId: '640ab1bd-8a6a-4603-a83a-1edbc3ed5689',
      minBalance: 10000,
      targetBalance: 300000,
    },
    required: ['enabled'],
  })
  .openapi('AutoTopUpConfigV3')

const CategorySchema = z
  .enum(['payment', 'payee', 'debit'])
  .openapi({ description: 'The notification category.  One of "payment", "payee", "debit".' })
  .openapi('Category')

const ChallengeV3Schema = z
  .object({
    description: z.string().min(1).max(255).openapi({ example: 'challenge description' }),
    value: z.string().min(3).max(20).openapi({ example: 'challenge test' }),
  })
  .openapi({
    example: { description: 'challenge description', value: 'challenge test' },
    required: ['description', 'value'],
  })
  .openapi('ChallengeV3')

const ChallengeV4Schema = z
  .object({
    description: z.string().min(1).max(255).openapi({ example: 'challenge description' }),
    value: z
      .string()
      .min(3)
      .max(20)
      .openapi({
        description: 'The value that the user will be asked to verify when they onboard',
        example: '11984567',
      }),
  })
  .openapi({
    description:
      '<p>Used to override the default challenge presented to the payee when they onboard</p>\n<p>Not used after the payee has onboarded</p>\n',
    example: { description: 'challenge description', value: '11984567' },
    required: ['description', 'value'],
  })
  .openapi('ChallengeV4')

const CompanyV3Schema = z
  .object({
    name: z.string().min(3).max(40).openapi({ example: 'ABC Group Plc' }),
    operatingName: z
      .string()
      .min(1)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ example: 'ABC Co' }),
    taxId: z
      .string()
      .min(6)
      .max(30)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Company Tax Id must be between 6 and 30 characters long',
        example: '123123123',
      }),
  })
  .nullable()
  .openapi({
    example: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
    required: ['name'],
  })
  .openapi('CompanyV3')

const CompanyV4Schema = z
  .object({
    name: z.string().min(3).max(40).openapi({ example: 'ABC Group Plc' }),
    operatingName: z
      .string()
      .min(1)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ example: 'ABC Co' }),
    taxId: z
      .string()
      .min(6)
      .max(30)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Company Tax Id must be between 6 and 30 characters long',
        example: '123123123',
      }),
  })
  .nullable()
  .openapi({
    example: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
    required: ['name'],
  })
  .openapi('CompanyV4')

const CreateFundingAccountRequestV2Schema = z
  .object({
    accountName: z
      .string()
      .min(1)
      .max(22)
      .exactOptional()
      .openapi({ description: 'Required if type is either FBO or PRIVATE' }),
    accountNumber: z
      .string()
      .min(4)
      .max(17)
      .exactOptional()
      .openapi({ description: 'Required if type is either FBO or PRIVATE' }),
    currency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({
        description: 'ISO 4217 currency code, Required if type is either WUBS_DECOUPLED or PRIVATE',
        example: 'USD',
      }),
    name: z.string().min(3).max(30),
    payorId: z.uuid(),
    routingNumber: z
      .string()
      .min(6)
      .max(9)
      .exactOptional()
      .openapi({ description: 'Required if type is either FBO or PRIVATE' }),
    type: z.enum(['FBO', 'WUBS_DECOUPLED', 'PRIVATE']),
  })
  .openapi({
    example: {
      accountName: 'accountName',
      accountNumber: 'accountNumber',
      currency: 'USD',
      name: 'name',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      routingNumber: 'routingNumber',
      type: 'FBO',
    },
    required: ['name', 'payorId', 'type'],
  })
  .openapi('CreateFundingAccountRequestV2')

const CreateIndividualV3NameSchema = z
  .object({
    firstName: z.string().min(1).max(40).openapi({ example: 'Bob' }),
    lastName: z.string().min(1).max(40).openapi({ example: 'Smith' }),
    otherNames: z.string().min(1).max(40).exactOptional().openapi({ example: 'H' }),
    title: z.string().min(1).max(10).exactOptional().openapi({ example: 'Mr' }),
  })
  .openapi({
    example: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
    required: ['firstName', 'lastName'],
  })
  .openapi('CreateIndividualV3Name')

const CreateIndividualV3Schema = z
  .object({
    dateOfBirth: z.iso
      .date()
      .openapi({
        description: 'Must not be date in future. Example - 1970-05-20',
        example: '1970-05-20',
      }),
    name: CreateIndividualV3NameSchema,
    nationalIdentification: z
      .string()
      .min(6)
      .max(30)
      .exactOptional()
      .openapi({ example: 'SA211123K' }),
  })
  .openapi({
    example: {
      dateOfBirth: '1970-05-20T00:00:00.000+0000',
      name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
      nationalIdentification: 'SA211123K',
    },
    required: ['dateOfBirth', 'name'],
  })
  .openapi('CreateIndividualV3')

const CreateIndividualV4Schema = z
  .object({
    dateOfBirth: z.iso
      .date()
      .openapi({
        description: 'Must not be date in future. Example - 1970-05-20',
        example: '1970-05-20',
      }),
    name: CreateIndividualV3NameSchema,
    nationalIdentification: z
      .string()
      .min(6)
      .max(30)
      .exactOptional()
      .openapi({ example: 'SA211123K' }),
  })
  .openapi({
    example: {
      dateOfBirth: '1970-05-20T00:00:00.000+0000',
      name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
      nationalIdentification: 'SA211123K',
    },
    required: ['dateOfBirth', 'name'],
  })
  .openapi('CreateIndividualV4')

const CreatePayeeAddressV3Schema = z
  .object({
    city: z.string().min(2).max(50).openapi({ example: 'Key West' }),
    country: z
      .string()
      .length(2)
      .openapi({ description: '2 letter ISO 3166-1 country code', example: 'US' }),
    countyOrProvince: z
      .string()
      .min(2)
      .max(50)
      .nullable()
      .exactOptional()
      .openapi({ example: 'FL' }),
    line1: z.string().min(1).max(100).openapi({ example: '500 Duval St' }),
    line2: z.string().min(0).max(100).nullable().exactOptional(),
    line3: z.string().min(0).max(100).nullable().exactOptional(),
    line4: z.string().min(0).max(100).nullable().exactOptional(),
    zipOrPostcode: z
      .string()
      .min(2)
      .max(60)
      .nullable()
      .exactOptional()
      .openapi({ example: '33945' }),
  })
  .openapi({
    example: {
      city: 'Key West',
      country: 'US',
      countyOrProvince: 'FL',
      line1: '500 Duval St',
      line2: 'line2',
      line3: 'line3',
      line4: 'line4',
      zipOrPostcode: '33945',
    },
    required: ['city', 'country', 'line1'],
  })
  .openapi('CreatePayeeAddressV3')

const CreatePayeeAddressV4Schema = z
  .object({
    city: z.string().min(2).max(50).openapi({ example: 'Key West' }),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    countyOrProvince: z
      .string()
      .min(2)
      .max(50)
      .nullable()
      .exactOptional()
      .openapi({ example: 'FL' }),
    line1: z.string().min(1).max(100).openapi({ example: '500 Duval St' }),
    line2: z.string().min(0).max(100).nullable().exactOptional(),
    line3: z.string().min(0).max(100).nullable().exactOptional(),
    line4: z.string().min(0).max(100).nullable().exactOptional(),
    zipOrPostcode: z
      .string()
      .min(2)
      .max(60)
      .nullable()
      .exactOptional()
      .openapi({ example: '33945' }),
  })
  .openapi({
    example: {
      city: 'Key West',
      country: 'US',
      countyOrProvince: 'FL',
      line1: '500 Duval St',
      line2: 'line2',
      line3: 'line3',
      line4: 'line4',
      zipOrPostcode: '33945',
    },
    required: ['city', 'country', 'line1'],
  })
  .openapi('CreatePayeeAddressV4')

const CreatePaymentChannelV3Schema = z
  .object({
    accountName: z.string().openapi({ example: 'My account' }),
    accountNumber: z
      .string()
      .min(6)
      .max(17)
      .exactOptional()
      .openapi({
        description: 'Either routing number and account number or only iban must be set',
        example: 'XXXXXX5678',
      }),
    countryCode: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    iban: z
      .string()
      .regex(/^[A-Za-z0-9]+$/)
      .min(15)
      .max(34)
      .exactOptional()
      .openapi({
        description: 'Must match the regular expression ```^[A-Za-z0-9]+$```.',
        example: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
        title: 'IBAN - International Bank Account Number',
      }),
    paymentChannelName: z.string().exactOptional().openapi({ example: 'My Payment Channel' }),
    routingNumber: z
      .string()
      .length(9)
      .exactOptional()
      .openapi({
        description: 'Either routing number and account number or only iban must be set',
        example: 'XXXXX6789',
      }),
  })
  .openapi({
    example: {
      accountName: 'My account',
      accountNumber: 'XXXXXX5678',
      countryCode: 'US',
      currency: 'USD',
      iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
      paymentChannelName: 'My Payment Channel',
      routingNumber: 'XXXXX6789',
    },
    required: ['accountName', 'countryCode', 'currency'],
  })
  .openapi('CreatePaymentChannelV3')

const PayableIssueV3Schema = z
  .object({
    code: z.string().openapi({ example: '3' }),
    message: z.string().openapi({ example: 'payee-disabled' }),
  })
  .openapi({
    description: 'payable issues for the payee and payor combination',
    example: { code: '3', message: 'payee-disabled' },
    required: ['code', 'message'],
  })
  .openapi('PayableIssueV3')

const PayeePayorRefV3Schema = z
  .object({
    invitationStatus: z.string().exactOptional(),
    invitationStatusTimestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the invitation status is updated',
        example: '2019-01-20T09:00:00Z',
      }),
    payableIssues: z
      .array(PayableIssueV3Schema)
      .exactOptional()
      .openapi({
        description:
          'Indicates any conditions which prevent the payee from being payable for this payor',
      }),
    payableStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the payee is payable for this payor' }),
    paymentChannelId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3' }),
    payorId: z.uuid().exactOptional().openapi({ example: 'ba08877f-9d96-41e4-9c26-44a872d856ae' }),
    remoteId: z.string().exactOptional().openapi({ example: 'uniqueIdForRemoteEntity' }),
  })
  .openapi({
    example: {
      invitationStatus: 'invitationStatus',
      invitationStatusTimestamp: '2019-01-20T09:00:00Z',
      payableIssues: [
        { code: '3', message: 'payee-disabled' },
        { code: '3', message: 'payee-disabled' },
      ],
      payableStatus: true,
      paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
      payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
      remoteId: 'uniqueIdForRemoteEntity',
    },
    required: [],
  })
  .openapi('PayeePayorRefV3')

const CreatePayeeV3Schema = z
  .object({
    address: CreatePayeeAddressV3Schema,
    challenge: ChallengeV3Schema.exactOptional(),
    company: CompanyV3Schema.exactOptional(),
    email: z.email().min(3).max(255).openapi({ example: 'bob@example.com' }),
    individual: CreateIndividualV3Schema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    payeeId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9', readOnly: true }),
    paymentChannel: CreatePaymentChannelV3Schema.exactOptional(),
    payorRefs: z
      .array(PayeePayorRefV3Schema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    remoteId: z.string().min(1).max(100).openapi({ example: 'Remote ID' }),
    type: z
      .string()
      .openapi({ description: 'Type of Payee. One of the following values: Individual, Company' }),
  })
  .openapi({
    example: {
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      challenge: { description: 'challenge description', value: 'challenge test' },
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
      email: 'bob@example.com',
      individual: {
        dateOfBirth: '1970-05-20T00:00:00.000+0000',
        name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
        nationalIdentification: 'SA211123K',
      },
      language: 'en-US',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
      paymentChannel: {
        accountName: 'My account',
        accountNumber: 'XXXXXX5678',
        countryCode: 'US',
        currency: 'USD',
        iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
        paymentChannelName: 'My Payment Channel',
        routingNumber: 'XXXXX6789',
      },
      payorRefs: [
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
      ],
      remoteId: 'Remote ID',
      type: 'type',
    },
    required: ['address', 'email', 'remoteId', 'type'],
  })
  .openapi('CreatePayeeV3')

const CreatePaymentChannelV4Schema = z
  .object({
    accountName: z.string().openapi({ example: 'My account' }),
    accountNumber: z
      .string()
      .min(6)
      .max(17)
      .exactOptional()
      .openapi({
        description: 'Either routing number and account number or only iban must be set',
        example: 'XXXXXX5678',
      }),
    countryCode: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    iban: z
      .string()
      .regex(/^[A-Za-z0-9]+$/)
      .min(15)
      .max(34)
      .exactOptional()
      .openapi({
        description: 'Must match the regular expression ```^[A-Za-z0-9]+$```.',
        example: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
        title: 'IBAN - International Bank Account Number',
      }),
    paymentChannelName: z.string().exactOptional().openapi({ example: 'My Payment Channel' }),
    routingNumber: z
      .string()
      .length(9)
      .exactOptional()
      .openapi({
        description: 'Either routing number and account number or only iban must be set',
        example: 'XXXXX6789',
      }),
  })
  .openapi({
    example: {
      accountName: 'My account',
      accountNumber: 'XXXXXX5678',
      countryCode: 'US',
      currency: 'USD',
      iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
      paymentChannelName: 'My Payment Channel',
      routingNumber: 'XXXXX6789',
    },
    required: ['accountName', 'countryCode', 'currency'],
  })
  .openapi('CreatePaymentChannelV4')

const PayeeTypeEnumSchema = z
  .enum(['Individual', 'Company'])
  .openapi({ description: 'The type of the payee' })
  .openapi('PayeeTypeEnum')

const CreatePayeeV4Schema = z
  .object({
    address: CreatePayeeAddressV4Schema,
    challenge: ChallengeV4Schema.exactOptional(),
    company: CompanyV4Schema.exactOptional(),
    email: z.email().min(3).max(255).openapi({ example: 'bob@example.com' }),
    individual: CreateIndividualV4Schema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    paymentChannel: CreatePaymentChannelV4Schema.exactOptional(),
    remoteId: z.string().min(1).max(100).openapi({ example: 'Remote ID' }),
    type: PayeeTypeEnumSchema,
  })
  .openapi({
    example: {
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      challenge: { description: 'challenge description', value: '11984567' },
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
      email: 'bob@example.com',
      individual: {
        dateOfBirth: '1970-05-20T00:00:00.000+0000',
        name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
        nationalIdentification: 'SA211123K',
      },
      language: 'en-US',
      paymentChannel: {
        accountName: 'My account',
        accountNumber: 'XXXXXX5678',
        countryCode: 'US',
        currency: 'USD',
        iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
        paymentChannelName: 'My Payment Channel',
        routingNumber: 'XXXXX6789',
      },
      remoteId: 'Remote ID',
    },
    required: ['address', 'email', 'remoteId', 'type'],
  })
  .openapi('CreatePayeeV4')

const CreatePayeesCSVRequestV3Schema = z
  .object({
    addressCity: z.string().min(2).max(50).openapi({ example: 'Key West' }),
    addressCountry: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    addressCountyOrProvince: z.string().min(1).max(50).exactOptional().openapi({ example: 'FL' }),
    addressLine1: z.string().min(2).max(100).openapi({ example: '500 Duval St' }),
    addressLine2: z.string().min(0).max(100).exactOptional(),
    addressLine3: z.string().min(0).max(100).exactOptional(),
    addressLine4: z.string().min(0).max(100).exactOptional(),
    addressZipOrPostcode: z.string().min(1).max(60).openapi({ example: '33945' }),
    challengeDescription: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ example: 'challenge description' }),
    challengeValue: z
      .string()
      .min(3)
      .max(20)
      .exactOptional()
      .openapi({ example: 'challenge value' }),
    companyEIN: z.string().min(6).max(30).exactOptional().openapi({ example: '123456789' }),
    companyName: z.string().min(1).max(40).exactOptional().openapi({ example: 'ABC Ltd' }),
    companyOperatingName: z.string().min(1).max(100).exactOptional().openapi({ example: 'ABC' }),
    email: z.email().min(3).max(255).openapi({ example: 'bob@example.com' }),
    individualDateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Must not be date in future. Example - 1970-05-20',
        example: '1985-01-01',
      }),
    individualFirstName: z.string().min(1).max(40).exactOptional(),
    individualLastName: z.string().min(1).max(40).exactOptional().openapi({ example: 'Smith' }),
    individualNationalIdentification: z
      .string()
      .min(6)
      .max(30)
      .exactOptional()
      .openapi({ example: 'AB123456C' }),
    individualOtherNames: z.string().min(1).max(40).exactOptional().openapi({ example: 'Bob' }),
    individualTitle: z.string().min(1).max(40).exactOptional().openapi({ example: 'Mr' }),
    payeeLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    paymentChannelAccountName: z.string().exactOptional().openapi({ example: 'My Account' }),
    paymentChannelAccountNumber: z
      .string()
      .min(6)
      .max(17)
      .exactOptional()
      .openapi({
        description: 'Either routing number and account number or only iban must be set',
        example: 'XXXXXX5678',
      }),
    paymentChannelCountryCode: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    paymentChannelCurrency: z.string().length(3).exactOptional().openapi({ example: 'USD' }),
    paymentChannelIban: z
      .string()
      .regex(/^[A-Za-z0-9]+$/)
      .min(15)
      .max(34)
      .exactOptional()
      .openapi({
        description: 'Must match the regular expression ```^[A-Za-z0-9]+$```.',
        example: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
        title: 'IBAN - International Bank Account Number',
      }),
    paymentChannelRoutingNumber: z
      .string()
      .length(9)
      .exactOptional()
      .openapi({
        description: 'Either routing number and account number or only iban must be set',
        example: 'XXXXX6789',
      }),
    remoteId: z.string().min(1).max(100).openapi({ example: 'remoteId123' }),
    type: PayeeTypeEnumSchema,
  })
  .openapi({
    required: [
      'addressCity',
      'addressCountry',
      'addressLine1',
      'addressZipOrPostcode',
      'email',
      'remoteId',
      'type',
    ],
  })
  .openapi('CreatePayeesCSVRequestV3')

const CreatePayeesCSVRequestV4Schema = z
  .object({
    addressCity: z.string().min(2).max(50).openapi({ example: 'Key West' }),
    addressCountry: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    addressCountyOrProvince: z.string().min(1).max(50).exactOptional().openapi({ example: 'FL' }),
    addressLine1: z.string().min(2).max(100).openapi({ example: '500 Duval St' }),
    addressLine2: z.string().min(0).max(100).exactOptional(),
    addressLine3: z.string().min(0).max(100).exactOptional(),
    addressLine4: z.string().min(0).max(100).exactOptional(),
    addressZipOrPostcode: z.string().min(1).max(60).openapi({ example: '33945' }),
    challengeDescription: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ example: 'challenge description' }),
    challengeValue: z
      .string()
      .min(3)
      .max(20)
      .exactOptional()
      .openapi({ example: 'challenge value' }),
    companyEIN: z.string().min(6).max(30).exactOptional().openapi({ example: '123456789' }),
    companyName: z.string().min(1).max(40).exactOptional().openapi({ example: 'ABC Ltd' }),
    companyOperatingName: z.string().min(1).max(100).exactOptional().openapi({ example: 'ABC' }),
    email: z.email().min(3).max(255).openapi({ example: 'bob@example.com' }),
    individualDateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Must not be date in future. Example - 1970-05-20',
        example: '1985-01-01',
      }),
    individualFirstName: z.string().min(1).max(40).exactOptional(),
    individualLastName: z.string().min(1).max(40).exactOptional().openapi({ example: 'Smith' }),
    individualNationalIdentification: z
      .string()
      .min(6)
      .max(30)
      .exactOptional()
      .openapi({ example: 'AB123456C' }),
    individualOtherNames: z.string().min(1).max(40).exactOptional().openapi({ example: 'Bob' }),
    individualTitle: z.string().min(1).max(40).exactOptional().openapi({ example: 'Mr' }),
    payeeLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    paymentChannelAccountName: z.string().exactOptional().openapi({ example: 'My Account' }),
    paymentChannelAccountNumber: z
      .string()
      .min(6)
      .max(17)
      .exactOptional()
      .openapi({
        description: 'Either routing number and account number or only iban must be set',
        example: 'XXXXXX5678',
      }),
    paymentChannelCountryCode: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    paymentChannelCurrency: z.string().length(3).exactOptional().openapi({ example: 'USD' }),
    paymentChannelIban: z
      .string()
      .regex(/^[A-Za-z0-9]+$/)
      .min(15)
      .max(34)
      .exactOptional()
      .openapi({
        description: 'Must match the regular expression ```^[A-Za-z0-9]+$```.',
        example: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
        title: 'IBAN - International Bank Account Number',
      }),
    paymentChannelRoutingNumber: z
      .string()
      .length(9)
      .exactOptional()
      .openapi({
        description: 'Either routing number and account number or only iban must be set',
        example: 'XXXXX6789',
      }),
    remoteId: z.string().min(1).max(100).openapi({ example: 'remoteId123' }),
    type: PayeeTypeEnumSchema,
  })
  .openapi({
    required: [
      'addressCity',
      'addressCountry',
      'addressLine1',
      'addressZipOrPostcode',
      'email',
      'remoteId',
      'type',
    ],
  })
  .openapi('CreatePayeesCSVRequestV4')

const CreatePayeesCSVResponseV3RejectedCsvRowsSchema = z
  .object({
    lineNumber: z.int().exactOptional().openapi({ example: 3 }),
    message: z.string().exactOptional().openapi({ example: 'rejected message 1' }),
    rejectedContent: z.string().exactOptional().openapi({ example: 'unable,to,process,csv,line' }),
  })
  .openapi({
    example: {
      lineNumber: 3,
      message: 'rejected message 1',
      rejectedContent: 'unable,to,process,csv,line',
    },
    required: [],
  })
  .openapi('CreatePayeesCSVResponseV3RejectedCsvRows')

const CreatePayeesCSVResponseV3Schema = z
  .object({
    batchId: z.uuid().exactOptional().openapi({ example: 'cb6ff8c6-85e9-45a6-b7d9-d05305db67f3' }),
    rejectedCsvRows: z.array(CreatePayeesCSVResponseV3RejectedCsvRowsSchema).exactOptional(),
  })
  .openapi({
    example: {
      batchId: 'cb6ff8c6-85e9-45a6-b7d9-d05305db67f3',
      rejectedCsvRows: [
        {
          lineNumber: 3,
          message: 'rejected message 1',
          rejectedContent: 'unable,to,process,csv,line',
        },
        {
          lineNumber: 3,
          message: 'rejected message 1',
          rejectedContent: 'unable,to,process,csv,line',
        },
      ],
    },
    required: [],
  })
  .openapi('CreatePayeesCSVResponseV3')

const CreatePayeesCSVResponseV4Schema = z
  .object({
    batchId: z.uuid().exactOptional().openapi({ example: 'cb6ff8c6-85e9-45a6-b7d9-d05305db67f3' }),
    rejectedCsvRows: z.array(CreatePayeesCSVResponseV3RejectedCsvRowsSchema).exactOptional(),
  })
  .openapi({
    example: {
      batchId: 'cb6ff8c6-85e9-45a6-b7d9-d05305db67f3',
      rejectedCsvRows: [
        {
          lineNumber: 3,
          message: 'rejected message 1',
          rejectedContent: 'unable,to,process,csv,line',
        },
        {
          lineNumber: 3,
          message: 'rejected message 1',
          rejectedContent: 'unable,to,process,csv,line',
        },
      ],
    },
    required: [],
  })
  .openapi('CreatePayeesCSVResponseV4')

const CreatePayeesRequestV3Schema = z
  .object({
    payees: z.array(CreatePayeeV3Schema),
    payorId: z.string().openapi({ example: '9ac75325-5dcd-42d5-b992-175d7e0a035e' }),
  })
  .openapi({
    example: {
      payees: [
        {
          address: {
            city: 'Key West',
            country: 'US',
            countyOrProvince: 'FL',
            line1: '500 Duval St',
            line2: 'line2',
            line3: 'line3',
            line4: 'line4',
            zipOrPostcode: '33945',
          },
          challenge: { description: 'challenge description', value: 'challenge test' },
          company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
          email: 'bob@example.com',
          individual: {
            dateOfBirth: '1970-05-20T00:00:00.000+0000',
            name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
            nationalIdentification: 'SA211123K',
          },
          language: 'en-US',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
          paymentChannel: {
            accountName: 'My account',
            accountNumber: 'XXXXXX5678',
            countryCode: 'US',
            currency: 'USD',
            iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
            paymentChannelName: 'My Payment Channel',
            routingNumber: 'XXXXX6789',
          },
          payorRefs: [
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
          ],
          remoteId: 'Remote ID',
          type: 'type',
        },
        {
          address: {
            city: 'Key West',
            country: 'US',
            countyOrProvince: 'FL',
            line1: '500 Duval St',
            line2: 'line2',
            line3: 'line3',
            line4: 'line4',
            zipOrPostcode: '33945',
          },
          challenge: { description: 'challenge description', value: 'challenge test' },
          company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
          email: 'bob@example.com',
          individual: {
            dateOfBirth: '1970-05-20T00:00:00.000+0000',
            name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
            nationalIdentification: 'SA211123K',
          },
          language: 'en-US',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
          paymentChannel: {
            accountName: 'My account',
            accountNumber: 'XXXXXX5678',
            countryCode: 'US',
            currency: 'USD',
            iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
            paymentChannelName: 'My Payment Channel',
            routingNumber: 'XXXXX6789',
          },
          payorRefs: [
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
          ],
          remoteId: 'Remote ID',
          type: 'type',
        },
      ],
      payorId: '9ac75325-5dcd-42d5-b992-175d7e0a035e',
    },
    required: ['payees', 'payorId'],
  })
  .openapi('CreatePayeesRequestV3')

const CreatePayeesRequestV4Schema = z
  .object({
    payees: z.array(CreatePayeeV4Schema),
    payorId: z.string().openapi({ example: '9ac75325-5dcd-42d5-b992-175d7e0a035e' }),
  })
  .openapi({
    example: {
      payees: [
        {
          address: {
            city: 'Key West',
            country: 'US',
            countyOrProvince: 'FL',
            line1: '500 Duval St',
            line2: 'line2',
            line3: 'line3',
            line4: 'line4',
            zipOrPostcode: '33945',
          },
          challenge: { description: 'challenge description', value: '11984567' },
          company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
          email: 'bob@example.com',
          individual: {
            dateOfBirth: '1970-05-20T00:00:00.000+0000',
            name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
            nationalIdentification: 'SA211123K',
          },
          language: 'en-US',
          paymentChannel: {
            accountName: 'My account',
            accountNumber: 'XXXXXX5678',
            countryCode: 'US',
            currency: 'USD',
            iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
            paymentChannelName: 'My Payment Channel',
            routingNumber: 'XXXXX6789',
          },
          remoteId: 'Remote ID',
        },
        {
          address: {
            city: 'Key West',
            country: 'US',
            countyOrProvince: 'FL',
            line1: '500 Duval St',
            line2: 'line2',
            line3: 'line3',
            line4: 'line4',
            zipOrPostcode: '33945',
          },
          challenge: { description: 'challenge description', value: '11984567' },
          company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
          email: 'bob@example.com',
          individual: {
            dateOfBirth: '1970-05-20T00:00:00.000+0000',
            name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
            nationalIdentification: 'SA211123K',
          },
          language: 'en-US',
          paymentChannel: {
            accountName: 'My account',
            accountNumber: 'XXXXXX5678',
            countryCode: 'US',
            currency: 'USD',
            iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
            paymentChannelName: 'My Payment Channel',
            routingNumber: 'XXXXX6789',
          },
          remoteId: 'Remote ID',
        },
      ],
      payorId: '9ac75325-5dcd-42d5-b992-175d7e0a035e',
    },
    required: ['payees', 'payorId'],
  })
  .openapi('CreatePayeesRequestV4')

const CreatePayorLinkRequestSchema = z
  .object({ fromPayorId: z.uuid(), linkType: z.literal('PARENT_OF'), toPayorId: z.uuid() })
  .openapi({
    example: {
      fromPayorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      linkType: 'PARENT_OF',
      toPayorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
    },
    required: ['fromPayorId', 'linkType', 'toPayorId'],
  })
  .openapi('CreatePayorLinkRequest')

const PaymentInstructionV3Schema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description:
          '<p>Amount to send to Payee</p>\n<p>The maximum payment amount is dependent on the currency</p>\n',
        example: 1299,
      }),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    paymentMemo: z
      .string()
      .min(0)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          '<p>Any value here will override the memo value in the parent payout</p>\n<p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>\n',
        example: 'my memo',
      }),
    paymentMetadata: z
      .string()
      .min(0)
      .max(512)
      .exactOptional()
      .openapi({
        description:
          '<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>\n<p>The structure of the data will be dictated by the requirements of the payment rails</p>\n',
        example: 'invoiceeId_123|abc001:12345|xyz002:4567',
      }),
    payorPaymentId: z
      .string()
      .min(0)
      .max(40)
      .exactOptional()
      .openapi({
        description: 'A reference identifier for the payor for the given payee payment',
        example: '123211321ABSD',
      }),
    remoteId: z
      .string()
      .min(1)
      .max(100)
      .openapi({ description: 'Your identifier for the payee', example: 'remoteId1234' }),
    remoteSystemId: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          '<p>The identifier for the remote payments system if not Velo</p>\n<p>Should only be used after consultation with Velo Payments</p>\n',
      }),
    sourceAccountName: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description: 'Must match a valid source account name belonging to the payor',
        example: 'MyAccountName',
      }),
    transmissionType: z
      .enum(['SAME_DAY_ACH', 'WIRE', 'ACH', 'LOCAL', 'SWIFT'])
      .exactOptional()
      .openapi({
        description: 'Optionally choose a specific transmission method for the payment',
        example: 'ACH',
      }),
  })
  .openapi({
    description: 'Instruction for creating a payment',
    example: {
      amount: 1299,
      currency: 'USD',
      paymentMemo: 'my memo',
      paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
      payorPaymentId: '123211321ABSD',
      remoteId: 'remoteId1234',
      remoteSystemId: 'remoteSystemId',
      sourceAccountName: 'MyAccountName',
      transmissionType: 'ACH',
    },
    required: ['amount', 'currency', 'remoteId', 'sourceAccountName'],
  })
  .openapi('PaymentInstructionV3')

const CreatePayoutRequestV3Schema = z
  .object({
    payments: z.array(PaymentInstructionV3Schema).min(1).max(2000),
    payoutFromPayorId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          '<p>The id of the payor whose source account(s) will be debited</p>\n<p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p>\n',
        example: 'c4261044-13df-4a6c-b1d4-fa8be2b46f5a',
      }),
    payoutMemo: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({
        description:
          '<p>Text applied to all payment memos unless specified explicitly on a payment</p>\n<p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>\n',
        example: 'Monthly Payment',
      }),
    payoutToPayorId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          '<p>The id of the payor whose payees will be paid</p>\n<p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p>\n',
        example: '9afc6b39-de12-466a-a9ca-07c7a23b312d',
      }),
  })
  .openapi({
    example: {
      payments: [
        {
          amount: 1299,
          currency: 'USD',
          paymentMemo: 'my memo',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          remoteId: 'remoteId1234',
          remoteSystemId: 'remoteSystemId',
          sourceAccountName: 'MyAccountName',
          transmissionType: 'ACH',
        },
        {
          amount: 1299,
          currency: 'USD',
          paymentMemo: 'my memo',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          remoteId: 'remoteId1234',
          remoteSystemId: 'remoteSystemId',
          sourceAccountName: 'MyAccountName',
          transmissionType: 'ACH',
        },
        {
          amount: 1299,
          currency: 'USD',
          paymentMemo: 'my memo',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          remoteId: 'remoteId1234',
          remoteSystemId: 'remoteSystemId',
          sourceAccountName: 'MyAccountName',
          transmissionType: 'ACH',
        },
        {
          amount: 1299,
          currency: 'USD',
          paymentMemo: 'my memo',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          remoteId: 'remoteId1234',
          remoteSystemId: 'remoteSystemId',
          sourceAccountName: 'MyAccountName',
          transmissionType: 'ACH',
        },
        {
          amount: 1299,
          currency: 'USD',
          paymentMemo: 'my memo',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          remoteId: 'remoteId1234',
          remoteSystemId: 'remoteSystemId',
          sourceAccountName: 'MyAccountName',
          transmissionType: 'ACH',
        },
      ],
      payoutFromPayorId: 'c4261044-13df-4a6c-b1d4-fa8be2b46f5a',
      payoutMemo: 'Monthly Payment',
      payoutToPayorId: '9afc6b39-de12-466a-a9ca-07c7a23b312d',
    },
    required: ['payments'],
  })
  .openapi('CreatePayoutRequestV3')

const CreateWebhookRequestSchema = z
  .object({
    authorizationHeader: z
      .string()
      .regex(/.*/)
      .min(4)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'the authorization header to include with the notification.' }),
    categories: z
      .array(CategorySchema)
      .exactOptional()
      .openapi({ description: 'the categories to enable.' }),
    enabled: z.boolean().openapi({ description: 'whether the webhook is enabled.' }),
    payorId: z.uuid(),
    webhookUrl: z.string().min(6).max(2000).openapi({ description: 'the webhook URL to use.' }),
  })
  .openapi({
    example: {
      authorizationHeader: 'authorizationHeader',
      categories: [null, null],
      enabled: true,
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      webhookUrl: 'webhookUrl',
    },
    required: ['enabled', 'payorId', 'webhookUrl'],
  })
  .openapi('CreateWebhookRequest')

const SourceEventSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'ISO8601 timestamp indicating when the source event was created',
        example: '2020-06-18T15:09:42Z',
      }),
    eventId: z
      .uuid()
      .openapi({
        description: 'UUID id of the source event in the Velo platform',
        example: '270ab907-27ec-4b83-8028-0ff432bbdec4',
      }),
    sourceType: z
      .string()
      .openapi({
        description:
          'OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly',
        example: 'payment_status_changed',
      }),
  })
  .openapi({
    description: 'Base type for each source event payload',
    required: ['createdAt', 'eventId', 'sourceType'],
  })
  .openapi('SourceEvent')

const DebitEventAllOfSchema = z
  .object({
    debitTransactionId: z
      .uuid()
      .openapi({
        description: 'ID of this debit transaction within the Velo platform',
        example: 'cbd9280f-8fde-4190-b014-979d88f3ec54',
      }),
  })
  .openapi({ required: ['debitTransactionId'] })
  .openapi('DebitEventAllOf')

const DebitEventSchema = SourceEventSchema.and(DebitEventAllOfSchema)
  .openapi({ description: 'Base type for all Debit Events' })
  .openapi('DebitEvent')

const DebitStatusChangedAllOfSchema = z
  .object({
    status: z
      .string()
      .openapi({
        description:
          'The new status of the debit. One of "PENDING" "PROCESSING" "REJECTED" "RELEASED"',
        example: 'PENDING',
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('DebitStatusChangedAllOf')

const DebitStatusChangedSchema = DebitEventSchema.and(DebitStatusChangedAllOfSchema)
  .openapi({ description: 'Base type for all debit status changed events' })
  .openapi('DebitStatusChanged')

const ErrorDataSchema = z
  .object({
    content: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Object containing typed error data specific to the API' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the error data content',
        example: 'The rejected CSV rows',
      }),
  })
  .openapi({ required: [] })
  .openapi('ErrorData')

const LocalisationDetailsSchema = z
  .object({
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'name to value map containing any named parameters that appear in the message template',
        example: { max: '10', min: '0' },
      }),
    template: z
      .string()
      .exactOptional()
      .openapi({
        description: 'the English language message template used to construct the error message',
        example: 'size must be between {min} and {max}',
      }),
  })
  .openapi({ required: [] })
  .openapi('LocalisationDetails')

const ErrorSchema = z
  .object({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique numeric code that can be used for switching client behavior or to drive translated or customised error messages',
        example: '20110003',
      }),
    errorData: ErrorDataSchema.exactOptional(),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'English language message indicating the nature of the error',
        example: 'size must be between 0 and 10',
      }),
    localisationDetails: LocalisationDetailsSchema.exactOptional(),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'the property or object that caused the error',
        example: 'firstName',
      }),
    locationType: z
      .enum(['requestBody', 'queryParam', 'requestParam', 'header', 'pathParam'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'the location type in the request that was the cause of the error\n',
        example: 'requestBody',
      }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'a camel-cased string that can be used by clients to localise client error messages (deprecated)',
        example: 'validationError',
      }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ErrorResponseSchema = z
  .object({
    correlationId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'a unique identifier to track a request or related sequence of requests',
        example: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
      }),
    errors: z
      .array(ErrorSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'one or more errors' }),
    httpStatusCode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity',
        example: 400,
      }),
  })
  .openapi({
    description: 'Error response returned by all error conditions in Velo Services',
    required: [],
  })
  .openapi('ErrorResponse')

const FailedPayeeV3Schema = z
  .object({
    address: CreatePayeeAddressV3Schema.exactOptional(),
    challenge: ChallengeV3Schema.exactOptional(),
    company: CompanyV3Schema.exactOptional(),
    email: z.email().exactOptional().openapi({ example: 'bob@example.com' }),
    individual: CreateIndividualV3Schema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    payeeId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9', readOnly: true }),
    paymentChannel: CreatePaymentChannelV3Schema.exactOptional(),
    payorRefs: z
      .array(PayeePayorRefV3Schema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    remoteId: z.string().exactOptional().openapi({ example: 'Remote ID' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of Payee. One of the following values: Individual, Company' }),
  })
  .openapi({
    example: {
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      challenge: { description: 'challenge description', value: 'challenge test' },
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
      email: 'bob@example.com',
      individual: {
        dateOfBirth: '1970-05-20T00:00:00.000+0000',
        name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
        nationalIdentification: 'SA211123K',
      },
      language: 'en-US',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
      paymentChannel: {
        accountName: 'My account',
        accountNumber: 'XXXXXX5678',
        countryCode: 'US',
        currency: 'USD',
        iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
        paymentChannelName: 'My Payment Channel',
        routingNumber: 'XXXXX6789',
      },
      payorRefs: [
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
      ],
      remoteId: 'Remote ID',
      type: 'type',
    },
    required: [],
  })
  .openapi('FailedPayeeV3')

const PayableIssueV4Schema = z
  .object({
    code: z.string().openapi({ example: '3' }),
    message: z.string().openapi({ example: 'payee-disabled' }),
  })
  .openapi({
    description: 'payable issues for the payee and payor combination',
    example: { code: '3', message: 'payee-disabled' },
    required: ['code', 'message'],
  })
  .openapi('PayableIssueV4')

const PayeePayorRefV4Schema = z
  .object({
    invitationStatus: z.string().exactOptional(),
    invitationStatusTimestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the invitation status is updated',
        example: '2019-01-20T09:00:00Z',
      }),
    payableIssues: z
      .array(PayableIssueV4Schema)
      .exactOptional()
      .openapi({
        description:
          'Indicates any conditions which prevent the payee from being payable for this payor',
      }),
    payableStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the payee is payable for this payor' }),
    paymentChannelId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3' }),
    payorId: z.uuid().exactOptional().openapi({ example: 'ba08877f-9d96-41e4-9c26-44a872d856ae' }),
    remoteId: z.string().exactOptional().openapi({ example: 'uniqueIdForRemoteEntity' }),
  })
  .openapi({
    example: {
      invitationStatus: 'invitationStatus',
      invitationStatusTimestamp: '2019-01-20T09:00:00Z',
      payableIssues: [
        { code: '3', message: 'payee-disabled' },
        { code: '3', message: 'payee-disabled' },
      ],
      payableStatus: true,
      paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
      payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
      remoteId: 'uniqueIdForRemoteEntity',
    },
    required: [],
  })
  .openapi('PayeePayorRefV4')

const FailedPayeeV4Schema = z
  .object({
    address: CreatePayeeAddressV4Schema.exactOptional(),
    challenge: ChallengeV4Schema.exactOptional(),
    company: CompanyV4Schema.exactOptional(),
    email: z.email().exactOptional().openapi({ example: 'bob@example.com' }),
    individual: CreateIndividualV4Schema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    payeeId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9', readOnly: true }),
    paymentChannel: CreatePaymentChannelV4Schema.exactOptional(),
    payorRefs: z
      .array(PayeePayorRefV4Schema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    remoteId: z.string().exactOptional().openapi({ example: 'Remote ID' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of Payee. One of the following values: Individual, Company' }),
  })
  .openapi({
    example: {
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      challenge: { description: 'challenge description', value: '11984567' },
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
      email: 'bob@example.com',
      individual: {
        dateOfBirth: '1970-05-20T00:00:00.000+0000',
        name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
        nationalIdentification: 'SA211123K',
      },
      language: 'en-US',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
      paymentChannel: {
        accountName: 'My account',
        accountNumber: 'XXXXXX5678',
        countryCode: 'US',
        currency: 'USD',
        iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
        paymentChannelName: 'My Payment Channel',
        routingNumber: 'XXXXX6789',
      },
      payorRefs: [
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
      ],
      remoteId: 'Remote ID',
      type: 'type',
    },
    required: [],
  })
  .openapi('FailedPayeeV4')

const FailedSubmissionV3Schema = z
  .object({
    failedSubmission: FailedPayeeV3Schema.exactOptional(),
    failureMessage: z.string().exactOptional().openapi({ example: 'failure reason' }),
  })
  .openapi({
    example: {
      failedSubmission: {
        address: {
          city: 'Key West',
          country: 'US',
          countyOrProvince: 'FL',
          line1: '500 Duval St',
          line2: 'line2',
          line3: 'line3',
          line4: 'line4',
          zipOrPostcode: '33945',
        },
        challenge: { description: 'challenge description', value: 'challenge test' },
        company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
        email: 'bob@example.com',
        individual: {
          dateOfBirth: '1970-05-20T00:00:00.000+0000',
          name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
          nationalIdentification: 'SA211123K',
        },
        language: 'en-US',
        payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        paymentChannel: {
          accountName: 'My account',
          accountNumber: 'XXXXXX5678',
          countryCode: 'US',
          currency: 'USD',
          iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
          paymentChannelName: 'My Payment Channel',
          routingNumber: 'XXXXX6789',
        },
        payorRefs: [
          {
            invitationStatus: 'invitationStatus',
            invitationStatusTimestamp: '2019-01-20T09:00:00Z',
            payableIssues: [
              { code: '3', message: 'payee-disabled' },
              { code: '3', message: 'payee-disabled' },
            ],
            payableStatus: true,
            paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
            payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
            remoteId: 'uniqueIdForRemoteEntity',
          },
          {
            invitationStatus: 'invitationStatus',
            invitationStatusTimestamp: '2019-01-20T09:00:00Z',
            payableIssues: [
              { code: '3', message: 'payee-disabled' },
              { code: '3', message: 'payee-disabled' },
            ],
            payableStatus: true,
            paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
            payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
            remoteId: 'uniqueIdForRemoteEntity',
          },
        ],
        remoteId: 'Remote ID',
        type: 'type',
      },
      failureMessage: 'failure reason',
    },
    required: [],
  })
  .openapi('FailedSubmissionV3')

const FailedSubmissionV4Schema = z
  .object({
    failedSubmission: FailedPayeeV4Schema.exactOptional(),
    failureMessage: z.string().exactOptional().openapi({ example: 'failure reason' }),
  })
  .openapi({
    example: {
      failedSubmission: {
        address: {
          city: 'Key West',
          country: 'US',
          countyOrProvince: 'FL',
          line1: '500 Duval St',
          line2: 'line2',
          line3: 'line3',
          line4: 'line4',
          zipOrPostcode: '33945',
        },
        challenge: { description: 'challenge description', value: '11984567' },
        company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
        email: 'bob@example.com',
        individual: {
          dateOfBirth: '1970-05-20T00:00:00.000+0000',
          name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
          nationalIdentification: 'SA211123K',
        },
        language: 'en-US',
        payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        paymentChannel: {
          accountName: 'My account',
          accountNumber: 'XXXXXX5678',
          countryCode: 'US',
          currency: 'USD',
          iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
          paymentChannelName: 'My Payment Channel',
          routingNumber: 'XXXXX6789',
        },
        payorRefs: [
          {
            invitationStatus: 'invitationStatus',
            invitationStatusTimestamp: '2019-01-20T09:00:00Z',
            payableIssues: [
              { code: '3', message: 'payee-disabled' },
              { code: '3', message: 'payee-disabled' },
            ],
            payableStatus: true,
            paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
            payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
            remoteId: 'uniqueIdForRemoteEntity',
          },
          {
            invitationStatus: 'invitationStatus',
            invitationStatusTimestamp: '2019-01-20T09:00:00Z',
            payableIssues: [
              { code: '3', message: 'payee-disabled' },
              { code: '3', message: 'payee-disabled' },
            ],
            payableStatus: true,
            paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
            payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
            remoteId: 'uniqueIdForRemoteEntity',
          },
        ],
        remoteId: 'Remote ID',
        type: 'type',
      },
      failureMessage: 'failure reason',
    },
    required: [],
  })
  .openapi('FailedSubmissionV4')

const FundingAccountResponseV2Schema = z
  .object({
    accountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'name on the bank account', example: 'Payor Corp' }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'bank account number', example: '7001001234' }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag for whether the funding account has been archived.  Only present in the response if true.',
      }),
    country: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({ description: 'ISO 3166-1 2 letter country code (upper case)', example: 'US' }),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    id: z.uuid().exactOptional().openapi({ description: 'Funding Account Id' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of funding account', example: 'My Funding Account' }),
    payorId: z.uuid().exactOptional(),
    routingNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'bank account routing number', example: 12345678 }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Funding account type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE',
        example: 'FBO',
      }),
  })
  .openapi({
    example: {
      accountName: 'Payor Corp',
      accountNumber: '7001001234',
      archived: true,
      country: 'US',
      currency: 'USD',
      id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      name: 'My Funding Account',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      routingNumber: 12345678,
      type: 'FBO',
    },
    required: [],
  })
  .openapi('FundingAccountResponseV2')

const FundingAccountTypeSchema = z
  .string()
  .openapi({
    description: 'Funding Account Type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE',
    example: 'FBO',
  })
  .openapi('FundingAccountType')

const FundingAccountTypeV2Schema = z
  .string()
  .openapi({
    description: 'Funding account type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE',
    example: 'FBO',
  })
  .openapi('FundingAccountTypeV2')

const FundingEventSchema = z
  .object({
    eventDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    eventId: z.uuid().exactOptional(),
    fundingEventType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Funding event type. One of the following values: PAYOR_FUNDING_DETECTED, PAYOR_FUNDING_REQUESTED, PAYOR_FUNDING_RETURN_RECEIVED, FUNDING_RETURN_DETECTED, PAYOR_FUNDING_REQUEST_SUBMITTED, PAYOR_FUNDING_ENTRY_DETAIL_RECEIVED, FUNDING_DEALLOCATED',
      }),
    principal: z.string().exactOptional(),
  })
  .openapi({
    example: {
      eventDateTime: '2000-01-23T04:56:07.000+00:00',
      eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      fundingEventType: 'fundingEventType',
      principal: 'principal',
    },
    required: [],
  })
  .openapi('FundingEvent')

const FundingAuditSchema = z
  .object({
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount funded', example: 120000 }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency of the funding', example: 'USD' }),
    dateTime: z.iso.datetime({ offset: true }).exactOptional(),
    events: z.array(FundingEventSchema).exactOptional(),
    fundingAccountName: z.string().exactOptional(),
    fundingType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Funding type. One of the following values: ACH, WIRE, EMBEDDED, BANK_TRANSFER',
      }),
    sourceAccountName: z.string().exactOptional(),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the funding. One of the following values: PENDING, FAILED, CREDIT, DEBIT',
      }),
    topupType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of top up. One of the following values: AUTOMATIC, MANUAL' }),
  })
  .openapi({
    example: {
      amount: 120000,
      currency: 'USD',
      dateTime: '2000-01-23T04:56:07.000+00:00',
      events: [
        {
          eventDateTime: '2000-01-23T04:56:07.000+00:00',
          eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          fundingEventType: 'fundingEventType',
          principal: 'principal',
        },
        {
          eventDateTime: '2000-01-23T04:56:07.000+00:00',
          eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          fundingEventType: 'fundingEventType',
          principal: 'principal',
        },
      ],
      fundingAccountName: 'fundingAccountName',
      fundingType: 'fundingType',
      sourceAccountName: 'sourceAccountName',
      status: 'status',
      topupType: 'topupType',
    },
    required: [],
  })
  .openapi('FundingAudit')

const FundingEventTypeSchema = z
  .string()
  .openapi({
    description:
      'Funding event type. One of the following values: PAYOR_FUNDING_DETECTED, PAYOR_FUNDING_REQUESTED, PAYOR_FUNDING_RETURN_RECEIVED, FUNDING_RETURN_DETECTED, PAYOR_FUNDING_REQUEST_SUBMITTED, PAYOR_FUNDING_ENTRY_DETAIL_RECEIVED, FUNDING_DEALLOCATED',
  })
  .openapi('FundingEventType')

const FundingPayorStatusAuditResponseSchema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    fundingId: z.uuid().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({
    example: {
      amount: 2,
      currency: 'USD',
      fundingId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      status: 'status',
    },
    required: [],
  })
  .openapi('FundingPayorStatusAuditResponse')

const FundingRequestV2Schema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9999999999,
        description: 'Amount to fund, decimal implied',
      }),
  })
  .openapi({ example: { amount: 800828191 }, required: ['amount'] })
  .openapi('FundingRequestV2')

const FundingRequestV3Schema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9999999999,
        description: 'Amount to fund in minor units',
      }),
    fundingAccountId: z.uuid().openapi({ description: 'The funding account id' }),
  })
  .openapi({
    example: { amount: 800828191, fundingAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91' },
    required: ['amount', 'fundingAccountId'],
  })
  .openapi('FundingRequestV3')

const FundingResponseSchema = z
  .object({
    allocationDate: z.iso.datetime({ offset: true }),
    allocationType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL',
      }),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    detectedFundingRef: z.string().exactOptional(),
    fundingAccountType: z
      .string()
      .openapi({
        description:
          'Funding Account Type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE',
        example: 'FBO',
      }),
    fundingId: z.uuid(),
    hiddenDate: z.iso.datetime({ offset: true }).exactOptional(),
    payorId: z.uuid(),
    physicalAccountName: z.string().exactOptional(),
    reason: z.string().exactOptional(),
    sourceAccountId: z.uuid().exactOptional(),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER',
        example: 'ALLOCATED',
      }),
    text: z.string().exactOptional(),
  })
  .openapi({
    example: {
      allocationDate: '2000-01-23T04:56:07.000+00:00',
      allocationType: 'allocationType',
      amount: 0,
      currency: 'USD',
      detectedFundingRef: 'detectedFundingRef',
      fundingAccountType: 'FBO',
      fundingId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      hiddenDate: '2000-01-23T04:56:07.000+00:00',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      physicalAccountName: 'physicalAccountName',
      reason: 'reason',
      sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      status: 'ALLOCATED',
      text: 'text',
    },
    required: [
      'allocationDate',
      'amount',
      'currency',
      'fundingAccountType',
      'fundingId',
      'payorId',
      'status',
    ],
  })
  .openapi('FundingResponse')

const FundingStatusSchema = z
  .string()
  .openapi({
    description:
      'Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER',
    example: 'ALLOCATED',
  })
  .openapi('FundingStatus')

const FxSummarySchema = z
  .object({
    creationDateTime: z.iso.datetime({ offset: true }),
    fundingStatus: z
      .string()
      .openapi({
        description:
          'Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED',
      }),
    invertedRate: z.float64().openapi({ example: 123.23 }),
    paymentCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO-4217 3 character currency code', example: 'EUR' }),
    quoteId: z.uuid(),
    rate: z.float64().openapi({ example: 123.23 }),
    sourceCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO-4217 3 character currency code', example: 'EUR' }),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED',
      }),
    totalCost: z.int(),
    totalPaymentAmount: z.int().openapi({ example: 34235 }),
  })
  .openapi({
    example: {
      creationDateTime: '2000-01-23T04:56:07.000+00:00',
      fundingStatus: 'fundingStatus',
      invertedRate: 123.23,
      paymentCurrency: 'EUR',
      quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      rate: 123.23,
      sourceCurrency: 'EUR',
      status: 'status',
      totalCost: 5,
      totalPaymentAmount: 34235,
    },
    required: [
      'creationDateTime',
      'fundingStatus',
      'invertedRate',
      'quoteId',
      'rate',
      'status',
      'totalCost',
      'totalPaymentAmount',
    ],
  })
  .openapi('FxSummary')

const FxSummaryV3Schema = z
  .object({
    creationDateTime: z.iso.datetime({ offset: true }),
    fundingStatus: z
      .string()
      .openapi({
        description:
          'Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED',
      }),
    invertedRate: z.float32().openapi({ example: 1.12 }),
    paymentCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO 3 character currency code' }),
    quoteId: z.uuid(),
    rate: z.float32().openapi({ example: 1.12 }),
    sourceCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO 3 character currency code' }),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED',
      }),
    totalCost: z.int().openapi({ example: 1234 }),
    totalPaymentAmount: z.int().openapi({ example: 1234 }),
  })
  .openapi({
    example: {
      creationDateTime: '2000-01-23T04:56:07.000+00:00',
      fundingStatus: 'fundingStatus',
      invertedRate: 1.12,
      paymentCurrency: 'paymentCurrency',
      quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      rate: 1.12,
      sourceCurrency: 'sourceCurrency',
      status: 'status',
      totalCost: 1234,
      totalPaymentAmount: 1234,
    },
    required: [
      'creationDateTime',
      'fundingStatus',
      'invertedRate',
      'quoteId',
      'rate',
      'status',
      'totalCost',
      'totalPaymentAmount',
    ],
  })
  .openapi('FxSummaryV3')

const GetFundingsResponseLinksSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10',
      }),
    rel: z.string().exactOptional().openapi({ example: 'first' }),
  })
  .openapi({
    example: {
      href: 'https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10',
      rel: 'first',
    },
    required: [],
  })
  .openapi('GetFundingsResponseLinks')

const PagedUserResponsePageSchema = z
  .object({
    numberOfElements: z.int().exactOptional().openapi({ example: 12 }),
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 25 }),
    totalElements: z.int().exactOptional().openapi({ example: 33 }),
    totalPages: z.int().exactOptional().openapi({ example: 2 }),
  })
  .openapi({
    example: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 33, totalPages: 2 },
    required: [],
  })
  .openapi('PagedUserResponsePage')

const GetFundingsResponseSchema = z
  .object({
    content: z.array(FundingAuditSchema).exactOptional(),
    links: z.array(GetFundingsResponseLinksSchema).exactOptional(),
    page: PagedUserResponsePageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Users Response Object',
    example: {
      content: [
        {
          amount: 120000,
          currency: 'USD',
          dateTime: '2000-01-23T04:56:07.000+00:00',
          events: [
            {
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              fundingEventType: 'fundingEventType',
              principal: 'principal',
            },
            {
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              fundingEventType: 'fundingEventType',
              principal: 'principal',
            },
          ],
          fundingAccountName: 'fundingAccountName',
          fundingType: 'fundingType',
          sourceAccountName: 'sourceAccountName',
          status: 'status',
          topupType: 'topupType',
        },
        {
          amount: 120000,
          currency: 'USD',
          dateTime: '2000-01-23T04:56:07.000+00:00',
          events: [
            {
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              fundingEventType: 'fundingEventType',
              principal: 'principal',
            },
            {
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              fundingEventType: 'fundingEventType',
              principal: 'principal',
            },
          ],
          fundingAccountName: 'fundingAccountName',
          fundingType: 'fundingType',
          sourceAccountName: 'sourceAccountName',
          status: 'status',
          topupType: 'topupType',
        },
      ],
      links: [
        {
          href: 'https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10',
          rel: 'first',
        },
        {
          href: 'https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10',
          rel: 'first',
        },
      ],
      page: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 33, totalPages: 2 },
    },
    required: [],
  })
  .openapi('GetFundingsResponse')

const GetPayeeListResponseCompanyV3Schema = z
  .object({
    name: z.string().min(1).max(40).exactOptional().openapi({ example: 'ABC Group Plc' }),
    operatingName: z
      .string()
      .min(1)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ example: 'ABC Co' }),
  })
  .openapi({ example: { name: 'ABC Group Plc', operatingName: 'ABC Co' }, required: [] })
  .openapi('GetPayeeListResponseCompanyV3')

const GetPayeeListResponseCompanyV4Schema = z
  .object({
    name: z.string().min(1).max(40).exactOptional().openapi({ example: 'ABC Group Plc' }),
    operatingName: z
      .string()
      .min(1)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ example: 'ABC Co' }),
  })
  .openapi({ example: { name: 'ABC Group Plc', operatingName: 'ABC Co' }, required: [] })
  .openapi('GetPayeeListResponseCompanyV4')

const NameV3Schema = z
  .object({
    firstName: z.string().min(1).max(40).exactOptional().openapi({ example: 'Bob' }),
    lastName: z.string().min(1).max(40).exactOptional().openapi({ example: 'Smith' }),
    otherNames: z.string().min(1).max(40).exactOptional().openapi({ example: 'H' }),
    title: z.string().min(1).max(10).exactOptional().openapi({ example: 'Mr' }),
  })
  .openapi({
    example: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
    required: [],
  })
  .openapi('NameV3')

const GetPayeeListResponseIndividualV3Schema = z
  .object({ name: NameV3Schema.exactOptional() })
  .openapi({
    example: { name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' } },
    required: [],
  })
  .openapi('GetPayeeListResponseIndividualV3')

const NameV4Schema = z
  .object({
    firstName: z.string().min(1).max(40).exactOptional().openapi({ example: 'Bob' }),
    lastName: z.string().min(1).max(40).exactOptional().openapi({ example: 'Smith' }),
    otherNames: z.string().min(1).max(40).exactOptional().openapi({ example: 'H' }),
    title: z.string().min(1).max(10).exactOptional().openapi({ example: 'Mr' }),
  })
  .openapi({
    example: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
    required: [],
  })
  .openapi('NameV4')

const GetPayeeListResponseIndividualV4Schema = z
  .object({ name: NameV4Schema.exactOptional() })
  .openapi({
    example: { name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' } },
    required: [],
  })
  .openapi('GetPayeeListResponseIndividualV4')

const GetPayeeListResponseV3Schema = z
  .object({
    company: GetPayeeListResponseCompanyV3Schema.exactOptional(),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    disabled: z.boolean().exactOptional(),
    disabledComment: z.string().exactOptional().openapi({ example: 'reason for disabled' }),
    disabledUpdatedTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    displayName: z.string().exactOptional().openapi({ example: 'ABC' }),
    email: z.email().nullable().exactOptional().openapi({ example: 'bob@example.com' }),
    individual: GetPayeeListResponseIndividualV3Schema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    onboardedStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED',
      }),
    payeeId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9', readOnly: true }),
    payeeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of Payee. One of the following values: Individual, Company' }),
    payorRefs: z
      .array(PayeePayorRefV3Schema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    watchlistOverrideComment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'Example reason for the watchlist status being overridden' }),
    watchlistStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED',
      }),
    watchlistStatusUpdatedTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00', readOnly: true }),
  })
  .openapi({
    example: {
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co' },
      country: 'US',
      created: '2019-01-20T09:00:00Z',
      disabled: true,
      disabledComment: 'reason for disabled',
      disabledUpdatedTimestamp: '2019-01-20T09:00:00Z',
      displayName: 'ABC',
      email: 'bob@example.com',
      individual: { name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' } },
      language: 'en-US',
      onboardedStatus: 'onboardedStatus',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
      payeeType: 'payeeType',
      payorRefs: [
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
      ],
      watchlistOverrideComment: 'Example reason for the watchlist status being overridden',
      watchlistStatus: 'watchlistStatus',
      watchlistStatusUpdatedTimestamp: '2019-01-20T09:00:00+00:00',
    },
    required: [],
  })
  .openapi('GetPayeeListResponseV3')

const GetPayeeListResponseV4Schema = z
  .object({
    company: GetPayeeListResponseCompanyV4Schema.exactOptional(),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    disabled: z.boolean().exactOptional(),
    disabledComment: z.string().exactOptional().openapi({ example: 'reason for disabled' }),
    disabledUpdatedTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    displayName: z.string().exactOptional().openapi({ example: 'ABC' }),
    email: z.email().nullable().exactOptional().openapi({ example: 'bob@example.com' }),
    individual: GetPayeeListResponseIndividualV4Schema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    onboardedStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED',
      }),
    payeeId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9', readOnly: true }),
    payeeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of Payee. One of the following values: Individual, Company' }),
    payorRefs: z
      .array(PayeePayorRefV4Schema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    watchlistOverrideComment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'Example reason for the watchlist status being overridden' }),
    watchlistStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED',
      }),
    watchlistStatusUpdatedTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00', readOnly: true }),
  })
  .openapi({
    example: {
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co' },
      country: 'US',
      created: '2019-01-20T09:00:00Z',
      disabled: true,
      disabledComment: 'reason for disabled',
      disabledUpdatedTimestamp: '2019-01-20T09:00:00Z',
      displayName: 'ABC',
      email: 'bob@example.com',
      individual: { name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' } },
      language: 'en-US',
      onboardedStatus: 'onboardedStatus',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
      payeeType: 'payeeType',
      payorRefs: [
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
      ],
      watchlistOverrideComment: 'Example reason for the watchlist status being overridden',
      watchlistStatus: 'watchlistStatus',
      watchlistStatusUpdatedTimestamp: '2019-01-20T09:00:00+00:00',
    },
    required: [],
  })
  .openapi('GetPayeeListResponseV4')

const PaymentEventResponseV3Schema = z
  .object({
    accountName: z.string().exactOptional().openapi({ example: 'My account' }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account number attached to the event.', example: '123123123' }),
    eventDateTime: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date/time at which the event occurred.' }),
    eventId: z.uuid().openapi({ description: 'The id of the event.' }),
    eventType: z
      .string()
      .openapi({
        description:
          'The type of the event. One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN',
      }),
    iban: z.string().exactOptional().openapi({ example: 'DE89 3704 0044 0532 0130 00' }),
    paymentAmount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The destination amount exposed by the event.',
        example: 1299,
      }),
    paymentCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO 3 character currency code' }),
    principal: z.string().exactOptional().openapi({ example: 'Prinicple example' }),
    routingNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The routing number attached to the event.', example: '123123123' }),
    sourceAmount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The source amount exposed by the event.',
        example: 1299,
      }),
    sourceCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO 3 character currency code' }),
  })
  .openapi({
    example: {
      accountName: 'My account',
      accountNumber: '123123123',
      eventDateTime: '2000-01-23T04:56:07.000+00:00',
      eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      eventType: 'eventType',
      iban: 'DE89 3704 0044 0532 0130 00',
      paymentAmount: 1299,
      paymentCurrency: 'paymentCurrency',
      principal: 'Prinicple example',
      routingNumber: '123123123',
      sourceAmount: 1299,
      sourceCurrency: 'sourceCurrency',
    },
    required: ['eventDateTime', 'eventId', 'eventType'],
  })
  .openapi('PaymentEventResponseV3')

const PaymentResponseV3Schema = z
  .object({
    accountName: z.string().exactOptional().openapi({ example: 'My Account Name' }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The account number for the account which will receive the payment.',
        example: '123123232323',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country code of the payment channel.', example: 'US' }),
    events: z.array(PaymentEventResponseV3Schema),
    filenameReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ACH file payment was submitted in, if applicable',
        example: 'file ref',
      }),
    fundingStatus: z
      .string()
      .openapi({
        description:
          'The funding status of the payment. One of the following values: [FUNDED, INSTRUCTED, UNFUNDED',
      }),
    iban: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The iban for the payment.',
        example: 'DE89 3704 0044 0532 0130 00',
      }),
    individualIdentificationNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Individual Identification Number assigned to the payment in the ACH file, if applicable',
        example: '1231231adf',
      }),
    invertedRate: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed',
      }),
    payeeId: z.uuid().openapi({ description: 'The id of the paymeee' }),
    paymentAmount: z.int().openapi({ description: 'The amount which the payee will receive' }),
    paymentChannelId: z.string().exactOptional().openapi({ example: '123asdf' }),
    paymentChannelName: z.string().exactOptional().openapi({ example: 'My Payment Channel' }),
    paymentCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO 3 character currency code' }),
    paymentId: z.uuid().openapi({ description: 'The id of the payment' }),
    paymentMemo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment memo set by the payor', example: 'Payment memo' }),
    paymentScheme: z.string().exactOptional(),
    payorId: z.uuid().openapi({ description: 'The id of the payor' }),
    payorName: z.string().exactOptional().openapi({ description: 'The name of the payor' }),
    payorPaymentId: z.string().exactOptional().openapi({ example: '123123asdf' }),
    quoteId: z.uuid().openapi({ description: 'The quote Id used for the FX' }),
    railsBatchId: z.string().exactOptional(),
    railsId: z
      .string()
      .default('RAILS ID UNAVAILABLE')
      .openapi({
        description: 'The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.',
        example: 'asdf123',
      }),
    railsPaymentId: z.string().exactOptional(),
    rate: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed',
      }),
    rejectionReason: z.string().exactOptional(),
    remoteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The remote id by which the payor refers to the payee. Only populated once payment is confirmed',
        example: 'aasdf123',
      }),
    returnCost: z
      .int()
      .exactOptional()
      .openapi({ description: 'The return cost if a returned payment.', example: 1232 }),
    returnReason: z.string().exactOptional().openapi({ example: 'Some Reason Value' }),
    routingNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The routing number for the payment.', example: '123123123123' }),
    sourceAccountId: z
      .uuid()
      .openapi({ description: 'The id of the source account from which the payment was taken' }),
    sourceAccountName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the source account from which the payment was taken',
        example: 'My Account',
      }),
    sourceAmount: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The source amount for the payment (amount debited to make the payment)',
        example: 12345,
      }),
    sourceCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO 3 character currency code' }),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN',
      }),
    submittedDateTime: z.iso.datetime({ offset: true }),
    traceNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Trace Number assigned to the payment in the ACH file, if applicable',
        example: 'abodu123',
      }),
  })
  .openapi({
    example: {
      accountName: 'My Account Name',
      accountNumber: '123123232323',
      countryCode: 'US',
      events: [
        {
          accountName: 'My account',
          accountNumber: '123123123',
          eventDateTime: '2000-01-23T04:56:07.000+00:00',
          eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          eventType: 'eventType',
          iban: 'DE89 3704 0044 0532 0130 00',
          paymentAmount: 1299,
          paymentCurrency: 'paymentCurrency',
          principal: 'Prinicple example',
          routingNumber: '123123123',
          sourceAmount: 1299,
          sourceCurrency: 'sourceCurrency',
        },
        {
          accountName: 'My account',
          accountNumber: '123123123',
          eventDateTime: '2000-01-23T04:56:07.000+00:00',
          eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          eventType: 'eventType',
          iban: 'DE89 3704 0044 0532 0130 00',
          paymentAmount: 1299,
          paymentCurrency: 'paymentCurrency',
          principal: 'Prinicple example',
          routingNumber: '123123123',
          sourceAmount: 1299,
          sourceCurrency: 'sourceCurrency',
        },
      ],
      filenameReference: 'file ref',
      fundingStatus: 'fundingStatus',
      iban: 'DE89 3704 0044 0532 0130 00',
      individualIdentificationNumber: '1231231adf',
      invertedRate: 1.4658129,
      payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      paymentAmount: 0,
      paymentChannelId: '123asdf',
      paymentChannelName: 'My Payment Channel',
      paymentCurrency: 'paymentCurrency',
      paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      paymentMemo: 'Payment memo',
      paymentScheme: 'paymentScheme',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorName: 'payorName',
      payorPaymentId: '123123asdf',
      quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      railsBatchId: 'railsBatchId',
      railsId: 'asdf123',
      railsPaymentId: 'railsPaymentId',
      rate: 6.0274563,
      rejectionReason: 'rejectionReason',
      remoteId: 'aasdf123',
      returnCost: 1232,
      returnReason: 'Some Reason Value',
      routingNumber: '123123123123',
      sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      sourceAccountName: 'My Account',
      sourceAmount: 12345,
      sourceCurrency: 'sourceCurrency',
      status: 'status',
      submittedDateTime: '2000-01-23T04:56:07.000+00:00',
      traceNumber: 'abodu123',
    },
    required: [
      'events',
      'fundingStatus',
      'payeeId',
      'paymentAmount',
      'paymentId',
      'payorId',
      'quoteId',
      'railsId',
      'sourceAccountId',
      'status',
      'submittedDateTime',
    ],
  })
  .openapi('PaymentResponseV3')

const GetPayoutsResponseV3LinksSchema = z
  .object({
    href: z.string().exactOptional().openapi({ example: 'https://example.com' }),
    rel: z.string().exactOptional().openapi({ example: 'first' }),
  })
  .openapi({ example: { href: 'https://example.com', rel: 'first' }, required: [] })
  .openapi('GetPayoutsResponseV3Links')

const GetPaymentsForPayoutResponseV3PageSchema = z
  .object({
    numberOfElements: z.int().exactOptional().openapi({ example: 12 }),
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 25 }),
    totalElements: z.int().exactOptional().openapi({ example: 12 }),
    totalPages: z.int().exactOptional().openapi({ example: 10 }),
  })
  .openapi({
    example: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 12, totalPages: 10 },
    required: [],
  })
  .openapi('GetPaymentsForPayoutResponseV3Page')

const GetPaymentsForPayoutResponseV3SummarySchema = z
  .object({
    confirmedPayments: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The count of payments within the payout which have been confirmed.',
        example: 123,
      }),
    failedPayments: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The count of payments within the payout which have failed or been returned.',
        example: 0,
      }),
    incompletePayments: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The count of payments within the payout which are incomplete.',
        example: 123,
      }),
    instructedDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date/time at which the payout was instructed.' }),
    payoutMemo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The memo attached to the payout.', example: 'Payment Memo value' }),
    payoutStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN',
      }),
    releasedPayments: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The count of payments within the payout which have been released.',
        example: 123,
      }),
    submittedDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date/time at which the payout was submitted.' }),
    totalPayments: z
      .int()
      .exactOptional()
      .openapi({ description: 'The count of payments within the payout.', example: 123 }),
    withdrawnDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date/time at which the payout was withdrawn.' }),
  })
  .openapi({
    example: {
      confirmedPayments: 123,
      failedPayments: 0,
      incompletePayments: 123,
      instructedDateTime: '2000-01-23T04:56:07.000+00:00',
      payoutMemo: 'Payment Memo value',
      payoutStatus: 'payoutStatus',
      releasedPayments: 123,
      submittedDateTime: '2000-01-23T04:56:07.000+00:00',
      totalPayments: 123,
      withdrawnDateTime: '2000-01-23T04:56:07.000+00:00',
    },
    required: [],
  })
  .openapi('GetPaymentsForPayoutResponseV3Summary')

const GetPaymentsForPayoutResponseV3Schema = z
  .object({
    content: z.array(PaymentResponseV3Schema).exactOptional(),
    links: z.array(GetPayoutsResponseV3LinksSchema).exactOptional(),
    page: GetPaymentsForPayoutResponseV3PageSchema.exactOptional(),
    summary: GetPaymentsForPayoutResponseV3SummarySchema.exactOptional(),
  })
  .openapi({
    description: 'List Payments for payout',
    example: {
      content: [
        {
          accountName: 'My Account Name',
          accountNumber: '123123232323',
          countryCode: 'US',
          events: [
            {
              accountName: 'My account',
              accountNumber: '123123123',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'DE89 3704 0044 0532 0130 00',
              paymentAmount: 1299,
              paymentCurrency: 'paymentCurrency',
              principal: 'Prinicple example',
              routingNumber: '123123123',
              sourceAmount: 1299,
              sourceCurrency: 'sourceCurrency',
            },
            {
              accountName: 'My account',
              accountNumber: '123123123',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'DE89 3704 0044 0532 0130 00',
              paymentAmount: 1299,
              paymentCurrency: 'paymentCurrency',
              principal: 'Prinicple example',
              routingNumber: '123123123',
              sourceAmount: 1299,
              sourceCurrency: 'sourceCurrency',
            },
          ],
          filenameReference: 'file ref',
          fundingStatus: 'fundingStatus',
          iban: 'DE89 3704 0044 0532 0130 00',
          individualIdentificationNumber: '1231231adf',
          invertedRate: 1.4658129,
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentAmount: 0,
          paymentChannelId: '123asdf',
          paymentChannelName: 'My Payment Channel',
          paymentCurrency: 'paymentCurrency',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentMemo: 'Payment memo',
          paymentScheme: 'paymentScheme',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payorPaymentId: '123123asdf',
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          railsBatchId: 'railsBatchId',
          railsId: 'asdf123',
          railsPaymentId: 'railsPaymentId',
          rate: 6.0274563,
          rejectionReason: 'rejectionReason',
          remoteId: 'aasdf123',
          returnCost: 1232,
          returnReason: 'Some Reason Value',
          routingNumber: '123123123123',
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAccountName: 'My Account',
          sourceAmount: 12345,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
          submittedDateTime: '2000-01-23T04:56:07.000+00:00',
          traceNumber: 'abodu123',
        },
        {
          accountName: 'My Account Name',
          accountNumber: '123123232323',
          countryCode: 'US',
          events: [
            {
              accountName: 'My account',
              accountNumber: '123123123',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'DE89 3704 0044 0532 0130 00',
              paymentAmount: 1299,
              paymentCurrency: 'paymentCurrency',
              principal: 'Prinicple example',
              routingNumber: '123123123',
              sourceAmount: 1299,
              sourceCurrency: 'sourceCurrency',
            },
            {
              accountName: 'My account',
              accountNumber: '123123123',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'DE89 3704 0044 0532 0130 00',
              paymentAmount: 1299,
              paymentCurrency: 'paymentCurrency',
              principal: 'Prinicple example',
              routingNumber: '123123123',
              sourceAmount: 1299,
              sourceCurrency: 'sourceCurrency',
            },
          ],
          filenameReference: 'file ref',
          fundingStatus: 'fundingStatus',
          iban: 'DE89 3704 0044 0532 0130 00',
          individualIdentificationNumber: '1231231adf',
          invertedRate: 1.4658129,
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentAmount: 0,
          paymentChannelId: '123asdf',
          paymentChannelName: 'My Payment Channel',
          paymentCurrency: 'paymentCurrency',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentMemo: 'Payment memo',
          paymentScheme: 'paymentScheme',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payorPaymentId: '123123asdf',
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          railsBatchId: 'railsBatchId',
          railsId: 'asdf123',
          railsPaymentId: 'railsPaymentId',
          rate: 6.0274563,
          rejectionReason: 'rejectionReason',
          remoteId: 'aasdf123',
          returnCost: 1232,
          returnReason: 'Some Reason Value',
          routingNumber: '123123123123',
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAccountName: 'My Account',
          sourceAmount: 12345,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
          submittedDateTime: '2000-01-23T04:56:07.000+00:00',
          traceNumber: 'abodu123',
        },
      ],
      links: [
        { href: 'https://example.com', rel: 'first' },
        { href: 'https://example.com', rel: 'first' },
      ],
      page: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 12, totalPages: 10 },
      summary: {
        confirmedPayments: 123,
        failedPayments: 0,
        incompletePayments: 123,
        instructedDateTime: '2000-01-23T04:56:07.000+00:00',
        payoutMemo: 'Payment Memo value',
        payoutStatus: 'payoutStatus',
        releasedPayments: 123,
        submittedDateTime: '2000-01-23T04:56:07.000+00:00',
        totalPayments: 123,
        withdrawnDateTime: '2000-01-23T04:56:07.000+00:00',
      },
    },
    required: [],
  })
  .openapi('GetPaymentsForPayoutResponseV3')

const PaymentEventResponseSchema = z
  .object({
    accountName: z.string().exactOptional(),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account number attached to the event.' }),
    eventDateTime: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date/time at which the event occurred.' }),
    eventId: z.uuid().openapi({ description: 'The id of the event.' }),
    eventType: z
      .string()
      .openapi({
        description:
          'One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, PAYMENT_TRACKING_DETAILS_UPDATED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN, ORCHESTRATED_PAYMENT_BATCH_REQUESTED, ORCHESTRATED_PAYMENT_BATCH_CONFIRMED, ORCHESTRATED_PAYMENT_REQUESTED',
      }),
    iban: z.string().exactOptional(),
    paymentAmount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The destination amount exposed by the event.',
        example: 1299,
      }),
    paymentCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO-4217 3 character currency code', example: 'EUR' }),
    principal: z.string().exactOptional(),
    routingNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The routing number attached to the event.' }),
    scheduledAt: z.iso.datetime({ offset: true }).exactOptional(),
    scheduledBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application.',
        example: 'Aphra Behn',
      }),
    scheduledFor: z.iso.datetime({ offset: true }).exactOptional(),
    sourceAmount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The source amount exposed by the event.',
        example: 1299,
      }),
    sourceCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO-4217 3 character currency code', example: 'EUR' }),
  })
  .openapi({
    example: {
      accountName: 'accountName',
      accountNumber: 'accountNumber',
      eventDateTime: '2000-01-23T04:56:07.000+00:00',
      eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      eventType: 'eventType',
      iban: 'iban',
      paymentAmount: 1299,
      paymentCurrency: 'EUR',
      principal: 'principal',
      routingNumber: 'routingNumber',
      scheduledAt: '2000-01-23T04:56:07.000+00:00',
      scheduledBy: 'Aphra Behn',
      scheduledFor: '2000-01-23T04:56:07.000+00:00',
      sourceAmount: 1299,
      sourceCurrency: 'EUR',
    },
    required: ['eventDateTime', 'eventId', 'eventType'],
  })
  .openapi('PaymentEventResponse')

const PayoutPayorSchema = z
  .object({
    dbaName: z.string().openapi({ description: 'The alternate name of the payor.' }),
    payorId: z.uuid().openapi({ description: 'The id of the payor.' }),
    payorName: z.string().openapi({ description: 'The name of the payor.' }),
    principal: z
      .string()
      .openapi({ description: 'Email address if principal is a user or ID if application.' }),
    principalId: z.uuid().openapi({ description: 'The id of the principal.' }),
  })
  .openapi({
    description: 'Details of payor and principal participating in a payout.',
    example: {
      dbaName: 'dbaName',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorName: 'payorName',
      principal: 'principal',
      principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
    },
    required: ['dbaName', 'payorId', 'payorName', 'principal', 'principalId'],
  })
  .openapi('PayoutPayor')

const PaymentResponseV4PayoutSchema = z
  .object({
    payoutFrom: PayoutPayorSchema.exactOptional(),
    payoutId: z.uuid().exactOptional(),
    payoutTo: PayoutPayorSchema.exactOptional(),
  })
  .openapi({
    example: {
      payoutFrom: {
        dbaName: 'dbaName',
        payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        payorName: 'payorName',
        principal: 'principal',
        principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      },
      payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payoutTo: {
        dbaName: 'dbaName',
        payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        payorName: 'payorName',
        principal: 'principal',
        principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      },
    },
    required: [],
  })
  .openapi('PaymentResponseV4Payout')

const PostInstructFxInfoSchema = z
  .object({
    fxMode: z
      .string()
      .openapi({
        description: 'The mode by which the FX rate is to be determined (MANUAL or AUTO)',
        example: 'MANUAL',
      }),
    fxStatus: z
      .string()
      .openapi({
        description:
          'The state to which the Post-Instruct FX process has reached (INITIATED or COMPLETED)',
        example: 'INITIATED',
      }),
    fxStatusUpdatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date-time at which the most recent fxStatus was determined.' }),
    fxTransactionReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference assigned to the FX funding that will fulfil this payment.',
        example: 'AB123GHI',
      }),
  })
  .openapi({
    description:
      'FX details relating to a payout that was executed or is still waiting to be executed',
    example: {
      fxMode: 'MANUAL',
      fxStatus: 'INITIATED',
      fxStatusUpdatedAt: '2000-01-23T04:56:07.000+00:00',
      fxTransactionReference: 'AB123GHI',
    },
    required: ['fxMode', 'fxStatus', 'fxStatusUpdatedAt'],
  })
  .openapi('PostInstructFxInfo')

const PayoutScheduleSchema = z
  .object({
    notificationsEnabled: z.boolean(),
    scheduleStatus: z
      .string()
      .openapi({
        description:
          'Current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED',
        example: 'SCHEDULED',
      }),
    scheduledAt: z.iso.datetime({ offset: true }),
    scheduledBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application.',
        example: 'Aphra Behn',
      }),
    scheduledByPrincipalId: z
      .string()
      .openapi({
        description: 'ID of the user or application that scheduled the payout',
        example: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
      }),
    scheduledFor: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description:
      'Details relating to a payout that was executed via a schedule or is still waiting to be executed',
    example: {
      notificationsEnabled: true,
      scheduleStatus: 'SCHEDULED',
      scheduledAt: '2000-01-23T04:56:07.000+00:00',
      scheduledBy: 'Aphra Behn',
      scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
      scheduledFor: '2000-01-23T04:56:07.000+00:00',
    },
    required: [
      'notificationsEnabled',
      'scheduleStatus',
      'scheduledAt',
      'scheduledByPrincipalId',
      'scheduledFor',
    ],
  })
  .openapi('PayoutSchedule')

const PaymentResponseV4Schema = z
  .object({
    accountName: z.string().exactOptional().openapi({ example: 'My Account Name' }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The account number for the account which will receive the payment.',
        example: '123123232323',
      }),
    autoWithdrawnReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Populated with rejection reason code if the payment was withdrawn automatically at instruct time',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country code of the payment channel.', example: 'US' }),
    events: z.array(PaymentEventResponseSchema),
    filenameReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ACH file payment was submitted in, if applicable',
        example: 'file ref',
      }),
    fundingStatus: z
      .string()
      .openapi({
        description:
          'Current funding status of the payment. One of the following values: FUNDED, INSTRUCTED, UNFUNDED',
      }),
    iban: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The iban for the payment.',
        example: 'DE89 3704 0044 0532 0130 00',
      }),
    individualIdentificationNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Individual Identification Number assigned to the payment in the ACH file, if applicable',
        example: '1231231adf',
      }),
    invertedRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed',
      }),
    isPaymentCcyBaseCcy: z.boolean().exactOptional(),
    payeeAddressCountryCode: z
      .string()
      .exactOptional()
      .openapi({ description: "The country code of the payee's address.", example: 'US' }),
    payeeId: z.uuid().openapi({ description: 'The id of the paymeee' }),
    paymentAmount: z.int().openapi({ description: 'The amount which the payee will receive' }),
    paymentChannelId: z.string().exactOptional().openapi({ example: '123asdf' }),
    paymentChannelName: z.string().exactOptional().openapi({ example: 'My Payment Channel' }),
    paymentCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO-4217 3 character currency code', example: 'EUR' }),
    paymentId: z.uuid().openapi({ description: 'The id of the payment' }),
    paymentMemo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment memo set by the payor', example: 'Payment memo' }),
    paymentMetadata: z
      .string()
      .exactOptional()
      .openapi({ description: 'Metadata for the payment', example: 'sample metadata' }),
    paymentScheme: z.string().exactOptional(),
    paymentTrackingReference: z.string().exactOptional(),
    payorId: z.uuid().openapi({ description: 'The id of the payor' }),
    payorName: z.string().exactOptional().openapi({ description: 'The name of the payor' }),
    payorPaymentId: z.string().exactOptional().openapi({ example: '123123asdf' }),
    payout: PaymentResponseV4PayoutSchema.exactOptional(),
    postInstructFxInfo: PostInstructFxInfoSchema.exactOptional(),
    quoteId: z.uuid().openapi({ description: 'The quote Id used for the FX' }),
    railsBatchId: z.string().exactOptional(),
    railsId: z
      .string()
      .default('RAILS ID UNAVAILABLE')
      .openapi({
        description: 'The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.',
        example: 'asdf123',
      }),
    railsPaymentId: z.string().exactOptional(),
    rate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed',
      }),
    rejectionReason: z.string().exactOptional(),
    remoteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The remote id by which the payor refers to the payee. Only populated once payment is confirmed',
        example: 'aasdf123',
      }),
    remoteSystemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The velo id of the remote system orchestrating the payment. Not populated for normal Velo payments.',
        example: 'REMOTE_SYSTEM_ID',
      }),
    remoteSystemPaymentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the payment in the remote system. Not populated for normal Velo payments.',
      }),
    returnCost: z
      .int()
      .exactOptional()
      .openapi({ description: 'The return cost if a returned payment.', example: 1232 }),
    returnReason: z.string().exactOptional().openapi({ example: 'Some Reason Value' }),
    routingNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The routing number for the payment.', example: '123123123123' }),
    schedule: PayoutScheduleSchema.exactOptional(),
    sourceAccountId: z
      .uuid()
      .openapi({ description: 'The id of the source account from which the payment was taken' }),
    sourceAccountName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the source account from which the payment was taken',
        example: 'My Account',
      }),
    sourceAmount: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The source amount for the payment (amount debited to make the payment)',
        example: 12345,
      }),
    sourceCurrency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO-4217 3 character currency code', example: 'EUR' }),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, RETURNED, WITHDRAWN',
      }),
    submittedDateTime: z.iso.datetime({ offset: true }),
    traceNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Trace Number assigned to the payment in the ACH file, if applicable',
        example: 'abodu123',
      }),
    transmissionType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE, GACHO',
      }),
    withdrawable: z.boolean().exactOptional(),
    withdrawnReason: z.string().exactOptional(),
  })
  .openapi({
    example: {
      accountName: 'My Account Name',
      accountNumber: '123123232323',
      autoWithdrawnReasonCode: 'autoWithdrawnReasonCode',
      countryCode: 'US',
      events: [
        {
          accountName: 'accountName',
          accountNumber: 'accountNumber',
          eventDateTime: '2000-01-23T04:56:07.000+00:00',
          eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          eventType: 'eventType',
          iban: 'iban',
          paymentAmount: 1299,
          paymentCurrency: 'EUR',
          principal: 'principal',
          routingNumber: 'routingNumber',
          scheduledAt: '2000-01-23T04:56:07.000+00:00',
          scheduledBy: 'Aphra Behn',
          scheduledFor: '2000-01-23T04:56:07.000+00:00',
          sourceAmount: 1299,
          sourceCurrency: 'EUR',
        },
        {
          accountName: 'accountName',
          accountNumber: 'accountNumber',
          eventDateTime: '2000-01-23T04:56:07.000+00:00',
          eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          eventType: 'eventType',
          iban: 'iban',
          paymentAmount: 1299,
          paymentCurrency: 'EUR',
          principal: 'principal',
          routingNumber: 'routingNumber',
          scheduledAt: '2000-01-23T04:56:07.000+00:00',
          scheduledBy: 'Aphra Behn',
          scheduledFor: '2000-01-23T04:56:07.000+00:00',
          sourceAmount: 1299,
          sourceCurrency: 'EUR',
        },
      ],
      filenameReference: 'file ref',
      fundingStatus: 'fundingStatus',
      iban: 'DE89 3704 0044 0532 0130 00',
      individualIdentificationNumber: '1231231adf',
      invertedRate: 3.616076749251911,
      isPaymentCcyBaseCcy: true,
      payeeAddressCountryCode: 'US',
      payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      paymentAmount: 7,
      paymentChannelId: '123asdf',
      paymentChannelName: 'My Payment Channel',
      paymentCurrency: 'EUR',
      paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      paymentMemo: 'Payment memo',
      paymentMetadata: 'sample metadata',
      paymentScheme: 'paymentScheme',
      paymentTrackingReference: 'paymentTrackingReference',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorName: 'payorName',
      payorPaymentId: '123123asdf',
      payout: {
        payoutFrom: {
          dbaName: 'dbaName',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          principal: 'principal',
          principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        },
        payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        payoutTo: {
          dbaName: 'dbaName',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          principal: 'principal',
          principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        },
      },
      postInstructFxInfo: {
        fxMode: 'MANUAL',
        fxStatus: 'INITIATED',
        fxStatusUpdatedAt: '2000-01-23T04:56:07.000+00:00',
        fxTransactionReference: 'AB123GHI',
      },
      quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      railsBatchId: 'railsBatchId',
      railsId: 'asdf123',
      railsPaymentId: 'railsPaymentId',
      rate: 9.301444243932576,
      rejectionReason: 'rejectionReason',
      remoteId: 'aasdf123',
      remoteSystemId: 'REMOTE_SYSTEM_ID',
      remoteSystemPaymentId: 'remoteSystemPaymentId',
      returnCost: 1232,
      returnReason: 'Some Reason Value',
      routingNumber: '123123123123',
      schedule: {
        notificationsEnabled: true,
        scheduleStatus: 'SCHEDULED',
        scheduledAt: '2000-01-23T04:56:07.000+00:00',
        scheduledBy: 'Aphra Behn',
        scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
        scheduledFor: '2000-01-23T04:56:07.000+00:00',
      },
      sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      sourceAccountName: 'My Account',
      sourceAmount: 12345,
      sourceCurrency: 'EUR',
      status: 'status',
      submittedDateTime: '2000-01-23T04:56:07.000+00:00',
      traceNumber: 'abodu123',
      transmissionType: 'transmissionType',
      withdrawable: true,
      withdrawnReason: 'withdrawnReason',
    },
    required: [
      'events',
      'fundingStatus',
      'payeeId',
      'paymentAmount',
      'paymentId',
      'payorId',
      'quoteId',
      'railsId',
      'sourceAccountId',
      'status',
      'submittedDateTime',
    ],
  })
  .openapi('PaymentResponseV4')

const PagedPayeeResponseV3LinksSchema = z
  .object({ href: z.string().exactOptional(), rel: z.string().exactOptional() })
  .openapi({ example: { href: 'href', rel: 'rel' }, required: [] })
  .openapi('PagedPayeeResponseV3Links')

const PagedPayeeInvitationStatusResponseV3PageSchema = z
  .object({
    numberOfElements: z.int().exactOptional(),
    page: z.int().exactOptional(),
    pageSize: z.int().exactOptional(),
    totalElements: z.int().exactOptional(),
    totalPages: z.int().exactOptional(),
  })
  .openapi({
    example: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    required: [],
  })
  .openapi('PagedPayeeInvitationStatusResponseV3Page')

const PayoutPrincipalSchema = z
  .object({
    principal: z
      .string()
      .openapi({ description: 'Email address if principal is a user or ID if application.' }),
    principalId: z.uuid().openapi({ description: 'The id of the principal.' }),
  })
  .openapi({
    description: 'Details of principal participating in a payout.',
    example: { principal: 'principal', principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91' },
    required: ['principal', 'principalId'],
  })
  .openapi('PayoutPrincipal')

const GetPaymentsForPayoutResponseV4SummarySchema = z
  .object({
    confirmedPayments: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The count of payments within the payout which have been confirmed.',
      }),
    incompletePayments: z
      .int()
      .exactOptional()
      .openapi({ description: 'The count of payments within the payout which are incomplete.' }),
    instructed: PayoutPrincipalSchema.exactOptional(),
    instructedDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date/time at which the payout was instructed.' }),
    payoutFrom: PayoutPayorSchema.exactOptional(),
    payoutMemo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The memo attached to the payout.' }),
    payoutStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN',
      }),
    payoutTo: PayoutPayorSchema.exactOptional(),
    payoutType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF',
      }),
    quoted: PayoutPrincipalSchema.exactOptional(),
    quotedDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date/time at which the payout was quoted.' }),
    releasedPayments: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The count of payments within the payout which have been released.',
      }),
    returnedPayments: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The count of payments within the payout which have been returned.',
      }),
    schedule: PayoutScheduleSchema.exactOptional(),
    submittedDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date/time at which the payout was submitted.' }),
    submitting: PayoutPayorSchema.exactOptional(),
    totalPayments: z
      .int()
      .exactOptional()
      .openapi({ description: 'The count of payments within the payout.' }),
    withdrawn: PayoutPrincipalSchema.exactOptional(),
    withdrawnDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    withdrawnPayments: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The count of payments within the payout which have been withdrawn.',
      }),
  })
  .openapi({
    example: {
      confirmedPayments: 6,
      incompletePayments: 5,
      instructed: { principal: 'principal', principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91' },
      instructedDateTime: '2000-01-23T04:56:07.000+00:00',
      payoutFrom: {
        dbaName: 'dbaName',
        payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        payorName: 'payorName',
        principal: 'principal',
        principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      },
      payoutMemo: 'payoutMemo',
      payoutStatus: 'payoutStatus',
      payoutTo: {
        dbaName: 'dbaName',
        payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        payorName: 'payorName',
        principal: 'principal',
        principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      },
      payoutType: 'payoutType',
      quoted: { principal: 'principal', principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91' },
      quotedDateTime: '2000-01-23T04:56:07.000+00:00',
      releasedPayments: 1,
      returnedPayments: 5,
      schedule: {
        notificationsEnabled: true,
        scheduleStatus: 'SCHEDULED',
        scheduledAt: '2000-01-23T04:56:07.000+00:00',
        scheduledBy: 'Aphra Behn',
        scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
        scheduledFor: '2000-01-23T04:56:07.000+00:00',
      },
      submittedDateTime: '2000-01-23T04:56:07.000+00:00',
      submitting: {
        dbaName: 'dbaName',
        payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        payorName: 'payorName',
        principal: 'principal',
        principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      },
      totalPayments: 0,
      withdrawn: { principal: 'principal', principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91' },
      withdrawnDateTime: '2000-01-23T04:56:07.000+00:00',
      withdrawnPayments: 2,
    },
    required: [],
  })
  .openapi('GetPaymentsForPayoutResponseV4Summary')

const GetPaymentsForPayoutResponseV4Schema = z
  .object({
    content: z.array(PaymentResponseV4Schema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeInvitationStatusResponseV3PageSchema.exactOptional(),
    summary: GetPaymentsForPayoutResponseV4SummarySchema.exactOptional(),
  })
  .openapi({
    description: 'List Payments for payout',
    example: {
      content: [
        {
          accountName: 'My Account Name',
          accountNumber: '123123232323',
          autoWithdrawnReasonCode: 'autoWithdrawnReasonCode',
          countryCode: 'US',
          events: [
            {
              accountName: 'accountName',
              accountNumber: 'accountNumber',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'iban',
              paymentAmount: 1299,
              paymentCurrency: 'EUR',
              principal: 'principal',
              routingNumber: 'routingNumber',
              scheduledAt: '2000-01-23T04:56:07.000+00:00',
              scheduledBy: 'Aphra Behn',
              scheduledFor: '2000-01-23T04:56:07.000+00:00',
              sourceAmount: 1299,
              sourceCurrency: 'EUR',
            },
            {
              accountName: 'accountName',
              accountNumber: 'accountNumber',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'iban',
              paymentAmount: 1299,
              paymentCurrency: 'EUR',
              principal: 'principal',
              routingNumber: 'routingNumber',
              scheduledAt: '2000-01-23T04:56:07.000+00:00',
              scheduledBy: 'Aphra Behn',
              scheduledFor: '2000-01-23T04:56:07.000+00:00',
              sourceAmount: 1299,
              sourceCurrency: 'EUR',
            },
          ],
          filenameReference: 'file ref',
          fundingStatus: 'fundingStatus',
          iban: 'DE89 3704 0044 0532 0130 00',
          individualIdentificationNumber: '1231231adf',
          invertedRate: 3.616076749251911,
          isPaymentCcyBaseCcy: true,
          payeeAddressCountryCode: 'US',
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentAmount: 7,
          paymentChannelId: '123asdf',
          paymentChannelName: 'My Payment Channel',
          paymentCurrency: 'EUR',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentMemo: 'Payment memo',
          paymentMetadata: 'sample metadata',
          paymentScheme: 'paymentScheme',
          paymentTrackingReference: 'paymentTrackingReference',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payorPaymentId: '123123asdf',
          payout: {
            payoutFrom: {
              dbaName: 'dbaName',
              payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              payorName: 'payorName',
              principal: 'principal',
              principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            },
            payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            payoutTo: {
              dbaName: 'dbaName',
              payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              payorName: 'payorName',
              principal: 'principal',
              principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            },
          },
          postInstructFxInfo: {
            fxMode: 'MANUAL',
            fxStatus: 'INITIATED',
            fxStatusUpdatedAt: '2000-01-23T04:56:07.000+00:00',
            fxTransactionReference: 'AB123GHI',
          },
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          railsBatchId: 'railsBatchId',
          railsId: 'asdf123',
          railsPaymentId: 'railsPaymentId',
          rate: 9.301444243932576,
          rejectionReason: 'rejectionReason',
          remoteId: 'aasdf123',
          remoteSystemId: 'REMOTE_SYSTEM_ID',
          remoteSystemPaymentId: 'remoteSystemPaymentId',
          returnCost: 1232,
          returnReason: 'Some Reason Value',
          routingNumber: '123123123123',
          schedule: {
            notificationsEnabled: true,
            scheduleStatus: 'SCHEDULED',
            scheduledAt: '2000-01-23T04:56:07.000+00:00',
            scheduledBy: 'Aphra Behn',
            scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
            scheduledFor: '2000-01-23T04:56:07.000+00:00',
          },
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAccountName: 'My Account',
          sourceAmount: 12345,
          sourceCurrency: 'EUR',
          status: 'status',
          submittedDateTime: '2000-01-23T04:56:07.000+00:00',
          traceNumber: 'abodu123',
          transmissionType: 'transmissionType',
          withdrawable: true,
          withdrawnReason: 'withdrawnReason',
        },
        {
          accountName: 'My Account Name',
          accountNumber: '123123232323',
          autoWithdrawnReasonCode: 'autoWithdrawnReasonCode',
          countryCode: 'US',
          events: [
            {
              accountName: 'accountName',
              accountNumber: 'accountNumber',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'iban',
              paymentAmount: 1299,
              paymentCurrency: 'EUR',
              principal: 'principal',
              routingNumber: 'routingNumber',
              scheduledAt: '2000-01-23T04:56:07.000+00:00',
              scheduledBy: 'Aphra Behn',
              scheduledFor: '2000-01-23T04:56:07.000+00:00',
              sourceAmount: 1299,
              sourceCurrency: 'EUR',
            },
            {
              accountName: 'accountName',
              accountNumber: 'accountNumber',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'iban',
              paymentAmount: 1299,
              paymentCurrency: 'EUR',
              principal: 'principal',
              routingNumber: 'routingNumber',
              scheduledAt: '2000-01-23T04:56:07.000+00:00',
              scheduledBy: 'Aphra Behn',
              scheduledFor: '2000-01-23T04:56:07.000+00:00',
              sourceAmount: 1299,
              sourceCurrency: 'EUR',
            },
          ],
          filenameReference: 'file ref',
          fundingStatus: 'fundingStatus',
          iban: 'DE89 3704 0044 0532 0130 00',
          individualIdentificationNumber: '1231231adf',
          invertedRate: 3.616076749251911,
          isPaymentCcyBaseCcy: true,
          payeeAddressCountryCode: 'US',
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentAmount: 7,
          paymentChannelId: '123asdf',
          paymentChannelName: 'My Payment Channel',
          paymentCurrency: 'EUR',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentMemo: 'Payment memo',
          paymentMetadata: 'sample metadata',
          paymentScheme: 'paymentScheme',
          paymentTrackingReference: 'paymentTrackingReference',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payorPaymentId: '123123asdf',
          payout: {
            payoutFrom: {
              dbaName: 'dbaName',
              payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              payorName: 'payorName',
              principal: 'principal',
              principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            },
            payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            payoutTo: {
              dbaName: 'dbaName',
              payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              payorName: 'payorName',
              principal: 'principal',
              principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            },
          },
          postInstructFxInfo: {
            fxMode: 'MANUAL',
            fxStatus: 'INITIATED',
            fxStatusUpdatedAt: '2000-01-23T04:56:07.000+00:00',
            fxTransactionReference: 'AB123GHI',
          },
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          railsBatchId: 'railsBatchId',
          railsId: 'asdf123',
          railsPaymentId: 'railsPaymentId',
          rate: 9.301444243932576,
          rejectionReason: 'rejectionReason',
          remoteId: 'aasdf123',
          remoteSystemId: 'REMOTE_SYSTEM_ID',
          remoteSystemPaymentId: 'remoteSystemPaymentId',
          returnCost: 1232,
          returnReason: 'Some Reason Value',
          routingNumber: '123123123123',
          schedule: {
            notificationsEnabled: true,
            scheduleStatus: 'SCHEDULED',
            scheduledAt: '2000-01-23T04:56:07.000+00:00',
            scheduledBy: 'Aphra Behn',
            scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
            scheduledFor: '2000-01-23T04:56:07.000+00:00',
          },
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAccountName: 'My Account',
          sourceAmount: 12345,
          sourceCurrency: 'EUR',
          status: 'status',
          submittedDateTime: '2000-01-23T04:56:07.000+00:00',
          traceNumber: 'abodu123',
          transmissionType: 'transmissionType',
          withdrawable: true,
          withdrawnReason: 'withdrawnReason',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
      summary: {
        confirmedPayments: 6,
        incompletePayments: 5,
        instructed: { principal: 'principal', principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91' },
        instructedDateTime: '2000-01-23T04:56:07.000+00:00',
        payoutFrom: {
          dbaName: 'dbaName',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          principal: 'principal',
          principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        },
        payoutMemo: 'payoutMemo',
        payoutStatus: 'payoutStatus',
        payoutTo: {
          dbaName: 'dbaName',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          principal: 'principal',
          principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        },
        payoutType: 'payoutType',
        quoted: { principal: 'principal', principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91' },
        quotedDateTime: '2000-01-23T04:56:07.000+00:00',
        releasedPayments: 1,
        returnedPayments: 5,
        schedule: {
          notificationsEnabled: true,
          scheduleStatus: 'SCHEDULED',
          scheduledAt: '2000-01-23T04:56:07.000+00:00',
          scheduledBy: 'Aphra Behn',
          scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
          scheduledFor: '2000-01-23T04:56:07.000+00:00',
        },
        submittedDateTime: '2000-01-23T04:56:07.000+00:00',
        submitting: {
          dbaName: 'dbaName',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          principal: 'principal',
          principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        },
        totalPayments: 0,
        withdrawn: { principal: 'principal', principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91' },
        withdrawnDateTime: '2000-01-23T04:56:07.000+00:00',
        withdrawnPayments: 2,
      },
    },
    required: [],
  })
  .openapi('GetPaymentsForPayoutResponseV4')

const GetPayoutStatisticsSchema = z
  .object({ thisMonthFailedPaymentsCount: z.int(), thisMonthPayoutsCount: z.int() })
  .openapi({
    example: { thisMonthFailedPaymentsCount: 6, thisMonthPayoutsCount: 0 },
    required: ['thisMonthFailedPaymentsCount', 'thisMonthPayoutsCount'],
  })
  .openapi('GetPayoutStatistics')

const SourceAccountSummarySchema = z
  .object({
    currency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO-4217 3 character currency code', example: 'EUR' }),
    sourceAccountId: z.uuid(),
    totalCost: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 3344 }),
  })
  .openapi({
    example: {
      currency: 'EUR',
      sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      totalCost: 3344,
    },
    required: ['sourceAccountId', 'totalCost'],
  })
  .openapi('SourceAccountSummary')

const PayoutSummaryAuditSchema = z
  .object({
    dateTime: z.iso.datetime({ offset: true }).exactOptional(),
    fxSummaries: z.array(FxSummarySchema).exactOptional(),
    instructedDateTime: z.string().exactOptional(),
    payorId: z.uuid().exactOptional(),
    payorName: z.string(),
    payoutId: z.uuid().exactOptional(),
    payoutMemo: z.string().exactOptional(),
    payoutType: z
      .string()
      .openapi({
        description: 'The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF',
      }),
    schedule: PayoutScheduleSchema.exactOptional(),
    sourceAccountSummary: z.array(SourceAccountSummarySchema).exactOptional(),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN',
      }),
    submittedDateTime: z.string(),
    totalIncompletePayments: z.int().exactOptional(),
    totalPayments: z.int().exactOptional(),
    totalReturnedPayments: z.int().exactOptional(),
    totalWithdrawnPayments: z.int().exactOptional(),
    withdrawnDateTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    example: {
      dateTime: '2000-01-23T04:56:07.000+00:00',
      fxSummaries: [
        {
          creationDateTime: '2000-01-23T04:56:07.000+00:00',
          fundingStatus: 'fundingStatus',
          invertedRate: 123.23,
          paymentCurrency: 'EUR',
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          rate: 123.23,
          sourceCurrency: 'EUR',
          status: 'status',
          totalCost: 5,
          totalPaymentAmount: 34235,
        },
        {
          creationDateTime: '2000-01-23T04:56:07.000+00:00',
          fundingStatus: 'fundingStatus',
          invertedRate: 123.23,
          paymentCurrency: 'EUR',
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          rate: 123.23,
          sourceCurrency: 'EUR',
          status: 'status',
          totalCost: 5,
          totalPaymentAmount: 34235,
        },
      ],
      instructedDateTime: 'instructedDateTime',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorName: 'payorName',
      payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payoutMemo: 'payoutMemo',
      payoutType: 'payoutType',
      schedule: {
        notificationsEnabled: true,
        scheduleStatus: 'SCHEDULED',
        scheduledAt: '2000-01-23T04:56:07.000+00:00',
        scheduledBy: 'Aphra Behn',
        scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
        scheduledFor: '2000-01-23T04:56:07.000+00:00',
      },
      sourceAccountSummary: [
        {
          currency: 'EUR',
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          totalCost: 3344,
        },
        {
          currency: 'EUR',
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          totalCost: 3344,
        },
      ],
      status: 'status',
      submittedDateTime: 'submittedDateTime',
      totalIncompletePayments: 6,
      totalPayments: 0,
      totalReturnedPayments: 1,
      totalWithdrawnPayments: 5,
      withdrawnDateTime: '2000-01-23T04:56:07.000+00:00',
    },
    required: ['payorName', 'payoutType', 'status', 'submittedDateTime'],
  })
  .openapi('PayoutSummaryAudit')

const GetPayoutsResponseSchema = z
  .object({
    content: z.array(PayoutSummaryAuditSchema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeInvitationStatusResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payouts Response',
    example: {
      content: [
        {
          dateTime: '2000-01-23T04:56:07.000+00:00',
          fxSummaries: [
            {
              creationDateTime: '2000-01-23T04:56:07.000+00:00',
              fundingStatus: 'fundingStatus',
              invertedRate: 123.23,
              paymentCurrency: 'EUR',
              quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              rate: 123.23,
              sourceCurrency: 'EUR',
              status: 'status',
              totalCost: 5,
              totalPaymentAmount: 34235,
            },
            {
              creationDateTime: '2000-01-23T04:56:07.000+00:00',
              fundingStatus: 'fundingStatus',
              invertedRate: 123.23,
              paymentCurrency: 'EUR',
              quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              rate: 123.23,
              sourceCurrency: 'EUR',
              status: 'status',
              totalCost: 5,
              totalPaymentAmount: 34235,
            },
          ],
          instructedDateTime: 'instructedDateTime',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payoutMemo: 'payoutMemo',
          payoutType: 'payoutType',
          schedule: {
            notificationsEnabled: true,
            scheduleStatus: 'SCHEDULED',
            scheduledAt: '2000-01-23T04:56:07.000+00:00',
            scheduledBy: 'Aphra Behn',
            scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
            scheduledFor: '2000-01-23T04:56:07.000+00:00',
          },
          sourceAccountSummary: [
            {
              currency: 'EUR',
              sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              totalCost: 3344,
            },
            {
              currency: 'EUR',
              sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              totalCost: 3344,
            },
          ],
          status: 'status',
          submittedDateTime: 'submittedDateTime',
          totalIncompletePayments: 6,
          totalPayments: 0,
          totalReturnedPayments: 1,
          totalWithdrawnPayments: 5,
          withdrawnDateTime: '2000-01-23T04:56:07.000+00:00',
        },
        {
          dateTime: '2000-01-23T04:56:07.000+00:00',
          fxSummaries: [
            {
              creationDateTime: '2000-01-23T04:56:07.000+00:00',
              fundingStatus: 'fundingStatus',
              invertedRate: 123.23,
              paymentCurrency: 'EUR',
              quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              rate: 123.23,
              sourceCurrency: 'EUR',
              status: 'status',
              totalCost: 5,
              totalPaymentAmount: 34235,
            },
            {
              creationDateTime: '2000-01-23T04:56:07.000+00:00',
              fundingStatus: 'fundingStatus',
              invertedRate: 123.23,
              paymentCurrency: 'EUR',
              quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              rate: 123.23,
              sourceCurrency: 'EUR',
              status: 'status',
              totalCost: 5,
              totalPaymentAmount: 34235,
            },
          ],
          instructedDateTime: 'instructedDateTime',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payoutMemo: 'payoutMemo',
          payoutType: 'payoutType',
          schedule: {
            notificationsEnabled: true,
            scheduleStatus: 'SCHEDULED',
            scheduledAt: '2000-01-23T04:56:07.000+00:00',
            scheduledBy: 'Aphra Behn',
            scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
            scheduledFor: '2000-01-23T04:56:07.000+00:00',
          },
          sourceAccountSummary: [
            {
              currency: 'EUR',
              sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              totalCost: 3344,
            },
            {
              currency: 'EUR',
              sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              totalCost: 3344,
            },
          ],
          status: 'status',
          submittedDateTime: 'submittedDateTime',
          totalIncompletePayments: 6,
          totalPayments: 0,
          totalReturnedPayments: 1,
          totalWithdrawnPayments: 5,
          withdrawnDateTime: '2000-01-23T04:56:07.000+00:00',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    },
    required: [],
  })
  .openapi('GetPayoutsResponse')

const SourceAccountSummaryV3Schema = z
  .object({
    currency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'ISO 3 character currency code' }),
    sourceAccountId: z.uuid(),
    totalCost: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 3434 }),
  })
  .openapi({
    example: {
      currency: 'currency',
      sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      totalCost: 3434,
    },
    required: ['sourceAccountId', 'totalCost'],
  })
  .openapi('SourceAccountSummaryV3')

const PayoutSummaryAuditV3Schema = z
  .object({
    fxSummaries: z.array(FxSummaryV3Schema).exactOptional(),
    instructedDateTime: z.string().exactOptional(),
    payorId: z.uuid().exactOptional(),
    payoutId: z.uuid(),
    payoutMemo: z.string().exactOptional(),
    sourceAccountSummary: z.array(SourceAccountSummaryV3Schema).exactOptional(),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN',
      }),
    submittedDateTime: z.string(),
    totalFailedPayments: z.int().exactOptional().openapi({ example: 123 }),
    totalIncompletePayments: z.int().exactOptional().openapi({ example: 123 }),
    totalPayments: z.int().exactOptional().openapi({ example: 123 }),
    withdrawnDateTime: z.string().exactOptional(),
  })
  .openapi({
    example: {
      fxSummaries: [
        {
          creationDateTime: '2000-01-23T04:56:07.000+00:00',
          fundingStatus: 'fundingStatus',
          invertedRate: 1.12,
          paymentCurrency: 'paymentCurrency',
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          rate: 1.12,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
          totalCost: 1234,
          totalPaymentAmount: 1234,
        },
        {
          creationDateTime: '2000-01-23T04:56:07.000+00:00',
          fundingStatus: 'fundingStatus',
          invertedRate: 1.12,
          paymentCurrency: 'paymentCurrency',
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          rate: 1.12,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
          totalCost: 1234,
          totalPaymentAmount: 1234,
        },
      ],
      instructedDateTime: 'instructedDateTime',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payoutMemo: 'payoutMemo',
      sourceAccountSummary: [
        {
          currency: 'currency',
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          totalCost: 3434,
        },
        {
          currency: 'currency',
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          totalCost: 3434,
        },
      ],
      status: 'status',
      submittedDateTime: 'submittedDateTime',
      totalFailedPayments: 123,
      totalIncompletePayments: 123,
      totalPayments: 123,
      withdrawnDateTime: 'withdrawnDateTime',
    },
    required: ['payoutId', 'status', 'submittedDateTime'],
  })
  .openapi('PayoutSummaryAuditV3')

const GetPayoutsResponseV3PageSchema = z
  .object({
    numberOfElements: z.int().exactOptional().openapi({ example: 12 }),
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 25 }),
    totalElements: z.int().exactOptional().openapi({ example: 123 }),
    totalPages: z.int().exactOptional().openapi({ example: 123 }),
  })
  .openapi({
    example: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 123, totalPages: 123 },
    required: [],
  })
  .openapi('GetPayoutsResponseV3Page')

const GetPayoutsResponseV3Schema = z
  .object({
    content: z.array(PayoutSummaryAuditV3Schema).exactOptional(),
    links: z.array(GetPayoutsResponseV3LinksSchema).exactOptional(),
    page: GetPayoutsResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payouts Response',
    example: {
      content: [
        {
          fxSummaries: [
            {
              creationDateTime: '2000-01-23T04:56:07.000+00:00',
              fundingStatus: 'fundingStatus',
              invertedRate: 1.12,
              paymentCurrency: 'paymentCurrency',
              quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              rate: 1.12,
              sourceCurrency: 'sourceCurrency',
              status: 'status',
              totalCost: 1234,
              totalPaymentAmount: 1234,
            },
            {
              creationDateTime: '2000-01-23T04:56:07.000+00:00',
              fundingStatus: 'fundingStatus',
              invertedRate: 1.12,
              paymentCurrency: 'paymentCurrency',
              quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              rate: 1.12,
              sourceCurrency: 'sourceCurrency',
              status: 'status',
              totalCost: 1234,
              totalPaymentAmount: 1234,
            },
          ],
          instructedDateTime: 'instructedDateTime',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payoutMemo: 'payoutMemo',
          sourceAccountSummary: [
            {
              currency: 'currency',
              sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              totalCost: 3434,
            },
            {
              currency: 'currency',
              sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              totalCost: 3434,
            },
          ],
          status: 'status',
          submittedDateTime: 'submittedDateTime',
          totalFailedPayments: 123,
          totalIncompletePayments: 123,
          totalPayments: 123,
          withdrawnDateTime: 'withdrawnDateTime',
        },
        {
          fxSummaries: [
            {
              creationDateTime: '2000-01-23T04:56:07.000+00:00',
              fundingStatus: 'fundingStatus',
              invertedRate: 1.12,
              paymentCurrency: 'paymentCurrency',
              quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              rate: 1.12,
              sourceCurrency: 'sourceCurrency',
              status: 'status',
              totalCost: 1234,
              totalPaymentAmount: 1234,
            },
            {
              creationDateTime: '2000-01-23T04:56:07.000+00:00',
              fundingStatus: 'fundingStatus',
              invertedRate: 1.12,
              paymentCurrency: 'paymentCurrency',
              quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              rate: 1.12,
              sourceCurrency: 'sourceCurrency',
              status: 'status',
              totalCost: 1234,
              totalPaymentAmount: 1234,
            },
          ],
          instructedDateTime: 'instructedDateTime',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payoutMemo: 'payoutMemo',
          sourceAccountSummary: [
            {
              currency: 'currency',
              sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              totalCost: 3434,
            },
            {
              currency: 'currency',
              sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              totalCost: 3434,
            },
          ],
          status: 'status',
          submittedDateTime: 'submittedDateTime',
          totalFailedPayments: 123,
          totalIncompletePayments: 123,
          totalPayments: 123,
          withdrawnDateTime: 'withdrawnDateTime',
        },
      ],
      links: [
        { href: 'https://example.com', rel: 'first' },
        { href: 'https://example.com', rel: 'first' },
      ],
      page: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 123, totalPages: 123 },
    },
    required: [],
  })
  .openapi('GetPayoutsResponseV3')

const IbanSchema = z
  .string()
  .regex(/^[A-Za-z0-9]+$/)
  .min(15)
  .max(34)
  .openapi({
    description: 'Must match the regular expression ```^[A-Za-z0-9]+$```.',
    example: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
    title: 'IBAN - International Bank Account Number',
  })
  .openapi('Iban')

const IndividualV3NameSchema = z
  .object({
    firstName: z.string().min(1).max(40).openapi({ example: 'Bob' }),
    lastName: z.string().min(1).max(40).openapi({ example: 'Smith' }),
    otherNames: z.string().min(1).max(40).exactOptional().openapi({ example: 'A' }),
    title: z.string().min(1).max(10).exactOptional().openapi({ example: 'Mr' }),
  })
  .openapi({
    example: { firstName: 'Bob', lastName: 'Smith', otherNames: 'A', title: 'Mr' },
    required: ['firstName', 'lastName'],
  })
  .openapi('IndividualV3Name')

const IndividualV3Schema = z
  .object({
    dateOfBirth: z
      .string()
      .openapi({
        description: 'If not authorized to view, value will be masked. Example: - XXXX-XX-XX',
        example: '1985-01-01',
        readOnly: true,
      }),
    name: IndividualV3NameSchema,
    nationalIdentification: z
      .string()
      .min(6)
      .max(30)
      .exactOptional()
      .openapi({
        description: 'If not authorized to view, value will be masked. Example: XXXXX1234',
        example: 'AB123456C',
        readOnly: true,
      }),
  })
  .openapi({
    example: {
      dateOfBirth: '1985-01-01',
      name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'A', title: 'Mr' },
      nationalIdentification: 'AB123456C',
    },
    required: ['dateOfBirth', 'name'],
  })
  .openapi('IndividualV3')

const IndividualV4Schema = z
  .object({
    dateOfBirth: z
      .string()
      .openapi({
        description: 'If not authorized to view, value will be masked. Example: - XXXX-XX-XX',
        example: '1985-01-01',
        readOnly: true,
      }),
    name: IndividualV3NameSchema,
    nationalIdentification: z
      .string()
      .min(6)
      .max(30)
      .exactOptional()
      .openapi({
        description: 'If not authorized to view, value will be masked. Example: XXXXX1234',
        example: 'AB123456C',
        readOnly: true,
      }),
  })
  .openapi({
    example: {
      dateOfBirth: '1985-01-01',
      name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'A', title: 'Mr' },
      nationalIdentification: 'AB123456C',
    },
    required: ['dateOfBirth', 'name'],
  })
  .openapi('IndividualV4')

const InstructPayoutRequestV3Schema = z
  .object({
    fxRateDegredationThresholdPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Halt instruction if the FX rates have become worse since the last quote',
      }),
  })
  .openapi({ example: { fxRateDegredationThresholdPercentage: 0.8008282 }, required: [] })
  .openapi('InstructPayoutRequestV3')

const InvitationStatusV3Schema = z.string().openapi('InvitationStatusV3')

const InvitationStatusV4Schema = z.string().openapi('InvitationStatusV4')

const InvitePayeeRequestV3Schema = z
  .object({ payorId: z.uuid().openapi({ example: '9ac75325-5dcd-42d5-b992-175d7e0a035e' }) })
  .openapi({ example: { payorId: '9ac75325-5dcd-42d5-b992-175d7e0a035e' }, required: ['payorId'] })
  .openapi('InvitePayeeRequestV3')

const InvitePayeeRequestV4Schema = z
  .object({ payorId: z.uuid().openapi({ example: '9ac75325-5dcd-42d5-b992-175d7e0a035e' }) })
  .openapi({ example: { payorId: '9ac75325-5dcd-42d5-b992-175d7e0a035e' }, required: ['payorId'] })
  .openapi('InvitePayeeRequestV4')

const InviteUserRequestSchema = z
  .object({
    email: z
      .email()
      .openapi({
        description: 'the email address of the invited user',
        example: 'foo@example.com',
      }),
    entityId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The payorId or payeeId or null if the user is a backoffice admin\n',
        example: '7fffa261-ac68-49e6-b605-d24a444d9206',
      }),
    firstName: z.string().min(1).max(128).exactOptional().openapi({ example: 'John' }),
    lastName: z.string().min(1).max(128).exactOptional().openapi({ example: 'Doe' }),
    mfaType: z
      .enum(['SMS', 'YUBIKEY', 'TOTP'])
      .openapi({
        description:
          '<p>The MFA type that the user will use</p>\n<p>The type may be conditional on the role(s) the user has</p>\n',
        example: 'TOTP',
      }),
    primaryContactNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .openapi({ description: 'The main contact number for the user\n', example: '11235555555' }),
    roles: z
      .array(z.string())
      .openapi({
        description:
          'The role(s) for the user\nThe role must exist\nThe role can be a custom role or a system role but the invoker must have the permissions to assign the role\nSystem roles are: velo.backoffice.admin, velo.payor.master_admin, velo.payor.admin, velo.payor.support, velo.payee.admin, velo.payee.support\n',
        example: ['velo.payor.admin'],
      }),
    secondaryContactNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The secondary contact number for the user\n',
        example: '11235555550',
      }),
    smsNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .openapi({
        description: 'The phone number of a device that the user can receive sms messages on\n',
        example: '11235555555',
      }),
    userType: z
      .enum(['BACKOFFICE', 'PAYOR', 'PAYEE'])
      .exactOptional()
      .openapi({
        description: 'Will default to PAYOR if not provided but entityId is provided',
        example: 'PAYEE',
      }),
    verificationCode: z
      .string()
      .length(6)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Optional property that MUST be suppied when manually verifying a user\nThe user's smsNumber is registered via a separate endpoint and an OTP sent to them\n",
        example: '123456',
      }),
  })
  .openapi({
    example: {
      email: 'foo@example.com',
      entityId: '7fffa261-ac68-49e6-b605-d24a444d9206',
      firstName: 'John',
      lastName: 'Doe',
      mfaType: 'TOTP',
      primaryContactNumber: '11235555555',
      roles: ['velo.payor.admin'],
      secondaryContactNumber: '11235555550',
      smsNumber: '11235555555',
      userType: 'PAYEE',
      verificationCode: '123456',
    },
    required: ['email', 'mfaType', 'primaryContactNumber', 'roles', 'smsNumber'],
  })
  .openapi('InviteUserRequest')

const IsoCountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2}$/)
  .length(2)
  .openapi({
    description:
      'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
    example: 'US',
    title: 'ISO 3166 2 Character Country Code',
  })
  .openapi('IsoCountryCode')

const IsoCurrencySchema = z
  .string()
  .regex(/^[A-Z]{3}$/)
  .length(3)
  .openapi({
    description:
      'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
    example: 'USD',
    title: 'ISO Currency Code',
  })
  .openapi('IsoCurrency')

const KycStateSchema = z
  .string()
  .openapi({
    description:
      'The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC',
    example: 'PASSED_KYC',
    readOnly: true,
  })
  .openapi('KycState')

const LanguageV3Schema = z
  .string()
  .openapi({
    description:
      'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
    example: 'en-US',
  })
  .openapi('LanguageV3')

const LanguageV4Schema = z
  .string()
  .openapi({
    description:
      'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
    example: 'en-US',
  })
  .openapi('LanguageV4')

const LinkForResponseSchema = z
  .object({ href: z.string().exactOptional(), rel: z.string().exactOptional() })
  .openapi({ example: { href: 'href', rel: 'rel' }, required: [] })
  .openapi('LinkForResponse')

const ListFundingAccountsResponseV2LinksSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
      }),
    rel: z.string().exactOptional().openapi({ example: 'first' }),
  })
  .openapi({
    example: {
      href: 'https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
      rel: 'first',
    },
    required: [],
  })
  .openapi('ListFundingAccountsResponseV2Links')

const ListFundingAccountsResponseV2PageSchema = z
  .object({
    numberOfElements: z.int().exactOptional().openapi({ example: 1 }),
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 25 }),
    totalElements: z.int().exactOptional().openapi({ example: 1 }),
    totalPages: z.int().exactOptional().openapi({ example: 2 }),
  })
  .openapi({
    example: { numberOfElements: 1, page: 1, pageSize: 25, totalElements: 1, totalPages: 2 },
    required: [],
  })
  .openapi('ListFundingAccountsResponseV2Page')

const ListFundingAccountsResponseV2Schema = z
  .object({
    content: z.array(FundingAccountResponseV2Schema).exactOptional(),
    links: z.array(ListFundingAccountsResponseV2LinksSchema).exactOptional(),
    page: ListFundingAccountsResponseV2PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Funding Accounts Response Object',
    example: {
      content: [
        {
          accountName: 'Payor Corp',
          accountNumber: '7001001234',
          archived: true,
          country: 'US',
          currency: 'USD',
          id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          name: 'My Funding Account',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          routingNumber: 12345678,
          type: 'FBO',
        },
        {
          accountName: 'Payor Corp',
          accountNumber: '7001001234',
          archived: true,
          country: 'US',
          currency: 'USD',
          id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          name: 'My Funding Account',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          routingNumber: 12345678,
          type: 'FBO',
        },
      ],
      links: [
        {
          href: 'https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
          rel: 'first',
        },
        {
          href: 'https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
          rel: 'first',
        },
      ],
      page: { numberOfElements: 1, page: 1, pageSize: 25, totalElements: 1, totalPages: 2 },
    },
    required: [],
  })
  .openapi('ListFundingAccountsResponseV2')

const ListPaymentsResponseV3PageSchema = z
  .object({
    numberOfElements: z.int().exactOptional().openapi({ example: 12 }),
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 25 }),
    totalElements: z.int().exactOptional().openapi({ example: 12 }),
    totalPages: z.int().exactOptional().openapi({ example: 12 }),
  })
  .openapi({
    example: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 12, totalPages: 12 },
    required: [],
  })
  .openapi('ListPaymentsResponseV3Page')

const ListPaymentsResponseV3Schema = z
  .object({
    content: z.array(PaymentResponseV3Schema).exactOptional(),
    links: z.array(GetPayoutsResponseV3LinksSchema).exactOptional(),
    page: ListPaymentsResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payments Response Object',
    example: {
      content: [
        {
          accountName: 'My Account Name',
          accountNumber: '123123232323',
          countryCode: 'US',
          events: [
            {
              accountName: 'My account',
              accountNumber: '123123123',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'DE89 3704 0044 0532 0130 00',
              paymentAmount: 1299,
              paymentCurrency: 'paymentCurrency',
              principal: 'Prinicple example',
              routingNumber: '123123123',
              sourceAmount: 1299,
              sourceCurrency: 'sourceCurrency',
            },
            {
              accountName: 'My account',
              accountNumber: '123123123',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'DE89 3704 0044 0532 0130 00',
              paymentAmount: 1299,
              paymentCurrency: 'paymentCurrency',
              principal: 'Prinicple example',
              routingNumber: '123123123',
              sourceAmount: 1299,
              sourceCurrency: 'sourceCurrency',
            },
          ],
          filenameReference: 'file ref',
          fundingStatus: 'fundingStatus',
          iban: 'DE89 3704 0044 0532 0130 00',
          individualIdentificationNumber: '1231231adf',
          invertedRate: 1.4658129,
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentAmount: 0,
          paymentChannelId: '123asdf',
          paymentChannelName: 'My Payment Channel',
          paymentCurrency: 'paymentCurrency',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentMemo: 'Payment memo',
          paymentScheme: 'paymentScheme',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payorPaymentId: '123123asdf',
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          railsBatchId: 'railsBatchId',
          railsId: 'asdf123',
          railsPaymentId: 'railsPaymentId',
          rate: 6.0274563,
          rejectionReason: 'rejectionReason',
          remoteId: 'aasdf123',
          returnCost: 1232,
          returnReason: 'Some Reason Value',
          routingNumber: '123123123123',
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAccountName: 'My Account',
          sourceAmount: 12345,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
          submittedDateTime: '2000-01-23T04:56:07.000+00:00',
          traceNumber: 'abodu123',
        },
        {
          accountName: 'My Account Name',
          accountNumber: '123123232323',
          countryCode: 'US',
          events: [
            {
              accountName: 'My account',
              accountNumber: '123123123',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'DE89 3704 0044 0532 0130 00',
              paymentAmount: 1299,
              paymentCurrency: 'paymentCurrency',
              principal: 'Prinicple example',
              routingNumber: '123123123',
              sourceAmount: 1299,
              sourceCurrency: 'sourceCurrency',
            },
            {
              accountName: 'My account',
              accountNumber: '123123123',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'DE89 3704 0044 0532 0130 00',
              paymentAmount: 1299,
              paymentCurrency: 'paymentCurrency',
              principal: 'Prinicple example',
              routingNumber: '123123123',
              sourceAmount: 1299,
              sourceCurrency: 'sourceCurrency',
            },
          ],
          filenameReference: 'file ref',
          fundingStatus: 'fundingStatus',
          iban: 'DE89 3704 0044 0532 0130 00',
          individualIdentificationNumber: '1231231adf',
          invertedRate: 1.4658129,
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentAmount: 0,
          paymentChannelId: '123asdf',
          paymentChannelName: 'My Payment Channel',
          paymentCurrency: 'paymentCurrency',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentMemo: 'Payment memo',
          paymentScheme: 'paymentScheme',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payorPaymentId: '123123asdf',
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          railsBatchId: 'railsBatchId',
          railsId: 'asdf123',
          railsPaymentId: 'railsPaymentId',
          rate: 6.0274563,
          rejectionReason: 'rejectionReason',
          remoteId: 'aasdf123',
          returnCost: 1232,
          returnReason: 'Some Reason Value',
          routingNumber: '123123123123',
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAccountName: 'My Account',
          sourceAmount: 12345,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
          submittedDateTime: '2000-01-23T04:56:07.000+00:00',
          traceNumber: 'abodu123',
        },
      ],
      links: [
        { href: 'https://example.com', rel: 'first' },
        { href: 'https://example.com', rel: 'first' },
      ],
      page: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 12, totalPages: 12 },
    },
    required: [],
  })
  .openapi('ListPaymentsResponseV3')

const ListPaymentsResponseV4Schema = z
  .object({
    content: z.array(PaymentResponseV4Schema).exactOptional(),
    links: z.array(GetPayoutsResponseV3LinksSchema).exactOptional(),
    page: ListPaymentsResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payments Response Object',
    example: {
      content: [
        {
          accountName: 'My Account Name',
          accountNumber: '123123232323',
          autoWithdrawnReasonCode: 'autoWithdrawnReasonCode',
          countryCode: 'US',
          events: [
            {
              accountName: 'accountName',
              accountNumber: 'accountNumber',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'iban',
              paymentAmount: 1299,
              paymentCurrency: 'EUR',
              principal: 'principal',
              routingNumber: 'routingNumber',
              scheduledAt: '2000-01-23T04:56:07.000+00:00',
              scheduledBy: 'Aphra Behn',
              scheduledFor: '2000-01-23T04:56:07.000+00:00',
              sourceAmount: 1299,
              sourceCurrency: 'EUR',
            },
            {
              accountName: 'accountName',
              accountNumber: 'accountNumber',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'iban',
              paymentAmount: 1299,
              paymentCurrency: 'EUR',
              principal: 'principal',
              routingNumber: 'routingNumber',
              scheduledAt: '2000-01-23T04:56:07.000+00:00',
              scheduledBy: 'Aphra Behn',
              scheduledFor: '2000-01-23T04:56:07.000+00:00',
              sourceAmount: 1299,
              sourceCurrency: 'EUR',
            },
          ],
          filenameReference: 'file ref',
          fundingStatus: 'fundingStatus',
          iban: 'DE89 3704 0044 0532 0130 00',
          individualIdentificationNumber: '1231231adf',
          invertedRate: 3.616076749251911,
          isPaymentCcyBaseCcy: true,
          payeeAddressCountryCode: 'US',
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentAmount: 7,
          paymentChannelId: '123asdf',
          paymentChannelName: 'My Payment Channel',
          paymentCurrency: 'EUR',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentMemo: 'Payment memo',
          paymentMetadata: 'sample metadata',
          paymentScheme: 'paymentScheme',
          paymentTrackingReference: 'paymentTrackingReference',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payorPaymentId: '123123asdf',
          payout: {
            payoutFrom: {
              dbaName: 'dbaName',
              payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              payorName: 'payorName',
              principal: 'principal',
              principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            },
            payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            payoutTo: {
              dbaName: 'dbaName',
              payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              payorName: 'payorName',
              principal: 'principal',
              principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            },
          },
          postInstructFxInfo: {
            fxMode: 'MANUAL',
            fxStatus: 'INITIATED',
            fxStatusUpdatedAt: '2000-01-23T04:56:07.000+00:00',
            fxTransactionReference: 'AB123GHI',
          },
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          railsBatchId: 'railsBatchId',
          railsId: 'asdf123',
          railsPaymentId: 'railsPaymentId',
          rate: 9.301444243932576,
          rejectionReason: 'rejectionReason',
          remoteId: 'aasdf123',
          remoteSystemId: 'REMOTE_SYSTEM_ID',
          remoteSystemPaymentId: 'remoteSystemPaymentId',
          returnCost: 1232,
          returnReason: 'Some Reason Value',
          routingNumber: '123123123123',
          schedule: {
            notificationsEnabled: true,
            scheduleStatus: 'SCHEDULED',
            scheduledAt: '2000-01-23T04:56:07.000+00:00',
            scheduledBy: 'Aphra Behn',
            scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
            scheduledFor: '2000-01-23T04:56:07.000+00:00',
          },
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAccountName: 'My Account',
          sourceAmount: 12345,
          sourceCurrency: 'EUR',
          status: 'status',
          submittedDateTime: '2000-01-23T04:56:07.000+00:00',
          traceNumber: 'abodu123',
          transmissionType: 'transmissionType',
          withdrawable: true,
          withdrawnReason: 'withdrawnReason',
        },
        {
          accountName: 'My Account Name',
          accountNumber: '123123232323',
          autoWithdrawnReasonCode: 'autoWithdrawnReasonCode',
          countryCode: 'US',
          events: [
            {
              accountName: 'accountName',
              accountNumber: 'accountNumber',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'iban',
              paymentAmount: 1299,
              paymentCurrency: 'EUR',
              principal: 'principal',
              routingNumber: 'routingNumber',
              scheduledAt: '2000-01-23T04:56:07.000+00:00',
              scheduledBy: 'Aphra Behn',
              scheduledFor: '2000-01-23T04:56:07.000+00:00',
              sourceAmount: 1299,
              sourceCurrency: 'EUR',
            },
            {
              accountName: 'accountName',
              accountNumber: 'accountNumber',
              eventDateTime: '2000-01-23T04:56:07.000+00:00',
              eventId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              eventType: 'eventType',
              iban: 'iban',
              paymentAmount: 1299,
              paymentCurrency: 'EUR',
              principal: 'principal',
              routingNumber: 'routingNumber',
              scheduledAt: '2000-01-23T04:56:07.000+00:00',
              scheduledBy: 'Aphra Behn',
              scheduledFor: '2000-01-23T04:56:07.000+00:00',
              sourceAmount: 1299,
              sourceCurrency: 'EUR',
            },
          ],
          filenameReference: 'file ref',
          fundingStatus: 'fundingStatus',
          iban: 'DE89 3704 0044 0532 0130 00',
          individualIdentificationNumber: '1231231adf',
          invertedRate: 3.616076749251911,
          isPaymentCcyBaseCcy: true,
          payeeAddressCountryCode: 'US',
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentAmount: 7,
          paymentChannelId: '123asdf',
          paymentChannelName: 'My Payment Channel',
          paymentCurrency: 'EUR',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          paymentMemo: 'Payment memo',
          paymentMetadata: 'sample metadata',
          paymentScheme: 'paymentScheme',
          paymentTrackingReference: 'paymentTrackingReference',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          payorPaymentId: '123123asdf',
          payout: {
            payoutFrom: {
              dbaName: 'dbaName',
              payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              payorName: 'payorName',
              principal: 'principal',
              principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            },
            payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            payoutTo: {
              dbaName: 'dbaName',
              payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
              payorName: 'payorName',
              principal: 'principal',
              principalId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
            },
          },
          postInstructFxInfo: {
            fxMode: 'MANUAL',
            fxStatus: 'INITIATED',
            fxStatusUpdatedAt: '2000-01-23T04:56:07.000+00:00',
            fxTransactionReference: 'AB123GHI',
          },
          quoteId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          railsBatchId: 'railsBatchId',
          railsId: 'asdf123',
          railsPaymentId: 'railsPaymentId',
          rate: 9.301444243932576,
          rejectionReason: 'rejectionReason',
          remoteId: 'aasdf123',
          remoteSystemId: 'REMOTE_SYSTEM_ID',
          remoteSystemPaymentId: 'remoteSystemPaymentId',
          returnCost: 1232,
          returnReason: 'Some Reason Value',
          routingNumber: '123123123123',
          schedule: {
            notificationsEnabled: true,
            scheduleStatus: 'SCHEDULED',
            scheduledAt: '2000-01-23T04:56:07.000+00:00',
            scheduledBy: 'Aphra Behn',
            scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
            scheduledFor: '2000-01-23T04:56:07.000+00:00',
          },
          sourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAccountName: 'My Account',
          sourceAmount: 12345,
          sourceCurrency: 'EUR',
          status: 'status',
          submittedDateTime: '2000-01-23T04:56:07.000+00:00',
          traceNumber: 'abodu123',
          transmissionType: 'transmissionType',
          withdrawable: true,
          withdrawnReason: 'withdrawnReason',
        },
      ],
      links: [
        { href: 'https://example.com', rel: 'first' },
        { href: 'https://example.com', rel: 'first' },
      ],
      page: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 12, totalPages: 12 },
    },
    required: [],
  })
  .openapi('ListPaymentsResponseV4')

const NotificationsV2Schema = z
  .object({ minimumBalance: z.int().exactOptional().openapi({ example: 120000 }) })
  .openapi({ example: { minimumBalance: 120000 }, required: [] })
  .openapi('NotificationsV2')

const SourceAccountResponseV2Schema = z
  .object({
    accountType: z.string().openapi({ example: 'FBO' }),
    autoTopUpConfig: AutoTopUpConfigV2Schema.exactOptional(),
    balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Decimal implied',
        example: 1203489,
      }),
    balanceVisible: z.boolean(),
    currency: z.string().length(3).exactOptional().openapi({ example: 'USD' }),
    customerId: z.string().nullable().exactOptional().openapi({ example: 'Joe Customer' }),
    fundingAccountId: z.uuid().nullable().exactOptional(),
    fundingRef: z.string().openapi({ example: 'a1b2c3d4' }),
    id: z.uuid().openapi({ description: 'Source Account Id' }),
    name: z.string().exactOptional().openapi({ example: 'MyAccountName' }),
    notifications: NotificationsV2Schema.exactOptional(),
    payorId: z.uuid().exactOptional(),
    physicalAccountId: z.uuid().exactOptional(),
    physicalAccountName: z.string().openapi({ example: 'VELO_FBO_MYBANKA_USD' }),
    pooled: z.boolean(),
    railsId: z.string().openapi({ example: 'BOA_RAIL' }),
  })
  .openapi({
    example: {
      accountType: 'FBO',
      autoTopUpConfig: { enabled: true, minBalance: 10000, targetBalance: 300000 },
      balance: 1203489,
      balanceVisible: true,
      currency: 'USD',
      customerId: 'Joe Customer',
      fundingAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      fundingRef: 'a1b2c3d4',
      id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      name: 'MyAccountName',
      notifications: { minimumBalance: 120000 },
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      physicalAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      physicalAccountName: 'VELO_FBO_MYBANKA_USD',
      pooled: true,
      railsId: 'BOA_RAIL',
    },
    required: [
      'accountType',
      'balanceVisible',
      'fundingRef',
      'id',
      'physicalAccountName',
      'pooled',
      'railsId',
    ],
  })
  .openapi('SourceAccountResponseV2')

const ListSourceAccountResponseV2LinksSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
      }),
    rel: z.string().exactOptional().openapi({ example: 'first' }),
  })
  .openapi({
    example: {
      href: 'https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
      rel: 'first',
    },
    required: [],
  })
  .openapi('ListSourceAccountResponseV2Links')

const ListSourceAccountResponseV2Schema = z
  .object({
    content: z.array(SourceAccountResponseV2Schema).exactOptional(),
    links: z.array(ListSourceAccountResponseV2LinksSchema).exactOptional(),
    page: PagedUserResponsePageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Source Accounts Response Object',
    example: {
      content: [
        {
          accountType: 'FBO',
          autoTopUpConfig: { enabled: true, minBalance: 10000, targetBalance: 300000 },
          balance: 1203489,
          balanceVisible: true,
          currency: 'USD',
          customerId: 'Joe Customer',
          fundingAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          fundingRef: 'a1b2c3d4',
          id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          name: 'MyAccountName',
          notifications: { minimumBalance: 120000 },
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          physicalAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          physicalAccountName: 'VELO_FBO_MYBANKA_USD',
          pooled: true,
          railsId: 'BOA_RAIL',
        },
        {
          accountType: 'FBO',
          autoTopUpConfig: { enabled: true, minBalance: 10000, targetBalance: 300000 },
          balance: 1203489,
          balanceVisible: true,
          currency: 'USD',
          customerId: 'Joe Customer',
          fundingAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          fundingRef: 'a1b2c3d4',
          id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          name: 'MyAccountName',
          notifications: { minimumBalance: 120000 },
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          physicalAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          physicalAccountName: 'VELO_FBO_MYBANKA_USD',
          pooled: true,
          railsId: 'BOA_RAIL',
        },
      ],
      links: [
        {
          href: 'https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
          rel: 'first',
        },
        {
          href: 'https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
          rel: 'first',
        },
      ],
      page: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 33, totalPages: 2 },
    },
    required: [],
  })
  .openapi('ListSourceAccountResponseV2')

const NotificationsV3Schema = z
  .object({ minimumBalance: z.int().exactOptional().openapi({ example: 120000 }) })
  .openapi({ example: { minimumBalance: 120000 }, required: [] })
  .openapi('NotificationsV3')

const SourceAccountResponseV3Schema = z
  .object({
    autoTopUpConfig: AutoTopUpConfigV3Schema.exactOptional(),
    balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Decimal implied',
        example: 1203489,
      }),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    customerId: z.string().nullable().exactOptional().openapi({ example: 'Joe Customer' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'An optional flag for whether the source account has been deleted. Only present in the response if true.',
      }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'An optional timestamp when the source account has been deleted. Only present in the response if deleted.',
        example: '2021-01-27T10:08:25.701Z',
      }),
    fundingRef: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The funding reference (will not be set for DECOUPLED accounts).',
        example: 'a1b2c3d4',
      }),
    id: z.uuid().openapi({ description: 'Source Account Id' }),
    name: z.string().exactOptional().openapi({ example: 'MyAccountName' }),
    notifications: NotificationsV3Schema.exactOptional(),
    payorId: z.uuid().exactOptional(),
    physicalAccountId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The physical account id (will not be set for DECOUPLED accounts).',
      }),
    physicalAccountName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The physical account name (will not be set for DECOUPLED accounts).',
        example: 'VELO_FBO_MYBANKA_USD',
      }),
    pooled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The pooled account flag (will not be set for DECOUPLED accounts).',
      }),
    railsId: z.string().openapi({ example: 'BOA_RAIL' }),
    type: z.string().openapi({ example: 'FBO' }),
    userDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'An optional flag for whether the source account has been deleted by a user. Only present in the response if true.',
      }),
  })
  .openapi({
    example: {
      autoTopUpConfig: {
        enabled: true,
        fundingAccountId: '640ab1bd-8a6a-4603-a83a-1edbc3ed5689',
        minBalance: 10000,
        targetBalance: 300000,
      },
      balance: 1203489,
      country: 'US',
      currency: 'USD',
      customerId: 'Joe Customer',
      deleted: true,
      deletedAt: '2021-01-27T10:08:25.701Z',
      fundingRef: 'a1b2c3d4',
      id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      name: 'MyAccountName',
      notifications: { minimumBalance: 120000 },
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      physicalAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      physicalAccountName: 'VELO_FBO_MYBANKA_USD',
      pooled: true,
      railsId: 'BOA_RAIL',
      type: 'FBO',
      userDeleted: true,
    },
    required: ['id', 'railsId', 'type'],
  })
  .openapi('SourceAccountResponseV3')

const ListSourceAccountResponseV3LinksSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
      }),
    rel: z.string().exactOptional().openapi({ example: 'first' }),
  })
  .openapi({
    example: {
      href: 'https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
      rel: 'first',
    },
    required: [],
  })
  .openapi('ListSourceAccountResponseV3Links')

const ListSourceAccountResponseV3Schema = z
  .object({
    content: z.array(SourceAccountResponseV3Schema).exactOptional(),
    links: z.array(ListSourceAccountResponseV3LinksSchema).exactOptional(),
    page: PagedUserResponsePageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Source Accounts Response Object',
    example: {
      content: [
        {
          autoTopUpConfig: {
            enabled: true,
            fundingAccountId: '640ab1bd-8a6a-4603-a83a-1edbc3ed5689',
            minBalance: 10000,
            targetBalance: 300000,
          },
          balance: 1203489,
          country: 'US',
          currency: 'USD',
          customerId: 'Joe Customer',
          deleted: true,
          deletedAt: '2021-01-27T10:08:25.701Z',
          fundingRef: 'a1b2c3d4',
          id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          name: 'MyAccountName',
          notifications: { minimumBalance: 120000 },
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          physicalAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          physicalAccountName: 'VELO_FBO_MYBANKA_USD',
          pooled: true,
          railsId: 'BOA_RAIL',
          type: 'FBO',
          userDeleted: true,
        },
        {
          autoTopUpConfig: {
            enabled: true,
            fundingAccountId: '640ab1bd-8a6a-4603-a83a-1edbc3ed5689',
            minBalance: 10000,
            targetBalance: 300000,
          },
          balance: 1203489,
          country: 'US',
          currency: 'USD',
          customerId: 'Joe Customer',
          deleted: true,
          deletedAt: '2021-01-27T10:08:25.701Z',
          fundingRef: 'a1b2c3d4',
          id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          name: 'MyAccountName',
          notifications: { minimumBalance: 120000 },
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          physicalAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          physicalAccountName: 'VELO_FBO_MYBANKA_USD',
          pooled: true,
          railsId: 'BOA_RAIL',
          type: 'FBO',
          userDeleted: true,
        },
      ],
      links: [
        {
          href: 'https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
          rel: 'first',
        },
        {
          href: 'https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc',
          rel: 'first',
        },
      ],
      page: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 33, totalPages: 2 },
    },
    required: [],
  })
  .openapi('ListSourceAccountResponseV3')

const PingSchema = SourceEventSchema.openapi({
  description: 'Ping event for testing the webhook integration. Can be initiated via the Web UI.',
}).openapi('Ping')

const PayoutPayorIdsSchema = z
  .object({
    payoutFromPayorId: z
      .uuid()
      .openapi({
        description: 'The ID of the Payor providing the source account for the payout',
        example: '35198f08-1c7b-4a91-8921-cd760ed92bca',
      }),
    payoutToPayorId: z
      .uuid()
      .openapi({
        description: 'The ID of the Payor that owns the Payee (on behalf of)',
        example: '3eb99144-6ebf-4b02-9483-ad86b2ff1bca',
      }),
    submittingPayorId: z
      .uuid()
      .openapi({
        description: 'The ID of the Payor that is submitting the payout',
        example: 'ac207f97-663c-4429-9d57-ba5b35d6672d',
      }),
  })
  .openapi({
    description: 'Holder for all payor ids associated with a Payout',
    required: ['payoutFromPayorId', 'payoutToPayorId', 'submittingPayorId'],
  })
  .openapi('PayoutPayorIds')

const PaymentEventAllOfSchema = z
  .object({
    paymentId: z
      .uuid()
      .openapi({
        description: 'ID of this payment within the Velo platform',
        example: 'cbd9280f-8fde-4190-b014-979d88f3ec54',
      }),
    payorPaymentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this payment in the payors system',
        example: 'ourpayment-id12345',
      }),
    payoutPayorIds: PayoutPayorIdsSchema.exactOptional(),
  })
  .openapi({ required: ['paymentId'] })
  .openapi('PaymentEventAllOf')

const PaymentEventSchema = SourceEventSchema.and(PaymentEventAllOfSchema)
  .openapi({ description: 'Base type for all Payment Events' })
  .openapi('PaymentEvent')

const PaymentStatusChangedAllOfSchema = z
  .object({
    status: z
      .string()
      .openapi({
        description:
          'The new status of the payment. One of "SUBMITTED" "ACCEPTED" "REJECTED" "ACCEPTED_BY_RAILS" "CONFIRMED" "RETURNED" "WITHDRAWN"',
        example: 'ACCEPTED',
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('PaymentStatusChangedAllOf')

const PaymentStatusChangedSchema = PaymentEventSchema.and(PaymentStatusChangedAllOfSchema)
  .openapi({ description: 'Base type for all payment status changed events' })
  .openapi('PaymentStatusChanged')

const PaymentRejectedOrReturnedAllOfSchema = z
  .object({
    reasonCode: z
      .string()
      .openapi({
        description: 'The Velo code that indicates why the payment was rejected or returned',
        example: 'VE0001',
      }),
    reasonMessage: z
      .string()
      .openapi({
        description: 'The description of why the payment was rejected or returned',
        example: 'VE0001',
      }),
  })
  .openapi({ required: ['reasonCode', 'reasonMessage'] })
  .openapi('PaymentRejectedOrReturnedAllOf')

const PaymentRejectedOrReturnedSchema = PaymentStatusChangedSchema.and(
  PaymentRejectedOrReturnedAllOfSchema,
)
  .openapi({ description: 'Base type for all rejection or return payment events' })
  .openapi('PaymentRejectedOrReturned')

const PayeeEventAllOfReasonsSchema = z
  .object({
    code: z.string().openapi({ example: '00001' }),
    message: z.string().openapi({ example: 'payment channel disabled' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('PayeeEventAllOfReasons')

const PayeeEventAllOfSchema = z
  .object({
    payeeId: z
      .uuid()
      .openapi({
        description: 'ID of this payee within the Velo platform',
        example: 'cbd9280f-8fde-4190-b014-979d88f3ec54',
      }),
    reasons: z
      .array(PayeeEventAllOfReasonsSchema)
      .exactOptional()
      .openapi({ description: 'The reasons for the event notification.' }),
  })
  .openapi({ required: ['payeeId'] })
  .openapi('PayeeEventAllOf')

const PayeeEventSchema = SourceEventSchema.and(PayeeEventAllOfSchema)
  .openapi({ description: 'Base type for all Payee Events' })
  .openapi('PayeeEvent')

const OnboardingStatusChangedSchema = PayeeEventSchema.and(z.object({}))
  .openapi({ description: 'Base type for all onboarding status changed events' })
  .openapi('OnboardingStatusChanged')

const PayableStatusChangedSchema = PayeeEventSchema.and(z.object({}))
  .openapi({ description: 'Base type for all payable status changed events' })
  .openapi('PayableStatusChanged')

const PayeeDetailsChangedSchema = PayeeEventSchema.and(z.object({}))
  .openapi({ description: 'Base type for all payee details changed events' })
  .openapi('PayeeDetailsChanged')

const NotificationSchema = z
  .object({
    apiVersion: z
      .string()
      .openapi({ description: 'The API version of the notification schema', example: '1' }),
    category: z
      .string()
      .openapi({
        description:
          'The category that the notification relates to. One of "payment", "payee", "debit" or "system"',
        example: 'payment',
      }),
    eventName: z
      .string()
      .openapi({
        description: 'The name of event that led to this notification',
        example: 'payment.accepted',
      }),
    sequenceNumber: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'This is a payor specific sequence number starting at 1 for the first notification sent',
        example: 1234,
      }),
    source: z
      .xor([
        PingSchema,
        PaymentStatusChangedSchema,
        PaymentRejectedOrReturnedSchema,
        OnboardingStatusChangedSchema,
        PayableStatusChangedSchema,
        PayeeDetailsChangedSchema,
        DebitStatusChangedSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'One of the available set of source event payloads',
        discriminator: {
          mapping: {
            debit_status_changed: '#/components/schemas/DebitStatusChanged',
            onboarding_status_changed: '#/components/schemas/OnboardingStatusChanged',
            payable_status_changed: '#/components/schemas/PayableStatusChanged',
            payee_details_changed: '#/components/schemas/PayeeDetailsChanged',
            payment_rejected_or_returned: '#/components/schemas/PaymentRejectedOrReturned',
            payment_status_changed: '#/components/schemas/PaymentStatusChanged',
            ping: '#/components/schemas/Ping',
          },
          propertyName: 'sourceType',
        },
        example: {
          createdAt: '2020-06-18T15:09:42Z',
          eventId: '270ab907-27ec-4b83-8028-0ff432bbdec4',
          paymentId: 'cbd9280f-8fde-4190-b014-979d88f3ec54',
          payorPaymentId: 'ourpayment-id12345',
          payoutPayorIds: {
            payoutFromPayorId: 'ac207f97-663c-4429-9d57-ba5b35d6672d',
            payoutToPayorId: 'ac207f97-663c-4429-9d57-ba5b35d6672d',
            submittingPayorId: 'ac207f97-663c-4429-9d57-ba5b35d6672d',
          },
          status: 'ACCEPTED',
          type: 'payment_status_changed',
        },
      }),
  })
  .openapi({ required: ['apiVersion', 'category', 'eventName', 'sequenceNumber'] })
  .openapi('Notification')

const OfacStatusV4Schema = z
  .string()
  .openapi({ description: 'OFAC status. One of the following values: PENDING, PASSED, FAILED' })
  .openapi('OfacStatusV4')

const OnboardedStatusV3Schema = z
  .string()
  .openapi({
    description:
      'Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED',
  })
  .openapi('OnboardedStatusV3')

const OnboardedStatusV3_2Schema = z
  .string()
  .openapi({
    description:
      'Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED',
  })
  .openapi('OnboardedStatusV3_2')

const OnboardedStatusV4Schema = z
  .string()
  .openapi({
    description:
      'Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED',
  })
  .openapi('OnboardedStatusV4')

const OnboardedStatusV4_2Schema = z
  .string()
  .openapi({
    description:
      'Payee onboarded status. One of the following value: CREATED, INVITED, REGISTERED, ONBOARDED',
  })
  .openapi('OnboardedStatusV4_2')

const PageForResponseSchema = z
  .object({
    numberOfElements: z.int32().exactOptional(),
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({
    example: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    required: [],
  })
  .openapi('PageForResponse')

const PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponseSchema = z
  .object({
    content: z.array(FundingPayorStatusAuditResponseSchema).exactOptional(),
    links: z
      .array(LinkForResponseSchema)
      .exactOptional()
      .openapi({ xml: { name: 'link', namespace: 'http://www.w3.org/2005/Atom' } }),
    page: PageForResponseSchema.exactOptional(),
  })
  .openapi({
    example: {
      content: [
        {
          amount: 2,
          currency: 'USD',
          fundingId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          status: 'status',
        },
        {
          amount: 2,
          currency: 'USD',
          fundingId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          status: 'status',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    },
    required: [],
  })
  .openapi('PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse')

const PayeeInvitationStatusResponseV3Schema = z
  .object({
    gracePeriodEndDate: z.iso.date().exactOptional().openapi({ example: '2019-01-20' }),
    invitationStatus: z
      .string()
      .openapi({
        description:
          'Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED',
      }),
    payeeId: z.uuid().openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9' }),
  })
  .openapi({
    example: {
      gracePeriodEndDate: '2019-01-20T00:00:00.000+0000',
      invitationStatus: 'invitationStatus',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
    },
    required: ['invitationStatus', 'payeeId'],
  })
  .openapi('PayeeInvitationStatusResponseV3')

const PagedPayeeInvitationStatusResponseV3Schema = z
  .object({
    content: z.array(PayeeInvitationStatusResponseV3Schema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeInvitationStatusResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payees Invitation Status Object',
    example: {
      content: [
        {
          gracePeriodEndDate: '2019-01-20T00:00:00.000+0000',
          invitationStatus: 'invitationStatus',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        },
        {
          gracePeriodEndDate: '2019-01-20T00:00:00.000+0000',
          invitationStatus: 'invitationStatus',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    },
    required: [],
  })
  .openapi('PagedPayeeInvitationStatusResponseV3')

const PayeeInvitationStatusResponseV4Schema = z
  .object({
    gracePeriodEndDate: z.iso.date().exactOptional().openapi({ example: '2019-01-20' }),
    invitationStatus: z
      .string()
      .openapi({
        description:
          'Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED',
      }),
    payeeId: z.uuid().openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9' }),
  })
  .openapi({
    example: {
      gracePeriodEndDate: '2019-01-20T00:00:00.000+0000',
      invitationStatus: 'invitationStatus',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
    },
    required: ['invitationStatus', 'payeeId'],
  })
  .openapi('PayeeInvitationStatusResponseV4')

const PagedPayeeInvitationStatusResponseV4Schema = z
  .object({
    content: z.array(PayeeInvitationStatusResponseV4Schema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeInvitationStatusResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payees Invitation Status Object',
    example: {
      content: [
        {
          gracePeriodEndDate: '2019-01-20T00:00:00.000+0000',
          invitationStatus: 'invitationStatus',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        },
        {
          gracePeriodEndDate: '2019-01-20T00:00:00.000+0000',
          invitationStatus: 'invitationStatus',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    },
    required: [],
  })
  .openapi('PagedPayeeInvitationStatusResponseV4')

const PagedPayeeResponseV3PageSchema = z
  .object({
    numberOfElements: z.int().exactOptional().openapi({ example: 10 }),
    page: z.int().exactOptional().openapi({ example: 10 }),
    pageSize: z.int().exactOptional().openapi({ example: 10 }),
    totalElements: z.int().exactOptional().openapi({ example: 10 }),
    totalPages: z.int().exactOptional().openapi({ example: 10 }),
  })
  .openapi({
    example: { numberOfElements: 10, page: 10, pageSize: 10, totalElements: 10, totalPages: 10 },
    required: [],
  })
  .openapi('PagedPayeeResponseV3Page')

const PagedPayeeResponseV3SummarySchema = z
  .object({
    totalInvitedCount: z.int().exactOptional().openapi({ example: 10 }),
    totalOnboardedCount: z.int().exactOptional().openapi({ example: 10 }),
    totalPayeesCount: z.int().exactOptional().openapi({ example: 10 }),
    totalRegisteredCount: z.int().exactOptional().openapi({ example: 10 }),
    totalWatchlistFailedCount: z.int().exactOptional().openapi({ example: 0 }),
  })
  .openapi({
    example: {
      totalInvitedCount: 10,
      totalOnboardedCount: 10,
      totalPayeesCount: 10,
      totalRegisteredCount: 10,
      totalWatchlistFailedCount: 0,
    },
    required: [],
  })
  .openapi('PagedPayeeResponseV3Summary')

const PagedPayeeResponseV3Schema = z
  .object({
    content: z.array(GetPayeeListResponseV3Schema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeResponseV3PageSchema.exactOptional(),
    summary: PagedPayeeResponseV3SummarySchema.exactOptional(),
  })
  .openapi({
    description: 'List Payees Response Object',
    example: {
      content: [
        {
          company: { name: 'ABC Group Plc', operatingName: 'ABC Co' },
          country: 'US',
          created: '2019-01-20T09:00:00Z',
          disabled: true,
          disabledComment: 'reason for disabled',
          disabledUpdatedTimestamp: '2019-01-20T09:00:00Z',
          displayName: 'ABC',
          email: 'bob@example.com',
          individual: {
            name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
          },
          language: 'en-US',
          onboardedStatus: 'onboardedStatus',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
          payeeType: 'payeeType',
          payorRefs: [
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
          ],
          watchlistOverrideComment: 'Example reason for the watchlist status being overridden',
          watchlistStatus: 'watchlistStatus',
          watchlistStatusUpdatedTimestamp: '2019-01-20T09:00:00+00:00',
        },
        {
          company: { name: 'ABC Group Plc', operatingName: 'ABC Co' },
          country: 'US',
          created: '2019-01-20T09:00:00Z',
          disabled: true,
          disabledComment: 'reason for disabled',
          disabledUpdatedTimestamp: '2019-01-20T09:00:00Z',
          displayName: 'ABC',
          email: 'bob@example.com',
          individual: {
            name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
          },
          language: 'en-US',
          onboardedStatus: 'onboardedStatus',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
          payeeType: 'payeeType',
          payorRefs: [
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
          ],
          watchlistOverrideComment: 'Example reason for the watchlist status being overridden',
          watchlistStatus: 'watchlistStatus',
          watchlistStatusUpdatedTimestamp: '2019-01-20T09:00:00+00:00',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 10, page: 10, pageSize: 10, totalElements: 10, totalPages: 10 },
      summary: {
        totalInvitedCount: 10,
        totalOnboardedCount: 10,
        totalPayeesCount: 10,
        totalRegisteredCount: 10,
        totalWatchlistFailedCount: 0,
      },
    },
    required: [],
  })
  .openapi('PagedPayeeResponseV3')

const PagedPayeeResponseV4Schema = z
  .object({
    content: z.array(GetPayeeListResponseV4Schema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeResponseV3PageSchema.exactOptional(),
    summary: PagedPayeeResponseV3SummarySchema.exactOptional(),
  })
  .openapi({
    description: 'List Payees Response Object',
    example: {
      content: [
        {
          company: { name: 'ABC Group Plc', operatingName: 'ABC Co' },
          country: 'US',
          created: '2019-01-20T09:00:00Z',
          disabled: true,
          disabledComment: 'reason for disabled',
          disabledUpdatedTimestamp: '2019-01-20T09:00:00Z',
          displayName: 'ABC',
          email: 'bob@example.com',
          individual: {
            name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
          },
          language: 'en-US',
          onboardedStatus: 'onboardedStatus',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
          payeeType: 'payeeType',
          payorRefs: [
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
          ],
          watchlistOverrideComment: 'Example reason for the watchlist status being overridden',
          watchlistStatus: 'watchlistStatus',
          watchlistStatusUpdatedTimestamp: '2019-01-20T09:00:00+00:00',
        },
        {
          company: { name: 'ABC Group Plc', operatingName: 'ABC Co' },
          country: 'US',
          created: '2019-01-20T09:00:00Z',
          disabled: true,
          disabledComment: 'reason for disabled',
          disabledUpdatedTimestamp: '2019-01-20T09:00:00Z',
          displayName: 'ABC',
          email: 'bob@example.com',
          individual: {
            name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
          },
          language: 'en-US',
          onboardedStatus: 'onboardedStatus',
          payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
          payeeType: 'payeeType',
          payorRefs: [
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
            {
              invitationStatus: 'invitationStatus',
              invitationStatusTimestamp: '2019-01-20T09:00:00Z',
              payableIssues: [
                { code: '3', message: 'payee-disabled' },
                { code: '3', message: 'payee-disabled' },
              ],
              payableStatus: true,
              paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
              payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
              remoteId: 'uniqueIdForRemoteEntity',
            },
          ],
          watchlistOverrideComment: 'Example reason for the watchlist status being overridden',
          watchlistStatus: 'watchlistStatus',
          watchlistStatusUpdatedTimestamp: '2019-01-20T09:00:00+00:00',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 10, page: 10, pageSize: 10, totalElements: 10, totalPages: 10 },
      summary: {
        totalInvitedCount: 10,
        totalOnboardedCount: 10,
        totalPayeesCount: 10,
        totalRegisteredCount: 10,
        totalWatchlistFailedCount: 0,
      },
    },
    required: [],
  })
  .openapi('PagedPayeeResponseV4')

const PayoutCompanyV3Schema = z
  .object({ companyName: z.string().openapi({ example: 'ACME Anvils PLC' }) })
  .openapi({ example: { companyName: 'ACME Anvils PLC' }, required: ['companyName'] })
  .openapi('PayoutCompanyV3')

const PayoutNameV3Schema = z
  .object({
    firstName: z.string().openapi({ example: 'Fred' }),
    lastName: z.string().openapi({ example: 'Flintstone' }),
  })
  .openapi({
    example: { firstName: 'Fred', lastName: 'Flintstone' },
    required: ['firstName', 'lastName'],
  })
  .openapi('PayoutNameV3')

const PayoutIndividualV3Schema = z
  .object({ name: PayoutNameV3Schema })
  .openapi({ example: { name: { firstName: 'Fred', lastName: 'Flintstone' } }, required: ['name'] })
  .openapi('PayoutIndividualV3')

const PayoutPayeeV3Schema = z
  .object({
    company: PayoutCompanyV3Schema.exactOptional(),
    individual: PayoutIndividualV3Schema.exactOptional(),
    payeeId: z.uuid(),
  })
  .openapi({
    description:
      'Payee data associated with a payment. Either individual or company must be populated',
    example: {
      company: { companyName: 'ACME Anvils PLC' },
      individual: { name: { firstName: 'Fred', lastName: 'Flintstone' } },
      payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
    },
    required: ['payeeId'],
  })
  .openapi('PayoutPayeeV3')

const PaymentV3Schema = z
  .object({
    amount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The amount of the payment in minor units', example: 10000 }),
    autoWithdrawnReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Populated only if the payment was automatically withdrawn during instruction for being invalid',
        example: 'VE0003',
      }),
    currency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({ description: 'The currency that the payment was made in', example: 'USD' }),
    payee: PayoutPayeeV3Schema.exactOptional(),
    paymentId: z
      .uuid()
      .openapi({
        description: 'The id of the payment',
        example: '859af785-223b-4d5b-a708-5fa57f006dbb',
      }),
    paymentMemo: z
      .string()
      .min(0)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          '<p>Any value here will override the memo value in the parent payout</p>\n<p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>\n',
        example: 'INV00112',
      }),
    paymentMetadata: z
      .string()
      .min(0)
      .max(512)
      .exactOptional()
      .openapi({
        description:
          '<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>\n<p>The structure of the data will be dictated by the requirements of the payment rails</p>\n',
        example: 'invoiceeId_123|abc001:12345|xyz002:4567',
      }),
    payorPaymentId: z
      .string()
      .min(0)
      .max(40)
      .exactOptional()
      .openapi({
        description: 'A reference identifier for the payor for the given payee payment',
        example: '123211321ABSD',
      }),
    railsId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the 3rd party system involved in making this payment',
        example: 'SVB',
      }),
    remoteId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The remoteId supplied by the payor that identifies the payee',
        example: 'remoteIdVal123',
      }),
    remoteSystemId: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description: '<p>The identifier for the remote payments system if not Velo</p>\n',
        example: 'OB012',
      }),
    sourceAccountName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the source account to debit the payment from',
        example: 'Chase Bank Account',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current status of payment. One of the following values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, BANK_PAYMENT_REQUESTED',
        example: 'AWAITING_FUNDS',
      }),
    transmissionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The transmission method of the payment. One of the following values: ACH, SAME_DAY_ACH, WIRE, LOCAL, SWIFT',
        example: 'LOCAL',
      }),
    withdrawable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can this paynent be withdrawn', example: false }),
  })
  .openapi({
    example: {
      amount: 10000,
      autoWithdrawnReasonCode: 'VE0003',
      currency: 'USD',
      payee: {
        company: { companyName: 'ACME Anvils PLC' },
        individual: { name: { firstName: 'Fred', lastName: 'Flintstone' } },
        payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      },
      paymentId: '859af785-223b-4d5b-a708-5fa57f006dbb',
      paymentMemo: 'INV00112',
      paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
      payorPaymentId: '123211321ABSD',
      railsId: 'SVB',
      remoteId: 'remoteIdVal123',
      remoteSystemId: 'OB012',
      sourceAccountName: 'Chase Bank Account',
      status: 'AWAITING_FUNDS',
      transmissionType: 'LOCAL',
      withdrawable: false,
    },
    required: ['paymentId'],
  })
  .openapi('PaymentV3')

const PagedPaymentsResponseV3Schema = z
  .object({
    content: z.array(PaymentV3Schema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeInvitationStatusResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payees Response Object',
    example: {
      content: [
        {
          amount: 10000,
          autoWithdrawnReasonCode: 'VE0003',
          currency: 'USD',
          payee: {
            company: { companyName: 'ACME Anvils PLC' },
            individual: { name: { firstName: 'Fred', lastName: 'Flintstone' } },
            payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          },
          paymentId: '859af785-223b-4d5b-a708-5fa57f006dbb',
          paymentMemo: 'INV00112',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          railsId: 'SVB',
          remoteId: 'remoteIdVal123',
          remoteSystemId: 'OB012',
          sourceAccountName: 'Chase Bank Account',
          status: 'AWAITING_FUNDS',
          transmissionType: 'LOCAL',
          withdrawable: false,
        },
        {
          amount: 10000,
          autoWithdrawnReasonCode: 'VE0003',
          currency: 'USD',
          payee: {
            company: { companyName: 'ACME Anvils PLC' },
            individual: { name: { firstName: 'Fred', lastName: 'Flintstone' } },
            payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          },
          paymentId: '859af785-223b-4d5b-a708-5fa57f006dbb',
          paymentMemo: 'INV00112',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          railsId: 'SVB',
          remoteId: 'remoteIdVal123',
          remoteSystemId: 'OB012',
          sourceAccountName: 'Chase Bank Account',
          status: 'AWAITING_FUNDS',
          transmissionType: 'LOCAL',
          withdrawable: false,
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    },
    required: [],
  })
  .openapi('PagedPaymentsResponseV3')

const RoleSchema = z
  .object({
    name: z.string().openapi({ description: 'the name of the role', example: 'payor.admin' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Role')

const UserResponseSchema = z
  .object({
    companyName: z
      .string()
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'The payor or payee company name or null if the user is not a payor or payee user\n',
        example: 'Acme Corp',
      }),
    email: z
      .email()
      .exactOptional()
      .openapi({ description: 'the email address of the user', example: 'foo@example.com' }),
    entityId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The payorId or payeeId or null if the user is not a payor or payee user\n',
        example: '7fffa261-ac68-49e6-b605-d24a444d9206',
      }),
    firstName: z.string().min(1).max(128).exactOptional().openapi({ example: 'John' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The id of the user',
        example: '8bbf301c-948f-4445-b411-357eec53e441',
      }),
    lastName: z.string().min(1).max(128).exactOptional().openapi({ example: 'Doe' }),
    lockedOut: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true the user is currently locked out and unable to log in',
        example: true,
      }),
    lockedOutTimestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A timestamp showing when the user was locked out\nIf null then the user is not currently locked out\n',
      }),
    mfaStatus: z
      .enum(['REGISTERED', 'UNREGISTERED'])
      .exactOptional()
      .openapi({ description: 'The status of the MFA device', example: 'REGISTERED' }),
    mfaType: z
      .enum(['SMS', 'YUBIKEY', 'TOTP'])
      .exactOptional()
      .openapi({ description: 'The type of the MFA device', example: 'TOTP' }),
    primaryContactNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .exactOptional()
      .openapi({ description: 'The main contact number for the user\n', example: '11235555555' }),
    roles: z
      .array(RoleSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The role(s) for the user\n', example: ['payor.admin'] }),
    secondaryContactNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .exactOptional()
      .openapi({
        description: 'The secondary contact number for the user\n',
        example: '11235555550',
      }),
    smsNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .exactOptional()
      .openapi({
        description: 'The phone number of a device that the user can receive sms messages on\n',
        example: '11235555555',
      }),
    status: z
      .enum(['ENABLED', 'DISABLED', 'PENDING'])
      .exactOptional()
      .openapi({
        description:
          'The status of the user\nwhen the user has been invited but not yet enrolled they will have a PENDING status\n',
        example: 'ENABLED',
      }),
    userType: z
      .enum(['BACKOFFICE', 'PAYOR', 'PAYEE'])
      .exactOptional()
      .openapi({
        description: 'Indicates the type of user. Could be BACKOFFICE, PAYOR or PAYEE.',
        example: 'PAYOR',
      }),
  })
  .openapi({
    example: {
      companyName: 'Acme Corp',
      email: 'foo@example.com',
      entityId: '7fffa261-ac68-49e6-b605-d24a444d9206',
      firstName: 'John',
      id: '8bbf301c-948f-4445-b411-357eec53e441',
      lastName: 'Doe',
      lockedOut: true,
      lockedOutTimestamp: '2000-01-23T04:56:07.000+00:00',
      mfaStatus: 'REGISTERED',
      mfaType: 'TOTP',
      primaryContactNumber: '11235555555',
      roles: ['payor.admin'],
      secondaryContactNumber: '11235555550',
      smsNumber: '11235555555',
      status: 'ENABLED',
      userType: 'PAYOR',
    },
    required: [],
  })
  .openapi('UserResponse')

const PagedUserResponseLinksSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({
        example: 'https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10',
      }),
    rel: z.string().exactOptional().openapi({ example: 'first' }),
  })
  .openapi({
    example: {
      href: 'https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10',
      rel: 'first',
    },
    required: [],
  })
  .openapi('PagedUserResponseLinks')

const PagedUserResponseSchema = z
  .object({
    content: z.array(UserResponseSchema).exactOptional(),
    links: z.array(PagedUserResponseLinksSchema).exactOptional(),
    page: PagedUserResponsePageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Users Response Object',
    example: {
      content: [
        {
          companyName: 'Acme Corp',
          email: 'foo@example.com',
          entityId: '7fffa261-ac68-49e6-b605-d24a444d9206',
          firstName: 'John',
          id: '8bbf301c-948f-4445-b411-357eec53e441',
          lastName: 'Doe',
          lockedOut: true,
          lockedOutTimestamp: '2000-01-23T04:56:07.000+00:00',
          mfaStatus: 'REGISTERED',
          mfaType: 'TOTP',
          primaryContactNumber: '11235555555',
          roles: ['payor.admin'],
          secondaryContactNumber: '11235555550',
          smsNumber: '11235555555',
          status: 'ENABLED',
          userType: 'PAYOR',
        },
        {
          companyName: 'Acme Corp',
          email: 'foo@example.com',
          entityId: '7fffa261-ac68-49e6-b605-d24a444d9206',
          firstName: 'John',
          id: '8bbf301c-948f-4445-b411-357eec53e441',
          lastName: 'Doe',
          lockedOut: true,
          lockedOutTimestamp: '2000-01-23T04:56:07.000+00:00',
          mfaStatus: 'REGISTERED',
          mfaType: 'TOTP',
          primaryContactNumber: '11235555555',
          roles: ['payor.admin'],
          secondaryContactNumber: '11235555550',
          smsNumber: '11235555555',
          status: 'ENABLED',
          userType: 'PAYOR',
        },
      ],
      links: [
        {
          href: 'https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10',
          rel: 'first',
        },
        {
          href: 'https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10',
          rel: 'first',
        },
      ],
      page: { numberOfElements: 12, page: 1, pageSize: 25, totalElements: 33, totalPages: 2 },
    },
    required: [],
  })
  .openapi('PagedUserResponse')

const PasswordRequestSchema = z
  .object({
    password: z
      .string()
      .min(8)
      .max(128)
      .openapi({ description: 'a password that passes validation', example: 'My_strong_password' }),
  })
  .openapi({ example: { password: 'My_strong_password' }, required: ['password'] })
  .openapi('PasswordRequest')

const PayeeAddressV3Schema = z
  .object({
    city: z.string().min(2).max(100).openapi({ example: 'Key West' }),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    countyOrProvince: z
      .string()
      .min(2)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ example: 'FL' }),
    line1: z.string().min(2).max(255).openapi({ example: '500 Duval St' }),
    line2: z.string().min(0).max(255).nullable().exactOptional(),
    line3: z.string().min(0).max(255).nullable().exactOptional(),
    line4: z.string().min(0).max(255).nullable().exactOptional(),
    zipOrPostcode: z
      .string()
      .min(2)
      .max(30)
      .nullable()
      .exactOptional()
      .openapi({ example: '33945' }),
  })
  .openapi({
    example: {
      city: 'Key West',
      country: 'US',
      countyOrProvince: 'FL',
      line1: '500 Duval St',
      line2: 'line2',
      line3: 'line3',
      line4: 'line4',
      zipOrPostcode: '33945',
    },
    required: ['city', 'country', 'line1'],
  })
  .openapi('PayeeAddressV3')

const PayeeAddressV4Schema = z
  .object({
    city: z.string().min(2).max(100).openapi({ example: 'Key West' }),
    country: z.string().min(2).max(50).openapi({ example: 'US' }),
    countyOrProvince: z
      .string()
      .min(2)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ example: 'FL' }),
    line1: z.string().min(2).max(255).openapi({ example: '500 Duval St' }),
    line2: z.string().min(0).max(255).nullable().exactOptional(),
    line3: z.string().min(0).max(255).nullable().exactOptional(),
    line4: z.string().min(0).max(255).nullable().exactOptional(),
    zipOrPostcode: z
      .string()
      .min(2)
      .max(30)
      .nullable()
      .exactOptional()
      .openapi({ example: '33945' }),
  })
  .openapi({
    example: {
      city: 'Key West',
      country: 'US',
      countyOrProvince: 'FL',
      line1: '500 Duval St',
      line2: 'line2',
      line3: 'line3',
      line4: 'line4',
      zipOrPostcode: '33945',
    },
    required: ['city', 'country', 'line1'],
  })
  .openapi('PayeeAddressV4')

const PayeeDeltaV3Schema = z
  .object({
    dbaName: z.string().exactOptional().openapi({ example: 'Payee DBA Name' }),
    displayName: z.string().exactOptional().openapi({ example: 'Payee1' }),
    email: z.email().nullable().exactOptional().openapi({ example: 'payee1@example.com' }),
    onboardedStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED',
      }),
    payeeCountry: z.string().exactOptional().openapi({ example: 'US' }),
    payeeId: z.uuid().openapi({ readOnly: true }),
    remoteId: z.string().min(1).max(100).openapi({ example: 'payee_1' }),
  })
  .openapi({
    example: {
      dbaName: 'Payee DBA Name',
      displayName: 'Payee1',
      email: 'payee1@example.com',
      onboardedStatus: 'onboardedStatus',
      payeeCountry: 'US',
      payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      remoteId: 'payee_1',
    },
    required: ['payeeId', 'remoteId'],
  })
  .openapi('PayeeDeltaV3')

const PayeeDeltaResponseV3LinksSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000',
      }),
    rel: z.string().exactOptional().openapi({ example: 'first' }),
  })
  .openapi({
    example: {
      href: 'http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000',
      rel: 'first',
    },
    required: [],
  })
  .openapi('PayeeDeltaResponseV3Links')

const PayeeDeltaResponseV3PageSchema = z
  .object({
    numberOfElements: z.int().exactOptional().openapi({ example: 2 }),
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 25 }),
    totalElements: z.int().exactOptional().openapi({ example: 2 }),
    totalPages: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({
    example: { numberOfElements: 2, page: 1, pageSize: 25, totalElements: 2, totalPages: 1 },
    required: [],
  })
  .openapi('PayeeDeltaResponseV3Page')

const PayeeDeltaResponseV3Schema = z
  .object({
    content: z.array(PayeeDeltaV3Schema).exactOptional(),
    links: z.array(PayeeDeltaResponseV3LinksSchema).exactOptional(),
    page: PayeeDeltaResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payee Changes Response Object',
    example: {
      content: [
        {
          dbaName: 'Payee DBA Name',
          displayName: 'Payee1',
          email: 'payee1@example.com',
          onboardedStatus: 'onboardedStatus',
          payeeCountry: 'US',
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          remoteId: 'payee_1',
        },
        {
          dbaName: 'Payee DBA Name',
          displayName: 'Payee1',
          email: 'payee1@example.com',
          onboardedStatus: 'onboardedStatus',
          payeeCountry: 'US',
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          remoteId: 'payee_1',
        },
      ],
      links: [
        {
          href: 'http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000',
          rel: 'first',
        },
        {
          href: 'http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000',
          rel: 'first',
        },
      ],
      page: { numberOfElements: 2, page: 1, pageSize: 25, totalElements: 2, totalPages: 1 },
    },
    required: [],
  })
  .openapi('PayeeDeltaResponseV3')

const PayeeDeltaV4Schema = z
  .object({
    dbaName: z.string().exactOptional().openapi({ example: 'Payee DBA Name' }),
    displayName: z.string().exactOptional().openapi({ example: 'Payee1' }),
    email: z.email().nullable().exactOptional().openapi({ example: 'payee1@example.com' }),
    onboardedStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Payee onboarded status. One of the following value: CREATED, INVITED, REGISTERED, ONBOARDED',
      }),
    payeeCountry: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    payeeId: z.uuid().openapi({ readOnly: true }),
    remoteId: z.string().min(1).max(100).openapi({ example: 'payee_1' }),
  })
  .openapi({
    example: {
      dbaName: 'Payee DBA Name',
      displayName: 'Payee1',
      email: 'payee1@example.com',
      onboardedStatus: 'onboardedStatus',
      payeeCountry: 'US',
      payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      remoteId: 'payee_1',
    },
    required: ['payeeId', 'remoteId'],
  })
  .openapi('PayeeDeltaV4')

const PayeeDeltaResponseV4LinksSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000',
      }),
    rel: z.string().exactOptional().openapi({ example: 'first' }),
  })
  .openapi({
    example: {
      href: 'http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000',
      rel: 'first',
    },
    required: [],
  })
  .openapi('PayeeDeltaResponseV4Links')

const PayeeDeltaResponseV4Schema = z
  .object({
    content: z.array(PayeeDeltaV4Schema).exactOptional(),
    links: z.array(PayeeDeltaResponseV4LinksSchema).exactOptional(),
    page: PayeeDeltaResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payee Changes Response Object',
    example: {
      content: [
        {
          dbaName: 'Payee DBA Name',
          displayName: 'Payee1',
          email: 'payee1@example.com',
          onboardedStatus: 'onboardedStatus',
          payeeCountry: 'US',
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          remoteId: 'payee_1',
        },
        {
          dbaName: 'Payee DBA Name',
          displayName: 'Payee1',
          email: 'payee1@example.com',
          onboardedStatus: 'onboardedStatus',
          payeeCountry: 'US',
          payeeId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          remoteId: 'payee_1',
        },
      ],
      links: [
        {
          href: 'http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000',
          rel: 'first',
        },
        {
          href: 'http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000',
          rel: 'first',
        },
      ],
      page: { numberOfElements: 2, page: 1, pageSize: 25, totalElements: 2, totalPages: 1 },
    },
    required: [],
  })
  .openapi('PayeeDeltaResponseV4')

const PayeeDetailResponseV3Schema = z
  .object({
    acceptTermsAndConditionsTimestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the payee last accepted T&Cs',
        example: '2019-01-20T09:00:00Z',
        readOnly: true,
      }),
    address: PayeeAddressV3Schema.exactOptional(),
    cellphoneNumber: z.string().exactOptional().openapi({ example: '1234567890' }),
    challenge: ChallengeV3Schema.exactOptional(),
    company: CompanyV3Schema.exactOptional(),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    disabled: z.boolean().exactOptional(),
    disabledComment: z.string().exactOptional().openapi({ example: 'reason for disabled' }),
    disabledUpdatedTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    displayName: z.string().exactOptional().openapi({ example: 'Bob' }),
    email: z.email().nullable().exactOptional().openapi({ example: 'bob@example.com' }),
    enhancedKycCompleted: z.boolean().exactOptional(),
    gracePeriodEndDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20', readOnly: true }),
    individual: IndividualV3Schema.exactOptional(),
    kycCompletedTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    marketingOptInDecision: z.boolean().exactOptional(),
    marketingOptInTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00' }),
    onboardedStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED',
      }),
    pausePayment: z.boolean().exactOptional(),
    pausePaymentTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00' }),
    payeeId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9', readOnly: true }),
    payeeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of Payee. One of the following values: Individual, Company' }),
    payorRefs: z
      .array(PayeePayorRefV3Schema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    watchlistOverrideComment: z
      .string()
      .exactOptional()
      .openapi({ example: 'watchlist override comment' }),
    watchlistOverrideExpiresAtTimestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    watchlistStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED',
      }),
    watchlistStatusUpdatedTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00', readOnly: true }),
  })
  .openapi({
    example: {
      acceptTermsAndConditionsTimestamp: '2019-01-20T09:00:00Z',
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      cellphoneNumber: '1234567890',
      challenge: { description: 'challenge description', value: 'challenge test' },
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
      country: 'US',
      created: '2019-01-20T09:00:00Z',
      disabled: true,
      disabledComment: 'reason for disabled',
      disabledUpdatedTimestamp: '2019-01-20T09:00:00Z',
      displayName: 'Bob',
      email: 'bob@example.com',
      enhancedKycCompleted: true,
      gracePeriodEndDate: '2019-01-20T00:00:00.000+0000',
      individual: {
        dateOfBirth: '1985-01-01',
        name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'A', title: 'Mr' },
        nationalIdentification: 'AB123456C',
      },
      kycCompletedTimestamp: '2019-01-20T09:00:00+00:00',
      language: 'en-US',
      marketingOptInDecision: true,
      marketingOptInTimestamp: '2019-01-20T09:00:00+00:00',
      onboardedStatus: 'onboardedStatus',
      pausePayment: true,
      pausePaymentTimestamp: '2019-01-20T09:00:00+00:00',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
      payeeType: 'payeeType',
      payorRefs: [
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
      ],
      watchlistOverrideComment: 'watchlist override comment',
      watchlistOverrideExpiresAtTimestamp: '2019-01-20T09:00:00Z',
      watchlistStatus: 'watchlistStatus',
      watchlistStatusUpdatedTimestamp: '2019-01-20T09:00:00+00:00',
    },
    required: [],
  })
  .openapi('PayeeDetailResponseV3')

const PayeeDetailResponseV4Schema = z
  .object({
    acceptTermsAndConditionsTimestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the payee last accepted T&Cs',
        example: '2019-01-20T09:00:00Z',
        readOnly: true,
      }),
    address: PayeeAddressV4Schema.exactOptional(),
    cellphoneNumber: z.string().exactOptional().openapi({ example: '1234567890' }),
    challenge: ChallengeV4Schema.exactOptional(),
    company: CompanyV4Schema.exactOptional(),
    country: z.string().exactOptional().openapi({ example: 'US' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    disabled: z.boolean().exactOptional(),
    disabledComment: z.string().exactOptional().openapi({ example: 'reason for disabled' }),
    disabledUpdatedTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    displayName: z.string().exactOptional().openapi({ example: 'Bob' }),
    email: z.email().nullable().exactOptional().openapi({ example: 'bob@example.com' }),
    enhancedKycCompleted: z.boolean().exactOptional(),
    gracePeriodEndDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20', readOnly: true }),
    individual: IndividualV4Schema.exactOptional(),
    kycCompletedTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    marketingOptInDecision: z.boolean().exactOptional(),
    marketingOptInTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00' }),
    onboardedStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED',
      }),
    pausePayment: z.boolean().exactOptional(),
    pausePaymentTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00' }),
    payeeId: z
      .uuid()
      .exactOptional()
      .openapi({ example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9', readOnly: true }),
    payeeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of Payee. One of the following values: Individual, Company' }),
    payorRefs: z
      .array(PayeePayorRefV4Schema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    watchlistOverrideComment: z
      .string()
      .exactOptional()
      .openapi({ example: 'watchlist override comment' }),
    watchlistOverrideExpiresAtTimestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00Z' }),
    watchlistStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED',
      }),
    watchlistStatusUpdatedTimestamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2019-01-20T09:00:00+00:00', readOnly: true }),
  })
  .openapi({
    example: {
      acceptTermsAndConditionsTimestamp: '2019-01-20T09:00:00Z',
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      cellphoneNumber: '1234567890',
      challenge: { description: 'challenge description', value: '11984567' },
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
      country: 'US',
      created: '2019-01-20T09:00:00Z',
      disabled: true,
      disabledComment: 'reason for disabled',
      disabledUpdatedTimestamp: '2019-01-20T09:00:00Z',
      displayName: 'Bob',
      email: 'bob@example.com',
      enhancedKycCompleted: true,
      gracePeriodEndDate: '2019-01-20T00:00:00.000+0000',
      individual: {
        dateOfBirth: '1985-01-01',
        name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'A', title: 'Mr' },
        nationalIdentification: 'AB123456C',
      },
      kycCompletedTimestamp: '2019-01-20T09:00:00+00:00',
      language: 'en-US',
      marketingOptInDecision: true,
      marketingOptInTimestamp: '2019-01-20T09:00:00+00:00',
      onboardedStatus: 'onboardedStatus',
      pausePayment: true,
      pausePaymentTimestamp: '2019-01-20T09:00:00+00:00',
      payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
      payeeType: 'payeeType',
      payorRefs: [
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
        {
          invitationStatus: 'invitationStatus',
          invitationStatusTimestamp: '2019-01-20T09:00:00Z',
          payableIssues: [
            { code: '3', message: 'payee-disabled' },
            { code: '3', message: 'payee-disabled' },
          ],
          payableStatus: true,
          paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
          payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
          remoteId: 'uniqueIdForRemoteEntity',
        },
      ],
      watchlistOverrideComment: 'watchlist override comment',
      watchlistOverrideExpiresAtTimestamp: '2019-01-20T09:00:00Z',
      watchlistStatus: 'watchlistStatus',
      watchlistStatusUpdatedTimestamp: '2019-01-20T09:00:00+00:00',
    },
    required: [],
  })
  .openapi('PayeeDetailResponseV4')

const PayeeTypeSchema = z
  .enum(['COMPANY', 'INDIVIDUAL'])
  .openapi({ example: 'COMPANY' })
  .openapi('PayeeType')

const PayeeType_2Schema = z
  .string()
  .openapi({ description: 'Type of Payee. One of the following values: Individual, Company' })
  .openapi('PayeeType_2')

const PayeeUserSelfUpdateRequestSchema = z
  .object({
    email: z
      .email()
      .nullable()
      .exactOptional()
      .openapi({ description: 'the email address of the user', example: 'foo@example.com' }),
    firstName: z.string().min(1).max(128).nullable().exactOptional().openapi({ example: 'John' }),
    lastName: z.string().min(1).max(128).nullable().exactOptional().openapi({ example: 'Doe' }),
    primaryContactNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The main contact number for the user\n', example: '11235555555' }),
    secondaryContactNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The secondary contact number for the user\n',
        example: '11235555550',
      }),
    smsNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The phone number of a device that the user can receive sms messages on\n',
        example: '11235555555',
      }),
  })
  .openapi({
    description:
      '<p>All properties are optional</p>\n<p>Only provided properties will be updated</p>\n<p>Use null to null out a property that is allowed to be nullable</p>\n',
    example: {
      email: 'foo@example.com',
      firstName: 'John',
      lastName: 'Doe',
      primaryContactNumber: '11235555555',
      secondaryContactNumber: '11235555550',
      smsNumber: '11235555555',
    },
    required: [],
  })
  .openapi('PayeeUserSelfUpdateRequest')

const PaymentAuditCurrencySchema = z
  .string()
  .length(3)
  .openapi({ description: 'ISO-4217 3 character currency code', example: 'EUR' })
  .openapi('PaymentAuditCurrency')

const PaymentAuditCurrencyV3Schema = z
  .string()
  .length(3)
  .openapi({ description: 'ISO 3 character currency code' })
  .openapi('PaymentAuditCurrencyV3')

const PaymentChannelRuleSchema = z
  .object({
    displayName: z.string().openapi({ description: 'User friendly name', example: 'Account Name' }),
    displayOrder: z.int().exactOptional(),
    element: z
      .string()
      .openapi({
        description:
          '<p>the rule element</p>\n<p>will match a given element name for a payment channel configuration\n',
        example: 'accountName',
      }),
    maxLength: z
      .int()
      .exactOptional()
      .openapi({ description: 'maximum length of the element data', example: 50 }),
    minLength: z
      .int()
      .exactOptional()
      .openapi({ description: 'mininum length of the element data', example: 5 }),
    required: z.boolean().openapi({ description: 'is this element required' }),
    validation: z
      .string()
      .openapi({ description: 'a regex to validate the element data', example: '^[0-9]{6,11}$' }),
  })
  .openapi({
    description:
      'Rules that will get applied when creating or updating a payment channel for the given country',
    example: {
      displayName: 'Account Name',
      displayOrder: 0,
      element: 'accountName',
      maxLength: 50,
      minLength: 5,
      required: true,
      validation: '^[0-9]{6,11}$',
    },
    required: ['displayName', 'element', 'required', 'validation'],
  })
  .openapi('PaymentChannelRule')

const PaymentChannelCountrySchema = z
  .object({
    isoCountryCode: z
      .string()
      .openapi({ description: 'The ISO code for the country', example: 'US' }),
    rules: z
      .array(PaymentChannelRuleSchema)
      .openapi({ description: 'The rules for the given country' }),
  })
  .openapi({
    example: {
      isoCountryCode: 'US',
      rules: [
        {
          displayName: 'Account Name',
          displayOrder: 0,
          element: 'accountName',
          maxLength: 50,
          minLength: 5,
          required: true,
          validation: '^[0-9]{6,11}$',
        },
        {
          displayName: 'Account Name',
          displayOrder: 0,
          element: 'accountName',
          maxLength: 50,
          minLength: 5,
          required: true,
          validation: '^[0-9]{6,11}$',
        },
      ],
    },
    required: ['isoCountryCode', 'rules'],
  })
  .openapi('PaymentChannelCountry')

const PaymentChannelRulesResponseSchema = z
  .object({ bank: z.array(PaymentChannelCountrySchema).exactOptional() })
  .openapi({
    example: {
      bank: [
        {
          isoCountryCode: 'US',
          rules: [
            {
              displayName: 'Account Name',
              displayOrder: 0,
              element: 'accountName',
              maxLength: 50,
              minLength: 5,
              required: true,
              validation: '^[0-9]{6,11}$',
            },
            {
              displayName: 'Account Name',
              displayOrder: 0,
              element: 'accountName',
              maxLength: 50,
              minLength: 5,
              required: true,
              validation: '^[0-9]{6,11}$',
            },
          ],
        },
        {
          isoCountryCode: 'US',
          rules: [
            {
              displayName: 'Account Name',
              displayOrder: 0,
              element: 'accountName',
              maxLength: 50,
              minLength: 5,
              required: true,
              validation: '^[0-9]{6,11}$',
            },
            {
              displayName: 'Account Name',
              displayOrder: 0,
              element: 'accountName',
              maxLength: 50,
              minLength: 5,
              required: true,
              validation: '^[0-9]{6,11}$',
            },
          ],
        },
      ],
    },
    required: [],
  })
  .openapi('PaymentChannelRulesResponse')

const PaymentDeltaSchema = z
  .object({
    paymentAmount: z.int().nullable().exactOptional(),
    paymentCurrency: z.string().nullable().exactOptional(),
    paymentId: z.uuid().openapi({ readOnly: true }),
    payorPaymentId: z.string().nullable().exactOptional(),
    payoutId: z.uuid().openapi({ readOnly: true }),
    sourceAmount: z.int().nullable().exactOptional(),
    sourceCurrency: z.string().nullable().exactOptional(),
    status: z.string().nullable().exactOptional(),
  })
  .openapi({
    example: {
      paymentAmount: 0,
      paymentCurrency: 'paymentCurrency',
      paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorPaymentId: 'payorPaymentId',
      payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      sourceAmount: 6,
      sourceCurrency: 'sourceCurrency',
      status: 'status',
    },
    required: ['paymentId', 'payoutId'],
  })
  .openapi('PaymentDelta')

const PaymentDeltaResponseSchema = z
  .object({
    content: z.array(PaymentDeltaSchema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeInvitationStatusResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payment Changes Response Object',
    example: {
      content: [
        {
          paymentAmount: 0,
          paymentCurrency: 'paymentCurrency',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorPaymentId: 'payorPaymentId',
          payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAmount: 6,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
        },
        {
          paymentAmount: 0,
          paymentCurrency: 'paymentCurrency',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorPaymentId: 'payorPaymentId',
          payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAmount: 6,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    },
    required: [],
  })
  .openapi('PaymentDeltaResponse')

const PaymentDeltaV1Schema = z
  .object({
    paymentAmount: z.int().nullable().exactOptional(),
    paymentCurrency: z.string().nullable().exactOptional(),
    paymentId: z.uuid().openapi({ readOnly: true }),
    payorPaymentId: z.string().nullable().exactOptional(),
    payoutId: z.uuid().openapi({ readOnly: true }),
    sourceAmount: z.int().nullable().exactOptional(),
    sourceCurrency: z.string().nullable().exactOptional(),
    status: z.string().nullable().exactOptional(),
  })
  .openapi({
    example: {
      paymentAmount: 0,
      paymentCurrency: 'paymentCurrency',
      paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorPaymentId: 'payorPaymentId',
      payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      sourceAmount: 6,
      sourceCurrency: 'sourceCurrency',
      status: 'status',
    },
    required: ['paymentId', 'payoutId'],
  })
  .openapi('PaymentDeltaV1')

const PaymentDeltaResponseV1Schema = z
  .object({
    content: z.array(PaymentDeltaV1Schema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeInvitationStatusResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Payment Changes Response Object',
    example: {
      content: [
        {
          paymentAmount: 0,
          paymentCurrency: 'paymentCurrency',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorPaymentId: 'payorPaymentId',
          payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAmount: 6,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
        },
        {
          paymentAmount: 0,
          paymentCurrency: 'paymentCurrency',
          paymentId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorPaymentId: 'payorPaymentId',
          payoutId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          sourceAmount: 6,
          sourceCurrency: 'sourceCurrency',
          status: 'status',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    },
    required: [],
  })
  .openapi('PaymentDeltaResponseV1')

const PaymentRailsSchema = z
  .string()
  .openapi({ description: 'The id of the payment rails' })
  .openapi('PaymentRails')

const PayorAddressSchema = z
  .object({
    city: z.string().min(2).max(100).openapi({ example: 'Key West' }),
    country: z.string().min(2).max(50).openapi({ example: 'US' }),
    countyOrProvince: z
      .string()
      .min(2)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ example: 'FL' }),
    line1: z.string().min(2).max(255).openapi({ example: '500 Duval St' }),
    line2: z.string().min(0).max(255).nullable().exactOptional(),
    line3: z.string().min(0).max(255).nullable().exactOptional(),
    line4: z.string().min(0).max(255).nullable().exactOptional(),
    zipOrPostcode: z
      .string()
      .min(2)
      .max(30)
      .nullable()
      .exactOptional()
      .openapi({ example: '33945' }),
  })
  .openapi({
    example: {
      city: 'Key West',
      country: 'US',
      countyOrProvince: 'FL',
      line1: '500 Duval St',
      line2: 'line2',
      line3: 'line3',
      line4: 'line4',
      zipOrPostcode: '33945',
    },
    required: ['city', 'country', 'line1'],
  })
  .openapi('PayorAddress')

const PayorAddressV2Schema = z
  .object({
    city: z.string().min(2).max(100).openapi({ example: 'Key West' }),
    country: z.string().min(2).max(50).openapi({ example: 'US' }),
    countyOrProvince: z
      .string()
      .min(2)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ example: 'FL' }),
    line1: z.string().min(2).max(255).openapi({ example: '500 Duval St' }),
    line2: z.string().min(0).max(255).nullable().exactOptional(),
    line3: z.string().min(0).max(255).nullable().exactOptional(),
    line4: z.string().min(0).max(255).nullable().exactOptional(),
    zipOrPostcode: z
      .string()
      .min(2)
      .max(30)
      .nullable()
      .exactOptional()
      .openapi({ example: '33945' }),
  })
  .openapi({
    example: {
      city: 'Key West',
      country: 'US',
      countyOrProvince: 'FL',
      line1: '500 Duval St',
      line2: 'line2',
      line3: 'line3',
      line4: 'line4',
      zipOrPostcode: '33945',
    },
    required: ['city', 'country', 'line1'],
  })
  .openapi('PayorAddressV2')

const PayorAmlTransactionSchema = z
  .object({
    credit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    creditCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 4217 3 character currency code' }),
    dateFundingRequested: z.string().exactOptional(),
    debit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    debitCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 4217 3 character currency code' }),
    fundingType: z.string().exactOptional(),
    fxApplied: z.float64().exactOptional(),
    payeeEmail: z.email().exactOptional(),
    payeeName: z.string().exactOptional(),
    payeeType: z.string().exactOptional(),
    paymentAmount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    paymentCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 4217 3 character currency code' }),
    paymentMemo: z.string().exactOptional(),
    paymentRails: z.string().exactOptional(),
    paymentStatus: z.string().exactOptional(),
    payorPaymentId: z.string().exactOptional(),
    rejectReason: z.string().exactOptional(),
    remoteId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Remote ID of the Payee, set by Payor' }),
    reportTransactionType: z.string().exactOptional(),
    returnCode: z.string().exactOptional(),
    returnDescription: z.string().exactOptional(),
    returnFee: z.string().exactOptional(),
    returnFeeCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 4217 3 character currency code' }),
    returnFeeDescription: z.string().exactOptional(),
    sourceAccount: z.string().exactOptional(),
    transactionDate: z.iso.date().exactOptional(),
    transactionTime: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayorAmlTransaction')

const PayorAmlTransactionV3Schema = z
  .object({
    credit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    creditCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 4217 3 character currency code' }),
    dateFundingRequested: z.string().exactOptional(),
    debit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    debitCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 4217 3 character currency code' }),
    fundingType: z.string().exactOptional(),
    fxApplied: z.float64().exactOptional(),
    payeeType: z.string().exactOptional(),
    paymentAmount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    paymentCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 4217 3 character currency code' }),
    paymentMemo: z.string().exactOptional(),
    paymentRails: z.string().exactOptional(),
    paymentStatus: z.string().exactOptional(),
    payorPaymentId: z.string().exactOptional(),
    rejectReason: z.string().exactOptional(),
    remoteId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Remote ID of the Payee, set by Payor' }),
    reportTransactionType: z.string().exactOptional(),
    returnCode: z.string().exactOptional(),
    returnDescription: z.string().exactOptional(),
    returnFee: z.string().exactOptional(),
    returnFeeCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 4217 3 character currency code' }),
    returnFeeDescription: z.string().exactOptional(),
    sourceAccount: z.string().exactOptional(),
    transactionDate: z.iso.date().exactOptional(),
    transactionTime: z.string().exactOptional(),
  })
  .openapi({
    example: {
      credit: 6,
      creditCurrency: 'creditCurrency',
      dateFundingRequested: 'dateFundingRequested',
      debit: 0,
      debitCurrency: 'debitCurrency',
      fundingType: 'fundingType',
      fxApplied: 5.962133916683182,
      payeeType: 'payeeType',
      paymentAmount: 1,
      paymentCurrency: 'paymentCurrency',
      paymentMemo: 'paymentMemo',
      paymentRails: 'paymentRails',
      paymentStatus: 'paymentStatus',
      payorPaymentId: 'payorPaymentId',
      rejectReason: 'rejectReason',
      remoteId: 'remoteId',
      reportTransactionType: 'reportTransactionType',
      returnCode: 'returnCode',
      returnDescription: 'returnDescription',
      returnFee: 'returnFee',
      returnFeeCurrency: 'returnFeeCurrency',
      returnFeeDescription: 'returnFeeDescription',
      sourceAccount: 'sourceAccount',
      transactionDate: '2000-01-23',
      transactionTime: 'transactionTime',
    },
    required: [],
  })
  .openapi('PayorAmlTransactionV3')

const PayorBrandingResponseSchema = z
  .object({
    collectiveAlias: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'How the payor has chosen to refer to payees',
        example: 'Contractors',
      }),
    dbaName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: "The payor’s 'Doing Business As' name",
        example: 'Key West Imports',
      }),
    logoUrl: z
      .url()
      .openapi({
        description:
          '<p>The URL to use for this payor’s logo</p>\n<p>This will be an immutable system-generated URL</p>\n',
        example: 'https://images.example.com/450ecb66-df18-4d0c-b557-f718782775df/logo.png',
      }),
    payorName: z
      .string()
      .openapi({ description: 'The name of the payor', example: 'Key West Imports, Inc' }),
    supportContact: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The payor’s support contact address',
        example: 'support@example.com',
      }),
  })
  .openapi({
    example: {
      collectiveAlias: 'Contractors',
      dbaName: 'Key West Imports',
      logoUrl: 'https://images.example.com/450ecb66-df18-4d0c-b557-f718782775df/logo.png',
      payorName: 'Key West Imports, Inc',
      supportContact: 'support@example.com',
    },
    required: ['logoUrl', 'payorName'],
  })
  .openapi('PayorBrandingResponse')

const PayorCreateApiKeyRequestSchema = z
  .object({
    description: z
      .string()
      .min(2)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Description of the key.',
        example: 'Key for iOS mobile application',
      }),
    name: z
      .string()
      .min(2)
      .max(100)
      .openapi({ description: 'A name for the key.', example: 'iOS Key' }),
    roles: z
      .array(
        z.enum(['velo.payor.admin', 'velo.payor.support']).openapi({ description: 'Name of role' }),
      )
      .length(1)
      .openapi({
        description:
          '<p>A role to assign to the key.</p>\n<p>If you want your API key to have write access then assign the role velo.payor.admin</p>\n<p>A later version will change this property from a list to string</p>\n',
        example: ['velo.payor.admin'],
      }),
  })
  .openapi({
    example: {
      description: 'Key for iOS mobile application',
      name: 'iOS Key',
      roles: ['velo.payor.admin'],
    },
    required: ['name', 'roles'],
  })
  .openapi('PayorCreateApiKeyRequest')

const PayorCreateApiKeyResponseSchema = z
  .object({
    apiKey: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'API Key', example: '385d4506-e7dd-446e-a092-5f30b98e7b26' }),
    apiSecret: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'API Secret', example: 'f25767d9-342a-48ac-a788-0a7a38ae6fb3' }),
  })
  .openapi({
    example: {
      apiKey: '385d4506-e7dd-446e-a092-5f30b98e7b26',
      apiSecret: 'f25767d9-342a-48ac-a788-0a7a38ae6fb3',
    },
    required: [],
  })
  .openapi('PayorCreateApiKeyResponse')

const PayorCreateApplicationRequestSchema = z
  .object({
    description: z
      .string()
      .min(2)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Description of the application.',
        example: 'SAP Application integration',
      }),
    name: z
      .string()
      .min(2)
      .max(100)
      .openapi({ description: 'The name of the application.', example: 'SAP' }),
  })
  .openapi({
    example: { description: 'SAP Application integration', name: 'SAP' },
    required: ['name'],
  })
  .openapi('PayorCreateApplicationRequest')

const PayorEmailOptOutRequestSchema = z
  .object({ reminderEmailsOptOut: z.boolean() })
  .openapi({ example: { reminderEmailsOptOut: true }, required: ['reminderEmailsOptOut'] })
  .openapi('PayorEmailOptOutRequest')

const PayorLinksResponseLinksSchema = z
  .object({
    fromPayorId: z.uuid(),
    linkId: z.uuid(),
    linkType: z
      .string()
      .openapi({ description: 'The type of the link. One of the following values: PARENT_OF' }),
    toPayorId: z.uuid(),
  })
  .openapi({
    example: {
      fromPayorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      linkId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      linkType: 'linkType',
      toPayorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
    },
    required: ['fromPayorId', 'linkId', 'linkType', 'toPayorId'],
  })
  .openapi('PayorLinksResponseLinks')

const PayorLinksResponsePayorsSchema = z
  .object({
    kycState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current KYC state. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC',
      }),
    payorId: z.uuid(),
    payorName: z.string(),
    primaryContactEmail: z.string().exactOptional(),
  })
  .openapi({
    example: {
      kycState: 'kycState',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorName: 'payorName',
      primaryContactEmail: 'primaryContactEmail',
    },
    required: ['payorId', 'payorName'],
  })
  .openapi('PayorLinksResponsePayors')

const PayorLinksResponseSchema = z
  .object({
    links: z.array(PayorLinksResponseLinksSchema).exactOptional(),
    payors: z.array(PayorLinksResponsePayorsSchema).exactOptional(),
  })
  .openapi({
    description: 'List Payor Links Response Object',
    example: {
      links: [
        {
          fromPayorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          linkId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          linkType: 'linkType',
          toPayorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        },
        {
          fromPayorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          linkId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          linkType: 'linkType',
          toPayorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
        },
      ],
      payors: [
        {
          kycState: 'kycState',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          primaryContactEmail: 'primaryContactEmail',
        },
        {
          kycState: 'kycState',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorName: 'payorName',
          primaryContactEmail: 'primaryContactEmail',
        },
      ],
    },
    required: [],
  })
  .openapi('PayorLinksResponse')

const PayorLogoRequestSchema = z
  .object({ logo: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }) })
  .openapi({ required: [] })
  .openapi('PayorLogoRequest')

const TransmissionTypesSchema = z
  .object({
    ACH: z
      .boolean()
      .openapi({ description: 'Whether the Payor is allowed to pay via ACH', example: true }),
    SAME_DAY_ACH: z
      .boolean()
      .openapi({
        description: 'Whether the Payor is allowed to pay via same day ACH',
        example: true,
      }),
    WIRE: z
      .boolean()
      .openapi({ description: 'Whether the Payor is allowed to pay via wire', example: true }),
  })
  .openapi({
    example: { ACH: true, SAME_DAY_ACH: true, WIRE: true },
    required: ['ACH', 'SAME_DAY_ACH', 'WIRE'],
  })
  .openapi('TransmissionTypes')

const PayorV1Schema = z
  .object({
    address: PayorAddressSchema.exactOptional(),
    allowsLanguageChoice: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the payor allows language choice in the UI.' }),
    collectiveAlias: z
      .string()
      .exactOptional()
      .openapi({ description: 'How the payor has chosen to refer to payees.', example: 'Payee' }),
    dbaName: z
      .string()
      .exactOptional()
      .openapi({ description: "The payor’s 'Doing Business As' name.", example: 'Some Biz' }),
    fundingAccountAccountName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The funding account name to be used for the payor.',
        example: 'Example Corp BOA',
      }),
    fundingAccountAccountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The funding account number to be used for the payor.',
        example: '1234567890123',
      }),
    fundingAccountRoutingNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The funding account routing number to be used for the payor.',
        example: '123456789',
      }),
    includesReports: z.boolean().exactOptional(),
    kycState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC',
        example: 'PASSED_KYC',
        readOnly: true,
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payor’s language preference. Must be one of [EN, FR].',
        example: 'EN',
      }),
    manualLockout: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the payor has been manually locked by the backoffice.',
      }),
    maxMasterPayorAdmins: z.int().exactOptional(),
    payeeGracePeriodDays: z
      .int()
      .exactOptional()
      .openapi({ description: 'The grace period for paying payees in days.', readOnly: true }),
    payeeGracePeriodProcessingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether grace period processing is enabled.', readOnly: true }),
    payorId: z.uuid().exactOptional().openapi({ readOnly: true }),
    payorName: z
      .string()
      .openapi({ description: 'The name of the payor.', example: 'Example, Corp' }),
    primaryContactEmail: z
      .email()
      .exactOptional()
      .openapi({
        description: 'Primary contact email for the payor.',
        example: 'joe.buck@example.com',
      }),
    primaryContactName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of primary contact for the payor.', example: 'Joe Buck' }),
    primaryContactPhone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Primary contact phone number for the payor.',
        example: '123-123-1234',
      }),
    reminderEmailsOptOut: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the payor has opted-out of reminder emails being sent.',
        readOnly: true,
      }),
    supportContact: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payor’s support contact email address.',
        example: 'support@example.com',
      }),
    transmissionTypes: TransmissionTypesSchema.exactOptional(),
  })
  .openapi({
    example: {
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      allowsLanguageChoice: true,
      collectiveAlias: 'Payee',
      dbaName: 'Some Biz',
      fundingAccountAccountName: 'Example Corp BOA',
      fundingAccountAccountNumber: '1234567890123',
      fundingAccountRoutingNumber: '123456789',
      includesReports: true,
      kycState: 'PASSED_KYC',
      language: 'EN',
      manualLockout: true,
      maxMasterPayorAdmins: 6,
      payeeGracePeriodDays: 0,
      payeeGracePeriodProcessingEnabled: true,
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorName: 'Example, Corp',
      primaryContactEmail: 'joe.buck@example.com',
      primaryContactName: 'Joe Buck',
      primaryContactPhone: '123-123-1234',
      reminderEmailsOptOut: true,
      supportContact: 'support@example.com',
      transmissionTypes: { ACH: true, SAME_DAY_ACH: true, WIRE: true },
    },
    required: ['payorName'],
  })
  .openapi('PayorV1')

const TransmissionTypes_2Schema = z
  .object({
    ACH: z
      .boolean()
      .openapi({ description: 'Whether the Payor is allowed to pay via ACH', example: true }),
    SAME_DAY_ACH: z
      .boolean()
      .openapi({
        description: 'Whether the Payor is allowed to pay via same day ACH',
        example: true,
      }),
    WIRE: z
      .boolean()
      .openapi({ description: 'Whether the Payor is allowed to pay via wire', example: true }),
  })
  .openapi({
    example: { ACH: true, SAME_DAY_ACH: true, WIRE: true },
    required: ['ACH', 'SAME_DAY_ACH', 'WIRE'],
  })
  .openapi('TransmissionTypes_2')

const PayorV2Schema = z
  .object({
    address: PayorAddressV2Schema.exactOptional(),
    allowsLanguageChoice: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the payor allows language choice in the UI.' }),
    collectiveAlias: z
      .string()
      .exactOptional()
      .openapi({ description: 'How the payor has chosen to refer to payees.', example: 'Payee' }),
    dbaName: z
      .string()
      .exactOptional()
      .openapi({ description: "The payor’s 'Doing Business As' name.", example: 'Some Biz' }),
    includesReports: z.boolean().exactOptional(),
    kycState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC',
        example: 'PASSED_KYC',
        readOnly: true,
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payor’s language preference. Must be one of [EN, FR]',
        example: 'EN',
      }),
    managingPayees: z.boolean().exactOptional(),
    manualLockout: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the payor has been manually locked by the backoffice.',
      }),
    maxMasterPayorAdmins: z.int().exactOptional(),
    openBankingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is Open Banking supported for this payor' }),
    payeeGracePeriodDays: z
      .int()
      .exactOptional()
      .openapi({ description: 'The grace period for paying payees in days.', readOnly: true }),
    payeeGracePeriodProcessingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether grace period processing is enabled.', readOnly: true }),
    paymentRails: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the payment rails' }),
    payorId: z.uuid().openapi({ readOnly: true }),
    payorName: z
      .string()
      .openapi({ description: 'The name of the payor.', example: 'Example, Corp' }),
    payorXid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier that an external system uses to reference the payor in their system',
        example: 'ABC_201234',
      }),
    primaryContactEmail: z
      .email()
      .exactOptional()
      .openapi({
        description: 'Primary contact email for the payor.',
        example: 'joe.buck@example.com',
      }),
    primaryContactName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of primary contact for the payor.', example: 'Joe Buck' }),
    primaryContactPhone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Primary contact phone number for the payor.',
        example: '123-123-1234',
      }),
    provider: z
      .string()
      .exactOptional()
      .openapi({ description: 'The source of the payorXid, default is null which means Velo' }),
    reminderEmailsOptOut: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the payor has opted-out of reminder emails being sent.',
        readOnly: true,
      }),
    remoteSystemIds: z
      .array(z.string().openapi({ example: 'REMOTE_SYSTEM_ID' }))
      .exactOptional()
      .openapi({ description: 'The payor’s supported remote systems by id' }),
    supportContact: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payor’s support contact email address.',
        example: 'support@example.com',
      }),
    transmissionTypes: TransmissionTypes_2Schema.exactOptional(),
    usdTxnValueReportingThreshold: z
      .int()
      .exactOptional()
      .openapi({ description: 'USD in minor units', example: 1000000 }),
    wuCustomerId: z.string().exactOptional(),
  })
  .openapi({
    example: {
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      allowsLanguageChoice: true,
      collectiveAlias: 'Payee',
      dbaName: 'Some Biz',
      includesReports: true,
      kycState: 'PASSED_KYC',
      language: 'EN',
      managingPayees: true,
      manualLockout: true,
      maxMasterPayorAdmins: 6,
      openBankingEnabled: true,
      payeeGracePeriodDays: 0,
      payeeGracePeriodProcessingEnabled: true,
      paymentRails: 'paymentRails',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorName: 'Example, Corp',
      payorXid: 'ABC_201234',
      primaryContactEmail: 'joe.buck@example.com',
      primaryContactName: 'Joe Buck',
      primaryContactPhone: '123-123-1234',
      provider: 'provider',
      reminderEmailsOptOut: true,
      remoteSystemIds: ['REMOTE_SYSTEM_ID', 'REMOTE_SYSTEM_ID'],
      supportContact: 'support@example.com',
      transmissionTypes: { ACH: true, SAME_DAY_ACH: true, WIRE: true },
      usdTxnValueReportingThreshold: 1000000,
      wuCustomerId: 'wuCustomerId',
    },
    required: ['payorId', 'payorName'],
  })
  .openapi('PayorV2')

const PayoutScheduleV3Schema = z
  .object({
    notificationsEnabled: z.boolean(),
    scheduleStatus: z
      .string()
      .openapi({
        description:
          'The current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED',
        example: 'SCHEDULED',
      }),
    scheduledAt: z.iso.datetime({ offset: true }),
    scheduledByPrincipalId: z
      .string()
      .openapi({
        description: 'ID of the user or application that scheduled the payout',
        example: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
      }),
    scheduledFor: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description:
      'Details relating to a payout that was executed via a schedule or is still waiting to be executed',
    example: {
      notificationsEnabled: true,
      scheduleStatus: 'SCHEDULED',
      scheduledAt: '2000-01-23T04:56:07.000+00:00',
      scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
      scheduledFor: '2000-01-23T04:56:07.000+00:00',
    },
    required: [
      'notificationsEnabled',
      'scheduleStatus',
      'scheduledAt',
      'scheduledByPrincipalId',
      'scheduledFor',
    ],
  })
  .openapi('PayoutScheduleV3')

const PayoutStatusSchema = z
  .string()
  .openapi({
    description:
      'Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN',
  })
  .openapi('PayoutStatus')

const PayoutStatusV3Schema = z
  .string()
  .openapi({
    description:
      'Current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN',
  })
  .openapi('PayoutStatusV3')

const SourceAccountV3Schema = z
  .object({
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    sourceAccountId: z
      .uuid()
      .openapi({
        description: 'The id of the payout',
        example: 'cf81e490-4ab8-49c2-bd68-9d1e725480cb',
      }),
    sourceAccountName: z
      .string()
      .openapi({
        description: 'The name of the source account as referencec in the payout',
        example: 'AccountName',
      }),
    totalPayoutCost: z
      .int()
      .openapi({
        description:
          'The total amount (in mnor units) that will be debited from the source account for the payout',
        example: 1000000,
      }),
  })
  .openapi({
    example: {
      currency: 'USD',
      sourceAccountId: 'cf81e490-4ab8-49c2-bd68-9d1e725480cb',
      sourceAccountName: 'AccountName',
      totalPayoutCost: 1000000,
    },
    required: ['currency', 'sourceAccountId', 'sourceAccountName', 'totalPayoutCost'],
  })
  .openapi('SourceAccountV3')

const QuoteFxSummaryV3Schema = z
  .object({
    creationTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp of when the quote was created',
        example: '2022-10-30T09:45:09Z',
      }),
    expiryTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp for when the quote will expire',
        example: '2022-10-30T09:50:09Z',
      }),
    fundingStatus: z
      .string()
      .openapi({
        description:
          'Current status of the funding associated with this quote. One of the following values: UNFUNDED, INSTRUCTED, FUNDED',
        example: 'FUNDED',
      }),
    invertedRate: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The inverse conversion rate (from paymnent currency to source currency)',
        example: 1.12,
      }),
    paymentCurrency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    quoteId: z
      .uuid()
      .openapi({
        description: 'The id of the created quote',
        example: 'af80d455-29dd-4e72-a000-495a9829a7d0',
      }),
    rate: z
      .float32()
      .openapi({
        description: 'The conversion rate (from the source currency to the payment currency)',
        example: 0.89,
      }),
    sourceCurrency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the fx quote. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED, REJECTED',
        example: 'QUOTED',
      }),
    totalPaymentAmount: z
      .int()
      .openapi({
        description: 'The amount (in minor units) that the payee will receive',
        example: 890000,
      }),
    totalSourceAmount: z
      .int()
      .openapi({
        description: 'The amount (in minor units) that will be paid from the source account',
        example: 1000000,
      }),
  })
  .openapi({
    example: {
      creationTime: '2022-10-30T09:45:09Z',
      expiryTime: '2022-10-30T09:50:09Z',
      fundingStatus: 'FUNDED',
      invertedRate: 1.12,
      paymentCurrency: 'USD',
      quoteId: 'af80d455-29dd-4e72-a000-495a9829a7d0',
      rate: 0.89,
      sourceCurrency: 'USD',
      status: 'QUOTED',
      totalPaymentAmount: 890000,
      totalSourceAmount: 1000000,
    },
    required: [
      'creationTime',
      'fundingStatus',
      'paymentCurrency',
      'quoteId',
      'rate',
      'sourceCurrency',
      'status',
      'totalPaymentAmount',
      'totalSourceAmount',
    ],
  })
  .openapi('QuoteFxSummaryV3')

const RejectedPaymentV3Schema = z
  .object({
    amount: z
      .int()
      .openapi({ description: 'The amount of the payment in minor units', example: 10000 }),
    currencyType: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    lineNumber: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'If the payment was submitted in a csv payout then this will be the line number of the payment in the file',
        example: 34,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A more general rejection message than the reason property',
        example: "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
      }),
    paymentMetadata: z
      .string()
      .min(0)
      .max(512)
      .exactOptional()
      .openapi({
        description:
          '<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>\n<p>The structure of the data will be dictated by the requirements of the payment rails</p>\n',
        example: 'invoiceeId_123|abc001:12345|xyz002:4567',
      }),
    payorPaymentId: z
      .string()
      .min(0)
      .max(40)
      .openapi({
        description: 'A reference identifier for the payor for the given payee payment',
        example: '123211321ABSD',
      }),
    reason: z
      .string()
      .openapi({
        description: 'The reason for the payment being rejected',
        example: 'The payee has not been onboarded',
      }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason code as determined by Velo', example: 'VE1012' }),
    remoteId: z
      .string()
      .openapi({
        description: 'The remoteId supplied by the payor that identifies the payee',
        example: 'remoteIdVal123',
      }),
    remoteSystemId: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description: '<p>The identifier for the remote payments system if not Velo</p>\n',
        example: 'OB012',
      }),
    sourceAccountName: z
      .string()
      .openapi({
        description: 'The identifier of the source account to debit the payment from',
        example: 'Chase Bank Account',
      }),
  })
  .openapi({
    example: {
      amount: 10000,
      currencyType: 'USD',
      lineNumber: 34,
      message: "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
      paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
      payorPaymentId: '123211321ABSD',
      reason: 'The payee has not been onboarded',
      reasonCode: 'VE1012',
      remoteId: 'remoteIdVal123',
      remoteSystemId: 'OB012',
      sourceAccountName: 'Chase Bank Account',
    },
    required: [
      'amount',
      'currencyType',
      'payorPaymentId',
      'reason',
      'remoteId',
      'sourceAccountName',
    ],
  })
  .openapi('RejectedPaymentV3')

const PayoutSummaryResponseV3Schema = z
  .object({
    acceptedPayments: z.array(AcceptedPaymentV3Schema),
    accounts: z.array(SourceAccountV3Schema),
    fxSummaries: z.array(QuoteFxSummaryV3Schema),
    paymentsAccepted: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of payments that were accepted in the payout',
        example: 9,
      }),
    paymentsRejected: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of payments that were rejected in the payout',
        example: 1,
      }),
    paymentsSubmitted: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of payments that were submitted in the payout',
        example: 10,
      }),
    paymentsWithdrawn: z
      .int()
      .openapi({
        description: 'The number of payments that were withdrawn in the payout',
        example: 0,
      }),
    payoutId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The id of the payout',
        example: 'cf81e490-4ab8-49c2-bd68-9d1e725480cb',
      }),
    rejectedPayments: z.array(RejectedPaymentV3Schema),
    schedule: PayoutScheduleV3Schema.exactOptional(),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the payout (one of SUBMITTED, ACCEPTED, REJECTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, WITHDRAWN)',
        example: 'COMPLETED',
      }),
  })
  .openapi({
    example: {
      acceptedPayments: [
        {
          amount: 10000,
          currencyType: 'USD',
          paymentMemo: 'INV00112',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          railsId: 'SVB',
          remoteId: 'remoteId1234',
          remoteSystemId: 'OB012',
          sourceAccountName: 'Chase Bank Account',
        },
        {
          amount: 10000,
          currencyType: 'USD',
          paymentMemo: 'INV00112',
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          railsId: 'SVB',
          remoteId: 'remoteId1234',
          remoteSystemId: 'OB012',
          sourceAccountName: 'Chase Bank Account',
        },
      ],
      accounts: [
        {
          currency: 'USD',
          sourceAccountId: 'cf81e490-4ab8-49c2-bd68-9d1e725480cb',
          sourceAccountName: 'AccountName',
          totalPayoutCost: 1000000,
        },
        {
          currency: 'USD',
          sourceAccountId: 'cf81e490-4ab8-49c2-bd68-9d1e725480cb',
          sourceAccountName: 'AccountName',
          totalPayoutCost: 1000000,
        },
      ],
      fxSummaries: [
        {
          creationTime: '2022-10-30T09:45:09Z',
          expiryTime: '2022-10-30T09:50:09Z',
          fundingStatus: 'FUNDED',
          invertedRate: 1.12,
          paymentCurrency: 'USD',
          quoteId: 'af80d455-29dd-4e72-a000-495a9829a7d0',
          rate: 0.89,
          sourceCurrency: 'USD',
          status: 'QUOTED',
          totalPaymentAmount: 890000,
          totalSourceAmount: 1000000,
        },
        {
          creationTime: '2022-10-30T09:45:09Z',
          expiryTime: '2022-10-30T09:50:09Z',
          fundingStatus: 'FUNDED',
          invertedRate: 1.12,
          paymentCurrency: 'USD',
          quoteId: 'af80d455-29dd-4e72-a000-495a9829a7d0',
          rate: 0.89,
          sourceCurrency: 'USD',
          status: 'QUOTED',
          totalPaymentAmount: 890000,
          totalSourceAmount: 1000000,
        },
      ],
      paymentsAccepted: 9,
      paymentsRejected: 1,
      paymentsSubmitted: 10,
      paymentsWithdrawn: 0,
      payoutId: 'cf81e490-4ab8-49c2-bd68-9d1e725480cb',
      rejectedPayments: [
        {
          amount: 10000,
          currencyType: 'USD',
          lineNumber: 34,
          message: "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          reason: 'The payee has not been onboarded',
          reasonCode: 'VE1012',
          remoteId: 'remoteIdVal123',
          remoteSystemId: 'OB012',
          sourceAccountName: 'Chase Bank Account',
        },
        {
          amount: 10000,
          currencyType: 'USD',
          lineNumber: 34,
          message: "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
          payorPaymentId: '123211321ABSD',
          reason: 'The payee has not been onboarded',
          reasonCode: 'VE1012',
          remoteId: 'remoteIdVal123',
          remoteSystemId: 'OB012',
          sourceAccountName: 'Chase Bank Account',
        },
      ],
      schedule: {
        notificationsEnabled: true,
        scheduleStatus: 'SCHEDULED',
        scheduledAt: '2000-01-23T04:56:07.000+00:00',
        scheduledByPrincipalId: '8946953b-1e3b-49cf-9da4-b704cbb78f3e',
        scheduledFor: '2000-01-23T04:56:07.000+00:00',
      },
      status: 'COMPLETED',
    },
    required: [
      'acceptedPayments',
      'accounts',
      'fxSummaries',
      'paymentsWithdrawn',
      'rejectedPayments',
    ],
  })
  .openapi('PayoutSummaryResponseV3')

const PayoutTypeSchema = z
  .string()
  .openapi({
    description: 'The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF',
  })
  .openapi('PayoutType')

const PingResponseSchema = z
  .object({ id: z.uuid().exactOptional(), webhookId: z.uuid().exactOptional() })
  .openapi({
    example: {
      id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      webhookId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
    },
    required: [],
  })
  .openapi('PingResponse')

const PostInstructFxModeSchema = z
  .string()
  .openapi({
    description: 'The mode by which the FX rate is to be determined (MANUAL or AUTO)',
    example: 'MANUAL',
  })
  .openapi('PostInstructFxMode')

const PostInstructFxStatusSchema = z
  .string()
  .openapi({
    description:
      'The state to which the Post-Instruct FX process has reached (INITIATED or COMPLETED)',
    example: 'INITIATED',
  })
  .openapi('PostInstructFxStatus')

const QueryBatchResponseV3Schema = z
  .object({
    failureCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 2 }),
    failures: z.array(FailedSubmissionV3Schema).exactOptional(),
    pendingCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 2 }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Batch Status. One of the following values: SUBMITTED, ACCEPTED' }),
  })
  .openapi({
    example: {
      failureCount: 2,
      failures: [
        {
          failedSubmission: {
            address: {
              city: 'Key West',
              country: 'US',
              countyOrProvince: 'FL',
              line1: '500 Duval St',
              line2: 'line2',
              line3: 'line3',
              line4: 'line4',
              zipOrPostcode: '33945',
            },
            challenge: { description: 'challenge description', value: 'challenge test' },
            company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
            email: 'bob@example.com',
            individual: {
              dateOfBirth: '1970-05-20T00:00:00.000+0000',
              name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
              nationalIdentification: 'SA211123K',
            },
            language: 'en-US',
            payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
            paymentChannel: {
              accountName: 'My account',
              accountNumber: 'XXXXXX5678',
              countryCode: 'US',
              currency: 'USD',
              iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
              paymentChannelName: 'My Payment Channel',
              routingNumber: 'XXXXX6789',
            },
            payorRefs: [
              {
                invitationStatus: 'invitationStatus',
                invitationStatusTimestamp: '2019-01-20T09:00:00Z',
                payableIssues: [
                  { code: '3', message: 'payee-disabled' },
                  { code: '3', message: 'payee-disabled' },
                ],
                payableStatus: true,
                paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
                payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
                remoteId: 'uniqueIdForRemoteEntity',
              },
              {
                invitationStatus: 'invitationStatus',
                invitationStatusTimestamp: '2019-01-20T09:00:00Z',
                payableIssues: [
                  { code: '3', message: 'payee-disabled' },
                  { code: '3', message: 'payee-disabled' },
                ],
                payableStatus: true,
                paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
                payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
                remoteId: 'uniqueIdForRemoteEntity',
              },
            ],
            remoteId: 'Remote ID',
            type: 'type',
          },
          failureMessage: 'failure reason',
        },
        {
          failedSubmission: {
            address: {
              city: 'Key West',
              country: 'US',
              countyOrProvince: 'FL',
              line1: '500 Duval St',
              line2: 'line2',
              line3: 'line3',
              line4: 'line4',
              zipOrPostcode: '33945',
            },
            challenge: { description: 'challenge description', value: 'challenge test' },
            company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
            email: 'bob@example.com',
            individual: {
              dateOfBirth: '1970-05-20T00:00:00.000+0000',
              name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
              nationalIdentification: 'SA211123K',
            },
            language: 'en-US',
            payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
            paymentChannel: {
              accountName: 'My account',
              accountNumber: 'XXXXXX5678',
              countryCode: 'US',
              currency: 'USD',
              iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
              paymentChannelName: 'My Payment Channel',
              routingNumber: 'XXXXX6789',
            },
            payorRefs: [
              {
                invitationStatus: 'invitationStatus',
                invitationStatusTimestamp: '2019-01-20T09:00:00Z',
                payableIssues: [
                  { code: '3', message: 'payee-disabled' },
                  { code: '3', message: 'payee-disabled' },
                ],
                payableStatus: true,
                paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
                payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
                remoteId: 'uniqueIdForRemoteEntity',
              },
              {
                invitationStatus: 'invitationStatus',
                invitationStatusTimestamp: '2019-01-20T09:00:00Z',
                payableIssues: [
                  { code: '3', message: 'payee-disabled' },
                  { code: '3', message: 'payee-disabled' },
                ],
                payableStatus: true,
                paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
                payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
                remoteId: 'uniqueIdForRemoteEntity',
              },
            ],
            remoteId: 'Remote ID',
            type: 'type',
          },
          failureMessage: 'failure reason',
        },
      ],
      pendingCount: 2,
      status: 'status',
    },
    required: [],
  })
  .openapi('QueryBatchResponseV3')

const QueryBatchResponseV4Schema = z
  .object({
    failureCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 2 }),
    failures: z.array(FailedSubmissionV4Schema).exactOptional(),
    pendingCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 2 }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Batch Status. One of the following values: SUBMITTED, ACCEPTED' }),
  })
  .openapi({
    example: {
      failureCount: 2,
      failures: [
        {
          failedSubmission: {
            address: {
              city: 'Key West',
              country: 'US',
              countyOrProvince: 'FL',
              line1: '500 Duval St',
              line2: 'line2',
              line3: 'line3',
              line4: 'line4',
              zipOrPostcode: '33945',
            },
            challenge: { description: 'challenge description', value: '11984567' },
            company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
            email: 'bob@example.com',
            individual: {
              dateOfBirth: '1970-05-20T00:00:00.000+0000',
              name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
              nationalIdentification: 'SA211123K',
            },
            language: 'en-US',
            payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
            paymentChannel: {
              accountName: 'My account',
              accountNumber: 'XXXXXX5678',
              countryCode: 'US',
              currency: 'USD',
              iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
              paymentChannelName: 'My Payment Channel',
              routingNumber: 'XXXXX6789',
            },
            payorRefs: [
              {
                invitationStatus: 'invitationStatus',
                invitationStatusTimestamp: '2019-01-20T09:00:00Z',
                payableIssues: [
                  { code: '3', message: 'payee-disabled' },
                  { code: '3', message: 'payee-disabled' },
                ],
                payableStatus: true,
                paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
                payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
                remoteId: 'uniqueIdForRemoteEntity',
              },
              {
                invitationStatus: 'invitationStatus',
                invitationStatusTimestamp: '2019-01-20T09:00:00Z',
                payableIssues: [
                  { code: '3', message: 'payee-disabled' },
                  { code: '3', message: 'payee-disabled' },
                ],
                payableStatus: true,
                paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
                payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
                remoteId: 'uniqueIdForRemoteEntity',
              },
            ],
            remoteId: 'Remote ID',
            type: 'type',
          },
          failureMessage: 'failure reason',
        },
        {
          failedSubmission: {
            address: {
              city: 'Key West',
              country: 'US',
              countyOrProvince: 'FL',
              line1: '500 Duval St',
              line2: 'line2',
              line3: 'line3',
              line4: 'line4',
              zipOrPostcode: '33945',
            },
            challenge: { description: 'challenge description', value: '11984567' },
            company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
            email: 'bob@example.com',
            individual: {
              dateOfBirth: '1970-05-20T00:00:00.000+0000',
              name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'H', title: 'Mr' },
              nationalIdentification: 'SA211123K',
            },
            language: 'en-US',
            payeeId: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
            paymentChannel: {
              accountName: 'My account',
              accountNumber: 'XXXXXX5678',
              countryCode: 'US',
              currency: 'USD',
              iban: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234',
              paymentChannelName: 'My Payment Channel',
              routingNumber: 'XXXXX6789',
            },
            payorRefs: [
              {
                invitationStatus: 'invitationStatus',
                invitationStatusTimestamp: '2019-01-20T09:00:00Z',
                payableIssues: [
                  { code: '3', message: 'payee-disabled' },
                  { code: '3', message: 'payee-disabled' },
                ],
                payableStatus: true,
                paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
                payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
                remoteId: 'uniqueIdForRemoteEntity',
              },
              {
                invitationStatus: 'invitationStatus',
                invitationStatusTimestamp: '2019-01-20T09:00:00Z',
                payableIssues: [
                  { code: '3', message: 'payee-disabled' },
                  { code: '3', message: 'payee-disabled' },
                ],
                payableStatus: true,
                paymentChannelId: '70faaff7-2c32-4b44-b27f-f0b6c484e6f3',
                payorId: 'ba08877f-9d96-41e4-9c26-44a872d856ae',
                remoteId: 'uniqueIdForRemoteEntity',
              },
            ],
            remoteId: 'Remote ID',
            type: 'type',
          },
          failureMessage: 'failure reason',
        },
      ],
      pendingCount: 2,
      status: 'status',
    },
    required: [],
  })
  .openapi('QueryBatchResponseV4')

const QuoteResponseV3Schema = z
  .object({ fxSummaries: z.array(QuoteFxSummaryV3Schema).exactOptional() })
  .openapi({
    example: {
      fxSummaries: [
        {
          creationTime: '2022-10-30T09:45:09Z',
          expiryTime: '2022-10-30T09:50:09Z',
          fundingStatus: 'FUNDED',
          invertedRate: 1.12,
          paymentCurrency: 'USD',
          quoteId: 'af80d455-29dd-4e72-a000-495a9829a7d0',
          rate: 0.89,
          sourceCurrency: 'USD',
          status: 'QUOTED',
          totalPaymentAmount: 890000,
          totalSourceAmount: 1000000,
        },
        {
          creationTime: '2022-10-30T09:45:09Z',
          expiryTime: '2022-10-30T09:50:09Z',
          fundingStatus: 'FUNDED',
          invertedRate: 1.12,
          paymentCurrency: 'USD',
          quoteId: 'af80d455-29dd-4e72-a000-495a9829a7d0',
          rate: 0.89,
          sourceCurrency: 'USD',
          status: 'QUOTED',
          totalPaymentAmount: 890000,
          totalSourceAmount: 1000000,
        },
      ],
    },
    required: [],
  })
  .openapi('QuoteResponseV3')

const RegionV2Schema = z
  .object({
    abbreviation: z.string().exactOptional().openapi({ example: 'CA' }),
    name: z.string().exactOptional().openapi({ example: 'California' }),
  })
  .openapi({ example: { abbreviation: 'CA', name: 'California' }, required: [] })
  .openapi('RegionV2')

const RegisterSmsRequestSchema = z
  .object({
    smsNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .openapi({
        description: 'The phone number of a device that the user can receive sms messages on\n',
        example: '11235555555',
      }),
  })
  .openapi({ example: { smsNumber: '11235555555' }, required: ['smsNumber'] })
  .openapi('RegisterSmsRequest')

const ResendTokenRequestSchema = z
  .object({
    tokenType: z
      .enum(['INVITE_MFA_USER', 'MFA_REGISTRATION'])
      .openapi({ description: 'The type of the token to resend', example: 'INVITE_MFA_USER' }),
    verificationCode: z
      .string()
      .length(6)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "<p>Optional property that MUST be suppied when manually verifying a user</p>\n<p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>\n",
        example: '123456',
      }),
  })
  .openapi({
    example: { tokenType: 'INVITE_MFA_USER', verificationCode: '123456' },
    required: ['tokenType'],
  })
  .openapi('ResendTokenRequest')

const ResetPasswordRequestSchema = z
  .object({
    email: z
      .email()
      .openapi({
        description: 'the email address of the user requesting the reset password',
        example: 'foo@example.com',
      }),
  })
  .openapi({ example: { email: 'foo@example.com' }, required: ['email'] })
  .openapi('ResetPasswordRequest')

const RoleUpdateRequestSchema = z
  .object({
    roles: z
      .array(z.string())
      .openapi({
        description:
          '<p>The role(s) for the user</p>\n<p>The role must exist</p>\n<p>The role can be a custom role or a system role but the invoker must have the permissions to assign the role</p>\n<p>System roles are: backoffice.admin, payor.master_admin, payor.admin, payor.support</p>\n',
        example: ['payor.admin'],
      }),
    verificationCode: z
      .string()
      .length(6)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "<p>Optional property that MUST be suppied when manually verifying a user</p>\n<p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>\n",
        example: '123456',
      }),
  })
  .openapi({ example: { roles: ['payor.admin'], verificationCode: '123456' }, required: ['roles'] })
  .openapi('RoleUpdateRequest')

const SchedulePayoutRequestV3Schema = z
  .object({
    notificationsEnabled: z
      .boolean()
      .openapi({
        description:
          'Flag to indicate whether to receive notifications when scheduled payout is processed',
      }),
    scheduledFor: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'UTC timestamp for instructing the payout. Format is ISO-8601.',
        example: '2025-01-01T10:00:00Z',
      }),
  })
  .openapi({
    example: { notificationsEnabled: true, scheduledFor: '2025-01-01T10:00:00Z' },
    required: ['notificationsEnabled', 'scheduledFor'],
  })
  .openapi('SchedulePayoutRequestV3')

const ScheduleStatusSchema = z
  .string()
  .openapi({
    description:
      'Current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED',
    example: 'SCHEDULED',
  })
  .openapi('ScheduleStatus')

const SelfMFATypeUnregisterRequestSchema = z
  .object({
    mfaType: z
      .enum(['SMS', 'YUBIKEY', 'TOTP'])
      .openapi({ description: 'The type of the MFA device', example: 'TOTP' }),
  })
  .openapi({ example: { mfaType: 'TOTP' }, required: ['mfaType'] })
  .openapi('SelfMFATypeUnregisterRequest')

const SelfUpdatePasswordRequestSchema = z
  .object({
    newPassword: z
      .string()
      .min(8)
      .max(128)
      .openapi({ description: 'The new password', example: 'My_new_password' }),
    oldPassword: z
      .string()
      .min(8)
      .max(128)
      .openapi({ description: "The user's current password", example: 'My_current_password' }),
  })
  .openapi({
    example: { newPassword: 'My_new_password', oldPassword: 'My_current_password' },
    required: ['newPassword', 'oldPassword'],
  })
  .openapi('SelfUpdatePasswordRequest')

const SetNotificationsRequestSchema = z
  .object({
    minimumBalance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(9999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 9999999999,
        description: 'Amount to set as minimum balance in minor units',
      }),
  })
  .openapi({ example: { minimumBalance: 800828190 }, required: ['minimumBalance'] })
  .openapi('SetNotificationsRequest')

const SetNotificationsRequest_2Schema = z
  .object({
    minimumBalance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(9999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 9999999999,
        description: 'Amount to set as minimum balance for notifications in minor units',
        example: 10000000,
      }),
  })
  .openapi({ required: ['minimumBalance'] })
  .openapi('SetNotificationsRequest_2')

const SourceAccountTypeV3Schema = z
  .string()
  .openapi({
    description: 'Type of source account. One of the following values: FBO,PRIVATE,WUBS_DECOUPLED',
  })
  .openapi('SourceAccountTypeV3')

const SupportedCountrySchema = z
  .object({
    currencies: z.array(IsoCurrencySchema).exactOptional(),
    isoCountryCode: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
  })
  .openapi({ example: { currencies: ['USD', 'USD'], isoCountryCode: 'US' }, required: [] })
  .openapi('SupportedCountry')

const SupportedCountriesResponseSchema = z
  .object({ countries: z.array(SupportedCountrySchema).exactOptional() })
  .openapi({
    example: {
      countries: [
        { currencies: ['USD', 'USD'], isoCountryCode: 'US' },
        { currencies: ['USD', 'USD'], isoCountryCode: 'US' },
      ],
    },
    required: [],
  })
  .openapi('SupportedCountriesResponse')

const SupportedCountryV2Schema = z
  .object({
    currencies: z.array(IsoCurrencySchema).exactOptional(),
    isoCountryCode: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'US',
        title: 'ISO 3166 2 Character Country Code',
      }),
    regions: z.array(RegionV2Schema).exactOptional(),
  })
  .openapi({
    example: {
      currencies: ['USD', 'USD'],
      isoCountryCode: 'US',
      regions: [
        { abbreviation: 'CA', name: 'California' },
        { abbreviation: 'CA', name: 'California' },
      ],
    },
    required: [],
  })
  .openapi('SupportedCountryV2')

const SupportedCountriesResponseV2Schema = z
  .object({ countries: z.array(SupportedCountryV2Schema).exactOptional() })
  .openapi({
    example: {
      countries: [
        {
          currencies: ['USD', 'USD'],
          isoCountryCode: 'US',
          regions: [
            { abbreviation: 'CA', name: 'California' },
            { abbreviation: 'CA', name: 'California' },
          ],
        },
        {
          currencies: ['USD', 'USD'],
          isoCountryCode: 'US',
          regions: [
            { abbreviation: 'CA', name: 'California' },
            { abbreviation: 'CA', name: 'California' },
          ],
        },
      ],
    },
    required: [],
  })
  .openapi('SupportedCountriesResponseV2')

const SupportedCurrencyV2Schema = z
  .object({
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .exactOptional()
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    maxPaymentAmount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The max amount allowed in this currency', example: 100000 }),
  })
  .openapi({ example: { currency: 'USD', maxPaymentAmount: 100000 }, required: [] })
  .openapi('SupportedCurrencyV2')

const SupportedCurrencyResponseV2Schema = z
  .object({ currencies: z.array(SupportedCurrencyV2Schema).exactOptional() })
  .openapi({
    example: {
      currencies: [
        { currency: 'USD', maxPaymentAmount: 100000 },
        { currency: 'USD', maxPaymentAmount: 100000 },
      ],
    },
    required: [],
  })
  .openapi('SupportedCurrencyResponseV2')

const SupportedLanguageSchema = z
  .string()
  .openapi({
    description:
      'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
    example: 'en-US',
  })
  .openapi('SupportedLanguage')

const TransferRequestV2Schema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9999999999,
        description: 'Amount to transfer, in minor units',
      }),
    currency: z.string().length(3).openapi({ example: 'USD' }),
    toSourceAccountId: z
      .uuid()
      .openapi({ description: "The 'to' source account id, which will be credited" }),
  })
  .openapi({
    example: {
      amount: 800828191,
      currency: 'USD',
      toSourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
    },
    required: ['amount', 'currency', 'toSourceAccountId'],
  })
  .openapi('TransferRequestV2')

const TransferRequestV3Schema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9999999999,
        description: 'Amount to transfer, in minor units',
      }),
    currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .length(3)
      .openapi({
        description:
          'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
        example: 'USD',
        title: 'ISO Currency Code',
      }),
    toSourceAccountId: z
      .uuid()
      .openapi({ description: "The 'to' source account id, which will be credited" }),
  })
  .openapi({
    example: {
      amount: 800828191,
      currency: 'USD',
      toSourceAccountId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
    },
    required: ['amount', 'currency', 'toSourceAccountId'],
  })
  .openapi('TransferRequestV3')

const UnregisterMFARequestSchema = z
  .object({
    mfaType: z
      .enum(['YUBIKEY', 'TOTP'])
      .openapi({ description: 'The type of the MFA device', example: 'TOTP' }),
    verificationCode: z
      .string()
      .length(6)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "<p>Optional property that MUST be suppied when manually verifying a user</p>\n<p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>\n",
        example: '123456',
      }),
  })
  .openapi({ example: { mfaType: 'TOTP', verificationCode: '123456' }, required: ['mfaType'] })
  .openapi('UnregisterMFARequest')

const UpdatePayeeDetailsRequestV3Schema = z
  .object({
    address: PayeeAddressV3Schema.exactOptional(),
    challenge: ChallengeV3Schema.exactOptional(),
    company: CompanyV3Schema.exactOptional(),
    email: z.email().nullable().exactOptional().openapi({ example: 'bob@example.com' }),
    individual: IndividualV3Schema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    payeeType: PayeeTypeEnumSchema.exactOptional(),
  })
  .openapi({
    example: {
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      challenge: { description: 'challenge description', value: 'challenge test' },
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
      email: 'bob@example.com',
      individual: {
        dateOfBirth: '1985-01-01',
        name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'A', title: 'Mr' },
        nationalIdentification: 'AB123456C',
      },
      language: 'en-US',
    },
    required: [],
  })
  .openapi('UpdatePayeeDetailsRequestV3')

const UpdatePayeeDetailsRequestV4Schema = z
  .object({
    address: PayeeAddressV4Schema.exactOptional(),
    challenge: ChallengeV4Schema.exactOptional(),
    company: CompanyV4Schema.exactOptional(),
    contactSmsNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .exactOptional()
      .openapi({
        description:
          'The phone number of a device that the payee wishes to receive sms messages on\n',
        example: '11235555555',
      }),
    email: z.email().nullable().exactOptional().openapi({ example: 'bob@example.com' }),
    individual: IndividualV4Schema.exactOptional(),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>\nSee the /v1/supportedLanguages endpoint to list the available codes for an environment.\n',
        example: 'en-US',
      }),
    payeeType: PayeeTypeEnumSchema.exactOptional(),
  })
  .openapi({
    example: {
      address: {
        city: 'Key West',
        country: 'US',
        countyOrProvince: 'FL',
        line1: '500 Duval St',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
        zipOrPostcode: '33945',
      },
      challenge: { description: 'challenge description', value: '11984567' },
      company: { name: 'ABC Group Plc', operatingName: 'ABC Co', taxId: '123123123' },
      contactSmsNumber: '11235555555',
      email: 'bob@example.com',
      individual: {
        dateOfBirth: '1985-01-01',
        name: { firstName: 'Bob', lastName: 'Smith', otherNames: 'A', title: 'Mr' },
        nationalIdentification: 'AB123456C',
      },
      language: 'en-US',
    },
    required: [],
  })
  .openapi('UpdatePayeeDetailsRequestV4')

const UpdateRemoteIdRequestV3Schema = z
  .object({
    payorId: z.uuid().openapi({ example: '9ac75325-5dcd-42d5-b992-175d7e0a035e' }),
    remoteId: z.string().min(1).max(100).openapi({ example: 'remoteId123' }),
  })
  .openapi({
    example: { payorId: '9ac75325-5dcd-42d5-b992-175d7e0a035e', remoteId: 'remoteId123' },
    required: ['payorId', 'remoteId'],
  })
  .openapi('UpdateRemoteIdRequestV3')

const UpdateRemoteIdRequestV4Schema = z
  .object({
    payorId: z.uuid().openapi({ example: '9ac75325-5dcd-42d5-b992-175d7e0a035e' }),
    remoteId: z.string().min(1).max(100).openapi({ example: 'remoteId123' }),
  })
  .openapi({
    example: { payorId: '9ac75325-5dcd-42d5-b992-175d7e0a035e', remoteId: 'remoteId123' },
    required: ['payorId', 'remoteId'],
  })
  .openapi('UpdateRemoteIdRequestV4')

const UpdateWebhookRequestSchema = z
  .object({
    authorizationHeader: z
      .string()
      .regex(/.*/)
      .min(4)
      .max(1000)
      .nullable()
      .exactOptional()
      .openapi({ description: 'the authorization header to include with the notification.' }),
    categories: z
      .array(CategorySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The notification categories to enable.' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'whether the webhook is enabled.' }),
    webhookUrl: z
      .string()
      .min(6)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'the webhook URL to use.' }),
  })
  .openapi({
    example: {
      authorizationHeader: 'authorizationHeader',
      categories: [null, null],
      enabled: true,
      webhookUrl: 'webhookUrl',
    },
    required: [],
  })
  .openapi('UpdateWebhookRequest')

const UserDetailsUpdateRequestSchema = z
  .object({
    email: z
      .email()
      .nullable()
      .exactOptional()
      .openapi({ description: 'the email address of the user', example: 'foo@example.com' }),
    firstName: z.string().min(1).max(128).nullable().exactOptional().openapi({ example: 'John' }),
    lastName: z.string().min(1).max(128).nullable().exactOptional().openapi({ example: 'Doe' }),
    mfaType: MFATypeSchema.exactOptional(),
    primaryContactNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The main contact number for the user\n', example: '11235555555' }),
    secondaryContactNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The secondary contact number for the user\n',
        example: '11235555550',
      }),
    smsNumber: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The phone number of a device that the user can receive sms messages on\n',
        example: '11235555555',
      }),
    verificationCode: z
      .string()
      .length(6)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "<p>Optional property that MUST be suppied when manually verifying a user</p>\n<p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>\n",
        example: '123456',
      }),
  })
  .openapi({
    description:
      '<p>All properties are optional</p>\n<p>Only provided properties will be updated</p>\n<p>Use null to null out a property that is allowed to be nullable</p>\n',
    example: {
      email: 'foo@example.com',
      firstName: 'John',
      lastName: 'Doe',
      mfaType: 'TOTP',
      primaryContactNumber: '11235555555',
      secondaryContactNumber: '11235555550',
      smsNumber: '11235555555',
      verificationCode: '123456',
    },
    required: [],
  })
  .openapi('UserDetailsUpdateRequest')

const UserStatusSchema = z
  .enum(['ENABLED', 'DISABLED', 'PENDING'])
  .openapi({
    description:
      'The status of the user\nwhen the user has been invited but not yet enrolled they will have a PENDING status\n',
    example: 'ENABLED',
  })
  .openapi('UserStatus')

const UserTypeSchema = z
  .enum(['BACKOFFICE', 'PAYOR', 'PAYEE'])
  .openapi({ example: 'PAYOR' })
  .openapi('UserType')

const ValidatePasswordResponseSchema = z
  .object({
    score: z
      .int32()
      .min(0)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'More secure passwords are given a higher score. <P>\nFor a password to be acceptable for use in Velo, it must score at least 3\n',
        example: 2,
      }),
    suggestions: z
      .array(
        z
          .string()
          .openapi({
            description:
              'Any suggested changes to password text which would make the password more secure\n',
            example: '[password has been used before]',
          }),
      )
      .exactOptional(),
    valid: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'if true then the password can be accepted' }),
    warning: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Any warning message as a reason for the given score.',
        example: 'Historic Password',
      }),
  })
  .openapi({
    example: {
      score: 2,
      suggestions: ['[password has been used before]', '[password has been used before]'],
      valid: true,
      warning: 'Historic Password',
    },
    required: [],
  })
  .openapi('ValidatePasswordResponse')

const VerificationCodeSchema = z
  .string()
  .length(6)
  .nullable()
  .openapi({
    description:
      "<p>Optional property that MUST be suppied when manually verifying a user</p>\n<p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>\n",
    example: '123456',
  })
  .openapi('VerificationCode')

const WatchlistStatusV3Schema = z
  .string()
  .openapi({
    description:
      'Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED',
  })
  .openapi('WatchlistStatusV3')

const WatchlistStatusV4Schema = z
  .string()
  .openapi({
    description:
      'Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED',
  })
  .openapi('WatchlistStatusV4')

const WebhookResponseSchema = z
  .object({
    authorizationHeader: z.string().exactOptional(),
    categories: z.array(CategorySchema).exactOptional(),
    enabled: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    payorId: z.uuid().exactOptional(),
    webhookUrl: z.string().exactOptional(),
  })
  .openapi({
    example: {
      authorizationHeader: 'authorizationHeader',
      categories: [null, null],
      enabled: true,
      id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
      webhookUrl: 'webhookUrl',
    },
    required: [],
  })
  .openapi('WebhookResponse')

const WebhooksResponseSchema = z
  .object({
    content: z.array(WebhookResponseSchema).exactOptional(),
    links: z.array(PagedPayeeResponseV3LinksSchema).exactOptional(),
    page: PagedPayeeInvitationStatusResponseV3PageSchema.exactOptional(),
  })
  .openapi({
    description: 'List Webhooks Object',
    example: {
      content: [
        {
          authorizationHeader: 'authorizationHeader',
          categories: [null, null],
          enabled: true,
          id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          webhookUrl: 'webhookUrl',
        },
        {
          authorizationHeader: 'authorizationHeader',
          categories: [null, null],
          enabled: true,
          id: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          payorId: '046b6c7f-0b8a-43b9-b35d-6489e6daee91',
          webhookUrl: 'webhookUrl',
        },
      ],
      links: [
        { href: 'href', rel: 'rel' },
        { href: 'href', rel: 'rel' },
      ],
      page: { numberOfElements: 0, page: 5, pageSize: 5, totalElements: 6, totalPages: 1 },
    },
    required: [],
  })
  .openapi('WebhooksResponse')

const WithdrawPaymentRequestSchema = z
  .object({
    reason: z
      .string()
      .min(2)
      .max(256)
      .openapi({ description: 'Reason for withdrawal', example: 'Payment submitted in error' }),
  })
  .openapi({ example: { reason: 'Payment submitted in error' }, required: ['reason'] })
  .openapi('WithdrawPaymentRequest')

const InlineResponse_400Schema = z
  .object({
    correlationId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'a unique identifier to track a request or related sequence of requests',
        example: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
      }),
    errors: z
      .array(ErrorSchema)
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'one or more errors' }),
    httpStatusCode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity',
        example: 400,
      }),
  })
  .openapi({ required: [] })
  .openapi('InlineResponse_400')

const InlineResponse_401Schema = z
  .object({
    correlationId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'a unique identifier to track a request or related sequence of requests',
        example: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
      }),
    errors: z
      .array(ErrorSchema)
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'one or more errors' }),
    httpStatusCode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity',
        example: 401,
      }),
  })
  .openapi({ required: [] })
  .openapi('InlineResponse_401')

const InlineResponse_403Schema = z
  .object({
    correlationId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'a unique identifier to track a request or related sequence of requests',
        example: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
      }),
    errors: z
      .array(ErrorSchema)
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'one or more errors' }),
    httpStatusCode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity',
        example: 403,
      }),
  })
  .openapi({ required: [] })
  .openapi('InlineResponse_403')

const InlineResponse_404Schema = z
  .object({
    correlationId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'a unique identifier to track a request or related sequence of requests',
        example: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
      }),
    errors: z
      .array(ErrorSchema)
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'one or more errors' }),
    httpStatusCode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity',
        example: 404,
      }),
  })
  .openapi({ required: [] })
  .openapi('InlineResponse_404')

const InlineResponse_409Schema = z
  .object({
    correlationId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'a unique identifier to track a request or related sequence of requests',
        example: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
      }),
    errors: z
      .array(ErrorSchema)
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'one or more errors' }),
    httpStatusCode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity',
        example: 409,
      }),
  })
  .openapi({ required: [] })
  .openapi('InlineResponse_409')

const InlineResponse_412Schema = z
  .object({
    correlationId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'a unique identifier to track a request or related sequence of requests',
        example: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
      }),
    errors: z
      .array(ErrorSchema)
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'one or more errors' }),
    httpStatusCode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity',
        example: 412,
      }),
  })
  .openapi({ required: [] })
  .openapi('InlineResponse_412')

const OAuth2SecurityScheme = {
  description:
    'This API uses OAuth 2 with the Client Credentials grant flow. [More info](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials)',
  flows: {
    clientCredentials: {
      scopes: { ' ': 'Scopes not required' },
      tokenUrl: 'https://api.sandbox.velopayments.com/v1/login',
    },
  },
  type: 'oauth2',
}

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

const OAuthVeloBackOfficeSecurityScheme = {
  description:
    'This API uses OAuth 2 with the implicit grant flow. Authenticated user must have backoffice role [More info](https://api.example.com/docs/auth)',
  flows: {
    clientCredentials: {
      scopes: { ' ': 'Scopes not required' },
      tokenUrl: 'https://api.sandbox.velopayments.com/oauth/token',
    },
  },
  type: 'oauth2',
}

export const postV1AuthenticateRoute = createRoute({
  method: 'post',
  path: '/v1/authenticate',
  tags: ['Login'],
  summary: 'Authentication endpoint',
  description:
    '<p>Use this endpoint to obtain an access token for calling Velo Payments APIs. </p>\n<p>You need your API key and API secret issued by Velo</p>\n<p>To login and get an access token the API key and API secret must be Base64 encoded by concatenating them with a colon between them</p>\n<p>e.g. Given an ApiKey: 44a9537d-d55d-4b47-8082-14061c2bcdd8 and ApiSecret: c396b26b-137a-44fd-87f5-34631f8fd529</p>\n<p>Using a Base64 encode function Base64Encoder().encode("44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529")</p>\n<p>Included as a Basic Authorization header: -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" </p>\n',
  operationId: 'veloAuth',
  request: {
    query: z.object({
      grant_type: z
        .string()
        .default('client_credentials')
        .exactOptional()
        .openapi({
          param: {
            description: "OAuth grant type. Should use 'client_credentials'",
            in: 'query',
            name: 'grant_type',
            schema: { default: 'client_credentials', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Authenication response',
      content: { 'application/json': { schema: AuthResponseSchema } },
      headers: z.object({
        'Cache-Control': {
          description: 'Ensure clients do not cache request',
          required: true,
          schema: z
            .string()
            .default('no-store')
            .openapi({ description: 'Ensure clients do not cache request' }),
        },
        Pragma: {
          description: 'Ensure clients do not cache request',
          required: true,
          schema: z
            .string()
            .default('no-cache')
            .openapi({ description: 'Ensure clients do not cache request' }),
        },
      }),
    },
  },
  security: [{ basicAuth: [] }],
})

export const getV1DeltasFundingsRoute = createRoute({
  method: 'get',
  path: '/v1/deltas/fundings',
  tags: ['Funding'],
  summary: 'Get Funding Audit Delta',
  description: 'Get funding audit deltas for a payor',
  operationId: 'listFundingAuditDeltas',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      updatedSince: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            in: 'query',
            name: 'updatedSince',
            required: true,
            schema: { format: 'date-time', type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Funding Account Deltas',
      content: {
        'application/json': {
          schema: PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponseSchema,
        },
      },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const getV1DeltasPaymentsRoute = createRoute({
  method: 'get',
  path: '/v1/deltas/payments',
  tags: ['Payment Audit Service (Deprecated)'],
  summary: 'V1 List Payment Changes',
  description: 'Deprecated (use /v4/payments/deltas instead)',
  operationId: 'listPaymentChanges',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor ID to find associated Payments',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      updatedSince: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm',
            in: 'query',
            name: 'updatedSince',
            required: true,
            schema: { format: 'date-time', type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of Payment Changes',
      content: { 'application/json': { schema: PaymentDeltaResponseV1Schema } },
    },
    400: { description: 'Bad Request' },
  },
  deprecated: true,
})

export const getV1FundingsFundingIdRoute = createRoute({
  method: 'get',
  path: '/v1/fundings/{fundingId}',
  tags: ['Funding'],
  summary: 'Get Funding',
  description: 'Get Funding by Id',
  operationId: 'getFundingByIdV1',
  request: {
    params: z.object({
      fundingId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'fundingId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Funding response',
      content: { 'application/json': { schema: FundingResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV1LogoutRoute = createRoute({
  method: 'post',
  path: '/v1/logout',
  tags: ['Login'],
  summary: 'Logout',
  description:
    '<p>Given a valid access token in the header then log out the authenticated user or client </p>\n<p>Will revoke the token</p>\n',
  operationId: 'logout',
  responses: {
    204: { description: 'User has been logged out' },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV1PasswordResetRoute = createRoute({
  method: 'post',
  path: '/v1/password/reset',
  tags: ['Login'],
  summary: 'Reset password',
  description:
    '<p>Reset password </p>\n<p>An email with an embedded link will be sent to the receipient of the email address </p>\n<p>The link will contain a token to be used for resetting the password </p>\n',
  operationId: 'resetPassword',
  request: {
    body: {
      description: 'An Email address to send the reset password link to',
      content: { 'application/json': { schema: ResetPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'the request was accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
  },
  security: [],
})

export const getV1PaymentChannelRulesRoute = createRoute({
  method: 'get',
  path: '/v1/paymentChannelRules',
  tags: ['Countries'],
  summary: 'List Payment Channel Country Rules',
  description: 'List the country specific payment channel rules.',
  operationId: 'listPaymentChannelRulesV1',
  responses: {
    200: {
      description: 'List Payment Channel Country Rules',
      content: { 'application/json': { schema: PaymentChannelRulesResponseSchema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
  },
})

export const getV1PaymentauditFundingsRoute = createRoute({
  method: 'get',
  path: '/v1/paymentaudit/fundings',
  tags: ['Payment Audit Service (Deprecated)'],
  summary: 'V1 Get Fundings for Payor',
  description: 'Deprecated (use /v4/paymentaudit/fundings)',
  operationId: 'getFundingsV1',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```\nDefault is no sort. The supported sort fields are: dateTime and amount.\n',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Fundings normal response',
      content: { 'application/json': { schema: GetFundingsResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV1PaymentauditPayoutStatisticsRoute = createRoute({
  method: 'get',
  path: '/v1/paymentaudit/payoutStatistics',
  tags: ['Payment Audit Service (Deprecated)'],
  summary: 'V1 Get Payout Statistics',
  description: 'Deprecated (Use /v4/paymentaudit/payoutStatistics)',
  operationId: 'getPayoutStatsV1',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account owner Payor ID. Required for external users.',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payout Statistics response',
      content: { 'application/json': { schema: GetPayoutStatisticsSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const postV1PaymentsPaymentIdWithdrawRoute = createRoute({
  method: 'post',
  path: '/v1/payments/{paymentId}/withdraw',
  tags: ['Payouts'],
  summary: 'Withdraw a Payment',
  description:
    "<p>withdraw a payment </p>\n<p>There are a variety of reasons why this can fail</p>\n<ul>\n    <li>the payment must be in a state of 'accepted' or 'unfunded'</li>\n    <li>the payout must not be in a state of 'instructed'</li>\n</ul>\n",
  operationId: 'withdrawPayment',
  request: {
    params: z.object({
      paymentId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the Payment',
            in: 'path',
            name: 'paymentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'details for withdrawal',
      content: { 'application/json': { schema: WithdrawPaymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The payment was withdrawn' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV1PayorLinksRoute = createRoute({
  method: 'get',
  path: '/v1/payorLinks',
  tags: ['Payor Hierarchy'],
  summary: 'List Payor Links',
  description:
    '<p>If the payor is set up as part of a hierarchy you can use this API to traverse the hierarchy</p>\n',
  operationId: 'payorLinksV1',
  request: {
    query: z.object({
      descendantsOfPayor: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Payor ID from which to start the query to show all descendants',
            in: 'query',
            name: 'descendantsOfPayor',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      parentOfPayor: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query for the parent payor details for this payor id',
            in: 'query',
            name: 'parentOfPayor',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '<p>List of additional Payor fields to include in the response for each Payor</p>\n<p>The values of payorId and payorName are always included for each Payor by default</p>\n<p>You can add fields to the response for each payor by including them in the fields parameter separated by commas</p>\n<p>The supported fields are any combination of: primaryContactEmail,kycState</p>\n',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of Payor Links',
      content: { 'application/json': { schema: PayorLinksResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV1PayorLinksRoute = createRoute({
  method: 'post',
  path: '/v1/payorLinks',
  tags: ['Payors Private'],
  summary: 'Create a Payor Link',
  description: 'This endpoint allows you to create a payor link.',
  operationId: 'createPayorLinks',
  request: {
    body: {
      description: 'Request to create a payor link',
      content: { 'application/json': { schema: CreatePayorLinkRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'HTTP Creeated',
      headers: z.object({
        Location: {
          description: 'URI to location of created resource',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URI to location of created resource',
              param: { required: false },
              example: 'http://example.com/resourcepath/123123123',
            }),
        },
      }),
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  security: [{ oAuthVeloBackOffice: [] }],
})

export const getV1PayorsPayorIdRoute = createRoute({
  method: 'get',
  path: '/v1/payors/{payorId}',
  tags: ['Payors'],
  summary: 'Get Payor',
  description: '<p>Get a Single Payor by Id.</p>\n<p>deprecated since v2.10 - Use /v2/payors\n',
  operationId: 'getPayorByIdV1',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor Id',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Payor Details',
      content: { 'application/json': { schema: PayorV1Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'Payor Id Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const postV1PayorsPayorIdApplicationsRoute = createRoute({
  method: 'post',
  path: '/v1/payors/{payorId}/applications',
  tags: ['Payors'],
  summary: 'Create Application',
  description:
    '<p>Create an application for the given Payor ID.</p>\n<p>Applications provide a means to group your API Keys</p>\n<p>For example you might have an SAP application that you wish to integrate with Velo</p>\n<p>You can create an application and then create one or more API keys for the application</p>\n',
  operationId: 'payorCreateApplicationV1',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor Id',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Details of application to create',
      content: { 'application/json': { schema: PayorCreateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      headers: z.object({
        Location: {
          description: 'location',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'location',
              param: { required: false },
              example:
                '<p>HTTP/1.1 201 Created</p>\n<p>Location: https://api.sandbox.velopayments.com/v1/payors/2e144160-e87f-4976-b577-6087e683f419/applications/8701c174-b64a-476a-ab1a-4af27f09f0b8</p>\n',
            }),
        },
      }),
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const postV1PayorsPayorIdApplicationsApplicationIdKeysRoute = createRoute({
  method: 'post',
  path: '/v1/payors/{payorId}/applications/{applicationId}/keys',
  tags: ['Payors'],
  summary: 'Create API Key',
  description:
    '<p>Create an an API key for the given payor Id and application Id</p>\n<p>You can create multiple API Keys for a given application</p>\n<p>API Keys are programmatic users for integrating your application with the Velo platform</p>\n',
  operationId: 'payorCreateApiKeyV1',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor Id',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      applicationId: z
        .uuid()
        .openapi({
          param: {
            description: 'Application ID',
            in: 'path',
            name: 'applicationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Details of application API key to create',
      content: { 'application/json': { schema: PayorCreateApiKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'HTTP Ok, key created',
      content: { 'application/json': { schema: PayorCreateApiKeyResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV1PayorsPayorIdBrandingRoute = createRoute({
  method: 'get',
  path: '/v1/payors/{payorId}/branding',
  tags: ['Payors'],
  summary: 'Get Branding',
  description: 'Get the payor branding details.',
  operationId: 'payorGetBranding',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor Id',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'HTTP Ok, key created',
      content: { 'application/json': { schema: PayorBrandingResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'Payor Id Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV1PayorsPayorIdBrandingLogosRoute = createRoute({
  method: 'post',
  path: '/v1/payors/{payorId}/branding/logos',
  tags: ['Payors'],
  summary: 'Add Logo',
  description:
    '<p>Add Payor Logo</p>\n<p>Logo file is used in your branding and emails sent to payees</p>\n',
  operationId: 'payorAddPayorLogoV1',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor Id',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Image file to upload',
      content: { 'multipart/form-data': { schema: PayorLogoRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV1PayorsPayorIdReminderEmailsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/payors/{payorId}/reminderEmailsUpdate',
  tags: ['Payors'],
  summary: 'Reminder Email Opt-Out',
  description:
    'Update the emailRemindersOptOut field for a Payor. This API can be used to opt out\nor opt into Payor Reminder emails. These emails are typically around payee events\nsuch as payees registering and onboarding.\n',
  operationId: 'payorEmailOptOut',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor Id',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Reminder Emails Opt-Out Request',
      content: { 'application/json': { schema: PayorEmailOptOutRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'HTTP Accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'Payor Id Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV1SourceAccountsSourceAccountIdNotificationsRoute = createRoute({
  method: 'post',
  path: '/v1/sourceAccounts/{sourceAccountId}/notifications',
  tags: ['Source Accounts'],
  summary: 'Set notifications',
  description:
    '<p>Set notifications for a given source account</p>\n<p>deprecated since 2.34 (use v3 version)</p>\n',
  operationId: 'setNotificationsRequest',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: 'Source account id',
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Body to included minimum balance to set',
      content: { 'application/json': { schema: SetNotificationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request Fulfilled' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV1SupportedCountriesRoute = createRoute({
  method: 'get',
  path: '/v1/supportedCountries',
  tags: ['Countries'],
  summary: 'List Supported Countries',
  description:
    '<p>List the supported countries.</p>\n<p>This version will be retired in March 2020. Use /v2/supportedCountries</p>\n',
  operationId: 'listSupportedCountriesV1',
  responses: {
    200: {
      description: 'List of Supported Countries',
      content: { 'application/json': { schema: SupportedCountriesResponseSchema } },
    },
  },
  deprecated: true,
  security: [],
})

export const postV1ValidateRoute = createRoute({
  method: 'post',
  path: '/v1/validate',
  tags: ['Login'],
  summary: 'validate',
  description:
    '<p>The second part of login involves validating using an MFA device</p>\n<p>An access token with PRE_AUTH authorities is required</p>\n',
  operationId: 'validateAccessToken',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Bearer token authorization leg of validate',
            in: 'header',
            name: 'Authorization',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "An OTP from the user's registered MFA Device\n",
      content: { 'application/json': { schema: AccessTokenValidationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User request has been validated',
      content: { 'application/json': { schema: AccessTokenResponseSchema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const getV1WebhooksRoute = createRoute({
  method: 'get',
  path: '/v1/webhooks',
  tags: ['Webhooks'],
  summary: 'List the details about the webhooks for the given payor.',
  description: 'List the details about the webhooks for the given payor.',
  operationId: 'listWebhooksV1',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor ID',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook response',
      content: { 'application/json': { schema: WebhooksResponseSchema } },
    },
    400: { description: 'Invalid Request Parameters' },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV1WebhooksRoute = createRoute({
  method: 'post',
  path: '/v1/webhooks',
  tags: ['Webhooks'],
  summary: 'Create Webhook',
  description: 'Create Webhook',
  operationId: 'createWebhookV1',
  request: { body: { content: { 'application/json': { schema: CreateWebhookRequestSchema } } } },
  responses: {
    201: {
      description: 'Webhook Created',
      headers: z.object({
        Location: {
          description: 'Reference to Webhook object',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Reference to Webhook object', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const getV1WebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/v1/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Get details about the given webhook.',
  description: 'Get details about the given webhook.',
  operationId: 'getWebhookV1',
  request: {
    params: z.object({
      webhookId: z
        .uuid()
        .openapi({
          param: {
            description: 'Webhook id',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook response',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
    400: { description: 'Bad Request, Invalid path parameter' },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV1WebhooksWebhookIdRoute = createRoute({
  method: 'post',
  path: '/v1/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Update Webhook',
  description: 'Update Webhook',
  operationId: 'updateWebhookV1',
  request: {
    params: z.object({
      webhookId: z
        .uuid()
        .openapi({
          param: {
            description: 'Webhook id',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateWebhookRequestSchema } } },
  },
  responses: {
    204: { description: 'Webhook Updated' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV1WebhooksWebhookIdPingRoute = createRoute({
  method: 'post',
  path: '/v1/webhooks/{webhookId}/ping',
  tags: ['Webhooks'],
  operationId: 'pingWebhookV1',
  request: {
    params: z.object({
      webhookId: z
        .uuid()
        .openapi({
          param: {
            description: 'Webhook id',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Send ping',
      content: { 'application/json': { schema: PingResponseSchema } },
    },
    400: { description: 'Bad Request, Invalid path parameter' },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV2CurrenciesRoute = createRoute({
  method: 'get',
  path: '/v2/currencies',
  tags: ['Currencies'],
  summary: 'List Supported Currencies',
  description: 'List the supported currencies.',
  operationId: 'listSupportedCurrenciesV2',
  responses: {
    200: {
      description: 'List Supported Currencies',
      content: { 'application/json': { schema: SupportedCurrencyResponseV2Schema } },
    },
  },
  security: [],
})

export const getV2FundingAccountsRoute = createRoute({
  method: 'get',
  path: '/v2/fundingAccounts',
  tags: ['Funding'],
  summary: 'Get Funding Accounts',
  description: 'Get the funding accounts.',
  operationId: 'getFundingAccountsV2',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The descriptive funding account name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The 2 letter ISO 3166-1 country code (upper case)',
            in: 'query',
            name: 'country',
            required: false,
            schema: { example: 'US', type: 'string' },
          },
          example: 'US',
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ISO 4217 currency code',
            in: 'query',
            name: 'currency',
            required: false,
            schema: { example: 'USD', type: 'string' },
          },
          example: 'USD',
        }),
      type: FundingAccountTypeV2Schema.openapi({
        param: {
          description: 'The type of funding account.',
          in: 'query',
          name: 'type',
          required: false,
          schema: { $ref: '#/components/schemas/FundingAccountTypeV2' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .regex(/[a-zA-Z]+[:desc|:asc]/)
        .default('accountName:asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'accountName:asc',
              pattern: '[a-zA-Z]+[:desc|:asc]',
              type: 'string',
            },
          },
        }),
      sensitive: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Funding Accounts Response',
      content: { 'application/json': { schema: ListFundingAccountsResponseV2Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV2FundingAccountsRoute = createRoute({
  method: 'post',
  path: '/v2/fundingAccounts',
  tags: ['Funding Manager Private'],
  summary: 'Create Funding Account',
  description: 'Create Funding Account',
  operationId: 'createFundingAccountV2',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateFundingAccountRequestV2Schema,
          examples: {
            fbo: {
              summary: 'FBO Example',
              value: {
                accountName: 'My Account Name',
                accountNumber: 1231231234556,
                name: 'My FBO Account',
                payorId: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
                routingNumber: 123456789,
                type: 'FBO',
              },
            },
            private: {
              summary: 'PRIVATE Example',
              value: {
                accountName: 'My Account Name',
                accountNumber: 1231231234556,
                currency: 'AUD',
                name: 'My PRIVATE Account',
                payorId: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
                routingNumber: 123456789,
                type: 'PRIVATE',
              },
            },
            wubs: {
              summary: 'WUBS',
              value: {
                currency: 'USD',
                name: 'My WUBS Account',
                payorId: 'ee53e01d-c078-43fd-abd4-47e92f4a06cf',
                type: 'WUBS_DECOUPLED',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Funding Account Creation Request Accepted',
      headers: z.object({
        Location: {
          description: 'Reference to status object',
          schema: z
            .url()
            .exactOptional()
            .openapi({ description: 'Reference to status object', param: { required: false } }),
        },
        'Retry-After': {
          description:
            'How long the user agent should wait before making a follow-up request (seconds)',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'How long the user agent should wait before making a follow-up request (seconds)',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const getV2FundingAccountsFundingAccountIdRoute = createRoute({
  method: 'get',
  path: '/v2/fundingAccounts/{fundingAccountId}',
  tags: ['Funding'],
  summary: 'Get Funding Account',
  description: 'Get Funding Account by ID',
  operationId: 'getFundingAccountV2',
  request: {
    params: z.object({
      fundingAccountId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'fundingAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      sensitive: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Funding Account Response',
      content: { 'application/json': { schema: FundingAccountResponseV2Schema } },
    },
    400: { description: 'Bad Request' },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV2PayorsPayorIdRoute = createRoute({
  method: 'get',
  path: '/v2/payors/{payorId}',
  tags: ['Payors'],
  summary: 'Get Payor',
  description: 'Get a Single Payor by Id.\n',
  operationId: 'getPayorByIdV2',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor Id',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Payor Details',
      content: { 'application/json': { schema: PayorV2Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'Payor Id Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2SourceAccountsRoute = createRoute({
  method: 'get',
  path: '/v2/sourceAccounts',
  tags: ['Source Accounts'],
  summary: 'Get list of source accounts',
  description: 'List source accounts.',
  operationId: 'getSourceAccountsV2',
  request: {
    query: z.object({
      physicalAccountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Physical Account Name',
            in: 'query',
            name: 'physicalAccountName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      physicalAccountId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The physical account ID',
            in: 'query',
            name: 'physicalAccountId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      fundingAccountId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The funding account ID',
            in: 'query',
            name: 'fundingAccountId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .regex(/[fundingRef|name|balance]+[:desc|:asc]/)
        .default('fundingRef:asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields e.g. ?sort=name:asc\nDefault is name:asc\nThe supported sort fields are - fundingRef, name, balance\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'fundingRef:asc',
              pattern: '[fundingRef|name|balance]+[:desc|:asc]',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List Source Account response',
      content: { 'application/json': { schema: ListSourceAccountResponseV2Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV2SourceAccountsSourceAccountIdRoute = createRoute({
  method: 'get',
  path: '/v2/sourceAccounts/{sourceAccountId}',
  tags: ['Source Accounts'],
  summary: 'Get Source Account',
  description: 'Get details about given source account.',
  operationId: 'getSourceAccountV2',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: 'Source account id',
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Source account response',
      content: { 'application/json': { schema: SourceAccountResponseV2Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const postV2SourceAccountsSourceAccountIdFundingRequestRoute = createRoute({
  method: 'post',
  path: '/v2/sourceAccounts/{sourceAccountId}/fundingRequest',
  tags: ['Funding'],
  summary: 'Create Funding Request',
  description:
    'Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).',
  operationId: 'createFundingRequestV2',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: 'Source account id',
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Body to included amount to be funded',
      content: { 'application/json': { schema: FundingRequestV2Schema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const postV2SourceAccountsSourceAccountIdTransfersRoute = createRoute({
  method: 'post',
  path: '/v2/sourceAccounts/{sourceAccountId}/transfers',
  tags: ['Source Accounts'],
  summary: 'Transfer Funds between source accounts',
  description:
    "Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.",
  operationId: 'transferFundsV2',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: "The 'from' source account id, which will be debited",
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Body',
      content: { 'application/json': { schema: TransferRequestV2Schema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request Processed' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV2SupportedCountriesRoute = createRoute({
  method: 'get',
  path: '/v2/supportedCountries',
  tags: ['Countries'],
  summary: 'List Supported Countries',
  description: 'List the supported countries.',
  operationId: 'listSupportedCountriesV2',
  responses: {
    200: {
      description: 'List of Supported Countries',
      content: { 'application/json': { schema: SupportedCountriesResponseV2Schema } },
    },
  },
  security: [],
})

export const getV2UsersRoute = createRoute({
  method: 'get',
  path: '/v2/users',
  tags: ['Users'],
  summary: 'List Users',
  description: 'Get a paginated response listing the Users',
  operationId: 'listUsers',
  request: {
    query: z.object({
      type: UserTypeSchema.openapi({
        param: {
          description: 'The Type of the User.',
          in: 'query',
          name: 'type',
          required: false,
          schema: { $ref: '#/components/schemas/UserType' },
        },
      }).exactOptional(),
      status: UserStatusSchema.openapi({
        param: {
          description: 'The status of the User.',
          in: 'query',
          name: 'status',
          required: false,
          schema: { $ref: '#/components/schemas/UserStatus' },
        },
      }).exactOptional(),
      entityId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The entityId of the User.',
            in: 'query',
            name: 'entityId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payeeType: PayeeTypeSchema.openapi({
        param: {
          description: 'The Type of the Payee entity. Either COMPANY or INDIVIDUAL.',
          in: 'query',
          name: 'payeeType',
          required: false,
          schema: { $ref: '#/components/schemas/PayeeType' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .regex(/[a-zA-Z]+[:desc|:asc]/)
        .default('email:asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              "List of sort fields (e.g. ?sort=email:asc,lastName:asc)\nDefault is email:asc 'name'\nThe supported sort fields are - email, lastNmae.\n",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { default: 'email:asc', pattern: '[a-zA-Z]+[:desc|:asc]', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of Users filtered by query parameters',
      content: { 'application/json': { schema: PagedUserResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV2UsersInviteRoute = createRoute({
  method: 'post',
  path: '/v2/users/invite',
  tags: ['Users'],
  summary: 'Invite a User',
  description: 'Create a User and invite them to the system\n',
  operationId: 'inviteUser',
  request: {
    body: {
      description: 'Details of User to invite',
      content: { 'application/json': { schema: InviteUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content. The user was invited successfully' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
    412: {
      description: 'The request could not be completed as a precondition was not met\n',
      content: { 'application/json': { schema: InlineResponse_412Schema } },
    },
  },
})

export const postV2UsersRegistrationSmsRoute = createRoute({
  method: 'post',
  path: '/v2/users/registration/sms',
  tags: ['Users'],
  summary: 'Register SMS Number',
  description:
    "<p>Register an Sms number and send an OTP to it </p>\n<p>Used for manual verification of a user </p>\n<p>The backoffice user initiates the request to send the OTP to the user's sms </p>\n<p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>\n",
  operationId: 'registerSms',
  request: {
    body: {
      description: 'a SMS Number to send an OTP to',
      content: { 'application/json': { schema: RegisterSmsRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'request completed okay' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const getV2UsersSelfRoute = createRoute({
  method: 'get',
  path: '/v2/users/self',
  tags: ['Users'],
  summary: 'Get Self',
  description: "Get the user's details\n",
  operationId: 'getSelf',
  responses: {
    200: {
      description: 'Get User Details',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV2UsersSelfMfaUnregisterRoute = createRoute({
  method: 'post',
  path: '/v2/users/self/mfa/unregister',
  tags: ['Users'],
  summary: 'Unregister MFA for Self',
  description:
    '<p>Unregister the MFA device for the user </p>\n<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>\n',
  operationId: 'unregisterMFAForSelf',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Bearer token authorization leg of validate',
            in: 'header',
            name: 'Authorization',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The MFA Type to unregister',
      content: { 'application/json': { schema: SelfMFATypeUnregisterRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'the MFA Type to unregister' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV2UsersSelfPasswordRoute = createRoute({
  method: 'post',
  path: '/v2/users/self/password',
  tags: ['Users'],
  summary: 'Update Password for self',
  description: 'Update password for self\n',
  operationId: 'updatePasswordSelf',
  request: {
    body: {
      description: 'The password',
      content: { 'application/json': { schema: SelfUpdatePasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'the password was submitted and accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV2UsersSelfPasswordValidateRoute = createRoute({
  method: 'post',
  path: '/v2/users/self/password/validate',
  tags: ['Users'],
  summary: 'Validate the proposed password',
  description: 'validate the password and return a score\n',
  operationId: 'validatePasswordSelf',
  request: {
    body: {
      description: 'The password',
      content: { 'application/json': { schema: PasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'the password was checked and a score returned',
      content: { 'application/json': { schema: ValidatePasswordResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV2UsersSelfUserDetailsUpdateRoute = createRoute({
  method: 'post',
  path: '/v2/users/self/userDetailsUpdate',
  tags: ['Users'],
  summary: 'Update User Details for self',
  description:
    '<p>Update the profile details for the given user</p>\n<p>Only Payee user types are supported</p>\n',
  operationId: 'userDetailsUpdateForSelf',
  request: {
    body: {
      description: 'The details of the user to update',
      content: { 'application/json': { schema: PayeeUserSelfUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'request completed okay' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const getV2UsersUserIdRoute = createRoute({
  method: 'get',
  path: '/v2/users/{userId}',
  tags: ['Users'],
  summary: 'Get User',
  description: 'Get a Single User by Id.\n',
  operationId: 'getUserByIdV2',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get User Details',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const deleteV2UsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v2/users/{userId}',
  tags: ['Users'],
  summary: 'Delete a User',
  description: 'Delete User by Id.\n',
  operationId: 'deleteUserByIdV2',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'request completed okay' },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV2UsersUserIdDisableRoute = createRoute({
  method: 'post',
  path: '/v2/users/{userId}/disable',
  tags: ['Users'],
  summary: 'Disable a User',
  description:
    '<p>If a user is enabled this endpoint will disable them </p>\n<p>The invoker must have the appropriate permission </p>\n<p>A user cannot disable themself </p>\n<p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>\n',
  operationId: 'disableUserV2',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success the user was disabled or was already disabled' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV2UsersUserIdEnableRoute = createRoute({
  method: 'post',
  path: '/v2/users/{userId}/enable',
  tags: ['Users'],
  summary: 'Enable a User',
  description:
    '<p>If a user has been disabled this endpoints will enable them </p>\n<p>The invoker must have the appropriate permission </p>\n<p>A user cannot enable themself </p>\n<p>If the user is a payor user and the payor is disabled this operation is not allowed</p>\n<p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>\n',
  operationId: 'enableUserV2',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success the user was enabled or was already enabled' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV2UsersUserIdMfaUnregisterRoute = createRoute({
  method: 'post',
  path: '/v2/users/{userId}/mfa/unregister',
  tags: ['Users'],
  summary: 'Unregister MFA for the user',
  description:
    '<p>Unregister the MFA device for the user </p>\n<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>\n',
  operationId: 'unregisterMFA',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The MFA Type to unregister',
      content: { 'application/json': { schema: UnregisterMFARequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'the MFA Type to unregister' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV2UsersUserIdRoleUpdateRoute = createRoute({
  method: 'post',
  path: '/v2/users/{userId}/roleUpdate',
  tags: ['Users'],
  summary: 'Update User Role',
  description: "<p>Update the user's Role</p>\n",
  operationId: 'roleUpdate',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The Role to change to',
      content: { 'application/json': { schema: RoleUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'request completed okay' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV2UsersUserIdTokensRoute = createRoute({
  method: 'post',
  path: '/v2/users/{userId}/tokens',
  tags: ['Tokens', 'Users'],
  summary: 'Resend a token',
  description:
    '<p>Resend the specified token </p>\n<p>The token to resend must already exist for the user </p>\n<p>It will be revoked and a new one issued</p>\n',
  operationId: 'resendToken',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The type of token to resend',
      content: { 'application/json': { schema: ResendTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'request completed okay' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const postV2UsersUserIdUnlockRoute = createRoute({
  method: 'post',
  path: '/v2/users/{userId}/unlock',
  tags: ['Users'],
  summary: 'Unlock a User',
  description: 'If a user is locked this endpoint will unlock them\n',
  operationId: 'unlockUserV2',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success the user was unlocked or was already unlocked' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV2UsersUserIdUserDetailsUpdateRoute = createRoute({
  method: 'post',
  path: '/v2/users/{userId}/userDetailsUpdate',
  tags: ['Users'],
  summary: 'Update User Details',
  description:
    '<p>Update the profile details for the given user</p>\n<p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>\n',
  operationId: 'userDetailsUpdate',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the User.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The details of the user to update',
      content: { 'application/json': { schema: UserDetailsUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'request completed okay' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const getV3PayeesRoute = createRoute({
  method: 'get',
  path: '/v3/payees',
  tags: ['Payees'],
  summary: 'List Payees',
  description: '<p>Use v4 instead</p>\nGet a paginated response listing the payees for a payor.\n',
  operationId: 'listPayeesV3',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-contracts': [
              {
                contractId: 1,
                matchers: [{ type: 'equal_to', value: '0a818933-087d-47f2-ad83-2f986ed087eb' }],
                value: '0a818933-087d-47f2-ad83-2f986ed087eb',
              },
            ],
          },
        }),
      watchlistStatus: WatchlistStatusV3Schema.openapi({
        param: {
          description: 'The watchlistStatus of the payees.',
          in: 'query',
          name: 'watchlistStatus',
          required: false,
          schema: { $ref: '#/components/schemas/WatchlistStatusV3' },
        },
      }).exactOptional(),
      disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Payee disabled',
            in: 'query',
            name: 'disabled',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      onboardedStatus: OnboardedStatusV4Schema.openapi({
        param: {
          description: 'The onboarded status of the payees.',
          in: 'query',
          name: 'onboardedStatus',
          required: false,
          schema: { $ref: '#/components/schemas/OnboardedStatusV4' },
        },
      }).exactOptional(),
      email: z
        .email()
        .exactOptional()
        .openapi({
          param: {
            description: 'Email address',
            in: 'query',
            name: 'email',
            required: false,
            schema: { example: 'bob@example.com', format: 'email', type: 'string' },
          },
          example: 'bob@example.com',
        }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The display name of the payees.',
            in: 'query',
            name: 'displayName',
            required: false,
            schema: { example: 'Bob Smith', type: 'string' },
          },
          example: 'Bob Smith',
        }),
      remoteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The remote id of the payees.',
            in: 'query',
            name: 'remoteId',
            required: false,
            schema: { example: 'remoteId123', type: 'string' },
          },
          example: 'remoteId123',
        }),
      payeeType: PayeeType_2Schema.openapi({
        param: {
          description: 'The onboarded status of the payees.',
          in: 'query',
          name: 'payeeType',
          required: false,
          schema: { $ref: '#/components/schemas/PayeeType_2' },
        },
      }).exactOptional(),
      payeeCountry: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The country of the payee - 2 letter ISO 3166-1 country code (upper case)',
            in: 'query',
            name: 'payeeCountry',
            required: false,
            schema: { example: 'US', type: 'string' },
          },
          example: 'US',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, example: 1, format: 'int32', type: 'integer' },
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size. Default is 25. Max allowable is 100.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, example: 25, format: 'int32', type: 'integer' },
          },
          example: 25,
        }),
      sort: z
        .string()
        .regex(/[a-zA-Z]+[:desc|:asc]/)
        .default('displayName:asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              "List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.\n",
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'displayName:asc',
              example: 'displayName:asc',
              pattern: '[a-zA-Z]+[:desc|:asc]',
              type: 'string',
            },
          },
          example: 'displayName:asc',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of Payee',
      content: { 'application/json': { schema: PagedPayeeResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const postV3PayeesRoute = createRoute({
  method: 'post',
  path: '/v3/payees',
  tags: ['Payee Invitation'],
  summary: 'Initiate Payee Creation',
  description:
    '<p>Use v4 instead</p>\nInitiate the process of creating 1 to 2000 payees in a batch Use the response location header to query\nfor status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a\n400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email\nwithin the batch, i.e. if there is a conflict between the data provided for one payee within the batch and\nthat provided for another payee within the same batch). The validation at this stage is intra-batch only.\nValidation against payees who have already been invited occurs subsequently during processing of the batch.\n',
  operationId: 'createPayeeV3',
  request: {
    body: {
      description: 'Post payees to create.',
      content: {
        'application/json': { schema: CreatePayeesRequestV3Schema },
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(CreatePayeesCSVRequestV3Schema),
                )
                .exactOptional()
                .openapi({ description: 'CSV File of payee data' }),
              payorId: z.uuid().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'HTTP Created. Body created only on CSV requests',
      content: { 'application/json': { schema: CreatePayeesCSVResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV3PayeesBatchBatchIdRoute = createRoute({
  method: 'get',
  path: '/v3/payees/batch/{batchId}',
  tags: ['Payee Invitation'],
  summary: 'Query Batch Status',
  description:
    '<p>Use v4 instead</p>\nFetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).\n',
  operationId: 'queryBatchStatusV3',
  request: {
    params: z.object({
      batchId: z
        .uuid()
        .openapi({
          param: {
            description: 'Batch Id',
            in: 'path',
            name: 'batchId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Batch Status',
      content: { 'application/json': { schema: QueryBatchResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV3PayeesDeltasRoute = createRoute({
  method: 'get',
  path: '/v3/payees/deltas',
  tags: ['Payees'],
  summary: 'List Payee Changes',
  description: '<p>Use v4 instead</p>\n<p>Get a paginated response listing payee changes.</p>\n',
  operationId: 'listPayeeChangesV3',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor ID to find associated Payees',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-contracts': [
              {
                contractId: 1,
                matchers: [{ type: 'equal_to', value: '0a818933-087d-47f2-ad83-2f986ed087eb' }],
                value: '0a818933-087d-47f2-ad83-2f986ed087eb',
              },
            ],
          },
        }),
      updatedSince: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm',
            in: 'query',
            name: 'updatedSince',
            required: true,
            schema: { format: 'date-time', type: 'string' },
            'x-contracts': [
              {
                contractId: 1,
                matchers: [{ type: 'equal_to', value: '2019-01-20T09:00:00+00:00' }],
                value: '2019-01-20T09:00:00+00:00',
              },
            ],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, example: 1, format: 'int32', type: 'integer' },
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size. Default is 100. Max allowable is 1000.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 100, example: 100, format: 'int32', type: 'integer' },
          },
          example: 100,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of Payee Changes',
      content: { 'application/json': { schema: PayeeDeltaResponseV3Schema } },
    },
    400: { description: 'Bad Request' },
  },
  deprecated: true,
})

export const getV3PayeesPayorsPayorIdInvitationStatusRoute = createRoute({
  method: 'get',
  path: '/v3/payees/payors/{payorId}/invitationStatus',
  tags: ['Payee Invitation'],
  summary: 'Get Payee Invitation Status',
  description:
    '<p>Use v4 instead</p>\n<p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>\n',
  operationId: 'getPayeesInvitationStatusV3',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: {
              example: '9ac75325-5dcd-42d5-b992-175d7e0a035e',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '9ac75325-5dcd-42d5-b992-175d7e0a035e',
        }),
    }),
    query: z.object({
      payeeId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'query',
            name: 'payeeId',
            required: false,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
      invitationStatus: InvitationStatusV4Schema.openapi({
        param: {
          description: 'The invitation status of the payees.',
          in: 'query',
          name: 'invitationStatus',
          required: false,
          schema: { $ref: '#/components/schemas/InvitationStatusV4' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, example: 1, format: 'int32', type: 'integer' },
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size. Default is 25. Max allowable is 100.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, example: 25, format: 'int32', type: 'integer' },
          },
          example: 25,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Payees with Invitaion status - filters of payeeId and invitationStatus',
      content: { 'application/json': { schema: PagedPayeeInvitationStatusResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV3PayeesPayeeIdRoute = createRoute({
  method: 'get',
  path: '/v3/payees/{payeeId}',
  tags: ['Payees'],
  summary: 'Get Payee by Id',
  description: '<p>Use v4 instead</p>\n<p>Get Payee by Id</p>\n',
  operationId: 'getPayeeByIdV3',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
    query: z.object({
      sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.\nIf set to true, and you have permission, the PII values will be returned as their original unmasked values.\n',
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response, request completed okay',
      content: { 'application/json': { schema: PayeeDetailResponseV3Schema } },
    },
    404: { description: 'Payee Not found' },
  },
  deprecated: true,
})

export const deleteV3PayeesPayeeIdRoute = createRoute({
  method: 'delete',
  path: '/v3/payees/{payeeId}',
  tags: ['Payees'],
  summary: 'Delete Payee by Id',
  description:
    '<p>Use v4 instead</p>\n<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>\n<p>* Payee ID is not found</p>\n<p>* If Payee has not been on-boarded</p>\n<p>* If Payee is in grace period</p>\n<p>* If Payee has existing payments</p>\n',
  operationId: 'deletePayeeByIdV3',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
  },
  responses: {
    204: { description: 'No content. Payee Id accepted for deletion.' },
    400: { description: 'Bad Request. Payee Id failed validation for deletion.' },
    404: { description: 'Payee Id not found' },
  },
  deprecated: true,
})

export const postV3PayeesPayeeIdInviteRoute = createRoute({
  method: 'post',
  path: '/v3/payees/{payeeId}/invite',
  tags: ['Payee Invitation'],
  summary: 'Resend Payee Invite',
  description:
    '<p>Use v4 instead</p>\n<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>\n<p>Any previous invites to the payee by this Payor will be invalidated</p>\n',
  operationId: 'resendPayeeInviteV3',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
    body: {
      description: 'Provide Payor Id in body of request',
      content: { 'application/json': { schema: InvitePayeeRequestV3Schema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'the request was accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
  deprecated: true,
})

export const postV3PayeesPayeeIdPayeeDetailsUpdateRoute = createRoute({
  method: 'post',
  path: '/v3/payees/{payeeId}/payeeDetailsUpdate',
  tags: ['Payees'],
  summary: 'Update Payee Details',
  description: '<p>Use v4 instead</p>\n<p>Update payee details for the given Payee Id.<p>\n',
  operationId: 'payeeDetailsUpdateV3',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
    body: {
      description: 'Request to update payee details',
      content: { 'application/json': { schema: UpdatePayeeDetailsRequestV3Schema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const postV3PayeesPayeeIdRemoteIdUpdateRoute = createRoute({
  method: 'post',
  path: '/v3/payees/{payeeId}/remoteIdUpdate',
  tags: ['Payees'],
  summary: 'Update Payee Remote Id',
  description: '<p>Use v4 instead</p>\n<p>Update the remote Id for the given Payee Id.</p>\n',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
    body: {
      description: 'Request to update payee remote id v3',
      content: { 'application/json': { schema: UpdateRemoteIdRequestV3Schema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Accepted, No Content' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
  deprecated: true,
})

export const getV3PaymentauditPaymentsRoute = createRoute({
  method: 'get',
  path: '/v3/paymentaudit/payments',
  tags: ['Payment Audit Service (Deprecated)'],
  summary: 'V3 Get List of Payments',
  description: 'Deprecated (use /v4/paymentaudit/payments instead)',
  operationId: 'listPaymentsAuditV3',
  request: {
    query: z.object({
      payeeId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'query',
            name: 'payeeId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account owner Payor Id. Required for external users.',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payorName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The payor’s name. This filters via a case insensitive substring match.',
            in: 'query',
            name: 'payorName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      remoteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The remote id of the payees.',
            in: 'query',
            name: 'remoteId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum([
          'ACCEPTED',
          'AWAITING_FUNDS',
          'FUNDED',
          'UNFUNDED',
          'BANK_PAYMENT_REQUESTED',
          'REJECTED',
          'ACCEPTED_BY_RAILS',
          'CONFIRMED',
          'FAILED',
          'RETURNED',
          'WITHDRAWN',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Payment Status',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              enum: [
                'ACCEPTED',
                'AWAITING_FUNDS',
                'FUNDED',
                'UNFUNDED',
                'BANK_PAYMENT_REQUESTED',
                'REJECTED',
                'ACCEPTED_BY_RAILS',
                'CONFIRMED',
                'FAILED',
                'RETURNED',
                'WITHDRAWN',
              ],
              type: 'string',
            },
          },
        }),
      sourceAccountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source account name filter. This filters via a case insensitive substring match.',
            in: 'query',
            name: 'sourceAccountName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sourceAmountFrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom',
            in: 'query',
            name: 'sourceAmountFrom',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sourceAmountTo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo',
            in: 'query',
            name: 'sourceAmountTo',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sourceCurrency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source currency filter. Filters based on an exact match on the currency.',
            in: 'query',
            name: 'sourceCurrency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      paymentAmountFrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom',
            in: 'query',
            name: 'paymentAmountFrom',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      paymentAmountTo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo',
            in: 'query',
            name: 'paymentAmountTo',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      paymentCurrency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment currency filter. Filters based on an exact match on the currency.',
            in: 'query',
            name: 'paymentCurrency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      submittedDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date from range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateFrom',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      submittedDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date to range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateTo',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      paymentMemo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment memo filter. This filters via a case insensitive substring match.',
            in: 'query',
            name: 'paymentMemo',
            required: false,
            schema: { type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId\nThe supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,\nroutingNumber, accountNumber, remoteId, submittedDateTime and status\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.\nIf set to true, and you have permission, the PII values will be returned as their original unmasked values.\n',
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of payments',
      content: { 'application/json': { schema: ListPaymentsResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
  deprecated: true,
})

export const getV3PaymentauditPaymentsPaymentIdRoute = createRoute({
  method: 'get',
  path: '/v3/paymentaudit/payments/{paymentId}',
  tags: ['Payment Audit Service (Deprecated)'],
  summary: 'V3 Get Payment',
  description: 'Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)',
  operationId: 'getPaymentDetailsV3',
  request: {
    params: z.object({
      paymentId: z
        .uuid()
        .openapi({
          param: {
            description: 'Payment Id',
            in: 'path',
            name: 'paymentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.\nIf set to true, and you have permission, the PII values will be returned as their original unmasked values.\n',
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response, request completed okay',
      content: { 'application/json': { schema: PaymentResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV3PaymentauditPayoutsRoute = createRoute({
  method: 'get',
  path: '/v3/paymentaudit/payouts',
  tags: ['Payment Audit Service (Deprecated)'],
  summary: 'V3 Get Payouts for Payor',
  description: 'Deprecated (use /v4/paymentaudit/payouts instead)',
  operationId: 'getPayoutsForPayorV3',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payoutMemo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Payout Memo filter - case insensitive sub-string match',
            in: 'query',
            name: 'payoutMemo',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum([
          'ACCEPTED',
          'REJECTED',
          'SUBMITTED',
          'QUOTED',
          'INSTRUCTED',
          'COMPLETED',
          'INCOMPLETE',
          'CONFIRMED',
          'WITHDRAWN',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Payout Status',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              enum: [
                'ACCEPTED',
                'REJECTED',
                'SUBMITTED',
                'QUOTED',
                'INSTRUCTED',
                'COMPLETED',
                'INCOMPLETE',
                'CONFIRMED',
                'WITHDRAWN',
              ],
              type: 'string',
            },
          },
        }),
      submittedDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date from range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateFrom',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      submittedDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date to range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateTo',
            required: false,
            schema: { format: 'date', type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)\nDefault is submittedDateTime:asc\nThe supported sort fields are: submittedDateTime, instructedDateTime, status.\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payor data found',
      content: { 'application/json': { schema: GetPayoutsResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV3PaymentauditPayoutsPayoutIdRoute = createRoute({
  method: 'get',
  path: '/v3/paymentaudit/payouts/{payoutId}',
  tags: ['Payment Audit Service (Deprecated)'],
  summary: 'V3 Get Payments for Payout',
  description: 'Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)',
  operationId: 'getPaymentsForPayout_PA_V3',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id (UUID) of the payout.',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      remoteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The remote id of the payees.',
            in: 'query',
            name: 'remoteId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum([
          'ACCEPTED',
          'AWAITING_FUNDS',
          'FUNDED',
          'UNFUNDED',
          'BANK_PAYMENT_REQUESTED',
          'REJECTED',
          'ACCEPTED_BY_RAILS',
          'CONFIRMED',
          'FAILED',
          'RETURNED',
          'WITHDRAWN',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Payment Status',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              enum: [
                'ACCEPTED',
                'AWAITING_FUNDS',
                'FUNDED',
                'UNFUNDED',
                'BANK_PAYMENT_REQUESTED',
                'REJECTED',
                'ACCEPTED_BY_RAILS',
                'CONFIRMED',
                'FAILED',
                'RETURNED',
                'WITHDRAWN',
              ],
              type: 'string',
            },
          },
        }),
      sourceAmountFrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom',
            in: 'query',
            name: 'sourceAmountFrom',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sourceAmountTo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo',
            in: 'query',
            name: 'sourceAmountTo',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      paymentAmountFrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom',
            in: 'query',
            name: 'paymentAmountFrom',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      paymentAmountTo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo',
            in: 'query',
            name: 'paymentAmountTo',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      submittedDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date from range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateFrom',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      submittedDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date to range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateTo',
            required: false,
            schema: { format: 'date', type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '<p>List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId</p>\n<p>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,\nroutingNumber, accountNumber, remoteId, submittedDateTime and status</p>\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.\nIf set to true, and you have permission, the PII values will be returned as their original unmasked values.\n',
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response, data found okay',
      content: { 'application/json': { schema: GetPaymentsForPayoutResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
  deprecated: true,
})

export const getV3PaymentauditTransactionsRoute = createRoute({
  method: 'get',
  path: '/v3/paymentaudit/transactions',
  tags: ['Payment Audit Service (Deprecated)'],
  summary: 'V3 Export Transactions',
  description: 'Deprecated (use /v4/paymentaudit/transactions instead)',
  operationId: 'exportTransactionsCSVV3',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The Payor ID for whom you wish to run the report.\nFor a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.\n',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      startDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Start date, inclusive. Format is YYYY-MM-DD',
            in: 'query',
            name: 'startDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'End date, inclusive. Format is YYYY-MM-DD',
            in: 'query',
            name: 'endDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Export Transactions response',
      content: { 'application/csv': { schema: PayorAmlTransactionV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
  deprecated: true,
})

export const postV3PayoutsRoute = createRoute({
  method: 'post',
  path: '/v3/payouts',
  tags: ['Payouts'],
  summary: 'Submit Payout',
  description:
    "<p>Create a new payout and return a location header with a link to the payout</p>\n<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>\n<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>\n<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>\n",
  operationId: 'submitPayoutV3',
  request: {
    body: {
      description: 'Post amount to transfer using stored funding account details.',
      content: {
        'application/json': { schema: CreatePayoutRequestV3Schema },
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        amount: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64().min(1n))
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            minimum: 1,
                            description:
                              '<p>Amount to send to Payee</p>\n<p>The maximum payment amount is dependent on the currency</p>\n',
                            example: 1299,
                          }),
                        currency: z
                          .string()
                          .regex(/^[A-Z]{3}$/)
                          .length(3)
                          .openapi({
                            description:
                              'Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.',
                            example: 'USD',
                            title: 'ISO Currency Code',
                          }),
                        paymentMemo: z
                          .string()
                          .min(0)
                          .max(40)
                          .exactOptional()
                          .openapi({
                            description:
                              '<p>Any value here will override the memo value in the parent payout</p>\n<p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>\n',
                            example: 'my memo',
                          }),
                        paymentMetadata: z
                          .string()
                          .min(0)
                          .max(512)
                          .exactOptional()
                          .openapi({
                            description:
                              '<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>\n<p>The structure of the data will be dictated by the requirements of the payment rails</p>\n',
                            example: 'invoiceeId_123|abc001:12345|xyz002:4567',
                          }),
                        payorPaymentId: z
                          .string()
                          .min(0)
                          .max(40)
                          .exactOptional()
                          .openapi({
                            description:
                              'A reference identifier for the payor for the given payee payment',
                            example: '123211321ABSD',
                          }),
                        remoteId: z
                          .string()
                          .min(1)
                          .max(100)
                          .openapi({
                            description: 'Your identifier for the payee',
                            example: 'remoteId1234',
                          }),
                        remoteSystemId: z
                          .string()
                          .min(1)
                          .max(100)
                          .exactOptional()
                          .openapi({
                            description:
                              '<p>The identifier for the remote payments system if not Velo</p>\n<p>Should only be used after consultation with Velo Payments</p>\n',
                          }),
                        sourceAccountName: z
                          .string()
                          .min(1)
                          .max(64)
                          .openapi({
                            description:
                              'Must match a valid source account name belonging to the payor',
                            example: 'MyAccountName',
                          }),
                        transmissionType: z
                          .enum(['SAME_DAY_ACH', 'WIRE', 'ACH', 'LOCAL', 'SWIFT'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Optionally choose a specific transmission method for the payment',
                            example: 'ACH',
                          }),
                      })
                      .openapi({
                        description: 'Instruction for creating a payment',
                        example: {
                          amount: 1299,
                          currency: 'USD',
                          paymentMemo: 'my memo',
                          paymentMetadata: 'invoiceeId_123|abc001:12345|xyz002:4567',
                          payorPaymentId: '123211321ABSD',
                          remoteId: 'remoteId1234',
                          remoteSystemId: 'remoteSystemId',
                          sourceAccountName: 'MyAccountName',
                          transmissionType: 'ACH',
                        },
                        required: ['amount', 'currency', 'remoteId', 'sourceAccountName'],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Create a new payout from a CSV source file and return a location header with a link to get the payout',
                }),
              payorId: z
                .uuid()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description: 'Deprecated in v2.16. Any value supplied here will be ignored.',
                }),
              payoutFromPayorId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The id of the payor whose source account(s) will be debited. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted.',
                }),
              payoutToPayorId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The id of the payor whose payees will be paid. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted.',
                }),
            })
            .openapi({ required: [] }),
          example:
            'remoteId,currency,amount,paymentMemo,sourceAccountName,payorPaymentId\nremoteId1,USD,12345,ref1,myAccountUSD,1234567abc\nremoteId2,USD,23456,ref2,myAccountUSD,1234567def\n',
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful submission of the payout',
      headers: z.object({
        Location: {
          description: 'Reference to created payout',
          example:
            '<p>HTTP/1.1 202 Accepted</p>\n<p>Location: https://api.sandbox.velopayments.com/v3/payouts/04a3299d-afcf-42fb-a8b2-76097daf2b1b</p>\n',
          schema: z
            .url()
            .exactOptional()
            .openapi({
              description: 'Reference to created payout',
              example:
                '<p>HTTP/1.1 202 Accepted</p>\n<p>Location: https://api.sandbox.velopayments.com/v3/payouts/04a3299d-afcf-42fb-a8b2-76097daf2b1b</p>\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const getV3PayoutsPayoutIdRoute = createRoute({
  method: 'get',
  path: '/v3/payouts/{payoutId}',
  tags: ['Payouts'],
  summary: 'Get Payout Summary',
  description: 'Get payout summary - returns the current state of the payout.',
  operationId: 'getPayoutSummaryV3',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the payout',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of Payout',
      content: { 'application/json': { schema: PayoutSummaryResponseV3Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV3PayoutsPayoutIdRoute = createRoute({
  method: 'post',
  path: '/v3/payouts/{payoutId}',
  tags: ['Payouts'],
  summary: 'Instruct Payout',
  description: 'Instruct a payout to be made for the specified payoutId.',
  operationId: 'instructPayoutV3',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the payout',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Additional instruct payout parameters',
      content: { 'application/json': { schema: InstructPayoutRequestV3Schema } },
    },
  },
  responses: {
    202: { description: 'HTTP 202 Accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const deleteV3PayoutsPayoutIdRoute = createRoute({
  method: 'delete',
  path: '/v3/payouts/{payoutId}',
  tags: ['Payouts'],
  summary: 'Withdraw Payout',
  description:
    'Withdraw Payout will remove the payout details from the rails but the payout will still be accessible in payout service in WITHDRAWN status.',
  operationId: 'withdrawPayoutV3',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the payout',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'HTTP 202 Accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV3PayoutsPayoutIdPaymentsRoute = createRoute({
  method: 'get',
  path: '/v3/payouts/{payoutId}/payments',
  tags: ['Payouts'],
  summary: 'Retrieve payments for a payout',
  description: 'Retrieve payments for a payout',
  operationId: 'getPaymentsForPayoutV3',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the payout',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['ACCEPTED', 'REJECTED', 'WITHDRAWN', 'WITHDRAWABLE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Payment Status\n* ACCEPTED: any payment which was accepted at submission time (status may have changed since)\n* REJECTED: any payment rejected by initial submission processing\n* WITHDRAWN: any payment which has been withdrawn\n* WITHDRAWABLE: any payment eligible for withdrawal\n',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['ACCEPTED', 'REJECTED', 'WITHDRAWN', 'WITHDRAWABLE'], type: 'string' },
          },
        }),
      remoteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The remote id of the payees.',
            in: 'query',
            name: 'remoteId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      payorPaymentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Payor's Id of the Payment",
            in: 'query',
            name: 'payorPaymentId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sourceAccountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Physical Account Name',
            in: 'query',
            name: 'sourceAccountName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transmissionType: z
        .enum(['ACH', 'SAME_DAY_ACH', 'WIRE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Transmission Type\n* ACH\n* SAME_DAY_ACH\n* WIRE\n',
            in: 'query',
            name: 'transmissionType',
            required: false,
            schema: { enum: ['ACH', 'SAME_DAY_ACH', 'WIRE'], type: 'string' },
          },
        }),
      paymentMemo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Payment Memo of the Payment',
            in: 'query',
            name: 'paymentMemo',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payments for payout',
      content: { 'application/json': { schema: PagedPaymentsResponseV3Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV3PayoutsPayoutIdQuoteRoute = createRoute({
  method: 'post',
  path: '/v3/payouts/{payoutId}/quote',
  tags: ['Payouts'],
  summary: 'Create a quote for the payout',
  description: 'Create quote for a payout',
  operationId: 'createQuoteForPayoutV3',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the payout',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Quote for payout',
      content: { 'application/json': { schema: QuoteResponseV3Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const postV3PayoutsPayoutIdScheduleRoute = createRoute({
  method: 'post',
  path: '/v3/payouts/{payoutId}/schedule',
  tags: ['Payouts'],
  summary: 'Schedule a payout',
  description:
    '<p>Schedule a payout for auto-instruction in the future\nor update existing payout schedule if the payout has been scheduled before.</p>\n',
  operationId: 'scheduleForPayout',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the payout',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'schedule payout parameters',
      content: { 'application/json': { schema: SchedulePayoutRequestV3Schema } },
    },
  },
  responses: {
    204: { description: 'Payout is scheduled successfully' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const deleteV3PayoutsPayoutIdScheduleRoute = createRoute({
  method: 'delete',
  path: '/v3/payouts/{payoutId}/schedule',
  tags: ['Payouts'],
  summary: 'Deschedule a payout',
  description: 'Remove the schedule for a scheduled payout',
  operationId: 'deschedulePayout',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'Id of the payout',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Descheduled payout successfully' },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const getV3SourceAccountsRoute = createRoute({
  method: 'get',
  path: '/v3/sourceAccounts',
  tags: ['Source Accounts'],
  summary: 'Get list of source accounts',
  description: 'List source accounts.',
  operationId: 'getSourceAccountsV3',
  request: {
    query: z.object({
      physicalAccountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Physical Account Name',
            in: 'query',
            name: 'physicalAccountName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      physicalAccountId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The physical account ID',
            in: 'query',
            name: 'physicalAccountId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      fundingAccountId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The funding account ID',
            in: 'query',
            name: 'fundingAccountId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      includeUserDeleted: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A filter for retrieving both active accounts and user deleted ones',
            in: 'query',
            name: 'includeUserDeleted',
            required: false,
            schema: { format: 'boolean', type: 'string' },
          },
        }),
      type: SourceAccountTypeV3Schema.openapi({
        param: {
          description: 'The type of source account.',
          in: 'query',
          name: 'type',
          required: false,
          schema: { $ref: '#/components/schemas/SourceAccountTypeV3' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .regex(/[fundingRef|name|balance]+[:desc|:asc]/)
        .default('fundingRef:asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields e.g. ?sort=name:asc\nDefault is name:asc\nThe supported sort fields are - fundingRef, name, balance\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'fundingRef:asc',
              pattern: '[fundingRef|name|balance]+[:desc|:asc]',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List Source Account response',
      content: { 'application/json': { schema: ListSourceAccountResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV3SourceAccountsSourceAccountIdRoute = createRoute({
  method: 'get',
  path: '/v3/sourceAccounts/{sourceAccountId}',
  tags: ['Source Accounts'],
  summary: 'Get details about given source account.',
  description: 'Get details about given source account.',
  operationId: 'getSourceAccountV3',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: 'Source account id',
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Source account response',
      content: { 'application/json': { schema: SourceAccountResponseV3Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const deleteV3SourceAccountsSourceAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v3/sourceAccounts/{sourceAccountId}',
  tags: ['Funding Manager Private'],
  summary: 'Delete a source account by ID',
  description: 'Mark a source account as deleted by ID',
  operationId: 'deleteSourceAccountV3',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: 'Source account id',
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content - Source account is deleted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const postV3SourceAccountsSourceAccountIdFundingRequestRoute = createRoute({
  method: 'post',
  path: '/v3/sourceAccounts/{sourceAccountId}/fundingRequest',
  tags: ['Funding'],
  summary: 'Create Funding Request',
  description:
    '<p>Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo</p>\n',
  operationId: 'createFundingRequestV3',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: 'Source account id',
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Body to included amount to be funded',
      content: { 'application/json': { schema: FundingRequestV3Schema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Request Accepted',
      headers: z.object({
        Location: {
          description: 'Reference to created Funding Request',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Reference to created Funding Request',
              param: { required: false },
              example:
                'https://api.sandbox.velopayments.com/v1/fundings/8c1a8e1c-0147-4d8c-9f92-b696e1515750',
            }),
        },
      }),
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV3SourceAccountsSourceAccountIdNotificationsRoute = createRoute({
  method: 'post',
  path: '/v3/sourceAccounts/{sourceAccountId}/notifications',
  tags: ['Source Accounts'],
  summary: 'Set notifications',
  description:
    '<p>Set notifications for a given source account</p>\n<p>If the balance falls below the amount set in the request an email notification will be sent to the email address registered in the payor profile</p>\n',
  operationId: 'setNotificationsRequestV3',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: 'Source account id',
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Body to included minimum balance to set',
      content: { 'application/json': { schema: SetNotificationsRequest_2Schema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request Fulfilled' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV3SourceAccountsSourceAccountIdTransfersRoute = createRoute({
  method: 'post',
  path: '/v3/sourceAccounts/{sourceAccountId}/transfers',
  tags: ['Source Accounts'],
  summary: 'Transfer Funds between source accounts',
  description:
    "Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.",
  operationId: 'transferFundsV3',
  request: {
    params: z.object({
      sourceAccountId: z
        .uuid()
        .openapi({
          param: {
            description: "The 'from' source account id, which will be debited",
            in: 'path',
            name: 'sourceAccountId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Body',
      content: { 'application/json': { schema: TransferRequestV3Schema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request Processed' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PayeesRoute = createRoute({
  method: 'get',
  path: '/v4/payees',
  tags: ['Payees'],
  summary: 'List Payees',
  description: 'Get a paginated response listing the payees for a payor.',
  operationId: 'listPayeesV4',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-contracts': [
              {
                contractId: 1,
                matchers: [{ type: 'equal_to', value: '0a818933-087d-47f2-ad83-2f986ed087eb' }],
                value: '0a818933-087d-47f2-ad83-2f986ed087eb',
              },
            ],
          },
        }),
      watchlistStatus: WatchlistStatusV3Schema.openapi({
        param: {
          description: 'The watchlistStatus of the payees.',
          in: 'query',
          name: 'watchlistStatus',
          required: false,
          schema: { $ref: '#/components/schemas/WatchlistStatusV3' },
        },
      }).exactOptional(),
      disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Payee disabled',
            in: 'query',
            name: 'disabled',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      onboardedStatus: OnboardedStatusV4Schema.openapi({
        param: {
          description: 'The onboarded status of the payees.',
          in: 'query',
          name: 'onboardedStatus',
          required: false,
          schema: { $ref: '#/components/schemas/OnboardedStatusV4' },
        },
      }).exactOptional(),
      email: z
        .email()
        .exactOptional()
        .openapi({
          param: {
            description: 'Email address',
            in: 'query',
            name: 'email',
            required: false,
            schema: { example: 'bob@example.com', format: 'email', type: 'string' },
          },
          example: 'bob@example.com',
        }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The display name of the payees.',
            in: 'query',
            name: 'displayName',
            required: false,
            schema: { example: 'Bob Smith', type: 'string' },
          },
          example: 'Bob Smith',
        }),
      remoteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The remote id of the payees.',
            in: 'query',
            name: 'remoteId',
            required: false,
            schema: { example: 'remoteId123', type: 'string' },
          },
          example: 'remoteId123',
        }),
      payeeType: PayeeType_2Schema.openapi({
        param: {
          description: 'The onboarded status of the payees.',
          in: 'query',
          name: 'payeeType',
          required: false,
          schema: { $ref: '#/components/schemas/PayeeType_2' },
        },
      }).exactOptional(),
      payeeCountry: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The country of the payee - 2 letter ISO 3166-1 country code (upper case)',
            in: 'query',
            name: 'payeeCountry',
            required: false,
            schema: { example: 'US', type: 'string' },
          },
          example: 'US',
        }),
      ofacStatus: OfacStatusV4Schema.openapi({
        param: {
          description: 'The ofacStatus of the payees.',
          in: 'query',
          name: 'ofacStatus',
          required: false,
          schema: { $ref: '#/components/schemas/OfacStatusV4' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, example: 1, format: 'int32', type: 'integer' },
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size. Default is 25. Max allowable is 100.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, example: 25, format: 'int32', type: 'integer' },
          },
          example: 25,
        }),
      sort: z
        .string()
        .regex(/[a-zA-Z]+[:desc|:asc]/)
        .default('displayName:asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              "List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.\n",
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'displayName:asc',
              example: 'displayName:asc',
              pattern: '[a-zA-Z]+[:desc|:asc]',
              type: 'string',
            },
          },
          example: 'displayName:asc',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of Payee',
      content: { 'application/json': { schema: PagedPayeeResponseV4Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV4PayeesRoute = createRoute({
  method: 'post',
  path: '/v4/payees',
  tags: ['Payee Invitation'],
  summary: 'Initiate Payee Creation',
  description:
    '<p>Initiate the process of creating 1 to 2000 payees in a batch</p>\n<p>Use the batchId in the response to query for status.</p>\n<p>In addition to standard semantic validations, a 400 will also result if: </p>\n<ul>\n<li>there is a duplicate remote id within the batch</li>\n<li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and\nthat provided for another payee within the same batch).</li>\n</ul>\n<p>The validation at this stage is intra-batch only.</p>\n<p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>\n',
  operationId: 'v4CreatePayee',
  request: {
    body: {
      description: 'Post payees to create.',
      content: {
        'application/json': { schema: CreatePayeesRequestV4Schema },
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(CreatePayeesCSVRequestV4Schema),
                )
                .exactOptional()
                .openapi({ description: 'CSV File of payee data' }),
              payorId: z.uuid().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'HTTP Created. Body created only on CSV requests',
      content: { 'application/json': { schema: CreatePayeesCSVResponseV4Schema } },
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              description:
                'A url pointing to the location of the batch. This can be used to get the status of the batch',
              example:
                'https://api.sandbox.velopayments.com/v4/payees/batch/dbe7df3a-6b75-4bcb-97c5-45d25f828267',
            }),
        },
      }),
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PayeesBatchBatchIdRoute = createRoute({
  method: 'get',
  path: '/v4/payees/batch/{batchId}',
  tags: ['Payee Invitation'],
  summary: 'Query Batch Status',
  description:
    'Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).\n',
  operationId: 'queryBatchStatusV4',
  request: {
    params: z.object({
      batchId: z
        .uuid()
        .openapi({
          param: {
            description: 'Batch Id',
            in: 'path',
            name: 'batchId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Batch Status',
      content: { 'application/json': { schema: QueryBatchResponseV4Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PayeesDeltasRoute = createRoute({
  method: 'get',
  path: '/v4/payees/deltas',
  tags: ['Payees'],
  summary: 'List Payee Changes',
  description:
    'Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:\n- dbaName\n- displayName\n- email\n- onboardedStatus\n- payeeCountry\n- payeeId\n- remoteId\n',
  operationId: 'listPayeeChangesV4',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor ID to find associated Payees',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
            'x-contracts': [
              {
                contractId: 1,
                matchers: [{ type: 'equal_to', value: '0a818933-087d-47f2-ad83-2f986ed087eb' }],
                value: '0a818933-087d-47f2-ad83-2f986ed087eb',
              },
            ],
          },
        }),
      updatedSince: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm',
            in: 'query',
            name: 'updatedSince',
            required: true,
            schema: { format: 'date-time', type: 'string' },
            'x-contracts': [
              {
                contractId: 1,
                matchers: [{ type: 'equal_to', value: '2019-01-20T09:00:00+00:00' }],
                value: '2019-01-20T09:00:00+00:00',
              },
            ],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, example: 1, format: 'int32', type: 'integer' },
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size. Default is 100. Max allowable is 1000.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 100, example: 100, format: 'int32', type: 'integer' },
          },
          example: 100,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of Payee Changes',
      content: { 'application/json': { schema: PayeeDeltaResponseV4Schema } },
    },
    400: { description: 'Bad Request' },
  },
})

export const getV4PayeesPayorsPayorIdInvitationStatusRoute = createRoute({
  method: 'get',
  path: '/v4/payees/payors/{payorId}/invitationStatus',
  tags: ['Payee Invitation'],
  summary: 'Get Payee Invitation Status',
  description:
    'Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.\n',
  operationId: 'getPayeesInvitationStatusV4',
  request: {
    params: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'path',
            name: 'payorId',
            required: true,
            schema: {
              example: '9ac75325-5dcd-42d5-b992-175d7e0a035e',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '9ac75325-5dcd-42d5-b992-175d7e0a035e',
        }),
    }),
    query: z.object({
      payeeId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'query',
            name: 'payeeId',
            required: false,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
      invitationStatus: InvitationStatusV4Schema.openapi({
        param: {
          description: 'The invitation status of the payees.',
          in: 'query',
          name: 'invitationStatus',
          required: false,
          schema: { $ref: '#/components/schemas/InvitationStatusV4' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, example: 1, format: 'int32', type: 'integer' },
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size. Default is 25. Max allowable is 100.',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, example: 25, format: 'int32', type: 'integer' },
          },
          example: 25,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Payees with Invitaion status - filters of payeeId and invitationStatus',
      content: { 'application/json': { schema: PagedPayeeInvitationStatusResponseV4Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PayeesPayeeIdRoute = createRoute({
  method: 'get',
  path: '/v4/payees/{payeeId}',
  tags: ['Payees'],
  summary: 'Get Payee by Id',
  description: 'Get Payee by Id',
  operationId: 'getPayeeByIdV4',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
    query: z.object({
      sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.\nIf set to true, and you have permission, the PII values will be returned as their original unmasked values.\n',
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response, request completed okay',
      content: { 'application/json': { schema: PayeeDetailResponseV4Schema } },
    },
    404: { description: 'Payee Not found' },
  },
})

export const deleteV4PayeesPayeeIdRoute = createRoute({
  method: 'delete',
  path: '/v4/payees/{payeeId}',
  tags: ['Payees'],
  summary: 'Delete Payee by Id',
  description:
    '<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>\n<p>* Payee ID is not found</p>\n<p>* If Payee has not been on-boarded</p>\n<p>* If Payee is in grace period</p>\n<p>* If Payee has existing payments</p>\n',
  operationId: 'deletePayeeByIdV4',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
  },
  responses: {
    204: { description: 'No content. Payee Id accepted for deletion.' },
    400: { description: 'Bad Request. Payee Id failed validation for deletion.' },
    404: { description: 'Payee Id not found' },
  },
})

export const postV4PayeesPayeeIdInviteRoute = createRoute({
  method: 'post',
  path: '/v4/payees/{payeeId}/invite',
  tags: ['Payee Invitation'],
  summary: 'Resend Payee Invite',
  description:
    '<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>\n<p>Any previous invites to the payee by this Payor will be invalidated</p>\n',
  operationId: 'resendPayeeInviteV4',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
    body: {
      description: 'Provide Payor Id in body of request',
      content: { 'application/json': { schema: InvitePayeeRequestV4Schema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'the request was accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const postV4PayeesPayeeIdPayeeDetailsUpdateRoute = createRoute({
  method: 'post',
  path: '/v4/payees/{payeeId}/payeeDetailsUpdate',
  tags: ['Payees'],
  summary: 'Update Payee Details',
  description:
    '<p>Update payee details for the given Payee Id.</p>\n<p>Payors may only update the payee details if the payee has not yet onboarded</p>\n',
  operationId: 'payeeDetailsUpdateV4',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
    body: {
      description: 'Request to update payee details',
      content: { 'application/json': { schema: UpdatePayeeDetailsRequestV4Schema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request accepted' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const postV4PayeesPayeeIdRemoteIdUpdateRoute = createRoute({
  method: 'post',
  path: '/v4/payees/{payeeId}/remoteIdUpdate',
  tags: ['Payees'],
  summary: 'Update Payee Remote Id',
  description: '<p>Update the remote Id for the given Payee Id.</p>\n',
  request: {
    params: z.object({
      payeeId: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'path',
            name: 'payeeId',
            required: true,
            schema: {
              example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
              format: 'uuid',
              type: 'string',
            },
          },
          example: '2aa5d7e0-2ecb-403f-8494-1865ed0454e9',
        }),
    }),
    body: {
      description: 'Request to update payee remote id v4',
      content: { 'application/json': { schema: UpdateRemoteIdRequestV4Schema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Accepted, No Content' },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
    409: {
      description: 'The request contained data that would result in a duplicate value\n',
      content: { 'application/json': { schema: InlineResponse_409Schema } },
    },
  },
})

export const getV4PaymentauditFundingsRoute = createRoute({
  method: 'get',
  path: '/v4/paymentaudit/fundings',
  tags: ['Payment Audit Service'],
  summary: 'Get Fundings for Payor',
  description: '<p>Get a list of Fundings for a payor.</p>\n',
  operationId: 'getFundingsV4',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The account owner Payor ID',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      sourceAccountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The source account name',
            in: 'query',
            name: 'sourceAccountName',
            required: false,
            schema: { type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```\nDefault is no sort. The supported sort fields are: dateTime and amount.\n',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Fundings normal response',
      content: { 'application/json': { schema: GetFundingsResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PaymentauditPaymentsRoute = createRoute({
  method: 'get',
  path: '/v4/paymentaudit/payments',
  tags: ['Payment Audit Service'],
  summary: 'Get List of Payments',
  description: 'Get payments for the given payor Id',
  operationId: 'listPaymentsAuditV4',
  request: {
    query: z.object({
      payeeId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The UUID of the payee.',
            in: 'query',
            name: 'payeeId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account owner Payor Id. Required for external users.',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payorName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The payor’s name. This filters via a case insensitive substring match.',
            in: 'query',
            name: 'payorName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      remoteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The remote id of the payees.',
            in: 'query',
            name: 'remoteId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      remoteSystemId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the remote system that is orchestrating payments',
            in: 'query',
            name: 'remoteSystemId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum([
          'ACCEPTED',
          'AWAITING_FUNDS',
          'FUNDED',
          'UNFUNDED',
          'BANK_PAYMENT_REQUESTED',
          'REJECTED',
          'ACCEPTED_BY_RAILS',
          'CONFIRMED',
          'FAILED',
          'RETURNED',
          'WITHDRAWN',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Payment Status',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              enum: [
                'ACCEPTED',
                'AWAITING_FUNDS',
                'FUNDED',
                'UNFUNDED',
                'BANK_PAYMENT_REQUESTED',
                'REJECTED',
                'ACCEPTED_BY_RAILS',
                'CONFIRMED',
                'FAILED',
                'RETURNED',
                'WITHDRAWN',
              ],
              type: 'string',
            },
          },
        }),
      transmissionType: z
        .enum(['ACH', 'SAME_DAY_ACH', 'WIRE', 'LOCAL', 'GACHO'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Transmission Type\n* ACH\n* SAME_DAY_ACH\n* WIRE\n* GACHO\n',
            in: 'query',
            name: 'transmissionType',
            required: false,
            schema: { enum: ['ACH', 'SAME_DAY_ACH', 'WIRE', 'LOCAL', 'GACHO'], type: 'string' },
          },
        }),
      sourceAccountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source account name filter. This filters via a case insensitive substring match.',
            in: 'query',
            name: 'sourceAccountName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sourceAmountFrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom',
            in: 'query',
            name: 'sourceAmountFrom',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sourceAmountTo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo',
            in: 'query',
            name: 'sourceAmountTo',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sourceCurrency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source currency filter. Filters based on an exact match on the currency.',
            in: 'query',
            name: 'sourceCurrency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      paymentAmountFrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom',
            in: 'query',
            name: 'paymentAmountFrom',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      paymentAmountTo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo',
            in: 'query',
            name: 'paymentAmountTo',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      paymentCurrency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment currency filter. Filters based on an exact match on the currency.',
            in: 'query',
            name: 'paymentCurrency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      submittedDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date from range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateFrom',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      submittedDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date to range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateTo',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      paymentMemo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment memo filter. This filters via a case insensitive substring match.',
            in: 'query',
            name: 'paymentMemo',
            required: false,
            schema: { type: 'string' },
          },
        }),
      railsId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Payout Rails ID filter - case insensitive match.\nAny value is allowed, but you should use one of the supported railsId values.\nTo get this list of values, you should call the 'Get Supported Rails' endpoint.\n",
            in: 'query',
            name: 'railsId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      scheduledForDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'scheduledForDateFrom',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      scheduledForDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'scheduledForDateTo',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      scheduleStatus: z
        .enum(['ANY', 'SCHEDULED', 'EXECUTED', 'FAILED'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Payout Schedule Status',
            in: 'query',
            name: 'scheduleStatus',
            required: false,
            schema: { enum: ['ANY', 'SCHEDULED', 'EXECUTED', 'FAILED'], type: 'string' },
          },
        }),
      postInstructFxStatus: z
        .enum([
          'ANY',
          'INITIATED',
          'CANCELLED',
          'EXECUTED',
          'COMPLETED',
          'RETURNED',
          'RESUBMITTED',
          'REFUNDED',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The status of the post instruct FX step if one was required for the payment',
            in: 'query',
            name: 'postInstructFxStatus',
            required: false,
            schema: {
              enum: [
                'ANY',
                'INITIATED',
                'CANCELLED',
                'EXECUTED',
                'COMPLETED',
                'RETURNED',
                'RESUBMITTED',
                'REFUNDED',
              ],
              type: 'string',
            },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc\nThe supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,\nroutingNumber, accountNumber, remoteId, submittedDateTime, status and paymentId\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.\nIf set to true, and you have permission, the PII values will be returned as their original unmasked values.\n',
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of payments',
      content: { 'application/json': { schema: ListPaymentsResponseV4Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
  },
})

export const getV4PaymentauditPaymentsPaymentIdRoute = createRoute({
  method: 'get',
  path: '/v4/paymentaudit/payments/{paymentId}',
  tags: ['Payment Audit Service'],
  summary: 'Get Payment',
  description: 'Get the payment with the given id. This contains the payment history.\n',
  operationId: 'getPaymentDetailsV4',
  request: {
    params: z.object({
      paymentId: z
        .uuid()
        .openapi({
          param: {
            description: 'Payment Id',
            in: 'path',
            name: 'paymentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.\nIf set to true, and you have permission, the PII values will be returned as their original unmasked values.\n',
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response, request completed okay',
      content: { 'application/json': { schema: PaymentResponseV4Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PaymentauditPayoutStatisticsRoute = createRoute({
  method: 'get',
  path: '/v4/paymentaudit/payoutStatistics',
  tags: ['Payment Audit Service'],
  summary: 'Get Payout Statistics',
  description: '<p>Get payout statistics for a payor.</p>\n',
  operationId: 'getPayoutStatsV4',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account owner Payor ID. Required for external users.',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payout Statistics response',
      content: { 'application/json': { schema: GetPayoutStatisticsSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PaymentauditPayoutsRoute = createRoute({
  method: 'get',
  path: '/v4/paymentaudit/payouts',
  tags: ['Payment Audit Service'],
  summary: 'Get Payouts for Payor',
  description: 'Get List of payouts for payor\n',
  operationId: 'getPayoutsForPayorV4',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The id (UUID) of the payor funding the payout or the payor whose payees are being paid.',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      payoutMemo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Payout Memo filter - case insensitive sub-string match',
            in: 'query',
            name: 'payoutMemo',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum([
          'ACCEPTED',
          'REJECTED',
          'SUBMITTED',
          'QUOTED',
          'INSTRUCTED',
          'COMPLETED',
          'INCOMPLETE',
          'CONFIRMED',
          'WITHDRAWN',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Payout Status',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              enum: [
                'ACCEPTED',
                'REJECTED',
                'SUBMITTED',
                'QUOTED',
                'INSTRUCTED',
                'COMPLETED',
                'INCOMPLETE',
                'CONFIRMED',
                'WITHDRAWN',
              ],
              type: 'string',
            },
          },
        }),
      submittedDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date from range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateFrom',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      submittedDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date to range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateTo',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      fromPayorName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the payor whose payees are being paid. This filters via a case insensitive substring match.',
            in: 'query',
            name: 'fromPayorName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      scheduledForDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'scheduledForDateFrom',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      scheduledForDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'scheduledForDateTo',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      scheduleStatus: z
        .enum(['ANY', 'SCHEDULED', 'EXECUTED', 'FAILED'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Payout Schedule Status',
            in: 'query',
            name: 'scheduleStatus',
            required: false,
            schema: { enum: ['ANY', 'SCHEDULED', 'EXECUTED', 'FAILED'], type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)\nDefault is submittedDateTime:asc\nThe supported sort fields are: submittedDateTime, instructedDateTime, status, totalPayments, payoutId, scheduledFor\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payor data found',
      content: { 'application/json': { schema: GetPayoutsResponseSchema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PaymentauditPayoutsPayoutIdRoute = createRoute({
  method: 'get',
  path: '/v4/paymentaudit/payouts/{payoutId}',
  tags: ['Payment Audit Service'],
  summary: 'Get Payments for Payout',
  description: 'Get List of payments for Payout, allowing for RETURNED status\n',
  operationId: 'getPaymentsForPayoutV4',
  request: {
    params: z.object({
      payoutId: z
        .uuid()
        .openapi({
          param: {
            description: 'The id (UUID) of the payout.',
            in: 'path',
            name: 'payoutId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      remoteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The remote id of the payees.',
            in: 'query',
            name: 'remoteId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      remoteSystemId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the remote system that is orchestrating payments',
            in: 'query',
            name: 'remoteSystemId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum([
          'ACCEPTED',
          'AWAITING_FUNDS',
          'FUNDED',
          'UNFUNDED',
          'BANK_PAYMENT_REQUESTED',
          'REJECTED',
          'ACCEPTED_BY_RAILS',
          'CONFIRMED',
          'FAILED',
          'RETURNED',
          'WITHDRAWN',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Payment Status',
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              enum: [
                'ACCEPTED',
                'AWAITING_FUNDS',
                'FUNDED',
                'UNFUNDED',
                'BANK_PAYMENT_REQUESTED',
                'REJECTED',
                'ACCEPTED_BY_RAILS',
                'CONFIRMED',
                'FAILED',
                'RETURNED',
                'WITHDRAWN',
              ],
              type: 'string',
            },
          },
        }),
      sourceAmountFrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom',
            in: 'query',
            name: 'sourceAmountFrom',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sourceAmountTo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo',
            in: 'query',
            name: 'sourceAmountTo',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      paymentAmountFrom: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom',
            in: 'query',
            name: 'paymentAmountFrom',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      paymentAmountTo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo',
            in: 'query',
            name: 'paymentAmountTo',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      submittedDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date from range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateFrom',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      submittedDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The submitted date to range filter. Format is yyyy-MM-dd.',
            in: 'query',
            name: 'submittedDateTo',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      transmissionType: z
        .enum(['ACH', 'SAME_DAY_ACH', 'WIRE', 'LOCAL', 'GACHO'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Transmission Type\n* ACH\n* SAME_DAY_ACH\n* WIRE\n* GACHO\n',
            in: 'query',
            name: 'transmissionType',
            required: false,
            schema: { enum: ['ACH', 'SAME_DAY_ACH', 'WIRE', 'LOCAL', 'GACHO'], type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId\nThe supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,\nroutingNumber, accountNumber, remoteId, submittedDateTime and status\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.\nIf set to true, and you have permission, the PII values will be returned as their original unmasked values.\n',
            in: 'query',
            name: 'sensitive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response, data found okay',
      content: { 'application/json': { schema: GetPaymentsForPayoutResponseV4Schema } },
    },
    400: {
      description: 'Invalid request. See Error message payload for details of failure',
      content: { 'application/json': { schema: InlineResponse_400Schema } },
    },
    401: {
      description: 'Invalid access token. May be expired or invalid',
      content: { 'application/json': { schema: InlineResponse_401Schema } },
    },
    403: {
      description:
        'The authentication does not have permissions to access the resource\nThis usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions\n',
      content: { 'application/json': { schema: InlineResponse_403Schema } },
    },
    404: {
      description: 'The resource was not found or is no longer available\n',
      content: { 'application/json': { schema: InlineResponse_404Schema } },
    },
  },
})

export const getV4PaymentauditTransactionsRoute = createRoute({
  method: 'get',
  path: '/v4/paymentaudit/transactions',
  tags: ['Payment Audit Service'],
  summary: 'Export Transactions',
  description:
    'Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.',
  operationId: 'exportTransactionsCSVV4',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              '<p>The Payor ID for whom you wish to run the report.</p>\n<p>For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.</p>\n',
            in: 'query',
            name: 'payorId',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      startDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Start date, inclusive. Format is YYYY-MM-DD',
            in: 'query',
            name: 'startDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'End date, inclusive. Format is YYYY-MM-DD',
            in: 'query',
            name: 'endDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      include: z
        .enum(['payorOnly', 'payorAndDescendants'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "<p>Mode to determine whether to include other Payor's data in the results.</p>\n<p>May only be used if payorId is specified.</p>\n<p>Can be omitted or set to 'payorOnly' or 'payorAndDescendants'.</p>\n<p>payorOnly: Only include results for the specified Payor. This is the default if 'include' is omitted.</p>\n<p>payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.</p>\n<p>Note when a Payor requests the report and include=payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id</p>\n",
            in: 'query',
            name: 'include',
            required: false,
            schema: { enum: ['payorOnly', 'payorAndDescendants'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Export Transactions response',
      content: { 'application/csv': { schema: PayorAmlTransactionSchema } },
    },
    400: { description: 'invalid Request' },
    401: { description: 'Not Authorized' },
    403: { description: 'Forbidden' },
  },
})

export const getV4PaymentsDeltasRoute = createRoute({
  method: 'get',
  path: '/v4/payments/deltas',
  tags: ['Payment Audit Service'],
  summary: 'List Payment Changes',
  description: 'Get a paginated response listing payment changes.',
  operationId: 'listPaymentChangesV4',
  request: {
    query: z.object({
      payorId: z
        .uuid()
        .openapi({
          param: {
            description: 'The Payor ID to find associated Payments',
            in: 'query',
            name: 'payorId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      updatedSince: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm',
            in: 'query',
            name: 'updatedSince',
            required: true,
            schema: { format: 'date-time', type: 'string' },
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return in a page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Details of Payment Changes',
      content: { 'application/json': { schema: PaymentDeltaResponseSchema } },
    },
    400: { description: 'Bad Request' },
  },
})
