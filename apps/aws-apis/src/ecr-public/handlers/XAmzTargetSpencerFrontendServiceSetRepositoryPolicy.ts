import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceSetRepositoryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceSetRepositoryPolicyHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceSetRepositoryPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
