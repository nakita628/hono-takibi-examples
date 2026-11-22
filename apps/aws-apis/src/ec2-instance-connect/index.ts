import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyHandler,
  XAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSEC2InstanceConnectServiceSendSSHPublicKeyHandler)
  .route('/', XAmzTargetAWSEC2InstanceConnectServiceSendSerialConsoleSSHPublicKeyHandler)

export default app
