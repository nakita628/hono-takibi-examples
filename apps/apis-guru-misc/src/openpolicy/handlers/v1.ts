import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DataPathRoute,
  deleteV1PoliciesIdRoute,
  getV1ConfigRoute,
  getV1DataPathRoute,
  getV1PoliciesIdRoute,
  getV1PoliciesRoute,
  getV1QueryRoute,
  patchV1DataPathRoute,
  postV1CompileRoute,
  postV1DataPathRoute,
  postV1QueryRoute,
  putV1DataPathRoute,
  putV1PoliciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1CompileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QueryRoute, (c) => {
    throw new Error('Not implemented')
  })
