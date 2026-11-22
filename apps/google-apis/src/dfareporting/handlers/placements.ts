import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdPlacementsIdRoute,
  getUserprofilesProfileIdPlacementsRoute,
  patchUserprofilesProfileIdPlacementsRoute,
  postUserprofilesProfileIdPlacementsGeneratetagsRoute,
  postUserprofilesProfileIdPlacementsRoute,
  putUserprofilesProfileIdPlacementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placementsHandler = app
  .openapi(getUserprofilesProfileIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdPlacementsGeneratetagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
