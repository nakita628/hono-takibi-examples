import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdMobileCarriersIdRoute,
  getUserprofilesProfileIdMobileCarriersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobileCarriersHandler = app
  .openapi(getUserprofilesProfileIdMobileCarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdMobileCarriersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
