import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdLabelsRoute,
  patchAdAccountsAdAccountIdLabelsRoute,
  postAdAccountsAdAccountIdLabelsLabelIdApplyRoute,
  postAdAccountsAdAccountIdLabelsLabelIdRemoveRoute,
  postAdAccountsAdAccountIdLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getAdAccountsAdAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLabelsLabelIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLabelsLabelIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
