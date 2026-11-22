import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBBucketAnywhereCachesAnywhereCacheIdRoute,
  getBBucketAnywhereCachesRoute,
  patchBBucketAnywhereCachesAnywhereCacheIdRoute,
  postBBucketAnywhereCachesAnywhereCacheIdDisableRoute,
  postBBucketAnywhereCachesAnywhereCacheIdPauseRoute,
  postBBucketAnywhereCachesAnywhereCacheIdResumeRoute,
  postBBucketAnywhereCachesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anywhereCachesHandler = app
  .openapi(getBBucketAnywhereCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAnywhereCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketAnywhereCachesAnywhereCacheIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBBucketAnywhereCachesAnywhereCacheIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAnywhereCachesAnywhereCacheIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAnywhereCachesAnywhereCacheIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAnywhereCachesAnywhereCacheIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
