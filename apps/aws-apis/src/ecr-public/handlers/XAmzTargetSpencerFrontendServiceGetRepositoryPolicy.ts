import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceGetRepositoryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceGetRepositoryPolicyHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceGetRepositoryPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
