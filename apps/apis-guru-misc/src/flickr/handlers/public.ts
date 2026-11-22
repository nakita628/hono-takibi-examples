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
} from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getOauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrFavoritesGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrFavoritesGetListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrGalleriesGetPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrGroupsDiscussRepliesGetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrGroupsDiscussTopicsGetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrGroupsDiscussTopicsGetListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrGroupsGetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrGroupsPoolsGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrGroupsPoolsGetPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPeopleGetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPeopleGetPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotolistGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosGetExifRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosGetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosGetSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosLicensesGetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosetsGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosetsGetListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrPhotosetsGetPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestMethodFlickrTestEchoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
