import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyTransitGatewayPrefixListReferenceRoute,
  postActionModifyTransitGatewayPrefixListReferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyTransitGatewayPrefixListReferenceHandler = app
  .openapi(getActionModifyTransitGatewayPrefixListReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTransitGatewayPrefixListReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
