import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksBlockIdRoute,
  deleteApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommitsRoute,
  deleteApiV4ProjectsIdMergeRequestsMergeRequestIidRoute,
  getApiV4GroupsIdMergeRequestsRoute,
  getApiV4MergeRequestsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidBlockeesRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksBlockIdRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidChangesRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidClosesIssuesRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidCommitsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommitsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidDiffsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidMergeRefRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidParticipantsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidPipelinesRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidRawDiffsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidRelatedIssuesRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidReviewersRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidTimeStatsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidVersionsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidVersionsVersionIdRoute,
  getApiV4ProjectsIdMergeRequestsRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidAddSpentTimeRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidCancelAutoMergeRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidCancelMergeWhenPipelineSucceedsRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommitsRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidPipelinesRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidResetSpentTimeRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidResetTimeEstimateRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidTimeEstimateRoute,
  postApiV4ProjectsIdMergeRequestsRoute,
  putApiV4ProjectsIdMergeRequestsMergeRequestIidMergeRoute,
  putApiV4ProjectsIdMergeRequestsMergeRequestIidRebaseRoute,
  putApiV4ProjectsIdMergeRequestsMergeRequestIidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mergeRequestsHandler = app
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidBlockeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4MergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidTimeEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidResetTimeEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidAddSpentTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidResetSpentTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidTimeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdMergeRequestsMergeRequestIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestsMergeRequestIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidDiffsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidRawDiffsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestsMergeRequestIidMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidMergeRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV4ProjectsIdMergeRequestsMergeRequestIidCancelMergeWhenPipelineSucceedsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidCancelAutoMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestsMergeRequestIidRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidClosesIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidRelatedIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
