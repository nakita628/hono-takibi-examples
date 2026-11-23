import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBulkEventsRetryIdRoute,
  getBulkEventsRetryPlanRoute,
  getBulkEventsRetryRoute,
  getBulkIgnoredEventsRetryIdRoute,
  getBulkIgnoredEventsRetryPlanRoute,
  getBulkIgnoredEventsRetryRoute,
  getBulkRequestsRetryIdRoute,
  getBulkRequestsRetryPlanRoute,
  getBulkRequestsRetryRoute,
  postBulkEventsRetryIdCancelRoute,
  postBulkEventsRetryRoute,
  postBulkIgnoredEventsRetryIdCancelRoute,
  postBulkIgnoredEventsRetryRoute,
  postBulkRequestsRetryIdCancelRoute,
  postBulkRequestsRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkHandler = app
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
