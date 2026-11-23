import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDecreaseReplicaCountRoute, postActionDecreaseReplicaCountRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDecreaseReplicaCountHandler = app
  .openapi(getActionDecreaseReplicaCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDecreaseReplicaCountRoute, (c) => {
    throw new Error('Not implemented')
  })
