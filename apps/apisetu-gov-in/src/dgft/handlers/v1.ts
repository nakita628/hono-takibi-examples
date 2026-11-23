import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1IecIecRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1IecIecRoute, (c) => {
  throw new Error('Not implemented')
})
