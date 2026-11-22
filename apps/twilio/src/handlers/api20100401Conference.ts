import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidConferencesJsonRoute,
  get20100401AccountsAccountSidConferencesSidJsonRoute,
  post20100401AccountsAccountSidConferencesSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401ConferenceHandler = app
  .openapi(get20100401AccountsAccountSidConferencesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidConferencesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidConferencesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
