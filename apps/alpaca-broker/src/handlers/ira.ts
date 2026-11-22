import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AccountsIraExcessContributionsRoute } from '../routes'

const app = new OpenAPIHono()

export const iraHandler = app.openapi(getV1AccountsIraExcessContributionsRoute, (c) => {
  throw new Error('Not implemented')
})
