import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceDescribeClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetBaldrApiServiceDescribeClustersHandler = app.openapi(
  postXAmzTargetBaldrApiServiceDescribeClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
