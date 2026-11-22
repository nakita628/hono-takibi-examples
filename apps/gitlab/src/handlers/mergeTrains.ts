import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdMergeTrainsMergeRequestsMergeRequestIidRoute,
  getApiV4ProjectsIdMergeTrainsRoute,
  getApiV4ProjectsIdMergeTrainsTargetBranchRoute,
  postApiV4ProjectsIdMergeTrainsMergeRequestsMergeRequestIidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mergeTrainsHandler = app
  .openapi(getApiV4ProjectsIdMergeTrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeTrainsTargetBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeTrainsMergeRequestsMergeRequestIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeTrainsMergeRequestsMergeRequestIidRoute, (c) => {
    throw new Error('Not implemented')
  })
