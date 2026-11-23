import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceDescribeFindingsHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeFindingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
