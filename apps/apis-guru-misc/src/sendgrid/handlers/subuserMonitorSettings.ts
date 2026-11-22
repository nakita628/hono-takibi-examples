import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubusersSubuserNameMonitorRoute,
  getSubusersSubuserNameMonitorRoute,
  postSubusersSubuserNameMonitorRoute,
  putSubusersSubuserNameMonitorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subuserMonitorSettingsHandler = app
  .openapi(deleteSubusersSubuserNameMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersSubuserNameMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubusersSubuserNameMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubusersSubuserNameMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
