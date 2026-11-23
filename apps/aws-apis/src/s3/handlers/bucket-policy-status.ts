import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketPolicyStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketPolicyStatusHandler = app.openapi(getBucketPolicyStatusRoute, (c) => {
  throw new Error('Not implemented')
})
