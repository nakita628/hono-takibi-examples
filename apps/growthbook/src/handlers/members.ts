import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1MembersIdRoute, getV1MembersRoute, postV1MembersIdRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getV1MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MembersIdRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
