import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEdgeJobsIdRoute,
  deleteEdgeJobsIdTasksTaskIDLogsRoute,
  getEdgeJobsIdFileRoute,
  getEdgeJobsIdRoute,
  getEdgeJobsIdTasksRoute,
  getEdgeJobsIdTasksTaskIDLogsRoute,
  getEdgeJobsRoute,
  postEdgeJobsCreateFileRoute,
  postEdgeJobsCreateStringRoute,
  postEdgeJobsIdTasksTaskIDLogsRoute,
  putEdgeJobsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const edgeJobsHandler = app
  .openapi(getEdgeJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEdgeJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEdgeJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeJobsIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeJobsIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEdgeJobsIdTasksTaskIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeJobsIdTasksTaskIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeJobsIdTasksTaskIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeJobsCreateFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeJobsCreateStringRoute, (c) => {
    throw new Error('Not implemented')
  })
