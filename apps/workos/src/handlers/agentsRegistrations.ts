import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgentsRegistrationsIdRoute,
  patchAgentsClaimsAttemptsRoute,
  postAgentsCredentialsValidateRoute,
  postAgentsRegistrationsIdRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsRegistrationsHandler = app
  .openapi(patchAgentsClaimsAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsCredentialsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsRegistrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsRegistrationsIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
