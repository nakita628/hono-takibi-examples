import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicesServiceIdDeploysDeployIdRoute,
  getServicesServiceIdDeploysRoute,
  postServicesServiceIdDeploysDeployIdCancelRoute,
  postServicesServiceIdDeploysRoute,
  postServicesServiceIdRollbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploysHandler = app
  .openapi(getServicesServiceIdDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdDeploysDeployIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
