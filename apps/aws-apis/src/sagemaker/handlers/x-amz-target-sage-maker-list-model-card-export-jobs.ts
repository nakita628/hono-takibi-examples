import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelCardExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListModelCardExportJobsHandler = app.openapi(
  postXAmzTargetSageMakerListModelCardExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
