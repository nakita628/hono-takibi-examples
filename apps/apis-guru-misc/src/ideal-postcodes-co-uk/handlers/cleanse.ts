import { OpenAPIHono } from '@hono/zod-openapi'
import { postCleanseAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const cleanseHandler = app.openapi(postCleanseAddressesRoute, (c) => {
  throw new Error('Not implemented')
})
