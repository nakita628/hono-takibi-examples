import { OpenAPIHono } from '@hono/zod-openapi'
import { postSharesCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const sharesCreateHandler = app.openapi(postSharesCreateRoute, (c) => {
  throw new Error('Not implemented')
})
