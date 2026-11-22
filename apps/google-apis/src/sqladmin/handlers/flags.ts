import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1FlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const flagsHandler = app.openapi(getV1FlagsRoute, (c) => {
  throw new Error('Not implemented')
})
