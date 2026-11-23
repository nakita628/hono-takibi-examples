import { OpenAPIHono } from '@hono/zod-openapi'
import { getAwayStatusReasonsRoute } from '../routes'

const app = new OpenAPIHono()

export const awayStatusReasonsHandler = app.openapi(getAwayStatusReasonsRoute, (c) => {
  throw new Error('Not implemented')
})
