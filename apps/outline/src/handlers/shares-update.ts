import { OpenAPIHono } from '@hono/zod-openapi'
import { postSharesUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const sharesUpdateHandler = app.openapi(postSharesUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
