import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReplicationsReplicationIDRoute,
  getReplicationsReplicationIDRoute,
  getReplicationsRoute,
  patchReplicationsReplicationIDRoute,
  postReplicationsReplicationIDValidateRoute,
  postReplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const replicationsHandler = app
  .openapi(getReplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReplicationsReplicationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReplicationsReplicationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReplicationsReplicationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReplicationsReplicationIDValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
