import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectApplicationsIdRoute,
  deleteConnectClientSecretsIdRoute,
  getConnectApplicationsIdClientSecretsRoute,
  getConnectApplicationsIdRoute,
  getConnectApplicationsRoute,
  postConnectApplicationsIdClientSecretsRoute,
  postConnectApplicationsRoute,
  putConnectApplicationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectHandler = app
  .openapi(getConnectApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectApplicationsIdClientSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectApplicationsIdClientSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectClientSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
