import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderOrderIdRoute, getOrderRoute, postOrderOrderIdIssueRefundRoute } from '../routes'

const app = new OpenAPIHono()

export const orderHandler = app
  .openapi(getOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderOrderIdIssueRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
