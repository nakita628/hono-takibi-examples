import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueryJobsJobIdRoute,
  getQueryJobsJobIdRoute,
  getQueryJobsRoute,
  postQueryJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataQueriesHandler = app
  .openapi(getQueryJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
