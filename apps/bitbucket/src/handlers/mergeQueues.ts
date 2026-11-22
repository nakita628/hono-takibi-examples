import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute,
  getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute,
  getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueRoute,
  getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidRoute,
  getRepositoriesWorkspaceRepoSlugMergeQueuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mergeQueuesHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugMergeQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
