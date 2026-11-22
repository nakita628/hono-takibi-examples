import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSeriesMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesMembershipHandler = app.openapi(getApiSeriesMembershipRoute, (c) => {
  throw new Error('Not implemented')
})
