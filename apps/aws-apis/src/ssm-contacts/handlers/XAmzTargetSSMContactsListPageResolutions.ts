import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListPageResolutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsListPageResolutionsHandler = app.openapi(
  postXAmzTargetSSMContactsListPageResolutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
