import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetFederationTokenRoute, postActionGetFederationTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetFederationTokenHandler = app
  .openapi(getActionGetFederationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetFederationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
