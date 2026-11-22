import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609EmailsBatchArchiveRoute,
  postCrmObjects202609EmailsBatchCreateRoute,
  postCrmObjects202609EmailsBatchReadRoute,
  postCrmObjects202609EmailsBatchUpdateRoute,
  postCrmObjects202609EmailsBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCrmObjects202609EmailsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
