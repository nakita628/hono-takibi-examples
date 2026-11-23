import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateSubnetRoute, postActionCreateSubnetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateSubnetHandler = app
  .openapi(getActionCreateSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
