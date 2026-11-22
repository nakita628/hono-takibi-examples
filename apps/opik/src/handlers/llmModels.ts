import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PrivateLlmModelsProfilesRoute, getV1PrivateLlmModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const llmModelsHandler = app
  .openapi(getV1PrivateLlmModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLlmModelsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
