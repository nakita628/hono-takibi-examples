import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdReportReportIdRoute } from '../routes'

const app = new OpenAPIHono()

export const adReportHandler = app.openapi(getAdReportReportIdRoute, (c) => {
  throw new Error('Not implemented')
})
