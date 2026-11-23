import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicensesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app.openapi(getLicensesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
