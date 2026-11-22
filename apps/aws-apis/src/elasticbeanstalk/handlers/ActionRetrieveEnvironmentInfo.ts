import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRetrieveEnvironmentInfoRoute,
  postActionRetrieveEnvironmentInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRetrieveEnvironmentInfoHandler = app
  .openapi(getActionRetrieveEnvironmentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRetrieveEnvironmentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
