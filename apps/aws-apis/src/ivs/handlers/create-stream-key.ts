import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateStreamKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const createStreamKeyHandler = app.openapi(postCreateStreamKeyRoute, (c) => {
  throw new Error('Not implemented')
})
