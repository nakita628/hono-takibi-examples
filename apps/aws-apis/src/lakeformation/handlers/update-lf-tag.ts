import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateLFTagRoute } from '../routes'

const app = new OpenAPIHono()

export const updateLfTagHandler = app.openapi(postUpdateLFTagRoute, (c) => {
  throw new Error('Not implemented')
})
