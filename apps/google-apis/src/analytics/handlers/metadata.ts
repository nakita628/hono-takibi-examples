import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetadataReportTypeColumnsRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app.openapi(getMetadataReportTypeColumnsRoute, (c) => {
  throw new Error('Not implemented')
})
