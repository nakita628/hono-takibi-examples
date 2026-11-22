import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsRoute,
  getV1NameRoute,
  getV1ParentInvitationsRoute,
  postV1AccountsRoute,
  postV1NameAcceptRoute,
  postV1NameDeclineRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
