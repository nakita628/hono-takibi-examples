import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiAnalyticsContentContentIdViewersRoute,
  getWikiRestApiAnalyticsContentContentIdViewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getWikiRestApiAnalyticsContentContentIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAnalyticsContentContentIdViewersRoute, (c) => {
    throw new Error('Not implemented')
  })
