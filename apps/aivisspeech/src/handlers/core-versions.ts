import { OpenAPIHono } from '@hono/zod-openapi'
import { getCoreVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const coreVersionsHandler = app.openapi(getCoreVersionsRoute, (c) => {
  throw new Error('Not implemented')
})
