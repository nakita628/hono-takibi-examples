import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceReplicateKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceReplicateKeyHandler = app.openapi(
  postXAmzTargetTrentServiceReplicateKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
