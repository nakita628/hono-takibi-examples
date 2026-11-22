import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActivitiesActivityIdRoute,
  getActivitiesRoute,
  getPeopleUserIdActivitiesCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app
  .openapi(getActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleUserIdActivitiesCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
