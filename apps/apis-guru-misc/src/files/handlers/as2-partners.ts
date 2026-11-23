import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAs2PartnersIdRoute,
  getAs2PartnersIdRoute,
  getAs2PartnersRoute,
  patchAs2PartnersIdRoute,
  postAs2PartnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const as2PartnersHandler = app
  .openapi(getAs2PartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAs2PartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAs2PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAs2PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAs2PartnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
