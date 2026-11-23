import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDeleteContactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsDeleteContactHandler = app.openapi(
  postXAmzTargetSSMContactsDeleteContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
