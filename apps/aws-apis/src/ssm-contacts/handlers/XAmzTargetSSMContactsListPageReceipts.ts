import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListPageReceiptsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsListPageReceiptsHandler = app.openapi(
  postXAmzTargetSSMContactsListPageReceiptsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
