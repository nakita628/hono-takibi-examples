import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DatacenterDatacenterIdPrefixesRoute,
  getV1DatacenterDatacenterIdRoute,
  getV1DatacenterIpIpAddressRoute,
  postV1DatacenterPrefixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datacenterInformationHandler = app
  .openapi(getV1DatacenterIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatacenterPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatacenterDatacenterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatacenterDatacenterIdPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
