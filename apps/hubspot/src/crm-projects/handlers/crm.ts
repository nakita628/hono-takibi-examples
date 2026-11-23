import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ProjectsProjectIdRoute,
  getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ProjectsProjectIdRoute,
  getCrmObjects202609ProjectsRoute,
  patchCrmObjects202609ProjectsProjectIdRoute,
  postCrmObjects202609ObjectTypeGdprDeleteRoute,
  postCrmObjects202609ProjectsBatchArchiveRoute,
  postCrmObjects202609ProjectsBatchCreateRoute,
  postCrmObjects202609ProjectsBatchReadRoute,
  postCrmObjects202609ProjectsBatchUpdateRoute,
  postCrmObjects202609ProjectsBatchUpsertRoute,
  postCrmObjects202609ProjectsMergeRoute,
  postCrmObjects202609ProjectsRoute,
  postCrmObjects202609ProjectsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCrmObjects202609ObjectTypeGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
