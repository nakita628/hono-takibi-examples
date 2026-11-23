import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCardsCardIdRoute,
  getCardsCardIdRoute,
  getCardsCardIdSensitiveDetailsRoute,
  getCardsRoute,
  patchCardsCardIdRoute,
  postCardsCardIdFreezeRoute,
  postCardsCardIdLockRoute,
  postCardsCardIdUnfreezeRoute,
  postCardsCardIdUnlockRoute,
  postCardsRoute,
  putCardsCardIdContactsRoute,
  putCardsCardIdReferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardsHandler = app
  .openapi(getCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsCardIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCardsCardIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsCardIdFreezeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsCardIdUnfreezeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsCardIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsCardIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsCardIdSensitiveDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
