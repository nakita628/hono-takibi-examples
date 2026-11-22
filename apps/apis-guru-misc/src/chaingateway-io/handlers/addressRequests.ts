import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDeleteAddressRoute,
  postExportAddressRoute,
  postImportAddressRoute,
  postListAddressesRoute,
  postNewAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressRequestsHandler = app
  .openapi(postDeleteAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNewAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
