import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionRoute,
  getDoubleclicksearchV2CustomerCustomerIdConversionRoute,
  postDoubleclicksearchV2ConversionRoute,
  postDoubleclicksearchV2ConversionUpdateAvailabilityRoute,
  putDoubleclicksearchV2ConversionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversionHandler = app
  .openapi(
    getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDoubleclicksearchV2ConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDoubleclicksearchV2ConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDoubleclicksearchV2ConversionUpdateAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDoubleclicksearchV2CustomerCustomerIdConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
