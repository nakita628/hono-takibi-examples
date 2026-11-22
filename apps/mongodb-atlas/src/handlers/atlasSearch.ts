import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexIdRoute,
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeploymentRoute,
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexNameRoute,
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesDatabaseNameCollectionNameRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeploymentRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexNameRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexIdRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeploymentRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexNameRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexIdRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeploymentRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const atlasSearchHandler = app
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesDatabaseNameCollectionNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
