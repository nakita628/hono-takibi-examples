import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects2026090410CourseIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects2026090410CourseIdRoute,
  getCrmObjects2026090410Route,
  getCrmObjects202609CoursesCourseIdAssociationsToObjectTypeRoute,
  patchCrmObjects2026090410CourseIdRoute,
  postCrmObjects2026090410BatchArchiveRoute,
  postCrmObjects2026090410BatchCreateRoute,
  postCrmObjects2026090410BatchReadRoute,
  postCrmObjects2026090410BatchUpdateRoute,
  postCrmObjects2026090410BatchUpsertRoute,
  postCrmObjects2026090410Route,
  postCrmObjects2026090410SearchRoute,
  postCrmObjects202609CoursesGdprDeleteRoute,
  postCrmObjects202609CoursesMergeRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects2026090410Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410SearchRoute, (c) => {
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
  .openapi(postCrmObjects202609CoursesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CoursesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CoursesCourseIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
