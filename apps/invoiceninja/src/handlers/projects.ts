import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ProjectsIdRoute,
  getApiV1ProjectsCreateRoute,
  getApiV1ProjectsIdEditRoute,
  getApiV1ProjectsIdRoute,
  getApiV1ProjectsRoute,
  postApiV1ProjectsBulkRoute,
  postApiV1ProjectsIdUploadRoute,
  postApiV1ProjectsRoute,
  putApiV1ProjectsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getApiV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProjectsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProjectsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProjectsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProjectsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
