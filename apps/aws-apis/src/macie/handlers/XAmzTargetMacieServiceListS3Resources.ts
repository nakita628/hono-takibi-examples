import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMacieServiceListS3ResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMacieServiceListS3ResourcesHandler = app.openapi(
  postXAmzTargetMacieServiceListS3ResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
