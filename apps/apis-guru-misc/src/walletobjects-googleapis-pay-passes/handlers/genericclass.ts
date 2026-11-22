import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1GenericClassResourceIdRoute,
  getWalletobjectsV1GenericClassRoute,
  patchWalletobjectsV1GenericClassResourceIdRoute,
  postWalletobjectsV1GenericClassRoute,
  putWalletobjectsV1GenericClassResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const genericclassHandler = app
  .openapi(getWalletobjectsV1GenericClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GenericClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GenericClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1GenericClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1GenericClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
