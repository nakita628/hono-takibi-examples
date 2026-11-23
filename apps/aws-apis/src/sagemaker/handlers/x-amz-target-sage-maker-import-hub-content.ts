import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerImportHubContentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerImportHubContentHandler = app.openapi(
  postXAmzTargetSageMakerImportHubContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
