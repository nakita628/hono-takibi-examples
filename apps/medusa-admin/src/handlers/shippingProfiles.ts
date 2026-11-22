import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminShippingProfilesIdRoute,
  getAdminShippingProfilesIdRoute,
  getAdminShippingProfilesRoute,
  postAdminShippingProfilesIdRoute,
  postAdminShippingProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shippingProfilesHandler = app
  .openapi(getAdminShippingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminShippingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
