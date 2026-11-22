import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHubBusinessGroupsIdMenusRoute,
  getHubMenusAllRoute,
  getHubMenusRoute,
  getHubSpacesSpaceIdMenusRoute,
  postHubDocumentsRoute,
  postHubPayslipsRoute,
  postHubSpacesSpaceIdDocumentsRoute,
  postHubSpacesSpaceIdPayslipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hubHandler = app
  .openapi(getHubBusinessGroupsIdMenusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHubMenusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHubMenusAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubPayslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubSpacesSpaceIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHubSpacesSpaceIdMenusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubSpacesSpaceIdPayslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
