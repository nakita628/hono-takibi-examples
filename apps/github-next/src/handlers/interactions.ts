import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgInteractionLimitsRoute,
  deleteReposOwnerRepoInteractionLimitsPullsBypassListRoute,
  deleteReposOwnerRepoInteractionLimitsRoute,
  deleteUserInteractionLimitsRoute,
  getOrgsOrgInteractionLimitsPullsCreationCapRoute,
  getOrgsOrgInteractionLimitsRoute,
  getReposOwnerRepoInteractionLimitsPullsBypassListRoute,
  getReposOwnerRepoInteractionLimitsPullsCreationCapRoute,
  getReposOwnerRepoInteractionLimitsRoute,
  getUserInteractionLimitsRoute,
  patchOrgsOrgInteractionLimitsPullsCreationCapRoute,
  patchReposOwnerRepoInteractionLimitsPullsCreationCapRoute,
  putOrgsOrgInteractionLimitsRoute,
  putReposOwnerRepoInteractionLimitsPullsBypassListRoute,
  putReposOwnerRepoInteractionLimitsRoute,
  putUserInteractionLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interactionsHandler = app
  .openapi(getOrgsOrgInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInteractionLimitsPullsCreationCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgInteractionLimitsPullsCreationCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInteractionLimitsPullsBypassListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoInteractionLimitsPullsBypassListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoInteractionLimitsPullsBypassListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInteractionLimitsPullsCreationCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoInteractionLimitsPullsCreationCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
