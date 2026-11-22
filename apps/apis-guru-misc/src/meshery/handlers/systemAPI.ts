import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSystemAdapterManageRoute,
  deleteApiSystemKubernetesRoute,
  getApiSystemAdaptersRoute,
  getApiSystemKubernetesPingRoute,
  getApiSystemMeshsyncGrafanaRoute,
  getApiSystemMeshsyncPrometheusRoute,
  getApiSystemSyncRoute,
  getApiSystemVersionRoute,
  postApiSystemAdapterManageRoute,
  postApiSystemAdapterOperationRoute,
  postApiSystemKubernetesContextsRoute,
  postApiSystemKubernetesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemAPIHandler = app
  .openapi(deleteApiSystemAdapterManageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemAdapterManageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemAdapterOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemAdaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSystemKubernetesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemKubernetesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSystemKubernetesContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemKubernetesPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemMeshsyncGrafanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemMeshsyncPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSystemVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
