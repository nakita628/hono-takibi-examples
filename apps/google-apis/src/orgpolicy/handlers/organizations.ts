import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2ParentCustomConstraintsRoute, postV2ParentCustomConstraintsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getV2ParentCustomConstraintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentCustomConstraintsRoute, (c) => {
    throw new Error('Not implemented')
  })
