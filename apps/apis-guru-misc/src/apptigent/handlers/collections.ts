import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAddToCollectionRoute,
  postCollectionContainsNumberRoute,
  postCollectionContainsStringRoute,
  postCollectionEndsWithStringRoute,
  postCollectionStartsWithStringRoute,
  postCollectionToJSONRoute,
  postCollectionToXMLRoute,
  postCountCollectionRoute,
  postFilterCollectionRoute,
  postRemoveFromCollectionRoute,
  postReplaceValuesInCollectionRoute,
  postSortCollectionRoute,
  postSplitCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(postAddToCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionContainsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionContainsStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionEndsWithStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionStartsWithStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionToJSONRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionToXMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCountCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilterCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemoveFromCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReplaceValuesInCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSortCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSplitCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
