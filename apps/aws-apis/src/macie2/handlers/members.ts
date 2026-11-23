import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMembersIdRoute,
  getMembersIdRoute,
  getMembersRoute,
  postMembersDisassociateIdRoute,
  postMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(postMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersDisassociateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
