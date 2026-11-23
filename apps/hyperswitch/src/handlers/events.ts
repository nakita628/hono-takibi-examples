import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventsMerchantIdEventIdAttemptsRoute,
  postEventsMerchantIdEventIdRetryRoute,
  postEventsMerchantIdRoute,
  postEventsProfileListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postEventsMerchantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsProfileListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsMerchantIdEventIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsMerchantIdEventIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
