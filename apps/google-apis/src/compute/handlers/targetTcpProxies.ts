import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalTargetTcpProxiesTargetTcpProxyRoute,
  getProjectsProjectAggregatedTargetTcpProxiesRoute,
  getProjectsProjectGlobalTargetTcpProxiesRoute,
  getProjectsProjectGlobalTargetTcpProxiesTargetTcpProxyRoute,
  postProjectsProjectGlobalTargetTcpProxiesRoute,
  postProjectsProjectGlobalTargetTcpProxiesTargetTcpProxySetBackendServiceRoute,
  postProjectsProjectGlobalTargetTcpProxiesTargetTcpProxySetProxyHeaderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetTcpProxiesHandler = app
  .openapi(getProjectsProjectAggregatedTargetTcpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalTargetTcpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetTcpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalTargetTcpProxiesTargetTcpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalTargetTcpProxiesTargetTcpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetTcpProxiesTargetTcpProxySetBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetTcpProxiesTargetTcpProxySetProxyHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
