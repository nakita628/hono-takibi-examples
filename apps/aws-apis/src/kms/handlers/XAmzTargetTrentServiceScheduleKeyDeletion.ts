import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceScheduleKeyDeletionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceScheduleKeyDeletionHandler = app.openapi(
  postXAmzTargetTrentServiceScheduleKeyDeletionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
