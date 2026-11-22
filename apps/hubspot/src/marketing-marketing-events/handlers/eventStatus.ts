import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMarketingMarketingEvents202609EventsExternalEventIdCancelRoute,
  postMarketingMarketingEvents202609EventsExternalEventIdCompleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventStatusHandler = app
  .openapi(postMarketingMarketingEvents202609EventsExternalEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingMarketingEvents202609EventsExternalEventIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
