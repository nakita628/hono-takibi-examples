import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127BatchDetectEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127BatchDetectEntitiesHandler = app.openapi(
  postXAmzTargetComprehend20171127BatchDetectEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
