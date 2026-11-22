import { OpenAPIHono } from '@hono/zod-openapi'
import { getClusteringDataPlanesRoute, getClusteringStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const clusteringHandler = app
  .openapi(getClusteringDataPlanesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusteringStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
