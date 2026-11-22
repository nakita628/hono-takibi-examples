import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsIdOrNameDaemonsRoute,
  postV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestartRoute,
  putV1ProjectsIdOrNameDaemonsDaemonNameInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const daemonsHandler = app
  .openapi(getV1ProjectsIdOrNameDaemonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsIdOrNameDaemonsDaemonNameInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
