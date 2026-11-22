import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdAdvertiserGroupsIdRoute,
  getUserprofilesProfileIdAdvertiserGroupsIdRoute,
  getUserprofilesProfileIdAdvertiserGroupsRoute,
  patchUserprofilesProfileIdAdvertiserGroupsRoute,
  postUserprofilesProfileIdAdvertiserGroupsRoute,
  putUserprofilesProfileIdAdvertiserGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advertiserGroupsHandler = app
  .openapi(getUserprofilesProfileIdAdvertiserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAdvertiserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAdvertiserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAdvertiserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdAdvertiserGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertiserGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
