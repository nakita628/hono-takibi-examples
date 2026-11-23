import { OpenAPIHono } from '@hono/zod-openapi'
import { getDxRoute } from '../routes'

const app = new OpenAPIHono()

export const dxHandler = app.openapi(getDxRoute, (c) => {
  throw new Error('Not implemented')
})
