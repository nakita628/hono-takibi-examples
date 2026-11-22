import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteRestApi3FieldAssociationRoute, putRestApi3FieldAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const issueCustomFieldAssociationsHandler = app
  .openapi(deleteRestApi3FieldAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
