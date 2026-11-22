import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419ListResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419ListResourcesHandler = app.openapi(
  postXAmzTargetCodeStar20170419ListResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
