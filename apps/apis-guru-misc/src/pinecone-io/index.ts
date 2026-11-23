import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameRoute,
  deleteIndexesIndexNameRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  getIndexesIndexNameRoute,
  getIndexesRoute,
  patchIndexesIndexNameRoute,
  postCollectionsRoute,
  postDescribeIndexStatsRoute,
  postIndexesRoute,
  postQueryRoute,
  postVectorsDeleteRoute,
  postVectorsFetchRoute,
  postVectorsUpdateRoute,
  postVectorsUpsertRoute,
} from './routes'
import {
  deleteCollectionsCollectionNameRouteHandler,
  deleteIndexesIndexNameRouteHandler,
  getCollectionsCollectionNameRouteHandler,
  getCollectionsRouteHandler,
  getIndexesIndexNameRouteHandler,
  getIndexesRouteHandler,
  patchIndexesIndexNameRouteHandler,
  postCollectionsRouteHandler,
  postDescribeIndexStatsRouteHandler,
  postIndexesRouteHandler,
  postQueryRouteHandler,
  postVectorsDeleteRouteHandler,
  postVectorsFetchRouteHandler,
  postVectorsUpdateRouteHandler,
  postVectorsUpsertRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(postCollectionsRoute, postCollectionsRouteHandler)
  .openapi(deleteCollectionsCollectionNameRoute, deleteCollectionsCollectionNameRouteHandler)
  .openapi(getCollectionsCollectionNameRoute, getCollectionsCollectionNameRouteHandler)
  .openapi(postDescribeIndexStatsRoute, postDescribeIndexStatsRouteHandler)
  .openapi(getIndexesRoute, getIndexesRouteHandler)
  .openapi(postIndexesRoute, postIndexesRouteHandler)
  .openapi(deleteIndexesIndexNameRoute, deleteIndexesIndexNameRouteHandler)
  .openapi(getIndexesIndexNameRoute, getIndexesIndexNameRouteHandler)
  .openapi(patchIndexesIndexNameRoute, patchIndexesIndexNameRouteHandler)
  .openapi(postQueryRoute, postQueryRouteHandler)
  .openapi(postVectorsDeleteRoute, postVectorsDeleteRouteHandler)
  .openapi(postVectorsFetchRoute, postVectorsFetchRouteHandler)
  .openapi(postVectorsUpdateRoute, postVectorsUpdateRouteHandler)
  .openapi(postVectorsUpsertRoute, postVectorsUpsertRouteHandler)

export default app
