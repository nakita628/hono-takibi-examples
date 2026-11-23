import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCatalogsNameRoute,
  getCatalogsNameRoute,
  getCatalogsRoute,
  patchCatalogsNameRoute,
  postCatalogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogsHandler = app
  .openapi(postCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
