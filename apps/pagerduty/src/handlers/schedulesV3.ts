import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3SchedulesIdCustomShiftsCustomShiftIdRoute,
  deleteV3SchedulesIdOverridesOverrideIdRoute,
  deleteV3SchedulesIdRotationsRotationIdEventsEventIdRoute,
  deleteV3SchedulesIdRotationsRotationIdRoute,
  deleteV3SchedulesIdRoute,
  getV3SchedulesIdAuditRecordsRoute,
  getV3SchedulesIdCustomShiftsCustomShiftIdRoute,
  getV3SchedulesIdCustomShiftsRoute,
  getV3SchedulesIdOverridesOverrideIdRoute,
  getV3SchedulesIdOverridesRoute,
  getV3SchedulesIdRotationsRotationIdEventsEventIdRoute,
  getV3SchedulesIdRotationsRotationIdEventsRoute,
  getV3SchedulesIdRotationsRotationIdRoute,
  getV3SchedulesIdRotationsRoute,
  getV3SchedulesIdRoute,
  getV3SchedulesRoute,
  postV3SchedulesIdCustomShiftsRoute,
  postV3SchedulesIdOverridesRoute,
  postV3SchedulesIdRotationsRotationIdEventsRoute,
  postV3SchedulesIdRotationsRoute,
  postV3SchedulesRoute,
  putV3SchedulesIdCustomShiftsCustomShiftIdRoute,
  putV3SchedulesIdOverridesOverrideIdRoute,
  putV3SchedulesIdRotationsRotationIdEventsEventIdRoute,
  putV3SchedulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesV3Handler = app
  .openapi(getV3SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3SchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdAuditRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdCustomShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SchedulesIdCustomShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdCustomShiftsCustomShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3SchedulesIdCustomShiftsCustomShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SchedulesIdCustomShiftsCustomShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SchedulesIdOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdOverridesOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3SchedulesIdOverridesOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SchedulesIdOverridesOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdRotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SchedulesIdRotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdRotationsRotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SchedulesIdRotationsRotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdRotationsRotationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SchedulesIdRotationsRotationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SchedulesIdRotationsRotationIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3SchedulesIdRotationsRotationIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SchedulesIdRotationsRotationIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
