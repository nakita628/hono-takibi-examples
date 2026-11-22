import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConstantsKeyRoute,
  getV1ConstantsKeyReferencesRoute,
  getV1ConstantsKeyRoute,
  getV1ConstantsRoute,
  postV1ConstantsKeyArchiveRoute,
  postV1ConstantsKeyRoute,
  postV1ConstantsKeyUnarchiveRoute,
  postV1ConstantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const constantsHandler = app
  .openapi(getV1ConstantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConstantsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsKeyArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
