import { OpenAPIHono } from '@hono/zod-openapi'
import { getBuckslipsBuckslipIdOrdersRoute, postBuckslipsBuckslipIdOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const buckslipOrdersHandler = app
  .openapi(getBuckslipsBuckslipIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuckslipsBuckslipIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
