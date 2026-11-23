import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsec2InstanceConnectServiceSendSshPublicKeyHandler = app.openapi(
  postXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
