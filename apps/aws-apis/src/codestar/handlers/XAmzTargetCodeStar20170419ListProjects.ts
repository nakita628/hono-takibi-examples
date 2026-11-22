import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419ListProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419ListProjectsHandler = app.openapi(
  postXAmzTargetCodeStar20170419ListProjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
