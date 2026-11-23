import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnfreezeAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const unfreezeAccountHandler = app.openapi(postUnfreezeAccountRoute, (c) => {
  throw new Error('Not implemented')
})
