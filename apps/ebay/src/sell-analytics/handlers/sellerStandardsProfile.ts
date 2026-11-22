import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSellerStandardsProfileProgramCycleRoute,
  getSellerStandardsProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sellerStandardsProfileHandler = app
  .openapi(getSellerStandardsProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerStandardsProfileProgramCycleRoute, (c) => {
    throw new Error('Not implemented')
  })
