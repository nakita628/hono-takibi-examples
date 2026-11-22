import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta2NameRoute,
  getV1beta2NameDownloadRoute,
  getV1beta2NameRoute,
  getV1beta2ParentModelsRoute,
  patchV1beta2NameRoute,
  postV1beta2ParentModelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
