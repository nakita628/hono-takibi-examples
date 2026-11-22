import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRequestEnvironmentInfoRoute,
  postActionRequestEnvironmentInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRequestEnvironmentInfoHandler = app
  .openapi(getActionRequestEnvironmentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRequestEnvironmentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
