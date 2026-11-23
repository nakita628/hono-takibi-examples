import { OpenAPIHono } from '@hono/zod-openapi'
import { getMedpriceRoute } from '../routes'

const app = new OpenAPIHono()

export const medpriceHandler = app.openapi(getMedpriceRoute, (c) => {
  throw new Error('Not implemented')
})
