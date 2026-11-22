import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AppsAppIdJwksRoute } from '../routes'

const app = new OpenAPIHono()

export const appHandler = app.openapi(getV1AppsAppIdJwksRoute, (c) => {
  throw new Error('Not implemented')
})
