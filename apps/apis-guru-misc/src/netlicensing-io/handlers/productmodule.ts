import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProductmoduleProductModuleNumberRoute,
  getProductmoduleProductModuleNumberRoute,
  getProductmoduleRoute,
  postProductmoduleProductModuleNumberRoute,
  postProductmoduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productmoduleHandler = app
  .openapi(getProductmoduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductmoduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductmoduleProductModuleNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductmoduleProductModuleNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductmoduleProductModuleNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
