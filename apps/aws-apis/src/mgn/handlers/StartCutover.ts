import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartCutoverRoute } from '../routes'

const app = new OpenAPIHono()

export const StartCutoverHandler = app.openapi(postStartCutoverRoute, (c) => {
  throw new Error('Not implemented')
})
