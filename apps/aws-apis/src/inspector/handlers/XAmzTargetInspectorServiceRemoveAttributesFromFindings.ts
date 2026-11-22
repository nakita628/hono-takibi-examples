import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceRemoveAttributesFromFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceRemoveAttributesFromFindingsHandler = app.openapi(
  postXAmzTargetInspectorServiceRemoveAttributesFromFindingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
