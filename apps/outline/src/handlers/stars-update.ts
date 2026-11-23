import { OpenAPIHono } from '@hono/zod-openapi'
import { postStarsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const starsUpdateHandler = app.openapi(postStarsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
