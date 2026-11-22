import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalAddressesAddressRoute,
  getProjectsProjectGlobalAddressesAddressRoute,
  getProjectsProjectGlobalAddressesRoute,
  postProjectsProjectGlobalAddressesAddressMoveRoute,
  postProjectsProjectGlobalAddressesResourceSetLabelsRoute,
  postProjectsProjectGlobalAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalAddressesHandler = app
  .openapi(getProjectsProjectGlobalAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalAddressesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalAddressesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalAddressesAddressMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalAddressesResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
