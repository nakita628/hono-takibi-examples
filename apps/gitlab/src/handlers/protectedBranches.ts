import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdProtectedBranchesNameRoute,
  deleteApiV4ProjectsIdProtectedBranchesNameRoute,
  getApiV4GroupsIdProtectedBranchesNameRoute,
  getApiV4GroupsIdProtectedBranchesRoute,
  getApiV4ProjectsIdProtectedBranchesNameRoute,
  getApiV4ProjectsIdProtectedBranchesRoute,
  patchApiV4GroupsIdProtectedBranchesNameRoute,
  patchApiV4ProjectsIdProtectedBranchesNameRoute,
  postApiV4GroupsIdProtectedBranchesRoute,
  postApiV4ProjectsIdProtectedBranchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const protectedBranchesHandler = app
  .openapi(getApiV4GroupsIdProtectedBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdProtectedBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdProtectedBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4GroupsIdProtectedBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdProtectedBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdProtectedBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdProtectedBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdProtectedBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdProtectedBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdProtectedBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
