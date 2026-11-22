import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQueryjobsQueryjobIdResultsProjectIdRoute,
  getQueryjobsQueryjobIdResultsRoute,
  getQueryjobsQueryjobIdRoute,
  postQueryjobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryJobsHandler = app
  .openapi(postQueryjobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryjobsQueryjobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryjobsQueryjobIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryjobsQueryjobIdResultsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
