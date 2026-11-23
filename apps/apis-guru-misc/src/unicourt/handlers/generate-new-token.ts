import { OpenAPIHono } from '@hono/zod-openapi'
import { postGenerateNewTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const generateNewTokenHandler = app.openapi(postGenerateNewTokenRoute, (c) => {
  throw new Error('Not implemented')
})
