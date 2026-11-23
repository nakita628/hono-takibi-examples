import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerRemoveRegionsFromReplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerRemoveRegionsFromReplicationHandler = app.openapi(
  postXAmzTargetSecretsmanagerRemoveRegionsFromReplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
