import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvironmentsEnvironmentIdResourcesRoute,
  deleteEnvironmentsEnvironmentIdRoute,
  deleteProjectsProjectIdRoute,
  getEnvironmentsEnvironmentIdRoute,
  getEnvironmentsRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  patchEnvironmentsEnvironmentIdRoute,
  patchProjectsProjectIdRoute,
  postEnvironmentsEnvironmentIdResourcesRoute,
  postEnvironmentsRoute,
  postProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsEnvironmentsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvironmentsEnvironmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentsEnvironmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
