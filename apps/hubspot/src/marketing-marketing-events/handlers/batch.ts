import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMarketingMarketingEvents202609BatchArchiveRoute,
  postMarketingMarketingEvents202609BatchUpdateRoute,
  postMarketingMarketingEvents202609EventsDeleteRoute,
  postMarketingMarketingEvents202609EventsUpsertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postMarketingMarketingEvents202609BatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingMarketingEvents202609BatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingMarketingEvents202609EventsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingMarketingEvents202609EventsUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
