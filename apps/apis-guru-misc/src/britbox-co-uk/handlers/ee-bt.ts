import { OpenAPIHono } from '@hono/zod-openapi'
import { getEeBtEligibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const eeBtHandler = app.openapi(getEeBtEligibilityRoute, (c) => {
  throw new Error('Not implemented')
})
