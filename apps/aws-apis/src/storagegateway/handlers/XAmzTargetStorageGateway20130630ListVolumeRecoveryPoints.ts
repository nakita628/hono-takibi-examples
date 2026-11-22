import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630ListVolumeRecoveryPointsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
