import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPartnerCustomerCreateRoute,
  postPartnerCustomerEnableRoute,
  postPartnerCustomerGetRoute,
  postPartnerCustomerOauthInstitutionsGetRoute,
  postPartnerCustomerRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partnerHandler = app
  .openapi(postPartnerCustomerCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerOauthInstitutionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
