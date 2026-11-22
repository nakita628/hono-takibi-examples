import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdAudiencesAudienceIdRoute,
  getAdAccountsAdAccountIdAudiencesRoute,
  patchAdAccountsAdAccountIdAudiencesAudienceIdRoute,
  postAdAccountsAdAccountIdAudiencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audiencesHandler = app
  .openapi(postAdAccountsAdAccountIdAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAudiencesAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAudiencesAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
