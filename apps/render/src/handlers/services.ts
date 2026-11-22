import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesServiceIdAutoscalingRoute,
  deleteServicesServiceIdEnvVarsEnvVarKeyRoute,
  deleteServicesServiceIdRoute,
  deleteServicesServiceIdSecretFilesEnvVarKeyRoute,
  getServicesRoute,
  getServicesServiceIdEnvVarsEnvVarKeyRoute,
  getServicesServiceIdEnvVarsRoute,
  getServicesServiceIdEventsRoute,
  getServicesServiceIdInstancesRoute,
  getServicesServiceIdOutboundIpsRoute,
  getServicesServiceIdRoute,
  getServicesServiceIdSecretFilesEnvVarKeyRoute,
  getServicesServiceIdSecretFilesRoute,
  patchServicesServiceIdRoute,
  postServicesRoute,
  postServicesServiceIdCachePurgeRoute,
  postServicesServiceIdPreviewRoute,
  postServicesServiceIdRestartRoute,
  postServicesServiceIdResumeRoute,
  postServicesServiceIdScaleRoute,
  postServicesServiceIdSuspendRoute,
  putServicesServiceIdAutoscalingRoute,
  putServicesServiceIdEnvVarsEnvVarKeyRoute,
  putServicesServiceIdEnvVarsRoute,
  putServicesServiceIdSecretFilesEnvVarKeyRoute,
  putServicesServiceIdSecretFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdCachePurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdSecretFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdSecretFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdAutoscalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdAutoscalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOutboundIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
