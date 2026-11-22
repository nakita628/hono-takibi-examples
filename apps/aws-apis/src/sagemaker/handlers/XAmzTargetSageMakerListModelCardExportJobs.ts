import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelCardExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListModelCardExportJobsHandler = app.openapi(
  postXAmzTargetSageMakerListModelCardExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
