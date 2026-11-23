import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGitopsSourcesIdRoute,
  getGitopsSourcesIdRoute,
  getGitopsSourcesIdWorkflowsRoute,
  getGitopsSourcesRoute,
  getGitopsSourcesSummaryRoute,
  getGitopsWorkflowsIdRoute,
  getGitopsWorkflowsRoute,
  getGitopsWorkflowsSummaryRoute,
  postGitopsRepoFilePreviewRoute,
  postGitopsSourcesGitRoute,
  postGitopsSourcesIdTestRoute,
  postGitopsSourcesTestRoute,
  putGitopsSourcesIdAccessRoute,
  putGitopsSourcesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gitopsHandler = app
  .openapi(postGitopsRepoFilePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitopsSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGitopsSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitopsSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGitopsSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGitopsSourcesIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGitopsSourcesIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitopsSourcesIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGitopsSourcesGitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitopsSourcesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGitopsSourcesTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitopsWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitopsWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitopsWorkflowsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
