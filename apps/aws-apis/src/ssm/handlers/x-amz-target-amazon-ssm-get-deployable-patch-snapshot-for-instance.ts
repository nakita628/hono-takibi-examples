import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetDeployablePatchSnapshotForInstanceHandler = app.openapi(
  postXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
