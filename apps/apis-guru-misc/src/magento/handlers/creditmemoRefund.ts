import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CreditmemoRefundRoute } from '../routes'

const app = new OpenAPIHono()

export const creditmemoRefundHandler = app.openapi(postV1CreditmemoRefundRoute, (c) => {
  throw new Error('Not implemented')
})
