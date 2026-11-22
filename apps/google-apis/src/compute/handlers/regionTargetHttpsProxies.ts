import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxyRoute,
  getProjectsProjectRegionsRegionTargetHttpsProxiesRoute,
  getProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxyRoute,
  patchProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxyRoute,
  postProjectsProjectRegionsRegionTargetHttpsProxiesRoute,
  postProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxySetSslCertificatesRoute,
  postProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxySetUrlMapRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionTargetHttpsProxiesHandler = app
  .openapi(getProjectsProjectRegionsRegionTargetHttpsProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetHttpsProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxySetSslCertificatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxySetUrlMapRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
