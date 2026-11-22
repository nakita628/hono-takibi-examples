import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerRemoveRegionsFromReplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerRemoveRegionsFromReplicationHandler = app.openapi(
  postXAmzTargetSecretsmanagerRemoveRegionsFromReplicationRoute,
  (c) => {},
)
