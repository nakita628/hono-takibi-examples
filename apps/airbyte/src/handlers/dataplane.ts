import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DataplanesCreateRoute,
  postV1DataplanesDeleteRoute,
  postV1DataplanesHeartbeatRoute,
  postV1DataplanesInitializeRoute,
  postV1DataplanesListRoute,
  postV1DataplanesSecretStoragesListRoute,
  postV1DataplanesTokenRoute,
  postV1DataplanesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataplaneHandler = app
  .openapi(postV1DataplanesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesSecretStoragesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataplanesInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
