import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSchedulesIdOverridesOverrideIdRoute,
  deleteSchedulesIdRoute,
  getSchedulesIdAuditRecordsRoute,
  getSchedulesIdOverridesRoute,
  getSchedulesIdRoute,
  getSchedulesIdUsersRoute,
  getSchedulesRoute,
  postSchedulesIdOverridesRoute,
  postSchedulesPreviewRoute,
  postSchedulesRoute,
  putSchedulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app
  .openapi(getSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesIdAuditRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesIdOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchedulesIdOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSchedulesIdOverridesOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchedulesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
