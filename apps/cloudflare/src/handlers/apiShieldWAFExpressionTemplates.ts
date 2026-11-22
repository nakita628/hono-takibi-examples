import { OpenAPIHono } from '@hono/zod-openapi'
import { postZonesZoneIdApiGatewayExpressionTemplateFallthroughRoute } from '../routes'

const app = new OpenAPIHono()

export const apiShieldWAFExpressionTemplatesHandler = app.openapi(
  postZonesZoneIdApiGatewayExpressionTemplateFallthroughRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
