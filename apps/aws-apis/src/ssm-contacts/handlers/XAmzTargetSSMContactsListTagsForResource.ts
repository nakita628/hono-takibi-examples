import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsListTagsForResourceHandler = app.openapi(
  postXAmzTargetSSMContactsListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
