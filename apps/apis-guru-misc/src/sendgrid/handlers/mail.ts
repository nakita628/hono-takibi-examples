import { OpenAPIHono } from '@hono/zod-openapi'
import { getMailBatchBatchIdRoute, postMailBatchRoute, postMailSendRoute } from '../routes'

const app = new OpenAPIHono()

export const mailHandler = app
  .openapi(postMailBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
