import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDCurrencyCloudBeneficiaryItemIdRoute,
  getUserUserIDCurrencyCloudBeneficiaryRoute,
  postUserUserIDCurrencyCloudBeneficiaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const currencyCloudBeneficiaryHandler = app
  .openapi(getUserUserIDCurrencyCloudBeneficiaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDCurrencyCloudBeneficiaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCurrencyCloudBeneficiaryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
