import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksTaskIDLabelsLabelIDRoute,
  deleteTasksTaskIDMembersUserIDRoute,
  deleteTasksTaskIDOwnersUserIDRoute,
  deleteTasksTaskIDRoute,
  deleteTasksTaskIDRunsRunIDRoute,
  getTasksRoute,
  getTasksTaskIDLabelsRoute,
  getTasksTaskIDLogsRoute,
  getTasksTaskIDMembersRoute,
  getTasksTaskIDOwnersRoute,
  getTasksTaskIDRoute,
  getTasksTaskIDRunsRoute,
  getTasksTaskIDRunsRunIDLogsRoute,
  getTasksTaskIDRunsRunIDRoute,
  patchTasksTaskIDRoute,
  postTasksRoute,
  postTasksTaskIDLabelsRoute,
  postTasksTaskIDMembersRoute,
  postTasksTaskIDOwnersRoute,
  postTasksTaskIDRunsRoute,
  postTasksTaskIDRunsRunIDRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksTaskIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTasksTaskIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksTaskIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksTaskIDMembersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksTaskIDOwnersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIDRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksTaskIDRunsRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDRunsRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDRunsRunIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIDRunsRunIDRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
