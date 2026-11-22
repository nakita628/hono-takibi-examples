import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ServerContactRoute } from '../routes'

const app = new OpenAPIHono()

export const contactHandler = app.openapi(postApiV1ServerContactRoute, (c) => {
  throw new Error('Not implemented')
})
