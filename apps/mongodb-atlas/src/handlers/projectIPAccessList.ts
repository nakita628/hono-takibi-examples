import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdAccessListEntryValueRoute,
  getApiAtlasV2GroupsGroupIdAccessListEntryValueRoute,
  getApiAtlasV2GroupsGroupIdAccessListEntryValueStatusRoute,
  getApiAtlasV2GroupsGroupIdAccessListRoute,
  postApiAtlasV2GroupsGroupIdAccessListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectIPAccessListHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdAccessListEntryValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdAccessListEntryValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdAccessListEntryValueStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
