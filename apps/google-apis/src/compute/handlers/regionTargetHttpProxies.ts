import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxyRoute,
  getProjectsProjectRegionsRegionTargetHttpProxiesRoute,
  getProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxyRoute,
  postProjectsProjectRegionsRegionTargetHttpProxiesRoute,
  postProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxySetUrlMapRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionTargetHttpProxiesHandler = app
  .openapi(getProjectsProjectRegionsRegionTargetHttpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetHttpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxySetUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
