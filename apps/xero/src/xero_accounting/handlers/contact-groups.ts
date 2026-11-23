import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactGroupsContactGroupIDContactsContactIDRoute,
  deleteContactGroupsContactGroupIDContactsRoute,
  getContactGroupsContactGroupIDRoute,
  getContactGroupsRoute,
  postContactGroupsContactGroupIDRoute,
  putContactGroupsContactGroupIDContactsRoute,
  putContactGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactGroupsHandler = app
  .openapi(getContactGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactGroupsContactGroupIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactGroupsContactGroupIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactGroupsContactGroupIDContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactGroupsContactGroupIDContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactGroupsContactGroupIDContactsContactIDRoute, (c) => {
    throw new Error('Not implemented')
  })
