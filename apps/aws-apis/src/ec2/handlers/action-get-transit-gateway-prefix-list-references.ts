import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayPrefixListReferencesRoute,
  postActionGetTransitGatewayPrefixListReferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetTransitGatewayPrefixListReferencesHandler = app
  .openapi(getActionGetTransitGatewayPrefixListReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayPrefixListReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
