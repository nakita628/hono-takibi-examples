import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdSitesIdRoute,
  getUserprofilesProfileIdSitesRoute,
  patchUserprofilesProfileIdSitesRoute,
  postUserprofilesProfileIdSitesRoute,
  putUserprofilesProfileIdSitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getUserprofilesProfileIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
