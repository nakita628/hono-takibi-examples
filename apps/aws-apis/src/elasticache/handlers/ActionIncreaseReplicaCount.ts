import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionIncreaseReplicaCountRoute, postActionIncreaseReplicaCountRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionIncreaseReplicaCountHandler = app
  .openapi(getActionIncreaseReplicaCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionIncreaseReplicaCountRoute, (c) => {
    throw new Error('Not implemented')
  })
