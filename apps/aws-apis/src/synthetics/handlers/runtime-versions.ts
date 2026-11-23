import { OpenAPIHono } from '@hono/zod-openapi'
import { postRuntimeVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const runtimeVersionsHandler = app.openapi(postRuntimeVersionsRoute, (c) => {
  throw new Error('Not implemented')
})
