import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceListKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceListKeysHandler = app.openapi(
  postXAmzTargetTrentServiceListKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
