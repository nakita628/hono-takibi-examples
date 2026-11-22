import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdEndpointsEndpointIdRoute,
  getProjectsProjectIdEndpointsEndpointIdRoute,
  getProjectsProjectIdEndpointsRoute,
  patchProjectsProjectIdEndpointsEndpointIdRoute,
  postProjectsProjectIdEndpointsEndpointIdRestartRoute,
  postProjectsProjectIdEndpointsEndpointIdStartRoute,
  postProjectsProjectIdEndpointsEndpointIdSuspendRoute,
  postProjectsProjectIdEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endpointHandler = app
  .openapi(postProjectsProjectIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdEndpointsEndpointIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdEndpointsEndpointIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdEndpointsEndpointIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
