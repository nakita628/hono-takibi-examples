import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPeopleIdListsTypeSortRoute,
  getPeopleIdMoviesRoute,
  getPeopleIdRoute,
  getPeopleIdShowsRoute,
  getPeopleUpdatesIdStartDateRoute,
  getPeopleUpdatesStartDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app
  .openapi(getPeopleUpdatesIdStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleUpdatesStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdListsTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
