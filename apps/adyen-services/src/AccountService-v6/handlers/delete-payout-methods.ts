import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeletePayoutMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const deletePayoutMethodsHandler = app.openapi(postDeletePayoutMethodsRoute, (c) => {
  throw new Error('Not implemented')
})
