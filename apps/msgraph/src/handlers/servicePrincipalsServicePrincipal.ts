import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsAppIdAppIdRoute,
  deleteServicePrincipalsServicePrincipalIdRoute,
  getServicePrincipalsAppIdAppIdRoute,
  getServicePrincipalsCountRoute,
  getServicePrincipalsRoute,
  getServicePrincipalsServicePrincipalIdRoute,
  patchServicePrincipalsAppIdAppIdRoute,
  patchServicePrincipalsServicePrincipalIdRoute,
  postServicePrincipalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsServicePrincipalHandler = app
  .openapi(getServicePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicePrincipalsServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsAppIdAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicePrincipalsAppIdAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsAppIdAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
