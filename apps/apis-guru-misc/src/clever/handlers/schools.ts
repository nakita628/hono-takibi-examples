import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchoolsIdDistrictRoute,
  getSchoolsIdRoute,
  getSchoolsIdSectionsRoute,
  getSchoolsIdStudentsRoute,
  getSchoolsIdTeachersRoute,
  getSchoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schoolsHandler = app
  .openapi(getSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchoolsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchoolsIdDistrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchoolsIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchoolsIdStudentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchoolsIdTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
