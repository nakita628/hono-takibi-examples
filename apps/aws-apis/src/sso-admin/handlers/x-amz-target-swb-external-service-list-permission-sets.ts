import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListPermissionSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListPermissionSetsHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListPermissionSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
