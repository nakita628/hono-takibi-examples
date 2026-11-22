import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2OnrampMobileAttestationChallengesRoute,
  postV2OnrampMobileAttestationRegistrationsRoute,
  postV2OnrampMobileSessionsChallengesRoute,
  postV2OnrampMobileSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onrampApp2AppHandler = app
  .openapi(postV2OnrampMobileSessionsChallengesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampMobileSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampMobileAttestationChallengesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampMobileAttestationRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
