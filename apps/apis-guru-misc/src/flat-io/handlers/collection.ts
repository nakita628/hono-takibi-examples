import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionRoute,
  deleteCollectionsCollectionScoresScoreRoute,
  getCollectionsCollectionRoute,
  getCollectionsCollectionScoresRoute,
  getCollectionsRoute,
  postCollectionsCollectionUntrashRoute,
  postCollectionsRoute,
  putCollectionsCollectionRoute,
  putCollectionsCollectionScoresScoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionScoresScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionScoresScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionUntrashRoute, (c) => {
    throw new Error('Not implemented')
  })
