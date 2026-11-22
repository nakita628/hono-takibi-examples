import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAquifersAquiferIdFilesRoute,
  getAquifersAquiferIdIndexRoute,
  getAquifersIndexRoute,
  getAquifersNamesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aquifersHandler = app
  .openapi(getAquifersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquifersNamesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquifersAquiferIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquifersAquiferIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
