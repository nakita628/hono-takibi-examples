import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaNameRoute,
  getV1betaParentExecutionsRoute,
  postV1betaNameCancelRoute,
  postV1betaParentExecutionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
