import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDescribeDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDescribeDatasetHandler = app.openapi(
  postXAmzTargetRekognitionServiceDescribeDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
