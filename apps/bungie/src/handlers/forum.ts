import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexRoute,
  getForumGetForumTagSuggestionsIndexRoute,
  getForumGetPostAndParentAwaitingApprovalChildPostIdIndexRoute,
  getForumGetPostAndParentChildPostIdIndexRoute,
  getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexRoute,
  getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexRoute,
  getForumGetTopicForContentContentIdIndexRoute,
  getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexRoute,
  getForumPollTopicIdIndexRoute,
  postForumRecruitSummariesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const forumHandler = app
  .openapi(getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getForumGetPostAndParentChildPostIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForumGetPostAndParentAwaitingApprovalChildPostIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForumGetTopicForContentContentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForumGetForumTagSuggestionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForumPollTopicIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForumRecruitSummariesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
