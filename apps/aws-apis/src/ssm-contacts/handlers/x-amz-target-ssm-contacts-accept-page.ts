import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsAcceptPageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsAcceptPageHandler = app.openapi(
  postXAmzTargetSSMContactsAcceptPageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
