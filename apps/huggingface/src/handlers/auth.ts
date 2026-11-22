import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiWhoamiV2Route } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(getApiWhoamiV2Route, (c) => {
  throw new Error('Not implemented')
})
