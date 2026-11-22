import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminsRemoveRoute,
  getAdminsActivityLogEventTypesRoute,
  getAdminsActivityLogsRoute,
  getAdminsAdminIdRoute,
  getAdminsRoute,
  getMeRoute,
  postAdminsActivityLogsSearchRoute,
  putAdminsAdminIdAwayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminsHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminsAdminIdAwayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminsActivityLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminsActivityLogsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminsActivityLogEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
