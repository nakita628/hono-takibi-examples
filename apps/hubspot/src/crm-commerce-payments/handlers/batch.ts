import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609CommercePaymentsBatchArchiveRoute,
  postCrmObjects202609CommercePaymentsBatchCreateRoute,
  postCrmObjects202609CommercePaymentsBatchReadRoute,
  postCrmObjects202609CommercePaymentsBatchUpdateRoute,
  postCrmObjects202609CommercePaymentsBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCrmObjects202609CommercePaymentsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
