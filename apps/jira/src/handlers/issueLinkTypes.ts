import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
  getRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
  getRestApi3IssueLinkTypeRoute,
  postRestApi3IssueLinkTypeRoute,
  putRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueLinkTypesHandler = app
  .openapi(getRestApi3IssueLinkTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueLinkTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueLinkTypeIssueLinkTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueLinkTypeIssueLinkTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueLinkTypeIssueLinkTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
