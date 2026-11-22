import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeAgreementAcceptancesAgreementAcceptanceIdRoute,
  getMeAgreementAcceptancesCountRoute,
  getMeAgreementAcceptancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meAgreementAcceptanceHandler = app
  .openapi(getMeAgreementAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAgreementAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAgreementAcceptancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
