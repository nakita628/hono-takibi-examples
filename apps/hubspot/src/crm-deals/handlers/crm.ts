import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects20260903DealIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects20260903DealIdAssociationsToObjectTypeRoute,
  getCrmObjects20260903DealIdRoute,
  getCrmObjects20260903Route,
  patchCrmObjects20260903DealIdRoute,
  postCrmObjects20260903BatchArchiveRoute,
  postCrmObjects20260903BatchCreateRoute,
  postCrmObjects20260903BatchReadRoute,
  postCrmObjects20260903BatchUpdateRoute,
  postCrmObjects20260903BatchUpsertRoute,
  postCrmObjects20260903GdprDeleteRoute,
  postCrmObjects20260903MergeRoute,
  postCrmObjects20260903Route,
  postCrmObjects20260903SearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects20260903Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903BatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903BatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903BatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903BatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903GdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903MergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects20260903DealIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects20260903DealIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects20260903DealIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects20260903DealIdAssociationsToObjectTypeRoute, (c) => {
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
