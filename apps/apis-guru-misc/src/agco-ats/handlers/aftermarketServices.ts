import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AftermarketServicesCertificatesRoute,
  getApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute,
  getApiV2AftermarketServicesEnginesSerialNumberProductionDataRoute,
  getApiV2AftermarketServicesHelloRoute,
  getApiV2AftermarketServicesUserStatusesRoute,
  putApiV2AftermarketServicesECUsSerialNumberRoute,
  putApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute,
  putApiV2AftermarketServicesUserStatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aftermarketServicesHandler = app
  .openapi(getApiV2AftermarketServicesCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AftermarketServicesECUsSerialNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AftermarketServicesEnginesSerialNumberIQACodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AftermarketServicesEnginesSerialNumberProductionDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AftermarketServicesHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AftermarketServicesUserStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AftermarketServicesUserStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
