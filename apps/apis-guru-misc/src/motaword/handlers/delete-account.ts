import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteAccountHandler = app.openapi(deleteDeleteAccountRoute, (c) => {
  throw new Error('Not implemented')
})
