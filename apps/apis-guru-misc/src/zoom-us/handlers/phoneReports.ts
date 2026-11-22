import { OpenAPIHono } from '@hono/zod-openapi'
import { getPhoneReportsOperationlogsRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneReportsHandler = app.openapi(getPhoneReportsOperationlogsRoute, (c) => {
  throw new Error('Not implemented')
})
