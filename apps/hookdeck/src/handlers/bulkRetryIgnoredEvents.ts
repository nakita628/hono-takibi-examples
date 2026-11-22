import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBulkIgnoredEventsRetryIdRoute,
  getBulkIgnoredEventsRetryPlanRoute,
  getBulkIgnoredEventsRetryRoute,
  postBulkIgnoredEventsRetryIdCancelRoute,
  postBulkIgnoredEventsRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkRetryIgnoredEventsHandler = app
  .openapi(getBulkIgnoredEventsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkIgnoredEventsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkIgnoredEventsRetryPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkIgnoredEventsRetryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkIgnoredEventsRetryIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
