import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxyRoute,
  getProjectsProjectAggregatedTargetHttpsProxiesRoute,
  getProjectsProjectGlobalTargetHttpsProxiesRoute,
  getProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxyRoute,
  patchProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxyRoute,
  postProjectsProjectGlobalTargetHttpsProxiesRoute,
  postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetCertificateMapRoute,
  postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetQuicOverrideRoute,
  postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetSslPolicyRoute,
  postProjectsProjectTargetHttpsProxiesTargetHttpsProxySetSslCertificatesRoute,
  postProjectsProjectTargetHttpsProxiesTargetHttpsProxySetUrlMapRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetHttpsProxiesHandler = app
  .openapi(getProjectsProjectAggregatedTargetHttpsProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalTargetHttpsProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetHttpsProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetCertificateMapRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetQuicOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetSslPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectTargetHttpsProxiesTargetHttpsProxySetSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectTargetHttpsProxiesTargetHttpsProxySetUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
