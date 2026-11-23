import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeveloperAccountsDeveloperAccountIdRoute,
  getDeveloperAccountsDeveloperAccountIdRoute,
  getDeveloperAccountsRoute,
  patchDeveloperAccountsDeveloperAccountIdRoute,
  postDeveloperAccountsDeveloperAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const developerAccountsHandler = app
  .openapi(getDeveloperAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeveloperAccountsDeveloperAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeveloperAccountsDeveloperAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeveloperAccountsDeveloperAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeveloperAccountsDeveloperAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
