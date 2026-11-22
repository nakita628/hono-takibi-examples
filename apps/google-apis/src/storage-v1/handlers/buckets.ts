import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketRoute,
  getBBucketIamRoute,
  getBBucketIamTestPermissionsRoute,
  getBBucketRoute,
  getBRoute,
  patchBBucketRoute,
  postBBucketLockRetentionPolicyRoute,
  postBRoute,
  putBBucketIamRoute,
  putBBucketRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketsHandler = app
  .openapi(getBRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketIamTestPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketLockRetentionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
