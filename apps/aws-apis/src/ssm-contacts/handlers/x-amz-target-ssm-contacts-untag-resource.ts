import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsUntagResourceHandler = app.openapi(
  postXAmzTargetSSMContactsUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
