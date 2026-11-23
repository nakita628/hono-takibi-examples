import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSectionsIdDistrictRoute,
  getSectionsIdRoute,
  getSectionsIdSchoolRoute,
  getSectionsIdStudentsRoute,
  getSectionsIdTeacherRoute,
  getSectionsIdTeachersRoute,
  getSectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sectionsHandler = app
  .openapi(getSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSectionsIdDistrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSectionsIdSchoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSectionsIdStudentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSectionsIdTeacherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSectionsIdTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
