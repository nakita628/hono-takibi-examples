import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStudentsIdContactsRoute,
  getStudentsIdDistrictRoute,
  getStudentsIdRoute,
  getStudentsIdSchoolRoute,
  getStudentsIdSectionsRoute,
  getStudentsIdTeachersRoute,
  getStudentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const studentsHandler = app
  .openapi(getStudentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudentsIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudentsIdDistrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudentsIdSchoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudentsIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudentsIdTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
