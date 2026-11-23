import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3MailBatchBatchIdRoute, postV3MailBatchRoute, postV3MailSendRoute } from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(postV3MailBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3MailBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
