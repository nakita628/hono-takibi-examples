import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TagIndexRoute,
  deleteApiV1TagObjectTypeObjectIdTagIndexRoute,
  deleteApiV1TagPkFavoritesIndexRoute,
  deleteApiV1TagPkRoute,
  getApiV1TagFavoriteStatusIndexRoute,
  getApiV1TagGetObjectsIndexRoute,
  getApiV1TagIndexRoute,
  getApiV1TagInfoRoute,
  getApiV1TagPkRoute,
  getApiV1TagRelatedColumnNameRoute,
  postApiV1TagBulkCreateRoute,
  postApiV1TagIndexRoute,
  postApiV1TagObjectTypeObjectIdIndexRoute,
  postApiV1TagPkFavoritesIndexRoute,
  putApiV1TagPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(deleteApiV1TagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagBulkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagFavoriteStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagGetObjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagObjectTypeObjectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagObjectTypeObjectIdTagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TagPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
