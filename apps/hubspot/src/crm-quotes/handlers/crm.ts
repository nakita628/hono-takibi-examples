import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609QuotesQuoteIdRoute,
  getCrmObjects202609QuotesQuoteIdAssociationsToObjectTypeRoute,
  getCrmObjects202609QuotesQuoteIdRoute,
  getCrmObjects202609QuotesRoute,
  patchCrmObjects202609QuotesQuoteIdRoute,
  postCrmObjects202609QuotesBatchArchiveRoute,
  postCrmObjects202609QuotesBatchCreateRoute,
  postCrmObjects202609QuotesBatchReadRoute,
  postCrmObjects202609QuotesBatchUpdateRoute,
  postCrmObjects202609QuotesBatchUpsertRoute,
  postCrmObjects202609QuotesGdprDeleteRoute,
  postCrmObjects202609QuotesMergeRoute,
  postCrmObjects202609QuotesRoute,
  postCrmObjects202609QuotesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609QuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609QuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609QuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609QuotesQuoteIdAssociationsToObjectTypeRoute, (c) => {
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
