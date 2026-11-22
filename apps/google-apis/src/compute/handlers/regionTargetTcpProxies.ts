import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionTargetTcpProxiesTargetTcpProxyRoute,
  getProjectsProjectRegionsRegionTargetTcpProxiesRoute,
  getProjectsProjectRegionsRegionTargetTcpProxiesTargetTcpProxyRoute,
  postProjectsProjectRegionsRegionTargetTcpProxiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionTargetTcpProxiesHandler = app
  .openapi(getProjectsProjectRegionsRegionTargetTcpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetTcpProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionTargetTcpProxiesTargetTcpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionTargetTcpProxiesTargetTcpProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
