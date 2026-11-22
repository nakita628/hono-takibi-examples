import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubaccountRoute } from '../routes'

const app = new OpenAPIHono()

export const addSubaccountHandler = app.openapi(postSubaccountRoute, (c) => {
  throw new Error('Not implemented')
})
