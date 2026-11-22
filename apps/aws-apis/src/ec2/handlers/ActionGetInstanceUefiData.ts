import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetInstanceUefiDataRoute, postActionGetInstanceUefiDataRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetInstanceUefiDataHandler = app
  .openapi(getActionGetInstanceUefiDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetInstanceUefiDataRoute, (c) => {
    throw new Error('Not implemented')
  })
