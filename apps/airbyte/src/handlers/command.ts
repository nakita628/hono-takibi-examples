import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1CommandsCancelRoute,
  postV1CommandsGetRoute,
  postV1CommandsOutputCheckRoute,
  postV1CommandsOutputConnectRoute,
  postV1CommandsOutputDiscoverRoute,
  postV1CommandsOutputReplicateRoute,
  postV1CommandsOutputSpecRoute,
  postV1CommandsRunCheckRoute,
  postV1CommandsRunConnectRoute,
  postV1CommandsRunDiscoverRoute,
  postV1CommandsRunReplicateRoute,
  postV1CommandsRunSpecRoute,
  postV1CommandsStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commandHandler = app
  .openapi(postV1CommandsRunCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunReplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRunSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputReplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsOutputSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
