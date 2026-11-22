import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCollectionsCollectionNamePointsIdRoute,
  postCollectionsCollectionNameFacetRoute,
  postCollectionsCollectionNamePointsBatchRoute,
  postCollectionsCollectionNamePointsCountRoute,
  postCollectionsCollectionNamePointsDeleteRoute,
  postCollectionsCollectionNamePointsPayloadClearRoute,
  postCollectionsCollectionNamePointsPayloadDeleteRoute,
  postCollectionsCollectionNamePointsPayloadRoute,
  postCollectionsCollectionNamePointsRoute,
  postCollectionsCollectionNamePointsScrollRoute,
  postCollectionsCollectionNamePointsVectorsDeleteRoute,
  putCollectionsCollectionNamePointsPayloadRoute,
  putCollectionsCollectionNamePointsRoute,
  putCollectionsCollectionNamePointsVectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pointsHandler = app
  .openapi(getCollectionsCollectionNamePointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNamePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNamePointsVectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsVectorsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsPayloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNamePointsPayloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsPayloadDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsPayloadClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameFacetRoute, (c) => {
    throw new Error('Not implemented')
  })
