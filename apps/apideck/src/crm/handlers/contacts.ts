import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmContactsIdRoute,
  getCrmContactsIdRoute,
  getCrmContactsRoute,
  patchCrmContactsIdRoute,
  postCrmContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getCrmContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
