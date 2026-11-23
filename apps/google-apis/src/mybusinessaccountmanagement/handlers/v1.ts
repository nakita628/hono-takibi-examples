import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1AccountsRoute,
  getV1NameRoute,
  getV1ParentAdminsRoute,
  getV1ParentInvitationsRoute,
  patchV1NameRoute,
  postV1AccountsRoute,
  postV1NameAcceptRoute,
  postV1NameDeclineRoute,
  postV1NameTransferRoute,
  postV1ParentAdminsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
