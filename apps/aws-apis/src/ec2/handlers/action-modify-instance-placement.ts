import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyInstancePlacementRoute,
  postActionModifyInstancePlacementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyInstancePlacementHandler = app
  .openapi(getActionModifyInstancePlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyInstancePlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
