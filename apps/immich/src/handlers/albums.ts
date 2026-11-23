import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlbumsIdAssetsRoute,
  deleteAlbumsIdRoute,
  deleteAlbumsIdUserUserIdRoute,
  getAlbumsIdMapMarkersRoute,
  getAlbumsIdRoute,
  getAlbumsRoute,
  getAlbumsStatisticsRoute,
  patchAlbumsIdRoute,
  postAlbumsRoute,
  putAlbumsAssetsRoute,
  putAlbumsIdAssetsRoute,
  putAlbumsIdUsersRoute,
  putAlbumsIdUserUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const albumsHandler = app
  .openapi(getAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAlbumsAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlbumsIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAlbumsIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsIdMapMarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlbumsIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAlbumsIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAlbumsIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
