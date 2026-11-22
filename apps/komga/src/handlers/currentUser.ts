import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2UsersMeAuthenticationActivityRoute,
  getApiV2UsersMeRoute,
  patchApiV2UsersMePasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const currentUserHandler = app
  .openapi(getApiV2UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeAuthenticationActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersMePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
