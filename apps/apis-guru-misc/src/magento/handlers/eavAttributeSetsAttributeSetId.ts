import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EavAttributeSetsAttributeSetIdRoute,
  getV1EavAttributeSetsAttributeSetIdRoute,
  putV1EavAttributeSetsAttributeSetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eavAttributeSetsAttributeSetIdHandler = app
  .openapi(deleteV1EavAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EavAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EavAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
