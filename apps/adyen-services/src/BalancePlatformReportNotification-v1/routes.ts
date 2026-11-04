import { createRoute, z } from '@hono/zod-openapi'

const BalancePlatformNotificationResponseSchema = z
  .strictObject({
    notificationResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalancePlatformNotificationResponse')

const ResourceReferenceSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceReference')

const ReportNotificationDataSchema = z
  .strictObject({
    accountHolder: ResourceReferenceSchema.exactOptional().openapi({
      description: 'The account holder related to the report.',
    }),
    balanceAccount: ResourceReferenceSchema.exactOptional().openapi({
      description: 'The balance account related to the report.',
    }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    downloadUrl: z
      .string()
      .openapi({
        description:
          'The URL at which you can download the report. To download, you must authenticate your GET request with your [API credentials](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/overview).',
      }),
    fileName: z.string().openapi({ description: 'The filename of the report.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    reportType: z
      .string()
      .openapi({
        description:
          'The type of report. Possible values:\n\n- `balanceplatform_accounting_interactive_report`\n- `balanceplatform_accounting_report`\n- `balanceplatform_balance_report`\n- `balanceplatform_fee_report`\n- `balanceplatform_payment_instrument_report`\n- `balanceplatform_payout_report`\n- `balanceplatform_statement_report`\n\n',
      }),
  })
  .openapi({ required: ['downloadUrl', 'fileName', 'reportType'] })
  .openapi('ReportNotificationData')

const ReportNotificationRequestSchema = z
  .strictObject({
    data: ReportNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z.literal('balancePlatform.report.created').openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ReportNotificationRequest')

const ResourceSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('Resource')

const WebhookAckExample = {
  summary: 'Acknowledge Webhook',
  value: { notificationResponse: '[accepted]' },
}

const PostBalancePlatformReportCreatedBalancePlatformReportCreatedExample = {
  summary: 'Report created',
  description: 'Example webhook when a report was generated and is ready to be downloaded',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      creationDate: '2024-07-02T02:01:08+02:00',
      id: 'balanceplatform_accounting_report_2024_07_01.csv',
      downloadUrl:
        'https://balanceplatform-test.adyen.com/balanceplatform/.../.../.../balanceplatform_accounting_report_2024_07_01.csv',
      fileName: 'balanceplatform_accounting_report_2024_07_01.csv',
      reportType: 'balanceplatform_accounting_report',
    },
    environment: 'test',
    timestamp: '2024-07-02T02:01:05+02:00',
    type: 'balancePlatform.report.created',
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const balancePlatformReportCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.report.created',
  tags: ['General'],
  summary: 'Report generated',
  description:
    'Adyen sends this webhook after a report is generated and ready to be downloaded. The webhook contains the URL at which the report can be downloaded.\n\nBefore you download reports, ask your Adyen contact for your report credentials. You must use your credentials to authenticate your GET request.',
  operationId: 'post-balancePlatform.report.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ReportNotificationRequestSchema,
          examples: {
            'balancePlatform.report.created':
              PostBalancePlatformReportCreatedBalancePlatformReportCreatedExample,
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
          schema: BalancePlatformNotificationResponseSchema,
          examples: { 'balancePlatform.report.created': WebhookAckExample },
        },
      },
    },
  },
  security: [{ BasicAuth: [] }],
}
