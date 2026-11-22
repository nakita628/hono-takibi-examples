import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DetectPiiEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DetectPiiEntitiesHandler = app.openapi(
  postXAmzTargetComprehend20171127DetectPiiEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
