import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute,
  getV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute,
  getV21AccountsAccountIdSettingsBccEmailArchivesRoute,
  postV21AccountsAccountIdSettingsBccEmailArchivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bccEmailArchiveHandler = app
  .openapi(getV21AccountsAccountIdSettingsBccEmailArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdSettingsBccEmailArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
