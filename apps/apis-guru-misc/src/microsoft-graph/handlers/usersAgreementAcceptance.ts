import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdAgreementAcceptancesAgreementAcceptanceIdRoute,
  getUsersUserIdAgreementAcceptancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersAgreementAcceptanceHandler = app
  .openapi(getUsersUserIdAgreementAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAgreementAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
