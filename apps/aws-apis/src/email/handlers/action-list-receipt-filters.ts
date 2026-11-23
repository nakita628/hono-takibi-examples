import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListReceiptFiltersRoute, postActionListReceiptFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListReceiptFiltersHandler = app
  .openapi(getActionListReceiptFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListReceiptFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
