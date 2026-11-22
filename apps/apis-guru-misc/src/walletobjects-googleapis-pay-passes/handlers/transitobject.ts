import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1TransitObjectResourceIdRoute,
  getWalletobjectsV1TransitObjectRoute,
  patchWalletobjectsV1TransitObjectResourceIdRoute,
  postWalletobjectsV1TransitObjectResourceIdAddMessageRoute,
  postWalletobjectsV1TransitObjectRoute,
  putWalletobjectsV1TransitObjectResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transitobjectHandler = app
  .openapi(getWalletobjectsV1TransitObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1TransitObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1TransitObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1TransitObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1TransitObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1TransitObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
