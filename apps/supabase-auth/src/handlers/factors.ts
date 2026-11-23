import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFactorsFactorIdRoute,
  deleteFactorsRecoveryCodesRoute,
  getFactorsRecoveryCodesRoute,
  postFactorsFactorIdChallengeRoute,
  postFactorsFactorIdVerifyRoute,
  postFactorsRecoveryCodesRegenerateRoute,
  postFactorsRecoveryCodesRoute,
  postFactorsRecoveryCodesVerifyRoute,
  postFactorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const factorsHandler = app
  .openapi(postFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsFactorIdChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsFactorIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFactorsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactorsRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFactorsRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsRecoveryCodesVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsRecoveryCodesRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
