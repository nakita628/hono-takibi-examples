import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdFlexClustersNameRoute,
  getApiAtlasV2GroupsGroupIdFlexClustersNameRoute,
  getApiAtlasV2GroupsGroupIdFlexClustersRoute,
  patchApiAtlasV2GroupsGroupIdFlexClustersNameRoute,
  postApiAtlasV2GroupsGroupIdFlexClustersRoute,
  postApiAtlasV2GroupsGroupIdFlexClustersTenantUpgradeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flexClustersHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdFlexClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdFlexClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdFlexClustersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdFlexClustersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdFlexClustersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdFlexClustersTenantUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
