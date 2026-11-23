import { OpenAPIHono } from '@hono/zod-openapi'
import { postSwapIndexesRoute } from '../routes'

const app = new OpenAPIHono()

export const swapIndexesHandler = app.openapi(postSwapIndexesRoute, (c) => {
  throw new Error('Not implemented')
})
