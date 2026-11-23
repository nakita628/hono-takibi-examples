import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1WebfontsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1WebfontsRoute, (c) => {
  throw new Error('Not implemented')
})
