import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShuttleJobsShuttleJobIdRoute,
  getShuttleJobsRoute,
  getShuttleJobsShuttleJobIdRoute,
  postShuttleJobsRoute,
  postShuttleJobsShuttleJobIdPrepareMigrationRoute,
  postShuttleJobsShuttleJobIdStartRoute,
  postShuttleJobsShuttleJobIdStopRoute,
  putShuttleJobsShuttleJobIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shuttleJobsHandler = app
  .openapi(getShuttleJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleJobsShuttleJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttleJobsShuttleJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttleJobsShuttleJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobsShuttleJobIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobsShuttleJobIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobsShuttleJobIdPrepareMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
