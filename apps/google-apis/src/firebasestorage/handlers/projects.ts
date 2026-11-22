import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaNameRoute,
  getV1betaParentBucketsRoute,
  postV1betaBucketAddFirebaseRoute,
  postV1betaBucketRemoveFirebaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1betaBucketAddFirebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaBucketRemoveFirebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
