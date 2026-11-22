import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsUpdateContactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsUpdateContactHandler = app.openapi(
  postXAmzTargetSSMContactsUpdateContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
