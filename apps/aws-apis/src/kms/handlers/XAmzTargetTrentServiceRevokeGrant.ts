import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceRevokeGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceRevokeGrantHandler = app.openapi(
  postXAmzTargetTrentServiceRevokeGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
