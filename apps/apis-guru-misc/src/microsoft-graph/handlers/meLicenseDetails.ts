import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeLicenseDetailsLicenseDetailsIdRoute,
  getMeLicenseDetailsLicenseDetailsIdRoute,
  getMeLicenseDetailsRoute,
  patchMeLicenseDetailsLicenseDetailsIdRoute,
  postMeLicenseDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meLicenseDetailsHandler = app
  .openapi(getMeLicenseDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeLicenseDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeLicenseDetailsLicenseDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLicenseDetailsLicenseDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeLicenseDetailsLicenseDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
