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
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609QuotesQuoteIdRouteHandler,
  getCrmObjects202609QuotesQuoteIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609QuotesQuoteIdRouteHandler,
  getCrmObjects202609QuotesRouteHandler,
  patchCrmObjects202609QuotesQuoteIdRouteHandler,
  postCrmObjects202609QuotesBatchArchiveRouteHandler,
  postCrmObjects202609QuotesBatchCreateRouteHandler,
  postCrmObjects202609QuotesBatchReadRouteHandler,
  postCrmObjects202609QuotesBatchUpdateRouteHandler,
  postCrmObjects202609QuotesBatchUpsertRouteHandler,
  postCrmObjects202609QuotesGdprDeleteRouteHandler,
  postCrmObjects202609QuotesMergeRouteHandler,
  postCrmObjects202609QuotesRouteHandler,
  postCrmObjects202609QuotesSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609QuotesRoute, getCrmObjects202609QuotesRouteHandler)
  .openapi(postCrmObjects202609QuotesRoute, postCrmObjects202609QuotesRouteHandler)
  .openapi(
    postCrmObjects202609QuotesBatchArchiveRoute,
    postCrmObjects202609QuotesBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609QuotesBatchCreateRoute,
    postCrmObjects202609QuotesBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609QuotesBatchReadRoute,
    postCrmObjects202609QuotesBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609QuotesBatchUpdateRoute,
    postCrmObjects202609QuotesBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609QuotesBatchUpsertRoute,
    postCrmObjects202609QuotesBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609QuotesGdprDeleteRoute,
    postCrmObjects202609QuotesGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609QuotesMergeRoute, postCrmObjects202609QuotesMergeRouteHandler)
  .openapi(postCrmObjects202609QuotesSearchRoute, postCrmObjects202609QuotesSearchRouteHandler)
  .openapi(getCrmObjects202609QuotesQuoteIdRoute, getCrmObjects202609QuotesQuoteIdRouteHandler)
  .openapi(
    deleteCrmObjects202609QuotesQuoteIdRoute,
    deleteCrmObjects202609QuotesQuoteIdRouteHandler,
  )
  .openapi(patchCrmObjects202609QuotesQuoteIdRoute, patchCrmObjects202609QuotesQuoteIdRouteHandler)
  .openapi(
    getCrmObjects202609QuotesQuoteIdAssociationsToObjectTypeRoute,
    getCrmObjects202609QuotesQuoteIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
