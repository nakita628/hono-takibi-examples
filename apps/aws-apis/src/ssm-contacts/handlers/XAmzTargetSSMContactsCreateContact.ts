import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsCreateContactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsCreateContactHandler = app.openapi(
  postXAmzTargetSSMContactsCreateContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
