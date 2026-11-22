import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDescribeProjectVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDescribeProjectVersionsHandler = app.openapi(
  postXAmzTargetRekognitionServiceDescribeProjectVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
