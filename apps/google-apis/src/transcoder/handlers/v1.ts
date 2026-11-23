import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentJobTemplatesRoute,
  postV1ParentJobsRoute,
  postV1ParentJobTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentJobTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentJobTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
