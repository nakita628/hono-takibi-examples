import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LayingBodyRoute } from '../routes'

const app = new OpenAPIHono()

export const layingBodyHandler = app.openapi(getApiV1LayingBodyRoute, (c) => {
  throw new Error('Not implemented')
})
