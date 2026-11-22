type Price = { amount: number; currency: string; id: string }
type Product = {
  id?: string | undefined
  name?: string | undefined
  seatUnit?: string | undefined
  type?: 'FIXED' | 'PER_SEAT' | 'METERED' | 'SIMPLE' | undefined
  usageUnit?: string | undefined
}
type SubscriptionItem = {
  endDate?: string | undefined
  id: string
  price: Price
  product: Product
  quantity?: number | undefined
  startDate: string
  status: 'ACTIVE' | 'CANCELED' | 'PENDING_ACTIVATION'
  testMode?: boolean | undefined
}
type Plan = {
  id: string
  name: string
  status: 'ACTIVE' | 'CANCELED' | 'PENDING_ACTIVATION'
  subscriptionItems: SubscriptionItem[]
}
type Subscription = {
  currentPeriodEnd: string
  endDate?: string | undefined
  id: string
  organisationId: string
  plans: Plan[]
  startDate: string
  status: 'ACTIVE' | 'CANCELED' | 'PAST_DUE'
  testMode?: boolean | undefined
}
type ProblemDetails = {
  detail?: string | undefined
  extensions?: { [x: string]: unknown } | undefined
  instance?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type CreateUsageRecord = { quantity: number; timestamp: string }
type UsageRecord = {
  quantity: number
  subscriptionId: string
  subscriptionItemId: string
  testMode: boolean
  recordedAt: string
  usageRecordId: string
  pricePerUnit: number
  productId: string
}
type UpdateUsageRecord = { quantity: number }
type UsageRecordsList = { usageRecords: UsageRecord[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:subscriptionId/items/:subscriptionItemId/usage-records': {
      $post:
        | {
            input: { param: { subscriptionId: string; subscriptionItemId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateUsageRecord }
            output: UsageRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string; subscriptionItemId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateUsageRecord }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:subscriptionId/items/:subscriptionItemId/usage-records/:usageRecordId': {
      $put:
        | {
            input: {
              param: { subscriptionId: string; subscriptionItemId: string; usageRecordId: string }
            } & { header: { 'Idempotency-Key'?: string | undefined } } & { json: UpdateUsageRecord }
            output: UsageRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { subscriptionId: string; subscriptionItemId: string; usageRecordId: string }
            } & { header: { 'Idempotency-Key'?: string | undefined } } & { json: UpdateUsageRecord }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:subscriptionId/usage-records': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: UsageRecordsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
