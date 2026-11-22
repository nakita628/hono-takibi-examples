import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
