import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1QuerySourcesRoute, postV1QuerySearchRoute, postV1QuerySuggestRoute } from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(postV1QuerySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuerySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuerySuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
