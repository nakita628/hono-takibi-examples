import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
  deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  deleteUsersSelectedUserPropertiesAppKeyPropertyNameRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
  getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  getUsersSelectedUserPropertiesAppKeyPropertyNameRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
  putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  putUsersSelectedUserPropertiesAppKeyPropertyNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const propertiesHandler = app
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteUsersSelectedUserPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersSelectedUserPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
