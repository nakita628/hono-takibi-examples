import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLicenseeLicenseeNumberRoute,
  getLicenseeLicenseeNumberRoute,
  getLicenseeRoute,
  postLicenseeLicenseeNumberRoute,
  postLicenseeLicenseeNumberTransferRoute,
  postLicenseeLicenseeNumberValidateRoute,
  postLicenseeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseeHandler = app
  .openapi(getLicenseeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLicenseeLicenseeNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicenseeLicenseeNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseeLicenseeNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseeLicenseeNumberTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseeLicenseeNumberValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
