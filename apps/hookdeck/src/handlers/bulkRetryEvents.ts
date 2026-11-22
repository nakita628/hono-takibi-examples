import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBulkEventsRetryIdRoute,
  getBulkEventsRetryPlanRoute,
  getBulkEventsRetryRoute,
  postBulkEventsRetryIdCancelRoute,
  postBulkEventsRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkRetryEventsHandler = app
  .openapi(getBulkEventsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkEventsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkEventsRetryPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkEventsRetryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkEventsRetryIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
