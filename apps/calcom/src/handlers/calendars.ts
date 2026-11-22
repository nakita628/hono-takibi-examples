import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CalendarsBusyTimesRoute,
  getV2CalendarsCalendarCheckRoute,
  getV2CalendarsCalendarConnectRoute,
  getV2CalendarsCalendarSaveRoute,
  getV2CalendarsIcsFeedCheckRoute,
  getV2CalendarsRoute,
  postV2CalendarsCalendarCredentialsRoute,
  postV2CalendarsCalendarDisconnectRoute,
  postV2CalendarsIcsFeedSaveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarsHandler = app
  .openapi(postV2CalendarsIcsFeedSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsIcsFeedCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsBusyTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsCalendarCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsCalendarDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
