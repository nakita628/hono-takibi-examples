import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerStopReplicationToReplicaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerStopReplicationToReplicaHandler = app.openapi(
  postXAmzTargetSecretsmanagerStopReplicationToReplicaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
