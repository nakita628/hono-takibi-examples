import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CodeRefsRepositoriesRepoRoute,
  getApiV2CodeRefsExtinctionsRoute,
  getApiV2CodeRefsRepositoriesRepoBranchesBranchRoute,
  getApiV2CodeRefsRepositoriesRepoBranchesRoute,
  getApiV2CodeRefsRepositoriesRepoRoute,
  getApiV2CodeRefsRepositoriesRoute,
  getApiV2CodeRefsStatisticsProjectKeyRoute,
  getApiV2CodeRefsStatisticsRoute,
  patchApiV2CodeRefsRepositoriesRepoRoute,
  postApiV2CodeRefsRepositoriesRepoBranchDeleteTasksRoute,
  postApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEventsRoute,
  postApiV2CodeRefsRepositoriesRoute,
  putApiV2CodeRefsRepositoriesRepoBranchesBranchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codeReferencesHandler = app
  .openapi(getApiV2CodeRefsExtinctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeRefsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsRepositoriesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CodeRefsRepositoriesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CodeRefsRepositoriesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeRefsRepositoriesRepoBranchDeleteTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsRepositoriesRepoBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsRepositoriesRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CodeRefsRepositoriesRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsStatisticsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
