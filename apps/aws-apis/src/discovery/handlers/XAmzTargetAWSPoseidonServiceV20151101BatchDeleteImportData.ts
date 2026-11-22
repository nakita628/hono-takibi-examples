import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
