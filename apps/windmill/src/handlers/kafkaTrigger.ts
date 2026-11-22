import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceKafkaTriggersDeletePathRoute,
  getWWorkspaceKafkaTriggersExistsPathRoute,
  getWWorkspaceKafkaTriggersGetPathRoute,
  getWWorkspaceKafkaTriggersListRoute,
  postWWorkspaceKafkaTriggersCommitOffsetsPathRoute,
  postWWorkspaceKafkaTriggersCreateRoute,
  postWWorkspaceKafkaTriggersResetOffsetsPathRoute,
  postWWorkspaceKafkaTriggersSetmodePathRoute,
  postWWorkspaceKafkaTriggersTestRoute,
  postWWorkspaceKafkaTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kafkaTriggerHandler = app
  .openapi(postWWorkspaceKafkaTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceKafkaTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceKafkaTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceKafkaTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceKafkaTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersResetOffsetsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersCommitOffsetsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
