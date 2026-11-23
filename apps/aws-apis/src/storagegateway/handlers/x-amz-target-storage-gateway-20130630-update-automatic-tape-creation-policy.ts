import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
