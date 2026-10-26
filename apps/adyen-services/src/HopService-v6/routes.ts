import { createRoute, z } from '@hono/zod-openapi'

const CollectInformationSchema = z
  .strictObject({
    bankDetails: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether [bank account details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#bank-accounts) must be collected. Default is **true**.',
      }),
    businessDetails: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether [business details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#organizations) must be collected. Default is **true**.',
      }),
    individualDetails: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether [individual details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#individuals) must be collected. Default is **true**.',
      }),
    legalArrangementDetails: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether [legal arrangement details](https://docs.adyen.com/classic-platforms/verification-checks/legal-arrangements) must be collected. Default is **true**.',
      }),
    pciQuestionnaire: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether answers to a [PCI questionnaire](https://docs.adyen.com/classic-platforms/platforms-for-partners#onboard-partner-platform) must be collected. Applies only to partner platforms. Default is **true**.',
      }),
    shareholderDetails: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether [shareholder details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#individuals) must be collected. Defaults to **true**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CollectInformation')

const FieldTypeSchema = z
  .strictObject({
    field: z.string().exactOptional().openapi({ description: 'The full name of the property.' }),
    fieldName: z
      .enum([
        'accountCode',
        'accountHolderCode',
        'accountHolderDetails',
        'accountNumber',
        'accountStateType',
        'accountStatus',
        'accountType',
        'address',
        'balanceAccount',
        'balanceAccountActive',
        'balanceAccountCode',
        'balanceAccountId',
        'bankAccount',
        'bankAccountCode',
        'bankAccountName',
        'bankAccountUUID',
        'bankBicSwift',
        'bankCity',
        'bankCode',
        'bankName',
        'bankStatement',
        'branchCode',
        'businessContact',
        'cardToken',
        'checkCode',
        'city',
        'companyRegistration',
        'constitutionalDocument',
        'controller',
        'country',
        'countryCode',
        'currency',
        'currencyCode',
        'dateOfBirth',
        'description',
        'destinationAccountCode',
        'document',
        'documentContent',
        'documentExpirationDate',
        'documentIssuerCountry',
        'documentIssuerState',
        'documentName',
        'documentNumber',
        'documentType',
        'doingBusinessAs',
        'drivingLicence',
        'drivingLicenceBack',
        'drivingLicenceFront',
        'drivingLicense',
        'email',
        'firstName',
        'formType',
        'fullPhoneNumber',
        'gender',
        'hopWebserviceUser',
        'houseNumberOrName',
        'iban',
        'idCard',
        'idCardBack',
        'idCardFront',
        'idNumber',
        'identityDocument',
        'individualDetails',
        'infix',
        'jobTitle',
        'lastName',
        'lastReviewDate',
        'legalArrangement',
        'legalArrangementCode',
        'legalArrangementEntity',
        'legalArrangementEntityCode',
        'legalArrangementLegalForm',
        'legalArrangementMember',
        'legalArrangementMembers',
        'legalArrangementName',
        'legalArrangementReference',
        'legalArrangementRegistrationNumber',
        'legalArrangementTaxNumber',
        'legalArrangementType',
        'legalBusinessName',
        'legalEntity',
        'legalEntityType',
        'linkedViasVirtualAccount',
        'logo',
        'merchantAccount',
        'merchantCategoryCode',
        'merchantHouseNumber',
        'merchantReference',
        'microDeposit',
        'name',
        'nationality',
        'originalReference',
        'ownerCity',
        'ownerCountryCode',
        'ownerDateOfBirth',
        'ownerHouseNumberOrName',
        'ownerName',
        'ownerPostalCode',
        'ownerState',
        'ownerStreet',
        'passport',
        'passportNumber',
        'payoutMethod',
        'payoutMethodCode',
        'payoutSchedule',
        'pciSelfAssessment',
        'personalData',
        'phoneCountryCode',
        'phoneNumber',
        'postalCode',
        'primaryCurrency',
        'reason',
        'registrationNumber',
        'returnUrl',
        'schedule',
        'shareholder',
        'shareholderCode',
        'shareholderCodeAndSignatoryCode',
        'shareholderCodeOrSignatoryCode',
        'shareholderType',
        'shareholderTypes',
        'shopperInteraction',
        'signatory',
        'signatoryCode',
        'socialSecurityNumber',
        'sourceAccountCode',
        'splitAccount',
        'splitConfigurationUUID',
        'splitCurrency',
        'splitValue',
        'splits',
        'stateOrProvince',
        'status',
        'stockExchange',
        'stockNumber',
        'stockTicker',
        'store',
        'storeDetail',
        'storeName',
        'storeReference',
        'street',
        'taxId',
        'tier',
        'tierNumber',
        'transferCode',
        'ultimateParentCompany',
        'ultimateParentCompanyAddressDetails',
        'ultimateParentCompanyAddressDetailsCountry',
        'ultimateParentCompanyBusinessDetails',
        'ultimateParentCompanyBusinessDetailsLegalBusinessName',
        'ultimateParentCompanyBusinessDetailsRegistrationNumber',
        'ultimateParentCompanyCode',
        'ultimateParentCompanyStockExchange',
        'ultimateParentCompanyStockNumber',
        'ultimateParentCompanyStockNumberOrStockTicker',
        'ultimateParentCompanyStockTicker',
        'unknown',
        'value',
        'verificationType',
        'virtualAccount',
        'visaNumber',
        'webAddress',
        'year',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the field.' }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FieldType')

const ErrorFieldTypeSchema = z
  .strictObject({
    errorCode: z.int32().exactOptional().openapi({ description: 'The validation error code.' }),
    errorDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the validation error.' }),
    fieldType: FieldTypeSchema.exactOptional().openapi({ description: 'The type of error field.' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorFieldType')

const ShowPagesSchema = z
  .strictObject({
    bankDetailsSummaryPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the page with bank account details must be shown. Defaults to **true**.',
      }),
    bankVerificationPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the bank check instant verification' details must be shown. Defaults to **true**.",
      }),
    businessDetailsSummaryPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the page with the company's or organization's details must be shown. Defaults to **true**.",
      }),
    checksOverviewPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the checks overview page must be shown. Defaults to **false**.',
      }),
    individualDetailsSummaryPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the page with the individual's details must be shown. Defaults to **true**.",
      }),
    legalArrangementsDetailsSummaryPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the page with the legal arrangements' details must be shown. Defaults to **true**.",
      }),
    manualBankAccountPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the page to manually add bank account' details must be shown. Defaults to **true**.",
      }),
    shareholderDetailsSummaryPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the page with the shareholders' details must be shown. Defaults to **true**.",
      }),
    welcomePage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the welcome page must be shown. Defaults to **false**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShowPages')

const GetOnboardingUrlRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description: 'The account holder code you provided when you created the account holder.',
      }),
    collectInformation: CollectInformationSchema.exactOptional().openapi({
      description:
        'Contains indicators whether the page should only collect information for specific [KYC checks](https://docs.adyen.com/classic-platforms/verification-checks). By default, the page collects information for all KYC checks that apply to the [legal entity type](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).',
    }),
    editMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if editing checks is allowed even if all the checks have passed.',
      }),
    mobileOAuthCallbackUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to which the account holder is redirected after completing an OAuth authentication with a bank through Trustly/PayMyBank.',
      }),
    platformName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The platform name which will show up in the welcome page.' }),
    returnUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL where the account holder will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the account holder will be redirected back to the default return URL configured in your platform account.",
      }),
    shopperLocale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language to be used in the page, specified by a combination of a language and country code. For example, **pt-BR**. \n\nIf not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.\n\nFor a list of supported languages, refer to [Change the page language](https://docs.adyen.com/classic-platforms/hosted-onboarding-page/customize-experience#change-page-language).',
      }),
    showPages: ShowPagesSchema.exactOptional().openapi({
      description:
        'Contains indicators whether specific pages must be shown to the account holder.',
    }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('GetOnboardingUrlRequest')

const GetOnboardingUrlResponseSchema = z
  .strictObject({
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Information about any invalid fields.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 30 seconds and can only be used once.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('GetOnboardingUrlResponse')

const GetPciUrlRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description: 'The account holder code you provided when you created the account holder.',
      }),
    returnUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters.',
      }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('GetPciUrlRequest')

const GetPciUrlResponseSchema = z
  .strictObject({
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Information about any invalid fields.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to the PCI compliance questionnaire where you should redirect your account holder. This URL must be used within 30 seconds and can only be used once.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('GetPciUrlResponse')

const ServiceErrorSchema = z
  .strictObject({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error code mapped to the error message.' }),
    errorType: z.string().exactOptional().openapi({ description: 'The category of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short explanation of the issue.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the payment.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP response status.' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceError')

const PostGetOnboardingUrlGetOnboardingUrlExample = {
  summary: 'Get a hosted onboarding page link',
  description:
    'Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder.',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    returnUrl: 'https://your.return-url.com/?submerchant=123',
  },
}

const PostGetOnboardingUrlGetOnboardingUrl_200Example = {
  summary: 'Hosted onboarding page link',
  description: 'Example response for requesting a hosted onboarding page link',
  value: {
    invalidFields: [],
    pspReference: '9115677600500127',
    resultCode: 'Success',
    redirectUrl: 'https://hop-test.adyen.com/hop/view/?token=<token>',
  },
}

const PostGetPciQuestionnaireUrlGetPciQuestionnaireUrlExample = {
  summary: 'Get a PCI questionnaire link',
  description:
    'Returns a link to an Adyen-hosted PCI compliance questionnaire that you can send to your account holder.',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    returnUrl: 'https://your.return-url.com/?submerchant=123',
  },
}

const PostGetPciQuestionnaireUrlGetPciQuestionnaireUrl_200Example = {
  summary: 'Hosted onboarding page link',
  description: 'Example response for requesting a hosted onboarding page link',
  value: {
    invalidFields: [],
    pspReference: '8315748692943050',
    resultCode: 'Success',
    redirectUrl: 'https://hop-test.adyen.com/hop/pci/?token=<token>',
  },
}

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postGetOnboardingUrlRoute = createRoute({
  method: 'post',
  path: '/getOnboardingUrl',
  tags: ['Hosted Onboarding Page'],
  summary: 'Get a link to a Adyen-hosted onboarding page',
  description:
    'Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/classic-platforms/onboard-users/hosted-onboarding-page).',
  operationId: 'post-getOnboardingUrl',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetOnboardingUrlRequestSchema,
          examples: { 'get-onboarding-url': PostGetOnboardingUrlGetOnboardingUrlExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetOnboardingUrlResponseSchema,
          examples: { 'get-onboarding-url': PostGetOnboardingUrlGetOnboardingUrl_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postGetPciQuestionnaireUrlRoute = createRoute({
  method: 'post',
  path: '/getPciQuestionnaireUrl',
  tags: ['PCI Compliance Questionnaire Page'],
  summary: 'Get a link to a PCI compliance questionnaire',
  description:
    'Returns a link to a PCI compliance questionnaire that you can send to your account holder.\n > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/classic-platforms/platforms-for-partners).',
  operationId: 'post-getPciQuestionnaireUrl',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetPciUrlRequestSchema,
          examples: {
            'get-pci-questionnaire-url': PostGetPciQuestionnaireUrlGetPciQuestionnaireUrlExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetPciUrlResponseSchema,
          examples: {
            'get-pci-questionnaire-url':
              PostGetPciQuestionnaireUrlGetPciQuestionnaireUrl_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})
