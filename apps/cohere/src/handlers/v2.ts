import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ChatRoute, postV2EmbedRoute, postV2ParseRoute, postV2RerankRoute } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RerankRoute, (c) => {
    throw new Error('Not implemented')
  })
