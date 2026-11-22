import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSwitchoverReadReplicaRoute,
  postActionSwitchoverReadReplicaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSwitchoverReadReplicaHandler = app
  .openapi(getActionSwitchoverReadReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSwitchoverReadReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
