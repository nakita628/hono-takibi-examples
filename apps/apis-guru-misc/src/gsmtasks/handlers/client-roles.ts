import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClientRolesIdIndexRoute,
  getClientRolesIndexRoute,
  patchClientRolesIdIndexRoute,
  postClientRolesIdNotifyIndexRoute,
  postClientRolesIndexRoute,
  putClientRolesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientRolesHandler = app
  .openapi(getClientRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClientRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClientRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientRolesIdNotifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
