import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPromoteReadReplicaDBClusterRoute,
  postActionPromoteReadReplicaDBClusterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionPromoteReadReplicaDbClusterHandler = app
  .openapi(getActionPromoteReadReplicaDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPromoteReadReplicaDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
