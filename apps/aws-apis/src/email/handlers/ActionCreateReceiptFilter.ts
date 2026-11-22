import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateReceiptFilterRoute, postActionCreateReceiptFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateReceiptFilterHandler = app
  .openapi(getActionCreateReceiptFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateReceiptFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
