import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPromoteReadReplicaRoute, postActionPromoteReadReplicaRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPromoteReadReplicaHandler = app
  .openapi(getActionPromoteReadReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPromoteReadReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
