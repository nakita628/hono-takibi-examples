import { createRoute, z } from '@hono/zod-openapi'

const _1CreateanewtransactionRequestSchema = z
  .object({
    channel: z.string(),
    referenceId: z.string(),
    salesChannel: z.string(),
    urn: z.string().exactOptional(),
    value: z.int32(),
  })
  .openapi({
    example: {
      channel: '{{accountName}}',
      referenceId: '1234567',
      salesChannel: '1',
      urn: '',
      value: 100,
    },
    required: ['value', 'referenceId', 'channel', 'salesChannel'],
    title: '1.CreateanewtransactionRequest',
  })
  .openapi('_1CreateanewtransactionRequest')

const FieldsSchema = z
  .object({
    accountId: z.string(),
    address: z.string().nullable(),
    callbackUrl: z.string(),
    cardNumber: z.string(),
    document: z.string(),
    dueDate: z.string(),
    holderName: z.string(),
    validationCode: z.string(),
  })
  .openapi({
    example: {
      accountId: '',
      address: null,
      callbackUrl: '',
      cardNumber: '4111111111111',
      document: '8041734561',
      dueDate: '10/19',
      holderName: 'UserTest',
      validationCode: '231',
    },
    required: [
      'holderName',
      'cardNumber',
      'validationCode',
      'dueDate',
      'document',
      'accountId',
      'address',
      'callbackUrl',
    ],
    title: 'Fields',
  })
  .openapi('Fields')

const TransactionSchema = z
  .object({ id: z.string(), merchantName: z.string() })
  .openapi({
    example: { id: '{{transactionId}}', merchantName: '{{accountName}}' },
    required: ['id', 'merchantName'],
    title: 'Transaction',
  })
  .openapi('Transaction')

const _2SendPaymentsPrivateRequestSchema = z
  .object({
    currencyCode: z.string(),
    fields: FieldsSchema,
    installments: z.int32(),
    installmentsInterestRate: z.int32(),
    installmentsValue: z.int32(),
    paymentSystem: z.int32(),
    referenceValue: z.int32(),
    transaction: TransactionSchema,
    value: z.int32(),
  })
  .openapi({
    example: {
      currencyCode: 'BRL',
      fields: {
        accountId: '',
        address: null,
        callbackUrl: '',
        cardNumber: '4111111111111',
        document: '8041734561',
        dueDate: '10/19',
        holderName: 'UserTest',
        validationCode: '231',
      },
      installments: 1,
      installmentsInterestRate: 0,
      installmentsValue: 100,
      paymentSystem: 2,
      referenceValue: 100,
      transaction: { id: '{{transactionId}}', merchantName: '{{accountName}}' },
      value: 100,
    },
    required: [
      'paymentSystem',
      'installments',
      'currencyCode',
      'value',
      'installmentsInterestRate',
      'installmentsValue',
      'referenceValue',
      'fields',
      'transaction',
    ],
    title: '2.SendPaymentsPrivateRequest',
  })
  .openapi('_2SendPaymentsPrivateRequest')

const _2SendPaymentsPublicRequestSchema = z
  .object({
    currencyCode: z.string(),
    fields: FieldsSchema,
    installments: z.int32(),
    installmentsInterestRate: z.int32(),
    installmentsValue: z.int32(),
    paymentSystem: z.int32(),
    referenceValue: z.int32(),
    transaction: TransactionSchema,
    value: z.int32(),
  })
  .openapi({
    example: {
      currencyCode: 'BRL',
      fields: {
        accountId: '',
        address: null,
        callbackUrl: '',
        cardNumber: '5378244888889174',
        document: '8041734561',
        dueDate: '10/19',
        holderName: 'UserTest',
        validationCode: '231',
      },
      installments: 1,
      installmentsInterestRate: 0,
      installmentsValue: 100,
      paymentSystem: 4,
      referenceValue: 100,
      transaction: { id: '{{transactionId}}', merchantName: '{{accountName}}' },
      value: 100,
    },
    required: [
      'paymentSystem',
      'installments',
      'currencyCode',
      'value',
      'installmentsInterestRate',
      'installmentsValue',
      'referenceValue',
      'fields',
      'transaction',
    ],
    title: '2.SendPaymentsPublicRequest',
  })
  .openapi('_2SendPaymentsPublicRequest')

const Fields3Schema = z
  .object({
    accountId: z.string(),
    address: z.string().nullable(),
    callbackUrl: z.string(),
    firstDigits: z.string(),
    validationCode: z.string(),
  })
  .openapi({
    example: {
      accountId: '44D964F2053642E888E3B23549937F87',
      address: null,
      callbackUrl: '',
      firstDigits: '411111',
      validationCode: '231',
    },
    required: ['validationCode', 'accountId', 'firstDigits', 'address', 'callbackUrl'],
    title: 'Fields3',
  })
  .openapi('Fields3')

const _2SendPaymentsWithSavedCreditCardRequestSchema = z
  .object({
    currencyCode: z.string(),
    fields: Fields3Schema,
    installments: z.int32(),
    installmentsInterestRate: z.int32(),
    installmentsValue: z.int32(),
    paymentSystem: z.int32(),
    referenceValue: z.int32(),
    transaction: TransactionSchema,
    value: z.int32(),
  })
  .openapi({
    example: {
      currencyCode: 'BRL',
      fields: {
        accountId: '44D964F2053642E888E3B23549937F87',
        address: null,
        callbackUrl: '',
        firstDigits: '411111',
        validationCode: '231',
      },
      installments: 1,
      installmentsInterestRate: 0,
      installmentsValue: 100,
      paymentSystem: 2,
      referenceValue: 100,
      transaction: { id: '{{transactionId}}', merchantName: '{{accountName}}' },
      value: 100,
    },
    required: [
      'paymentSystem',
      'installments',
      'currencyCode',
      'value',
      'installmentsInterestRate',
      'installmentsValue',
      'referenceValue',
      'fields',
      'transaction',
    ],
    title: '2.SendPaymentsWithSavedCreditCardRequest',
  })
  .openapi('_2SendPaymentsWithSavedCreditCardRequest')

const _3SendAdditionalDataRequestSchema = z
  .object({ name: z.string(), value: z.string() })
  .openapi({
    example: [
      {
        name: 'cart',
        value:
          '{"items":[{"id":"122323","name":"Tenis Preto I","value":1000,"quantity":1,"shippingDiscount":0,"discount":50},{"id":"122324","name":"Tenis Nike Azul","value":1100,"quantity":1,"shippingDiscount":0,"discount":50}],"freight":200,"tax":0}',
      },
      {
        name: 'clientProfileData',
        value:
          '{"id":"profileId123","email":"teste@teste.com","firstName":"Joao","lastName":"Baptista","document":"06134240040","phone":"+551433118100","documentType":"CPF","corporateName":null,"tradeName":null,"corporateDocument":null,"stateInscription":null,"postalCode":"22011-050","address":{"receiverName":"Ellen","postalCode":"22011050","city":"RIO DE JANEIRO","state":"RJ","country":"BRA","street":"RUA  GENERAL AZEVEDO PIMENTEL","number":"12345","neighborhood":"COPACABANA","complement":"APTO 302","reference":null},"gender":null,"birthDate":null,"corporatePhone":null,"isCorporate":false}',
      },
      {
        name: 'shippingData',
        value:
          '{"receiverName":"Rodrigo Saens","postalCode":"65035430","city":"SAO LUIS","state":"MA","country":"BRA","street":"AV NEWTON  ","number":"321","neighborhood":"MONTE CATELO","complement":"APTO 102","reference":null}',
      },
    ],
    required: ['name', 'value'],
    title: '3.SendAdditionalDataRequest',
  })
  .openapi('_3SendAdditionalDataRequest')

const _4DoauthorizationRequestSchema = z
  .object({
    prepareForRecurrency: z.boolean(),
    softDescriptor: z.string(),
    transactionId: z.string(),
  })
  .openapi({
    example: {
      prepareForRecurrency: false,
      softDescriptor: '{{accountName}}',
      transactionId: '{{transactionId}}',
    },
    required: ['transactionId', 'softDescriptor', 'prepareForRecurrency'],
    title: '4.DoauthorizationRequest',
  })
  .openapi('_4DoauthorizationRequest')

const Payment1Schema = z
  .object({ href: z.string() })
  .openapi({
    example: {
      href: '/api/pvt/transactions/074D48049B19403A930FA848C6BE4AF9/payments/87055E7199A446519EB07F1243D5B8BE',
    },
    required: ['href'],
    title: 'Payment1',
  })
  .openapi('Payment1')

const ActionSchema = z
  .object({
    connectorResponse: z.string().nullable(),
    date: z.string(),
    payment: Payment1Schema,
    paymentId: z.string(),
    type: z.string(),
    value: z.int32(),
  })
  .openapi({
    example: {
      connectorResponse: null,
      date: '2018-06-05T12:55:58.6262759Z',
      payment: {
        href: '/api/pvt/transactions/074D48049B19403A930FA848C6BE4AF9/payments/87055E7199A446519EB07F1243D5B8BE',
      },
      paymentId: '87055E7199A446519EB07F1243D5B8BE',
      type: 'auto-settlement',
      value: 4499000,
    },
    required: ['paymentId', 'payment', 'date', 'type', 'value', 'connectorResponse'],
    title: 'Action',
  })
  .openapi('Action')

const AntifraudSchema = z
  .object({ affiliationId: z.string().nullable(), implementation: z.string().nullable() })
  .openapi({
    example: { affiliationId: null, implementation: null },
    required: ['implementation', 'affiliationId'],
    title: 'Antifraud',
  })
  .openapi('Antifraud')

const Antifraud1Schema = z
  .object({ affiliationId: z.string() })
  .openapi({
    example: { affiliationId: 'f952588c-8b41-41cc-a06f-c0f48f7320ef' },
    required: ['affiliationId'],
    title: 'Antifraud1',
  })
  .openapi('Antifraud1')

const CancellationsSchema = z
  .object({ href: z.string() })
  .openapi({
    example: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/cancellations' },
    required: ['href'],
    title: 'Cancellations',
  })
  .openapi('Cancellations')

const CancelthetransactionRequestSchema = z
  .object({
    minicart: z
      .object({
        freight: z.int32().exactOptional(),
        items: z.array(z.any()).exactOptional(),
        tax: z.int32().exactOptional(),
      })
      .default({})
      .exactOptional()
      .openapi({
        description:
          'This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment.',
        required: [],
      }),
    value: z.int32().openapi({ description: 'Value of the purchase.' }),
  })
  .default({
    minicart: {
      freight: 200,
      items: [
        {
          discount: 50,
          id: '122323',
          name: 'Tenis Preto I',
          quantity: 1,
          shippingDiscount: 0,
          value: 1000,
        },
        {
          discount: 50,
          id: '122324',
          name: 'Tenis Nike Azul',
          quantity: 1,
          shippingDiscount: 0,
          value: 1100,
        },
      ],
      tax: 0,
    },
    value: 2300,
  })
  .openapi({ required: ['value'], title: 'CancelthetransactionRequest' })
  .openapi('CancelthetransactionRequest')

const ConfigurationSchema = z
  .object({ name: z.string(), value: z.string() })
  .openapi({
    example: {
      name: 'HowTo',
      value: 'https://developercielo.github.io/Habilitacao-meios-de-pagamento/',
    },
    required: ['name', 'value'],
    title: 'Configuration',
  })
  .openapi('Configuration')

const ConnectorSchema = z
  .object({ affiliationId: z.string(), implementation: z.string() })
  .openapi({
    example: {
      affiliationId: 'e046d326-5421-45ab-95ae-f13d37f260b5',
      implementation: 'Vtex.PaymentGateway.Connectors.PromissoryConnector',
    },
    required: ['implementation', 'affiliationId'],
    title: 'Connector',
  })
  .openapi('Connector')

const ErrorSchema = z
  .object({ code: z.string(), exception: z.string().nullable(), message: z.string() })
  .openapi({
    example: { code: '1', exception: null, message: 'Value must be greater than Zero' },
    required: ['code', 'message', 'exception'],
    title: 'Error',
  })
  .openapi('Error')

const FieldSchema = z
  .object({ name: z.string(), value: z.string() })
  .openapi({
    example: { name: 'owner', value: 'vtexappkey-appvtex' },
    required: ['name', 'value'],
    title: 'Field',
  })
  .openapi('Field')

const Fields1Schema = z
  .object({ name: z.string(), value: z.string() })
  .openapi({
    example: { name: 'affiliationId', value: 'c4016e3b-9ed9-4735-98dc-f803c93c5e5c' },
    required: ['name', 'value'],
    title: 'Fields1',
  })
  .openapi('Fields1')

const InsertAffiliationRequestSchema = z
  .object({
    configuration: z.array(ConfigurationSchema).openapi({ description: '' }),
    implementation: z.string(),
    isConfigured: z.boolean(),
    isdelivered: z.boolean(),
    name: z.string(),
  })
  .openapi({
    example: {
      configuration: [
        {
          name: 'HowTo',
          value: 'https://developercielo.github.io/Habilitacao-meios-de-pagamento/',
        },
        { name: 'MerchantId', value: 'sampleData' },
        { name: 'MerchantKey', value: 'sampleData' },
        { name: 'softDescriptor', value: 'teste' },
        { name: 'bankInvoiceProvider', value: 'Disabled' },
        { name: 'bankIDebitProvider', value: 'Disabled' },
        { name: 'useEarlySecurityCapture', value: '0' },
        { name: 'isProduction', value: 'false' },
        { name: 'bankDebitProvider', value: 'Disabled' },
        { name: 'Registered', value: 'false' },
      ],
      implementation: 'Vtex.PaymentGateway.Connectors.CieloV3Connector',
      isConfigured: true,
      isdelivered: true,
      name: 'CieloV3 - Teste Ellen',
    },
    required: ['implementation', 'name', 'configuration', 'isdelivered', 'isConfigured'],
    title: 'InsertAffiliationRequest',
  })
  .openapi('InsertAffiliationRequest')

const IssuerSchema = z
  .object({ name: z.string().nullable() })
  .openapi({ example: { name: null }, required: ['name'], title: 'Issuer' })
  .openapi('Issuer')

const PaymentSystemSchema = z
  .object({ id: z.int32(), implementation: z.string().nullable(), name: z.string() })
  .openapi({
    example: { id: 47, implementation: null, name: 'Cash' },
    required: ['id', 'name', 'implementation'],
    title: 'PaymentSystem',
  })
  .openapi('PaymentSystem')

const SalesChannelSchema = z
  .object({ id: z.string() })
  .openapi({ example: { id: ':ALL:' }, required: ['id'], title: 'SalesChannel' })
  .openapi('SalesChannel')

const InsertRuleRequestSchema = z
  .object({
    antifraud: AntifraudSchema,
    beginDate: z.string().nullable(),
    condition: z.string().nullable(),
    connector: ConnectorSchema,
    country: z.string().nullable(),
    dateIntervals: z.string().nullable(),
    enabled: z.boolean(),
    endDate: z.string().nullable(),
    installmentOptions: z.string().nullable(),
    installmentsService: z.string().nullable(),
    isDefault: z.boolean(),
    isSelfAuthorized: z.string().nullable(),
    issuer: IssuerSchema,
    multiMerchantList: z.string().nullable(),
    name: z.string(),
    paymentSystem: PaymentSystemSchema,
    requiresAuthentication: z.string().nullable(),
    salesChannels: z.array(SalesChannelSchema).openapi({ description: '' }),
  })
  .openapi({
    example: {
      antifraud: { affiliationId: null, implementation: null },
      beginDate: null,
      condition: null,
      connector: {
        affiliationId: 'e046d326-5421-45ab-95ae-f13d37f260b5',
        implementation: 'Vtex.PaymentGateway.Connectors.PromissoryConnector',
      },
      country: null,
      dateIntervals: null,
      enabled: true,
      endDate: null,
      installmentOptions: null,
      installmentsService: null,
      isDefault: false,
      isSelfAuthorized: null,
      issuer: { name: null },
      multiMerchantList: null,
      name: 'Cash - Custom',
      paymentSystem: { id: 47, implementation: null, name: 'Cash' },
      requiresAuthentication: null,
      salesChannels: [{ id: ':ALL:' }],
    },
    required: [
      'name',
      'salesChannels',
      'paymentSystem',
      'connector',
      'issuer',
      'antifraud',
      'installmentOptions',
      'isSelfAuthorized',
      'requiresAuthentication',
      'enabled',
      'installmentsService',
      'isDefault',
      'beginDate',
      'endDate',
      'condition',
      'multiMerchantList',
      'country',
      'dateIntervals',
    ],
    title: 'InsertRuleRequest',
  })
  .openapi('InsertRuleRequest')

const OptionSchema = z
  .object({ interestRate: z.number(), quantity: z.int32(), value: z.number() })
  .openapi({
    example: { interestRate: 0, quantity: 1, value: 10 },
    required: ['quantity', 'value', 'interestRate'],
    title: 'Option',
  })
  .openapi('Option')

const SelfSchema = z
  .object({ href: z.string() })
  .openapi({ example: { href: '/api/pvt/payment-systems/2' }, required: ['href'], title: 'Self' })
  .openapi('Self')

const PaymentSchema = z
  .object({
    bin: z.string().nullable(),
    id: z.int32(),
    isDefault: z.boolean(),
    name: z.string().nullable(),
    self: SelfSchema,
    value: z.number(),
  })
  .openapi({
    example: {
      bin: null,
      id: 2,
      isDefault: false,
      name: 'ERedeV2 - Nova Visa',
      self: { href: '/api/pvt/payment-systems/2' },
      value: 10,
    },
    required: ['id', 'name', 'bin', 'value', 'isDefault', 'self'],
    title: 'Payment',
  })
  .openapi('Payment')

const InstallmentSchema = z
  .object({ options: z.array(OptionSchema).openapi({ description: '' }), payment: PaymentSchema })
  .openapi({
    example: {
      options: [{ interestRate: 0, quantity: 1, value: 10 }],
      payment: {
        bin: null,
        id: 2,
        isDefault: false,
        name: 'ERedeV2 - Nova Visa',
        self: { href: '/api/pvt/payment-systems/2' },
        value: 10,
      },
    },
    required: ['payment', 'options'],
    title: 'Installment',
  })
  .openapi('Installment')

const InstallmentOptionsSchema = z
  .object({ interestRateMethod: z.string().nullable() })
  .openapi({
    example: { interestRateMethod: null },
    required: ['interestRateMethod'],
    title: 'InstallmentOptions',
  })
  .openapi('InstallmentOptions')

const InteractionsSchema = z
  .object({ href: z.string() })
  .openapi({
    example: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/interactions' },
    required: ['href'],
    title: 'Interactions',
  })
  .openapi('Interactions')

const InvalidRequestValueSchema = z
  .object({ error: ErrorSchema })
  .openapi({
    example: { error: { code: '1', exception: null, message: 'Value must be greater than Zero' } },
    required: ['error'],
    title: 'InvalidRequestValue',
  })
  .openapi('InvalidRequestValue')

const PaymentDetailsResponseSchema = z
  .object({
    ConnectorResponses: z.string().nullable(),
    ShowConnectorResponses: z.boolean(),
    allowInstallments: z.boolean(),
    allowIssuer: z.boolean(),
    allowNotification: z.boolean(),
    connector: z.string(),
    connectorResponse: z.string().nullable(),
    currencyCode: z.string().nullable(),
    description: z.string().nullable(),
    fields: z.array(Fields1Schema).openapi({ description: '' }),
    group: z.string(),
    id: z.string(),
    installments: z.int32(),
    installmentsInterestRate: z.int32(),
    installmentsValue: z.int32(),
    isAvailable: z.boolean(),
    isCustom: z.boolean(),
    merchantName: z.string().nullable(),
    paymentSystem: z.int32(),
    paymentSystemName: z.string(),
    provider: z.string().nullable(),
    referenceValue: z.int32(),
    returnCode: z.string().nullable(),
    returnMessage: z.string().nullable(),
    self: SelfSchema,
    sheets: z.string().nullable(),
    status: z.string(),
    tid: z.string().nullable(),
    value: z.int32(),
  })
  .openapi({
    example: {
      ConnectorResponses: null,
      ShowConnectorResponses: false,
      allowInstallments: true,
      allowIssuer: true,
      allowNotification: false,
      connector: 'E-Rede V2',
      connectorResponse: null,
      currencyCode: null,
      description: null,
      fields: [
        { name: 'affiliationId', value: 'c4016e3b-9ed9-4735-98dc-f803c93c5e5c' },
        { name: 'callbackUrl', value: '1' },
        { name: 'baseUrl', value: 'https://gatewayqa.vtexpayments.com.br:443' },
        { name: 'cardHolder', value: 'UserTest' },
        { name: 'firstDigits', value: '444433' },
        { name: 'lastDigits', value: '1111' },
        { name: 'expiryMonth', value: '10' },
        { name: 'expiryYear', value: '2019' },
        { name: 'accountId', value: 'A14180691F1D4CC9941202E10C6B1A33' },
        { name: 'connector', value: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector' },
      ],
      group: 'creditCard',
      id: '712B47E0AB4F4E63BB5FC1DB445AC0B9',
      installments: 1,
      installmentsInterestRate: 0,
      installmentsValue: 100,
      isAvailable: true,
      isCustom: false,
      merchantName: null,
      paymentSystem: 2,
      paymentSystemName: 'Visa',
      provider: null,
      referenceValue: 100,
      returnCode: null,
      returnMessage: null,
      self: {
        href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments/712B47E0AB4F4E63BB5FC1DB445AC0B9',
      },
      sheets: null,
      status: 'Received',
      tid: null,
      value: 100,
    },
    required: [
      'id',
      'paymentSystem',
      'paymentSystemName',
      'merchantName',
      'group',
      'isCustom',
      'allowInstallments',
      'allowIssuer',
      'allowNotification',
      'isAvailable',
      'description',
      'self',
      'tid',
      'returnCode',
      'returnMessage',
      'status',
      'connector',
      'ConnectorResponses',
      'connectorResponse',
      'ShowConnectorResponses',
      'value',
      'installmentsInterestRate',
      'installmentsValue',
      'referenceValue',
      'installments',
      'currencyCode',
      'provider',
      'fields',
      'sheets',
    ],
    title: 'PaymentDetailsResponse',
  })
  .openapi('PaymentDetailsResponse')

const RuleSchema = z
  .object({
    antifraudImplementation: z.string().nullable(),
    connectorImplementation: z.string(),
    id: z.string(),
  })
  .openapi({
    example: {
      antifraudImplementation: null,
      connectorImplementation: 'Vtex.PaymentGateway.Connectors.PayPalPlusConnector',
      id: '2d062b92-f247-4935-a237-8e309e2b4422',
    },
    required: ['id', 'connectorImplementation', 'antifraudImplementation'],
    title: 'Rule',
  })
  .openapi('Rule')

const ValidatorSchema = z
  .object({
    cardCodeMask: z.string().nullable(),
    cardCodeRegex: z.string().nullable(),
    mask: z.string().nullable(),
    regex: z.string().nullable(),
    useBillingAddress: z.boolean(),
    useCardHolderName: z.boolean(),
    useCvv: z.boolean(),
    useExpirationDate: z.boolean(),
    validCardLengths: z.string().nullable(),
    weights: z.array(z.int32()).nullable().openapi({ description: '' }),
  })
  .openapi({
    example: {
      cardCodeMask: null,
      cardCodeRegex: null,
      mask: null,
      regex: null,
      useBillingAddress: false,
      useCardHolderName: false,
      useCvv: false,
      useExpirationDate: false,
      validCardLengths: null,
      weights: null,
    },
    required: [
      'regex',
      'mask',
      'cardCodeMask',
      'cardCodeRegex',
      'weights',
      'useCvv',
      'useExpirationDate',
      'useCardHolderName',
      'useBillingAddress',
      'validCardLengths',
    ],
    title: 'Validator',
  })
  .openapi('Validator')

const PaymentSystemsResponseSchema = z
  .object({
    affiliationId: z.string().nullable(),
    allowCommercialCondition: z.boolean(),
    allowCommercialPolicy: z.boolean(),
    allowCountry: z.boolean(),
    allowInstallments: z.boolean(),
    allowIssuer: z.boolean(),
    allowMultiple: z.boolean(),
    allowNotification: z.boolean(),
    allowPeriod: z.boolean(),
    antifraudConnectorImplementation: z.string().nullable(),
    connectorId: z.int32(),
    connectorImplementation: z.string(),
    description: z.string().nullable(),
    dueDate: z.string(),
    fields: z.string().nullable(),
    groupName: z.string(),
    id: z.int32(),
    implementation: z.string(),
    isAvailable: z.boolean(),
    isCustom: z.boolean(),
    isSelfAuthorized: z.boolean(),
    name: z.string(),
    requiresDocument: z.boolean(),
    requiresPhone: z.boolean(),
    rules: z.array(RuleSchema).openapi({ description: '' }),
    validator: ValidatorSchema,
  })
  .openapi({
    example: {
      affiliationId: null,
      allowCommercialCondition: false,
      allowCommercialPolicy: true,
      allowCountry: false,
      allowInstallments: false,
      allowIssuer: false,
      allowMultiple: true,
      allowNotification: false,
      allowPeriod: true,
      antifraudConnectorImplementation: null,
      connectorId: 0,
      connectorImplementation: 'Vtex.PaymentGateway.Connectors.PayPalPlusConnector',
      description: null,
      dueDate: '2016-04-16T14:52:03.7360354Z',
      fields: null,
      groupName: 'PayPalPlus',
      id: 49,
      implementation: 'Vtex.PaymentGateway.PayPalPlus.PayPalPlusPayment',
      isAvailable: true,
      isCustom: false,
      isSelfAuthorized: false,
      name: 'PayPalPlus',
      requiresDocument: false,
      requiresPhone: false,
      rules: [
        {
          antifraudImplementation: null,
          connectorImplementation: 'Vtex.PaymentGateway.Connectors.PayPalPlusConnector',
          id: '2d062b92-f247-4935-a237-8e309e2b4422',
        },
      ],
      validator: {
        cardCodeMask: null,
        cardCodeRegex: null,
        mask: null,
        regex: null,
        useBillingAddress: false,
        useCardHolderName: false,
        useCvv: false,
        useExpirationDate: false,
        validCardLengths: null,
        weights: null,
      },
    },
    required: [
      'id',
      'name',
      'connectorId',
      'requiresDocument',
      'requiresPhone',
      'implementation',
      'connectorImplementation',
      'antifraudConnectorImplementation',
      'groupName',
      'isCustom',
      'isSelfAuthorized',
      'allowInstallments',
      'allowMultiple',
      'allowIssuer',
      'allowCountry',
      'allowCommercialPolicy',
      'allowCommercialCondition',
      'allowPeriod',
      'isAvailable',
      'description',
      'validator',
      'rules',
      'fields',
      'dueDate',
      'allowNotification',
      'affiliationId',
    ],
    title: 'PaymentSystemsResponse',
  })
  .openapi('PaymentSystemsResponse')

const PaymentsSchema = z
  .object({ href: z.string() })
  .openapi({
    example: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/payments' },
    required: ['href'],
    title: 'Payments',
  })
  .openapi('Payments')

const PaymentsByTransactionResponseSchema = z
  .object({
    ConnectorResponses: z.string().nullable(),
    ShowConnectorResponses: z.boolean(),
    allowInstallments: z.boolean(),
    allowIssuer: z.boolean(),
    allowNotification: z.boolean(),
    connector: z.string(),
    connectorResponse: z.string().nullable(),
    currencyCode: z.string().nullable(),
    description: z.string().nullable(),
    fields: z.array(Fields1Schema).openapi({ description: '' }),
    group: z.string(),
    id: z.string(),
    installments: z.int32(),
    installmentsInterestRate: z.int32(),
    installmentsValue: z.int32(),
    isAvailable: z.boolean(),
    isCustom: z.boolean(),
    merchantName: z.string().nullable(),
    paymentSystem: z.int32(),
    paymentSystemName: z.string(),
    provider: z.string().nullable(),
    referenceValue: z.int32(),
    returnCode: z.string().nullable(),
    returnMessage: z.string().nullable(),
    self: SelfSchema,
    sheets: z.string().nullable(),
    status: z.string(),
    tid: z.string().nullable(),
    value: z.int32(),
  })
  .openapi({
    example: {
      ConnectorResponses: null,
      ShowConnectorResponses: false,
      allowInstallments: true,
      allowIssuer: true,
      allowNotification: false,
      connector: 'E-Rede V2',
      connectorResponse: null,
      currencyCode: null,
      description: null,
      fields: [
        { name: 'affiliationId', value: 'c4016e3b-9ed9-4735-98dc-f803c93c5e5c' },
        { name: 'callbackUrl', value: '1' },
        { name: 'baseUrl', value: 'https://gatewayqa.vtexpayments.com.br:443' },
        { name: 'cardHolder', value: 'UserTest' },
        { name: 'firstDigits', value: '444433' },
        { name: 'lastDigits', value: '1111' },
        { name: 'expiryMonth', value: '10' },
        { name: 'expiryYear', value: '2019' },
        { name: 'accountId', value: 'A14180691F1D4CC9941202E10C6B1A33' },
        { name: 'connector', value: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector' },
      ],
      group: 'creditCard',
      id: '712B47E0AB4F4E63BB5FC1DB445AC0B9',
      installments: 1,
      installmentsInterestRate: 0,
      installmentsValue: 100,
      isAvailable: true,
      isCustom: false,
      merchantName: null,
      paymentSystem: 2,
      paymentSystemName: 'Visa',
      provider: null,
      referenceValue: 100,
      returnCode: null,
      returnMessage: null,
      self: {
        href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments/712B47E0AB4F4E63BB5FC1DB445AC0B9',
      },
      sheets: null,
      status: 'Received',
      tid: null,
      value: 100,
    },
    required: [
      'id',
      'paymentSystem',
      'paymentSystemName',
      'merchantName',
      'group',
      'isCustom',
      'allowInstallments',
      'allowIssuer',
      'allowNotification',
      'isAvailable',
      'description',
      'self',
      'tid',
      'returnCode',
      'returnMessage',
      'status',
      'connector',
      'ConnectorResponses',
      'connectorResponse',
      'ShowConnectorResponses',
      'value',
      'installmentsInterestRate',
      'installmentsValue',
      'referenceValue',
      'installments',
      'currencyCode',
      'provider',
      'fields',
      'sheets',
    ],
    title: 'PaymentsByTransactionResponse',
  })
  .openapi('PaymentsByTransactionResponse')

const ReceivePaymentsResponseSchema = z
  .object({
    ConnectorResponses: z.string().nullable(),
    ShowConnectorResponses: z.boolean(),
    allowInstallments: z.boolean(),
    allowIssuer: z.boolean(),
    allowNotification: z.boolean(),
    connector: z.string(),
    connectorResponse: z.string().nullable(),
    currencyCode: z.string().nullable(),
    description: z.string().nullable(),
    fields: z.array(Fields1Schema).openapi({ description: '' }),
    group: z.string(),
    id: z.string(),
    installments: z.int32(),
    installmentsInterestRate: z.int32(),
    installmentsValue: z.int32(),
    isAvailable: z.boolean(),
    isCustom: z.boolean(),
    merchantName: z.string().nullable(),
    paymentSystem: z.int32(),
    paymentSystemName: z.string(),
    provider: z.string().nullable(),
    referenceValue: z.int32(),
    returnCode: z.string().nullable(),
    returnMessage: z.string().nullable(),
    self: SelfSchema,
    sheets: z.string().nullable(),
    status: z.string(),
    tid: z.string().nullable(),
    value: z.int32(),
  })
  .openapi({
    example: {
      ConnectorResponses: null,
      ShowConnectorResponses: false,
      allowInstallments: true,
      allowIssuer: true,
      allowNotification: false,
      connector: 'E-Rede V2',
      connectorResponse: null,
      currencyCode: null,
      description: null,
      fields: [
        { name: 'affiliationId', value: 'c4016e3b-9ed9-4735-98dc-f803c93c5e5c' },
        { name: 'callbackUrl', value: '1' },
        { name: 'baseUrl', value: 'https://gatewayqa.vtexpayments.com.br:443' },
        { name: 'cardHolder', value: 'UserTest' },
        { name: 'firstDigits', value: '444433' },
        { name: 'lastDigits', value: '1111' },
        { name: 'expiryMonth', value: '10' },
        { name: 'expiryYear', value: '2019' },
        { name: 'accountId', value: 'A14180691F1D4CC9941202E10C6B1A33' },
        { name: 'connector', value: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector' },
      ],
      group: 'creditCard',
      id: '34C219BBF1504A19B0608FB498A48B0B',
      installments: 1,
      installmentsInterestRate: 0,
      installmentsValue: 100,
      isAvailable: true,
      isCustom: false,
      merchantName: null,
      paymentSystem: 2,
      paymentSystemName: 'Visa',
      provider: null,
      referenceValue: 100,
      returnCode: null,
      returnMessage: null,
      self: {
        href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/payments/34C219BBF1504A19B0608FB498A48B0B',
      },
      sheets: null,
      status: 'Received',
      tid: null,
      value: 100,
    },
    required: [
      'id',
      'paymentSystem',
      'paymentSystemName',
      'merchantName',
      'group',
      'isCustom',
      'allowInstallments',
      'allowIssuer',
      'allowNotification',
      'isAvailable',
      'description',
      'self',
      'tid',
      'returnCode',
      'returnMessage',
      'status',
      'connector',
      'ConnectorResponses',
      'connectorResponse',
      'ShowConnectorResponses',
      'value',
      'installmentsInterestRate',
      'installmentsValue',
      'referenceValue',
      'installments',
      'currencyCode',
      'provider',
      'fields',
      'sheets',
    ],
    title: 'ReceivePaymentsResponse',
  })
  .openapi('ReceivePaymentsResponse')

const RefundsSchema = z
  .object({ href: z.string() })
  .openapi({
    example: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/refunds' },
    required: ['href'],
    title: 'Refunds',
  })
  .openapi('Refunds')

const RefundthetransactionRequestSchema = z
  .object({
    minicart: z
      .object({
        freight: z.int32().exactOptional(),
        items: z.array(z.any()).exactOptional(),
        tax: z.int32().exactOptional(),
      })
      .default({})
      .exactOptional()
      .openapi({
        description:
          'This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment.',
        required: [],
      }),
    value: z.int32().openapi({ description: 'Value of the purchase.' }),
  })
  .default({
    minicart: {
      freight: 200,
      items: [
        {
          discount: 50,
          id: '122323',
          name: 'Tenis Preto I',
          quantity: 1,
          shippingDiscount: 0,
          value: 1000,
        },
        {
          discount: 50,
          id: '122324',
          name: 'Tenis Nike Azul',
          quantity: 1,
          shippingDiscount: 0,
          value: 1100,
        },
      ],
      tax: 0,
    },
    value: 2300,
  })
  .openapi({ required: ['value'], title: 'RefundthetransactionRequest' })
  .openapi('RefundthetransactionRequest')

const RequestSchema = z
  .object({ date: z.string(), id: z.string(), value: z.int32() })
  .openapi({
    example: {
      date: '2018-06-05T13:08:22',
      id: 'AFB933448FFD4867BF82BCC7026A082C',
      value: 4499000,
    },
    required: ['id', 'date', 'value'],
    title: 'Request',
  })
  .openapi('Request')

const RuleByIdRequestSchema = z
  .object({
    antifraud: Antifraud1Schema,
    beginDate: z.string(),
    condition: z.string().nullable(),
    connector: ConnectorSchema,
    country: z.string().nullable(),
    dateIntervals: z.string().nullable(),
    enabled: z.boolean(),
    endDate: z.string(),
    id: z.string(),
    installmentOptions: InstallmentOptionsSchema,
    isDefault: z.string().nullable(),
    isSelfAuthorized: z.string().nullable(),
    issuer: IssuerSchema,
    multiMerchantList: z.string().nullable(),
    name: z.string(),
    paymentSystem: PaymentSystemSchema,
    salesChannels: z.array(SalesChannelSchema).openapi({ description: '' }),
  })
  .openapi({
    example: {
      antifraud: { affiliationId: 'f952588c-8b41-41cc-a06f-c0f48f7320ef' },
      beginDate: '0001-01-01T00:00:00',
      condition: null,
      connector: {
        affiliationId: 'd0d7097e-0959-43dc-b335-852eda7b2992',
        implementation: 'Vtex.PaymentGateway.Connectors.MundipaggConnector',
      },
      country: null,
      dateIntervals: null,
      enabled: true,
      endDate: '9999-12-31T23:59:59.9999999',
      id: 'eff4f368-b671-443b-b5a9-82616e87ea1c',
      installmentOptions: { interestRateMethod: null },
      isDefault: null,
      isSelfAuthorized: null,
      issuer: { name: null },
      multiMerchantList: null,
      name: 'Visa gatewayqa',
      paymentSystem: { id: 2, implementation: null, name: 'Visa' },
      salesChannels: [{ id: '2' }],
    },
    required: [
      'id',
      'name',
      'salesChannels',
      'paymentSystem',
      'connector',
      'issuer',
      'antifraud',
      'installmentOptions',
      'isSelfAuthorized',
      'enabled',
      'isDefault',
      'beginDate',
      'endDate',
      'condition',
      'multiMerchantList',
      'country',
      'dateIntervals',
    ],
    title: 'RuleByIdRequest',
  })
  .openapi('RuleByIdRequest')

const SettleResponseSchema = z
  .object({
    cancelledValue: z.int32(),
    connectorRefundedValue: z.int32(),
    message: z.string().nullable(),
    processingDate: z.string(),
    refundedToken: z.string().nullable(),
    refundedValue: z.int32(),
    status: z.int32(),
    statusDetail: z.string(),
    token: z.string(),
  })
  .openapi({
    example: {
      cancelledValue: 0,
      connectorRefundedValue: 0,
      message: null,
      processingDate: '2017-08-16T17:40:59.3043324Z',
      refundedToken: null,
      refundedValue: 0,
      status: 13,
      statusDetail: 'Finished',
      token: '933276E993ED4452AE4CE2B9B5C6B2F4',
    },
    required: [
      'token',
      'status',
      'statusDetail',
      'processingDate',
      'refundedValue',
      'refundedToken',
      'message',
      'connectorRefundedValue',
      'cancelledValue',
    ],
    title: 'SettleResponse',
  })
  .openapi('SettleResponse')

const SettlementsSchema = z
  .object({ href: z.string() })
  .openapi({
    example: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/settlements' },
    required: ['href'],
    title: 'Settlements',
  })
  .openapi('Settlements')

const SettlethetransactionRequestSchema = z
  .object({ value: z.int32() })
  .openapi({ example: { value: 100 }, required: ['value'], title: 'SettlethetransactionRequest' })
  .openapi('SettlethetransactionRequest')

const StartTransactionResponseSchema = z
  .object({
    acceptHeader: z.string().nullable(),
    antifraudAffiliationId: z.string().nullable(),
    antifraudTid: z.string().nullable(),
    authorizationDate: z.string().nullable(),
    authorizationToken: z.string().nullable(),
    buyer: z.string().nullable(),
    cancelationDate: z.string().nullable(),
    cancelationToken: z.string().nullable(),
    cancellations: CancellationsSchema,
    channel: z.string(),
    commitmentDate: z.string().nullable(),
    commitmentToken: z.string().nullable(),
    fields: z.array(FieldSchema).openapi({ description: '' }),
    id: z.string(),
    interactions: InteractionsSchema,
    ipAddress: z.string().nullable(),
    markedForRecurrence: z.boolean(),
    owner: z.string(),
    payments: PaymentsSchema,
    receiverUri: z.string(),
    referenceKey: z.string(),
    refundingDate: z.string().nullable(),
    refundingToken: z.string().nullable(),
    refunds: RefundsSchema,
    salesChannel: z.string(),
    settlements: SettlementsSchema,
    softDescriptor: z.string().nullable(),
    startDate: z.string(),
    status: z.string(),
    timeoutStatus: z.int32(),
    totalRefunds: z.number(),
    transactionId: z.string(),
    urn: z.string().nullable(),
    userAgent: z.string().nullable(),
    value: z.int32(),
  })
  .openapi({
    example: {
      acceptHeader: null,
      antifraudAffiliationId: null,
      antifraudTid: null,
      authorizationDate: null,
      authorizationToken: null,
      buyer: null,
      cancelationDate: null,
      cancelationToken: null,
      cancellations: {
        href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/cancellations',
      },
      channel: 'gatewayqa',
      commitmentDate: null,
      commitmentToken: null,
      fields: [
        { name: 'owner', value: 'vtexappkey-appvtex' },
        { name: 'channel', value: 'gatewayqa' },
        { name: 'salesChannel', value: '1' },
      ],
      id: '85A3A4B536E64C108FB941CC3CF5A9A1',
      interactions: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/interactions' },
      ipAddress: null,
      markedForRecurrence: false,
      owner: 'vtexappkey-appvtex',
      payments: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/payments' },
      receiverUri:
        'https://gatewayqa.vtexpayments.com.br/split/85A3A4B536E64C108FB941CC3CF5A9A1/payments',
      referenceKey: '1234567',
      refundingDate: null,
      refundingToken: null,
      refunds: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/refunds' },
      salesChannel: '1',
      settlements: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/settlements' },
      softDescriptor: null,
      startDate: '2016-04-15T02:52:24.3801586Z',
      status: 'Started',
      timeoutStatus: 0,
      totalRefunds: 0,
      transactionId: '85A3A4B536E64C108FB941CC3CF5A9A1',
      urn: null,
      userAgent: null,
      value: 100,
    },
    required: [
      'id',
      'transactionId',
      'referenceKey',
      'interactions',
      'settlements',
      'payments',
      'refunds',
      'cancellations',
      'timeoutStatus',
      'totalRefunds',
      'status',
      'value',
      'receiverUri',
      'startDate',
      'authorizationToken',
      'authorizationDate',
      'commitmentToken',
      'commitmentDate',
      'refundingToken',
      'refundingDate',
      'cancelationToken',
      'cancelationDate',
      'fields',
      'ipAddress',
      'owner',
      'userAgent',
      'acceptHeader',
      'antifraudTid',
      'antifraudAffiliationId',
      'channel',
      'salesChannel',
      'urn',
      'softDescriptor',
      'markedForRecurrence',
      'buyer',
    ],
    title: 'StartTransactionResponse',
  })
  .openapi('StartTransactionResponse')

const TransactionDetailsResponseSchema = z
  .object({
    acceptHeader: z.string(),
    antifraudAffiliationId: z.string().nullable(),
    antifraudTid: z.string().nullable(),
    authorizationDate: z.string().nullable(),
    authorizationToken: z.string().nullable(),
    buyer: z.string().nullable(),
    cancelationDate: z.string().nullable(),
    cancelationToken: z.string().nullable(),
    cancellations: CancellationsSchema,
    channel: z.string(),
    commitmentDate: z.string().nullable(),
    commitmentToken: z.string().nullable(),
    fields: z.array(Fields1Schema).openapi({ description: '' }),
    id: z.string(),
    interactions: InteractionsSchema,
    ipAddress: z.string(),
    markedForRecurrence: z.boolean(),
    owner: z.string(),
    payments: PaymentsSchema,
    receiverUri: z.string().nullable(),
    referenceKey: z.string(),
    refundingDate: z.string().nullable(),
    refundingToken: z.string().nullable(),
    refunds: RefundsSchema,
    salesChannel: z.string(),
    settlements: SettlementsSchema,
    softDescriptor: z.string().nullable(),
    startDate: z.string(),
    status: z.string(),
    timeoutStatus: z.int32(),
    totalRefunds: z.number(),
    transactionId: z.string(),
    urn: z.string().nullable(),
    userAgent: z.string(),
    value: z.int32(),
  })
  .openapi({
    example: {
      acceptHeader: 'application/json',
      antifraudAffiliationId: null,
      antifraudTid: null,
      authorizationDate: null,
      authorizationToken: null,
      buyer: null,
      cancelationDate: null,
      cancelationToken: null,
      cancellations: {
        href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/cancellations',
      },
      channel: 'gatewayqa',
      commitmentDate: null,
      commitmentToken: null,
      fields: [
        { name: 'owner', value: 'vtexappkey-appvtex' },
        { name: 'channel', value: 'gatewayqa' },
        { name: 'salesChannel', value: '1' },
        { name: 'markedForRecurrence', value: 'true' },
        { name: 'parentMerchant', value: '648a4ce7-c16d-4fba-9854-072384636a32' },
        { name: 'orderId', value: '1234567' },
        { name: 'ip', value: '10.0.4.12' },
        {
          name: 'userAgent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
        },
        { name: 'acceptHeader', value: 'application/json' },
        {
          name: 'cart',
          value:
            '{"items":[\r\n  {\r\n          "id":"122323",\r\n          "name":"Tenis Preto I",\r\n          "value":1000,\r\n          "quantity":1,\r\n          "shippingDiscount":0,\r\n          "discount":50\r\n        },\r\n        {\r\n          "id":"122324",\r\n          "name":"Tenis Nike Azul",\r\n          "value":1100,\r\n          "quantity":1,\r\n          "shippingDiscount":0,\r\n          "discount":50\r\n        }\r\n  ],"freight":200,\r\n  "tax":0\r\n  }',
        },
        {
          name: 'clientProfileData',
          value:
            '{"email":"teste@teste.com","firstName":"Joao","lastName":"Baptista","document":"06134240040","phone":"+551433118100","corporateName":null,"tradeName":null,"corporateDocument":null,"stateInscription":null,"postalCode":"22011-050","address":{"receiverName":"Ellen","postalCode":"22011050","city":"RIO DE JANEIRO","state":"RJ","country":"BRA","street":"RUA  GENERAL AZEVEDO PIMENTEL","number":"12345","neighborhood":"COPACABANA","complement":"APTO 302","reference":null},"gender":null,"birthDate":null,"corporatePhone":null,"isCorporate":false,"documentType":null,"isFirstPurchase":false,"id":null}',
        },
        {
          name: 'shippingData',
          value:
            '{"receiverName":"Rodrigo Saens","postalCode":"65035430","city":"SAO LUIS","state":"MA","country":"BRA","street":"AV NEWTON  ","number":"321","neighborhood":"MONTE CATELO","complement":"APTO 102","reference":null}',
        },
      ],
      id: 'A3BDE325F76B4B758B398D900DF06150',
      interactions: { href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/interactions' },
      ipAddress: '10.0.4.12',
      markedForRecurrence: true,
      owner: 'vtexappkey-appvtex',
      payments: { href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments' },
      receiverUri: null,
      referenceKey: '1234567',
      refundingDate: null,
      refundingToken: null,
      refunds: { href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/refunds' },
      salesChannel: '1',
      settlements: { href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/settlements' },
      softDescriptor: null,
      startDate: '2016-04-15T02:36:38',
      status: 'Cancelling',
      timeoutStatus: 2,
      totalRefunds: 0,
      transactionId: 'A3BDE325F76B4B758B398D900DF06150',
      urn: null,
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
      value: 100,
    },
    required: [
      'id',
      'transactionId',
      'referenceKey',
      'interactions',
      'settlements',
      'payments',
      'refunds',
      'cancellations',
      'timeoutStatus',
      'totalRefunds',
      'status',
      'value',
      'receiverUri',
      'startDate',
      'authorizationToken',
      'authorizationDate',
      'commitmentToken',
      'commitmentDate',
      'refundingToken',
      'refundingDate',
      'cancelationToken',
      'cancelationDate',
      'fields',
      'ipAddress',
      'owner',
      'userAgent',
      'acceptHeader',
      'antifraudTid',
      'antifraudAffiliationId',
      'channel',
      'salesChannel',
      'urn',
      'softDescriptor',
      'markedForRecurrence',
      'buyer',
    ],
    title: 'TransactionDetailsResponse',
  })
  .openapi('TransactionDetailsResponse')

const TransactionSettlementDetailsSchema = z
  .object({
    actions: z.array(ActionSchema).openapi({ description: '' }),
    requests: z.array(RequestSchema).openapi({ description: '' }),
  })
  .openapi({
    example: {
      actions: [
        {
          connectorResponse: null,
          date: '2018-06-05T12:55:58.6262759Z',
          payment: {
            href: '/api/pvt/transactions/074D48049B19403A930FA848C6BE4AF9/payments/87055E7199A446519EB07F1243D5B8BE',
          },
          paymentId: '87055E7199A446519EB07F1243D5B8BE',
          type: 'auto-settlement',
          value: 4499000,
        },
      ],
      requests: [
        { date: '2018-06-05T13:08:22', id: 'AFB933448FFD4867BF82BCC7026A082C', value: 4499000 },
      ],
    },
    required: ['requests', 'actions'],
    title: 'TransactionSettlementDetails',
  })
  .openapi('TransactionSettlementDetails')

const UpdateAffiliationRequestSchema = z
  .object({
    configuration: z.array(ConfigurationSchema).openapi({ description: '' }),
    id: z.string(),
    implementation: z.string(),
    isConfigured: z.boolean(),
    isdelivered: z.boolean(),
    name: z.string(),
  })
  .openapi({
    example: {
      configuration: [
        {
          name: 'HowTo',
          value: 'https://developercielo.github.io/Habilitacao-meios-de-pagamento/',
        },
        { name: 'MerchantId', value: 'DATA TEST' },
        { name: 'MerchantKey', value: 'DATA TEST' },
        { name: 'softDescriptor', value: 'teste' },
        { name: 'bankInvoiceProvider', value: 'Disabled' },
        { name: 'bankIDebitProvider', value: 'Disabled' },
        { name: 'useEarlySecurityCapture', value: '0' },
        { name: 'isProduction', value: 'false' },
        { name: 'bankDebitProvider', value: 'Disabled' },
        { name: 'Registered', value: 'false' },
      ],
      id: '61c3b25b-554d-41a4-b989-a0ba215e4bba',
      implementation: 'Vtex.PaymentGateway.Connectors.CieloV3Connector',
      isConfigured: true,
      isdelivered: true,
      name: 'CieloV3 - Teste Ellen',
    },
    required: ['id', 'implementation', 'name', 'configuration', 'isdelivered', 'isConfigured'],
    title: 'UpdateAffiliationRequest',
  })
  .openapi('UpdateAffiliationRequest')

const ValidRequestSchema = z
  .object({
    installments: z.array(InstallmentSchema).openapi({ description: '' }),
    value: z.number(),
  })
  .openapi({
    example: {
      installments: [
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 2,
            isDefault: false,
            name: 'ERedeV2 - Nova Visa',
            self: { href: '/api/pvt/payment-systems/2' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 3,
            isDefault: false,
            name: 'ERedeV2 - Nova Diners',
            self: { href: '/api/pvt/payment-systems/3' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 4,
            isDefault: false,
            name: 'ERedeV2 - Nova Mastercard',
            self: { href: '/api/pvt/payment-systems/4' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 6,
            isDefault: false,
            name: 'Boleto Bancário - WEG79AKC8R529',
            self: { href: '/api/pvt/payment-systems/6' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 7,
            isDefault: false,
            name: 'ERedeV2 - Nova Aura',
            self: { href: '/api/pvt/payment-systems/7' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 8,
            isDefault: false,
            name: 'Hipercard - CNRYOV0ANPZAOR',
            self: { href: '/api/pvt/payment-systems/8' },
            value: 10,
          },
        },
        {
          options: [
            { interestRate: 0, quantity: 1, value: 10 },
            { interestRate: 0, quantity: 2, value: 5 },
          ],
          payment: {
            bin: null,
            id: 9,
            isDefault: false,
            name: 'Elo/Mundipagg',
            self: { href: '/api/pvt/payment-systems/9' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 12,
            isDefault: false,
            name: 'PayPal - 6U0DTI3M3OKO6R',
            self: { href: '/api/pvt/payment-systems/12' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 16,
            isDefault: false,
            name: 'Vale/GiftCard',
            self: { href: '/api/pvt/payment-systems/16' },
            value: 10,
          },
        },
        {
          options: [
            { interestRate: 0, quantity: 1, value: 10 },
            { interestRate: 0, quantity: 2, value: 5 },
            { interestRate: 0, quantity: 3, value: 3.33 },
          ],
          payment: {
            bin: null,
            id: 18,
            isDefault: false,
            name: 'Mercado Pago - XBKAG5IMTJRA4I',
            self: { href: '/api/pvt/payment-systems/18' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 26,
            isDefault: false,
            name: 'PagSeguro - HRXC4VO76NU3DI',
            self: { href: '/api/pvt/payment-systems/26' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 33,
            isDefault: false,
            name: 'ERedeV2 - Nova Cabal',
            self: { href: '/api/pvt/payment-systems/33' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 38,
            isDefault: false,
            name: 'Safetypay - Q8J8XIXDSSPDS4I',
            self: { href: '/api/pvt/payment-systems/38' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 43,
            isDefault: false,
            name: 'PagosWeb - PDA8UKCUTMX6R',
            self: { href: '/api/pvt/payment-systems/43' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 49,
            isDefault: false,
            name: 'PayPalPlus - LW5HDKPMD3G14I',
            self: { href: '/api/pvt/payment-systems/49' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430004,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430004' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430014,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430014' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430201,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430201' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430202,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430202' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430203,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430203' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430208,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430208' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430210,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430210' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430220,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430220' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430222,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430222' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430230,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430230' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430231,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430231' },
            value: 10,
          },
        },
        {
          options: [{ interestRate: 0, quantity: 1, value: 10 }],
          payment: {
            bin: null,
            id: 430232,
            isDefault: false,
            name: null,
            self: { href: '/api/pvt/payment-systems/430232' },
            value: 10,
          },
        },
      ],
      value: 10,
    },
    required: ['value', 'installments'],
    title: 'ValidRequest',
  })
  .openapi('ValidRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiPubTransactionsTransactionIdPaymentsRoute = createRoute({
  method: 'post',
  path: '/api/pub/transactions/{transactionId}/payments',
  tags: ['Transaction Process'],
  summary: '2.1 Send Payments Information Public',
  description:
    'The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card. ',
  operationId: '2.SendPaymentsPublic',
  request: {
    query: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'orderId',
            required: true,
            schema: { example: '{{orderId}}', type: 'string' },
            style: 'form',
          },
          example: '{{orderId}}',
        }),
    }),
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(_2SendPaymentsPublicRequestSchema).openapi({ description: '' }),
          example: [
            {
              currencyCode: 'BRL',
              fields: {
                accountId: '',
                address: null,
                callbackUrl: '',
                cardNumber: '5378244888889174',
                document: '8041734561',
                dueDate: '10/19',
                holderName: 'UserTest',
                validationCode: '231',
              },
              installments: 1,
              installmentsInterestRate: 0,
              installmentsValue: 100,
              paymentSystem: 4,
              referenceValue: 100,
              transaction: { id: '{{transactionId}}', merchantName: '{{accountName}}' },
              value: 100,
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiPvtAffiliationsRoute = createRoute({
  method: 'get',
  path: '/api/pvt/affiliations',
  tags: ['Configuration'],
  summary: 'Affiliations',
  description: 'Returns all affiliations that your provider can handle.',
  operationId: 'Affiliations',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postApiPvtAffiliationsRoute = createRoute({
  method: 'post',
  path: '/api/pvt/affiliations',
  tags: ['Configuration'],
  summary: 'Insert Affiliation',
  description: 'Creates a new affiliation and returns a successful response.',
  operationId: 'InsertAffiliation',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: InsertAffiliationRequestSchema,
          example: {
            configuration: [
              {
                name: 'HowTo',
                value: 'https://developercielo.github.io/Habilitacao-meios-de-pagamento/',
              },
              { name: 'MerchantId', value: 'sampleData' },
              { name: 'MerchantKey', value: 'sampleData' },
              { name: 'softDescriptor', value: 'teste' },
              { name: 'bankInvoiceProvider', value: 'Disabled' },
              { name: 'bankIDebitProvider', value: 'Disabled' },
              { name: 'useEarlySecurityCapture', value: '0' },
              { name: 'isProduction', value: 'false' },
              { name: 'bankDebitProvider', value: 'Disabled' },
              { name: 'Registered', value: 'false' },
            ],
            implementation: 'Vtex.PaymentGateway.Connectors.CieloV3Connector',
            isConfigured: true,
            isdelivered: true,
            name: 'CieloV3 - Teste Ellen',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiPvtAffiliationsAffiliationIdRoute = createRoute({
  method: 'get',
  path: '/api/pvt/affiliations/{affiliationId}',
  tags: ['Configuration'],
  summary: 'Affiliation By Id',
  description:
    'Returns associated data for the specified affiliation Id, like name and implementation, for example.',
  operationId: 'AffiliationById',
  request: {
    params: z.object({
      affiliationId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'affiliationId',
            required: true,
            schema: { example: 'e046d326-5421-45ab-95ae-f13d37f260b5', type: 'string' },
          },
          example: 'e046d326-5421-45ab-95ae-f13d37f260b5',
        }),
    }),
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putApiPvtAffiliationsAffiliationIdRoute = createRoute({
  method: 'put',
  path: '/api/pvt/affiliations/{affiliationId}',
  tags: ['Configuration'],
  summary: 'Update Affiliation',
  description: 'Returns all affiliations.',
  operationId: 'UpdateAffiliation',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      affiliationId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'affiliationId',
            required: true,
            schema: { example: 'e046d326-5421-45ab-95ae-f13d37f260b5', type: 'string' },
            style: 'simple',
          },
          example: 'e046d326-5421-45ab-95ae-f13d37f260b5',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdateAffiliationRequestSchema,
          example: {
            configuration: [
              {
                name: 'HowTo',
                value: 'https://developercielo.github.io/Habilitacao-meios-de-pagamento/',
              },
              { name: 'MerchantId', value: 'DATA TEST' },
              { name: 'MerchantKey', value: 'DATA TEST' },
              { name: 'softDescriptor', value: 'teste' },
              { name: 'bankInvoiceProvider', value: 'Disabled' },
              { name: 'bankIDebitProvider', value: 'Disabled' },
              { name: 'useEarlySecurityCapture', value: '0' },
              { name: 'isProduction', value: 'false' },
              { name: 'bankDebitProvider', value: 'Disabled' },
              { name: 'Registered', value: 'false' },
            ],
            id: '61c3b25b-554d-41a4-b989-a0ba215e4bba',
            implementation: 'Vtex.PaymentGateway.Connectors.CieloV3Connector',
            isConfigured: true,
            isdelivered: true,
            name: 'CieloV3 - Teste Ellen',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiPvtInstallmentsRoute = createRoute({
  method: 'get',
  path: '/api/pvt/installments',
  tags: ['Installments'],
  summary: 'Installments options',
  description: 'Returns the best installment options according to the informed params.',
  operationId: 'Installmentsoptions',
  request: {
    query: z.object({
      'request.value': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'request.value',
            required: true,
            schema: { example: 10, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 10,
        }),
      'request.salesChannel': z
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
            description: '',
            explode: true,
            in: 'query',
            name: 'request.salesChannel',
            required: false,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      'request.paymentDetails[0].id': z
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
            description: '',
            explode: true,
            in: 'query',
            name: 'request.paymentDetails[0].id',
            required: false,
            schema: { example: 2, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 2,
        }),
      'request.paymentDetails[0].value': z
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
            description: '',
            explode: true,
            in: 'query',
            name: 'request.paymentDetails[0].value',
            required: false,
            schema: { example: 10, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 10,
        }),
      'request.paymentDetails[0].bin': z
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
            description: '',
            explode: true,
            in: 'query',
            name: 'request.paymentDetails[0].bin',
            required: false,
            schema: { example: 411111, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 411111,
        }),
    }),
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: ValidRequestSchema,
          example: {
            installments: [
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 2,
                  isDefault: false,
                  name: 'ERedeV2 - Nova Visa',
                  self: { href: '/api/pvt/payment-systems/2' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 3,
                  isDefault: false,
                  name: 'ERedeV2 - Nova Diners',
                  self: { href: '/api/pvt/payment-systems/3' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 4,
                  isDefault: false,
                  name: 'ERedeV2 - Nova Mastercard',
                  self: { href: '/api/pvt/payment-systems/4' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 6,
                  isDefault: false,
                  name: 'Boleto Bancário - WEG79AKC8R529',
                  self: { href: '/api/pvt/payment-systems/6' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 7,
                  isDefault: false,
                  name: 'ERedeV2 - Nova Aura',
                  self: { href: '/api/pvt/payment-systems/7' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 8,
                  isDefault: false,
                  name: 'Hipercard - CNRYOV0ANPZAOR',
                  self: { href: '/api/pvt/payment-systems/8' },
                  value: 10,
                },
              },
              {
                options: [
                  { interestRate: 0, quantity: 1, value: 10 },
                  { interestRate: 0, quantity: 2, value: 5 },
                ],
                payment: {
                  bin: null,
                  id: 9,
                  isDefault: false,
                  name: 'Elo/Mundipagg',
                  self: { href: '/api/pvt/payment-systems/9' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 12,
                  isDefault: false,
                  name: 'PayPal - 6U0DTI3M3OKO6R',
                  self: { href: '/api/pvt/payment-systems/12' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 16,
                  isDefault: false,
                  name: 'Vale/GiftCard',
                  self: { href: '/api/pvt/payment-systems/16' },
                  value: 10,
                },
              },
              {
                options: [
                  { interestRate: 0, quantity: 1, value: 10 },
                  { interestRate: 0, quantity: 2, value: 5 },
                  { interestRate: 0, quantity: 3, value: 3.33 },
                ],
                payment: {
                  bin: null,
                  id: 18,
                  isDefault: false,
                  name: 'Mercado Pago - XBKAG5IMTJRA4I',
                  self: { href: '/api/pvt/payment-systems/18' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 26,
                  isDefault: false,
                  name: 'PagSeguro - HRXC4VO76NU3DI',
                  self: { href: '/api/pvt/payment-systems/26' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 33,
                  isDefault: false,
                  name: 'ERedeV2 - Nova Cabal',
                  self: { href: '/api/pvt/payment-systems/33' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 38,
                  isDefault: false,
                  name: 'Safetypay - Q8J8XIXDSSPDS4I',
                  self: { href: '/api/pvt/payment-systems/38' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 43,
                  isDefault: false,
                  name: 'PagosWeb - PDA8UKCUTMX6R',
                  self: { href: '/api/pvt/payment-systems/43' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 49,
                  isDefault: false,
                  name: 'PayPalPlus - LW5HDKPMD3G14I',
                  self: { href: '/api/pvt/payment-systems/49' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430004,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430004' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430014,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430014' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430201,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430201' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430202,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430202' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430203,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430203' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430208,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430208' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430210,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430210' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430220,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430220' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430222,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430222' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430230,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430230' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430231,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430231' },
                  value: 10,
                },
              },
              {
                options: [{ interestRate: 0, quantity: 1, value: 10 }],
                payment: {
                  bin: null,
                  id: 430232,
                  isDefault: false,
                  name: null,
                  self: { href: '/api/pvt/payment-systems/430232' },
                  value: 10,
                },
              },
            ],
            value: 10,
          },
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'public, max-age=900', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '5453', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 19:55:36 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.0', param: { required: false } }),
        'X-Accel-Expires': z
          .string()
          .exactOptional()
          .openapi({ example: '900', param: { required: false } }),
        'X-AspNet-Version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'X-Powered-By': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '72eaea00-61de-49f5-b581-34ac294e317a', param: { required: false } }),
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: InvalidRequestValueSchema,
          example: {
            error: { code: '1', exception: null, message: 'Value must be greater than Zero' },
          },
        },
      },
    },
  },
})

export const getApiPvtMerchantsPaymentSystemsRoute = createRoute({
  method: 'get',
  path: '/api/pvt/merchants/payment-systems',
  tags: ['Configuration'],
  summary: 'Available Payment Methods',
  description:
    'Returns enabled payment methods, like visa, master, bankissueinvoice that are shown for the final user and enabled to receive payment.',
  operationId: 'AvailablePaymentMethods',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(PaymentSystemsResponseSchema),
          example: [
            {
              affiliationId: null,
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: false,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PayPalPlusConnector',
              description: null,
              dueDate: '2016-04-16T14:52:03.7360354Z',
              fields: null,
              groupName: 'PayPalPlus',
              id: 49,
              implementation: 'Vtex.PaymentGateway.PayPalPlus.PayPalPlusPayment',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'PayPalPlus',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PayPalPlusConnector',
                  id: '2d062b92-f247-4935-a237-8e309e2b4422',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: true,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.MercadoPagoConnector',
              description: null,
              dueDate: '2016-04-23T02:52:03.7360354Z',
              fields: null,
              groupName: 'MercadoPago',
              id: 18,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.MercadoPagoPayment',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Mercado Pago',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.MercadoPagoConnector',
                  id: '8a455c9f-fa4e-40c6-b68d-cb91eeee4c87',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: true,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: true,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.BraspagConnector',
              description: null,
              dueDate: '2016-04-18T02:52:03.7516359Z',
              fields: null,
              groupName: 'creditCard',
              id: 8,
              implementation: 'Vtex.PaymentGateway.CreditCard.Hipercard',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Hipercard',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.BraspagConnector',
                  id: 'dbf01be3-e701-4791-a2f0-9ce7f2540d5f',
                },
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
                  id: 'bd44b35b-11e1-4684-8a42-db8ca4215b99',
                },
              ],
              validator: {
                cardCodeMask: '999',
                cardCodeRegex: '^[0-9]{3}$',
                mask: '9999999999999999999',
                regex: '^606282|^3841(?:[0|4|6]{1})0',
                useBillingAddress: true,
                useCardHolderName: true,
                useCvv: true,
                useExpirationDate: true,
                validCardLengths: null,
                weights: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1],
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: false,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: true,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation:
                'Vtex.PaymentGateway.Connectors.BankIssuedInvoiceBBConnector',
              description: null,
              dueDate: '2016-04-20T23:59:59.999Z',
              fields: null,
              groupName: 'bankInvoice',
              id: 6,
              implementation: 'Vtex.PaymentGateway.BankIssuedInvoice.BankIssuedInvoicePayment',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Boleto Bancário',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.BankIssuedInvoiceBBConnector',
                  id: 'c1ab4c11-5da3-41a5-9933-73639ce69cdf',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: false,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation:
                'Vtex.PaymentGateway.Connectors.VtexGiftCardHub.VtexGiftCardHubConnector',
              description: null,
              dueDate: '2016-04-16T02:52:03.7516359Z',
              fields: null,
              groupName: 'giftCard',
              id: 16,
              implementation: 'Vtex.PaymentGateway.GiftCard.VtexGiftCard',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Vale',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.VtexGiftCardHub.VtexGiftCardHubConnector',
                  id: 'fb238965-9f24-45c1-8f85-3aae93d3f752',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: true,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: true,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.MundipaggConnector',
              description: null,
              dueDate: '2016-04-18T02:52:03.767237Z',
              fields: null,
              groupName: 'creditCard',
              id: 9,
              implementation: 'Vtex.PaymentGateway.CreditCard.Elo',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Elo',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.MundipaggConnector',
                  id: 'c6ddf433-a516-4aa7-abb6-bda70d5243b2',
                },
              ],
              validator: {
                cardCodeMask: '999',
                cardCodeRegex: '^[0-9]{3}$',
                mask: '9999 9999 9999 9999',
                regex:
                  '^((((438935)|(509048)|(509049)|(509067)|(509069)|(509050)|(509074)|(509068)|(509040)|(509045)|(509051)|(509046)|(509066)|(509047)|(509042)|(509052)|(509043)|(509064)|(509040)|(636368)|(636368)|(504175)|(451416)|(636297))\\d{0,10})|((5067)|(4576)|(4011))\\d{0,12})$',
                useBillingAddress: true,
                useCardHolderName: true,
                useCvv: true,
                useExpirationDate: true,
                validCardLengths: null,
                weights: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: true,
              allowInstallments: false,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation:
                'Vtex.PaymentGateway.Connectors.SafetyPay.SafetyPayConnector',
              description: null,
              dueDate: '2016-04-16T02:52:03.767237Z',
              fields: null,
              groupName: 'safetypay',
              id: 38,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.SafetypayPayment',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Safetypay',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.SafetyPay.SafetyPayConnector',
                  id: 'd6027c18-4801-4ef9-b6f2-ca2163be8a32',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: true,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: true,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
              description: null,
              dueDate: '2016-04-18T02:52:03.767237Z',
              fields: null,
              groupName: 'creditCard',
              id: 4,
              implementation: 'Vtex.PaymentGateway.CreditCard.Mastercard',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Mastercard',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
                  id: '3180c470-5b2a-4fd2-b063-f28a19c79e8c',
                },
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.TestConnector',
                  id: 'a4472931-4508-4376-ba5a-11dac634b397',
                },
              ],
              validator: {
                cardCodeMask: '999',
                cardCodeRegex: '^[0-9]{3}$',
                mask: '9999 9999 9999 9999',
                regex:
                  '^5(1(0(0(0([0-9])|[1-9][0-9])|[1-9][0-9]{0})|[1-9][0-9]{0})|3(0(4(0([0-9]))|[0-3][0-9]{0}))|2[0-9]{0})|^5(3(0(4(2([0-9])|[3-9][0-9])|[5-9][0-9]{0})|[1-9][0-9]{0})|5(9(9(9([0-9])|[0-8][0-9])|[0-8][0-9]{0})|[0-8][0-9]{0})|4[0-9]{0})',
                useBillingAddress: true,
                useCardHolderName: true,
                useCvv: true,
                useExpirationDate: true,
                validCardLengths: null,
                weights: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: true,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: true,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
              description: null,
              dueDate: '2016-04-18T02:52:03.767237Z',
              fields: null,
              groupName: 'creditCard',
              id: 2,
              implementation: 'Vtex.PaymentGateway.CreditCard.Visa',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Visa',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
                  id: '06137299-ed94-4db2-a7e0-0cbfa7602e42',
                },
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.RedecardConnector',
                  id: 'a944ceb5-a43d-4b90-b625-5bde2b4db5b8',
                },
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.PagSeguroDirect.PagSeguroConnector',
                  id: 'c132f93f-c9e3-402b-b161-89c8fb7f0651',
                },
              ],
              validator: {
                cardCodeMask: '999',
                cardCodeRegex: '^[0-9]{3}$',
                mask: '9999 9999 9999 9999',
                regex: '^4',
                useBillingAddress: true,
                useCardHolderName: true,
                useCvv: true,
                useExpirationDate: true,
                validCardLengths: null,
                weights: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: true,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: true,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
              description: null,
              dueDate: '2016-04-18T02:52:03.767237Z',
              fields: null,
              groupName: 'creditCard',
              id: 3,
              implementation: 'Vtex.PaymentGateway.CreditCard.Diners',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Diners',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
                  id: 'a2c6087d-9efd-40a6-a573-a13cd7ec69ce',
                },
              ],
              validator: {
                cardCodeMask: '999',
                cardCodeRegex: '^[0-9]{3}$',
                mask: '9999 999999 9999',
                regex: '^3(0[0-5]|[68][0-9])[0-9]{11}$',
                useBillingAddress: true,
                useCardHolderName: true,
                useCvv: true,
                useExpirationDate: true,
                validCardLengths: null,
                weights: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: true,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: true,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
              description: null,
              dueDate: '2016-04-18T02:52:03.7828384Z',
              fields: null,
              groupName: 'creditCard',
              id: 7,
              implementation: 'Vtex.PaymentGateway.CreditCard.Aura',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Aura',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.CieloConnector',
                  id: '519046a1-36f2-45d8-852a-610fc1847b30',
                },
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.MundipaggConnector',
                  id: '5f41dd10-a338-4e43-8b56-ec72408ff731',
                },
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
                  id: '420f9a00-dcfe-410d-b51f-5bf8461d2326',
                },
              ],
              validator: {
                cardCodeMask: '999',
                cardCodeRegex: '^[0-9]{3}$',
                mask: '9999999999999999999',
                regex: '^50[0-9]{17}$',
                useBillingAddress: true,
                useCardHolderName: true,
                useCvv: true,
                useExpirationDate: true,
                validCardLengths: null,
                weights: [],
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: true,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: true,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
              description: null,
              dueDate: '2016-04-18T02:52:03.7828384Z',
              fields: null,
              groupName: 'creditCard',
              id: 33,
              implementation: 'Vtex.PaymentGateway.CreditCard.Cabal',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'Cabal',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
                  id: 'e243df96-cf1b-4d26-9a3a-de7a02feb657',
                },
              ],
              validator: {
                cardCodeMask: '999',
                cardCodeRegex: '^[0-9]{3}$',
                mask: '9999 9999 9999 9999',
                regex:
                  '6(0(4(2(0([1-9])|1([0-9])))))|6(0(3(5(2(2)))))|5(8(9(6(5(7)))))|6(0(4(2(2([1-9])|[3-9][0-9])|4(0(0))|3[0-9]{0})))',
                useBillingAddress: true,
                useCardHolderName: true,
                useCvv: true,
                useExpirationDate: true,
                validCardLengths: null,
                weights: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
              },
            },
            {
              affiliationId: null,
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: true,
              allowInstallments: false,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation:
                'Vtex.PaymentGateway.Connectors.PagSeguro.PagSeguroConnector',
              description: null,
              dueDate: '2016-04-22T02:52:03.7828384Z',
              fields: null,
              groupName: 'pagSeguro',
              id: 26,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagSeguroPayment',
              isAvailable: true,
              isCustom: false,
              isSelfAuthorized: false,
              name: 'PagSeguro',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation:
                    'Vtex.PaymentGateway.Connectors.PagSeguro.PagSeguroConnector',
                  id: '9bdd6af3-6edd-4df8-8ba4-3b8f7b953bea',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430004,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'RedPagos (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430014,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'Abitab (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430201,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'VISA (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430202,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'MASTER (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430203,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'OCA (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430208,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'DINERS (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430210,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'LIDER (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430220,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'VISA BROU (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430222,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'VISA MAS BROU (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430230,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'VISA SANTANDER (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.406849Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430231,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'MASTER SANTANDER (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
            {
              affiliationId: '49de1a21-ca32-4e66-855c-59ddfae31995',
              allowCommercialCondition: false,
              allowCommercialPolicy: true,
              allowCountry: false,
              allowInstallments: true,
              allowIssuer: false,
              allowMultiple: true,
              allowNotification: false,
              allowPeriod: true,
              antifraudConnectorImplementation: null,
              connectorId: 0,
              connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
              description: null,
              dueDate: '2016-04-16T02:52:04.4224366Z',
              fields: null,
              groupName: 'PagosWeb',
              id: 430232,
              implementation: 'Vtex.PaymentGateway.RedirectPayments.PagosWebPayment',
              isAvailable: true,
              isCustom: true,
              isSelfAuthorized: false,
              name: 'VISA SANTANDER HIPER (PagosWeb) ',
              requiresDocument: false,
              requiresPhone: false,
              rules: [
                {
                  antifraudImplementation: null,
                  connectorImplementation: 'Vtex.PaymentGateway.Connectors.PagosWebConnector',
                  id: '22974080-1b2e-4ed2-a526-6d036179d50e',
                },
              ],
              validator: {
                cardCodeMask: null,
                cardCodeRegex: null,
                mask: null,
                regex: null,
                useBillingAddress: false,
                useCardHolderName: false,
                useCvv: false,
                useExpirationDate: false,
                validCardLengths: null,
                weights: null,
              },
            },
          ],
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '28362', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 02:52:04 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.0', param: { required: false } }),
        'X-AspNet-Version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'X-Powered-By': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '8641c8ee-23a9-4405-88df-bd912d546df1', param: { required: false } }),
      }),
    },
  },
})

export const getApiPvtRulesRoute = createRoute({
  method: 'get',
  path: '/api/pvt/rules',
  tags: ['Configuration'],
  summary: 'Rules',
  description: 'Returns all rules conditions your provider can handle.',
  operationId: 'Rules',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postApiPvtRulesRoute = createRoute({
  method: 'post',
  path: '/api/pvt/rules',
  tags: ['Configuration'],
  summary: 'Insert Rule',
  description: 'Creates a new rule and returns a successful response.',
  operationId: 'InsertRule',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: InsertRuleRequestSchema,
          example: {
            antifraud: { affiliationId: null, implementation: null },
            beginDate: null,
            condition: null,
            connector: {
              affiliationId: 'e046d326-5421-45ab-95ae-f13d37f260b5',
              implementation: 'Vtex.PaymentGateway.Connectors.PromissoryConnector',
            },
            country: null,
            dateIntervals: null,
            enabled: true,
            endDate: null,
            installmentOptions: null,
            installmentsService: null,
            isDefault: false,
            isSelfAuthorized: null,
            issuer: { name: null },
            multiMerchantList: null,
            name: 'Cash - Custom',
            paymentSystem: { id: 47, implementation: null, name: 'Cash' },
            requiresAuthentication: null,
            salesChannels: [{ id: ':ALL:' }],
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiPvtRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/api/pvt/rules/{ruleId}',
  tags: ['Configuration'],
  summary: 'Rule By Id',
  description: 'Returns rule by specified RuleId.',
  operationId: 'RuleById',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      ruleId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putApiPvtRulesRuleIdRoute = createRoute({
  method: 'put',
  path: '/api/pvt/rules/{ruleId}',
  tags: ['Configuration'],
  summary: 'Rule By Id',
  description: 'Update Rule.',
  operationId: 'PutRuleById',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
    }),
    params: z.object({
      ruleId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: RuleByIdRequestSchema,
          example: {
            antifraud: { affiliationId: 'f952588c-8b41-41cc-a06f-c0f48f7320ef' },
            beginDate: '0001-01-01T00:00:00',
            condition: null,
            connector: {
              affiliationId: 'd0d7097e-0959-43dc-b335-852eda7b2992',
              implementation: 'Vtex.PaymentGateway.Connectors.MundipaggConnector',
            },
            country: null,
            dateIntervals: null,
            enabled: true,
            endDate: '9999-12-31T23:59:59.9999999',
            id: 'eff4f368-b671-443b-b5a9-82616e87ea1c',
            installmentOptions: { interestRateMethod: null },
            isDefault: null,
            isSelfAuthorized: null,
            issuer: { name: null },
            multiMerchantList: null,
            name: 'Visa gatewayqa',
            paymentSystem: { id: 2, implementation: null, name: 'Visa' },
            salesChannels: [{ id: '2' }],
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const deleteApiPvtRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/api/pvt/rules/{ruleId}',
  tags: ['Configuration'],
  summary: 'Delete Rule',
  description: 'Deletes rules by specified Id.',
  operationId: 'Rule',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      ruleId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postApiPvtTransactionsRoute = createRoute({
  method: 'post',
  path: '/api/pvt/transactions',
  tags: ['Transaction Process'],
  summary: '1. Starts a new transaction',
  description: 'This request is the first step to create a new transaction.',
  operationId: '1.Createanewtransaction',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: _1CreateanewtransactionRequestSchema,
          example: {
            channel: '{{accountName}}',
            referenceId: '1234567',
            salesChannel: '1',
            urn: '',
            value: 100,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: StartTransactionResponseSchema,
          example: {
            acceptHeader: null,
            antifraudAffiliationId: null,
            antifraudTid: null,
            authorizationDate: null,
            authorizationToken: null,
            buyer: null,
            cancelationDate: null,
            cancelationToken: null,
            cancellations: {
              href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/cancellations',
            },
            channel: 'gatewayqa',
            commitmentDate: null,
            commitmentToken: null,
            fields: [
              { name: 'owner', value: 'vtexappkey-appvtex' },
              { name: 'channel', value: 'gatewayqa' },
              { name: 'salesChannel', value: '1' },
            ],
            id: '85A3A4B536E64C108FB941CC3CF5A9A1',
            interactions: {
              href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/interactions',
            },
            ipAddress: null,
            markedForRecurrence: false,
            owner: 'vtexappkey-appvtex',
            payments: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/payments' },
            receiverUri:
              'https://gatewayqa.vtexpayments.com.br/split/85A3A4B536E64C108FB941CC3CF5A9A1/payments',
            referenceKey: '1234567',
            refundingDate: null,
            refundingToken: null,
            refunds: { href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/refunds' },
            salesChannel: '1',
            settlements: {
              href: '/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/settlements',
            },
            softDescriptor: null,
            startDate: '2016-04-15T02:52:24.3801586Z',
            status: 'Started',
            timeoutStatus: 0,
            totalRefunds: 0,
            transactionId: '85A3A4B536E64C108FB941CC3CF5A9A1',
            urn: null,
            userAgent: null,
            value: 100,
          },
        },
      },
      headers: z.object({
        'Access-Control-Allow-Credentials': z
          .string()
          .exactOptional()
          .openapi({ example: 'true', param: { required: false } }),
        'Access-Control-Allow-Origin': z
          .string()
          .exactOptional()
          .openapi({
            example: 'chrome-extension://aicmkgpgakddgnaphhhpliifpcfhicfo',
            param: { required: false },
          }),
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '1348', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 02:52:25 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.0', param: { required: false } }),
        'X-AspNet-Version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'X-Powered-By': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '7c30580a-88a0-4149-8a63-3b3a72ea92f9', param: { required: false } }),
      }),
    },
  },
})

export const getApiPvtTransactionsTransactionIdRoute = createRoute({
  method: 'get',
  path: '/api/pvt/transactions/{transactionId}',
  tags: ['Transaction Process'],
  summary: 'Transaction Details',
  description:
    'Returns associated data for the specified transaction id, like value and status, for exemple.',
  operationId: 'TransactionDetails',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: TransactionDetailsResponseSchema,
          example: {
            acceptHeader: 'application/json',
            antifraudAffiliationId: null,
            antifraudTid: null,
            authorizationDate: null,
            authorizationToken: null,
            buyer: null,
            cancelationDate: null,
            cancelationToken: null,
            cancellations: {
              href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/cancellations',
            },
            channel: 'gatewayqa',
            commitmentDate: null,
            commitmentToken: null,
            fields: [
              { name: 'owner', value: 'vtexappkey-appvtex' },
              { name: 'channel', value: 'gatewayqa' },
              { name: 'salesChannel', value: '1' },
              { name: 'markedForRecurrence', value: 'true' },
              { name: 'parentMerchant', value: '648a4ce7-c16d-4fba-9854-072384636a32' },
              { name: 'orderId', value: '1234567' },
              { name: 'ip', value: '10.0.4.12' },
              {
                name: 'userAgent',
                value:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
              },
              { name: 'acceptHeader', value: 'application/json' },
              {
                name: 'cart',
                value:
                  '{"items":[\r\n  {\r\n          "id":"122323",\r\n          "name":"Tenis Preto I",\r\n          "value":1000,\r\n          "quantity":1,\r\n          "shippingDiscount":0,\r\n          "discount":50\r\n        },\r\n        {\r\n          "id":"122324",\r\n          "name":"Tenis Nike Azul",\r\n          "value":1100,\r\n          "quantity":1,\r\n          "shippingDiscount":0,\r\n          "discount":50\r\n        }\r\n  ],"freight":200,\r\n  "tax":0\r\n  }',
              },
              {
                name: 'clientProfileData',
                value:
                  '{"email":"teste@teste.com","firstName":"Joao","lastName":"Baptista","document":"06134240040","phone":"+551433118100","corporateName":null,"tradeName":null,"corporateDocument":null,"stateInscription":null,"postalCode":"22011-050","address":{"receiverName":"Ellen","postalCode":"22011050","city":"RIO DE JANEIRO","state":"RJ","country":"BRA","street":"RUA  GENERAL AZEVEDO PIMENTEL","number":"12345","neighborhood":"COPACABANA","complement":"APTO 302","reference":null},"gender":null,"birthDate":null,"corporatePhone":null,"isCorporate":false,"documentType":null,"isFirstPurchase":false,"id":null}',
              },
              {
                name: 'shippingData',
                value:
                  '{"receiverName":"Rodrigo Saens","postalCode":"65035430","city":"SAO LUIS","state":"MA","country":"BRA","street":"AV NEWTON  ","number":"321","neighborhood":"MONTE CATELO","complement":"APTO 102","reference":null}',
              },
            ],
            id: 'A3BDE325F76B4B758B398D900DF06150',
            interactions: {
              href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/interactions',
            },
            ipAddress: '10.0.4.12',
            markedForRecurrence: true,
            owner: 'vtexappkey-appvtex',
            payments: { href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments' },
            receiverUri: null,
            referenceKey: '1234567',
            refundingDate: null,
            refundingToken: null,
            refunds: { href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/refunds' },
            salesChannel: '1',
            settlements: {
              href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/settlements',
            },
            softDescriptor: null,
            startDate: '2016-04-15T02:36:38',
            status: 'Cancelling',
            timeoutStatus: 2,
            totalRefunds: 0,
            transactionId: 'A3BDE325F76B4B758B398D900DF06150',
            urn: null,
            userAgent:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
            value: 100,
          },
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '3326', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 02:51:28 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.0', param: { required: false } }),
        'X-AspNet-Version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'X-Powered-By': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '411c3fc9-e504-47d4-a0ee-6b88fb95f129', param: { required: false } }),
      }),
    },
  },
})

export const postApiPvtTransactionsTransactionIdAdditionalDataRoute = createRoute({
  method: 'post',
  path: '/api/pvt/transactions/{transactionId}/additional-data',
  tags: ['Transaction Process'],
  summary: '3. Send Additional Data',
  description:
    'The third step to create a new transaction. It will send the additional related data to the transaction, like billig and shipping adress.',
  operationId: '3.SendAdditionalData',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: 'Transaction identification.',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of data that will be added to the transaction.' }),
              value: z
                .string()
                .exactOptional()
                .openapi({ description: 'Data to be added to the transaction.' }),
            })
            .openapi({ description: '', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postApiPvtTransactionsTransactionIdAuthorizationRequestRoute = createRoute({
  method: 'post',
  path: '/api/pvt/transactions/{transactionId}/authorization-request',
  tags: ['Transaction Process'],
  summary: 'Do authorization',
  description:
    'The fouth and last step to create a new transaction. It will authorized the new transction creation acorrdint to the data previously informed in the latests requests.',
  operationId: '4.Doauthorization',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: _4DoauthorizationRequestSchema,
          example: {
            prepareForRecurrency: false,
            softDescriptor: '{{accountName}}',
            transactionId: '{{transactionId}}',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postApiPvtTransactionsTransactionIdCancellationRequestRoute = createRoute({
  method: 'post',
  path: '/api/pvt/transactions/{transactionId}/cancellation-request',
  tags: ['Transaction Flow'],
  summary: 'Cancel the transaction',
  description: "Cancel's transaction that was previously approved, but not settled.",
  operationId: 'Cancelthetransaction',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: CancelthetransactionRequestSchema,
          example: {
            minicart: {
              freight: 200,
              items: [
                {
                  discount: 50,
                  id: '122323',
                  name: 'Tenis Preto I',
                  quantity: 1,
                  shippingDiscount: 0,
                  value: 1000,
                },
                {
                  discount: 50,
                  id: '122324',
                  name: 'Tenis Nike Azul',
                  quantity: 1,
                  shippingDiscount: 0,
                  value: 1100,
                },
              ],
              tax: 0,
            },
            value: 2300,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postApiPvtTransactionsTransactionIdPaymentsRoute = createRoute({
  method: 'post',
  path: '/api/pvt/transactions/{transactionId}/payments',
  tags: ['Transaction Process'],
  summary: '2.2 Send Payments With Saved Credit Card',
  description:
    'The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.',
  operationId: '2.SendPaymentsWithSavedCreditCard',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .array(_2SendPaymentsWithSavedCreditCardRequestSchema)
            .openapi({ description: '' }),
          example: [
            {
              currencyCode: 'BRL',
              fields: {
                accountId: '44D964F2053642E888E3B23549937F87',
                address: null,
                callbackUrl: '',
                firstDigits: '411111',
                validationCode: '231',
              },
              installments: 1,
              installmentsInterestRate: 0,
              installmentsValue: 100,
              paymentSystem: 2,
              referenceValue: 100,
              transaction: { id: '{{transactionId}}', merchantName: '{{accountName}}' },
              value: 100,
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiPvtTransactionsTransactionIdPaymentsPaymentIdRoute = createRoute({
  method: 'get',
  path: '/api/pvt/transactions/{transactionId}/payments/{paymentId}',
  tags: ['Transaction Process'],
  summary: 'Payment Details',
  description: 'Returns associated information details for the specified payment id.',
  operationId: 'PaymentDetails',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      paymentId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'paymentId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: PaymentDetailsResponseSchema,
          example: {
            ConnectorResponses: null,
            ShowConnectorResponses: false,
            allowInstallments: true,
            allowIssuer: true,
            allowNotification: false,
            connector: 'E-Rede V2',
            connectorResponse: null,
            currencyCode: null,
            description: null,
            fields: [
              { name: 'affiliationId', value: 'c4016e3b-9ed9-4735-98dc-f803c93c5e5c' },
              { name: 'callbackUrl', value: '1' },
              { name: 'baseUrl', value: 'https://gatewayqa.vtexpayments.com.br:443' },
              { name: 'cardHolder', value: 'UserTest' },
              { name: 'firstDigits', value: '444433' },
              { name: 'lastDigits', value: '1111' },
              { name: 'expiryMonth', value: '10' },
              { name: 'expiryYear', value: '2019' },
              { name: 'accountId', value: 'A14180691F1D4CC9941202E10C6B1A33' },
              {
                name: 'connector',
                value: 'Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector',
              },
            ],
            group: 'creditCard',
            id: '712B47E0AB4F4E63BB5FC1DB445AC0B9',
            installments: 1,
            installmentsInterestRate: 0,
            installmentsValue: 100,
            isAvailable: true,
            isCustom: false,
            merchantName: null,
            paymentSystem: 2,
            paymentSystemName: 'Visa',
            provider: null,
            referenceValue: 100,
            returnCode: null,
            returnMessage: null,
            self: {
              href: '/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments/712B47E0AB4F4E63BB5FC1DB445AC0B9',
            },
            sheets: null,
            status: 'Received',
            tid: null,
            value: 100,
          },
        },
      },
      headers: z.object({
        'Cache-Control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '1227', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Fri, 15 Apr 2016 02:51:48 GMT', param: { required: false } }),
        Expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        Pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.0', param: { required: false } }),
        'X-AspNet-Version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'X-Powered-By': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '5f19331b-23f0-444b-a210-49847c50f898', param: { required: false } }),
      }),
    },
  },
})

export const postApiPvtTransactionsTransactionIdRefundingRequestRoute = createRoute({
  method: 'post',
  path: '/api/pvt/transactions/{transactionId}/refunding-request',
  tags: ['Transaction Flow'],
  summary: 'Refund the transaction',
  description: "Refunds transaction's value that was previously settled.",
  operationId: 'Refundthetransaction',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: RefundthetransactionRequestSchema,
          example: {
            minicart: {
              freight: 200,
              items: [
                {
                  discount: 50,
                  id: '122323',
                  name: 'Tenis Preto I',
                  quantity: 1,
                  shippingDiscount: 0,
                  value: 1000,
                },
                {
                  discount: 50,
                  id: '122324',
                  name: 'Tenis Nike Azul',
                  quantity: 1,
                  shippingDiscount: 0,
                  value: 1100,
                },
              ],
              tax: 0,
            },
            value: 2300,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postApiPvtTransactionsTransactionIdSettlementRequestRoute = createRoute({
  method: 'post',
  path: '/api/pvt/transactions/{transactionId}/settlement-request',
  tags: ['Transaction Flow'],
  summary: 'Settle the transaction',
  description: "Settles transaction's value.",
  operationId: 'Settlethetransaction',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: SettlethetransactionRequestSchema, example: { value: 100 } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: SettleResponseSchema,
          example: {
            cancelledValue: 0,
            connectorRefundedValue: 0,
            message: null,
            processingDate: '2017-08-16T17:40:59.3043324Z',
            refundedToken: null,
            refundedValue: 0,
            status: 13,
            statusDetail: 'Finished',
            token: '933276E993ED4452AE4CE2B9B5C6B2F4',
          },
        },
      },
      headers: z.object({
        'access-control-allow-credentials': z
          .string()
          .exactOptional()
          .openapi({ example: 'true', param: { required: false } }),
        'access-control-allow-origin': z
          .string()
          .exactOptional()
          .openapi({
            example: 'chrome-extension://aicmkgpgakddgnaphhhpliifpcfhicfo',
            param: { required: false },
          }),
        'cache-control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'content-length': z
          .string()
          .exactOptional()
          .openapi({ example: '230', param: { required: false } }),
        'content-type': z
          .string()
          .exactOptional()
          .openapi({ example: 'application/json; charset=utf-8', param: { required: false } }),
        date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 16 Aug 2017 17:40:59 GMT', param: { required: false } }),
        expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.0', param: { required: false } }),
        'x-aspnet-version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'x-powered-by': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: 'e3b5660b-9773-40fe-a267-c616542a063a', param: { required: false } }),
      }),
    },
  },
})

export const getApiPvtTransactionsTransactionIdSettlementsRoute = createRoute({
  method: 'get',
  path: '/api/pvt/transactions/{transactionId}/settlements',
  tags: ['Transaction Process'],
  summary: 'Transaction Settlement  Details',
  description: 'Returns associated settlements data for the specified transaction id.',
  operationId: 'TransactionSettlementDetails',
  request: {
    headers: z.object({
      'X-PROVIDER-API-AppKey': z
        .string()
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppKey',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppKey}}',
        }),
      'X-PROVIDER-API-AppToken': z
        .string()
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant (optional configuration)',
            in: 'header',
            name: 'X-PROVIDER-API-AppToken',
            required: true,
            schema: { example: '{{X-PROVIDER-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
          example: '{{X-PROVIDER-API-AppToken}}',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'The Media type of the body of the request.  Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: TransactionSettlementDetailsSchema,
          example: {
            actions: [
              {
                connectorResponse: null,
                date: '2018-06-05T12:55:58.6262759Z',
                payment: {
                  href: '/api/pvt/transactions/074D48049B19403A930FA848C6BE4AF9/payments/87055E7199A446519EB07F1243D5B8BE',
                },
                paymentId: '87055E7199A446519EB07F1243D5B8BE',
                type: 'auto-settlement',
                value: 4499000,
              },
            ],
            requests: [
              {
                date: '2018-06-05T13:08:22',
                id: 'AFB933448FFD4867BF82BCC7026A082C',
                value: 4499000,
              },
            ],
          },
        },
      },
      headers: z.object({
        'cache-control': z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'content-length': z
          .string()
          .exactOptional()
          .openapi({ example: '384', param: { required: false } }),
        'content-type': z
          .string()
          .exactOptional()
          .openapi({ example: 'application/json; charset=utf-8', param: { required: false } }),
        date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Tue, 05 Jun 2018 14:52:17 GMT', param: { required: false } }),
        expires: z
          .string()
          .exactOptional()
          .openapi({ example: '-1', param: { required: false } }),
        pragma: z
          .string()
          .exactOptional()
          .openapi({ example: 'no-cache', param: { required: false } }),
        server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/10.0', param: { required: false } }),
        'x-aspnet-version': z
          .string()
          .exactOptional()
          .openapi({ example: '4.0.30319', param: { required: false } }),
        'x-powered-by': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-operation-id': z
          .string()
          .exactOptional()
          .openapi({ example: '53a30944-47e6-479f-a5ff-56d0fd7c1f1d', param: { required: false } }),
      }),
    },
  },
})
