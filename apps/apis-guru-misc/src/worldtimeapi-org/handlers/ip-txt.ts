import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpTxtRoute } from '../routes'

const app = new OpenAPIHono()

export const ipTxtHandler = app.openapi(getIpTxtRoute, (c) => {
  throw new Error('Not implemented')
})
