import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAirtravelMultilegConfirmCarbonOffsetRoute,
  patchAirtravelMultilegConfirmPaymentRoute,
  patchAirtravelMultilegConfirmPlantingRoute,
  patchAirtravelMultilegConfirmTransactionRoute,
  postAirtravelMultilegRoute,
} from '../routes'

const app = new OpenAPIHono()

export const airtravelMultilegHandler = app
  .openapi(postAirtravelMultilegRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAirtravelMultilegConfirmCarbonOffsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAirtravelMultilegConfirmPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAirtravelMultilegConfirmPlantingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAirtravelMultilegConfirmTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
