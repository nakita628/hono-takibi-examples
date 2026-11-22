import { OpenAPIHono } from '@hono/zod-openapi'
import { postInitializeServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const InitializeServiceHandler = app.openapi(postInitializeServiceRoute, (c) => {
  throw new Error('Not implemented')
})
