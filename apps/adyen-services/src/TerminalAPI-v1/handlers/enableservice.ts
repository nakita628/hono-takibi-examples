import { OpenAPIHono } from '@hono/zod-openapi'
import { postEnableserviceRoute } from '../routes'

const app = new OpenAPIHono()

export const enableserviceHandler = app.openapi(postEnableserviceRoute, (c) => {
  throw new Error('Not implemented')
})
