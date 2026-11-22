import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdCollectionstatusesCollectionIdRoute,
  getMerchantIdCollectionstatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionstatusesHandler = app
  .openapi(getMerchantIdCollectionstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdCollectionstatusesCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
