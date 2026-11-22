import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListRotationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsListRotationsHandler = app.openapi(
  postXAmzTargetSSMContactsListRotationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
