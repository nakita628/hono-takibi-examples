import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute,
  deleteRestServicedeskapiOrganizationOrganizationIdRoute,
  deleteRestServicedeskapiOrganizationOrganizationIdUserRoute,
  deleteRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute,
  getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute,
  getRestServicedeskapiOrganizationOrganizationIdPropertyRoute,
  getRestServicedeskapiOrganizationOrganizationIdRoute,
  getRestServicedeskapiOrganizationOrganizationIdUserRoute,
  getRestServicedeskapiOrganizationRoute,
  getRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute,
  postRestServicedeskapiOrganizationOrganizationIdUserRoute,
  postRestServicedeskapiOrganizationRoute,
  postRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute,
  putRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getRestServicedeskapiOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiOrganizationOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiOrganizationOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiOrganizationOrganizationIdPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiOrganizationOrganizationIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiOrganizationOrganizationIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiOrganizationOrganizationIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
