import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMePermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getMePermissionGrantsCountRoute,
  getMePermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getMePermissionGrantsRoute,
  patchMePermissionGrantsResourceSpecificPermissionGrantIdRoute,
  postMePermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meResourceSpecificPermissionGrantHandler = app
  .openapi(getMePermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
