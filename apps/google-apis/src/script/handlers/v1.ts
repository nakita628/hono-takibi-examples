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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProcessesListScriptProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsScriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsScriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsScriptIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsScriptIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsScriptIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsScriptIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsScriptIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsScriptIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsScriptIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsScriptIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsScriptIdVersionsVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScriptsScriptIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
