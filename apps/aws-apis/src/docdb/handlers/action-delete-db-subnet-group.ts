import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteDBSubnetGroupRoute, postActionDeleteDBSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteDbSubnetGroupHandler = app
  .openapi(getActionDeleteDBSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
