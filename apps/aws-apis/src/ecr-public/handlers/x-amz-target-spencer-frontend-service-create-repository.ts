import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceCreateRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceCreateRepositoryHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceCreateRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
