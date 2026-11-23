import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsec2InstanceConnectServiceSendSerialConsoleSshPublicKeyHandler =
  app.openapi(postXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
