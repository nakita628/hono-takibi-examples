import { OpenAPIHono } from '@hono/zod-openapi'
import { postRefreshTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const refreshTokenHandler = app.openapi(postRefreshTokenRoute, (c) => {
  throw new Error('Not implemented')
})
