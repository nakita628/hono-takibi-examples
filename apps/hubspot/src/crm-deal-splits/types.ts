type PublicObjectId = { id: string }
type BatchInputPublicObjectId = { inputs: PublicObjectId[] }
type ValueWithTimestamp = {
  sourceId?: string | undefined
  sourceLabel?: string | undefined
  sourceType: string
  timestamp: string
  updatedByUserId?: number | undefined
  value: string
}
type SimplePublicObject = {
  archived: boolean
  archivedAt?: string | undefined
  createdAt: string
  id: string
  objectWriteTraceId?: string | undefined
  properties: { [x: string]: string }
  propertiesWithHistory?: { [x: string]: ValueWithTimestamp[] } | undefined
  updatedAt: string
  url?: string | undefined
}
type DealToDealSplits = { id: string; splits: SimplePublicObject[] }
type BatchResponseDealToDealSplits = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: DealToDealSplits[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type BatchResponseDealToDealSplitsWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: DealToDealSplits[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type PublicDealSplitInput = { ownerId: number; percentage: number }
type PublicDealSplitsCreateRequest = { id: bigint; splits: PublicDealSplitInput[] }
type PublicDealSplitsBatchCreateRequest = { inputs: PublicDealSplitsCreateRequest[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/deal-splits/2026-09/batch/read': {
      $post:
        | {
            input: { json: BatchInputPublicObjectId }
            output: BatchResponseDealToDealSplits
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputPublicObjectId }
            output: BatchResponseDealToDealSplitsWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: BatchInputPublicObjectId }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/deal-splits/2026-09/batch/upsert': {
      $post:
        | {
            input: { json: PublicDealSplitsBatchCreateRequest }
            output: BatchResponseDealToDealSplits
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicDealSplitsBatchCreateRequest }
            output: BatchResponseDealToDealSplitsWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: PublicDealSplitsBatchCreateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
