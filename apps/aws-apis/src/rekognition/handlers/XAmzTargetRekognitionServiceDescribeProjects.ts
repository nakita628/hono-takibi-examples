import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDescribeProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDescribeProjectsHandler = app.openapi(
  postXAmzTargetRekognitionServiceDescribeProjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
