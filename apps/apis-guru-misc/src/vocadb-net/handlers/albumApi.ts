import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAlbumsCommentsCommentIdRoute,
  deleteApiAlbumsIdReviewsReviewIdRoute,
  deleteApiAlbumsIdRoute,
  getApiAlbumsIdCommentsRoute,
  getApiAlbumsIdReviewsRoute,
  getApiAlbumsIdRoute,
  getApiAlbumsIdTracksFieldsRoute,
  getApiAlbumsIdTracksRoute,
  getApiAlbumsIdUserCollectionsRoute,
  getApiAlbumsNamesRoute,
  getApiAlbumsNewRoute,
  getApiAlbumsRoute,
  getApiAlbumsTopRoute,
  postApiAlbumsCommentsCommentIdRoute,
  postApiAlbumsIdCommentsRoute,
  postApiAlbumsIdReviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const albumApiHandler = app
  .openapi(getApiAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAlbumsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAlbumsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAlbumsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAlbumsIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAlbumsIdReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdTracksFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdUserCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
