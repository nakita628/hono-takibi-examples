import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerStopReplicationToReplicaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerStopReplicationToReplicaHandler = app.openapi(
  postXAmzTargetSecretsmanagerStopReplicationToReplicaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
