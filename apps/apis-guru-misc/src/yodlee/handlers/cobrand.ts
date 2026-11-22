import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCobrandConfigNotificationsEventsEventNameRoute,
  getCobrandConfigNotificationsEventsRoute,
  getCobrandPublicKeyRoute,
  postCobrandConfigNotificationsEventsEventNameRoute,
  postCobrandLoginRoute,
  postCobrandLogoutRoute,
  putCobrandConfigNotificationsEventsEventNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cobrandHandler = app
  .openapi(getCobrandConfigNotificationsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCobrandConfigNotificationsEventsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCobrandConfigNotificationsEventsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCobrandConfigNotificationsEventsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCobrandLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCobrandLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCobrandPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
