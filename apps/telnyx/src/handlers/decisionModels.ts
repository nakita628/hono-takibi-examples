import { OpenAPIHono } from '@hono/zod-openapi'
import { postAiTypesafeV1SystemoneRoute } from '../routes'

const app = new OpenAPIHono()

export const decisionModelsHandler = app.openapi(postAiTypesafeV1SystemoneRoute, (c) => {
  throw new Error('Not implemented')
})
