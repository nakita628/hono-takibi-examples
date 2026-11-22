import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListPreviewRotationShiftsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsListPreviewRotationShiftsHandler = app.openapi(
  postXAmzTargetSSMContactsListPreviewRotationShiftsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
