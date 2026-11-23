import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609FeesFeeIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609FeesFeeIdAssociationsToObjectTypeRoute,
  getCrmObjects202609FeesFeeIdRoute,
  getCrmObjects202609FeesRoute,
  patchCrmObjects202609FeesFeeIdRoute,
  postCrmObjects202609FeesBatchArchiveRoute,
  postCrmObjects202609FeesBatchCreateRoute,
  postCrmObjects202609FeesBatchReadRoute,
  postCrmObjects202609FeesBatchUpdateRoute,
  postCrmObjects202609FeesBatchUpsertRoute,
  postCrmObjects202609FeesGdprDeleteRoute,
  postCrmObjects202609FeesMergeRoute,
  postCrmObjects202609FeesRoute,
  postCrmObjects202609FeesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609FeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609FeesFeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609FeesFeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609FeesFeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609FeesFeeIdAssociationsToObjectTypeRoute, (c) => {
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
