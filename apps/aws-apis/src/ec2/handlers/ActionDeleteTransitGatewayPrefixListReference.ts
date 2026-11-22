import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayPrefixListReferenceRoute,
  postActionDeleteTransitGatewayPrefixListReferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTransitGatewayPrefixListReferenceHandler = app
  .openapi(getActionDeleteTransitGatewayPrefixListReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayPrefixListReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
