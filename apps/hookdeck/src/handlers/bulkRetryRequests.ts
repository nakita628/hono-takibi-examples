import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBulkRequestsRetryIdRoute,
  getBulkRequestsRetryPlanRoute,
  getBulkRequestsRetryRoute,
  postBulkRequestsRetryIdCancelRoute,
  postBulkRequestsRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkRetryRequestsHandler = app
  .openapi(getBulkRequestsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkRequestsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkRequestsRetryPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkRequestsRetryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkRequestsRetryIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
