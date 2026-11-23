import { OpenAPIHono } from '@hono/zod-openapi'
import { getBase64ValueRoute } from '../routes'

const app = new OpenAPIHono()

export const base64Handler = app.openapi(getBase64ValueRoute, (c) => {
  throw new Error('Not implemented')
})
