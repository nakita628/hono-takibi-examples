import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BetaLicenseAgreementsIdAppRoute,
  getV1BetaLicenseAgreementsIdRoute,
  getV1BetaLicenseAgreementsRoute,
  patchV1BetaLicenseAgreementsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaLicenseAgreementsHandler = app
  .openapi(getV1BetaLicenseAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaLicenseAgreementsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
