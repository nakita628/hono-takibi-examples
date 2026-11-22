import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getKGuestGuestSpaceIdV1FieldAclJsonRoute,
  getKV1FieldAclJsonRoute,
  putKGuestGuestSpaceIdV1FieldAclJsonRoute,
  putKV1FieldAclJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fieldsHandler = app
  .openapi(getKGuestGuestSpaceIdV1FieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1FieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1FieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1FieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
