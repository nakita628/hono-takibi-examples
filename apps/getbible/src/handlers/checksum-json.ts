import { OpenAPIHono } from '@hono/zod-openapi'
import { getChecksumJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const checksumJsonHandler = app.openapi(getChecksumJsonRoute, (c) => {
  throw new Error('Not implemented')
})
