import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiArtistsCommentsCommentIdRoute,
  deleteApiArtistsIdRoute,
  getApiArtistsIdCommentsRoute,
  getApiArtistsIdRoute,
  getApiArtistsNamesRoute,
  getApiArtistsRoute,
  postApiArtistsCommentsCommentIdRoute,
  postApiArtistsIdCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artistApiHandler = app
  .openapi(getApiArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiArtistsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiArtistsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArtistsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiArtistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArtistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArtistsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiArtistsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
