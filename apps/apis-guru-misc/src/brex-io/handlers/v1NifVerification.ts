import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1NifVerificationBasicCheckCountryRoute,
  postApiV1NifVerificationComprehensiveCheckCountryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1NifVerificationHandler = app
  .openapi(postApiV1NifVerificationBasicCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NifVerificationComprehensiveCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
