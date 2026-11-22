import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCourseMappingsOfferingIdExternalCourseIdRoute,
  getCourseMappingsExternalcourseExternalCourseIdRoute,
  getCourseMappingsOfferingIdRoute,
  getCourseMappingsRoute,
  putCourseMappingsOfferingIdExternalCourseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const courseMappingsHandler = app
  .openapi(getCourseMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCourseMappingsExternalcourseExternalCourseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCourseMappingsOfferingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCourseMappingsOfferingIdExternalCourseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCourseMappingsOfferingIdExternalCourseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
