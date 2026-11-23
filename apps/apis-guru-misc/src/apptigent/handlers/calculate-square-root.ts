import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateSquareRootRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateSquareRootHandler = app.openapi(postCalculateSquareRootRoute, (c) => {
  throw new Error('Not implemented')
})
