import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsTagResourceHandler = app.openapi(
  postXAmzTargetSSMContactsTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
