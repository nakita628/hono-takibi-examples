import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdvisoriesGhsaIdRoute,
  getAdvisoriesRoute,
  getOrgsOrgSecurityAdvisoriesRoute,
  getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute,
  getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute,
  getReposOwnerRepoSecurityAdvisoriesGhsaIdRoute,
  getReposOwnerRepoSecurityAdvisoriesRoute,
  patchReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute,
  patchReposOwnerRepoSecurityAdvisoriesGhsaIdRoute,
  postReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute,
  postReposOwnerRepoSecurityAdvisoriesGhsaIdCveRoute,
  postReposOwnerRepoSecurityAdvisoriesGhsaIdForksRoute,
  postReposOwnerRepoSecurityAdvisoriesReportsRoute,
  postReposOwnerRepoSecurityAdvisoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityAdvisoriesHandler = app
  .openapi(getAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdvisoriesGhsaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSecurityAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecurityAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecurityAdvisoriesGhsaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoSecurityAdvisoriesGhsaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesGhsaIdCveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesGhsaIdForksRoute, (c) => {
    throw new Error('Not implemented')
  })
