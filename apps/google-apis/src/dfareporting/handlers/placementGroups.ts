import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdPlacementGroupsIdRoute,
  getUserprofilesProfileIdPlacementGroupsRoute,
  patchUserprofilesProfileIdPlacementGroupsRoute,
  postUserprofilesProfileIdPlacementGroupsRoute,
  putUserprofilesProfileIdPlacementGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placementGroupsHandler = app
  .openapi(getUserprofilesProfileIdPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlacementGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
