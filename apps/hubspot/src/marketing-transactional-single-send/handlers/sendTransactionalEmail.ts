import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarketingTransactional202609SingleEmailSendRoute } from '../routes'

const app = new OpenAPIHono()

export const sendTransactionalEmailHandler = app.openapi(
  postMarketingTransactional202609SingleEmailSendRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
