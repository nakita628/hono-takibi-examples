import { OpenAPIHono } from '@hono/zod-openapi'
import { postPosBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const posHandler = app.openapi(postPosBatchRoute, (c) => {
  throw new Error('Not implemented')
})
