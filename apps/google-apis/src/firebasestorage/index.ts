import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaNameRoute,
  getV1betaParentBucketsRoute,
  postV1betaBucketAddFirebaseRoute,
  postV1betaBucketRemoveFirebaseRoute,
} from './routes'
import {
  getV1betaNameRouteHandler,
  getV1betaParentBucketsRouteHandler,
  postV1betaBucketAddFirebaseRouteHandler,
  postV1betaBucketRemoveFirebaseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1betaBucketAddFirebaseRoute, postV1betaBucketAddFirebaseRouteHandler)
  .openapi(postV1betaBucketRemoveFirebaseRoute, postV1betaBucketRemoveFirebaseRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(getV1betaParentBucketsRoute, getV1betaParentBucketsRouteHandler)

export default app
