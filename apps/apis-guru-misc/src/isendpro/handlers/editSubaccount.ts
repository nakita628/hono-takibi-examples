import { OpenAPIHono } from '@hono/zod-openapi'
import { putSubaccountRoute } from '../routes'

const app = new OpenAPIHono()

export const editSubaccountHandler = app.openapi(putSubaccountRoute, (c) => {
  throw new Error('Not implemented')
})
