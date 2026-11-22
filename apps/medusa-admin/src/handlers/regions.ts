import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRegionsIdRoute,
  getAdminRegionsIdRoute,
  getAdminRegionsRoute,
  postAdminRegionsIdRoute,
  postAdminRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app
  .openapi(getAdminRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
