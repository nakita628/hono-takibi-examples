import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateLFTagRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateLFTagHandler = app.openapi(postUpdateLFTagRoute, (c) => {
  throw new Error('Not implemented')
})
