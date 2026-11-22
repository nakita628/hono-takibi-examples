import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingSuppliersIdRoute,
  getAccountingSuppliersIdRoute,
  getAccountingSuppliersRoute,
  patchAccountingSuppliersIdRoute,
  postAccountingSuppliersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suppliersHandler = app
  .openapi(getAccountingSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingSuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingSuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingSuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
