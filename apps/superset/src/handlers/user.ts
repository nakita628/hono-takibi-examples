import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1UserUserIdAvatarPngRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(getApiV1UserUserIdAvatarPngRoute, (c) => {
  throw new Error('Not implemented')
})
