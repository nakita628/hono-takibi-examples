import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdAdvertiserLandingPagesIdRoute,
  getUserprofilesProfileIdAdvertiserLandingPagesRoute,
  patchUserprofilesProfileIdAdvertiserLandingPagesRoute,
  postUserprofilesProfileIdAdvertiserLandingPagesRoute,
  putUserprofilesProfileIdAdvertiserLandingPagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advertiserLandingPagesHandler = app
  .openapi(getUserprofilesProfileIdAdvertiserLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAdvertiserLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAdvertiserLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAdvertiserLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertiserLandingPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
