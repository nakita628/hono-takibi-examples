import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsScriptIdDeploymentsDeploymentIdRoute,
  getV1ProcessesListScriptProcessesRoute,
  getV1ProcessesRoute,
  getV1ProjectsScriptIdContentRoute,
  getV1ProjectsScriptIdDeploymentsDeploymentIdRoute,
  getV1ProjectsScriptIdDeploymentsRoute,
  getV1ProjectsScriptIdMetricsRoute,
  getV1ProjectsScriptIdRoute,
  getV1ProjectsScriptIdVersionsRoute,
  getV1ProjectsScriptIdVersionsVersionNumberRoute,
  postV1ProjectsRoute,
  postV1ProjectsScriptIdDeploymentsRoute,
  postV1ProjectsScriptIdVersionsRoute,
  postV1ScriptsScriptIdRunRoute,
  putV1ProjectsScriptIdContentRoute,
  putV1ProjectsScriptIdDeploymentsDeploymentIdRoute,
} from './routes'
import {
  deleteV1ProjectsScriptIdDeploymentsDeploymentIdRouteHandler,
  getV1ProcessesListScriptProcessesRouteHandler,
  getV1ProcessesRouteHandler,
  getV1ProjectsScriptIdContentRouteHandler,
  getV1ProjectsScriptIdDeploymentsDeploymentIdRouteHandler,
  getV1ProjectsScriptIdDeploymentsRouteHandler,
  getV1ProjectsScriptIdMetricsRouteHandler,
  getV1ProjectsScriptIdRouteHandler,
  getV1ProjectsScriptIdVersionsRouteHandler,
  getV1ProjectsScriptIdVersionsVersionNumberRouteHandler,
  postV1ProjectsRouteHandler,
  postV1ProjectsScriptIdDeploymentsRouteHandler,
  postV1ProjectsScriptIdVersionsRouteHandler,
  postV1ScriptsScriptIdRunRouteHandler,
  putV1ProjectsScriptIdContentRouteHandler,
  putV1ProjectsScriptIdDeploymentsDeploymentIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ProcessesRoute, getV1ProcessesRouteHandler)
  .openapi(getV1ProcessesListScriptProcessesRoute, getV1ProcessesListScriptProcessesRouteHandler)
  .openapi(postV1ProjectsRoute, postV1ProjectsRouteHandler)
  .openapi(getV1ProjectsScriptIdRoute, getV1ProjectsScriptIdRouteHandler)
  .openapi(getV1ProjectsScriptIdContentRoute, getV1ProjectsScriptIdContentRouteHandler)
  .openapi(putV1ProjectsScriptIdContentRoute, putV1ProjectsScriptIdContentRouteHandler)
  .openapi(getV1ProjectsScriptIdDeploymentsRoute, getV1ProjectsScriptIdDeploymentsRouteHandler)
  .openapi(postV1ProjectsScriptIdDeploymentsRoute, postV1ProjectsScriptIdDeploymentsRouteHandler)
  .openapi(
    deleteV1ProjectsScriptIdDeploymentsDeploymentIdRoute,
    deleteV1ProjectsScriptIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    getV1ProjectsScriptIdDeploymentsDeploymentIdRoute,
    getV1ProjectsScriptIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    putV1ProjectsScriptIdDeploymentsDeploymentIdRoute,
    putV1ProjectsScriptIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(getV1ProjectsScriptIdMetricsRoute, getV1ProjectsScriptIdMetricsRouteHandler)
  .openapi(getV1ProjectsScriptIdVersionsRoute, getV1ProjectsScriptIdVersionsRouteHandler)
  .openapi(postV1ProjectsScriptIdVersionsRoute, postV1ProjectsScriptIdVersionsRouteHandler)
  .openapi(
    getV1ProjectsScriptIdVersionsVersionNumberRoute,
    getV1ProjectsScriptIdVersionsVersionNumberRouteHandler,
  )
  .openapi(postV1ScriptsScriptIdRunRoute, postV1ScriptsScriptIdRunRouteHandler)

export default app
