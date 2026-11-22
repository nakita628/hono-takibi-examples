import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLinodeInstancesLinodeIdIpsAddressRoute,
  getApiVersionLinodeInstancesLinodeIdIpsAddressRoute,
  getApiVersionLinodeInstancesLinodeIdIpsRoute,
  getApiVersionNetworkingIpsAddressRoute,
  getApiVersionNetworkingIpsRoute,
  getApiVersionVpcsIpsRoute,
  getApiVersionVpcsVpcIdIpsRoute,
  postApiVersionLinodeInstancesLinodeIdIpsRoute,
  postApiVersionNetworkingIpsAssignRoute,
  postApiVersionNetworkingIpsRoute,
  postApiVersionNetworkingIpsShareRoute,
  putApiVersionLinodeInstancesLinodeIdIpsAddressRoute,
  putApiVersionNetworkingIpsAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressesHandler = app
  .openapi(postApiVersionLinodeInstancesLinodeIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpsAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpsShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNetworkingIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsVpcIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
