import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyRoute,
  postXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyRoute,
} from './routes'
import {
  postXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyRouteHandler,
  postXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyRoute,
    postXAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyRoute,
    postXAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyRouteHandler,
  )

export default app
