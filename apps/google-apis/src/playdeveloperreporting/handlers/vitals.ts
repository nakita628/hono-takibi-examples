import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1NameRoute,
  getV1beta1ParentErrorIssuesSearchRoute,
  getV1beta1ParentErrorReportsSearchRoute,
  postV1beta1NameQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vitalsHandler = app
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentErrorIssuesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentErrorReportsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
