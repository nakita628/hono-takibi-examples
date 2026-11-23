import { OpenAPIHono } from '@hono/zod-openapi'
import { postSharesInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const sharesInfoHandler = app.openapi(postSharesInfoRoute, (c) => {
  throw new Error('Not implemented')
})
