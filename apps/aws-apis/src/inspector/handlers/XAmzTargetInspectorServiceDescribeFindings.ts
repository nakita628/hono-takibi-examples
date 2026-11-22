import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDescribeFindingsHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeFindingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
