import { OpenAPIHono } from '@hono/zod-openapi'
import { postShippingsettingsBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const shippingsettingsHandler = app.openapi(postShippingsettingsBatchRoute, (c) => {
  throw new Error('Not implemented')
})
