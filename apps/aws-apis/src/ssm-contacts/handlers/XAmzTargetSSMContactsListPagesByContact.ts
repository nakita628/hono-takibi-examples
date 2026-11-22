import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListPagesByContactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsListPagesByContactHandler = app.openapi(
  postXAmzTargetSSMContactsListPagesByContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
