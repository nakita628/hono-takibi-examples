import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsAcceptPageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsAcceptPageHandler = app.openapi(
  postXAmzTargetSSMContactsAcceptPageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
