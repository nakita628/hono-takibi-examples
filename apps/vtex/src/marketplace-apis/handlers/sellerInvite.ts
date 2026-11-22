import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  getSellerRegisterPvtSellerLeadsRoute,
  getSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  postSellerRegisterPvtSellerLeadsRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sellerInviteHandler = app
  .openapi(getSellerRegisterPvtSellerLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSellerRegisterPvtSellerLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSellerRegisterPvtSellerLeadsSellerLeadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellerLeadsSellerLeadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellerLeadsSellerLeadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
