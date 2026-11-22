import { OpenAPIHono } from '@hono/zod-openapi'
import { getVmInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const vmInfoHandler = app.openapi(getVmInfoRoute, (c) => {
  throw new Error('Not implemented')
})
