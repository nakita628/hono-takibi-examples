import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DocumentPropertiesDocumentPropertiesIdRoute,
  getV1DocumentPropertiesDocumentTypeDocumentIdRoute,
  postV1DocumentPropertiesRoute,
  putV1DocumentPropertiesDocumentPropertiesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentPropertiesHandler = app
  .openapi(postV1DocumentPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DocumentPropertiesDocumentPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DocumentPropertiesDocumentPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DocumentPropertiesDocumentTypeDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
