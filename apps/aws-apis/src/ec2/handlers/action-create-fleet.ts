import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateFleetRoute, postActionCreateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateFleetHandler = app
  .openapi(getActionCreateFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
