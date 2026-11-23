import { OpenAPIHono } from '@hono/zod-openapi'
import { getRateTableRoute } from '../routes'

const app = new OpenAPIHono()

export const rateTableHandler = app.openapi(getRateTableRoute, (c) => {
  throw new Error('Not implemented')
})
