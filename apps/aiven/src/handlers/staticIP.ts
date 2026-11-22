import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectStaticIpsStaticIpAddressIdAssociationRoute,
  deleteProjectProjectStaticIpsStaticIpAddressIdRoute,
  getProjectProjectStaticIpAvailabilityRoute,
  getProjectProjectStaticIpsRoute,
  patchProjectProjectStaticIpsStaticIpAddressIdRoute,
  postProjectProjectStaticIpsRoute,
  postProjectProjectStaticIpsStaticIpAddressIdAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const staticIPHandler = app
  .openapi(postProjectProjectStaticIpsStaticIpAddressIdAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectStaticIpsStaticIpAddressIdAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectStaticIpAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProjectStaticIpsStaticIpAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectStaticIpsStaticIpAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectStaticIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectStaticIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
