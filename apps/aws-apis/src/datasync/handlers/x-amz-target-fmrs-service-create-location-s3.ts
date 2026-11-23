import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationS3Route } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceCreateLocationS3Handler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationS3Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
