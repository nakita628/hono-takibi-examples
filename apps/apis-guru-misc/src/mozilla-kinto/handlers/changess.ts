import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketsMonitorCollectionsChangesRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const changessHandler = app.openapi(getBucketsMonitorCollectionsChangesRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
