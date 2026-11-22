import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosIdRoute,
  deleteApiV1VideosUploadResumableRoute,
  getApiV1VideoChannelsChannelHandleVideosRoute,
  getApiV1VideosCategoriesRoute,
  getApiV1VideosIdDescriptionRoute,
  getApiV1VideosIdRoute,
  getApiV1VideosLanguagesRoute,
  getApiV1VideosLicencesRoute,
  getApiV1VideosPrivaciesRoute,
  getApiV1VideosRoute,
  postApiV1VideosIdSourceRoute,
  postApiV1VideosIdTokenRoute,
  postApiV1VideosIdViewsRoute,
  postApiV1VideosUploadResumableRoute,
  postApiV1VideosUploadRoute,
  putApiV1VideosIdRoute,
  putApiV1VideosIdWatchingRoute,
  putApiV1VideosUploadResumableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoHandler = app
  .openapi(getApiV1VideoChannelsChannelHandleVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLicencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosPrivaciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
