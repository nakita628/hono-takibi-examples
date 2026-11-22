import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarketingTestSendEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const sendTestEmailHandler = app.openapi(postMarketingTestSendEmailRoute, (c) => {
  throw new Error('Not implemented')
})
