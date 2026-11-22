import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdRoute,
  getServicePrincipalsRoute,
  getServicePrincipalsServicePrincipalIdRoute,
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
  .openapi(deleteServicePrincipalsServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicePrincipalsServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
