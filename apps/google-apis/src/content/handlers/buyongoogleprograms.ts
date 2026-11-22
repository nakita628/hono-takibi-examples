import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdBuyongoogleprogramsRegionCodeRoute,
  patchMerchantIdBuyongoogleprogramsRegionCodeRoute,
  postMerchantIdBuyongoogleprogramsRegionCodeActivateRoute,
  postMerchantIdBuyongoogleprogramsRegionCodeOnboardRoute,
  postMerchantIdBuyongoogleprogramsRegionCodePauseRoute,
  postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buyongoogleprogramsHandler = app
  .openapi(getMerchantIdBuyongoogleprogramsRegionCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdBuyongoogleprogramsRegionCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdBuyongoogleprogramsRegionCodeActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdBuyongoogleprogramsRegionCodeOnboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdBuyongoogleprogramsRegionCodePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
