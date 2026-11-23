import { OpenAPIHono } from '@hono/zod-openapi'
import { postStarsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const starsCreateHandler = app.openapi(postStarsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
