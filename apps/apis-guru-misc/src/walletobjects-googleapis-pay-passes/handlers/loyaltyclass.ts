import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1LoyaltyClassResourceIdRoute,
  getWalletobjectsV1LoyaltyClassRoute,
  patchWalletobjectsV1LoyaltyClassResourceIdRoute,
  postWalletobjectsV1LoyaltyClassResourceIdAddMessageRoute,
  postWalletobjectsV1LoyaltyClassRoute,
  putWalletobjectsV1LoyaltyClassResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loyaltyclassHandler = app
  .openapi(getWalletobjectsV1LoyaltyClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1LoyaltyClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1LoyaltyClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1LoyaltyClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
