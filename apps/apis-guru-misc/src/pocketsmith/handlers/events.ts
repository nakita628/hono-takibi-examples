import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsIdRoute,
  getEventsIdRoute,
  getScenariosIdEventsRoute,
  getUsersIdEventsRoute,
  postScenariosIdEventsRoute,
  putEventsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(deleteEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScenariosIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScenariosIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
