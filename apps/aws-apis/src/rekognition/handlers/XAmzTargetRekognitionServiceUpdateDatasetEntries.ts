import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceUpdateDatasetEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceUpdateDatasetEntriesHandler = app.openapi(
  postXAmzTargetRekognitionServiceUpdateDatasetEntriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
