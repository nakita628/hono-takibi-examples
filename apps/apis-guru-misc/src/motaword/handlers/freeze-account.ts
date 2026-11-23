import { OpenAPIHono } from '@hono/zod-openapi'
import { postFreezeAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const freezeAccountHandler = app.openapi(postFreezeAccountRoute, (c) => {
  throw new Error('Not implemented')
})
