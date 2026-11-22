import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postInboundAddDomainRoute,
  postInboundAddRouteRoute,
  postInboundCheckDomainRoute,
  postInboundDeleteDomainRoute,
  postInboundDeleteRouteRoute,
  postInboundDomainsRoute,
  postInboundRoutesRoute,
  postInboundSendRawRoute,
  postInboundUpdateRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboundHandler = app
  .openapi(postInboundDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundAddDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundCheckDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundDeleteDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundAddRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundUpdateRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundDeleteRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboundSendRawRoute, (c) => {
    throw new Error('Not implemented')
  })
