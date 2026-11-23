import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3MailBatchBatchIdRoute, postV3MailBatchRoute, postV3MailSendRoute } from './routes'
import {
  getV3MailBatchBatchIdRouteHandler,
  postV3MailBatchRouteHandler,
  postV3MailSendRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV3MailBatchRoute, postV3MailBatchRouteHandler)
  .openapi(getV3MailBatchBatchIdRoute, getV3MailBatchBatchIdRouteHandler)
  .openapi(postV3MailSendRoute, postV3MailSendRouteHandler)

export default app
