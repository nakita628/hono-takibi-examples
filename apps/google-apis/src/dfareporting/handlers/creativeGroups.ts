import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdCreativeGroupsIdRoute,
  getUserprofilesProfileIdCreativeGroupsRoute,
  patchUserprofilesProfileIdCreativeGroupsRoute,
  postUserprofilesProfileIdCreativeGroupsRoute,
  putUserprofilesProfileIdCreativeGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creativeGroupsHandler = app
  .openapi(getUserprofilesProfileIdCreativeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCreativeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCreativeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativeGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
