import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsContactIdSegmentsSegmentIdRoute,
  deleteContactsIdRoute,
  getContactsContactIdSegmentsRoute,
  getContactsContactIdTopicsRoute,
  getContactsIdRoute,
  getContactsImportsIdRoute,
  getContactsImportsRoute,
  getContactsRoute,
  patchContactsContactIdTopicsRoute,
  patchContactsIdRoute,
  postContactsContactIdSegmentsSegmentIdRoute,
  postContactsImportsRoute,
  postContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(postContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsContactIdSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactsContactIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
