import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetupRoute } from '../routes'

const app = new OpenAPIHono()

export const setupHandler = app.openapi(postSetupRoute, (c) => {
  throw new Error('Not implemented')
})
