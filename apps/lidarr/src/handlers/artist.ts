import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ArtistIdRoute,
  getApiV1ArtistIdRoute,
  getApiV1ArtistRoute,
  postApiV1ArtistRoute,
  putApiV1ArtistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artistHandler = app
  .openapi(getApiV1ArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ArtistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ArtistRoute, (c) => {
    throw new Error('Not implemented')
  })
