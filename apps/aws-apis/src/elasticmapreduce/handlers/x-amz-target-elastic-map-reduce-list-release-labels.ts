import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListReleaseLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceListReleaseLabelsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListReleaseLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
