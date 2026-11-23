import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsec2InstanceConnectServiceSendSerialConsoleSshPublicKeyHandler,
  xAmzTargetAwsec2InstanceConnectServiceSendSshPublicKeyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsec2InstanceConnectServiceSendSshPublicKeyHandler)
  .route('/', xAmzTargetAwsec2InstanceConnectServiceSendSerialConsoleSshPublicKeyHandler)

export default app
