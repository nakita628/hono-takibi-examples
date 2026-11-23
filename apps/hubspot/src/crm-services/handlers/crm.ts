import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects2026090162ServiceIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects2026090162Route,
  getCrmObjects2026090162ServiceIdRoute,
  getCrmObjects202609ServicesServiceIdAssociationsToObjectTypeRoute,
  patchCrmObjects2026090162ServiceIdRoute,
  postCrmObjects2026090162BatchArchiveRoute,
  postCrmObjects2026090162BatchCreateRoute,
  postCrmObjects2026090162BatchReadRoute,
  postCrmObjects2026090162BatchUpdateRoute,
  postCrmObjects2026090162BatchUpsertRoute,
  postCrmObjects2026090162Route,
  postCrmObjects2026090162SearchRoute,
  postCrmObjects202609ServicesGdprDeleteRoute,
  postCrmObjects202609ServicesMergeRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects2026090162Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090162Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090162BatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090162BatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090162BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090162BatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090162BatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090162SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects2026090162ServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects2026090162ServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects2026090162ServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ServicesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ServicesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ServicesServiceIdAssociationsToObjectTypeRoute, (c) => {
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
