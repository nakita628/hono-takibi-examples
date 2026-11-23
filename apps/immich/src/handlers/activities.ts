import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActivitiesIdRoute,
  getActivitiesRoute,
  getActivitiesStatisticsRoute,
  postActivitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app
  .openapi(getActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActivitiesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
