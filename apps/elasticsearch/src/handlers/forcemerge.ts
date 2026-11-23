import { OpenAPIHono } from '@hono/zod-openapi'
import { postForcemergeRoute } from '../routes'

const app = new OpenAPIHono()

export const forcemergeHandler = app.openapi(postForcemergeRoute, (c) => {
  throw new Error('Not implemented')
})
