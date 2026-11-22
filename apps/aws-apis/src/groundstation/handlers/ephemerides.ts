import { OpenAPIHono } from '@hono/zod-openapi'
import { postEphemeridesRoute } from '../routes'

const app = new OpenAPIHono()

export const ephemeridesHandler = app.openapi(postEphemeridesRoute, (c) => {
  throw new Error('Not implemented')
})
