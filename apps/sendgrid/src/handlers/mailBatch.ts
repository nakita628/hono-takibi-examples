import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3MailBatchBatchIdRoute, postV3MailBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const mailBatchHandler = app
  .openapi(postV3MailBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3MailBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
