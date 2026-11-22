import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1MembersIdRoute, getV1MembersIdRoute, getV1MembersRoute } from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(deleteV1MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
