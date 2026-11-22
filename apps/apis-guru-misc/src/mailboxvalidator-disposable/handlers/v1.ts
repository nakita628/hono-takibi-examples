import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1EmailDisposableRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1EmailDisposableRoute, (c) => {
  throw new Error('Not implemented')
})
