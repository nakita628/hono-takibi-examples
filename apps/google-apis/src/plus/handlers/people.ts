import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPeopleRoute,
  getPeopleUserIdActivitiesCollectionRoute,
  getPeopleUserIdPeopleCollectionRoute,
  getPeopleUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app
  .openapi(getPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleUserIdActivitiesCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleUserIdPeopleCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
