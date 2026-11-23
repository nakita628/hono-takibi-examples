import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierRoute,
  getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
  getCustomObjectInstancesCustomObjectTypeIdentifierRoute,
  postCustomObjectInstancesCustomObjectTypeIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectInstancesHandler = app
  .openapi(postCustomObjectInstancesCustomObjectTypeIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomObjectInstancesCustomObjectTypeIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomObjectInstancesCustomObjectTypeIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
