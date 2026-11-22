import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceCreateRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceCreateRepositoryHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceCreateRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
