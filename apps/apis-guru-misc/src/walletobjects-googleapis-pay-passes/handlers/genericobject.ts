import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1GenericObjectResourceIdRoute,
  getWalletobjectsV1GenericObjectRoute,
  patchWalletobjectsV1GenericObjectResourceIdRoute,
  postWalletobjectsV1GenericObjectRoute,
  putWalletobjectsV1GenericObjectResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const genericobjectHandler = app
  .openapi(getWalletobjectsV1GenericObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GenericObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GenericObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1GenericObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1GenericObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
