import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  apikeysHandler,
  apikeysModeImportFormatHandler,
  clientcertificatesHandler,
  domainnamesHandler,
  restapisHandler,
  restapisModeImportHandler,
  sdktypesHandler,
  tagsHandler,
  usageplansHandler,
  vpclinksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apikeysHandler)
  .route('/', restapisHandler)
  .route('/', domainnamesHandler)
  .route('/', usageplansHandler)
  .route('/', vpclinksHandler)
  .route('/', clientcertificatesHandler)
  .route('/', accountHandler)
  .route('/', sdktypesHandler)
  .route('/', tagsHandler)
  .route('/', apikeysModeImportFormatHandler)
  .route('/', restapisModeImportHandler)

export default app
