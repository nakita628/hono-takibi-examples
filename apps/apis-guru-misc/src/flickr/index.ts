import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthAccessTokenRoute,
  getOauthRequestTokenRoute,
  getRestMethodFlickrFavoritesGetContextRoute,
  getRestMethodFlickrFavoritesGetListRoute,
  getRestMethodFlickrGalleriesGetPhotosRoute,
  getRestMethodFlickrGroupsDiscussRepliesGetInfoRoute,
  getRestMethodFlickrGroupsDiscussTopicsGetInfoRoute,
  getRestMethodFlickrGroupsDiscussTopicsGetListRoute,
  getRestMethodFlickrGroupsGetInfoRoute,
  getRestMethodFlickrGroupsPoolsGetContextRoute,
  getRestMethodFlickrGroupsPoolsGetPhotosRoute,
  getRestMethodFlickrPeopleGetInfoRoute,
  getRestMethodFlickrPeopleGetPhotosRoute,
  getRestMethodFlickrPhotolistGetContextRoute,
  getRestMethodFlickrPhotosetsGetContextRoute,
  getRestMethodFlickrPhotosetsGetListRoute,
  getRestMethodFlickrPhotosetsGetPhotosRoute,
  getRestMethodFlickrPhotosGetContextRoute,
  getRestMethodFlickrPhotosGetExifRoute,
  getRestMethodFlickrPhotosGetInfoRoute,
  getRestMethodFlickrPhotosGetSizesRoute,
  getRestMethodFlickrPhotosLicensesGetInfoRoute,
  getRestMethodFlickrPhotosSearchRoute,
  getRestMethodFlickrTestEchoRoute,
  postUploadRoute,
} from './routes'
import {
  getOauthAccessTokenRouteHandler,
  getOauthRequestTokenRouteHandler,
  getRestMethodFlickrFavoritesGetContextRouteHandler,
  getRestMethodFlickrFavoritesGetListRouteHandler,
  getRestMethodFlickrGalleriesGetPhotosRouteHandler,
  getRestMethodFlickrGroupsDiscussRepliesGetInfoRouteHandler,
  getRestMethodFlickrGroupsDiscussTopicsGetInfoRouteHandler,
  getRestMethodFlickrGroupsDiscussTopicsGetListRouteHandler,
  getRestMethodFlickrGroupsGetInfoRouteHandler,
  getRestMethodFlickrGroupsPoolsGetContextRouteHandler,
  getRestMethodFlickrGroupsPoolsGetPhotosRouteHandler,
  getRestMethodFlickrPeopleGetInfoRouteHandler,
  getRestMethodFlickrPeopleGetPhotosRouteHandler,
  getRestMethodFlickrPhotolistGetContextRouteHandler,
  getRestMethodFlickrPhotosetsGetContextRouteHandler,
  getRestMethodFlickrPhotosetsGetListRouteHandler,
  getRestMethodFlickrPhotosetsGetPhotosRouteHandler,
  getRestMethodFlickrPhotosGetContextRouteHandler,
  getRestMethodFlickrPhotosGetExifRouteHandler,
  getRestMethodFlickrPhotosGetInfoRouteHandler,
  getRestMethodFlickrPhotosGetSizesRouteHandler,
  getRestMethodFlickrPhotosLicensesGetInfoRouteHandler,
  getRestMethodFlickrPhotosSearchRouteHandler,
  getRestMethodFlickrTestEchoRouteHandler,
  postUploadRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getOauthAccessTokenRoute, getOauthAccessTokenRouteHandler)
  .openapi(getOauthRequestTokenRoute, getOauthRequestTokenRouteHandler)
  .openapi(
    getRestMethodFlickrFavoritesGetContextRoute,
    getRestMethodFlickrFavoritesGetContextRouteHandler,
  )
  .openapi(
    getRestMethodFlickrFavoritesGetListRoute,
    getRestMethodFlickrFavoritesGetListRouteHandler,
  )
  .openapi(
    getRestMethodFlickrGalleriesGetPhotosRoute,
    getRestMethodFlickrGalleriesGetPhotosRouteHandler,
  )
  .openapi(
    getRestMethodFlickrGroupsDiscussRepliesGetInfoRoute,
    getRestMethodFlickrGroupsDiscussRepliesGetInfoRouteHandler,
  )
  .openapi(
    getRestMethodFlickrGroupsDiscussTopicsGetInfoRoute,
    getRestMethodFlickrGroupsDiscussTopicsGetInfoRouteHandler,
  )
  .openapi(
    getRestMethodFlickrGroupsDiscussTopicsGetListRoute,
    getRestMethodFlickrGroupsDiscussTopicsGetListRouteHandler,
  )
  .openapi(getRestMethodFlickrGroupsGetInfoRoute, getRestMethodFlickrGroupsGetInfoRouteHandler)
  .openapi(
    getRestMethodFlickrGroupsPoolsGetContextRoute,
    getRestMethodFlickrGroupsPoolsGetContextRouteHandler,
  )
  .openapi(
    getRestMethodFlickrGroupsPoolsGetPhotosRoute,
    getRestMethodFlickrGroupsPoolsGetPhotosRouteHandler,
  )
  .openapi(getRestMethodFlickrPeopleGetInfoRoute, getRestMethodFlickrPeopleGetInfoRouteHandler)
  .openapi(getRestMethodFlickrPeopleGetPhotosRoute, getRestMethodFlickrPeopleGetPhotosRouteHandler)
  .openapi(
    getRestMethodFlickrPhotolistGetContextRoute,
    getRestMethodFlickrPhotolistGetContextRouteHandler,
  )
  .openapi(
    getRestMethodFlickrPhotosGetContextRoute,
    getRestMethodFlickrPhotosGetContextRouteHandler,
  )
  .openapi(getRestMethodFlickrPhotosGetExifRoute, getRestMethodFlickrPhotosGetExifRouteHandler)
  .openapi(getRestMethodFlickrPhotosGetInfoRoute, getRestMethodFlickrPhotosGetInfoRouteHandler)
  .openapi(getRestMethodFlickrPhotosGetSizesRoute, getRestMethodFlickrPhotosGetSizesRouteHandler)
  .openapi(
    getRestMethodFlickrPhotosLicensesGetInfoRoute,
    getRestMethodFlickrPhotosLicensesGetInfoRouteHandler,
  )
  .openapi(getRestMethodFlickrPhotosSearchRoute, getRestMethodFlickrPhotosSearchRouteHandler)
  .openapi(
    getRestMethodFlickrPhotosetsGetContextRoute,
    getRestMethodFlickrPhotosetsGetContextRouteHandler,
  )
  .openapi(
    getRestMethodFlickrPhotosetsGetListRoute,
    getRestMethodFlickrPhotosetsGetListRouteHandler,
  )
  .openapi(
    getRestMethodFlickrPhotosetsGetPhotosRoute,
    getRestMethodFlickrPhotosetsGetPhotosRouteHandler,
  )
  .openapi(getRestMethodFlickrTestEchoRoute, getRestMethodFlickrTestEchoRouteHandler)
  .openapi(postUploadRoute, postUploadRouteHandler)

export default app
