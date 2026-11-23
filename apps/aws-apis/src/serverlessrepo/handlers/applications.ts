import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdRoute,
  getApplicationsApplicationIdDependenciesRoute,
  getApplicationsApplicationIdPolicyRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsApplicationIdTemplatesTemplateIdRoute,
  getApplicationsApplicationIdVersionsRoute,
  getApplicationsRoute,
  patchApplicationsApplicationIdRoute,
  postApplicationsApplicationIdChangesetsRoute,
  postApplicationsApplicationIdTemplatesRoute,
  postApplicationsApplicationIdUnshareRoute,
  postApplicationsRoute,
  putApplicationsApplicationIdPolicyRoute,
  putApplicationsApplicationIdVersionsSemanticVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(postApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationIdVersionsSemanticVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdUnshareRoute, (c) => {
    throw new Error('Not implemented')
  })
