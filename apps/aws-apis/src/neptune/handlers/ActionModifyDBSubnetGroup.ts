import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyDBSubnetGroupRoute, postActionModifyDBSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDBSubnetGroupHandler = app
  .openapi(getActionModifyDBSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
