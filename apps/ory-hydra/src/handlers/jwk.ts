import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminKeysSetKidRoute,
  deleteAdminKeysSetRoute,
  getAdminKeysSetKidRoute,
  getAdminKeysSetRoute,
  postAdminKeysSetRoute,
  putAdminKeysSetKidRoute,
  putAdminKeysSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jwkHandler = app
  .openapi(deleteAdminKeysSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminKeysSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminKeysSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminKeysSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminKeysSetKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminKeysSetKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminKeysSetKidRoute, (c) => {
    throw new Error('Not implemented')
  })
