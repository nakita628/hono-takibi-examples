import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClustersClusterIdBrokersBrokerIdPartitionReplicasRoute,
  getClustersClusterIdBrokersBrokerIdRoute,
  getClustersClusterIdBrokersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brokerV3Handler = app
  .openapi(getClustersClusterIdBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersBrokerIdPartitionReplicasRoute, (c) => {
    throw new Error('Not implemented')
  })
