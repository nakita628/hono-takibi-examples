import { OpenAPIHono } from '@hono/zod-openapi'
import { getDialogOpenRoute } from '../routes'

const app = new OpenAPIHono()

export const dialogHandler = app.openapi(getDialogOpenRoute, (c) => {
  throw new Error('Not implemented')
})
