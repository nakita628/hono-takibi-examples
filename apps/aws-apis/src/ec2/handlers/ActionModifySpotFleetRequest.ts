import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifySpotFleetRequestRoute,
  postActionModifySpotFleetRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifySpotFleetRequestHandler = app
  .openapi(getActionModifySpotFleetRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifySpotFleetRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
