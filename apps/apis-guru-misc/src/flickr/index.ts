import { OpenAPIHono } from '@hono/zod-openapi'
import {
  oauthHandler,
  restMethodFlickrFavoritesGetContextHandler,
  restMethodFlickrFavoritesGetListHandler,
  restMethodFlickrGalleriesGetPhotosHandler,
  restMethodFlickrGroupsDiscussRepliesGetInfoHandler,
  restMethodFlickrGroupsDiscussTopicsGetInfoHandler,
  restMethodFlickrGroupsDiscussTopicsGetListHandler,
  restMethodFlickrGroupsGetInfoHandler,
  restMethodFlickrGroupsPoolsGetContextHandler,
  restMethodFlickrGroupsPoolsGetPhotosHandler,
  restMethodFlickrPeopleGetInfoHandler,
  restMethodFlickrPeopleGetPhotosHandler,
  restMethodFlickrPhotolistGetContextHandler,
  restMethodFlickrPhotosetsGetContextHandler,
  restMethodFlickrPhotosetsGetListHandler,
  restMethodFlickrPhotosetsGetPhotosHandler,
  restMethodFlickrPhotosGetContextHandler,
  restMethodFlickrPhotosGetExifHandler,
  restMethodFlickrPhotosGetInfoHandler,
  restMethodFlickrPhotosGetSizesHandler,
  restMethodFlickrPhotosLicensesGetInfoHandler,
  restMethodFlickrPhotosSearchHandler,
  restMethodFlickrTestEchoHandler,
  uploadHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', oauthHandler)
  .route('/', restMethodFlickrFavoritesGetContextHandler)
  .route('/', restMethodFlickrFavoritesGetListHandler)
  .route('/', restMethodFlickrGalleriesGetPhotosHandler)
  .route('/', restMethodFlickrGroupsDiscussRepliesGetInfoHandler)
  .route('/', restMethodFlickrGroupsDiscussTopicsGetInfoHandler)
  .route('/', restMethodFlickrGroupsDiscussTopicsGetListHandler)
  .route('/', restMethodFlickrGroupsGetInfoHandler)
  .route('/', restMethodFlickrGroupsPoolsGetContextHandler)
  .route('/', restMethodFlickrGroupsPoolsGetPhotosHandler)
  .route('/', restMethodFlickrPeopleGetInfoHandler)
  .route('/', restMethodFlickrPeopleGetPhotosHandler)
  .route('/', restMethodFlickrPhotolistGetContextHandler)
  .route('/', restMethodFlickrPhotosGetContextHandler)
  .route('/', restMethodFlickrPhotosGetExifHandler)
  .route('/', restMethodFlickrPhotosGetInfoHandler)
  .route('/', restMethodFlickrPhotosGetSizesHandler)
  .route('/', restMethodFlickrPhotosLicensesGetInfoHandler)
  .route('/', restMethodFlickrPhotosSearchHandler)
  .route('/', restMethodFlickrPhotosetsGetContextHandler)
  .route('/', restMethodFlickrPhotosetsGetListHandler)
  .route('/', restMethodFlickrPhotosetsGetPhotosHandler)
  .route('/', restMethodFlickrTestEchoHandler)
  .route('/', uploadHandler)

export default app
