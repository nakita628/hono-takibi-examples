import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemsItemIdExternalIdInfosRoute,
  postItemsRemoteSearchApplyItemIdRoute,
  postItemsRemoteSearchBookRoute,
  postItemsRemoteSearchBoxSetRoute,
  postItemsRemoteSearchMovieRoute,
  postItemsRemoteSearchMusicAlbumRoute,
  postItemsRemoteSearchMusicArtistRoute,
  postItemsRemoteSearchMusicVideoRoute,
  postItemsRemoteSearchPersonRoute,
  postItemsRemoteSearchSeriesRoute,
  postItemsRemoteSearchTrailerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemLookupHandler = app
  .openapi(getItemsItemIdExternalIdInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchApplyItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchBoxSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchMusicAlbumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchMusicArtistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchMusicVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchTrailerRoute, (c) => {
    throw new Error('Not implemented')
  })
