import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeachersIdDistrictRoute,
  getTeachersIdGradeLevelsRoute,
  getTeachersIdRoute,
  getTeachersIdSchoolRoute,
  getTeachersIdSectionsRoute,
  getTeachersIdStudentsRoute,
  getTeachersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teachersHandler = app
  .openapi(getTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeachersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeachersIdDistrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeachersIdGradeLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeachersIdSchoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeachersIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeachersIdStudentsRoute, (c) => {
    throw new Error('Not implemented')
  })
