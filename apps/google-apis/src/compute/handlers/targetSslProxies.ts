import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalTargetSslProxiesTargetSslProxyRoute,
  getProjectsProjectGlobalTargetSslProxiesRoute,
  getProjectsProjectGlobalTargetSslProxiesTargetSslProxyRoute,
  postProjectsProjectGlobalTargetSslProxiesRoute,
  postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetBackendServiceRoute,
  postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetCertificateMapRoute,
  postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetProxyHeaderRoute,
  postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetSslCertificatesRoute,
  postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetSslPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetSslProxiesHandler = app
  .openapi(getProjectsProjectGlobalTargetSslProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetSslProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalTargetSslProxiesTargetSslProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalTargetSslProxiesTargetSslProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetCertificateMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetProxyHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetSslPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
