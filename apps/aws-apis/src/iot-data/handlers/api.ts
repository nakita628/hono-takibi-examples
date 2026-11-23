import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiThingsShadowListNamedShadowsForThingThingNameRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(
  getApiThingsShadowListNamedShadowsForThingThingNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
