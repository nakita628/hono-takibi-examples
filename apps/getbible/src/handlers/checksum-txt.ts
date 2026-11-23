import { OpenAPIHono } from '@hono/zod-openapi'
import { getChecksumTxtRoute } from '../routes'

const app = new OpenAPIHono()

export const checksumTxtHandler = app.openapi(getChecksumTxtRoute, (c) => {
  throw new Error('Not implemented')
})
