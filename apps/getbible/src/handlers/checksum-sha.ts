import { OpenAPIHono } from '@hono/zod-openapi'
import { getChecksumShaRoute } from '../routes'

const app = new OpenAPIHono()

export const checksumShaHandler = app.openapi(getChecksumShaRoute, (c) => {
  throw new Error('Not implemented')
})
