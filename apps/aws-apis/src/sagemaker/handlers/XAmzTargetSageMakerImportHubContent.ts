import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerImportHubContentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerImportHubContentHandler = app.openapi(
  postXAmzTargetSageMakerImportHubContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
