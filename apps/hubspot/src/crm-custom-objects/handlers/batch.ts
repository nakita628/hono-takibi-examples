import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609ObjectTypeBatchArchiveRoute,
  postCrmObjects202609ObjectTypeBatchCreateRoute,
  postCrmObjects202609ObjectTypeBatchReadRoute,
  postCrmObjects202609ObjectTypeBatchUpdateRoute,
  postCrmObjects202609ObjectTypeBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
  .openapi(postCrmObjects202609ObjectTypeBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
