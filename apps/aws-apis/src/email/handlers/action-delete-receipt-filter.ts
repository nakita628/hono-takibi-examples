import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteReceiptFilterRoute, postActionDeleteReceiptFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteReceiptFilterHandler = app
  .openapi(getActionDeleteReceiptFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteReceiptFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
