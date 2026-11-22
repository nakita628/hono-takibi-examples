import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentPipelinesRoute,
  patchV1NameRoute,
  postV1NameRunRoute,
  postV1NameStopRoute,
  postV1ParentPipelinesRoute,
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
  .openapi(postV1NameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
