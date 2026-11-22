import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EndUserLicenseAgreementsIdRoute,
  getV1EndUserLicenseAgreementsIdRoute,
  getV1EndUserLicenseAgreementsIdTerritoriesRoute,
  patchV1EndUserLicenseAgreementsIdRoute,
  postV1EndUserLicenseAgreementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endUserLicenseAgreementsHandler = app
  .openapi(postV1EndUserLicenseAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EndUserLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EndUserLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EndUserLicenseAgreementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EndUserLicenseAgreementsIdTerritoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
