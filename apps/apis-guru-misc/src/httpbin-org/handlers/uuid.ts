import { OpenAPIHono } from '@hono/zod-openapi'
import { getUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const uuidHandler = app.openapi(getUuidRoute, (c) => {
  throw new Error('Not implemented')
})
