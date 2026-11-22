import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayPrefixListReferenceRoute,
  postActionCreateTransitGatewayPrefixListReferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTransitGatewayPrefixListReferenceHandler = app
  .openapi(getActionCreateTransitGatewayPrefixListReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayPrefixListReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
