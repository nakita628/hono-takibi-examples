import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app.openapi(getV1ProfileRoute, (c) => {
  throw new Error('Not implemented')
})
