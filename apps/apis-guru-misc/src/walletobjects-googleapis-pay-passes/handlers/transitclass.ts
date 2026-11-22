import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1TransitClassResourceIdRoute,
  getWalletobjectsV1TransitClassRoute,
  patchWalletobjectsV1TransitClassResourceIdRoute,
  postWalletobjectsV1TransitClassResourceIdAddMessageRoute,
  postWalletobjectsV1TransitClassRoute,
  putWalletobjectsV1TransitClassResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transitclassHandler = app
  .openapi(getWalletobjectsV1TransitClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1TransitClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1TransitClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1TransitClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1TransitClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1TransitClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
