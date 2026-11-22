import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postQuerierV1QuerierServiceAnalyzeQueryRoute,
  postQuerierV1QuerierServiceGetProfileStatsRoute,
  postQuerierV1QuerierServiceQueryAnomaliesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scopeInternalHandler = app
  .openapi(postQuerierV1QuerierServiceAnalyzeQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceGetProfileStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceQueryAnomaliesRoute, (c) => {
    throw new Error('Not implemented')
  })
