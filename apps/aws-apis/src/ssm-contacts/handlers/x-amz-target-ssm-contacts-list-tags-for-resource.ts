import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsListTagsForResourceHandler = app.openapi(
  postXAmzTargetSSMContactsListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
