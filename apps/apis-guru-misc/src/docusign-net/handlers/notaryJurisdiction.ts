import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute,
  getV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute,
  getV21CurrentUserNotaryJurisdictionsRoute,
  postV21CurrentUserNotaryJurisdictionsRoute,
  putV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notaryJurisdictionHandler = app
  .openapi(getV21CurrentUserNotaryJurisdictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21CurrentUserNotaryJurisdictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21CurrentUserNotaryJurisdictionsJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
