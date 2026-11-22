import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVirtualTariffsForPropertyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualTariffsForPropertyHandler = app.openapi(
  getApiVirtualTariffsForPropertyIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
