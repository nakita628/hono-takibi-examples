import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceSetRepositoryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceSetRepositoryPolicyHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceSetRepositoryPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
