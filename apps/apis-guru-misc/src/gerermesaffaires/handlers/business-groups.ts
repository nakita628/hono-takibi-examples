import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBusinessGroupsIdSpacesSpaceIdRoute,
  getBusinessGroupsAllRoute,
  getBusinessGroupsIdRoute,
  getBusinessGroupsIdSpacesRoute,
  getBusinessGroupsRoute,
  patchBusinessGroupsRoute,
  postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRoute,
  postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRoute,
  postBusinessGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessGroupsHandler = app
  .openapi(getBusinessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessGroupsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessGroupsIdSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessGroupsIdSpacesSpaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
