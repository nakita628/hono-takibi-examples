import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
