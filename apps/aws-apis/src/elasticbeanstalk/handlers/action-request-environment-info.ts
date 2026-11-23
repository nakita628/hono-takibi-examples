import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRequestEnvironmentInfoRoute,
  postActionRequestEnvironmentInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRequestEnvironmentInfoHandler = app
  .openapi(getActionRequestEnvironmentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRequestEnvironmentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
