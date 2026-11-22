import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
