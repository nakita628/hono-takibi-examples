import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceListClustersHandler = app.openapi(
  postXAmzTargetElasticMapReduceListClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
