import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609PartnerClientsBatchArchiveRoute,
  postCrmObjects202609PartnerClientsBatchCreateRoute,
  postCrmObjects202609PartnerClientsBatchReadRoute,
  postCrmObjects202609PartnerClientsBatchUpdateRoute,
  postCrmObjects202609PartnerClientsBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCrmObjects202609PartnerClientsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
