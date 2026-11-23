import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceUpdateDatasetEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceUpdateDatasetEntriesHandler = app.openapi(
  postXAmzTargetRekognitionServiceUpdateDatasetEntriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
