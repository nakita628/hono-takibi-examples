import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListPageReceiptsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsListPageReceiptsHandler = app.openapi(
  postXAmzTargetSSMContactsListPageReceiptsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
