import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListDatasetEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceListDatasetEntriesHandler = app.openapi(
  postXAmzTargetRekognitionServiceListDatasetEntriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
