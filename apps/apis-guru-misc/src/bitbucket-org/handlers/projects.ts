import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute,
  deleteWorkspacesWorkspaceProjectsProjectKeyRoute,
  getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRoute,
  getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute,
  getWorkspacesWorkspaceProjectsProjectKeyRoute,
  postWorkspacesWorkspaceProjectsRoute,
  putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute,
  putWorkspacesWorkspaceProjectsProjectKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postWorkspacesWorkspaceProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
