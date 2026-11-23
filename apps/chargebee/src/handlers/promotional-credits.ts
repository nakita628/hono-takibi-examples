import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPromotionalCreditsAccountCreditIdRoute,
  getPromotionalCreditsRoute,
  postPromotionalCreditsAddRoute,
  postPromotionalCreditsDeductRoute,
  postPromotionalCreditsSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promotionalCreditsHandler = app
  .openapi(getPromotionalCreditsAccountCreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPromotionalCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPromotionalCreditsDeductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPromotionalCreditsSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPromotionalCreditsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
