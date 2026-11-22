import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDBSubnetGroupRoute, postActionCreateDBSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDBSubnetGroupHandler = app
  .openapi(getActionCreateDBSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
