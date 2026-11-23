import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClassroomsClassroomIdAssignmentsRoute,
  getClassroomsClassroomIdRoute,
  getClassroomsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classroomsHandler = app
  .openapi(getClassroomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassroomsClassroomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassroomsClassroomIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
