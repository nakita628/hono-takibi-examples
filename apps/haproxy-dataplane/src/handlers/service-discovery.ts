import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServiceDiscoveryAwsIdRoute,
  deleteServiceDiscoveryConsulIdRoute,
  getServiceDiscoveryAwsIdRoute,
  getServiceDiscoveryAwsRoute,
  getServiceDiscoveryConsulIdRoute,
  getServiceDiscoveryConsulRoute,
  postServiceDiscoveryAwsRoute,
  postServiceDiscoveryConsulRoute,
  putServiceDiscoveryAwsIdRoute,
  putServiceDiscoveryConsulIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceDiscoveryHandler = app
  .openapi(getServiceDiscoveryAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServiceDiscoveryAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServiceDiscoveryAwsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceDiscoveryAwsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServiceDiscoveryAwsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceDiscoveryConsulRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServiceDiscoveryConsulRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServiceDiscoveryConsulIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceDiscoveryConsulIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServiceDiscoveryConsulIdRoute, (c) => {
    throw new Error('Not implemented')
  })
