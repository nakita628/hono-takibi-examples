import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceDeleteRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceDeleteRepositoryHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceDeleteRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
