import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimelineBucketRoute, getTimelineBucketsRoute } from '../routes'

const app = new OpenAPIHono()

export const timelineHandler = app
  .openapi(getTimelineBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimelineBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
