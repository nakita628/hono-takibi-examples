import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelCardExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateModelCardExportJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelCardExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
