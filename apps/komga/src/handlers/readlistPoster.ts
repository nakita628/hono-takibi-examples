import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ReadlistsIdThumbnailsThumbnailIdRoute,
  getApiV1ReadlistsIdThumbnailRoute,
  getApiV1ReadlistsIdThumbnailsRoute,
  getApiV1ReadlistsIdThumbnailsThumbnailIdRoute,
  postApiV1ReadlistsIdThumbnailsRoute,
  putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const readlistPosterHandler = app
  .openapi(getApiV1ReadlistsIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReadlistsIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReadlistsIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
