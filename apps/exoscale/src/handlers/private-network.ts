import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrivateNetworkIdFieldRoute,
  deletePrivateNetworkIdRoute,
  getPrivateNetworkIdRoute,
  getPrivateNetworkRoute,
  postPrivateNetworkRoute,
  putPrivateNetworkIdAttachRoute,
  putPrivateNetworkIdDetachRoute,
  putPrivateNetworkIdRoute,
  putPrivateNetworkIdUpdateIpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privateNetworkHandler = app
  .openapi(putPrivateNetworkIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrivateNetworkIdUpdateIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivateNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrivateNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrivateNetworkIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrivateNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivateNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrivateNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrivateNetworkIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
