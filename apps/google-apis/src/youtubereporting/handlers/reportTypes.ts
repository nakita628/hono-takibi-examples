import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReportTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const reportTypesHandler = app.openapi(getV1ReportTypesRoute, (c) => {
  throw new Error('Not implemented')
})
