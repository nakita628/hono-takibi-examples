import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosIdRoute,
  deleteApiV1VideosIdSourceFileRoute,
  deleteApiV1VideosIdSourceReplaceResumableRoute,
  deleteApiV1VideosUploadResumableRoute,
  getApiV1RecommendationsVideosRoute,
  getApiV1VideoChannelsChannelHandleVideosRoute,
  getApiV1VideosCategoriesRoute,
  getApiV1VideosIdRoute,
  getApiV1VideosIdSourceRoute,
  getApiV1VideosIdStoryboardsRoute,
  getApiV1VideosLanguagesRoute,
  getApiV1VideosLicencesRoute,
  getApiV1VideosPrivaciesRoute,
  getApiV1VideosRoute,
  postApiV1VideosIdDuplicateRoute,
  postApiV1VideosIdSourceReplaceResumableRoute,
  postApiV1VideosIdTokenRoute,
  postApiV1VideosIdViewsRoute,
  postApiV1VideosUploadResumableRoute,
  postApiV1VideosUploadRoute,
  putApiV1VideosIdRoute,
  putApiV1VideosIdSourceReplaceResumableRoute,
  putApiV1VideosUploadResumableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoHandler = app
  .openapi(postApiV1VideosIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecommendationsVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLicencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosPrivaciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosUploadResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdSourceFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdSourceReplaceResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdSourceReplaceResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdSourceReplaceResumableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStoryboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
