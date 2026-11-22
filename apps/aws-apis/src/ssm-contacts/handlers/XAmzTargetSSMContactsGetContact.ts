import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsGetContactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsGetContactHandler = app.openapi(
  postXAmzTargetSSMContactsGetContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
