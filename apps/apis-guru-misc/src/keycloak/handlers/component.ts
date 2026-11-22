import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmComponentsIdRoute,
  getRealmComponentsIdRoute,
  getRealmComponentsIdSubComponentTypesRoute,
  getRealmComponentsRoute,
  postRealmComponentsRoute,
  putRealmComponentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const componentHandler = app
  .openapi(getRealmComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmComponentsIdSubComponentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
