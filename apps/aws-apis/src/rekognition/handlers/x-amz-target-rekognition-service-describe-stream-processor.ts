import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDescribeStreamProcessorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDescribeStreamProcessorHandler = app.openapi(
  postXAmzTargetRekognitionServiceDescribeStreamProcessorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
