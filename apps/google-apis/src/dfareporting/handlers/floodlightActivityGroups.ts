import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdFloodlightActivityGroupsIdRoute,
  getUserprofilesProfileIdFloodlightActivityGroupsRoute,
  patchUserprofilesProfileIdFloodlightActivityGroupsRoute,
  postUserprofilesProfileIdFloodlightActivityGroupsRoute,
  putUserprofilesProfileIdFloodlightActivityGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const floodlightActivityGroupsHandler = app
  .openapi(getUserprofilesProfileIdFloodlightActivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdFloodlightActivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdFloodlightActivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdFloodlightActivityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightActivityGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
