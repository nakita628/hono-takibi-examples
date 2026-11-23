import { OpenAPIHono } from '@hono/zod-openapi'
import { getAiGatewayProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const aiGatewayHandler = app.openapi(getAiGatewayProvidersRoute, (c) => {
  throw new Error('Not implemented')
})
