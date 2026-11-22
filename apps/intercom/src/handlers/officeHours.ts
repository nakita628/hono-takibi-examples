import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOfficeHoursSchedulesIdRoute,
  deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
  getOfficeHoursSchedulesIdRoute,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute,
  getOfficeHoursSchedulesRoute,
  postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute,
  postOfficeHoursSchedulesRoute,
  putOfficeHoursSchedulesIdRoute,
  putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const officeHoursHandler = app
  .openapi(getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficeHoursSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfficeHoursSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfficeHoursSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficeHoursSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfficeHoursSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
