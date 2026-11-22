import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDescribeCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDescribeCollectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceDescribeCollectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
