import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetLFTagRoute } from '../routes'

const app = new OpenAPIHono()

export const getLfTagHandler = app.openapi(postGetLFTagRoute, (c) => {
  throw new Error('Not implemented')
})
