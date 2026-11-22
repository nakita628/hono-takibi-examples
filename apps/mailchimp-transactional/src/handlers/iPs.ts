import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIpsCancelWarmupRoute,
  postIpsCheckCustomDnsRoute,
  postIpsCreatePoolRoute,
  postIpsDeletePoolRoute,
  postIpsDeleteRoute,
  postIpsInfoRoute,
  postIpsListPoolsRoute,
  postIpsListRoute,
  postIpsPoolInfoRoute,
  postIpsProvisionRoute,
  postIpsSetCustomDnsRoute,
  postIpsSetPoolRoute,
  postIpsStartWarmupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const iPsHandler = app
  .openapi(postIpsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsStartWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsCancelWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsSetPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsListPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsPoolInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsCreatePoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsDeletePoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsCheckCustomDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsSetCustomDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
