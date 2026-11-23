type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudBillingBudgetsV1beta1AllUpdatesRule = {
  disableDefaultIamRecipients?: boolean | undefined
  monitoringNotificationChannels?: string[] | undefined
  pubsubTopic?: string | undefined
  schemaVersion?: string | undefined
}
type GoogleCloudBillingBudgetsV1beta1LastPeriodAmount = { [x: string]: unknown }
type GoogleTypeMoney = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type GoogleCloudBillingBudgetsV1beta1BudgetAmount = {
  lastPeriodAmount?: GoogleCloudBillingBudgetsV1beta1LastPeriodAmount | undefined
  specifiedAmount?: GoogleTypeMoney | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleCloudBillingBudgetsV1beta1CustomPeriod = {
  endDate?: GoogleTypeDate | undefined
  startDate?: GoogleTypeDate | undefined
}
type GoogleCloudBillingBudgetsV1beta1Filter = {
  calendarPeriod?: 'CALENDAR_PERIOD_UNSPECIFIED' | 'MONTH' | 'QUARTER' | 'YEAR' | undefined
  creditTypes?: string[] | undefined
  creditTypesTreatment?:
    | 'CREDIT_TYPES_TREATMENT_UNSPECIFIED'
    | 'INCLUDE_ALL_CREDITS'
    | 'EXCLUDE_ALL_CREDITS'
    | 'INCLUDE_SPECIFIED_CREDITS'
    | undefined
  customPeriod?: GoogleCloudBillingBudgetsV1beta1CustomPeriod | undefined
  labels?: { [x: string]: { [x: string]: unknown }[] } | undefined
  projects?: string[] | undefined
  services?: string[] | undefined
  subaccounts?: string[] | undefined
}
type GoogleCloudBillingBudgetsV1beta1ThresholdRule = {
  spendBasis?: 'BASIS_UNSPECIFIED' | 'CURRENT_SPEND' | 'FORECASTED_SPEND' | undefined
  thresholdPercent?: number | undefined
}
type GoogleCloudBillingBudgetsV1beta1Budget = {
  allUpdatesRule?: GoogleCloudBillingBudgetsV1beta1AllUpdatesRule | undefined
  amount?: GoogleCloudBillingBudgetsV1beta1BudgetAmount | undefined
  budgetFilter?: GoogleCloudBillingBudgetsV1beta1Filter | undefined
  displayName?: string | undefined
  etag?: string | undefined
  name?: string | undefined
  thresholdRules?: GoogleCloudBillingBudgetsV1beta1ThresholdRule[] | undefined
}
type GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest = {
  budget?: GoogleCloudBillingBudgetsV1beta1Budget | undefined
  updateMask?: string | undefined
}
type GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse = {
  budgets?: GoogleCloudBillingBudgetsV1beta1Budget[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest = {
  budget?: GoogleCloudBillingBudgetsV1beta1Budget | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudBillingBudgetsV1beta1Budget
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest }
        output: GoogleCloudBillingBudgetsV1beta1Budget
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/budgets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest }
        output: GoogleCloudBillingBudgetsV1beta1Budget
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
