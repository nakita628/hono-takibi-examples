import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DetectEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DetectEntitiesHandler = app.openapi(
  postXAmzTargetComprehend20171127DetectEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
