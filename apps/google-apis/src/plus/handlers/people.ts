import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActivitiesActivityIdPeopleCollectionRoute,
  getPeopleRoute,
  getPeopleUserIdPeopleCollectionRoute,
  getPeopleUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app
  .openapi(getActivitiesActivityIdPeopleCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleUserIdPeopleCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
