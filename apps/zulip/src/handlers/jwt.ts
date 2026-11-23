import { OpenAPIHono } from '@hono/zod-openapi'
import { postJwtFetchApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const jwtHandler = app.openapi(postJwtFetchApiKeyRoute, (c) => {
  throw new Error('Not implemented')
})
