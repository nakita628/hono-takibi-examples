import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketingEmails202609Route,
  getMarketingEmails202609StatisticsHistogramRoute,
  getMarketingEmails202609StatisticsListRoute,
  postMarketingEmails202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getMarketingEmails202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingEmails202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingEmails202609StatisticsHistogramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingEmails202609StatisticsListRoute, (c) => {
    throw new Error('Not implemented')
  })
