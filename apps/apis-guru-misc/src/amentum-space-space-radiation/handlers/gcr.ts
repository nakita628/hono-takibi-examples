import { OpenAPIHono } from '@hono/zod-openapi'
import { getGcrFluxDlrRoute } from '../routes'

const app = new OpenAPIHono()

export const gcrHandler = app.openapi(getGcrFluxDlrRoute, (c) => {
  throw new Error('Not implemented')
})
