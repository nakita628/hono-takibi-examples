import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDecreaseNodeGroupsInGlobalReplicationGroupRoute,
  postActionDecreaseNodeGroupsInGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDecreaseNodeGroupsInGlobalReplicationGroupHandler = app
  .openapi(getActionDecreaseNodeGroupsInGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDecreaseNodeGroupsInGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
