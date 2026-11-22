import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AutnumAutnumIdRoute } from '../routes'

const app = new OpenAPIHono()

export const autnumHandler = app.openapi(getV1AutnumAutnumIdRoute, (c) => {
  throw new Error('Not implemented')
})
