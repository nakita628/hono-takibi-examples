import { OpenAPIHono } from '@hono/zod-openapi'
import { postStarsRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const starsRemoveHandler = app.openapi(postStarsRemoveRoute, (c) => {
  throw new Error('Not implemented')
})
