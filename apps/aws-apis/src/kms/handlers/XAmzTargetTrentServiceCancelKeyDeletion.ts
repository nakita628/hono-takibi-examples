import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceCancelKeyDeletionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceCancelKeyDeletionHandler = app.openapi(
  postXAmzTargetTrentServiceCancelKeyDeletionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
