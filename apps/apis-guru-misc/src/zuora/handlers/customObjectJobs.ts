import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getObjectsJobsIdErrorsRoute,
  getObjectsJobsIdRoute,
  getObjectsJobsRoute,
  postObjectsJobsIdFilesRoute,
  postObjectsJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectJobsHandler = app
  .openapi(getObjectsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsJobsIdErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsJobsIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
