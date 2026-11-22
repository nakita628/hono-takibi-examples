import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101StartExportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101StartExportTaskHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101StartExportTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
