import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetLFTagRoute } from '../routes'

const app = new OpenAPIHono()

export const GetLFTagHandler = app.openapi(postGetLFTagRoute, (c) => {
  throw new Error('Not implemented')
})
