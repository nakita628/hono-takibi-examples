import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpsPoolsPoolNameIpsIpRoute,
  deleteIpsPoolsPoolNameRoute,
  deleteIpsWarmupIpAddressRoute,
  getIpsAssignedRoute,
  getIpsIpAddressRoute,
  getIpsPoolsPoolNameRoute,
  getIpsPoolsRoute,
  getIpsRemainingRoute,
  getIpsRoute,
  getIpsWarmupIpAddressRoute,
  getIpsWarmupRoute,
  postIpsPoolsPoolNameIpsRoute,
  postIpsPoolsRoute,
  postIpsRoute,
  postIpsWarmupRoute,
  putIpsPoolsPoolNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipsHandler = app
  .openapi(getIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsAssignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpsPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpsPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsPoolsPoolNameIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpsPoolsPoolNameIpsIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsRemainingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpsWarmupIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsWarmupIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
