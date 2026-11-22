import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransactionalSMSTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const smsTemplatesHandler = app.openapi(getTransactionalSMSTemplatesRoute, (c) => {
  throw new Error('Not implemented')
})
