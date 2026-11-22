import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberRoute,
  getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Route,
  getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Route,
  postApi2JsonPhoneCodeBatchRoute,
  postApi2JsonPhoneCodeGeoBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const socialHandler = app
  .openapi(getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonPhoneCodeBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonPhoneCodeGeoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
