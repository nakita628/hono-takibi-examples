import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceRevokeGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceRevokeGrantHandler = app.openapi(
  postXAmzTargetTrentServiceRevokeGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
