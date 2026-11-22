import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRoute,
  postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunRoute,
  postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerListUploadsHandler = app
  .openapi(postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
