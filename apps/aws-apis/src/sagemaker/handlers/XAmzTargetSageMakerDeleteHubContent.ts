import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteHubContentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteHubContentHandler = app.openapi(
  postXAmzTargetSageMakerDeleteHubContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
