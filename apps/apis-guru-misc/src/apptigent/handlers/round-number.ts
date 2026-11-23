import { OpenAPIHono } from '@hono/zod-openapi'
import { postRoundNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const roundNumberHandler = app.openapi(postRoundNumberRoute, (c) => {
  throw new Error('Not implemented')
})
