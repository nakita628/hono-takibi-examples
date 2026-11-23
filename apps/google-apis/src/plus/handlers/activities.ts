import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActivitiesActivityIdCommentsRoute,
  getActivitiesActivityIdPeopleCollectionRoute,
  getActivitiesActivityIdRoute,
  getActivitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app
  .openapi(getActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActivitiesActivityIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActivitiesActivityIdPeopleCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
