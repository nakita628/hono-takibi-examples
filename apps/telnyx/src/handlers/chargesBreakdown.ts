import { OpenAPIHono } from '@hono/zod-openapi'
import { getChargesBreakdownRoute } from '../routes'

const app = new OpenAPIHono()

export const chargesBreakdownHandler = app.openapi(getChargesBreakdownRoute, (c) => {
  throw new Error('Not implemented')
})
