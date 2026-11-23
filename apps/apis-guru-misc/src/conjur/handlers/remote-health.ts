import { OpenAPIHono } from '@hono/zod-openapi'
import { getRemoteHealthRemoteRoute } from '../routes'

const app = new OpenAPIHono()

export const remoteHealthHandler = app.openapi(getRemoteHealthRemoteRoute, (c) => {
  throw new Error('Not implemented')
})
