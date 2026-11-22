import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchArtifactsRoute, postSearchArtifactsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
