import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListRotationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsListRotationsHandler = app.openapi(
  postXAmzTargetSSMContactsListRotationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
