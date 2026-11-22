import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609CompaniesBatchArchiveRoute,
  postCrmObjects202609CompaniesBatchCreateRoute,
  postCrmObjects202609CompaniesBatchReadRoute,
  postCrmObjects202609CompaniesBatchUpdateRoute,
  postCrmObjects202609CompaniesBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCrmObjects202609CompaniesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
