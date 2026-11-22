import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1EmailFreeRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1EmailFreeRoute, (c) => {
  throw new Error('Not implemented')
})
