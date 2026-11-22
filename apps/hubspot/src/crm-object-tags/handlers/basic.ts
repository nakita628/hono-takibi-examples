import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjectTags202609ObjectTypeIdTagIdRoute,
  getCrmObjectTags202609ObjectTypeIdRoute,
  getCrmObjectTags202609ObjectTypeIdTagIdRoute,
  patchCrmObjectTags202609ObjectTypeIdTagIdRoute,
  postCrmObjectTags202609ObjectTypeIdRoute,
  putCrmObjectTags202609ObjectTypeIdTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjectTags202609ObjectTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjectTags202609ObjectTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjectTags202609ObjectTypeIdTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjectTags202609ObjectTypeIdTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjectTags202609ObjectTypeIdTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjectTags202609ObjectTypeIdTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
