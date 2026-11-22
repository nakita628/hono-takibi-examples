import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSpendLimitsProductRoute,
  getSpendLimitsRoute,
  patchSpendLimitsProductRoute,
  postSpendLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spendLimitsHandler = app
  .openapi(getSpendLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpendLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpendLimitsProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSpendLimitsProductRoute, (c) => {
    throw new Error('Not implemented')
  })
