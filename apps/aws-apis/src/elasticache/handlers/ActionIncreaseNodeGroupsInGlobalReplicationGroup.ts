import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionIncreaseNodeGroupsInGlobalReplicationGroupRoute,
  postActionIncreaseNodeGroupsInGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionIncreaseNodeGroupsInGlobalReplicationGroupHandler = app
  .openapi(getActionIncreaseNodeGroupsInGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionIncreaseNodeGroupsInGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
