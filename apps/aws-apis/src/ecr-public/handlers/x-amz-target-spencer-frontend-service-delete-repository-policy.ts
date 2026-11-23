import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
