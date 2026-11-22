import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdPresetsPresetIdRoute,
  getMePresetsPresetIdVideosRoute,
  getUsersUserIdPresetsPresetIdVideosRoute,
  getVideosVideoIdPresetsPresetIdRoute,
  getVideosVideoIdTimelinethumbnailsThumbnailIdRoute,
  postVideosVideoIdTimelinethumbnailsRoute,
  putVideosVideoIdPresetsPresetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const embedPresetsVideosHandler = app
  .openapi(getMePresetsPresetIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPresetsPresetIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdTimelinethumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTimelinethumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
