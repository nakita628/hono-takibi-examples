import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionReplaceRouteTableAssociationRoute,
  postActionReplaceRouteTableAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionReplaceRouteTableAssociationHandler = app
  .openapi(getActionReplaceRouteTableAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReplaceRouteTableAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
