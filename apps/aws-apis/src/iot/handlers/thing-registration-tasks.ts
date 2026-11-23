import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getThingRegistrationTasksRoute,
  getThingRegistrationTasksTaskIdReportsReportTypeRoute,
  getThingRegistrationTasksTaskIdRoute,
  postThingRegistrationTasksRoute,
  putThingRegistrationTasksTaskIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thingRegistrationTasksHandler = app
  .openapi(getThingRegistrationTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingRegistrationTasksTaskIdReportsReportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingRegistrationTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThingRegistrationTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putThingRegistrationTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
