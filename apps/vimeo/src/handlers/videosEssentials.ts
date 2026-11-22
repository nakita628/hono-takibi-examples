import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdRoute,
  getMeAppearancesRoute,
  getMeVideosRoute,
  getMeVideosVideoIdRoute,
  getUsersUserIdAppearancesRoute,
  getUsersUserIdVideosRoute,
  getUsersUserIdVideosVideoIdRoute,
  getVideosRoute,
  getVideosVideoIdRoute,
  patchVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosEssentialsHandler = app
  .openapi(getMeAppearancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAppearancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
