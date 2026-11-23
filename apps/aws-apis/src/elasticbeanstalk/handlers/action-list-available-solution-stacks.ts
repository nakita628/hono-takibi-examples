import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListAvailableSolutionStacksRoute,
  postActionListAvailableSolutionStacksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListAvailableSolutionStacksHandler = app
  .openapi(getActionListAvailableSolutionStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListAvailableSolutionStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
