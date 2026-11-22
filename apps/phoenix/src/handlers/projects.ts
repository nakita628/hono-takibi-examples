import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdentifierRoute,
  getV1ProjectsProjectIdentifierRoute,
  getV1ProjectsRoute,
  patchV1ProjectsProjectIdentifierRetentionRoute,
  postV1ProjectsRoute,
  putV1ProjectsProjectIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdentifierRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
