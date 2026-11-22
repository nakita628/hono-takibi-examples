import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdAccountUserProfilesIdRoute,
  getUserprofilesProfileIdAccountUserProfilesRoute,
  patchUserprofilesProfileIdAccountUserProfilesRoute,
  postUserprofilesProfileIdAccountUserProfilesRoute,
  putUserprofilesProfileIdAccountUserProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountUserProfilesHandler = app
  .openapi(getUserprofilesProfileIdAccountUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAccountUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAccountUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAccountUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountUserProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
