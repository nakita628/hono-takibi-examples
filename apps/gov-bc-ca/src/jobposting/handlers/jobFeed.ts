import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndustriesRoute,
  getJobTypesRoute,
  getMajorProjectsRoute,
  getRegionsRoute,
  postJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobFeedHandler = app
  .openapi(getIndustriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMajorProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
