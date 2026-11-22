import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ConnectionsCreateRoute,
  postV1ConnectionsDeleteRoute,
  postV1ConnectionsGetRoute,
  postV1ConnectionsListAllRoute,
  postV1ConnectionsListRoute,
  postV1ConnectionsResetRoute,
  postV1ConnectionsSearchRoute,
  postV1ConnectionsSyncRoute,
  postV1ConnectionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionHandler = app
  .openapi(postV1ConnectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
