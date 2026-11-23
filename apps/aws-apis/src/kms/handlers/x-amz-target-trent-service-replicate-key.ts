import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceReplicateKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceReplicateKeyHandler = app.openapi(
  postXAmzTargetTrentServiceReplicateKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
