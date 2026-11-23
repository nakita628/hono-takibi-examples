import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectUsernameProjectBuildCacheRoute,
  deleteProjectUsernameProjectCheckoutKeyFingerprintRoute,
  deleteProjectUsernameProjectEnvvarNameRoute,
  getMeRoute,
  getProjectsRoute,
  getProjectUsernameProjectBuildNumArtifactsRoute,
  getProjectUsernameProjectBuildNumRoute,
  getProjectUsernameProjectBuildNumTestsRoute,
  getProjectUsernameProjectCheckoutKeyFingerprintRoute,
  getProjectUsernameProjectCheckoutKeyRoute,
  getProjectUsernameProjectEnvvarNameRoute,
  getProjectUsernameProjectEnvvarRoute,
  getProjectUsernameProjectRoute,
  getRecentBuildsRoute,
  postProjectUsernameProjectBuildNumCancelRoute,
  postProjectUsernameProjectBuildNumRetryRoute,
  postProjectUsernameProjectCheckoutKeyRoute,
  postProjectUsernameProjectEnvvarRoute,
  postProjectUsernameProjectRoute,
  postProjectUsernameProjectSshKeyRoute,
  postProjectUsernameProjectTreeBranchRoute,
  postUserHerokuKeyRoute,
} from './routes'
import {
  deleteProjectUsernameProjectBuildCacheRouteHandler,
  deleteProjectUsernameProjectCheckoutKeyFingerprintRouteHandler,
  deleteProjectUsernameProjectEnvvarNameRouteHandler,
  getMeRouteHandler,
  getProjectsRouteHandler,
  getProjectUsernameProjectBuildNumArtifactsRouteHandler,
  getProjectUsernameProjectBuildNumRouteHandler,
  getProjectUsernameProjectBuildNumTestsRouteHandler,
  getProjectUsernameProjectCheckoutKeyFingerprintRouteHandler,
  getProjectUsernameProjectCheckoutKeyRouteHandler,
  getProjectUsernameProjectEnvvarNameRouteHandler,
  getProjectUsernameProjectEnvvarRouteHandler,
  getProjectUsernameProjectRouteHandler,
  getRecentBuildsRouteHandler,
  postProjectUsernameProjectBuildNumCancelRouteHandler,
  postProjectUsernameProjectBuildNumRetryRouteHandler,
  postProjectUsernameProjectCheckoutKeyRouteHandler,
  postProjectUsernameProjectEnvvarRouteHandler,
  postProjectUsernameProjectRouteHandler,
  postProjectUsernameProjectSshKeyRouteHandler,
  postProjectUsernameProjectTreeBranchRouteHandler,
  postUserHerokuKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getProjectUsernameProjectRoute, getProjectUsernameProjectRouteHandler)
  .openapi(postProjectUsernameProjectRoute, postProjectUsernameProjectRouteHandler)
  .openapi(
    deleteProjectUsernameProjectBuildCacheRoute,
    deleteProjectUsernameProjectBuildCacheRouteHandler,
  )
  .openapi(
    getProjectUsernameProjectCheckoutKeyRoute,
    getProjectUsernameProjectCheckoutKeyRouteHandler,
  )
  .openapi(
    postProjectUsernameProjectCheckoutKeyRoute,
    postProjectUsernameProjectCheckoutKeyRouteHandler,
  )
  .openapi(
    deleteProjectUsernameProjectCheckoutKeyFingerprintRoute,
    deleteProjectUsernameProjectCheckoutKeyFingerprintRouteHandler,
  )
  .openapi(
    getProjectUsernameProjectCheckoutKeyFingerprintRoute,
    getProjectUsernameProjectCheckoutKeyFingerprintRouteHandler,
  )
  .openapi(getProjectUsernameProjectEnvvarRoute, getProjectUsernameProjectEnvvarRouteHandler)
  .openapi(postProjectUsernameProjectEnvvarRoute, postProjectUsernameProjectEnvvarRouteHandler)
  .openapi(
    deleteProjectUsernameProjectEnvvarNameRoute,
    deleteProjectUsernameProjectEnvvarNameRouteHandler,
  )
  .openapi(
    getProjectUsernameProjectEnvvarNameRoute,
    getProjectUsernameProjectEnvvarNameRouteHandler,
  )
  .openapi(postProjectUsernameProjectSshKeyRoute, postProjectUsernameProjectSshKeyRouteHandler)
  .openapi(
    postProjectUsernameProjectTreeBranchRoute,
    postProjectUsernameProjectTreeBranchRouteHandler,
  )
  .openapi(getProjectUsernameProjectBuildNumRoute, getProjectUsernameProjectBuildNumRouteHandler)
  .openapi(
    getProjectUsernameProjectBuildNumArtifactsRoute,
    getProjectUsernameProjectBuildNumArtifactsRouteHandler,
  )
  .openapi(
    postProjectUsernameProjectBuildNumCancelRoute,
    postProjectUsernameProjectBuildNumCancelRouteHandler,
  )
  .openapi(
    postProjectUsernameProjectBuildNumRetryRoute,
    postProjectUsernameProjectBuildNumRetryRouteHandler,
  )
  .openapi(
    getProjectUsernameProjectBuildNumTestsRoute,
    getProjectUsernameProjectBuildNumTestsRouteHandler,
  )
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(getRecentBuildsRoute, getRecentBuildsRouteHandler)
  .openapi(postUserHerokuKeyRoute, postUserHerokuKeyRouteHandler)

export default app
