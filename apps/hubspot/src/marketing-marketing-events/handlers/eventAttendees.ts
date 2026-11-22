import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateRoute,
  postMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateRoute,
  postMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateRoute,
  postMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventAttendeesHandler = app
  .openapi(
    postMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
