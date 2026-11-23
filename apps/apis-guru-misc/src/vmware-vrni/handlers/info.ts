import { OpenAPIHono } from '@hono/zod-openapi'
import { getInfoVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app.openapi(getInfoVersionRoute, (c) => {
  throw new Error('Not implemented')
})
