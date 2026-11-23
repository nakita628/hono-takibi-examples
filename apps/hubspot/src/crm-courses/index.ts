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
} from './routes'
import {
  deleteCrmObjects2026090410CourseIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects2026090410CourseIdRouteHandler,
  getCrmObjects2026090410RouteHandler,
  getCrmObjects202609CoursesCourseIdAssociationsToObjectTypeRouteHandler,
  patchCrmObjects2026090410CourseIdRouteHandler,
  postCrmObjects2026090410BatchArchiveRouteHandler,
  postCrmObjects2026090410BatchCreateRouteHandler,
  postCrmObjects2026090410BatchReadRouteHandler,
  postCrmObjects2026090410BatchUpdateRouteHandler,
  postCrmObjects2026090410BatchUpsertRouteHandler,
  postCrmObjects2026090410RouteHandler,
  postCrmObjects2026090410SearchRouteHandler,
  postCrmObjects202609CoursesGdprDeleteRouteHandler,
  postCrmObjects202609CoursesMergeRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects2026090410Route, getCrmObjects2026090410RouteHandler)
  .openapi(postCrmObjects2026090410Route, postCrmObjects2026090410RouteHandler)
  .openapi(
    postCrmObjects2026090410BatchArchiveRoute,
    postCrmObjects2026090410BatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects2026090410BatchCreateRoute,
    postCrmObjects2026090410BatchCreateRouteHandler,
  )
  .openapi(postCrmObjects2026090410BatchReadRoute, postCrmObjects2026090410BatchReadRouteHandler)
  .openapi(
    postCrmObjects2026090410BatchUpdateRoute,
    postCrmObjects2026090410BatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects2026090410BatchUpsertRoute,
    postCrmObjects2026090410BatchUpsertRouteHandler,
  )
  .openapi(postCrmObjects2026090410SearchRoute, postCrmObjects2026090410SearchRouteHandler)
  .openapi(getCrmObjects2026090410CourseIdRoute, getCrmObjects2026090410CourseIdRouteHandler)
  .openapi(deleteCrmObjects2026090410CourseIdRoute, deleteCrmObjects2026090410CourseIdRouteHandler)
  .openapi(patchCrmObjects2026090410CourseIdRoute, patchCrmObjects2026090410CourseIdRouteHandler)
  .openapi(
    postCrmObjects202609CoursesGdprDeleteRoute,
    postCrmObjects202609CoursesGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609CoursesMergeRoute, postCrmObjects202609CoursesMergeRouteHandler)
  .openapi(
    getCrmObjects202609CoursesCourseIdAssociationsToObjectTypeRoute,
    getCrmObjects202609CoursesCourseIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
