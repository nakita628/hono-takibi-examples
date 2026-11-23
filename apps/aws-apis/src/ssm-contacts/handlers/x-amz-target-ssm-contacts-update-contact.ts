import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsUpdateContactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsUpdateContactHandler = app.openapi(
  postXAmzTargetSSMContactsUpdateContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
