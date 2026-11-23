import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListRotationShiftsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsListRotationShiftsHandler = app.openapi(
  postXAmzTargetSSMContactsListRotationShiftsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
