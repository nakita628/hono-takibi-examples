import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdMemberOfRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsRoute,
  getServicePrincipalsServicePrincipalIdOwnersRefRoute,
  getServicePrincipalsServicePrincipalIdOwnersRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfRoute,
  postServicePrincipalsServicePrincipalIdOwnersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsDirectoryObjectHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdCreatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
