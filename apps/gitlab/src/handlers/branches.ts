import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdRepositoryBranchesBranchRoute,
  deleteApiV4ProjectsIdRepositoryMergedBranchesRoute,
  getApiV4ProjectsIdRepositoryBranchesBranchRoute,
  getApiV4ProjectsIdRepositoryBranchesRoute,
  headApiV4ProjectsIdRepositoryBranchesBranchRoute,
  postApiV4ProjectsIdRepositoryBranchesRoute,
  putApiV4ProjectsIdRepositoryBranchesBranchProtectRoute,
  putApiV4ProjectsIdRepositoryBranchesBranchUnprotectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const branchesHandler = app
  .openapi(getApiV4ProjectsIdRepositoryBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV4ProjectsIdRepositoryBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRepositoryBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdRepositoryBranchesBranchProtectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdRepositoryBranchesBranchUnprotectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRepositoryMergedBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
