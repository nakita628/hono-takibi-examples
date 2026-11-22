import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPrintPrintersMicrosoftGraphCreateRoute,
  postPrintPrintersPrinterIdMicrosoftGraphRestoreFactoryDefaultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printActionsHandler = app
  .openapi(postPrintPrintersMicrosoftGraphCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdMicrosoftGraphRestoreFactoryDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
