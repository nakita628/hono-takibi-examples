import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminUsersIdRoute,
  getAdminUsersIdCalendarHeatmapRoute,
  getAdminUsersIdPreferencesRoute,
  getAdminUsersIdRoute,
  getAdminUsersIdSessionsRoute,
  getAdminUsersIdStatisticsRoute,
  getAdminUsersRoute,
  postAdminUsersIdRestoreRoute,
  postAdminUsersRoute,
  putAdminUsersIdPreferencesRoute,
  putAdminUsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersAdminHandler = app
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdCalendarHeatmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
