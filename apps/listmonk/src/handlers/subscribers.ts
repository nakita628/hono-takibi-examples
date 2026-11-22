import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubscribersIdBouncesRoute,
  deleteSubscribersIdRoute,
  deleteSubscribersRoute,
  getSubscribersIdBouncesRoute,
  getSubscribersIdExportRoute,
  getSubscribersIdRoute,
  getSubscribersRoute,
  postSubscribersIdOptinRoute,
  postSubscribersQueryDeleteRoute,
  postSubscribersRoute,
  putSubscribersBlocklistRoute,
  putSubscribersIdBlocklistRoute,
  putSubscribersIdRoute,
  putSubscribersListsIdRoute,
  putSubscribersListsRoute,
  putSubscribersQueryBlocklistRoute,
  putSubscribersQueryListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscribersHandler = app
  .openapi(getSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscribersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscribersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscribersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscribersListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscribersListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscribersBlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscribersIdBlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscribersIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscribersIdBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscribersIdBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscribersIdOptinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscribersQueryDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscribersQueryBlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscribersQueryListsRoute, (c) => {
    throw new Error('Not implemented')
  })
