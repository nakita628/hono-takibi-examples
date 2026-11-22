import { OpenAPIHono } from '@hono/zod-openapi'
import { getClustersClusterIdRoute, getClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const clusterV3Handler = app
  .openapi(getClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
