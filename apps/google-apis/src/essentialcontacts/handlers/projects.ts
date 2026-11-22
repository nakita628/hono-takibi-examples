import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentContactsComputeRoute,
  getV1ParentContactsRoute,
  patchV1NameRoute,
  postV1ParentContactsRoute,
  postV1ResourceContactsSendTestMessageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentContactsComputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceContactsSendTestMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
