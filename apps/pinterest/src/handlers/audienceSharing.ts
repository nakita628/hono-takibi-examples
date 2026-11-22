import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdAudiencesSharedAccountsRoute,
  getBusinessesBusinessIdAudiencesRoute,
  getBusinessesBusinessIdAudiencesSharedAccountsRoute,
  patchAdAccountsAdAccountIdAudiencesAdAccountsSharedRoute,
  patchAdAccountsAdAccountIdAudiencesBusinessesSharedRoute,
  patchBusinessesBusinessIdAudiencesAdAccountsSharedRoute,
  patchBusinessesBusinessIdAudiencesBusinessesSharedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audienceSharingHandler = app
  .openapi(patchAdAccountsAdAccountIdAudiencesAdAccountsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAudiencesBusinessesSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAudiencesSharedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdAudiencesAdAccountsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdAudiencesBusinessesSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAudiencesSharedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
