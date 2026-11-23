import { OpenAPIHono } from '@hono/zod-openapi'
import { postStarsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const starsDeleteHandler = app.openapi(postStarsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
