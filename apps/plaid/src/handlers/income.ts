import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIncomeVerificationCreateRoute,
  postIncomeVerificationDocumentsDownloadRoute,
  postIncomeVerificationPaystubsGetRoute,
  postIncomeVerificationPrecheckRoute,
  postIncomeVerificationTaxformsGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incomeHandler = app
  .openapi(postIncomeVerificationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationPaystubsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationDocumentsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationTaxformsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationPrecheckRoute, (c) => {
    throw new Error('Not implemented')
  })
