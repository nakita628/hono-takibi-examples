import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobsIdRoute,
  getJobsCountRoute,
  getJobsIdRoute,
  getJobsRoute,
  postArtifactUploadRoute,
  postJobsIdRoute,
  postJobsRoute,
  putJobsIdActivateRoute,
  putJobsIdStartRoute,
  putJobsIdStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app
  .openapi(postArtifactUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJobsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
