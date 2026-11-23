import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMacieServiceUpdateS3ResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMacieServiceUpdateS3ResourcesHandler = app.openapi(
  postXAmzTargetMacieServiceUpdateS3ResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
