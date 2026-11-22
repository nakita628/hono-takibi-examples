import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdEnvironmentsEnvironmentIdRoute,
  deleteApiV4ProjectsIdEnvironmentsReviewAppsRoute,
  getApiV4ProjectsIdEnvironmentsEnvironmentIdRoute,
  getApiV4ProjectsIdEnvironmentsRoute,
  postApiV4ProjectsIdEnvironmentsEnvironmentIdStopRoute,
  postApiV4ProjectsIdEnvironmentsRoute,
  postApiV4ProjectsIdEnvironmentsStopStaleRoute,
  putApiV4ProjectsIdEnvironmentsEnvironmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getApiV4ProjectsIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdEnvironmentsReviewAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdEnvironmentsEnvironmentIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdEnvironmentsStopStaleRoute, (c) => {
    throw new Error('Not implemented')
  })
