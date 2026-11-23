import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClustersClusterIDRigsInstancesInstanceIDRoute,
  getClustersClusterIDRigsRigIDErrorsRoute,
  getClustersClusterIDRigsRigIDInstancesRoute,
  getClustersClusterIDRigsRoute,
  putClustersClusterIDRigsRigIDCapacityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clustersHandler = app
  .openapi(getClustersClusterIDRigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClustersClusterIDRigsRigIDCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIDRigsInstancesInstanceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIDRigsRigIDInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIDRigsRigIDErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
