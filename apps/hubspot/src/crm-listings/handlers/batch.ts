import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects2026090420BatchArchiveRoute,
  postCrmObjects2026090420BatchCreateRoute,
  postCrmObjects2026090420BatchReadRoute,
  postCrmObjects2026090420BatchUpdateRoute,
  postCrmObjects2026090420BatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCrmObjects2026090420BatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
