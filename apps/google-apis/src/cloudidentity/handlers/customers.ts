import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1NameIsInvitableUserRoute,
  getV1beta1ParentUserinvitationsRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameIsInvitableUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentUserinvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
