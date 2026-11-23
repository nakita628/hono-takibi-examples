import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute,
  deleteAppInstancesAppInstanceArnRoute,
  deleteAppInstancesAppInstanceArnStreamingConfigurationsRoute,
  getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute,
  getAppInstancesAppInstanceArnAdminsRoute,
  getAppInstancesAppInstanceArnRetentionSettingsRoute,
  getAppInstancesAppInstanceArnRoute,
  getAppInstancesAppInstanceArnStreamingConfigurationsRoute,
  getAppInstancesRoute,
  postAppInstancesAppInstanceArnAdminsRoute,
  postAppInstancesRoute,
  putAppInstancesAppInstanceArnRetentionSettingsRoute,
  putAppInstancesAppInstanceArnRoute,
  putAppInstancesAppInstanceArnStreamingConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appInstancesHandler = app
  .openapi(postAppInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppInstancesAppInstanceArnAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstancesAppInstanceArnAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppInstancesAppInstanceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstancesAppInstanceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppInstancesAppInstanceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppInstancesAppInstanceArnStreamingConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstancesAppInstanceArnStreamingConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppInstancesAppInstanceArnStreamingConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstancesAppInstanceArnRetentionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppInstancesAppInstanceArnRetentionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
