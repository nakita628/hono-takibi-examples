import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectUsernameProjectBuildCacheRoute,
  deleteProjectUsernameProjectCheckoutKeyFingerprintRoute,
  deleteProjectUsernameProjectEnvvarNameRoute,
  getProjectUsernameProjectBuildNumArtifactsRoute,
  getProjectUsernameProjectBuildNumRoute,
  getProjectUsernameProjectBuildNumTestsRoute,
  getProjectUsernameProjectCheckoutKeyFingerprintRoute,
  getProjectUsernameProjectCheckoutKeyRoute,
  getProjectUsernameProjectEnvvarNameRoute,
  getProjectUsernameProjectEnvvarRoute,
  getProjectUsernameProjectRoute,
  postProjectUsernameProjectBuildNumCancelRoute,
  postProjectUsernameProjectBuildNumRetryRoute,
  postProjectUsernameProjectCheckoutKeyRoute,
  postProjectUsernameProjectEnvvarRoute,
  postProjectUsernameProjectRoute,
  postProjectUsernameProjectSshKeyRoute,
  postProjectUsernameProjectTreeBranchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app
  .openapi(getProjectUsernameProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectUsernameProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectUsernameProjectBuildCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectUsernameProjectCheckoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectUsernameProjectCheckoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectUsernameProjectCheckoutKeyFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectUsernameProjectCheckoutKeyFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectUsernameProjectEnvvarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectUsernameProjectEnvvarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectUsernameProjectEnvvarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectUsernameProjectEnvvarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectUsernameProjectSshKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectUsernameProjectTreeBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectUsernameProjectBuildNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectUsernameProjectBuildNumArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectUsernameProjectBuildNumCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectUsernameProjectBuildNumRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectUsernameProjectBuildNumTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
