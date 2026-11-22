import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsTagResourceHandler = app.openapi(
  postXAmzTargetSSMContactsTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
