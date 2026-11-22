import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmComponentsIdRoute,
  getAdminRealmsRealmComponentsIdRoute,
  getAdminRealmsRealmComponentsIdSubComponentTypesRoute,
  getAdminRealmsRealmComponentsRoute,
  postAdminRealmsRealmComponentsRoute,
  putAdminRealmsRealmComponentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const componentHandler = app
  .openapi(getAdminRealmsRealmComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmComponentsIdSubComponentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
