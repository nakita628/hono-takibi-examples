import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDefaultSubnetRoute, postActionCreateDefaultSubnetRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDefaultSubnetHandler = app
  .openapi(getActionCreateDefaultSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDefaultSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
