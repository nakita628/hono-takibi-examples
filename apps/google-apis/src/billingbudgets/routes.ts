import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudBillingBudgetsV1beta1AllUpdatesRuleSchema = z
  .object({
    disableDefaultIamRecipients: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account.',
      }),
    monitoringNotificationChannels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Targets to send notifications to when a threshold is exceeded. This is in addition to default recipients who have billing account IAM roles. The value is the full REST resource name of a monitoring notification channel with the form `projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 channels are allowed. See https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients for more details.',
      }),
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The name of the Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent at regular intervals to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications for more details. Caller is expected to have `pubsub.topics.setIamPolicy` permission on the topic when it's set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task for more details on Pub/Sub roles and permissions.",
      }),
    schemaVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Required when AllUpdatesRule.pubsub_topic is set. The schema version of the notification sent to AllUpdatesRule.pubsub_topic. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format.',
      }),
  })
  .openapi({
    description:
      'AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.',
    required: [],
  })
  .openapi('GoogleCloudBillingBudgetsV1beta1AllUpdatesRule')

const GoogleCloudBillingBudgetsV1beta1LastPeriodAmountSchema = z
  .object({})
  .openapi({
    description:
      "Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. Future configuration options will be described here (for example, configuring a percentage of last period's spend). LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period.",
  })
  .openapi('GoogleCloudBillingBudgetsV1beta1LastPeriodAmount')

const GoogleTypeMoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('GoogleTypeMoney')

const GoogleCloudBillingBudgetsV1beta1BudgetAmountSchema = z
  .object({
    lastPeriodAmount:
      GoogleCloudBillingBudgetsV1beta1LastPeriodAmountSchema.exactOptional().openapi({
        description:
          "Use the last period's actual spend as the budget for the present period. LastPeriodAmount can only be set when the budget's time period is a Filter.calendar_period. It cannot be set in combination with Filter.custom_period.",
      }),
    specifiedAmount: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        'A specified amount to use as the budget. `currency_code` is optional. If specified when creating a budget, it must match the currency of the billing account. If specified when updating a budget, it must match the currency_code of the existing budget. The `currency_code` is provided on output.',
    }),
  })
  .openapi({ description: 'The budgeted amount for each usage period.', required: [] })
  .openapi('GoogleCloudBillingBudgetsV1beta1BudgetAmount')

const GoogleTypeDateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('GoogleTypeDate')

const GoogleCloudBillingBudgetsV1beta1CustomPeriodSchema = z
  .object({
    endDate: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        "Optional. The end date of the time period. Budgets with elapsed end date won't be processed. If unset, specifies to track all usage incurred since the start_date.",
    }),
    startDate: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'Required. The start date must be after January 1, 2017.',
    }),
  })
  .openapi({
    description: 'All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).',
    required: [],
  })
  .openapi('GoogleCloudBillingBudgetsV1beta1CustomPeriod')

const GoogleCloudBillingBudgetsV1beta1FilterSchema = z
  .object({
    calendarPeriod: z
      .enum(['CALENDAR_PERIOD_UNSPECIFIED', 'MONTH', 'QUARTER', 'YEAR'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget will track usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it will track usage from July 1 to September 30 when the current calendar month is July, August, September, so on.',
      }),
    creditTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See [a list of acceptable credit type values](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#credits-type). If Filter.credit_types_treatment is **not** INCLUDE_SPECIFIED_CREDITS, this field must be empty.',
      }),
    creditTypesTreatment: z
      .enum([
        'CREDIT_TYPES_TREATMENT_UNSPECIFIED',
        'INCLUDE_ALL_CREDITS',
        'EXCLUDE_ALL_CREDITS',
        'INCLUDE_SPECIFIED_CREDITS',
      ])
      .exactOptional()
      .openapi({ description: 'Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`.' }),
    customPeriod: GoogleCloudBillingBudgetsV1beta1CustomPeriodSchema.exactOptional().openapi({
      description:
        'Optional. Specifies to track usage from any start date (required) to any end date (optional). This time period is static, it does not recur.',
    }),
    labels: z
      .record(z.string(), z.array(z.any()))
      .exactOptional()
      .openapi({
        description:
          'Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. If omitted, the report will include all labeled and unlabeled usage. An object containing a single `"key": value` pair. Example: `{ "name": "wrench" }`. _Currently, multiple entries or multiple values per entry are not allowed._',
      }),
    projects: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A set of projects of the form `projects/{project}`, specifying that usage from only this set of projects should be included in the budget. If omitted, the report will include all usage for the billing account, regardless of which project the usage occurred on.',
      }),
    services: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api.',
      }),
    subaccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A set of subaccounts of the form `billingAccounts/{account_id}`, specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount is set to the name of the parent account, usage from the parent account will be included. If omitted, the report will include usage from the parent account and all subaccounts, if they exist.',
      }),
  })
  .openapi({
    description: 'A filter for a budget, limiting the scope of the cost to calculate.',
    required: [],
  })
  .openapi('GoogleCloudBillingBudgetsV1beta1Filter')

const GoogleCloudBillingBudgetsV1beta1ThresholdRuleSchema = z
  .object({
    spendBasis: z
      .enum(['BASIS_UNSPECIFIED', 'CURRENT_SPEND', 'FORECASTED_SPEND'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set.',
      }),
    thresholdPercent: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.',
      }),
  })
  .openapi({
    description:
      'ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions).',
    required: [],
  })
  .openapi('GoogleCloudBillingBudgetsV1beta1ThresholdRule')

const GoogleCloudBillingBudgetsV1beta1BudgetSchema = z
  .object({
    allUpdatesRule: GoogleCloudBillingBudgetsV1beta1AllUpdatesRuleSchema.exactOptional().openapi({
      description:
        'Optional. Rules to apply to notifications sent based on budget spend and thresholds.',
    }),
    amount: GoogleCloudBillingBudgetsV1beta1BudgetAmountSchema.exactOptional().openapi({
      description: 'Required. Budgeted amount.',
    }),
    budgetFilter: GoogleCloudBillingBudgetsV1beta1FilterSchema.exactOptional().openapi({
      description:
        "Optional. Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters.",
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User data for display name in UI. Validation: <= 60 chars.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.',
        readOnly: true,
      }),
    thresholdRules: z
      .array(GoogleCloudBillingBudgetsV1beta1ThresholdRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. Optional for `pubsubTopic` notifications. Required if using email notifications.',
      }),
  })
  .openapi({
    description:
      'A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.',
    required: [],
  })
  .openapi('GoogleCloudBillingBudgetsV1beta1Budget')

const GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestSchema = z
  .object({
    budget: GoogleCloudBillingBudgetsV1beta1BudgetSchema.exactOptional().openapi({
      description: 'Required. Budget to create.',
    }),
  })
  .openapi({ description: 'Request for CreateBudget', required: [] })
  .openapi('GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest')

const GoogleCloudBillingBudgetsV1beta1ListBudgetsResponseSchema = z
  .object({
    budgets: z
      .array(GoogleCloudBillingBudgetsV1beta1BudgetSchema)
      .exactOptional()
      .openapi({ description: 'List of the budgets owned by the requested billing account.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new `ListBudgetsRequest`.',
      }),
  })
  .openapi({ description: 'Response for ListBudgets', required: [] })
  .openapi('GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse')

const GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestSchema = z
  .object({
    budget: GoogleCloudBillingBudgetsV1beta1BudgetSchema.exactOptional().openapi({
      description:
        'Required. The updated budget object. The budget to update is specified by the budget name in the budget.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates which fields in the provided budget to update. Read-only fields (such as `name`) cannot be changed. If this is not provided, then only fields with non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values.',
      }),
  })
  .openapi({ description: 'Request for UpdateBudget', required: [] })
  .openapi('GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-billing':
          'View and manage your Google Cloud Platform billing accounts',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-billing':
          'View and manage your Google Cloud Platform billing accounts',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['billingAccounts'],
  description:
    "Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.",
  operationId: 'billingbudgets.billingAccounts.budgets.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudBillingBudgetsV1beta1BudgetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-billing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-billing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['billingAccounts'],
  description: 'Deletes a budget. Returns successfully if already deleted.',
  operationId: 'billingbudgets.billingAccounts.budgets.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-billing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-billing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['billingAccounts'],
  description:
    "Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.",
  operationId: 'billingbudgets.billingAccounts.budgets.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudBillingBudgetsV1beta1BudgetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-billing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-billing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentBudgetsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/budgets',
  tags: ['billingAccounts'],
  description:
    "Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.",
  operationId: 'billingbudgets.billingAccounts.budgets.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
              'Optional. The maximum number of budgets to return per page. The default and maximum value are 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudBillingBudgetsV1beta1ListBudgetsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-billing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-billing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentBudgetsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/budgets',
  tags: ['billingAccounts'],
  description:
    'Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.',
  operationId: 'billingbudgets.billingAccounts.budgets.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudBillingBudgetsV1beta1BudgetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-billing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-billing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
