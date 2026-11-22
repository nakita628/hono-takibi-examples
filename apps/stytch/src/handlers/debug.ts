import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DebugWhoamiRoute } from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app.openapi(getV1DebugWhoamiRoute, (c) => {
  throw new Error('Not implemented')
})
