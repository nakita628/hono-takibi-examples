import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdJwksJwksIdRoute,
  deleteProjectsProjectIdPermissionsPermissionIdRoute,
  deleteProjectsProjectIdRoute,
  deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRoute,
  getProjectsProjectIdConnectionUriRoute,
  getProjectsProjectIdJwksRoute,
  getProjectsProjectIdPermissionsRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdVpcEndpointsRoute,
  getProjectsRoute,
  getProjectsSharedRoute,
  patchProjectsProjectIdRoute,
  postProjectsProjectIdJwksRoute,
  postProjectsProjectIdPermissionsRoute,
  postProjectsProjectIdVpcEndpointsVpcEndpointIdRoute,
  postProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsSharedRoute, (c) => {
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
  .openapi(getProjectsProjectIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdJwksJwksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdConnectionUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdVpcEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdVpcEndpointsVpcEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
