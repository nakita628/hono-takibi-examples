import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCollectionRoute,
  getApiCollectionAllSeriesRoute,
  getApiCollectionMalStacksRoute,
  getApiCollectionNameExistsRoute,
  getApiCollectionRoute,
  getApiCollectionSingleRoute,
  postApiCollectionDeleteMultipleRoute,
  postApiCollectionImportStackRoute,
  postApiCollectionPromoteMultipleRoute,
  postApiCollectionUpdateForSeriesRoute,
  postApiCollectionUpdateRoute,
  postApiCollectionUpdateSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionHandler = app
  .openapi(getApiCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionSingleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionAllSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionPromoteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionUpdateForSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionUpdateSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionMalStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionImportStackRoute, (c) => {
    throw new Error('Not implemented')
  })
