import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1MediacoverAlbumAlbumIdFilenameRoute,
  getApiV1MediacoverArtistArtistIdFilenameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaCoverHandler = app
  .openapi(getApiV1MediacoverArtistArtistIdFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediacoverAlbumAlbumIdFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
