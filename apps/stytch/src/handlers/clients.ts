import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ConnectedAppsClientsClientIdSecretsRotateCancelRoute,
  postV1ConnectedAppsClientsClientIdSecretsRotateRoute,
  postV1ConnectedAppsClientsClientIdSecretsRotateStartRoute,
  postV1M2mClientsClientIdSecretsRotateCancelRoute,
  postV1M2mClientsClientIdSecretsRotateRoute,
  postV1M2mClientsClientIdSecretsRotateStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(postV1ConnectedAppsClientsClientIdSecretsRotateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsClientIdSecretsRotateCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsClientIdSecretsRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsClientIdSecretsRotateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsClientIdSecretsRotateCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsClientIdSecretsRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
