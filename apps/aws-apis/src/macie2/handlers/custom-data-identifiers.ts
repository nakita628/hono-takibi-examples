import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomDataIdentifiersIdRoute,
  getCustomDataIdentifiersIdRoute,
  postCustomDataIdentifiersGetRoute,
  postCustomDataIdentifiersListRoute,
  postCustomDataIdentifiersRoute,
  postCustomDataIdentifiersTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customDataIdentifiersHandler = app
  .openapi(postCustomDataIdentifiersGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomDataIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomDataIdentifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomDataIdentifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomDataIdentifiersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomDataIdentifiersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
