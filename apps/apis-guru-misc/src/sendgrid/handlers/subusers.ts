import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubusersSubuserNameMonitorRoute,
  deleteSubusersSubuserNameRoute,
  getSubusersReputationsRoute,
  getSubusersRoute,
  getSubusersStatsMonthlyRoute,
  getSubusersStatsRoute,
  getSubusersStatsSumsRoute,
  getSubusersSubuserNameMonitorRoute,
  getSubusersSubuserNameStatsMonthlyRoute,
  patchSubusersSubuserNameRoute,
  postSubusersRoute,
  postSubusersSubuserNameMonitorRoute,
  putSubusersSubuserNameIpsRoute,
  putSubusersSubuserNameMonitorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subusersHandler = app
  .openapi(getSubusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersReputationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersStatsMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersStatsSumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubusersSubuserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubusersSubuserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubusersSubuserNameIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getSubusersSubuserNameStatsMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
