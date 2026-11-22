import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServiceProfilesIdRoute,
  getServiceProfilesIdRoute,
  getServiceProfilesRoute,
  postServiceProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceProfilesHandler = app
  .openapi(postServiceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServiceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
