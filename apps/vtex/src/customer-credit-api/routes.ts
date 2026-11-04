import { createRoute, z } from '@hono/zod-openapi'

const AddanaccountHolderRequestSchema = z
  .object({
    claims: z
      .object({ email: z.string() })
      .openapi({ example: { email: 'USER-EMAIL' }, required: ['email'], title: 'Claims' }),
  })
  .openapi({
    example: { claims: { email: 'USER-EMAIL' } },
    required: ['claims'],
    title: 'AddanaccountHolderRequest',
  })
  .openapi('AddanaccountHolderRequest')

const ChangeInvoiceRequestSchema = z
  .object({ observation: z.string(), paymentLink: z.string(), status: z.string() })
  .openapi({
    example: {
      observation: 'string (optional)',
      paymentLink: 'string (URL) (optional)',
      status: 'string',
    },
    required: ['status', 'observation', 'paymentLink'],
    title: 'ChangeInvoiceRequest',
  })
  .openapi('ChangeInvoiceRequest')

const ChangecreditlimitofanAccountRequestSchema = z
  .object({ value: z.int32() })
  .openapi({
    example: { value: 10000 },
    required: ['value'],
    title: 'ChangecreditlimitofanAccountRequest',
  })
  .openapi('ChangecreditlimitofanAccountRequest')

const ChangetoleranceofanaccountRequestSchema = z
  .object({ value: z.number() })
  .openapi({
    example: { value: 0.2 },
    required: ['value'],
    title: 'ChangetoleranceofanaccountRequest',
  })
  .openapi('ChangetoleranceofanaccountRequest')

const ClaimsSchema = z
  .object({ email: z.string() })
  .openapi({ example: { email: 'USER-EMAIL' }, required: ['email'], title: 'Claims' })
  .openapi('Claims')

const CloseanAccountRequestSchema = z
  .object({ document: z.string(), documentType: z.string(), email: z.string() })
  .openapi({
    example: { document: 'number', documentType: 'CPF ou CNPJ ou Other', email: 'email' },
    required: ['document', 'documentType', 'email'],
    title: 'CloseanAccountRequest',
  })
  .openapi('CloseanAccountRequest')

const CreateaPreAuthorizationRequestSchema = z
  .object({
    expirationDate: z.string(),
    installments: z.string(),
    settle: z.boolean(),
    value: z.string(),
  })
  .openapi({
    example: {
      expirationDate: 'date in ISO8601 (UTC) dateformat (optional default is 1(one) day)',
      installments: 'integer (optional default is 1)',
      settle: false,
      value: 'decimal (required)',
    },
    required: ['value', 'settle', 'installments', 'expirationDate'],
    title: 'CreateaPreAuthorizationRequest',
  })
  .openapi('CreateaPreAuthorizationRequest')

const CreateaPreAuthorizationUsingidRequestSchema = z
  .object({
    expirationDate: z.string(),
    installments: z.string(),
    settle: z.boolean(),
    value: z.string(),
  })
  .openapi({
    example: {
      expirationDate: 'date in ISO8601 (UTC) dateformat (optional default is 1(one) day)',
      installments: 'integer (optional default is 1)',
      settle: false,
      value: 'decimal (required)',
    },
    required: ['value', 'settle', 'installments', 'expirationDate'],
    title: '',
  })
  .openapi('CreateaPreAuthorizationUsingidRequest')

const CreateorUpdateSettlementRequestSchema = z
  .object({ value: z.string() })
  .openapi({
    example: { value: 'decimal (required)' },
    required: ['value'],
    title: 'CreateorUpdateSettlementRequest',
  })
  .openapi('CreateorUpdateSettlementRequest')

const CreateorchangestoreconfigurationRequestSchema = z
  .object({
    automaticCheckingAccountCreationEnabled: z.boolean(),
    dailyInterestRate: z.string(),
    defaultCreditValue: z.string(),
    invoicePostponementLimit: z.string(),
    maxPostponementDays: z.string(),
    maxPreAuthorizationGrowthRate: z.string(),
    myCreditsEnabled: z.boolean(),
    postponementEnabled: z.boolean(),
    taxRate: z.string(),
    toleranceEnabled: z.boolean(),
  })
  .openapi({
    example: {
      automaticCheckingAccountCreationEnabled: false,
      dailyInterestRate: 'number(percent 0.1=10%) (float)',
      defaultCreditValue: 'number (decimal)',
      invoicePostponementLimit: 'number (int)',
      maxPostponementDays: 'number (int',
      maxPreAuthorizationGrowthRate: 'number (percent 0.1=10%) (float)',
      myCreditsEnabled: false,
      postponementEnabled: false,
      taxRate: 'number(percent 0.1=10%) (float)',
      toleranceEnabled: false,
    },
    required: [
      'dailyInterestRate',
      'invoicePostponementLimit',
      'taxRate',
      'maxPostponementDays',
      'defaultCreditValue',
      'maxPreAuthorizationGrowthRate',
      'myCreditsEnabled',
      'toleranceEnabled',
      'automaticCheckingAccountCreationEnabled',
      'postponementEnabled',
    ],
    title: 'CreateorchangestoreconfigurationRequest',
  })
  .openapi('CreateorchangestoreconfigurationRequest')

const DatumSchema = z
  .object({
    checkingAccountId: z.string(),
    createdAt: z.string(),
    description: z.string(),
    dueDate: z.string(),
    id: z.string(),
    observation: z.string().nullable(),
    originalDueDate: z.string(),
    paymentLink: z.string().nullable(),
    status: z.string(),
    updatedAt: z.string(),
    value: z.number(),
  })
  .openapi({
    example: {
      checkingAccountId: '14443385797_CPF',
      createdAt: '2017-06-19T01:53:54',
      description: 'Invoice from debit of 100M. Installment 1/1',
      dueDate: '2017-07-27T05:58:24',
      id: 'ce02c68b2b584d5ba15a63bc485d43f1',
      observation: '',
      originalDueDate: '2017-07-27T05:58:24',
      paymentLink: '',
      status: 'Paid',
      updatedAt: '2017-06-27T05:58:24',
      value: 100,
    },
    required: [
      'id',
      'status',
      'value',
      'checkingAccountId',
      'createdAt',
      'updatedAt',
      'paymentLink',
      'originalDueDate',
      'dueDate',
      'description',
      'observation',
    ],
    title: 'Datum',
  })
  .openapi('Datum')

const Datum1Schema = z
  .object({
    checkingAccountId: z.string(),
    createdAt: z.string(),
    description: z.string(),
    dueDate: z.string(),
    id: z.string(),
    observation: z.string(),
    originalDueDate: z.string(),
    paymentLink: z.string(),
    status: z.string(),
    updatedAt: z.string(),
    value: z.number(),
  })
  .openapi({
    example: {
      checkingAccountId: '12345677811_CPF',
      createdAt: '2017-07-06T01:57:58',
      description: 'Invoice from debit of 240.0M. Installment 1/1',
      dueDate: '2017-08-05T01:57:58',
      id: 'f9a056cb63f5417fb900ed5128bc1b15',
      observation: '',
      originalDueDate: '2017-08-05T01:57:58',
      paymentLink: '',
      status: 'Opened',
      updatedAt: '2017-07-06T01:57:58',
      value: 240,
    },
    required: [
      'id',
      'status',
      'value',
      'checkingAccountId',
      'createdAt',
      'updatedAt',
      'paymentLink',
      'originalDueDate',
      'dueDate',
      'description',
      'observation',
    ],
    title: 'Datum1',
  })
  .openapi('Datum1')

const Datum2Schema = z
  .object({
    account: z.string(),
    balance: z.number(),
    creditLimit: z.number(),
    description: z.string(),
    document: z.string(),
    documentType: z.string(),
    email: z.string(),
    lastUpdate: z.string(),
  })
  .openapi({
    example: {
      account: 'ambienteqa',
      balance: 220,
      creditLimit: 240,
      description: '',
      document: '12345677811',
      documentType: 'CPF',
      email: 'test@test.com',
      lastUpdate: '2017-07-06T01:57:39.4317119Z',
    },
    required: [
      'account',
      'balance',
      'document',
      'documentType',
      'creditLimit',
      'lastUpdate',
      'description',
      'email',
    ],
    title: 'Datum2',
  })
  .openapi('Datum2')

const DecreasebalanceofanaccountRequestSchema = z
  .object({ value: z.string() })
  .openapi({
    example: { value: '-number' },
    required: ['value'],
    title: 'DecreasebalanceofanaccountRequest',
  })
  .openapi('DecreasebalanceofanaccountRequest')

const GetaccountSchema = z
  .object({
    account: z.string(),
    balance: z.number(),
    creditLimit: z.number(),
    description: z.string(),
    email: z.string(),
    lastUpdate: z.string(),
  })
  .openapi({
    example: {
      account: 'ambienteqa',
      balance: 220,
      creditLimit: 240,
      description: '',
      email: 'test@test.com',
      lastUpdate: '2017-07-06T01:57:39.4317119Z',
    },
    required: ['account', 'balance', 'creditLimit', 'lastUpdate', 'description', 'email'],
    title: 'Getaccount',
  })
  .openapi('Getaccount')

const GetinvoicesfromacheckingaccountSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            checkingAccountId: z.string(),
            createdAt: z.string(),
            description: z.string(),
            dueDate: z.string(),
            id: z.string(),
            observation: z.string(),
            originalDueDate: z.string(),
            paymentLink: z.string(),
            status: z.string(),
            updatedAt: z.string(),
            value: z.number(),
          })
          .openapi({
            example: {
              checkingAccountId: '12345677811_CPF',
              createdAt: '2017-07-06T01:57:58',
              description: 'Invoice from debit of 240.0M. Installment 1/1',
              dueDate: '2017-08-05T01:57:58',
              id: 'f9a056cb63f5417fb900ed5128bc1b15',
              observation: '',
              originalDueDate: '2017-08-05T01:57:58',
              paymentLink: '',
              status: 'Opened',
              updatedAt: '2017-07-06T01:57:58',
              value: 240,
            },
            required: [
              'id',
              'status',
              'value',
              'checkingAccountId',
              'createdAt',
              'updatedAt',
              'paymentLink',
              'originalDueDate',
              'dueDate',
              'description',
              'observation',
            ],
            title: 'Datum1',
          }),
      )
      .openapi({ description: '' }),
    summary: z
      .object({ count: z.int32(), total: z.number() })
      .openapi({
        example: { count: 5, total: 500 },
        required: ['total', 'count'],
        title: 'Summary',
      }),
  })
  .openapi({
    example: {
      data: [
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:57:58',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:57:58',
          id: 'f9a056cb63f5417fb900ed5128bc1b15',
          observation: '',
          originalDueDate: '2017-08-05T01:57:58',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:57:58',
          value: 240,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:57:58',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:57:58',
          id: 'ae45d73bfe534325bc6cfef3521d675c',
          observation: '',
          originalDueDate: '2017-08-05T01:57:58',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:57:58',
          value: 240,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:45:40',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:57:58',
          id: '8b984881a6934a06b65ab679c3b6641b',
          observation: '',
          originalDueDate: '2017-08-05T01:57:58',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:57:58',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:44:49',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:44:51',
          id: 'c19d55551ac84e2d84c5b60f53c77daa',
          observation: '',
          originalDueDate: '2017-08-05T01:44:51',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:44:52',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:40:02',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:40:03',
          id: 'b588919ac65a4bc58bc1b87957ca136a',
          observation: '',
          originalDueDate: '2017-08-05T01:40:03',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:40:03',
          value: 240,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:39:17',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:39:19',
          id: 'fabb9ae209cb4c50ac048ab72363d488',
          observation: '',
          originalDueDate: '2017-08-05T01:39:19',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:39:20',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:38:15',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:38:17',
          id: 'bc4e409f1490495b8dc351e2f93ac766',
          observation: '',
          originalDueDate: '2017-08-05T01:38:17',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:38:18',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:37:35',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:37:38',
          id: 'b23eb606d9054e29a789745c1473d123',
          observation: '',
          originalDueDate: '2017-08-05T01:37:38',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:37:38',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:36:25',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:36:29',
          id: '2f67b460ca0742118d5eadd7d3752480',
          observation: '',
          originalDueDate: '2017-08-05T01:36:29',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:36:30',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:35:18',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:35:21',
          id: '36102b1baec74904a80dcc6baf8dd5e7',
          observation: '',
          originalDueDate: '2017-08-05T01:35:21',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:35:22',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:31:31',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:31:32',
          id: '2166d1d0b35a4ece826fac580652348b',
          observation: '',
          originalDueDate: '2017-08-05T01:31:32',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:31:32',
          value: 240,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:30:18',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:30:20',
          id: '4d7ae513368a425db3c0c567fa2e9704',
          observation: '',
          originalDueDate: '2017-08-05T01:30:20',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:30:21',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:29:32',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:29:34',
          id: '98332e38da024e269670bf6a5fce24ca',
          observation: '',
          originalDueDate: '2017-08-05T01:29:34',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:29:35',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:28:58',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:29:00',
          id: 'f2caa32762f14961895f93ddd1eb66cb',
          observation: '',
          originalDueDate: '2017-08-05T01:29:00',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:29:01',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:19:14',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:19:15',
          id: 'c44a7c0d2d944fe1bffc59b79ffdb214',
          observation: '',
          originalDueDate: '2017-08-05T01:19:15',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:19:15',
          value: 240,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:18:25',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:18:28',
          id: 'f5c4725b549e4e77bfbf69f9ec6b5f44',
          observation: '',
          originalDueDate: '2017-08-05T01:18:28',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:18:29',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:17:34',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:17:37',
          id: '76054911732743e3b011a36fdf99ac9b',
          observation: '',
          originalDueDate: '2017-08-05T01:17:37',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:17:38',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:16:54',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:16:57',
          id: 'd5d5bc644d9e4068bb108bcca420343b',
          observation: '',
          originalDueDate: '2017-08-05T01:16:57',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:16:58',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:16:14',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:16:17',
          id: 'c8de1d1b4f144a8bbb339f2a1c873c7e',
          observation: '',
          originalDueDate: '2017-08-05T01:16:17',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:16:18',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:14:40',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:14:43',
          id: 'a84cc2c91ee048c2bcf94b3214af31b2',
          observation: '',
          originalDueDate: '2017-08-05T01:14:43',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:14:43',
          value: 20,
        },
        {
          checkingAccountId: '12345677811_CPF',
          createdAt: '2017-07-06T01:13:22',
          description: 'Invoice from debit of 240.0M. Installment 1/1',
          dueDate: '2017-08-05T01:13:23',
          id: '3bf5ea95cb75465e80ea8c0f16cbc4d2',
          observation: '',
          originalDueDate: '2017-08-05T01:13:23',
          paymentLink: '',
          status: 'Opened',
          updatedAt: '2017-07-06T01:13:23',
          value: 240,
        },
      ],
      summary: { count: 194, total: 1740 },
    },
    required: ['data', 'summary'],
    title: 'Getinvoicesfromacheckingaccount',
  })
  .openapi('Getinvoicesfromacheckingaccount')

const IncreasebalanceofanaccountRequestSchema = z
  .object({ value: z.string() })
  .openapi({
    example: { value: 'number' },
    required: ['value'],
    title: 'IncreasebalanceofanaccountRequest',
  })
  .openapi('IncreasebalanceofanaccountRequest')

const MarkaninvoiceasPaidRequestSchema = z
  .object({ value: z.string() })
  .openapi({
    example: { value: 'number (FULL invoice value [deprecated])' },
    required: ['value'],
    title: 'MarkaninvoiceasPaidRequest',
  })
  .openapi('MarkaninvoiceasPaidRequest')

const OpenanAccountRequestSchema = z
  .object({
    creditLimit: z.string(),
    description: z.string(),
    document: z.string(),
    documentType: z.string(),
    email: z.string(),
    tolerance: z.string(),
  })
  .openapi({
    example: {
      creditLimit: 'number',
      description: 'description',
      document: 'number',
      documentType: 'CPF ou CNPJ ou Other',
      email: 'email',
      tolerance: '1 is 100%',
    },
    required: ['document', 'documentType', 'email', 'creditLimit', 'description', 'tolerance'],
    title: 'OpenanAccountRequest',
  })
  .openapi('OpenanAccountRequest')

const OpenorChangeAccountRequestSchema = z
  .object({ creditLimit: z.string(), email: z.string() })
  .openapi({
    example: { creditLimit: 'number', email: 'email' },
    required: ['email', 'creditLimit'],
    title: 'OpenorChangeAccountRequest',
  })
  .openapi('OpenorChangeAccountRequest')

const PaidinvoicesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            checkingAccountId: z.string(),
            createdAt: z.string(),
            description: z.string(),
            dueDate: z.string(),
            id: z.string(),
            observation: z.string().nullable(),
            originalDueDate: z.string(),
            paymentLink: z.string().nullable(),
            status: z.string(),
            updatedAt: z.string(),
            value: z.number(),
          })
          .openapi({
            example: {
              checkingAccountId: '14443385797_CPF',
              createdAt: '2017-06-19T01:53:54',
              description: 'Invoice from debit of 100M. Installment 1/1',
              dueDate: '2017-07-27T05:58:24',
              id: 'ce02c68b2b584d5ba15a63bc485d43f1',
              observation: '',
              originalDueDate: '2017-07-27T05:58:24',
              paymentLink: '',
              status: 'Paid',
              updatedAt: '2017-06-27T05:58:24',
              value: 100,
            },
            required: [
              'id',
              'status',
              'value',
              'checkingAccountId',
              'createdAt',
              'updatedAt',
              'paymentLink',
              'originalDueDate',
              'dueDate',
              'description',
              'observation',
            ],
            title: 'Datum',
          }),
      )
      .openapi({ description: '' }),
    summary: z
      .object({ count: z.int32(), total: z.number() })
      .openapi({
        example: { count: 5, total: 500 },
        required: ['total', 'count'],
        title: 'Summary',
      }),
  })
  .openapi({
    example: {
      data: [
        {
          checkingAccountId: '14443385797_CPF',
          createdAt: '2017-06-19T01:53:54',
          description: 'Invoice from debit of 100M. Installment 1/1',
          dueDate: '2017-07-27T05:58:24',
          id: 'ce02c68b2b584d5ba15a63bc485d43f1',
          observation: '',
          originalDueDate: '2017-07-27T05:58:24',
          paymentLink: '',
          status: 'Paid',
          updatedAt: '2017-06-27T05:58:24',
          value: 100,
        },
        {
          checkingAccountId: '06100326744_CPF',
          createdAt: '2017-04-27T01:48:27',
          description: 'Invoice from debit of 100M. Installment 1/1',
          dueDate: '2017-05-27T07:58:42',
          id: '11ff8f52407047c2966649c3484285bd',
          observation: '',
          originalDueDate: '',
          paymentLink: null,
          status: 'Paid',
          updatedAt: '2017-04-27T07:58:42',
          value: 100,
        },
        {
          checkingAccountId: '06100326744_CPF',
          createdAt: '2017-04-27T01:48:27',
          description: 'Invoice from debit of 100M. Installment 1/1',
          dueDate: '2017-05-27T07:58:30',
          id: '2828a856363a4f82b3f5c18b3ef09620',
          observation: '',
          originalDueDate: '',
          paymentLink: null,
          status: 'Paid',
          updatedAt: '2017-04-27T07:58:30',
          value: 100,
        },
        {
          checkingAccountId: '06100326744_CPF',
          createdAt: '2017-04-27T01:48:27',
          description: 'Invoice from debit of 100M. Installment 1/1',
          dueDate: '2017-05-27T07:58:52',
          id: '06c8f6160f7a4a50ae43c26a37fe1946',
          observation: '',
          originalDueDate: '',
          paymentLink: null,
          status: 'Paid',
          updatedAt: '2017-04-27T07:58:52',
          value: 100,
        },
        {
          checkingAccountId: '14443385797_CPF',
          createdAt: '2017-04-11T04:50:34',
          description: 'Invoice from debit of 100M. Installment 1/1',
          dueDate: '2017-05-11T05:26:07',
          id: '105e79997fbe452ba33ffa69b408f9bf',
          observation: null,
          originalDueDate: '',
          paymentLink: null,
          status: 'Paid',
          updatedAt: '2017-04-11T05:26:07',
          value: 100,
        },
      ],
      summary: { count: 5, total: 500 },
    },
    required: ['data', 'summary'],
    title: 'Paidinvoices',
  })
  .openapi('Paidinvoices')

const PartialorTotalRefundaSettlementRequestSchema = z
  .object({ value: z.string() })
  .openapi({
    example: { value: 'decimal (required)' },
    required: ['value'],
    title: 'PartialorTotalRefundaSettlementRequest',
  })
  .openapi('PartialorTotalRefundaSettlementRequest')

const PostponeaninvoiceRequestSchema = z
  .object({ dueDays: z.string() })
  .openapi({
    example: { dueDays: 'number (integer)' },
    required: ['dueDays'],
    title: 'PostponeaninvoiceRequest',
  })
  .openapi('PostponeaninvoiceRequest')

const RetrievedinvoiceSchema = z
  .object({
    checkingAccountId: z.string(),
    createdAt: z.string(),
    description: z.string(),
    dueDate: z.string(),
    id: z.string(),
    observation: z.string(),
    originalDueDate: z.string(),
    paymentLink: z.string(),
    status: z.string(),
    updatedAt: z.string(),
    value: z.number(),
  })
  .openapi({
    example: {
      checkingAccountId: '76655291437_CPF',
      createdAt: '2017-07-12T08:53:04',
      description: 'Invoice issued from a API call',
      dueDate: '2017-07-27T08:53:04',
      id: '029f4009-ac4b-4739-8644-50df050f34ca',
      observation: 'Some observation about the invoice',
      originalDueDate: '2017-07-27T08:53:04',
      paymentLink: 'http://foo.bar',
      status: 'Opened',
      updatedAt: '2017-07-12T08:53:04',
      value: 50,
    },
    required: [
      'id',
      'status',
      'value',
      'checkingAccountId',
      'createdAt',
      'updatedAt',
      'paymentLink',
      'originalDueDate',
      'dueDate',
      'description',
      'observation',
    ],
    title: 'Retrievedinvoice',
  })
  .openapi('Retrievedinvoice')

const SavestoreconfigSchema = z
  .object({
    dailyInterestRate: z.number(),
    invoicePostponementLimit: z.int32(),
    taxRate: z.number(),
    tolerancePercent: z.number(),
  })
  .openapi({
    example: {
      dailyInterestRate: 0.2,
      invoicePostponementLimit: 2,
      taxRate: 0.4,
      tolerancePercent: 0.35,
    },
    required: ['dailyInterestRate', 'invoicePostponementLimit', 'taxRate', 'tolerancePercent'],
    title: 'Savestoreconfig',
  })
  .openapi('Savestoreconfig')

const SearchaccountsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            account: z.string(),
            balance: z.number(),
            creditLimit: z.number(),
            description: z.string(),
            document: z.string(),
            documentType: z.string(),
            email: z.string(),
            lastUpdate: z.string(),
          })
          .openapi({
            example: {
              account: 'ambienteqa',
              balance: 220,
              creditLimit: 240,
              description: '',
              document: '12345677811',
              documentType: 'CPF',
              email: 'test@test.com',
              lastUpdate: '2017-07-06T01:57:39.4317119Z',
            },
            required: [
              'account',
              'balance',
              'document',
              'documentType',
              'creditLimit',
              'lastUpdate',
              'description',
              'email',
            ],
            title: 'Datum2',
          }),
      )
      .openapi({ description: '' }),
    summary: z
      .object({ count: z.int32() })
      .openapi({ example: { count: 39 }, required: ['count'], title: 'Summary2' }),
  })
  .openapi({
    example: {
      data: [
        {
          account: 'ambienteqa',
          balance: 220,
          creditLimit: 240,
          description: '',
          document: '12345677811',
          documentType: 'CPF',
          email: 'test@test.com',
          lastUpdate: '2017-07-06T01:57:39.4317119Z',
        },
      ],
      summary: { count: 39 },
    },
    required: ['data', 'summary'],
    title: 'Searchaccounts',
  })
  .openapi('Searchaccounts')

const SearchcheckingaccountsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            account: z.string(),
            balance: z.number(),
            creditLimit: z.number(),
            description: z.string(),
            document: z.string(),
            documentType: z.string(),
            email: z.string(),
            lastUpdate: z.string(),
          })
          .openapi({
            example: {
              account: 'ambienteqa',
              balance: 220,
              creditLimit: 240,
              description: '',
              document: '12345677811',
              documentType: 'CPF',
              email: 'test@test.com',
              lastUpdate: '2017-07-06T01:57:39.4317119Z',
            },
            required: [
              'account',
              'balance',
              'document',
              'documentType',
              'creditLimit',
              'lastUpdate',
              'description',
              'email',
            ],
            title: 'Datum2',
          }),
      )
      .openapi({ description: '' }),
    summary: z
      .object({ count: z.int32() })
      .openapi({ example: { count: 39 }, required: ['count'], title: 'Summary2' }),
  })
  .openapi({
    example: {
      data: [
        {
          account: 'ambienteqa',
          balance: 220,
          creditLimit: 240,
          description: '',
          document: '12345677811',
          documentType: 'CPF',
          email: 'test@test.com',
          lastUpdate: '2017-07-06T01:57:39.4317119Z',
        },
      ],
      summary: { count: 39 },
    },
    required: ['data', 'summary'],
    title: 'Searchcheckingaccounts',
  })
  .openapi('Searchcheckingaccounts')

const StatementsSchema = z
  .object({
    currentBalance: z.number(),
    intervalBalance: z.number(),
    previousBalance: z.number(),
    statements: z
      .array(
        z
          .object({ date: z.string(), description: z.string(), value: z.number() })
          .openapi({
            example: {
              date: '2017-07-03T16:47:19.4578611Z',
              description: 'Credited',
              value: 10000,
            },
            required: ['value', 'date', 'description'],
            title: 'Statements1',
          }),
      )
      .openapi({ description: '' }),
  })
  .openapi({
    example: {
      currentBalance: 0,
      intervalBalance: 0,
      previousBalance: 0,
      statements: [
        { date: '2017-07-03T16:47:19.4578611Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:47:19.6678789Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:47:20.118935Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:47:20.4899776Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:52:00.9443838Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:52:01.2514187Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:52:01.671466Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:52:01.9424961Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:54:40.0782046Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:54:40.3252276Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:54:40.6552638Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:54:40.8932962Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:55:57.197841Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:55:57.5278732Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:55:57.9019147Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:55:58.1179392Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:57:11.8426054Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:57:13.8889672Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:57:16.5197295Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:57:18.3509528Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:57:18.7869726Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:57:19.0240035Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T16:57:19.3770378Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T16:57:19.7050818Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T17:07:15.8348399Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T17:07:16.1788809Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T17:07:16.5469147Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T17:07:16.7959479Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T17:09:33.0252059Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T17:09:33.5372179Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T17:09:34.1453238Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T17:09:34.468359Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T17:09:53.1504362Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T17:09:55.3629113Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T17:09:58.6401036Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T17:10:00.782546Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T18:49:22.3349339Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T18:49:22.6879717Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T18:49:23.0600071Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T18:49:23.3570469Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T18:57:01.460345Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T18:57:02.2444344Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T18:57:02.6094762Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T18:57:03.0085156Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T19:01:09.3831094Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T19:01:09.7391531Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T19:01:10.3811954Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T19:01:13.7475991Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T20:48:39.1243969Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T20:48:39.6534554Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T20:48:39.976498Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T20:48:40.2195183Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T21:43:36.8709735Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T21:43:39.3015912Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T21:43:42.4497005Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T21:43:45.0294261Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T21:52:42.0202602Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T21:52:44.2187306Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T21:52:47.6370182Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T21:52:49.6223473Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T22:00:43.7004457Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T22:00:45.8558835Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T22:00:48.8719015Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T22:00:50.9332797Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T22:06:14.2397182Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T22:06:14.8247757Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T22:06:15.3018042Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T22:06:15.5878612Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T22:13:11.2934159Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T22:13:11.6004563Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T22:13:13.677688Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T22:13:13.9407125Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T22:24:18.0640865Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T22:24:18.3391219Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-03T22:24:18.7501665Z', description: 'Credited', value: 10000 },
        { date: '2017-07-03T22:24:19.0612052Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T13:35:32.4265204Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T13:35:32.670556Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T13:35:33.0035923Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T13:35:33.2296111Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T13:43:18.0936755Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T13:43:18.5677311Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T13:43:19.0377821Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T13:43:19.3078114Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T13:46:24.2995291Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T13:46:24.5415575Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T13:46:25.1666258Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T13:46:25.3926527Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T15:10:11.6542275Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T15:10:25.101228Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T15:10:46.4925416Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T15:10:53.5622728Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T16:47:02.1152214Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T16:47:02.4332644Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T16:47:02.9263133Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T16:47:03.2213519Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T18:15:05.4888997Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T18:15:06.0669661Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T18:15:06.6290272Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T18:15:07.0140703Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T18:29:04.8128943Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T18:29:05.1829369Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-04T18:29:05.7749947Z', description: 'Credited', value: 10000 },
        { date: '2017-07-04T18:29:06.0640335Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T17:15:29.5981555Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T17:15:29.8481897Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T17:15:30.2942391Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T17:15:30.5592684Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T17:44:37.2988823Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T17:44:37.851942Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T17:44:38.3920041Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T17:44:38.7030381Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T20:09:37.3571808Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T20:09:37.72222Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T20:09:38.0552519Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T20:09:38.2922837Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T20:20:18.4320323Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T20:20:21.3519865Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T20:20:24.16387Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T20:20:25.8389893Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T20:22:52.2991989Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T20:22:52.5682339Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T20:22:53.0962861Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T20:22:53.6013417Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T20:24:44.309999Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T20:24:46.5064706Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T20:24:49.6956032Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T20:24:51.4547805Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T21:14:17.4331001Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-05T21:14:30.1921448Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-05T22:20:16.0386883Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-05T22:20:25.5770708Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-05T23:59:03.2527657Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T23:59:08.3266609Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-05T23:59:16.9109105Z', description: 'Credited', value: 10000 },
        { date: '2017-07-05T23:59:22.5296797Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T01:57:44.2482508Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T01:57:44.5012788Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T01:57:45.2343532Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T01:57:45.5723968Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T14:22:00.5618842Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:22:05.5812446Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T14:22:13.7547136Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:22:16.3029568Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:22:17.7061162Z', description: 'Credits emptied', value: -20000 },
        { date: '2017-07-06T14:22:20.5444338Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:22:21.0144862Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T14:32:59.6762693Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:33:07.7819136Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:33:08.2790261Z', description: 'Credits emptied', value: -20000 },
        { date: '2017-07-06T14:33:08.3789839Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-06T14:33:09.0970636Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:33:09.5591087Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T14:33:20.0709176Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:33:27.9481914Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T14:39:44.5993553Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:39:44.8493768Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T14:39:45.4174464Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T14:39:45.8154911Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T18:02:28.6075704Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T18:02:28.9126055Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T18:02:29.361656Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T18:02:29.6296853Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T18:14:48.6134384Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T18:14:48.937473Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T18:14:51.6977841Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T18:14:52.0238222Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T18:58:40.45117Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T18:58:40.7472093Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T18:58:41.1442492Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T18:58:41.7183119Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T20:10:20.391709Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T20:10:20.6657389Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T20:10:21.3558225Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T20:10:21.6258492Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T20:11:48.5505811Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T20:11:49.0886414Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-06T20:11:49.797721Z', description: 'Credited', value: 10000 },
        { date: '2017-07-06T20:11:50.1477661Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-07T02:33:28.0860427Z', description: 'Credited', value: 10000 },
        { date: '2017-07-07T02:33:28.4040771Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-07T02:33:28.9461381Z', description: 'Credited', value: 10000 },
        { date: '2017-07-07T02:33:29.3731885Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-07T03:19:29.0522439Z', description: 'Credited', value: 10000 },
        { date: '2017-07-07T03:19:29.3802781Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-07T03:19:29.8033262Z', description: 'Credited', value: 10000 },
        { date: '2017-07-07T03:19:30.1083606Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-09T16:38:32.0646398Z', description: 'Credited', value: 10000 },
        { date: '2017-07-09T16:38:38.5399737Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-09T16:38:52.0400096Z', description: 'Credited', value: 10000 },
        { date: '2017-07-09T16:38:59.0326902Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-09T16:46:39.5442819Z', description: 'Credited', value: 10000 },
        { date: '2017-07-09T16:46:39.8743121Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-09T16:46:40.8354262Z', description: 'Credited', value: 10000 },
        { date: '2017-07-09T16:46:41.1404609Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-09T16:53:23.68054Z', description: 'Credited', value: 10000 },
        { date: '2017-07-09T16:53:23.9735672Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-09T16:53:24.4196165Z', description: 'Credited', value: 10000 },
        { date: '2017-07-09T16:53:24.7606614Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-09T17:02:28.3755391Z', description: 'Credited', value: 10000 },
        { date: '2017-07-09T17:02:28.7075311Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-09T17:02:30.9268213Z', description: 'Credited', value: 10000 },
        { date: '2017-07-09T17:02:31.4268761Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T15:31:13.8141713Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T15:31:14.1722149Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T15:31:14.7582781Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T15:31:15.008306Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T15:36:12.620413Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T15:36:15.3802583Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T15:36:20.0483828Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T15:36:22.3108969Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T15:39:13.5468917Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T15:39:14.0169506Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T15:39:14.4700013Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T15:39:14.7320264Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T15:48:49.3203773Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T15:48:49.6554153Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T15:48:50.2114767Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T15:48:50.5725163Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T16:01:48.7536577Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T16:01:49.0086875Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T16:01:49.3867329Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T16:01:49.720771Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T16:21:56.4849081Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T16:21:56.7768944Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T16:21:57.420015Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T16:21:57.7600564Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T18:44:22.3239425Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T18:44:22.6069739Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T18:44:23.0380212Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T18:44:23.7830985Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T18:46:15.7306413Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T18:46:16.0676798Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T18:46:16.7557547Z', description: 'Credited', value: 10000 },
        { date: '2017-07-10T18:46:17.0717915Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-10T20:46:09.0601995Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-10T20:46:09.7432736Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-10T20:59:50.5891534Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-10T20:59:51.1332589Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-10T21:50:23.5218551Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-10T21:50:24.1779278Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T14:33:29.5236904Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T14:33:30.0347475Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T16:09:06.1221118Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T16:09:06.6011653Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T16:11:55.696109Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T16:11:56.2121659Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T16:11:56.8692618Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T16:11:57.1562724Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T16:19:51.1613469Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T16:19:51.5924019Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T17:08:27.2440987Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T17:31:27.2874184Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T17:38:25.7778188Z', description: 'Credited', value: 1 },
        { date: '2017-07-11T17:38:47.9508788Z', description: 'Decrease credits', value: -1 },
        { date: '2017-07-11T17:40:23.1954791Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T17:42:40.0572365Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T17:44:01.6719325Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T17:45:45.1352607Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T17:46:26.9859192Z', description: 'Credits emptied', value: 0 },
        { date: '2017-07-11T17:52:50.7294541Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T17:52:55.3262378Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T18:01:50.9566941Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T18:01:51.27073Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T18:01:51.8287917Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T18:01:52.13982Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T18:23:21.8592583Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T18:23:22.202299Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T18:23:22.6883482Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T18:23:23.0293898Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T20:39:37.8348611Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T20:39:38.2699106Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T20:39:38.7839661Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T20:39:39.1620082Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T20:53:39.9211228Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T20:53:40.8032621Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T20:53:41.3593193Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T20:53:41.7023675Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T21:49:07.6918338Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T21:49:08.0898827Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T21:49:09.7340616Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T21:49:10.298129Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T22:13:29.121493Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T22:13:29.7035615Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-11T22:13:31.0747185Z', description: 'Credited', value: 10000 },
        { date: '2017-07-11T22:13:31.3367462Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-12T15:19:01.7803787Z', description: 'Credited', value: 10000 },
        { date: '2017-07-12T15:19:02.2223874Z', description: 'Credits emptied', value: -10000 },
        { date: '2017-07-12T15:19:02.7854971Z', description: 'Credited', value: 10000 },
        { date: '2017-07-12T15:19:03.3115534Z', description: 'Credits emptied', value: -10000 },
      ],
    },
    required: ['statements', 'currentBalance', 'intervalBalance', 'previousBalance'],
    title: 'Statements',
  })
  .openapi('Statements')

const Statements1Schema = z
  .object({ date: z.string(), description: z.string(), value: z.number() })
  .openapi({
    example: { date: '2017-07-03T16:47:19.4578611Z', description: 'Credited', value: 10000 },
    required: ['value', 'date', 'description'],
    title: 'Statements1',
  })
  .openapi('Statements1')

const StoreconfigSchema = z
  .object({
    dailyInterestRate: z.number(),
    invoicePostponementLimit: z.int32(),
    taxRate: z.number(),
    tolerancePercent: z.number(),
  })
  .openapi({
    example: {
      dailyInterestRate: 0,
      invoicePostponementLimit: 0,
      taxRate: 0,
      tolerancePercent: 0.7,
    },
    required: ['dailyInterestRate', 'invoicePostponementLimit', 'taxRate', 'tolerancePercent'],
    title: 'Storeconfig',
  })
  .openapi('Storeconfig')

const SummarySchema = z
  .object({ count: z.int32(), total: z.number() })
  .openapi({ example: { count: 5, total: 500 }, required: ['total', 'count'], title: 'Summary' })
  .openapi('Summary')

const Summary2Schema = z
  .object({ count: z.int32() })
  .openapi({ example: { count: 39 }, required: ['count'], title: 'Summary2' })
  .openapi('Summary2')

const ThisoperationSchema = z
  .object({ id: z.string(), value: z.number() })
  .openapi({
    example: { id: 'd7d135000a8347ec8b0a0f9edceccefd', value: 100 },
    required: ['value', 'id'],
    title:
      'ThisoperationcausesthecreationofNinvoices,whereNisthenumberofinstallments.Thefirstinvoicewillhaveaduedatewith30daysandthenextinvoiceswillhaveaduedate30daysawayfrompreviousinvoice.',
  })
  .openapi('Thisoperation')

const UpdateemailanddescriptionofaaccountRequestSchema = z
  .object({ description: z.string(), email: z.string() })
  .openapi({
    example: { description: 'string', email: 'email' },
    required: ['description', 'email'],
    title: 'UpdateemailanddescriptionofaaccountRequest',
  })
  .openapi('UpdateemailanddescriptionofaaccountRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getApiCreditcontrolAccountsRoute = createRoute({
  method: 'get',
  path: '/api/creditcontrol/accounts',
  tags: ['Account'],
  summary: 'Search all accounts',
  operationId: 'Searchallaccounts',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      account: z.string(),
                      balance: z.number(),
                      creditLimit: z.number(),
                      description: z.string(),
                      document: z.string(),
                      documentType: z.string(),
                      email: z.string(),
                      lastUpdate: z.string(),
                    })
                    .openapi({
                      example: {
                        account: 'ambienteqa',
                        balance: 220,
                        creditLimit: 240,
                        description: '',
                        document: '12345677811',
                        documentType: 'CPF',
                        email: 'test@test.com',
                        lastUpdate: '2017-07-06T01:57:39.4317119Z',
                      },
                      required: [
                        'account',
                        'balance',
                        'document',
                        'documentType',
                        'creditLimit',
                        'lastUpdate',
                        'description',
                        'email',
                      ],
                      title: 'Datum2',
                    }),
                )
                .openapi({ description: '' }),
              summary: z
                .object({ count: z.int32() })
                .openapi({ example: { count: 39 }, required: ['count'], title: 'Summary2' }),
            })
            .openapi({
              example: {
                data: [
                  {
                    account: 'ambienteqa',
                    balance: 220,
                    creditLimit: 240,
                    description: '',
                    document: '12345677811',
                    documentType: 'CPF',
                    email: 'test@test.com',
                    lastUpdate: '2017-07-06T01:57:39.4317119Z',
                  },
                ],
                summary: { count: 39 },
              },
              required: ['data', 'summary'],
              title: 'Searchaccounts',
            }),
          example: {
            data: [
              {
                account: 'ambienteqa',
                balance: 220,
                creditLimit: 240,
                description: '',
                document: '12345677811',
                documentType: 'CPF',
                email: 'test@test.com',
                lastUpdate: '2017-07-06T01:57:39.4317119Z',
              },
            ],
            summary: { count: 39 },
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '225', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:36:17 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts%3Ffrom%3D9%26to%3D9',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const postApiCreditcontrolAccountsRoute = createRoute({
  method: 'post',
  path: '/api/creditcontrol/accounts',
  tags: ['Account'],
  summary: 'Open an Account',
  description: 'Open an account.',
  operationId: 'OpenanAccount',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
              creditLimit: z.string().default('500'),
              description: z.string().default('example'),
              document: z.string().default('99999999999'),
              documentType: z.string().default('CPF'),
              email: z.string().default('email@domain.com'),
              tolerance: z.string().default('1'),
            })
            .openapi({
              example: {
                creditLimit: 'number',
                description: 'description',
                document: 'number',
                documentType: 'CPF ou CNPJ ou Other',
                email: 'email',
                tolerance: '1 is 100%',
              },
              required: [
                'document',
                'documentType',
                'email',
                'creditLimit',
                'description',
                'tolerance',
              ],
              title: 'OpenanAccountRequest',
            }),
          example: {
            creditLimit: 'number',
            description: 'description',
            document: 'number',
            documentType: 'CPF ou CNPJ ou Other',
            email: 'email',
            tolerance: '1 is 100%',
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
          schema: z.string().openapi({ example: '"76655291437_CPF"' }),
          example: '"76655291437_CPF"',
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '17', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:47:35 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const putApiCreditcontrolAccountsAccountIdRoute = createRoute({
  method: 'put',
  path: '/api/creditcontrol/accounts/{accountId}',
  tags: ['Account'],
  summary: 'Open or Change Account',
  description: 'Open or Change an account.',
  operationId: 'OpenorChangeAccount',
  request: {
    params: z.object({
      accountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: 'It must be an alphanumeric value',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
              creditLimit: z
                .int()
                .default(100)
                .exactOptional()
                .openapi({
                  description:
                    "If the user don't set a credit limit, the system will define 100 for default",
                }),
              document: z.string().default('00221292404').exactOptional(),
              email: z.string().default('email@email.com'),
              id: z.string().default('teste'),
            })
            .openapi({
              example: { creditLimit: 'number', email: 'email' },
              required: ['email', 'id'],
              title: 'OpenorChangeAccountRequest',
            }),
          example: { creditLimit: 'number', email: 'email' },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string().openapi({ example: '"76655291437_CPF"' }),
          example: '"76655291437_CPF"',
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '17', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:47:35 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const getApiCreditcontrolAccountsCreditAccountIdRoute = createRoute({
  method: 'get',
  path: '/api/creditcontrol/accounts/{creditAccountId}',
  tags: ['Account'],
  summary: 'Retrieve an Account by Id',
  description: 'Retrieve an account by id.',
  operationId: 'RetrieveaAccountbyId',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
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
          schema: z
            .object({
              account: z.string(),
              balance: z.number(),
              creditLimit: z.number(),
              description: z.string(),
              email: z.string(),
              lastUpdate: z.string(),
            })
            .openapi({
              example: {
                account: 'ambienteqa',
                balance: 220,
                creditLimit: 240,
                description: '',
                email: 'test@test.com',
                lastUpdate: '2017-07-06T01:57:39.4317119Z',
              },
              required: ['account', 'balance', 'creditLimit', 'lastUpdate', 'description', 'email'],
              title: 'Getaccount',
            }),
          example: {
            account: 'ambienteqa',
            balance: 220,
            creditLimit: 240,
            description: '',
            email: 'test@test.com',
            lastUpdate: '2017-07-06T01:57:39.4317119Z',
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '145', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:28:47 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.4', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.6-stable+62', param: { required: false } }),
      }),
    },
  },
})

export const putApiCreditcontrolAccountsCreditAccountIdRoute = createRoute({
  method: 'put',
  path: '/api/creditcontrol/accounts/{creditAccountId}',
  tags: ['Account'],
  summary: 'Update email and description of a account',
  description: 'Update a checking account.',
  operationId: 'Updateemailanddescriptionofaaccount',
  request: {
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
              description: z.string().default('example'),
              email: z.string().default('email@domain.com'),
            })
            .openapi({
              example: { description: 'string', email: 'email' },
              required: ['description', 'email'],
              title: 'UpdateemailanddescriptionofaaccountRequest',
            }),
          example: { description: 'string', email: 'email' },
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
          schema: z.string().openapi({ example: '"76655291437_CPF"' }),
          example: '"76655291437_CPF"',
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '17', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:47:35 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const deleteApiCreditcontrolAccountsCreditAccountIdRoute = createRoute({
  method: 'delete',
  path: '/api/creditcontrol/accounts/{creditAccountId}',
  tags: ['Account'],
  summary: 'Close an Account',
  description: 'Closes an account.',
  operationId: 'CloseanAccount',
  request: {
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identifier",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
              document: z.string().default('99999999999').exactOptional(),
              documentType: z.string().default('CPF').exactOptional(),
              email: z.string().default('email@domain.com').exactOptional(),
            })
            .openapi({
              example: { document: 'number', documentType: 'CPF ou CNPJ ou Other', email: 'email' },
              title: 'CloseanAccountRequest',
              required: [],
            }),
          example: { document: 'number', documentType: 'CPF ou CNPJ ou Other', email: 'email' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putApiCreditcontrolAccountsCreditAccountIdCreditlimitRoute = createRoute({
  method: 'put',
  path: '/api/creditcontrol/accounts/{creditAccountId}/creditlimit',
  tags: ['Account'],
  summary: 'Change credit limit of an Account',
  description: 'Increase the credit limit of an account.',
  operationId: 'ChangecreditlimitofanAccount',
  request: {
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identifier",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ value: z.int().default(500) })
            .openapi({
              example: { value: 10000 },
              required: ['value'],
              title: 'ChangecreditlimitofanAccountRequest',
            }),
          example: { value: 10000 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.looseObject({}) } },
      headers: z.object({
        connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'content-length': z
          .string()
          .exactOptional()
          .openapi({ example: '0', param: { required: false } }),
        date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Thu, 25 Jan 2018 13:35:21 GMT', param: { required: false } }),
        server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.5', param: { required: false } }),
        via: z
          .string()
          .exactOptional()
          .openapi({ example: '1.1 localhost (squid/3.5.27)', param: { required: false } }),
        'x-cache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS from localhost', param: { required: false } }),
        'x-cache-lookup': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS from localhost:3128', param: { required: false } }),
        'x-powered-by': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-janus-router-backend-app': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.32-stable+145', param: { required: false } }),
      }),
    },
  },
})

export const postApiCreditcontrolAccountsCreditAccountIdHoldersRoute = createRoute({
  method: 'post',
  path: '/api/creditcontrol/accounts/{creditAccountId}/holders',
  tags: ['Account'],
  summary: 'Add an account Holder',
  operationId: 'AddanaccountHolder',
  request: {
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
              claims: z
                .object({ email: z.string().default('email@domain.com') })
                .openapi({
                  example: { email: 'USER-EMAIL' },
                  required: ['email'],
                  title: 'Claims',
                }),
            })
            .openapi({
              example: { claims: { email: 'USER-EMAIL' } },
              required: ['claims'],
              title: 'AddanaccountHolderRequest',
            }),
          example: { claims: { email: 'USER-EMAIL' } },
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
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      account: z.string(),
                      balance: z.number(),
                      creditLimit: z.number(),
                      description: z.string(),
                      document: z.string(),
                      documentType: z.string(),
                      email: z.string(),
                      lastUpdate: z.string(),
                    })
                    .openapi({
                      example: {
                        account: 'ambienteqa',
                        balance: 220,
                        creditLimit: 240,
                        description: '',
                        document: '12345677811',
                        documentType: 'CPF',
                        email: 'test@test.com',
                        lastUpdate: '2017-07-06T01:57:39.4317119Z',
                      },
                      required: [
                        'account',
                        'balance',
                        'document',
                        'documentType',
                        'creditLimit',
                        'lastUpdate',
                        'description',
                        'email',
                      ],
                      title: 'Datum2',
                    }),
                )
                .openapi({ description: '' }),
              summary: z
                .object({ count: z.int32() })
                .openapi({ example: { count: 39 }, required: ['count'], title: 'Summary2' }),
            })
            .openapi({
              example: {
                data: [
                  {
                    account: 'ambienteqa',
                    balance: 220,
                    creditLimit: 240,
                    description: '',
                    document: '12345677811',
                    documentType: 'CPF',
                    email: 'test@test.com',
                    lastUpdate: '2017-07-06T01:57:39.4317119Z',
                  },
                ],
                summary: { count: 39 },
              },
              required: ['data', 'summary'],
              title: 'Searchcheckingaccounts',
            }),
          example: {
            data: [
              {
                account: 'ambienteqa',
                balance: 220,
                creditLimit: 240,
                description: '',
                document: '12345677811',
                documentType: 'CPF',
                email: 'test@test.com',
                lastUpdate: '2017-07-06T01:57:39.4317119Z',
              },
            ],
            summary: { count: 39 },
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '225', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:36:17 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts%3Ffrom%3D9%26to%3D9',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const deleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdRoute = createRoute({
  method: 'delete',
  path: '/api/creditcontrol/accounts/{creditAccountId}/holders/{holderId}',
  tags: ['Account'],
  summary: 'Delete an account holder',
  operationId: 'Deleteanaccountholder',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
      holderId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'holderId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
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
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      account: z.string(),
                      balance: z.number(),
                      creditLimit: z.number(),
                      description: z.string(),
                      document: z.string(),
                      documentType: z.string(),
                      email: z.string(),
                      lastUpdate: z.string(),
                    })
                    .openapi({
                      example: {
                        account: 'ambienteqa',
                        balance: 220,
                        creditLimit: 240,
                        description: '',
                        document: '12345677811',
                        documentType: 'CPF',
                        email: 'test@test.com',
                        lastUpdate: '2017-07-06T01:57:39.4317119Z',
                      },
                      required: [
                        'account',
                        'balance',
                        'document',
                        'documentType',
                        'creditLimit',
                        'lastUpdate',
                        'description',
                        'email',
                      ],
                      title: 'Datum2',
                    }),
                )
                .openapi({ description: '' }),
              summary: z
                .object({ count: z.int32() })
                .openapi({ example: { count: 39 }, required: ['count'], title: 'Summary2' }),
            })
            .openapi({
              example: {
                data: [
                  {
                    account: 'ambienteqa',
                    balance: 220,
                    creditLimit: 240,
                    description: '',
                    document: '12345677811',
                    documentType: 'CPF',
                    email: 'test@test.com',
                    lastUpdate: '2017-07-06T01:57:39.4317119Z',
                  },
                ],
                summary: { count: 39 },
              },
              required: ['data', 'summary'],
              title: 'Searchcheckingaccounts',
            }),
          example: {
            data: [
              {
                account: 'ambienteqa',
                balance: 220,
                creditLimit: 240,
                description: '',
                document: '12345677811',
                documentType: 'CPF',
                email: 'test@test.com',
                lastUpdate: '2017-07-06T01:57:39.4317119Z',
              },
            ],
            summary: { count: 39 },
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '225', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:36:17 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts%3Ffrom%3D9%26to%3D9',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const getApiCreditcontrolAccountsCreditAccountIdInvoicesRoute = createRoute({
  method: 'get',
  path: '/api/creditcontrol/accounts/{creditAccountId}/invoices',
  tags: ['Invoices'],
  summary: 'Retrieve invoice by creditAccountId',
  description:
    "Returns associated invoices by specified creditAccountId, the param that identifies a client in VTEX's system.",
  operationId: 'SearchallinvoicesofaAccount',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
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
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      checkingAccountId: z.string(),
                      createdAt: z.string(),
                      description: z.string(),
                      dueDate: z.string(),
                      id: z.string(),
                      observation: z.string(),
                      originalDueDate: z.string(),
                      paymentLink: z.string(),
                      status: z.string(),
                      updatedAt: z.string(),
                      value: z.number(),
                    })
                    .openapi({
                      example: {
                        checkingAccountId: '12345677811_CPF',
                        createdAt: '2017-07-06T01:57:58',
                        description: 'Invoice from debit of 240.0M. Installment 1/1',
                        dueDate: '2017-08-05T01:57:58',
                        id: 'f9a056cb63f5417fb900ed5128bc1b15',
                        observation: '',
                        originalDueDate: '2017-08-05T01:57:58',
                        paymentLink: '',
                        status: 'Opened',
                        updatedAt: '2017-07-06T01:57:58',
                        value: 240,
                      },
                      required: [
                        'id',
                        'status',
                        'value',
                        'checkingAccountId',
                        'createdAt',
                        'updatedAt',
                        'paymentLink',
                        'originalDueDate',
                        'dueDate',
                        'description',
                        'observation',
                      ],
                      title: 'Datum1',
                    }),
                )
                .openapi({ description: '' }),
              summary: z
                .object({ count: z.int32(), total: z.number() })
                .openapi({
                  example: { count: 5, total: 500 },
                  required: ['total', 'count'],
                  title: 'Summary',
                }),
            })
            .openapi({
              example: {
                data: [
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:57:58',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:57:58',
                    id: 'f9a056cb63f5417fb900ed5128bc1b15',
                    observation: '',
                    originalDueDate: '2017-08-05T01:57:58',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:57:58',
                    value: 240,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:57:58',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:57:58',
                    id: 'ae45d73bfe534325bc6cfef3521d675c',
                    observation: '',
                    originalDueDate: '2017-08-05T01:57:58',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:57:58',
                    value: 240,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:45:40',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:57:58',
                    id: '8b984881a6934a06b65ab679c3b6641b',
                    observation: '',
                    originalDueDate: '2017-08-05T01:57:58',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:57:58',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:44:49',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:44:51',
                    id: 'c19d55551ac84e2d84c5b60f53c77daa',
                    observation: '',
                    originalDueDate: '2017-08-05T01:44:51',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:44:52',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:40:02',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:40:03',
                    id: 'b588919ac65a4bc58bc1b87957ca136a',
                    observation: '',
                    originalDueDate: '2017-08-05T01:40:03',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:40:03',
                    value: 240,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:39:17',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:39:19',
                    id: 'fabb9ae209cb4c50ac048ab72363d488',
                    observation: '',
                    originalDueDate: '2017-08-05T01:39:19',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:39:20',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:38:15',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:38:17',
                    id: 'bc4e409f1490495b8dc351e2f93ac766',
                    observation: '',
                    originalDueDate: '2017-08-05T01:38:17',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:38:18',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:37:35',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:37:38',
                    id: 'b23eb606d9054e29a789745c1473d123',
                    observation: '',
                    originalDueDate: '2017-08-05T01:37:38',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:37:38',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:36:25',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:36:29',
                    id: '2f67b460ca0742118d5eadd7d3752480',
                    observation: '',
                    originalDueDate: '2017-08-05T01:36:29',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:36:30',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:35:18',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:35:21',
                    id: '36102b1baec74904a80dcc6baf8dd5e7',
                    observation: '',
                    originalDueDate: '2017-08-05T01:35:21',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:35:22',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:31:31',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:31:32',
                    id: '2166d1d0b35a4ece826fac580652348b',
                    observation: '',
                    originalDueDate: '2017-08-05T01:31:32',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:31:32',
                    value: 240,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:30:18',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:30:20',
                    id: '4d7ae513368a425db3c0c567fa2e9704',
                    observation: '',
                    originalDueDate: '2017-08-05T01:30:20',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:30:21',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:29:32',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:29:34',
                    id: '98332e38da024e269670bf6a5fce24ca',
                    observation: '',
                    originalDueDate: '2017-08-05T01:29:34',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:29:35',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:28:58',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:29:00',
                    id: 'f2caa32762f14961895f93ddd1eb66cb',
                    observation: '',
                    originalDueDate: '2017-08-05T01:29:00',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:29:01',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:19:14',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:19:15',
                    id: 'c44a7c0d2d944fe1bffc59b79ffdb214',
                    observation: '',
                    originalDueDate: '2017-08-05T01:19:15',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:19:15',
                    value: 240,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:18:25',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:18:28',
                    id: 'f5c4725b549e4e77bfbf69f9ec6b5f44',
                    observation: '',
                    originalDueDate: '2017-08-05T01:18:28',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:18:29',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:17:34',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:17:37',
                    id: '76054911732743e3b011a36fdf99ac9b',
                    observation: '',
                    originalDueDate: '2017-08-05T01:17:37',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:17:38',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:16:54',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:16:57',
                    id: 'd5d5bc644d9e4068bb108bcca420343b',
                    observation: '',
                    originalDueDate: '2017-08-05T01:16:57',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:16:58',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:16:14',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:16:17',
                    id: 'c8de1d1b4f144a8bbb339f2a1c873c7e',
                    observation: '',
                    originalDueDate: '2017-08-05T01:16:17',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:16:18',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:14:40',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:14:43',
                    id: 'a84cc2c91ee048c2bcf94b3214af31b2',
                    observation: '',
                    originalDueDate: '2017-08-05T01:14:43',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:14:43',
                    value: 20,
                  },
                  {
                    checkingAccountId: '12345677811_CPF',
                    createdAt: '2017-07-06T01:13:22',
                    description: 'Invoice from debit of 240.0M. Installment 1/1',
                    dueDate: '2017-08-05T01:13:23',
                    id: '3bf5ea95cb75465e80ea8c0f16cbc4d2',
                    observation: '',
                    originalDueDate: '2017-08-05T01:13:23',
                    paymentLink: '',
                    status: 'Opened',
                    updatedAt: '2017-07-06T01:13:23',
                    value: 240,
                  },
                ],
                summary: { count: 194, total: 1740 },
              },
              required: ['data', 'summary'],
              title: 'Getinvoicesfromacheckingaccount',
            }),
          example: {
            data: [
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:57:58',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:57:58',
                id: 'f9a056cb63f5417fb900ed5128bc1b15',
                observation: '',
                originalDueDate: '2017-08-05T01:57:58',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:57:58',
                value: 240,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:57:58',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:57:58',
                id: 'ae45d73bfe534325bc6cfef3521d675c',
                observation: '',
                originalDueDate: '2017-08-05T01:57:58',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:57:58',
                value: 240,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:45:40',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:57:58',
                id: '8b984881a6934a06b65ab679c3b6641b',
                observation: '',
                originalDueDate: '2017-08-05T01:57:58',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:57:58',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:44:49',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:44:51',
                id: 'c19d55551ac84e2d84c5b60f53c77daa',
                observation: '',
                originalDueDate: '2017-08-05T01:44:51',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:44:52',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:40:02',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:40:03',
                id: 'b588919ac65a4bc58bc1b87957ca136a',
                observation: '',
                originalDueDate: '2017-08-05T01:40:03',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:40:03',
                value: 240,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:39:17',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:39:19',
                id: 'fabb9ae209cb4c50ac048ab72363d488',
                observation: '',
                originalDueDate: '2017-08-05T01:39:19',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:39:20',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:38:15',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:38:17',
                id: 'bc4e409f1490495b8dc351e2f93ac766',
                observation: '',
                originalDueDate: '2017-08-05T01:38:17',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:38:18',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:37:35',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:37:38',
                id: 'b23eb606d9054e29a789745c1473d123',
                observation: '',
                originalDueDate: '2017-08-05T01:37:38',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:37:38',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:36:25',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:36:29',
                id: '2f67b460ca0742118d5eadd7d3752480',
                observation: '',
                originalDueDate: '2017-08-05T01:36:29',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:36:30',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:35:18',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:35:21',
                id: '36102b1baec74904a80dcc6baf8dd5e7',
                observation: '',
                originalDueDate: '2017-08-05T01:35:21',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:35:22',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:31:31',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:31:32',
                id: '2166d1d0b35a4ece826fac580652348b',
                observation: '',
                originalDueDate: '2017-08-05T01:31:32',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:31:32',
                value: 240,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:30:18',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:30:20',
                id: '4d7ae513368a425db3c0c567fa2e9704',
                observation: '',
                originalDueDate: '2017-08-05T01:30:20',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:30:21',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:29:32',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:29:34',
                id: '98332e38da024e269670bf6a5fce24ca',
                observation: '',
                originalDueDate: '2017-08-05T01:29:34',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:29:35',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:28:58',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:29:00',
                id: 'f2caa32762f14961895f93ddd1eb66cb',
                observation: '',
                originalDueDate: '2017-08-05T01:29:00',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:29:01',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:19:14',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:19:15',
                id: 'c44a7c0d2d944fe1bffc59b79ffdb214',
                observation: '',
                originalDueDate: '2017-08-05T01:19:15',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:19:15',
                value: 240,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:18:25',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:18:28',
                id: 'f5c4725b549e4e77bfbf69f9ec6b5f44',
                observation: '',
                originalDueDate: '2017-08-05T01:18:28',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:18:29',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:17:34',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:17:37',
                id: '76054911732743e3b011a36fdf99ac9b',
                observation: '',
                originalDueDate: '2017-08-05T01:17:37',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:17:38',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:16:54',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:16:57',
                id: 'd5d5bc644d9e4068bb108bcca420343b',
                observation: '',
                originalDueDate: '2017-08-05T01:16:57',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:16:58',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:16:14',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:16:17',
                id: 'c8de1d1b4f144a8bbb339f2a1c873c7e',
                observation: '',
                originalDueDate: '2017-08-05T01:16:17',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:16:18',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:14:40',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:14:43',
                id: 'a84cc2c91ee048c2bcf94b3214af31b2',
                observation: '',
                originalDueDate: '2017-08-05T01:14:43',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:14:43',
                value: 20,
              },
              {
                checkingAccountId: '12345677811_CPF',
                createdAt: '2017-07-06T01:13:22',
                description: 'Invoice from debit of 240.0M. Installment 1/1',
                dueDate: '2017-08-05T01:13:23',
                id: '3bf5ea95cb75465e80ea8c0f16cbc4d2',
                observation: '',
                originalDueDate: '2017-08-05T01:13:23',
                paymentLink: '',
                status: 'Opened',
                updatedAt: '2017-07-06T01:13:23',
                value: 240,
              },
            ],
            summary: { count: 194, total: 1740 },
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'close', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:30:00 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        Vary: z
          .string()
          .exactOptional()
          .openapi({ example: 'Accept-Encoding', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.4', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.6-stable+62', param: { required: false } }),
      }),
    },
  },
})

export const getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute = createRoute({
  method: 'get',
  path: '/api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}',
  tags: ['Invoices'],
  summary: 'Retrieve Invoice by Id',
  description:
    'Returns associated data for the specified Invoice Id, like status  and value, for example.',
  operationId: 'RetrieveInvoicebyId',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
      invoiceId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
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
          schema: z
            .object({
              checkingAccountId: z.string(),
              createdAt: z.string(),
              description: z.string(),
              dueDate: z.string(),
              id: z.string(),
              observation: z.string(),
              originalDueDate: z.string(),
              paymentLink: z.string(),
              status: z.string(),
              updatedAt: z.string(),
              value: z.number(),
            })
            .openapi({
              example: {
                checkingAccountId: '76655291437_CPF',
                createdAt: '2017-07-12T08:53:04',
                description: 'Invoice issued from a API call',
                dueDate: '2017-07-27T08:53:04',
                id: '029f4009-ac4b-4739-8644-50df050f34ca',
                observation: 'Some observation about the invoice',
                originalDueDate: '2017-07-27T08:53:04',
                paymentLink: 'http://foo.bar',
                status: 'Opened',
                updatedAt: '2017-07-12T08:53:04',
                value: 50,
              },
              required: [
                'id',
                'status',
                'value',
                'checkingAccountId',
                'createdAt',
                'updatedAt',
                'paymentLink',
                'originalDueDate',
                'dueDate',
                'description',
                'observation',
              ],
              title: 'Retrievedinvoice',
            }),
          example: {
            checkingAccountId: '76655291437_CPF',
            createdAt: '2017-07-12T08:53:04',
            description: 'Invoice issued from a API call',
            dueDate: '2017-07-27T08:53:04',
            id: '029f4009-ac4b-4739-8644-50df050f34ca',
            observation: 'Some observation about the invoice',
            originalDueDate: '2017-07-27T08:53:04',
            paymentLink: 'http://foo.bar',
            status: 'Opened',
            updatedAt: '2017-07-12T08:53:04',
            value: 50,
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '383', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:53:42 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.4', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.6-stable+62', param: { required: false } }),
      }),
    },
  },
})

export const putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute = createRoute({
  method: 'put',
  path: '/api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}',
  tags: ['Invoices'],
  summary: 'Change Invoice',
  description: "Updates invoice's attributes `status`, `paymentLink` and `observation`.",
  operationId: 'ChangeInvoice',
  request: {
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
      invoiceId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      friendlyId: z
        .string()
        .default('insert identifier here')
        .exactOptional()
        .openapi({
          param: {
            description: "Invoice's identification",
            in: 'query',
            name: 'friendlyId',
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
              observation: z.string().default('example'),
              paymentLink: z.string().default('example'),
              status: z
                .string()
                .default('Paid')
                .openapi({
                  description:
                    "Invoice's status. It must be completed with &quot;Paid&quot;, &quot;Cancelled&quot; or &quot;Open&quot; value.",
                }),
            })
            .openapi({
              example: {
                observation: 'string (optional)',
                paymentLink: 'string (URL) (optional)',
                status: 'string',
              },
              required: ['status', 'observation', 'paymentLink'],
              title: 'ChangeInvoiceRequest',
            }),
          example: {
            observation: 'string (optional)',
            paymentLink: 'string (URL) (optional)',
            status: 'string',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.looseObject({}) } },
      headers: z.object({
        'Access-Control-Allow-Origin': z
          .string()
          .exactOptional()
          .openapi({ example: '*', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '0', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 21:02:41 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts%2F76655291437_CPF%2Finvoices%2F8735068e9aa042488e7cd2a0d3028ce7',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute = createRoute({
  method: 'delete',
  path: '/api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}',
  tags: ['Invoices'],
  summary: 'Cancel Invoice',
  description: "Changes invoice's status from ancells invoice by specified Id.",
  operationId: 'CancelInvoice',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
      invoiceId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.looseObject({}) } },
      headers: z.object({
        'Access-Control-Allow-Origin': z
          .string()
          .exactOptional()
          .openapi({ example: '*', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '0', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 21:06:17 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts%2F76655291437_CPF%2Finvoices%2F8735068e9aa042488e7cd2a0d3028ce7',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsRoute =
  createRoute({
    method: 'post',
    path: '/api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}/payments',
    tags: ['Invoices'],
    summary: 'Mark an invoice as Paid',
    description: 'Pay an invoice.',
    operationId: 'MarkaninvoiceasPaid',
    request: {
      params: z.object({
        creditAccountId: z
          .string()
          .default('isert indentifier here')
          .openapi({
            param: {
              description: "Credit account's identification",
              in: 'path',
              name: 'creditAccountId',
              required: true,
              schema: { default: 'isert indentifier here', type: 'string' },
              style: 'simple',
            },
          }),
        invoiceId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'invoiceId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'Content-Type': z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({ value: z.string().default('example') })
              .openapi({
                example: { value: 'number (FULL invoice value [deprecated])' },
                required: ['value'],
                title: 'MarkaninvoiceasPaidRequest',
              }),
            example: { value: 'number (FULL invoice value [deprecated])' },
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
            schema: z.string().openapi({ example: '"029f4009-ac4b-4739-8644-50df050f34ca"' }),
            example: '"029f4009-ac4b-4739-8644-50df050f34ca"',
          },
        },
        headers: z.object({
          'Access-Control-Allow-Origin': z
            .string()
            .exactOptional()
            .openapi({ example: '*', param: { required: false } }),
          Connection: z
            .string()
            .exactOptional()
            .openapi({ example: 'keep-alive', param: { required: false } }),
          'Content-Length': z
            .string()
            .exactOptional()
            .openapi({ example: '38', param: { required: false } }),
          Date: z
            .string()
            .exactOptional()
            .openapi({ example: 'Wed, 12 Jul 2017 20:58:28 GMT', param: { required: false } }),
          Server: z
            .string()
            .exactOptional()
            .openapi({ example: 'nginx', param: { required: false } }),
          'X-CDNIgnore': z
            .string()
            .exactOptional()
            .openapi({ example: '1', param: { required: false } }),
          'X-Powered-by-VTEX-Janus-Edge': z
            .string()
            .exactOptional()
            .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
          'X-Track': z
            .string()
            .exactOptional()
            .openapi({ example: 'beta', param: { required: false } }),
          'X-Translate': z
            .string()
            .exactOptional()
            .openapi({ example: '1', param: { required: false } }),
          'X-Translate-BackEnd': z
            .string()
            .exactOptional()
            .openapi({
              example:
                'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts%2F76655291437_CPF%2Finvoices%2F029f4009-ac4b-4739-8644-50df050f34ca%2Fpayments',
              param: { required: false },
            }),
          'X-VTEX-Janus-Router-Backend-App': z
            .string()
            .exactOptional()
            .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
        }),
      },
    },
  })

export const putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementRoute =
  createRoute({
    method: 'put',
    path: '/api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}/postponement',
    tags: ['Invoices'],
    summary: 'Postpone an invoice',
    description: 'Postpone an invoice.',
    operationId: 'Postponeaninvoice',
    request: {
      params: z.object({
        creditAccountId: z
          .string()
          .openapi({
            param: {
              description: "Credit account's identification",
              in: 'path',
              name: 'creditAccountId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        invoiceId: z
          .string()
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'invoiceId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'Content-Type': z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({ dueDays: z.string() })
              .openapi({
                example: { dueDays: 'number (integer)' },
                required: ['dueDays'],
                title: 'PostponeaninvoiceRequest',
              }),
            example: { dueDays: 'number (integer)' },
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: '',
        content: { 'text/plain': { schema: z.looseObject({}) } },
        headers: z.object({
          'Access-Control-Allow-Origin': z
            .string()
            .exactOptional()
            .openapi({ example: '*', param: { required: false } }),
          Connection: z
            .string()
            .exactOptional()
            .openapi({ example: 'keep-alive', param: { required: false } }),
          'Content-Length': z
            .string()
            .exactOptional()
            .openapi({ example: '0', param: { required: false } }),
          Date: z
            .string()
            .exactOptional()
            .openapi({ example: 'Wed, 12 Jul 2017 21:04:01 GMT', param: { required: false } }),
          Server: z
            .string()
            .exactOptional()
            .openapi({ example: 'nginx', param: { required: false } }),
          'X-CDNIgnore': z
            .string()
            .exactOptional()
            .openapi({ example: '1', param: { required: false } }),
          'X-Powered-by-VTEX-Janus-Edge': z
            .string()
            .exactOptional()
            .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
          'X-Track': z
            .string()
            .exactOptional()
            .openapi({ example: 'beta', param: { required: false } }),
          'X-Translate': z
            .string()
            .exactOptional()
            .openapi({ example: '1', param: { required: false } }),
          'X-Translate-BackEnd': z
            .string()
            .exactOptional()
            .openapi({
              example:
                'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts%2F76655291437_CPF%2Finvoices%2F8735068e9aa042488e7cd2a0d3028ce7%2Fpostponement',
              param: { required: false },
            }),
          'X-VTEX-Janus-Router-Backend-App': z
            .string()
            .exactOptional()
            .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
        }),
      },
    },
  })

export const getApiCreditcontrolAccountsCreditAccountIdStatementsRoute = createRoute({
  method: 'get',
  path: '/api/creditcontrol/accounts/{creditAccountId}/statements',
  tags: ['Account'],
  summary: 'Account statements',
  description: 'Get the account statements.',
  operationId: 'Accountstatements',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
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
          schema: z
            .object({
              currentBalance: z.number(),
              intervalBalance: z.number(),
              previousBalance: z.number(),
              statements: z
                .array(
                  z
                    .object({ date: z.string(), description: z.string(), value: z.number() })
                    .openapi({
                      example: {
                        date: '2017-07-03T16:47:19.4578611Z',
                        description: 'Credited',
                        value: 10000,
                      },
                      required: ['value', 'date', 'description'],
                      title: 'Statements1',
                    }),
                )
                .openapi({ description: '' }),
            })
            .openapi({
              example: {
                currentBalance: 0,
                intervalBalance: 0,
                previousBalance: 0,
                statements: [
                  { date: '2017-07-03T16:47:19.4578611Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:47:19.6678789Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:47:20.118935Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:47:20.4899776Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:52:00.9443838Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:52:01.2514187Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:52:01.671466Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:52:01.9424961Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:54:40.0782046Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:54:40.3252276Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:54:40.6552638Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:54:40.8932962Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:55:57.197841Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:55:57.5278732Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:55:57.9019147Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:55:58.1179392Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:57:11.8426054Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:57:13.8889672Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:57:16.5197295Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:57:18.3509528Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:57:18.7869726Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:57:19.0240035Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T16:57:19.3770378Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T16:57:19.7050818Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T17:07:15.8348399Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T17:07:16.1788809Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T17:07:16.5469147Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T17:07:16.7959479Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T17:09:33.0252059Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T17:09:33.5372179Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T17:09:34.1453238Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T17:09:34.468359Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T17:09:53.1504362Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T17:09:55.3629113Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T17:09:58.6401036Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T17:10:00.782546Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T18:49:22.3349339Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T18:49:22.6879717Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T18:49:23.0600071Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T18:49:23.3570469Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T18:57:01.460345Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T18:57:02.2444344Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T18:57:02.6094762Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T18:57:03.0085156Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T19:01:09.3831094Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T19:01:09.7391531Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T19:01:10.3811954Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T19:01:13.7475991Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T20:48:39.1243969Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T20:48:39.6534554Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T20:48:39.976498Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T20:48:40.2195183Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T21:43:36.8709735Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T21:43:39.3015912Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T21:43:42.4497005Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T21:43:45.0294261Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T21:52:42.0202602Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T21:52:44.2187306Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T21:52:47.6370182Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T21:52:49.6223473Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T22:00:43.7004457Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T22:00:45.8558835Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T22:00:48.8719015Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T22:00:50.9332797Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T22:06:14.2397182Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T22:06:14.8247757Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T22:06:15.3018042Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T22:06:15.5878612Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T22:13:11.2934159Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T22:13:11.6004563Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T22:13:13.677688Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T22:13:13.9407125Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T22:24:18.0640865Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T22:24:18.3391219Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-03T22:24:18.7501665Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-03T22:24:19.0612052Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T13:35:32.4265204Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T13:35:32.670556Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T13:35:33.0035923Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T13:35:33.2296111Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T13:43:18.0936755Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T13:43:18.5677311Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T13:43:19.0377821Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T13:43:19.3078114Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T13:46:24.2995291Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T13:46:24.5415575Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T13:46:25.1666258Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T13:46:25.3926527Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T15:10:11.6542275Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T15:10:25.101228Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T15:10:46.4925416Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T15:10:53.5622728Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T16:47:02.1152214Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T16:47:02.4332644Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T16:47:02.9263133Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T16:47:03.2213519Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T18:15:05.4888997Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T18:15:06.0669661Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T18:15:06.6290272Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T18:15:07.0140703Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T18:29:04.8128943Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T18:29:05.1829369Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-04T18:29:05.7749947Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-04T18:29:06.0640335Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T17:15:29.5981555Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T17:15:29.8481897Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T17:15:30.2942391Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T17:15:30.5592684Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T17:44:37.2988823Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T17:44:37.851942Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T17:44:38.3920041Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T17:44:38.7030381Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T20:09:37.3571808Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T20:09:37.72222Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T20:09:38.0552519Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T20:09:38.2922837Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T20:20:18.4320323Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T20:20:21.3519865Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T20:20:24.16387Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T20:20:25.8389893Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T20:22:52.2991989Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T20:22:52.5682339Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T20:22:53.0962861Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T20:22:53.6013417Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T20:24:44.309999Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T20:24:46.5064706Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T20:24:49.6956032Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T20:24:51.4547805Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  {
                    date: '2017-07-05T21:14:17.4331001Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-05T21:14:30.1921448Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-05T22:20:16.0386883Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-05T22:20:25.5770708Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  { date: '2017-07-05T23:59:03.2527657Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T23:59:08.3266609Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-05T23:59:16.9109105Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-05T23:59:22.5296797Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T01:57:44.2482508Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T01:57:44.5012788Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T01:57:45.2343532Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T01:57:45.5723968Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T14:22:00.5618842Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T14:22:05.5812446Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T14:22:13.7547136Z', description: 'Credited', value: 10000 },
                  { date: '2017-07-06T14:22:16.3029568Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T14:22:17.7061162Z',
                    description: 'Credits emptied',
                    value: -20000,
                  },
                  { date: '2017-07-06T14:22:20.5444338Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T14:22:21.0144862Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T14:32:59.6762693Z', description: 'Credited', value: 10000 },
                  { date: '2017-07-06T14:33:07.7819136Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T14:33:08.2790261Z',
                    description: 'Credits emptied',
                    value: -20000,
                  },
                  {
                    date: '2017-07-06T14:33:08.3789839Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  { date: '2017-07-06T14:33:09.0970636Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T14:33:09.5591087Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T14:33:20.0709176Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T14:33:27.9481914Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T14:39:44.5993553Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T14:39:44.8493768Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T14:39:45.4174464Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T14:39:45.8154911Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T18:02:28.6075704Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T18:02:28.9126055Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T18:02:29.361656Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T18:02:29.6296853Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T18:14:48.6134384Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T18:14:48.937473Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T18:14:51.6977841Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T18:14:52.0238222Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T18:58:40.45117Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T18:58:40.7472093Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T18:58:41.1442492Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T18:58:41.7183119Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T20:10:20.391709Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T20:10:20.6657389Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T20:10:21.3558225Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T20:10:21.6258492Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T20:11:48.5505811Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T20:11:49.0886414Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-06T20:11:49.797721Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-06T20:11:50.1477661Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-07T02:33:28.0860427Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-07T02:33:28.4040771Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-07T02:33:28.9461381Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-07T02:33:29.3731885Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-07T03:19:29.0522439Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-07T03:19:29.3802781Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-07T03:19:29.8033262Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-07T03:19:30.1083606Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-09T16:38:32.0646398Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-09T16:38:38.5399737Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-09T16:38:52.0400096Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-09T16:38:59.0326902Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-09T16:46:39.5442819Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-09T16:46:39.8743121Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-09T16:46:40.8354262Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-09T16:46:41.1404609Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-09T16:53:23.68054Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-09T16:53:23.9735672Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-09T16:53:24.4196165Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-09T16:53:24.7606614Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-09T17:02:28.3755391Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-09T17:02:28.7075311Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-09T17:02:30.9268213Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-09T17:02:31.4268761Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T15:31:13.8141713Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T15:31:14.1722149Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T15:31:14.7582781Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T15:31:15.008306Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T15:36:12.620413Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T15:36:15.3802583Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T15:36:20.0483828Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T15:36:22.3108969Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T15:39:13.5468917Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T15:39:14.0169506Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T15:39:14.4700013Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T15:39:14.7320264Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T15:48:49.3203773Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T15:48:49.6554153Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T15:48:50.2114767Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T15:48:50.5725163Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T16:01:48.7536577Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T16:01:49.0086875Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T16:01:49.3867329Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T16:01:49.720771Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T16:21:56.4849081Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T16:21:56.7768944Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T16:21:57.420015Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T16:21:57.7600564Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T18:44:22.3239425Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T18:44:22.6069739Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T18:44:23.0380212Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T18:44:23.7830985Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T18:46:15.7306413Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T18:46:16.0676798Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-10T18:46:16.7557547Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-10T18:46:17.0717915Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  {
                    date: '2017-07-10T20:46:09.0601995Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-10T20:46:09.7432736Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-10T20:59:50.5891534Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-10T20:59:51.1332589Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-10T21:50:23.5218551Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-10T21:50:24.1779278Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T14:33:29.5236904Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T14:33:30.0347475Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T16:09:06.1221118Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T16:09:06.6011653Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  { date: '2017-07-11T16:11:55.696109Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T16:11:56.2121659Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T16:11:56.8692618Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T16:11:57.1562724Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  {
                    date: '2017-07-11T16:19:51.1613469Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T16:19:51.5924019Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T17:08:27.2440987Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T17:31:27.2874184Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  { date: '2017-07-11T17:38:25.7778188Z', description: 'Credited', value: 1 },
                  {
                    date: '2017-07-11T17:38:47.9508788Z',
                    description: 'Decrease credits',
                    value: -1,
                  },
                  { date: '2017-07-11T17:40:23.1954791Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T17:42:40.0572365Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  {
                    date: '2017-07-11T17:44:01.6719325Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T17:45:45.1352607Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  {
                    date: '2017-07-11T17:46:26.9859192Z',
                    description: 'Credits emptied',
                    value: 0,
                  },
                  { date: '2017-07-11T17:52:50.7294541Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T17:52:55.3262378Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T18:01:50.9566941Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T18:01:51.27073Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T18:01:51.8287917Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T18:01:52.13982Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T18:23:21.8592583Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T18:23:22.202299Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T18:23:22.6883482Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T18:23:23.0293898Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T20:39:37.8348611Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T20:39:38.2699106Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T20:39:38.7839661Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T20:39:39.1620082Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T20:53:39.9211228Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T20:53:40.8032621Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T20:53:41.3593193Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T20:53:41.7023675Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T21:49:07.6918338Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T21:49:08.0898827Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T21:49:09.7340616Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T21:49:10.298129Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T22:13:29.121493Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T22:13:29.7035615Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-11T22:13:31.0747185Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-11T22:13:31.3367462Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-12T15:19:01.7803787Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-12T15:19:02.2223874Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                  { date: '2017-07-12T15:19:02.7854971Z', description: 'Credited', value: 10000 },
                  {
                    date: '2017-07-12T15:19:03.3115534Z',
                    description: 'Credits emptied',
                    value: -10000,
                  },
                ],
              },
              required: ['statements', 'currentBalance', 'intervalBalance', 'previousBalance'],
              title: 'Statements',
            }),
          example: {
            currentBalance: 0,
            intervalBalance: 0,
            previousBalance: 0,
            statements: [
              { date: '2017-07-03T16:47:19.4578611Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:47:19.6678789Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:47:20.118935Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:47:20.4899776Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:52:00.9443838Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:52:01.2514187Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:52:01.671466Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:52:01.9424961Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:54:40.0782046Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:54:40.3252276Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:54:40.6552638Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:54:40.8932962Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:55:57.197841Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:55:57.5278732Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:55:57.9019147Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:55:58.1179392Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:57:11.8426054Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:57:13.8889672Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:57:16.5197295Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:57:18.3509528Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:57:18.7869726Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:57:19.0240035Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T16:57:19.3770378Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T16:57:19.7050818Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T17:07:15.8348399Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T17:07:16.1788809Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T17:07:16.5469147Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T17:07:16.7959479Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T17:09:33.0252059Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T17:09:33.5372179Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T17:09:34.1453238Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T17:09:34.468359Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T17:09:53.1504362Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T17:09:55.3629113Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T17:09:58.6401036Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T17:10:00.782546Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T18:49:22.3349339Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T18:49:22.6879717Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T18:49:23.0600071Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T18:49:23.3570469Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T18:57:01.460345Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T18:57:02.2444344Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T18:57:02.6094762Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T18:57:03.0085156Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T19:01:09.3831094Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T19:01:09.7391531Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T19:01:10.3811954Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T19:01:13.7475991Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T20:48:39.1243969Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T20:48:39.6534554Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T20:48:39.976498Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T20:48:40.2195183Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T21:43:36.8709735Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T21:43:39.3015912Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T21:43:42.4497005Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T21:43:45.0294261Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T21:52:42.0202602Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T21:52:44.2187306Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T21:52:47.6370182Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T21:52:49.6223473Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T22:00:43.7004457Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T22:00:45.8558835Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T22:00:48.8719015Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T22:00:50.9332797Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T22:06:14.2397182Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T22:06:14.8247757Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T22:06:15.3018042Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T22:06:15.5878612Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T22:13:11.2934159Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T22:13:11.6004563Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T22:13:13.677688Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T22:13:13.9407125Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T22:24:18.0640865Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T22:24:18.3391219Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-03T22:24:18.7501665Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-03T22:24:19.0612052Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T13:35:32.4265204Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T13:35:32.670556Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T13:35:33.0035923Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T13:35:33.2296111Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T13:43:18.0936755Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T13:43:18.5677311Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T13:43:19.0377821Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T13:43:19.3078114Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T13:46:24.2995291Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T13:46:24.5415575Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T13:46:25.1666258Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T13:46:25.3926527Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T15:10:11.6542275Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T15:10:25.101228Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T15:10:46.4925416Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T15:10:53.5622728Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T16:47:02.1152214Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T16:47:02.4332644Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T16:47:02.9263133Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T16:47:03.2213519Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T18:15:05.4888997Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T18:15:06.0669661Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T18:15:06.6290272Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T18:15:07.0140703Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T18:29:04.8128943Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T18:29:05.1829369Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-04T18:29:05.7749947Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-04T18:29:06.0640335Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T17:15:29.5981555Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T17:15:29.8481897Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T17:15:30.2942391Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T17:15:30.5592684Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T17:44:37.2988823Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T17:44:37.851942Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T17:44:38.3920041Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T17:44:38.7030381Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T20:09:37.3571808Z', description: 'Credited', value: 10000 },
              { date: '2017-07-05T20:09:37.72222Z', description: 'Credits emptied', value: -10000 },
              { date: '2017-07-05T20:09:38.0552519Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T20:09:38.2922837Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T20:20:18.4320323Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T20:20:21.3519865Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T20:20:24.16387Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T20:20:25.8389893Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T20:22:52.2991989Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T20:22:52.5682339Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T20:22:53.0962861Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T20:22:53.6013417Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T20:24:44.309999Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T20:24:46.5064706Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T20:24:49.6956032Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T20:24:51.4547805Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T21:14:17.4331001Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-05T21:14:30.1921448Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-05T22:20:16.0386883Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-05T22:20:25.5770708Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-05T23:59:03.2527657Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T23:59:08.3266609Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-05T23:59:16.9109105Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-05T23:59:22.5296797Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T01:57:44.2482508Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T01:57:44.5012788Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T01:57:45.2343532Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T01:57:45.5723968Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T14:22:00.5618842Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T14:22:05.5812446Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T14:22:13.7547136Z', description: 'Credited', value: 10000 },
              { date: '2017-07-06T14:22:16.3029568Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T14:22:17.7061162Z',
                description: 'Credits emptied',
                value: -20000,
              },
              { date: '2017-07-06T14:22:20.5444338Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T14:22:21.0144862Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T14:32:59.6762693Z', description: 'Credited', value: 10000 },
              { date: '2017-07-06T14:33:07.7819136Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T14:33:08.2790261Z',
                description: 'Credits emptied',
                value: -20000,
              },
              { date: '2017-07-06T14:33:08.3789839Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-06T14:33:09.0970636Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T14:33:09.5591087Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T14:33:20.0709176Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T14:33:27.9481914Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T14:39:44.5993553Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T14:39:44.8493768Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T14:39:45.4174464Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T14:39:45.8154911Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T18:02:28.6075704Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T18:02:28.9126055Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T18:02:29.361656Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T18:02:29.6296853Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T18:14:48.6134384Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T18:14:48.937473Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T18:14:51.6977841Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T18:14:52.0238222Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T18:58:40.45117Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T18:58:40.7472093Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T18:58:41.1442492Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T18:58:41.7183119Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T20:10:20.391709Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T20:10:20.6657389Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T20:10:21.3558225Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T20:10:21.6258492Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T20:11:48.5505811Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T20:11:49.0886414Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-06T20:11:49.797721Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-06T20:11:50.1477661Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-07T02:33:28.0860427Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-07T02:33:28.4040771Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-07T02:33:28.9461381Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-07T02:33:29.3731885Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-07T03:19:29.0522439Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-07T03:19:29.3802781Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-07T03:19:29.8033262Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-07T03:19:30.1083606Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-09T16:38:32.0646398Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-09T16:38:38.5399737Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-09T16:38:52.0400096Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-09T16:38:59.0326902Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-09T16:46:39.5442819Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-09T16:46:39.8743121Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-09T16:46:40.8354262Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-09T16:46:41.1404609Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-09T16:53:23.68054Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-09T16:53:23.9735672Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-09T16:53:24.4196165Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-09T16:53:24.7606614Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-09T17:02:28.3755391Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-09T17:02:28.7075311Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-09T17:02:30.9268213Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-09T17:02:31.4268761Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T15:31:13.8141713Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T15:31:14.1722149Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T15:31:14.7582781Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T15:31:15.008306Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T15:36:12.620413Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T15:36:15.3802583Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T15:36:20.0483828Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T15:36:22.3108969Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T15:39:13.5468917Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T15:39:14.0169506Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T15:39:14.4700013Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T15:39:14.7320264Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T15:48:49.3203773Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T15:48:49.6554153Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T15:48:50.2114767Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T15:48:50.5725163Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T16:01:48.7536577Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T16:01:49.0086875Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T16:01:49.3867329Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T16:01:49.720771Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T16:21:56.4849081Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T16:21:56.7768944Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T16:21:57.420015Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T16:21:57.7600564Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T18:44:22.3239425Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T18:44:22.6069739Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T18:44:23.0380212Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T18:44:23.7830985Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T18:46:15.7306413Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T18:46:16.0676798Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T18:46:16.7557547Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-10T18:46:17.0717915Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-10T20:46:09.0601995Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-10T20:46:09.7432736Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-10T20:59:50.5891534Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-10T20:59:51.1332589Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-10T21:50:23.5218551Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-10T21:50:24.1779278Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T14:33:29.5236904Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T14:33:30.0347475Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T16:09:06.1221118Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T16:09:06.6011653Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T16:11:55.696109Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T16:11:56.2121659Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T16:11:56.8692618Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T16:11:57.1562724Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T16:19:51.1613469Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T16:19:51.5924019Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T17:08:27.2440987Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T17:31:27.2874184Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T17:38:25.7778188Z', description: 'Credited', value: 1 },
              { date: '2017-07-11T17:38:47.9508788Z', description: 'Decrease credits', value: -1 },
              { date: '2017-07-11T17:40:23.1954791Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T17:42:40.0572365Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T17:44:01.6719325Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T17:45:45.1352607Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T17:46:26.9859192Z', description: 'Credits emptied', value: 0 },
              { date: '2017-07-11T17:52:50.7294541Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T17:52:55.3262378Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T18:01:50.9566941Z', description: 'Credited', value: 10000 },
              { date: '2017-07-11T18:01:51.27073Z', description: 'Credits emptied', value: -10000 },
              { date: '2017-07-11T18:01:51.8287917Z', description: 'Credited', value: 10000 },
              { date: '2017-07-11T18:01:52.13982Z', description: 'Credits emptied', value: -10000 },
              { date: '2017-07-11T18:23:21.8592583Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T18:23:22.202299Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T18:23:22.6883482Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T18:23:23.0293898Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T20:39:37.8348611Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T20:39:38.2699106Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T20:39:38.7839661Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T20:39:39.1620082Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T20:53:39.9211228Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T20:53:40.8032621Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T20:53:41.3593193Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T20:53:41.7023675Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T21:49:07.6918338Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T21:49:08.0898827Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T21:49:09.7340616Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T21:49:10.298129Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T22:13:29.121493Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T22:13:29.7035615Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-11T22:13:31.0747185Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-11T22:13:31.3367462Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-12T15:19:01.7803787Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-12T15:19:02.2223874Z',
                description: 'Credits emptied',
                value: -10000,
              },
              { date: '2017-07-12T15:19:02.7854971Z', description: 'Credited', value: 10000 },
              {
                date: '2017-07-12T15:19:03.3115534Z',
                description: 'Credits emptied',
                value: -10000,
              },
            ],
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'close', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:44:51 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        Vary: z
          .string()
          .exactOptional()
          .openapi({ example: 'Accept-Encoding', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fcheckingaccounts%2F1234567890_CPF%2Fstatements',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const putApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdRoute = createRoute({
  method: 'put',
  path: '/api/creditcontrol/accounts/{creditAccountId}/statements/{statementId}',
  tags: ['Account'],
  summary: 'Decrease balance of an account',
  description: 'Create a debit value updating the account BALANCE.',
  operationId: 'Decreasebalanceofanaccount',
  request: {
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert example here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert example here', type: 'string' },
            style: 'simple',
          },
        }),
      statementId: z
        .string()
        .default('insert example here')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'statementId',
            required: true,
            schema: { default: 'insert example here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ value: z.string().default('-490.0') })
            .openapi({
              example: { value: '-number' },
              required: ['value'],
              title: 'DecreasebalanceofanaccountRequest',
            }),
          example: { value: '-number' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putApiCreditcontrolAccountsCreditAccountIdToleranceRoute = createRoute({
  method: 'put',
  path: '/api/creditcontrol/accounts/{creditAccountId}/tolerance',
  tags: ['Account'],
  summary: 'Change tolerance of an account',
  description: 'Increase the credit limit of a checking account.',
  operationId: 'Changetoleranceofanaccount',
  request: {
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ value: z.number().default(0.2) })
            .openapi({
              example: { value: 0.2 },
              required: ['value'],
              title: 'ChangetoleranceofanaccountRequest',
            }),
          example: { value: 0.2 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.looseObject({}) } },
      headers: z.object({
        connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'content-length': z
          .string()
          .exactOptional()
          .openapi({ example: '0', param: { required: false } }),
        date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Thu, 25 Jan 2018 13:35:21 GMT', param: { required: false } }),
        server: z
          .string()
          .exactOptional()
          .openapi({ example: 'Microsoft-IIS/8.5', param: { required: false } }),
        via: z
          .string()
          .exactOptional()
          .openapi({ example: '1.1 localhost (squid/3.5.27)', param: { required: false } }),
        'x-cache': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS from localhost', param: { required: false } }),
        'x-cache-lookup': z
          .string()
          .exactOptional()
          .openapi({ example: 'MISS from localhost:3128', param: { required: false } }),
        'x-powered-by': z
          .string()
          .exactOptional()
          .openapi({ example: 'ASP.NET', param: { required: false } }),
        'x-vtex-janus-router-backend-app': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.32-stable+145', param: { required: false } }),
      }),
    },
  },
})

export const postApiCreditcontrolAccountsCreditAccountIdTransactionRoute = createRoute({
  method: 'post',
  path: '/api/creditcontrol/accounts/{creditAccountId}/transaction',
  tags: ['Account'],
  summary: 'Create a Pre Authorization',
  operationId: 'CreateaPreAuthorization',
  request: {
    params: z.object({
      creditAccountId: z
        .string()
        .default('insert identifier here')
        .openapi({
          param: {
            description: "Credit account's identification",
            in: 'path',
            name: 'creditAccountId',
            required: true,
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
              expirationDate: z
                .string()
                .default('1')
                .openapi({
                  description: 'date in ISO8601 (UTC) dateformat (optional default is 1(one) day)',
                }),
              installments: z.string().default('1'),
              settle: z.boolean().default(false),
              value: z.string().default('490.0'),
            })
            .openapi({
              example: {
                expirationDate: 'date in ISO8601 (UTC) dateformat (optional default is 1(one) day)',
                installments: 'integer (optional default is 1)',
                settle: false,
                value: 'decimal (required)',
              },
              required: ['value', 'settle', 'installments', 'expirationDate'],
              title: 'CreateaPreAuthorizationRequest',
            }),
          example: {
            expirationDate: 'date in ISO8601 (UTC) dateformat (optional default is 1(one) day)',
            installments: 'integer (optional default is 1)',
            settle: false,
            value: 'decimal (required)',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute = createRoute(
  {
    method: 'put',
    path: '/api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}',
    tags: ['Account'],
    summary: 'Create a Pre Authorization (using id)',
    operationId: 'CreateaPreAuthorization(usingid)',
    request: {
      params: z.object({
        creditAccountId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Credit account's identification",
              in: 'path',
              name: 'creditAccountId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        transactionId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'transactionId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'Content-Type': z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
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
                expirationDate: z
                  .string()
                  .default('1')
                  .openapi({
                    description:
                      'date in ISO8601 (UTC) dateformat (optional default is 1(one) day)',
                  }),
                installments: z.string().default('1'),
                settle: z.boolean().default(false),
                value: z.string().default('20.0'),
              })
              .openapi({
                example: {
                  expirationDate:
                    'date in ISO8601 (UTC) dateformat (optional default is 1(one) day)',
                  installments: 'integer (optional default is 1)',
                  settle: false,
                  value: 'decimal (required)',
                },
                required: ['value', 'settle', 'installments', 'expirationDate'],
                title: '',
              }),
            example: {
              expirationDate: 'date in ISO8601 (UTC) dateformat (optional default is 1(one) day)',
              installments: 'integer (optional default is 1)',
              settle: false,
              value: 'decimal (required)',
            },
          },
        },
        required: true,
      },
    },
    responses: { 200: { description: '', headers: z.object({}) } },
  },
)

export const deleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute =
  createRoute({
    method: 'delete',
    path: '/api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}',
    tags: ['Account'],
    summary: 'Cancel a Pre Authorization',
    operationId: 'CancelaPreAuthorization',
    request: {
      headers: z.object({
        'Content-Type': z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      params: z.object({
        creditAccountId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Credit account's identification",
              in: 'path',
              name: 'creditAccountId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        transactionId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'transactionId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: { 200: { description: '', headers: z.object({}) } },
  })

export const postApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsRoute =
  createRoute({
    method: 'post',
    path: '/api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}/refunds',
    tags: ['Account'],
    summary: 'Partial or Total Refund a Settlement',
    description: 'Refund a value from a already settled transaction.',
    operationId: 'PartialorTotalRefundaSettlement',
    request: {
      params: z.object({
        creditAccountId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Credit account's identification",
              in: 'path',
              name: 'creditAccountId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        transactionId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'transactionId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'Content-Type': z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({ value: z.string().default('20') })
              .openapi({
                example: { value: 'decimal (required)' },
                required: ['value'],
                title: 'PartialorTotalRefundaSettlementRequest',
              }),
            example: { value: 'decimal (required)' },
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({ id: z.string(), value: z.number() })
              .openapi({
                example: { id: 'd7d135000a8347ec8b0a0f9edceccefd', value: 100 },
                required: ['value', 'id'],
                title:
                  'ThisoperationcausesthecreationofNinvoices,whereNisthenumberofinstallments.Thefirstinvoicewillhaveaduedatewith30daysandthenextinvoiceswillhaveaduedate30daysawayfrompreviousinvoice.',
              }),
            example: { id: 'd7d135000a8347ec8b0a0f9edceccefd', value: 100 },
          },
        },
        headers: z.object({
          connection: z
            .string()
            .exactOptional()
            .openapi({ example: 'keep-alive', param: { required: false } }),
          'content-length': z
            .string()
            .exactOptional()
            .openapi({ example: '55', param: { required: false } }),
          'content-type': z
            .string()
            .exactOptional()
            .openapi({ example: 'application/json; charset=utf-8', param: { required: false } }),
          date: z
            .string()
            .exactOptional()
            .openapi({ example: 'Thu, 29 Mar 2018 15:56:55 GMT', param: { required: false } }),
          server: z
            .string()
            .exactOptional()
            .openapi({ example: 'Microsoft-IIS/8.5', param: { required: false } }),
          'x-powered-by': z
            .string()
            .exactOptional()
            .openapi({ example: 'ASP.NET', param: { required: false } }),
          'x-vtex-janus-router-backend-app': z
            .string()
            .exactOptional()
            .openapi({ example: 'cc-v0.1.37-beta.1+166', param: { required: false } }),
        }),
      },
    },
  })

export const putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementRoute =
  createRoute({
    method: 'put',
    path: '/api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}/settlement',
    tags: ['Account'],
    summary: 'Create or Update Settlement',
    description: 'Debit a value from checking account.',
    operationId: 'CreateorUpdateSettlement',
    request: {
      params: z.object({
        creditAccountId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: "Credit account's identification",
              in: 'path',
              name: 'creditAccountId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
        transactionId: z
          .string()
          .default('insert identifier here')
          .openapi({
            param: {
              description: '',
              in: 'path',
              name: 'transactionId',
              required: true,
              schema: { default: 'insert identifier here', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      headers: z.object({
        Accept: z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Accept',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
        'Content-Type': z
          .string()
          .default('application/json')
          .openapi({
            param: {
              description:
                'The Media type of the body of the request. Default value for payment provider protocol is application/json',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { default: 'application/json', type: 'string' },
              style: 'simple',
            },
          }),
      }),
      body: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({ value: z.string().default('490.0') })
              .openapi({
                example: { value: 'decimal (required)' },
                required: ['value'],
                title: 'CreateorUpdateSettlementRequest',
              }),
            example: { value: 'decimal (required)' },
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({ id: z.string(), value: z.number() })
              .openapi({
                example: { id: 'd7d135000a8347ec8b0a0f9edceccefd', value: 100 },
                required: ['value', 'id'],
                title:
                  'ThisoperationcausesthecreationofNinvoices,whereNisthenumberofinstallments.Thefirstinvoicewillhaveaduedatewith30daysandthenextinvoiceswillhaveaduedate30daysawayfrompreviousinvoice.',
              }),
            example: { id: 'd7d135000a8347ec8b0a0f9edceccefd', value: 100 },
          },
        },
        headers: z.object({
          connection: z
            .string()
            .exactOptional()
            .openapi({ example: 'keep-alive', param: { required: false } }),
          'content-length': z
            .string()
            .exactOptional()
            .openapi({ example: '55', param: { required: false } }),
          'content-type': z
            .string()
            .exactOptional()
            .openapi({ example: 'application/json; charset=utf-8', param: { required: false } }),
          date: z
            .string()
            .exactOptional()
            .openapi({ example: 'Thu, 29 Mar 2018 15:56:55 GMT', param: { required: false } }),
          server: z
            .string()
            .exactOptional()
            .openapi({ example: 'Microsoft-IIS/8.5', param: { required: false } }),
          'x-powered-by': z
            .string()
            .exactOptional()
            .openapi({ example: 'ASP.NET', param: { required: false } }),
          'x-vtex-janus-router-backend-app': z
            .string()
            .exactOptional()
            .openapi({ example: 'cc-v0.1.37-beta.1+166', param: { required: false } }),
        }),
      },
    },
  })

export const getApiCreditcontrolInvoicesRoute = createRoute({
  method: 'get',
  path: '/api/creditcontrol/invoices',
  tags: ['Invoices'],
  summary: 'Search all invoices',
  description: 'Returns all invoices according to the informed query params in the request.',
  operationId: 'Searchallinvoices',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'from',
            required: false,
            schema: { default: '', type: 'string' },
            style: 'form',
          },
        }),
      to: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'to',
            required: false,
            schema: { default: '', type: 'string' },
            style: 'form',
          },
        }),
      createdDateFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'createdDateFrom',
            required: false,
            schema: { example: '', type: 'string' },
            style: 'form',
          },
          example: '',
        }),
      createdDateTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'createdDateTo',
            required: false,
            schema: { example: '', type: 'string' },
            style: 'form',
          },
          example: '',
        }),
      value: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(101.22)
        .exactOptional()
        .openapi({
          param: {
            description: "Invoice's value. It must be completed with a decimal value.",
            in: 'query',
            name: 'value',
            required: false,
            schema: { default: '101.22', type: 'number' },
            style: 'form',
          },
        }),
      status: z
        .string()
        .default('Paid')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Invoice\'s status. It must be completed with "Paid", "Cancelled" or "Open" value.',
            in: 'query',
            name: 'status',
            required: false,
            schema: { default: 'Paid', type: 'string' },
            style: 'form',
          },
        }),
      friendlyId: z
        .string()
        .default('insert identifier here')
        .exactOptional()
        .openapi({
          param: {
            description: "Invoice's identifier",
            in: 'query',
            name: 'friendlyId',
            schema: { default: 'insert identifier here', type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      creditAccountId: z
        .string()
        .default('B75F0')
        .exactOptional()
        .openapi({
          param: {
            description: "Credit account's identifier",
            in: 'query',
            name: 'creditAccountId',
            required: false,
            schema: { default: 'B75F0', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      checkingAccountId: z.string(),
                      createdAt: z.string(),
                      description: z.string(),
                      dueDate: z.string(),
                      id: z.string(),
                      observation: z.string().nullable(),
                      originalDueDate: z.string(),
                      paymentLink: z.string().nullable(),
                      status: z.string(),
                      updatedAt: z.string(),
                      value: z.number(),
                    })
                    .openapi({
                      example: {
                        checkingAccountId: '14443385797_CPF',
                        createdAt: '2017-06-19T01:53:54',
                        description: 'Invoice from debit of 100M. Installment 1/1',
                        dueDate: '2017-07-27T05:58:24',
                        id: 'ce02c68b2b584d5ba15a63bc485d43f1',
                        observation: '',
                        originalDueDate: '2017-07-27T05:58:24',
                        paymentLink: '',
                        status: 'Paid',
                        updatedAt: '2017-06-27T05:58:24',
                        value: 100,
                      },
                      required: [
                        'id',
                        'status',
                        'value',
                        'checkingAccountId',
                        'createdAt',
                        'updatedAt',
                        'paymentLink',
                        'originalDueDate',
                        'dueDate',
                        'description',
                        'observation',
                      ],
                      title: 'Datum',
                    }),
                )
                .openapi({ description: '' }),
              summary: z
                .object({ count: z.int32(), total: z.number() })
                .openapi({
                  example: { count: 5, total: 500 },
                  required: ['total', 'count'],
                  title: 'Summary',
                }),
            })
            .openapi({
              example: {
                data: [
                  {
                    checkingAccountId: '14443385797_CPF',
                    createdAt: '2017-06-19T01:53:54',
                    description: 'Invoice from debit of 100M. Installment 1/1',
                    dueDate: '2017-07-27T05:58:24',
                    id: 'ce02c68b2b584d5ba15a63bc485d43f1',
                    observation: '',
                    originalDueDate: '2017-07-27T05:58:24',
                    paymentLink: '',
                    status: 'Paid',
                    updatedAt: '2017-06-27T05:58:24',
                    value: 100,
                  },
                  {
                    checkingAccountId: '06100326744_CPF',
                    createdAt: '2017-04-27T01:48:27',
                    description: 'Invoice from debit of 100M. Installment 1/1',
                    dueDate: '2017-05-27T07:58:42',
                    id: '11ff8f52407047c2966649c3484285bd',
                    observation: '',
                    originalDueDate: '',
                    paymentLink: null,
                    status: 'Paid',
                    updatedAt: '2017-04-27T07:58:42',
                    value: 100,
                  },
                  {
                    checkingAccountId: '06100326744_CPF',
                    createdAt: '2017-04-27T01:48:27',
                    description: 'Invoice from debit of 100M. Installment 1/1',
                    dueDate: '2017-05-27T07:58:30',
                    id: '2828a856363a4f82b3f5c18b3ef09620',
                    observation: '',
                    originalDueDate: '',
                    paymentLink: null,
                    status: 'Paid',
                    updatedAt: '2017-04-27T07:58:30',
                    value: 100,
                  },
                  {
                    checkingAccountId: '06100326744_CPF',
                    createdAt: '2017-04-27T01:48:27',
                    description: 'Invoice from debit of 100M. Installment 1/1',
                    dueDate: '2017-05-27T07:58:52',
                    id: '06c8f6160f7a4a50ae43c26a37fe1946',
                    observation: '',
                    originalDueDate: '',
                    paymentLink: null,
                    status: 'Paid',
                    updatedAt: '2017-04-27T07:58:52',
                    value: 100,
                  },
                  {
                    checkingAccountId: '14443385797_CPF',
                    createdAt: '2017-04-11T04:50:34',
                    description: 'Invoice from debit of 100M. Installment 1/1',
                    dueDate: '2017-05-11T05:26:07',
                    id: '105e79997fbe452ba33ffa69b408f9bf',
                    observation: null,
                    originalDueDate: '',
                    paymentLink: null,
                    status: 'Paid',
                    updatedAt: '2017-04-11T05:26:07',
                    value: 100,
                  },
                ],
                summary: { count: 5, total: 500 },
              },
              required: ['data', 'summary'],
              title: 'Paidinvoices',
            }),
          example: {
            data: [
              {
                checkingAccountId: '14443385797_CPF',
                createdAt: '2017-06-19T01:53:54',
                description: 'Invoice from debit of 100M. Installment 1/1',
                dueDate: '2017-07-27T05:58:24',
                id: 'ce02c68b2b584d5ba15a63bc485d43f1',
                observation: '',
                originalDueDate: '2017-07-27T05:58:24',
                paymentLink: '',
                status: 'Paid',
                updatedAt: '2017-06-27T05:58:24',
                value: 100,
              },
              {
                checkingAccountId: '06100326744_CPF',
                createdAt: '2017-04-27T01:48:27',
                description: 'Invoice from debit of 100M. Installment 1/1',
                dueDate: '2017-05-27T07:58:42',
                id: '11ff8f52407047c2966649c3484285bd',
                observation: '',
                originalDueDate: '',
                paymentLink: null,
                status: 'Paid',
                updatedAt: '2017-04-27T07:58:42',
                value: 100,
              },
              {
                checkingAccountId: '06100326744_CPF',
                createdAt: '2017-04-27T01:48:27',
                description: 'Invoice from debit of 100M. Installment 1/1',
                dueDate: '2017-05-27T07:58:30',
                id: '2828a856363a4f82b3f5c18b3ef09620',
                observation: '',
                originalDueDate: '',
                paymentLink: null,
                status: 'Paid',
                updatedAt: '2017-04-27T07:58:30',
                value: 100,
              },
              {
                checkingAccountId: '06100326744_CPF',
                createdAt: '2017-04-27T01:48:27',
                description: 'Invoice from debit of 100M. Installment 1/1',
                dueDate: '2017-05-27T07:58:52',
                id: '06c8f6160f7a4a50ae43c26a37fe1946',
                observation: '',
                originalDueDate: '',
                paymentLink: null,
                status: 'Paid',
                updatedAt: '2017-04-27T07:58:52',
                value: 100,
              },
              {
                checkingAccountId: '14443385797_CPF',
                createdAt: '2017-04-11T04:50:34',
                description: 'Invoice from debit of 100M. Installment 1/1',
                dueDate: '2017-05-11T05:26:07',
                id: '105e79997fbe452ba33ffa69b408f9bf',
                observation: null,
                originalDueDate: '',
                paymentLink: null,
                status: 'Paid',
                updatedAt: '2017-04-11T05:26:07',
                value: 100,
              },
            ],
            summary: { count: 5, total: 500 },
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'close', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 18:56:52 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        Vary: z
          .string()
          .exactOptional()
          .openapi({ example: 'Accept-Encoding', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.4', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.6-stable+62', param: { required: false } }),
      }),
    },
  },
})

export const getApiCreditcontrolStoreconfigRoute = createRoute({
  method: 'get',
  path: '/api/creditcontrol/storeconfig',
  tags: ['Store Configuration'],
  summary: 'Retrieve store configuration',
  description: 'Get store configuration data.',
  operationId: 'Retrievestoreconfiguration',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
          schema: z
            .object({
              dailyInterestRate: z.number(),
              invoicePostponementLimit: z.int32(),
              taxRate: z.number(),
              tolerancePercent: z.number(),
            })
            .openapi({
              example: {
                dailyInterestRate: 0,
                invoicePostponementLimit: 0,
                taxRate: 0,
                tolerancePercent: 0.7,
              },
              required: [
                'dailyInterestRate',
                'invoicePostponementLimit',
                'taxRate',
                'tolerancePercent',
              ],
              title: 'Storeconfig',
            }),
          example: {
            dailyInterestRate: 0,
            invoicePostponementLimit: 0,
            taxRate: 0,
            tolerancePercent: 0.7,
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '91', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 20:45:36 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fstoreconfig',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})

export const putApiCreditcontrolStoreconfigRoute = createRoute({
  method: 'put',
  path: '/api/creditcontrol/storeconfig',
  tags: ['Store Configuration'],
  summary: 'Create or change store configuration',
  description: 'Create or change store configuration data.',
  operationId: 'Createorchangestoreconfiguration',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'The Media type of the body of the request. Default value for payment provider protocol is application/json',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
              automaticCheckingAccountCreationEnabled: z.boolean().default(false),
              dailyInterestRate: z.string().default('0.6'),
              defaultCreditValue: z.string().default('150.0'),
              invoicePostponementLimit: z.string().default('2'),
              maxPostponementDays: z.string().default('3'),
              maxPreAuthorizationGrowthRate: z.string().default('0.1'),
              myCreditsEnabled: z.boolean().default(true),
              notificationsSettings: z
                .object({
                  daysAfter: z
                    .array(
                      z
                        .object({
                          days: z.int().default(0),
                          timeOfDay: z.string().default('12:00:00'),
                        })
                        .openapi({ required: ['days', 'timeOfDay'] }),
                    )
                    .exactOptional(),
                  daysPrior: z
                    .array(
                      z
                        .object({
                          days: z.int().default(1),
                          timeOfDay: z.string().default('16:00:00'),
                        })
                        .openapi({ required: ['days', 'timeOfDay'] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              postponementEnabled: z.boolean().default(false),
              taxRate: z.string().default('0.4'),
              toleranceEnabled: z.boolean().default(true),
            })
            .openapi({
              example: {
                automaticCheckingAccountCreationEnabled: false,
                dailyInterestRate: 'number(percent 0.1=10%) (float)',
                defaultCreditValue: 'number (decimal)',
                invoicePostponementLimit: 'number (int)',
                maxPostponementDays: 'number (int',
                maxPreAuthorizationGrowthRate: 'number (percent 0.1=10%) (float)',
                myCreditsEnabled: false,
                postponementEnabled: false,
                taxRate: 'number(percent 0.1=10%) (float)',
                toleranceEnabled: false,
              },
              required: [
                'dailyInterestRate',
                'invoicePostponementLimit',
                'taxRate',
                'maxPostponementDays',
                'defaultCreditValue',
                'maxPreAuthorizationGrowthRate',
                'myCreditsEnabled',
                'toleranceEnabled',
                'automaticCheckingAccountCreationEnabled',
                'postponementEnabled',
              ],
              title: 'CreateorchangestoreconfigurationRequest',
            }),
          example: {
            automaticCheckingAccountCreationEnabled: false,
            dailyInterestRate: 'number(percent 0.1=10%) (float)',
            defaultCreditValue: 'number (decimal)',
            invoicePostponementLimit: 'number (int)',
            maxPostponementDays: 'number (int',
            maxPreAuthorizationGrowthRate: 'number (percent 0.1=10%) (float)',
            myCreditsEnabled: false,
            postponementEnabled: false,
            taxRate: 'number(percent 0.1=10%) (float)',
            toleranceEnabled: false,
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
          schema: z
            .object({
              dailyInterestRate: z.number(),
              invoicePostponementLimit: z.int32(),
              taxRate: z.number(),
              tolerancePercent: z.number(),
            })
            .openapi({
              example: {
                dailyInterestRate: 0.2,
                invoicePostponementLimit: 2,
                taxRate: 0.4,
                tolerancePercent: 0.35,
              },
              required: [
                'dailyInterestRate',
                'invoicePostponementLimit',
                'taxRate',
                'tolerancePercent',
              ],
              title: 'Savestoreconfig',
            }),
          example: {
            dailyInterestRate: 0.2,
            invoicePostponementLimit: 2,
            taxRate: 0.4,
            tolerancePercent: 0.35,
          },
        },
      },
      headers: z.object({
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '92', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Wed, 12 Jul 2017 21:00:07 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.36.5-beta.1', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'beta', param: { required: false } }),
        'X-Translate': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Translate-BackEnd': z
          .string()
          .exactOptional()
          .openapi({
            example:
              'http%3A%2F%2Fbeta.janus-router-v2.vtexinternal.com.br%2Fapi%2Fcreditcontrol%2Fstoreconfig',
            param: { required: false },
          }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'cc-v0.1.7-beta.5+75', param: { required: false } }),
      }),
    },
  },
})
