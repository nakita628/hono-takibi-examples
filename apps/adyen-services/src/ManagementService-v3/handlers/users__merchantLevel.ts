import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdUsersRoute,
  getMerchantsMerchantIdUsersUserIdRoute,
  patchMerchantsMerchantIdUsersUserIdRoute,
  postMerchantsMerchantIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const users__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
