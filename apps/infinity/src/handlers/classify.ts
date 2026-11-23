import { OpenAPIHono } from '@hono/zod-openapi'
import { postClassifyRoute } from '../routes'

const app = new OpenAPIHono()

export const classifyHandler = app.openapi(postClassifyRoute, (c) => {
  throw new Error('Not implemented')
})
