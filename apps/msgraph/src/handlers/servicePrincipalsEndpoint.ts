import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  getServicePrincipalsServicePrincipalIdEndpointsCountRoute,
  getServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  getServicePrincipalsServicePrincipalIdEndpointsRoute,
  patchServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute,
  postServicePrincipalsServicePrincipalIdEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsEndpointHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsServicePrincipalIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdEndpointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
