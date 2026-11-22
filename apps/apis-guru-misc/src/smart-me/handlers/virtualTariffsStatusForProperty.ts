import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVirtualTariffsStatusForPropertyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualTariffsStatusForPropertyHandler = app.openapi(
  getApiVirtualTariffsStatusForPropertyIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
