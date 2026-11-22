import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdLeadFormsLeadFormIdRoute,
  getAdAccountsAdAccountIdLeadFormsRoute,
  patchAdAccountsAdAccountIdLeadFormsRoute,
  postAdAccountsAdAccountIdLeadFormsLeadFormIdTestRoute,
  postAdAccountsAdAccountIdLeadFormsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leadFormsHandler = app
  .openapi(getAdAccountsAdAccountIdLeadFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLeadFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdLeadFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLeadFormsLeadFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLeadFormsLeadFormIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
