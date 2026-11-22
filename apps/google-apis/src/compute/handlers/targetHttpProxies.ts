import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalTargetHttpProxiesTargetHttpProxyRoute,
  getProjectsProjectAggregatedTargetHttpProxiesRoute,
  getProjectsProjectGlobalTargetHttpProxiesRoute,
  getProjectsProjectGlobalTargetHttpProxiesTargetHttpProxyRoute,
  patchProjectsProjectGlobalTargetHttpProxiesTargetHttpProxyRoute,
  postProjectsProjectGlobalTargetHttpProxiesRoute,
  postProjectsProjectTargetHttpProxiesTargetHttpProxySetUrlMapRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetHttpProxiesHandler = app
  .openapi(getProjectsProjectAggregatedTargetHttpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalTargetHttpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetHttpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalTargetHttpProxiesTargetHttpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalTargetHttpProxiesTargetHttpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalTargetHttpProxiesTargetHttpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectTargetHttpProxiesTargetHttpProxySetUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
