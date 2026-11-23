import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubaccountRoute, putSubaccountRoute } from '../routes'

const app = new OpenAPIHono()

export const subaccountHandler = app
  .openapi(postSubaccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubaccountRoute, (c) => {
    throw new Error('Not implemented')
  })
