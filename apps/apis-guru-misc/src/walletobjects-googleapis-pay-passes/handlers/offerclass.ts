import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1OfferClassResourceIdRoute,
  getWalletobjectsV1OfferClassRoute,
  patchWalletobjectsV1OfferClassResourceIdRoute,
  postWalletobjectsV1OfferClassResourceIdAddMessageRoute,
  postWalletobjectsV1OfferClassRoute,
  putWalletobjectsV1OfferClassResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offerclassHandler = app
  .openapi(getWalletobjectsV1OfferClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1OfferClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1OfferClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1OfferClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1OfferClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1OfferClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
