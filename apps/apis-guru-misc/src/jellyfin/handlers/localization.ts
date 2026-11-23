import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLocalizationCountriesRoute,
  getLocalizationCulturesRoute,
  getLocalizationOptionsRoute,
  getLocalizationParentalRatingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const localizationHandler = app
  .openapi(getLocalizationCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocalizationCulturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocalizationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocalizationParentalRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
