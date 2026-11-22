import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1EntityEntityIdRoute } from '../routes'

const app = new OpenAPIHono()

export const entityHandler = app.openapi(getV1EntityEntityIdRoute, (c) => {
  throw new Error('Not implemented')
})
