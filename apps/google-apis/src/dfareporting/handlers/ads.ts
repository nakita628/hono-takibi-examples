import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdAdsIdRoute,
  getUserprofilesProfileIdAdsRoute,
  patchUserprofilesProfileIdAdsRoute,
  postUserprofilesProfileIdAdsRoute,
  putUserprofilesProfileIdAdsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adsHandler = app
  .openapi(getUserprofilesProfileIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
