import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeleteRoute,
  getGetRoute,
  patchPatchRoute,
  postPostRoute,
  putPutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpMethodsHandler = app
  .openapi(deleteDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPutRoute, (c) => {
    throw new Error('Not implemented')
  })
