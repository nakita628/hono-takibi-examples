import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetSubUserKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const getSubUserKeysHandler = app.openapi(getGetSubUserKeysRoute, (c) => {
  throw new Error('Not implemented')
})
