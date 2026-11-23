import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClusterSolutionJobIdRoute,
  postClusterCalculateRoute,
  postClusterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clusterHandler = app
  .openapi(postClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterSolutionJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
