import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdConversionsourcesConversionSourceIdRoute,
  getMerchantIdConversionsourcesConversionSourceIdRoute,
  getMerchantIdConversionsourcesRoute,
  patchMerchantIdConversionsourcesConversionSourceIdRoute,
  postMerchantIdConversionsourcesConversionSourceIdUndeleteRoute,
  postMerchantIdConversionsourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversionsourcesHandler = app
  .openapi(getMerchantIdConversionsourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdConversionsourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdConversionsourcesConversionSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdConversionsourcesConversionSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdConversionsourcesConversionSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdConversionsourcesConversionSourceIdUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
