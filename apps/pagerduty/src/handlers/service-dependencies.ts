import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServiceDependenciesBusinessServicesIdRoute,
  getServiceDependenciesTechnicalServicesIdRoute,
  postServiceDependenciesAssociateRoute,
  postServiceDependenciesDisassociateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceDependenciesHandler = app
  .openapi(postServiceDependenciesAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceDependenciesBusinessServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServiceDependenciesDisassociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceDependenciesTechnicalServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
