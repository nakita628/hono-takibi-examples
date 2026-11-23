import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDistributeDatasetEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDistributeDatasetEntriesHandler = app.openapi(
  postXAmzTargetRekognitionServiceDistributeDatasetEntriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
