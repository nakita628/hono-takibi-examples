import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsIdSalesActivitiesRoute,
  getProjectsProjectIdActivitiesActivityIdCommentsRoute,
  getProjectsProjectIdActivitiesActivityIdRoute,
  getProjectsProjectIdActivitiesRoute,
  getProjectsProjectIdCommentsRoute,
  postProjectsIdSalesActivitiesRoute,
  postProjectsProjectIdActivitiesActivityIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activityHandler = app
  .openapi(getProjectsIdSalesActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdSalesActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdActivitiesActivityIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
