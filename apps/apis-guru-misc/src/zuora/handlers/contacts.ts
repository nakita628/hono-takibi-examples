import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectContactIdRoute,
  getV1ObjectContactIdRoute,
  postV1ObjectContactRoute,
  putV1ContactsContactIdScrubRoute,
  putV1ObjectContactIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(putV1ContactsContactIdScrubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
