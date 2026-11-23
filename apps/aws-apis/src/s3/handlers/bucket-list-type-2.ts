import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketListType2Route } from '../routes'

const app = new OpenAPIHono()

export const bucketListType2Handler = app.openapi(getBucketListType2Route, (c) => {
  throw new Error('Not implemented')
})
