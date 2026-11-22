import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPortoutsEventsIdRoute,
  getPortoutsEventsRoute,
  getPortoutsIdCommentsRoute,
  getPortoutsIdRoute,
  getPortoutsIdSupportingDocumentsRoute,
  getPortoutsRejectionsPortoutIdRoute,
  getPortoutsReportsIdRoute,
  getPortoutsReportsRoute,
  getPortoutsRoute,
  patchPortoutsIdStatusRoute,
  postPortoutsEventsIdRepublishRoute,
  postPortoutsIdCommentsRoute,
  postPortoutsIdSupportingDocumentsRoute,
  postPortoutsReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberPortoutHandler = app
  .openapi(getPortoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortoutsEventsIdRepublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsRejectionsPortoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortoutsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortoutsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortoutsIdSupportingDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortoutsIdSupportingDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPortoutsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
