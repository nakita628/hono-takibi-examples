import { OpenAPIHono } from '@hono/zod-openapi'
import { getRemoteInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const remoteHandler = app.openapi(getRemoteInfoRoute, (c) => {
  throw new Error('Not implemented')
})
