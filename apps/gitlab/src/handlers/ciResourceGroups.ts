import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdResourceGroupsKeyCurrentJobRoute,
  getApiV4ProjectsIdResourceGroupsKeyRoute,
  getApiV4ProjectsIdResourceGroupsKeyUpcomingJobsRoute,
  getApiV4ProjectsIdResourceGroupsRoute,
  putApiV4ProjectsIdResourceGroupsKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ciResourceGroupsHandler = app
  .openapi(getApiV4ProjectsIdResourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdResourceGroupsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdResourceGroupsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdResourceGroupsKeyCurrentJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdResourceGroupsKeyUpcomingJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
