import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDescribeCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDescribeCollectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceDescribeCollectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
