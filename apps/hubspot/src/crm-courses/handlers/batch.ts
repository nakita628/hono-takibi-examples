import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects2026090410BatchArchiveRoute,
  postCrmObjects2026090410BatchCreateRoute,
  postCrmObjects2026090410BatchReadRoute,
  postCrmObjects2026090410BatchUpdateRoute,
  postCrmObjects2026090410BatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCrmObjects2026090410BatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090410BatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
