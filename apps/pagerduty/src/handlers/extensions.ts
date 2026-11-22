import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExtensionsIdRoute,
  getExtensionsIdRoute,
  getExtensionsRoute,
  postExtensionsIdEnableRoute,
  postExtensionsRoute,
  putExtensionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extensionsHandler = app
  .openapi(getExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExtensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExtensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtensionsIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
