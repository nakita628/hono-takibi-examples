import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxyRoute,
  getProjectsProjectGlobalTargetGrpcProxiesRoute,
  getProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxyRoute,
  patchProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxyRoute,
  postProjectsProjectGlobalTargetGrpcProxiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetGrpcProxiesHandler = app
  .openapi(getProjectsProjectGlobalTargetGrpcProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalTargetGrpcProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
