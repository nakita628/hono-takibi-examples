import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceDescribeClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceDescribeClustersHandler = app.openapi(
  postXAmzTargetBaldrApiServiceDescribeClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
