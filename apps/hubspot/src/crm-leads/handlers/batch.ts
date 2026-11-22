import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609LeadsBatchArchiveRoute,
  postCrmObjects202609LeadsBatchCreateRoute,
  postCrmObjects202609LeadsBatchReadRoute,
  postCrmObjects202609LeadsBatchUpdateRoute,
  postCrmObjects202609LeadsBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCrmObjects202609LeadsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
