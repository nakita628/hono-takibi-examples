import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsUntagResourceHandler = app.openapi(
  postXAmzTargetSSMContactsUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
