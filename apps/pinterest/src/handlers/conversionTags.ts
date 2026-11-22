import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdConversionTagsConversionTagIdRoute,
  getAdAccountsAdAccountIdConversionTagsOcpmEligibleRoute,
  getAdAccountsAdAccountIdConversionTagsPageVisitRoute,
  getAdAccountsAdAccountIdConversionTagsRoute,
  postAdAccountsAdAccountIdConversionTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversionTagsHandler = app
  .openapi(postAdAccountsAdAccountIdConversionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionTagsOcpmEligibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionTagsPageVisitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionTagsConversionTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
