import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFieldsCollectionIdRoute,
  getFieldsCollectionIdRoute,
  getFieldsCollectionRoute,
  getFieldsRoute,
  patchFieldsCollectionIdRoute,
  postFieldsCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fieldsHandler = app
  .openapi(getFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFieldsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFieldsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFieldsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFieldsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFieldsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
