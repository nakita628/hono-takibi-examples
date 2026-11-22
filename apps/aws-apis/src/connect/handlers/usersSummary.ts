import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const usersSummaryHandler = app.openapi(getUsersSummaryInstanceIdRoute, (c) => {
  throw new Error('Not implemented')
})
