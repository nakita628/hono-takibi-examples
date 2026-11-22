import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketingMarketingEvents202609EventsSearchRoute,
  getMarketingMarketingEvents202609ExternalEventIdIdentifiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identifiersHandler = app
  .openapi(getMarketingMarketingEvents202609EventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingMarketingEvents202609ExternalEventIdIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
