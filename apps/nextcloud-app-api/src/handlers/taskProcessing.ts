import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute,
  getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute,
  postOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskProcessingHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute, (c) => {
    throw new Error('Not implemented')
  })
