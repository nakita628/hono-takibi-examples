import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
  deleteServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRoute,
  getServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute,
  patchServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
  patchServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  postServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute,
  postServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsAppRoleAssignmentHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdAppRoleAssignedToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteServicePrincipalsServicePrincipalIdAppRoleAssignedToAppRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdAppRoleAssignedToCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteServicePrincipalsServicePrincipalIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdAppRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
