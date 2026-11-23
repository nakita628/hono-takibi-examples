import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactPropertiesIdRoute,
  getContactPropertiesIdRoute,
  getContactPropertiesRoute,
  patchContactPropertiesIdRoute,
  postContactPropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactPropertiesHandler = app
  .openapi(postContactPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
