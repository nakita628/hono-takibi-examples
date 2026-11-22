import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAlbumsRoute,
  getAlbumsIdRoute,
  getAlbumsIdTracksRoute,
  getAlbumsRoute,
  getBrowseNewReleasesRoute,
  getMeAlbumsContainsRoute,
  getMeAlbumsRoute,
  putMeAlbumsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const albumsHandler = app
  .openapi(getAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseNewReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
