import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectIntegrationEndpointIntegrationEndpointIdRoute,
  deleteProjectProjectIntegrationIntegrationIdRoute,
  getProjectProjectIntegrationEndpointIntegrationEndpointIdRoute,
  getProjectProjectIntegrationEndpointRoute,
  getProjectProjectIntegrationEndpointTypesRoute,
  getProjectProjectIntegrationIntegrationIdRoute,
  getProjectProjectIntegrationTypesRoute,
  getProjectProjectServiceServiceNameIntegrationRoute,
  postProjectProjectIntegrationEndpointRoute,
  postProjectProjectIntegrationRoute,
  putProjectProjectIntegrationEndpointIntegrationEndpointIdRoute,
  putProjectProjectIntegrationIntegrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceIntegrationsHandler = app
  .openapi(postProjectProjectIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectIntegrationEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectIntegrationEndpointIntegrationEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationEndpointIntegrationEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectIntegrationEndpointIntegrationEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationEndpointTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
