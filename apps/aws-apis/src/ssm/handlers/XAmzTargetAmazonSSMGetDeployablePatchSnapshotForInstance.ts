import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceHandler = app.openapi(
  postXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
