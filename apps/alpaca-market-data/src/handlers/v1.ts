import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CorporateActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1CorporateActionsRoute, (c) => {
  throw new Error('Not implemented')
})
