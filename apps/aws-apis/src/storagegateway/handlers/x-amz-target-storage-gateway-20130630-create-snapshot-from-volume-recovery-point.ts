import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointHandler =
  app.openapi(
    postXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
