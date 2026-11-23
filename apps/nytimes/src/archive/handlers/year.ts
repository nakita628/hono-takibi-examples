import { OpenAPIHono } from '@hono/zod-openapi'
import { getYearMonthJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const yearHandler = app.openapi(getYearMonthJsonRoute, (c) => {
  throw new Error('Not implemented')
})
