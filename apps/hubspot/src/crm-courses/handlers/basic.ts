import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects2026090410CourseIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects2026090410CourseIdRoute,
  getCrmObjects2026090410Route,
  getCrmObjects202609CoursesCourseIdAssociationsToObjectTypeRoute,
  patchCrmObjects2026090410CourseIdRoute,
  postCrmObjects2026090410Route,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects2026090410Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects2026090410CourseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects2026090410CourseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects2026090410CourseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CoursesCourseIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
