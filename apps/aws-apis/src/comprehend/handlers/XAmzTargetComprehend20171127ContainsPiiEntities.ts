import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ContainsPiiEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ContainsPiiEntitiesHandler = app.openapi(
  postXAmzTargetComprehend20171127ContainsPiiEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
