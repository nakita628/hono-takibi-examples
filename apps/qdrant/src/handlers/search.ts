import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCollectionsCollectionNamePointsQueryBatchRoute,
  postCollectionsCollectionNamePointsQueryGroupsRoute,
  postCollectionsCollectionNamePointsQueryRoute,
  postCollectionsCollectionNamePointsSearchMatrixOffsetsRoute,
  postCollectionsCollectionNamePointsSearchMatrixPairsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(postCollectionsCollectionNamePointsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsQueryBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsQueryGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsSearchMatrixPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsSearchMatrixOffsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
