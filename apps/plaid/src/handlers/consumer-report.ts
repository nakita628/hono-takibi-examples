import { OpenAPIHono } from '@hono/zod-openapi'
import { postConsumerReportPdfGetRoute } from '../routes'

const app = new OpenAPIHono()

export const consumerReportHandler = app.openapi(postConsumerReportPdfGetRoute, (c) => {
  throw new Error('Not implemented')
})
